import mongoose, { isValidObjectId } from "mongoose";
import { Like } from "../models/like.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const toggleVideoLike = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  //TODO: toggle like on video
  const userId = req.user._id;

  if (!isValidObjectId(videoId)) {
    throw new ApiError(200, "Invalid video ID");
  }
  // ✅ 2. Check if this user already liked this video
  const existingLike = await Like.findOne({ videoId, likedBy: userId });

  if (existingLike) {
    // ✅ 3. If liked → remove like
    await Like.deleteOne({ _id: existingLike._id });
    return res
      .status(200)
      .json(
        new ApiResponse(200, { liked: false }, "Video unliked successfully")
      );
  } else {
    // ✅ 4. If not liked → create like
    await Like.create({ videoId, likedBy: userId });
    return res
      .status(200)
      .json(new ApiResponse(200, { liked: true }, "Video liked successfully"));
  }
});

const toggleCommentLike = asyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const userId = req.user._id;
  //TODO: toggle like on comment

  if (!isValidObjectId(commentId)) {
    throw new ApiError(200, "Invalid comment ID");
  }

  const existingLike = await Like.findOne({ commentId, likeBy: userId });

  if (existingLike) {
    await Like.findOneAndDelete({ videoId, likedBy: userId });
    return res
      .status(200)
      .json(
        new ApiResponse(200, { liked: false }, "Comment unliked successfully")
      );
  } else {
    await Like.create({ commentId, likedBy: userId });
    return res
      .status(200)
      .json(
        new ApiResponse(200, { liked: true }, "Comment liked successfully")
      );
  }
});

const toggleTweetLike = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;
  const userId = req.user._id;
  //TODO: toggle like on tweet

  if (!isValidObjectId(tweetId)) {
    throw new ApiError(200, "Invalid tweet ID");
  }
  const existingLike = await Like.findOne({ tweetId, likeBy: userId });

  if (existingLike) {
    await Like.findOneAndDelete({ tweetId, likeBy: userId });
    return res
      .status(200)
      .json(200, { liked: false }, "Tweet disliked successfully");
  } else {
    await Like.create({ tweetId, likedBy: userId });
    return res
      .status(200)
      .json(new ApiResponse(200, { liked: true }, "Tweet liked successfully"));
  }
});

const getLikedVideos = asyncHandler(async (req, res) => {
  //TODO: get all liked videos
  const userId = req.user._id;
  const { page, limit } = req.query;

  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);

  // Query filter (only video likes)
  const filter = { likedBy: userId, videoId: { $exists: true, $ne: null } };

  // Count total liked videos
  const totalLikes = await Like.countDocuments(filter);

  // Fetch liked videos with pagination and video details
  const likes = await Like.find(filter)
    .populate("videoId") // get full video data
    .skip((pageNum - 1) * limitNum)
    .limit(limitNum);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        ikedVideos: likes.map((like) => like.videoId), // return only videos
        pagination: {
          total: totalLikes,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(totalLikes / limitNum),
        },
      },
      "Liked videos fetched successfully"
    )
  );
});

export { toggleCommentLike, toggleTweetLike, toggleVideoLike, getLikedVideos };
