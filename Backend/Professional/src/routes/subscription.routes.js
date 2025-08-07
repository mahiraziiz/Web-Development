import { Router } from "express";
import {
  getSubscribedChannels,
  getUserChannelSubscribers,
  toggleSubscription,
} from "../controllers/subscription.controller.js";
const router = Router();

router.route("/toggle-subscription").post(toggleSubscription);
router.route("/get-user-channel-subscribers").get(getUserChannelSubscribers);
router.route("/get-subscribed-channels").get(getSubscribedChannels);
export default router;
