const express = require("express");
const router = express.Router();
const jobsControllers = require("../controllers/jobLists.js");
const {isLoggedIn} = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");

router.get("/", isLoggedIn, wrapAsync(jobsControllers.jobLists))
router.get("/postAjob", isLoggedIn, jobsControllers.postAjobForm);
router.post("/postAjob", isLoggedIn, wrapAsync(jobsControllers.postAjob));
router.post("/search", isLoggedIn, wrapAsync(jobsControllers.searchJobs));

router.post("/searchHome", isLoggedIn, wrapAsync(jobsControllers.searchJobsHome));

router.get("/:id",isLoggedIn, wrapAsync(jobsControllers.viewJob));
router.get("/:companyId/apply", isLoggedIn, jobsControllers.applyJob);



module.exports = router;