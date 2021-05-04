import express from "express";
import { createPost, getPosts, getSinglePost } from "../controllers/posts.js";

const router = express.Router();
router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getSinglePost);

export default router;
