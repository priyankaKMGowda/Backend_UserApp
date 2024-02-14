const { Router } = require("express");

const {
  getAllUsers,
  createMockUsers,
} = require("../controllers/userController");

const router = Router();

// get Router
router.route("").get(getAllUsers);

// POST Router
router.route("/add").post(createMockUsers);

module.exports = router;
