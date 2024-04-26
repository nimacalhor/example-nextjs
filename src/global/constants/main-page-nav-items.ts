import {
  faAddressCard,
  faComments,
  faInfo,
  faPhotoFilm,
  faUserGroup
} from "@fortawesome/free-solid-svg-icons";

const NAV_ITEMS = [
  { icon: faPhotoFilm, text: "مدیا", href: "/media", description: `` },
  { icon: faUserGroup, text: "پروفایل ها", href: "/profiles", description: `` },
  { icon: faComments, text: "کامنت", href: "/comments", description: `` },
  { icon: faInfo, text: "وضعیت", href: "/status", description: `` },
  {
    icon: faAddressCard,
    text: "مدیریت اکانت",
    href: "/accounts",
    description: ``,
  },
];

export default NAV_ITEMS;
