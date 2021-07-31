import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  return res.json({
    data: [
      { id: 1, content: "qweqwe" },
      { id: 2, content: "qweqwe" },
    ],
  });
});

router.get("/:post_id", (req, res) => {
  const post_id = req.params.post_id;
  return res.json({
    data: {
      id: post_id,
      content: "qweqwe",
    },
  });
});

export default router;
