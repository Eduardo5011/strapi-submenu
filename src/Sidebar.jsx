import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            console.log(item);
            return <p>page</p>;
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
