import React, { useState } from "react";
import CardTitle from "./CardTitle.jsx";

const CallStatus = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <div className="cardWrapper border px-6 py-4 mt-12 rounded-lg">
        <CardTitle
          title="Call Statistics"
          description="This is Call Status Description"
          buttonText="Check Call Status"
          onclick={() => setIsVisible(!isVisible)}
        />
        <div>
          <img
            src="https://www.imgcorporations.com/images/bg-img.jpg"
            alt="BG Image"
            className={`statusImg mt-6 rounded-lg ${isVisible ? "visible" : "hidden"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CallStatus;
