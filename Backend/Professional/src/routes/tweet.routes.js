import { Router } from "express";
import {
  createTweet,
  deleteTweet,
  getUserTweets,
  updateTweet,
} from "../controllers/tweet.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/create-tweet").post(verifyJWT, createTweet);
router.route("/get-user-tweet").get(getUserTweets);
router.route("/delete-tweet").delete(verifyJWT, deleteTweet);
router.route("/update-tweet").patch(verifyJWT, updateTweet);
export default router;
