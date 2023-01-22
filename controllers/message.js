const { text } = require("express");
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

exports.newMessage = async (req, res) => {
  try {
    // req body -> conversationId, sender  (id) , text
    const { conversationId, sender, text } = req.body;
    const newmess = await Message.create({
      conversationId: conversationId,
      sender: sender,
      text: text,
    });

    res.json({ status: true, newmess });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getMessage = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.json({ status: true, messages });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
