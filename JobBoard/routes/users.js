const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/users");
const {saveRedirectUrl, validateUser, isLoggedIn} = require("../middleware");
const passport = require("passport");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});
const wrapAsync = require("../utils/wrapAsync.js");

// users

router.get("/signup", userControllers.signupForm);
router.post("/signup", upload.single('user[userImage]'), wrapAsync(userControllers.signup));
router.get("/login", userControllers.loginForm);
router.post("/login", saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), wrapAsync(userControllers.login));
router.get("/logout", userControllers.logout);
router.get("/profile", isLoggedIn, userControllers.getProfile);
router.post("/updateProfile/:id", isLoggedIn, wrapAsync(userControllers.updateProfile));
router.get("/deleteAccount", (req, res) => {
    res.render("users/sureToDelete.ejs");
})
router.delete("/user/:id", isLoggedIn, wrapAsync(userControllers.deleteUser));
router.post("/users/:companyId/apply", upload.single('resume'), wrapAsync(userControllers.jobApply));
router.get("/applicants",isLoggedIn, wrapAsync(userControllers.applicants));


module.exports = router;