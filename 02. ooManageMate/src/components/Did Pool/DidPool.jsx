import React, { useState } from 'react';
import { Button } from "@material-tailwind/react"; // Ensure you have the appropriate Button component from your library
import '../../index.css';
import AddNewDidPool from "./AddNewDidPool.jsx";

const DidPool = () => {
    const [modalOpen, setModalOpen] = useState(false);

    // Function to toggle the modal open state
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    // Function to handle opening the modal
    const handleOpen = () => {
        setModalOpen(true);
    };

    // Function to handle closing the modal
    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <div className="px-12">
            <Button variant="filled" color="blue" onClick={handleOpen}>
                Show Modal
            </Button>

            <AddNewDidPool
                show={modalOpen}         // Pass the state to show/hide modal
                handleClose={handleClose} // Pass the function to close the modal
                onSave={() => {
                    // Define the save action if necessary
                    console.log('Save action triggered');
                    handleClose(); // Close the modal after saving if needed
                }}
            />
        </div>
    );
};

export default DidPool;
