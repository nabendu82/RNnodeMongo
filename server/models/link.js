const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema(
    {
        link: {
            type: String,
            trim: true,
            required: true,
        },
        title: {
            type: String,
            trim: true,
            required: true,
        },
        views: { type: Number, default: 0 }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Link", linkSchema);