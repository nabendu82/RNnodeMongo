const express = require("express");
const router = express.Router();

const { signup, signin, forgotPassword, resetPassword } = require("../controllers/auth");

router.get("/", (req, res) => {
    return res.json({
        data: "Hello World from API"
    })
})

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;