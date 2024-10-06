import React, { useState } from "react";
import CardTitle from "./CardTitle.jsx";

const CallSummery = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  return (
    <div>
      <div className="cardWrapper border px-6 py-4 mt-12 rounded-lg">
        <CardTitle
          title="Call Summery"
          description="This is Call Summery Description"
          buttonText="Check Call Summery"
          onclick={() => setIsImageVisible(!isImageVisible)}
        />
        <img
          src="https://media.licdn.com/dms/image/v2/C4E1BAQFMybecUCK62A/company-background_10000/company-background_10000/0/1586434902697/img_crown_energy_services_cover?e=2147483647&v=beta&t=mdYHX5V12FjwBOKB7FRrb3x6-20Po5URY6J4vCz7a74"
          alt="Buildings"
          className={`mt-6 rounded-lg ${isImageVisible ? "visible" : "hidden"}`}
        />
      </div>
    </div>
  );
};

export default CallSummery;
