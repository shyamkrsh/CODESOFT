const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const Job = require("./jobs");
const Applied = require("./applied");

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    },
    username: {
        type: String,
        required: true,
    },
    city: String,
    savedJobs: {
        type: Schema.Types.ObjectId,
        ref: "Job",
    },
    applicants: [
        {
            type: Schema.Types.ObjectId,
            ref: "Applied",
        },
    ],
    userImage: {
        url: String,
        filename: String,
    },
})

userSchema.post('findOneAndDelete', async(user) => {
    if(user.applicants.length){
        await Applied.deleteMany({_id: {$in: user.applicants}});
    }
    await Job.deleteMany({owner: user._id});
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);