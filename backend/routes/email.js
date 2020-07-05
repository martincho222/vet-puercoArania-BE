const router = require("express").Router();
const sendMail = require("../controllers/retrieveMail");

// router.route("/").get(createUser1);
router.route("/").post(sendMail);

module.exports = router;
