const { Schema, Types, model } = require("mongoose");

const requestSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: "User" },
    receiver: { type: Schema.Types.ObjectId, ref: "User" },
    status: {
        type: String,
        default: "pending",
        required: true,
        lowercase: true,
        enum: ["pending", "accepted", "rejected"]
    }
},
    {
        timestamps: true
    }
);

const Request = model("Request", requestSchema);
module.exports = Request;