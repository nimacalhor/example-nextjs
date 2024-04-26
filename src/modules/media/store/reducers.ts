import { PayloadAction } from "@reduxjs/toolkit";
import { MediaState } from "../types/media-types";

export function switchNsfw(
  state: MediaState,
  action: PayloadAction<{ nsfw: boolean }>
) {
  const { nsfw } = action.payload;
  state.nsfw = nsfw
}
