const express = require("express");
const { userAuth } = require("../middelewares/auth");
const { Chat } = require("../models/chat");
const { ConnectionRequest } = require("../models/connectionRequest");
const chatRouter = express.Router();

chatRouter.get("/chat/:targetUserId", userAuth, async (req, res) => {
  try {
    const userId = req.user._id;
    const { targetUserId } = req.params;

    // check if the two users are connections or not before chat
    const isConnected = await ConnectionRequest.findOne({
      $or: [
        { fromUserId: userId, toUserId: targetUserId, status: "accepted" },
        { fromUserId: targetUserId, toUserId: userId, status: "accepted" },
      ],
    });
    if (!isConnected) {
      return res.status(403).send("You are not connected with this user");
    }

    let chat = await Chat.findOne({
      participants: {
        $all: [userId, targetUserId],
      },
    }).populate({ path: "messages.senderId", select: "firstName lastName" });

    if (!chat) {
      chat = new Chat({ participants: [userId, targetUserId], messages: [] });
      await chat.save();
    }
    res.json(chat);
  } catch (err) {
    console.log(err);
  }
});

module.exports = { chatRouter };
