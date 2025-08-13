import { isValidObjectId } from "mongoose";
import { Comment } from "../models/comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { comment } from "postcss";

const getVideoComments = asyncHandler(async (req, res) => {
  //TODO: get all comments for a video
  const { videoId } = req.params;
  const {
    page = 1,
    limit = 10,
    sortBy = "createdAt",
    sortType = "desc",
  } = req.query;

  if (!isValidObjectId(videoId)) {
    throw new ApiError(200, "Invalid Video ID");
  }

  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);

  const filter = { videoId };

  const sortOrder = sortType === "asc" ? 1 : -1;
  const sortObj = { [sortBy]: sortOrder };

  // 5️⃣ Fetch comment with pagination, sorting, and filtering
  const comments = await Comment.find(filter)
    // Optional: to get commenter details
    .populate("userId", "username avatar")
    .sort(sortObj)
    .skip((pageNum - 1) * limitNum)
    .limit(limitNum);

  const totalComments = await Comment.countDocuments(filter);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        comments,
        pagination: {
          total: totalComments,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(totalComments / limitNum),
        },
      },
      "Video Comment Fetched Successfully"
    )
  );
});

const addComment = asyncHandler(async (req, res) => {
  // TODO: add a comment to a video
  const { content } = req.body;
  const { videoId } = req.params;

  if (!isValidObjectId(videoId)) {
    throw new ApiError(200, "Invalid Video ID");
  }

  if (!content) {
    throw new ApiError(200, "Comment is required");
  }

  const comments = await Comment.create({
    content,
    owner: req.user._id,
    videoId,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, comments, "Comment added successfully"));
});

const updateComment = asyncHandler(async (req, res) => {
  // TODO: update a comment
  const { commentId } = req.params;
  const { content } = req.body;
  if (!isValidObjectId(commentId)) {
    throw new ApiError(200, "Invalid comment ID");
  }

  const comment = await Comment.findById(commentId);

  comment.content = content;

  return res
    .status(200)
    .json(new ApiResponse(200, comment, "Comment updated successfully"));
});

const deleteComment = asyncHandler(async (req, res) => {
  // TODO: delete a comment
  const { commentId } = req.params;

  if (!isValidObjectId(commentId)) {
    throw new ApiError(200, "Invalid comment ID");
  }
  await Comment.findByIdAndDelete(commentId);

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Comment deleted successfully"));
});

export { getVideoComments, addComment, updateComment, deleteComment };
