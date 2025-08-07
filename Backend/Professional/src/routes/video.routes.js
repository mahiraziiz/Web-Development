import { Router } from "express";
import {
  deleteVideo,
  getAllVideos,
  publishAVideo,
  togglePublishStatus,
  updateVideo,
} from "../controllers/video.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/get-all-videos").get(getAllVideos);
router.route("/publish-a-video").post(publishAVideo);
router.route("/update-video").patch(verifyJWT, updateVideo);
router.route("/delete-video").delete(verifyJWT, deleteVideo);
router.route("/toggle-publish-status").post(verifyJWT, togglePublishStatus);
export default router;
