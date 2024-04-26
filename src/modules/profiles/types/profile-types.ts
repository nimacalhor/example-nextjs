import { ResPagination } from "@global/types/global-types";

export interface ProfileListResponse {
  ok: boolean;
  status: string;
  data: Profile[];
  pagination: ResPagination;
}

export interface Profile {
  _id: string;
  image: string;
  username: string;
  full_name: string;
  media_count?: number;
  bio?: string;
  uinqId?: string;
  isTargeted?: boolean;
  category?: string;
  __v?: number;
  type?: string;
  checked?: boolean;
  target?: string;
}

export interface ProfileDetailResponse {
  ok: boolean;
  status: string;
  data: Data;
}

export interface Data {
  profile: ProfileDetail;
}

export interface ProfileDetail {
  _id: string;
  image: string;
  username: string;
  full_name: string;
  media_count: number;
  bio: string;
  uinqId: string;
  is_bookmarked: boolean;
  category: string;
  __v: number;
}
