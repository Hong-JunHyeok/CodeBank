import { Router } from "express";
const router = Router();

router.get("/login", async (req, res) => {
  return res.json({
    message: "로그인",
  });
});

router.post("/join", async (req, res) => {
  console.log(req.body);
  return res.json({
    message: "회원가입",
  });
});

export default router;
