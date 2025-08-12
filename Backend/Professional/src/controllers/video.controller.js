import { isValidObjectId } from "mongoose";
import { Video } from "../models/video.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import asyncHandler from "../utils/asyncHandler.js";

const getAllVideos = asyncHandler(async (req, res) => {
  // 1️⃣ Extract query params with defaults
  const {
    page = 1,
    limit = 10,
    query,
    sortBy = "createdAt",
    sortType = "desc",
    userId,
  } = req.query;

  // 2️⃣ Convert page & limit to numbers (since req.query is string)
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);

  // 3️⃣ Build MongoDB filter object
  const filter = {};

  if (query) {
    // Search in title or description (case-insensitive)
    filter.$or = [
      { title: { $regex: query, $options: "i" } },
      { description: { $regex: query, $options: "i" } },
    ];
  }

  if (userId) {
    filter.owner = userId; // Filter by uploader
  }

  // 4️⃣ Sorting order (1 for asc, -1 for desc)
  const sortOrder = sortType === "asc" ? 1 : -1;
  const sortObj = { [sortBy]: sortOrder };

  // 5️⃣ Fetch videos with pagination, sorting, and filtering
  const videos = await Video.find(filter)
    .sort(sortObj)
    .skip((pageNum - 1) * limitNum)
    .limit(limitNum);

  // 6️⃣ Get total count for pagination info
  const totalVideos = await Video.countDocuments(filter);

  // 7️⃣ Send response using your apiResponse utility
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
      "Videos fetched successfully"
    )
  );
});

const publishAVideo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  // TODO: get video, upload to cloudinary, create video
  if (!title || !description) {
    throw new ApiError(500, "Title and description are required");
  }

  const localVideoPath = req.files?.videoFile?.[0]?.path;
  if (!localVideoPath) {
    throw new ApiError(400, "Video file is required");
  }

  const uploadedVideo = await uploadOnCloudinary(localVideoPath);

  if (!uploadedVideo) {
    throw new ApiError(500, "Video upload failed");
  }

  const localThumbnailPath = req.files?.thumbnail?.[0]?.path;
  if (!localThumbnailPath) {
    throw new ApiError(400, "Thumbnail is required");
  }

  const uploadedThumbnail = await uploadOnCloudinary(localThumbnailPath);
  if (!uploadedThumbnail) {
    throw new ApiError(500, "Thumbnail upload failed");
  }
  const duration = uploadedVideo.duration;

  const videoData = await Video.create({
    title,
    description,
    duration,
    videoFile: uploadedVideo.url,
    thumbnail: uploadedThumbnail?.url || "",
    owner: req.user._id, // assuming user is authenticated
  });

  await videoData.save();

  return res
    .status(201)
    .json(new ApiResponse(201, videoData, "Video uploaded successfully"));
});

const getVideoById = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  //TODO: get video by id
  if (!isValidObjectId(videoId)) {
    throw new ApiError(400, "Invalid video ID");
  }

  const videoData = await Video.findById(videoId);

  if (!videoData) {
    throw new ApiError(404, "Video not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, videoData, "Video Found Successfully"));
});

const updateVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const { title, description } = req.body;

  if (!isValidObjectId(videoId)) {
    throw new ApiError(400, "Invalid video ID");
  }

  const videoData = await Video.findById(videoId);
  if (!videoData) {
    throw new ApiError(404, "Video not found");
  }

  let updatedThumbnailUrl = videoData.thumbnail;

  // If new thumbnail file is uploaded
  if (req.file?.path) {
    const uploadedThumbnail = await uploadOnCloudinary(req.file.path);
    if (!uploadedThumbnail) {
      throw new ApiError(500, "Thumbnail upload failed");
    }
    updatedThumbnailUrl = uploadedThumbnail.url;
  }

  videoData.title = title || videoData.title;
  videoData.description = description || videoData.description;
  videoData.thumbnail = updatedThumbnailUrl;

  await videoData.save();

  return res
    .status(200)
    .json(new ApiResponse(200, videoData, "Video updated successfully"));
});

const deleteVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  //TODO: delete video
  if (!isValidObjectId(videoId)) {
    throw new ApiError(404, "Invalid videoId");
  }

  const videoData = await Video.findById(videoId);

  if (!videoData) {
    throw new ApiError(400, "Not found");
  }
  // Delete from Cloudinary (if stored there)
  if (videoData.public_id) {
    await deleteFromCloudinary(videoData.public_id);
  }
  // delete from DB
  await Video.findByIdAndDelete(videoId);
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Video deleted successfully"));
});

const togglePublishStatus = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  if (!isValidObjectId(videoId)) {
    throw new ApiError(200, "Invalid Video ID");
  }

  const videoData = await Video.findById(videoId);

  if (!videoData) {
    throw new ApiError(200, "Video not found");
  }

  // Toggle the value
  videoData.isPublic = !videoData.isPublic;
  await videoData.save();

  return res
    .status(200)
    .json(new ApiResponse(200, videoData, "Video toggled successfully"));
});

export {
  getAllVideos,
  publishAVideo,
  getVideoById,
  updateVideo,
  deleteVideo,
  togglePublishStatus,
};
