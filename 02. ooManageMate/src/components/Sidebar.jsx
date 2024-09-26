import React from 'react';

const Sidebar = () => {
    return (
        <aside className="w-64 h-[100vh] bg-gray-800 text-white  p-4">
            <div className="flex items-center justify-between">
                <img src={}/>
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