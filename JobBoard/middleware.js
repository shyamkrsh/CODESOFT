const {userSchema, jobSchema} = require("./schema");
const ExpressError = require("./utils/ExpressError");

module.exports.isLoggedIn = async(req, res, next) => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must logged in");
        return res.redirect("/login");
    }else{
        next();
    }
}

module.exports.saveRedirectUrl  = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
} 

module.exports.validateUser = (req, res, next) => {
    let {error} = userSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}

module.exports.validateJob = (req, res, next) => {
    let {error} = jobSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
}