const mongoose = require("mongoose");
const initData = require("./data.js");
const Job = require("../models/jobs.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/jobBoard";
main().then(() => {
    console.log(`connection successful`);
}).catch((err) => {
    console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
}

const addData = async(req, res) => {
    await Job.deleteMany({});
    await Job.insertMany(initData.data);
}
addData();