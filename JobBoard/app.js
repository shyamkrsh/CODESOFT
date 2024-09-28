if(process.env.NODE_ENV != "productions"){
    require('dotenv').config();
}
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;
const ejsMate = require("ejs-mate");
const path = require("path");
const ExpressError = require("./utils/ExpressError");
const wrapAsync = require("./utils/wrapAsync");
const User = require("./models/users");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const jobListRouter = require("./routes/jobLists");
const userRouter = require("./routes/users");
const methodOverride = require("method-override");
const Job = require('./models/jobs');


const MONGO_URL = "mongodb+srv://sksh58573:heQGYdn7ltlb1P2O@cluster0.ygpet.mongodb.net/JOBBOARD?retryWrites=true&";
main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs", ejsMate);
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
const sessionOptions = {
    secret: "MySecretStringPasswordForMyWebsite",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}
app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})



// home page route
app.get("/", wrapAsync(async(req, res) => {
    const jobLists = await Job.find({});
    const searched = "";
    res.render("jobs/index.ejs", {jobLists, searched});
}))

app.use("/jobLists", jobListRouter);
app.use("/", userRouter);

// main error handling
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
})
app.use((err, req, res, next) => {
    let {status = 500, message = "Something went wrong !"} = err;
    res.status(status).render("error.ejs", {status, message});
})
app.listen(port, () => {
    console.log(`Application is listening to the port : ${port}`);
})