const User = require("../models/users");
const Applied = require("../models/applied");
const {sendEmail} = require("../sendingMail");


module.exports.signupForm = (req, res, next) => {
    res.render("users/signup.ejs");
}
module.exports.signup = async(req, res, next) => {
    try{
        const url = req.file.path;
        const filename = req.file.filename;
        let {password} = req.body;
        const newUser = new User(req.body.user);
        newUser.userImage = {url, filename};
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            sendEmail(req.body.user.username, "", "Thank You for registering at jobBoard, hope you're doing well in your life.");
            req.flash("success", "Registration Successful !");
            res.redirect("/jobLists");
        })
    } catch(err){
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}
module.exports.loginForm = (req, res, next) => {
    res.render("users/login.ejs");
}
module.exports.login = async(req, res, next) => {
    req.flash("success", "Your are logged in");
    let redirectUrl = res.locals.redirectUrl || "/jobLists";
    res.redirect(redirectUrl);
};
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err){
            next(err);
        }
        req.flash("success", "User Logout Successfully !");
        res.redirect("/");
    })
}
module.exports.getProfile = (req, res, next) => {
    res.render("users/profile.ejs");
}
module.exports.updateProfile = async(req, res, next) => {
    let {id} = req.params;
    let data = req.body.user;
    const url = req.file.path;
    const filename = req.file.filename;
    if(req.file){
       await User.findByIdAndUpdate(id, {userImage: {url, filename}}, {new: true});
    }
    await User.findByIdAndUpdate(id, {name: data.name, role: data.role, username: data.username, city: data.city}, {new: true}); 
   res.redirect("/profile");
}
module.exports.jobApply = async(req, res, next) => {
    let {companyId} = req.params;
    const application = new Applied({name: req.user.name, email: req.user.username, mobileNumber: req.body.mobileNumber, resume: req.file.path});
    const company = await User.findById(companyId);
    company.applicants.push(application);
    application.save();
    company.save();
    res.redirect("/jobLists");
}

module.exports.applicants = async(req, res, next) => {
    const company = await User.findById(req.user._id).populate("applicants");
   const totalApplications = company.applicants;
    res.render("users/applicants.ejs", {totalApplications});
}
module.exports.deleteUser = async(req, res, next) => {
    let {id} = req.params;
    await User.findByIdAndDelete(id);
    res.redirect("/");
}
