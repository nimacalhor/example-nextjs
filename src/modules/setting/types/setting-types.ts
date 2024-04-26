export interface SettingDetailResponse {
  ok: boolean;
  status: string;
  data: SettingDetailData;
}

interface SettingDetailData {
  setting: Setting;
}

export interface Setting {
  requestCount: number;
  minDelay: number;
  maxDelay: number;
  batchSize: number;
  index: number;
  totalIndex: number;
  loopNumber: number;
  queryKeys: QueryKeys;
  _id: string;
  __v: number;
}

export interface QueryKeys {
  media: Medum[];
  profile: Profile[];
  comment: Comment[];
  _id: string;
}

export interface Medum {
  key: string;
  allowedOperators: string[];
  allowedTypes: string[];
  _id: string;
}

export interface Profile {
  key: string;
  allowedOperators: string[];
  allowedTypes: string[];
  _id: string;
}

export interface Comment {
  key: string;
  allowedOperators: string[];
  allowedTypes: string[];
  _id: string;
}

export type SettingStore = {
  setting: Setting | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string;
};

export interface UpdateSetting {
  requestCount?: number;
  minDelay?: number;
  maxDelay?: number;
  queryKeys?: QueryKeys;
}

export interface UpdateSettingResponse {
  ok: boolean
  status: string
  data: UpdateSettingResponseData
}

export interface UpdateSettingResponseData {
  newSetting: NewSetting
}

export interface NewSetting {
  _id: string
  requestCount: number
  minDelay: number
  maxDelay: number
  batchSize: number
  index: number
  totalIndex: number
  loopNumber: number
  __v: number
}
