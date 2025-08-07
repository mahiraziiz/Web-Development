import Router from "express";
import { healthcheck } from "../controllers/healthcheck.controller.js";
const router = Router();

router.route("/healthcheck").post(healthcheck);
export default router;