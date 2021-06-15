import React from "react";

function TrashOut(props) {
  return (
    <section className="service-page">
      <h2 className="service-heading">TRASH OUT & CLEANING</h2>
      <p className="service-description">
        With our dumpsters, trucks, and cleaning resources we can make your
        property spotless within hours. Let us do the dirty work.
      </p>
      <ul className="snow-removal-list">
        <li>Complete site demo and disposal</li>
        <li>Eco friendly products used</li>
        <li>Foreclosure clean-outs</li>
        <li>Hazardous waste clean up</li>
        <li>Maid service</li>
        <li>Recycling</li>
        <li>Power washing</li>
        <li>Small to huge jobs</li>
      </ul>
      <div className="image-gallery">
        <img
          src="images/1-1.jpg"
          alt=""
        />

        <img
          src="images/2-1.jpg"
          alt=""
        />

        <img
          src="images/4.jpg"
          alt=""
        />

        <img
          src="images/6-1.jpg"
          alt=""
        />

        <img
          src="images/7-1.jpg"
          alt=""
        />

        <img
          src="images/8-1.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

export default TrashOut;
