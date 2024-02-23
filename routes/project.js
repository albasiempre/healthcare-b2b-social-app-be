const router = require("express").Router();
// ルーティングでserver.jsへ繋ぐ

router.get("/", (req, res) => {
  res.send("projects router");
})

module.exports = router;