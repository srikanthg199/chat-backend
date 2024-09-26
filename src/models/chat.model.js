const { Schema, Types, model } = require("mongoose");

const chatSchema = new Schema({
    name: { type: String, required: true },
    groupChat: { type: Boolean, default: false },
    creator: { type: Types.ObjectId, ref: "User" },
    members: [{ type: Types.ObjectId, ref: "User" }]
},
    {
        timestamps: true
    }
);

const Chat = model("Chat", chatSchema);
module.exports = Chat;