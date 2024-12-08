import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { RiNotificationSnoozeLine } from "react-icons/ri";

export const sidebarNavigation = [
  {
    label: "Dự án của tôi",
    icon: IoCalendarNumberOutline,
    href: "/",
  },
  {
    label: "Công việc của tôi",
    icon: FaTasks,
    href: "/my-work",
  },
  {
    label: "Thông báo",
    icon: RiNotificationSnoozeLine,
    href: "/notification",
  },
];
