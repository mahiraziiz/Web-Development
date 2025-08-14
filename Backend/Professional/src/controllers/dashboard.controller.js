import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";
import { Video } from "../models/video.model.js";
import { Subscription } from "../models/subscription.model.js";
import { Like } from "../models/like.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const getChannelStats = asyncHandler(async (req, res) => {
  const {
    page = 1,
    limit = 10,
    sortBy = "createdAt",
    sortType = "asc",
  } = req.query;
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const sortOrder = sortType === "asc" ? 1 : -1;
  const sortObj = { [sortBy]: sortOrder };

  // The logged-in user's ID (channel owner)
  const ownerId = req.user._id;

  // Get paginated videos
  const videoFilter = { owner: ownerId };
  const videos = await Video.find(videoFilter)
    .sort(sortObj)
    .skip((pageNum - 1) * limitNum)
    .limit(limitNum);

  // Count total videos
  const totalVideos = await Video.countDocuments(videoFilter);

  // Count total likes on all videos of this channel
  const totalLikesAgg = await Like.aggregate([
    {
      $lookup: {
        from: "videos",
        localField: "video",
        foreignField: "_id",
        as: "videoData",
      },
    },
    { $unwind: "$videoData" },
    { $match: { "videoData.owner": ownerId } },
    { $count: "totalLikes" },
  ]);
  const totalLikes = totalLikesAgg[0]?.totalLikes || 0;

  // Count total subscribers of the channel
  const totalSubscribers = await Subscription.countDocuments({
    channel: ownerId,
  });

  // Sum total views for all videos
  const totalViewsAgg = await Video.aggregate([
    { $match: { owner: ownerId } },
    { $group: { _id: null, total: { $sum: "$views" } } },
  ]);
  const totalViews = totalViewsAgg[0]?.total || 0;

  // Send response
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        videos,
        pagination: {
          totalVideos,
          totalLikes,
          totalSubscribers,
          totalViews,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(totalVideos / limitNum),
        },
      },
      "Total stats fetched successfully"
    )
  );
});

const getChannelVideos = asyncHandler(async (req, res) => {
  // Extract query params with defaults
  const {
    page = 1,
    limit = 10,
    sortBy = "createdAt",
    sortType = "asc",
  } = req.query;

  // User ID from JWT payload
  const userId = req.user._id;

  // Pagination & sorting setup
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);

  const sortOrder = sortType === "asc" ? 1 : -1;
  const sortObj = { [sortBy]: sortOrder };

  // Filter videos uploaded by the logged-in user
  const filter = { owner: userId };

  // Fetch videos
  const videos = await Video.find(filter)
    .sort(sortObj)
    .skip((pageNum - 1) * limitNum)
    .limit(limitNum);

  // Total count
  const totalVideos = await Video.countDocuments(filter);

  // Response
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        videos,
        pagination: {
          total: totalVideos,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(totalVideos / limitNum),
        },
      },
      "All videos on channel fetched successfully"
    )
  );
});

export { getChannelStats, getChannelVideos };
