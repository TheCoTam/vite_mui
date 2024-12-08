import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { RiSearchEyeLine } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import { MdReportGmailerrorred } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-8 py-3 bg-gray-100">
      <div className="flex items-center space-x-3">
        <Avatar sx={{ bgcolor: deepOrange[500] }}>D</Avatar>
        <p className="text-3xl font-semibold">Họ và tên</p>
      </div>
      <div className="border-2 rounded-full flex items-center px-3 py-1 space-x-2 focus-within:border-red-400 w-[400px]">
        <RiSearchEyeLine size={30} />
        <input
          placeholder="Tìm kiếm..."
          className="focus:outline-none flex-1 bg-transparent"
        />
      </div>
      <div className="flex items-center space-x-3">
        <MdReportGmailerrorred size={30} />
        <TbSettings size={30} />
      </div>
    </div>
  );
};

export default Header;
