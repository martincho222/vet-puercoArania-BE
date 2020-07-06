const PaymentController = require("../controllers/payments");
const router = require("express").Router();

router.route("/").post(PaymentController.checkout);

router.route("/confirm").post(PaymentController.confirmPayment);

// router.route('/pending')
// .post(PaymentController.checkout);

module.exports = router;
