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

router.post("/", async (req, res) => {
  const { title, content, field } = req.body;
  return res.status(201).json({
    message: "정상적으로 생성되었습니다.",
    data: {
      title,
      content,
      field,
    },
  });
});

router.delete("/:post_id", async (req, res) => {
  const { post_id } = req.params;
  return res.json({
    message: `포스트 ${post_id}가 정상적으로 삭제되었습니다.`,
  });
});

export default router;
