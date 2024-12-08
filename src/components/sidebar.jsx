import { Link } from "react-router-dom";
import { sidebarNavigation } from "../data/sidebar-navigation";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center px-5 space-y-3 w-[300px]">
      {sidebarNavigation.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link
            to={item.href}
            key={index}
            className="w-full border-2 px-2 py-1 rounded-full border-transparent hover:border-teal-500 hover:text-teal-500 hover:bg-teal-100 flex items-center space-x-3"
          >
            <Icon />
            <p>{item.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
