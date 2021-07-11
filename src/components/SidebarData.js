import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsInfoCircleFill } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <BsFillHouseDoorFill />,
    classN: "sidebar-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <BsInfoCircleFill />,
    classN: "sidebar-text",
  },
  {
    title: "Services",
    path: "/services",
    icon: <BsTools />,
    classN: "sidebar-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <BsFillEnvelopeFill />,
    classN: "sidebar-text",
  },
];
