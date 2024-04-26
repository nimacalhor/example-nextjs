import { ResPagination } from "@global/types/global-types";

export interface CommentListResponse {
  ok: boolean;
  status: string;
  data: Comment[];
  pagination: ResPagination;
}

export interface Comment {
  _id: string;
  usernameTarget: string;
  user_id: number;
  created_at: string;
  media_id: MediaId;
  comment_index: number;
  full_name: string;
  is_private: boolean;
  username: string;
  profile_pic_url: string;
  text: string;
  preview_child_comments: any[];
  child_comment_count: number;
  __v: number;
}

export interface MediaId {
  low: number;
  high: number;
  unsigned: boolean;
}

export interface CommentDetailResponse {
  ok: boolean;
  status: string;
  data: Data;
}

export interface Data {
  comment: CommentDetail;
}

export interface CommentDetail {
  _id: string;
  usernameTarget: string;
  user_id: number;
  created_at: string;
  media_id: MediaId;
  comment_index: number;
  full_name: string;
  is_private: boolean;
  username: string;
  profile_pic_url: string;
  text: string;
  preview_child_comments: any[];
  child_comment_count: number;
  __v: number;
}