"use client"; // Required for Next.js App Router

import TextSlider1 from "./TextSlider1";
import TextSlider2 from "./TextSlider2";
import "./cardslider.css"; // Import normal CSS

const FastSupport = () => {
  return (
    <div>
      <div className="fast-support-heading">
        <span>
          During your trip, we would be available 24/7. In case of need, you can
          reach us any time of the day. In day-to-day routine, the Lazy Yatra
          team is readily available during office hours.
        </span>
      </div>

      <div className="card-component">
        <TextSlider1 />
        <TextSlider2 />
      </div>
    </div>
  );
};

export default FastSupport;
