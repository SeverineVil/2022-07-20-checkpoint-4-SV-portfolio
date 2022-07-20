const express = require("express");

const { UserController } = require("../controllers");

const router = express.Router();

router.get("/user", UserController.browse);
router.get("/user/:id", UserController.read);
router.put("/user/:id", UserController.edit);
router.post("/user", UserController.add);
router.delete("/user/:id", UserController.delete);

module.exports = router;
