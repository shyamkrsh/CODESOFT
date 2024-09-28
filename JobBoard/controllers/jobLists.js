const Job = require("../models/jobs");

module.exports.jobLists = async(req, res, next) => {
    const jobLists = await Job.find({});
    var searched = "";
    res.render("jobs/jobLists.ejs", {jobLists, searched});
}
module.exports.viewJob = async(req, res, next) => {
    let {id} = req.params;
    const job = await Job.findById(id);
    res.render("jobs/viewJob.ejs", {job});
}
module.exports.applyJob = (req, res, next) => {
    let {companyId} = req.params;
    res.render("jobs/apply.ejs", {companyId});
}
module.exports.postAjobForm = (req, res, next) => {
    res.render("jobs/postAjob.ejs");
}
module.exports.postAjob = async(req, res, next) => {
    let data = req.body;
    const newJob = await new Job({company: data.company, title: data.title, location: data.location, salary: data.salary, description: data.description, requirements: data.requirements, deadline: data.deadline, companyLogo: req.user.userImage.url});
    newJob.owner = req.user;
    newJob.save();
    res.redirect("/jobLists");
}
module.exports.searchJobs = async(req, res, next) => {
    var searched = req.body.jobName.split(" ").join("").toUpperCase();
    const jobLists = await Job.find({});
    res.render("jobs/jobLists.ejs", {jobLists, searched});
}
module.exports.searchJobsHome = async(req, res, next) => {
    var searched = req.body.jobName.split(" ").join("").toUpperCase();
    const jobLists = await Job.find({});
    res.render("jobs/index.ejs", {jobLists, searched});
}