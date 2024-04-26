import { ResPagination } from "@global/types/global-types";

export interface MediaListResponse {
  ok: boolean;
  status: string;
  data: Media[];
  pagination: ResPagination;
}

export interface Media {
  _id: string;
  media_type?: number;
  user: MediaUser;
  thumbnail: string;
  caption: string;
  __v?: number;
  checked?: boolean;
}

export interface MediaUser {
  username: string;
  full_name?: string;
  id?: string;
  profile_pic_url?: string;
}

export interface MediaDetailResponse {
  ok: boolean;
  status: string;
  data: Data;
}

export interface Data {
  media: MediaDetail;
}

export interface MediaDetail {
  _id: string;
  like_count: number;
  media_type: number;
  user: MediaUser;
  play_count: number;
  thumbnail: string;
  comment_count: number;
  is_comment_disable: boolean;
  caption: string;
  __v: number;
}

export type MediaState = {
  nsfw: boolean;
};
