import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import TaskList from "./components/TaskList.jsx";
import card1Image from "./assets/Card/card1.jpg";
import card2Image from "./assets/Card/card2.jpg";
import card3Image from "./assets/Card/card3.jpg";
import DidPool from "./components/Did Pool/DidPool.jsx";

const card = [
    {
        img: card1Image,
        title: "This is first card title",
        description: "React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. ",
        button: "See Details"
    },
    {
        img: card2Image,
        title: "This is second card title",
        description: "React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images.",
        button: "See Details"
    },
    {
        img: card3Image,
        title: "This is last card title",
        description: "React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images.",
        button: "See Details"
    },
    {
        img: card1Image,
        title: "This is new card title",
        description: "React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images.",
        button: "See Details"
    }
]

export default function App() {
    return (
        <div className="flex">
            <Sidebar/>
            <div className="flex-1">
                <Header/>
                <TaskList
                    cardDetails={card}
                />
                <DidPool/>
            </div>
        </div>
    )
}