const express = require("express");
const router = express.Router();
const {
  getData,
  getSingle,
  postData,
  putData,
} = require("../controllers/controllers");

router.route("/").get(getData).post(postData);
router.route("/:id").get(getSingle).put(putData);

module.exports = router;
