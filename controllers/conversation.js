const Conversation = require("../models/Conversation");

exports.newConv = async (req, res) => {
  try {
    const newConversation = await Conversation.create({
      members: [req.body.senderId, req.body.receiverId],
    });
    res.json({ status: true, newConversation });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getConv = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: {
        $in: [req.user.id],
      },
    });
    res.json({ status: true, conversation });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
