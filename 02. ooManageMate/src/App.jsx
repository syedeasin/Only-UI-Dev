import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import TaskList from "./components/TaskList.jsx";

export default function App() {
    return (
        <div className="flex">
            <Sidebar/>
            <div className="flex-1">
                <Header/>
                <TaskList/>
            </div>
        </div>
    )
}