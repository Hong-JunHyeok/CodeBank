import { Router } from "express";
const router = Router();

import createPost from "./createPost";
import deletePost from "./deletePost";
import editPost from "./editPost";
import getPost from "./getPost";
import getPosts from "./getPosts";

router.get("/", getPost);
router.get("/:post_id", getPosts);
router.post("/:post_idx", createPost);
router.delete("/:post_idx", deletePost);
router.patch("/:post_idx", editPost);

export default router;
