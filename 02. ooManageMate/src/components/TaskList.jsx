import React from 'react';

const TaskList = ({ cardDetails }) => {
    return (
        <div className="p-4 flex flex-row gap-6">
            {cardDetails.map((cardData, index) => (
                <div key={index} className="mb-4 border rounded-lg bg-slate-50">
                    <div>
                        <img src={cardData.img} alt={cardData.title} className="h-64 w-full object-cover object-left-top rounded-tl-lg rounded-tr-lg" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-slate-950 py-2">{cardData.title}</h3>
                            <p className="text-[16px] py-2 text-slate-700">{cardData.description}</p>
                            <button type="button"
                                    className="my-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                {cardData.button}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
