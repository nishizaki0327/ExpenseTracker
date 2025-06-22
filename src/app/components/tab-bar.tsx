import { NavLink } from "react-router-dom";
import { FaMoneyBillWave } from "react-icons/fa";

export const TabBar = () => {
  const baseClass =
    "px-4 py-2 font-medium rounded-md transition-colors duration-200";

  const activeClass = "bg-blue-500 text-white";
  const inactiveClass = "bg-transparent text-gray-700 hover:bg-blue-100";

  return (
    <nav className="flex items-center bg-white px-6 py-3 shadow-sm border-b">
      <div className="flex items-center text-blue-600 text-xl font-bold space-x-2">
        <FaMoneyBillWave className="text-2xl" />
        <span>家計簿アプリ</span>
      </div>
      <div className="flex space-x-2 ml-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          ホーム
        </NavLink>
        <NavLink
          to="/month"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          月別
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          設定
        </NavLink>
      </div>
    </nav>
  );
};
