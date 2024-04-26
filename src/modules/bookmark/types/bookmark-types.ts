import type { Media } from "@media/types/media-types";
import type { Profile } from "@profiles/types/profile-types";
export interface BookmarkState {
  showMediaOverview: boolean;
  mediaList: Media[];
  profileList: Profile[];
}
