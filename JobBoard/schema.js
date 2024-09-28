const joi = require("joi");

module.exports.userSchema = new joi.object({
    users: joi.object({
        name: joi.string().required(),
        role: joi.string(),
        username: joi.string().required(),
        city: joi.string(),
        savedJobs: joi.string(),
        applicants: joi.string(),
        userImage: {
            url: joi.string(),
            filename: joi.string(),
        }
    }),
})

module.exports.jobSchema = joi.object({
    job: joi.object({
        company: joi.string().required(),
        title: joi.string().required(),
        location: joi.string().required(),
        salary: joi.string(),
        descreption: joi.string().required(),
        requirements: joi.string(),
        deadline: joi.string(),
        companyLog: joi.string(),
    }).required(),
})