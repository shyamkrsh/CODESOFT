const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    company: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: String,

    },
    description: {
        type: String,
        required: true,
    },
    requirements: [
        {
            type: String,
        },
    ],
    deadline: {
        type: String || Date,
    },
    companyLogo: {
            type: String,
            default: "https://cdn.imgbin.com/23/2/7/imgbin-vista360health-company-cartoon-comics-illustration-company-cartoon-g3EhkJPgy7seqepHqXsWTxGvi.jpg",
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
      
})

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;