const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const applicantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: Number || String,
        required: true,
    },
    resume: {
       type: String,
    },
})
const Applied = mongoose.model("Applied", applicantSchema);
module.exports = Applied;


