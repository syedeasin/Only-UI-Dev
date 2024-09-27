import {useState} from "react";
import logo from '../assets/Logo/cclFullLogo.png';
import logoIcon from '../assets/Logo/cclLogoIcon.png';
import { AiOutlineMenu } from "react-icons/ai";


const Sidebar = () => {
    const [isCollapsed, setIsCollased] = useState(false);

    const handleClick = () => {
        setIsCollased(!isCollapsed);
    }

    return (
        <aside className={`${isCollapsed? 'w-20' : 'w-64'}  h-[100vh] bg-gray-800 text-white  px-4 transition-all duration-300`}>
            <div className="h-16 flex items-center justify-between">
                <img src={isCollapsed ? logoIcon : logo} alt="logo" className={`${isCollapsed ? 'w-8' : 'w-32'}`} />
                <AiOutlineMenu onClick={handleClick} />
            </div>
            <ul>
                <li>To-Do</li>
                <li>In Progress</li>
                <li>Done</li>
            </ul>
        </aside>
    );
};

export default Sidebar;