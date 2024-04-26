import { PayloadAction } from "@reduxjs/toolkit";
import { BookmarkState } from "../types/bookmark-types";
import { Media } from "@media/types/media-types";
import type { Profile } from "@profiles/types/profile-types";

export function switchMediaOverview(
  state: BookmarkState,
  action: PayloadAction<{ showMediaOverview: boolean }>
) {
  const { showMediaOverview } = action.payload;
  state.showMediaOverview = showMediaOverview;
}

export function addMedia(
  state: BookmarkState,
  action: PayloadAction<{ media: Media }>
) {
  const { media } = action.payload;

  state.mediaList = [...state.mediaList, media];
}

export function addProfile(
  state: BookmarkState,
  action: PayloadAction<{ profile: Profile }>
) {
  const { profile } = action.payload;

  state.profileList = [...state.profileList, profile];
}

export function checkMedia(
  state: BookmarkState,
  action: PayloadAction<{ id: string }>
) {
  const { id } = action.payload;

  state.mediaList = state.mediaList.map((item) =>
    item._id !== id ? item : { ...item, checked: true }
  );
}

export function checkProfile(
  state: BookmarkState,
  action: PayloadAction<{ id: string }>
) {
  const { id } = action.payload;

  state.profileList = state.profileList.map((item) =>
    item._id !== id ? item : { ...item, checked: true }
  );
}
export function unCheckMedia(
  state: BookmarkState,
  action: PayloadAction<{ id: string }>
) {
  const { id } = action.payload;

  state.mediaList = state.mediaList.map((item) =>
    item._id !== id ? item : { ...item, checked: false }
  );
}

export function unCheckProfile(
  state: BookmarkState,
  action: PayloadAction<{ id: string }>
) {
  const { id } = action.payload;

  state.profileList = state.profileList.map((item) =>
    item._id !== id ? item : { ...item, checked: false }
  );
}

export function removeMedia(
  state: BookmarkState,
  action: PayloadAction<{ id: string }>
) {
  const { id } = action.payload;

  state.mediaList = state.mediaList.filter((media) => media._id !== id);
}

export function removeProfile(
  state: BookmarkState,
  action: PayloadAction<{ id: string }>
) {
  const { id } = action.payload;

  state.profileList = state.profileList.filter((profile) => profile._id !== id);
}
