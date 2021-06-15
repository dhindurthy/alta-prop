import React from "react";

function SnowRemoval(props) {
  return (
    <section className="service-page">
      <h2 className="service-heading">Snow Removal</h2>
      <p className="service-description">
        We know how snow can cripple a day’s operation. Fast turnaround for your
        safety and convenience is always our goal.
      </p>

      <ul className="snow-removal-list">
        <li>24/7 EMERGENCY SERVICE</li>
        <li>Driveways, parking lots, service roads, & walkways</li>
        <li>All property types</li>
        <li>On-site based crew, if needed</li>
        <li>Salting</li>
        <li>Salt purchase option</li>
      </ul>

      <div className="image-gallery">
        <img
          src="images/8-2.jpg"
          alt=""
          width="250"
          height="250"
        />

        <img
          src="images/5-1.jpg"
          alt=""
          width="250"
          height="250"
        />

        <img
          src="images/4-3.jpg"
          alt=""
          width="250"
          height="250"
        />

        <img
          src="images/2-4.jpg"
          alt=""
          width="250"
          height="250"
        />

        <img
          src="images/3-3.jpg"
          alt=""
          width="250"
          height="250"
        />

        <img
          src="images/7-3.jpg"
          alt=""
          width="250"
          height="250"
        />

        <img
          src="images/6-2.jpg"
          alt=""
          width="250"
          height="250"
        />

        <img
          src="images/1-4.jpg"
          alt=""
          width="250"
          height="250"
        />
      </div>
    </section>
  );
}

export default SnowRemoval;
