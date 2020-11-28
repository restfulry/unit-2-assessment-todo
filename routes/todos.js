var express = require("express");
var router = express.Router();
const todosCtrl = require("../controllers/todos");

router.get("/", todosCtrl.index);
router.post("/new", todosCtrl.create);
router.delete("/:id", todosCtrl.delete);

module.exports = router;
