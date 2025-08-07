import { Router } from "express";
import {
  addVideoToPlaylist,
  createPlaylist,
  deletePlaylist,
  getPlaylistById,
  getUserPlaylists,
  removeVideoFromPlaylist,
  updatePlaylist,
} from "../controllers/playlist.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/create-playlist").post(createPlaylist);
router.route("/get-user/playlist").get(getUserPlaylists);
router.route("/get-playlist-by-id").get(getPlaylistById);
router.route("/add-video-to-playlist").patch(addVideoToPlaylist);
router.route("/remove-video-from-playlist").patch(removeVideoFromPlaylist);
router.route("/delete-playlist").delete(deletePlaylist);
router.route("/update-playlist").patch(updatePlaylist);
export default router;
