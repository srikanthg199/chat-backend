const { Schema, Types, model } = require("mongoose");

const messageSchema = new Schema({
    chatId: { type: Schema.Types.ObjectId, ref: "Chat" },
    sender: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true },
    attachments: [{
        public_id: { type: String, required: true },
        url: { type: String, required: true }
    }]
},
    {
        timestamps: true
    }
);

const Message = model("Message", messageSchema);
module.exports = Message;