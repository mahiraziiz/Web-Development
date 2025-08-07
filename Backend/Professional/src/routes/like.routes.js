import Router from "express";
import {
  getLikedVideos,
  toggleCommentLike,
  toggleTweetLike,
  toggleVideoLike,
} from "../controllers/like.controller.js";

const router = Router();

router.route("/toggle-video-like").post(toggleVideoLike);
router.route("/toggle-comment-like").post(toggleCommentLike);
router.route("/toggle-tweet-like").post(toggleTweetLike);
router.route("/get-liked-videos").get(getLikedVideos);
export default router;
