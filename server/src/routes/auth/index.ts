import { Router } from "express";
const router = Router();
import login from "./login";
import join from "./join";

router.post("/login", login);
router.post("/join", join);

export default router;
