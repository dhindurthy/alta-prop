import React from "react";
// import Carousel from "../components/carousel.jsx";
import { useHistory, BrowserRouter as Link } from "react-router-dom";

// import {  } from "react-router-dom";
function Services(props) {
  // let articles = [
  //   { name: "donkey" },
  //   { name: "buffalo" },
  //   { name: "pig" },
  //   { name: "cow" },
  //   { name: "sheep" },
  //   { name: "monkey" }
  // ];
  const history = useHistory();
  const handleClick = (page) => history.push(page);
  return (
    <section className="service-page">
      <head>
        <title>All Property Services at Alta Property Services</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="ALTA Property Services offers all kinfd of services like Landscaping, Snow Removal, Repairs and Rehab, Trash Out, Secured
          Services, Winterization"/>
      </head>
      <section className="service-section">
        <h2 className="service-heading">
          WE CAN PROVIDE ALL YOUR PROPERTY SERVICES
        </h2>
        {/* <Carousel
          leftButton="<"
          rightButton=">"
          showBanner={false}
          sliders={articles}
          textBetweenButtons={(activeKey) => (
            <span></span>
          )}
          banner="Established and proudly serving since 2001"
          panelContent={(i, index) =>
            (index === 1 && (
              <section style={{ backgroundColor: "purple" }}>
                <img
                  width="900"
                  height="400"
                  src="https://via.placeholder.com/900"
                  alt="somethign"
                />
              </section>
            )) ||
            (index === 4 && (
              <section style={{ backgroundColor: "red" }}>
                <img
                  width="900"
                  height="400"
                  src="https://via.placeholder.com/900"
                  alt="somethign"
                />
              </section>
            )) ||
            (index === 5 && (
              <section style={{ backgroundColor: "yellow" }}>
                <img
                  width="900"
                  height="400"
                  src="https://via.placeholder.com/900"
                  alt="somethign"
                />
              </section>
            )) ||
            (index === 2 && (
              <section style={{ backgroundColor: "orange" }}>
                <img
                  width="900"
                  height="400"
                  src="https://via.placeholder.com/900"
                  alt="somethign"
                />
              </section>
            )) ||
            (index === 3 && (
              <section style={{ backgroundColor: "green" }}>
                <img
                  width="900"
                  height="400"
                  src="https://via.placeholder.com/900"
                  alt="somethign"
                />
              </section>
            )) || (
              <section style={{ backgroundColor: "blue" }}>
                <img
                  width="900"
                  height="400"
                  src="https://via.placeholder.com/900"
                  alt="somethign"
                />
              </section>
            )
          }
        /> */}
        <p className="service-description">
          Alta Property Services began with a small crew mowing lawns for REO
          and REI distressed properties. Soon our customers, appreciating our
          can-do attitude and attention to detail, asked us to take on larger
          jobs and to provide more services such as secured services,
          maintenance, landscaping, and remodeling. Today, after years of
          delivering quality property services to satisfied customers, Alta is
          now one of Chicago’s fastest growing commercial and residential
          multi-service providers.
        </p>
        <h2 className="service-heading">OUR SERVICES</h2>
        <div className="image-gallery">
          <Link tabIndex="0" role="menuitem" to="/repairsandrehab">
            <img
              className="navigable-image"
              onClick={() => handleClick("/repairsandrehab")}
              src="images/Repairs-Rehabs.jpg"
              alt="Bathrooms and Kitchens Drywall installation or repair Painting, Carpentry, Flooring, 
              Roof repairs/new roofs, Kitchens and Bathrooms Attic and Basement conversions Additions Exterior Renovations
              Senior or disability-friendly modifications and rehab, Outdoor rooms,
              New or renovated office, shop, and retail space, Exterior building renovations,
              Interior improvements including Senior or Disability accommodations"
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/securedservices">
            <img
              className="navigable-image"
              onClick={() => handleClick("/securedservices")}
              src="images/Secured.jpg"
              alt="Door frame/lock security reinforcements, Fitted panels of your choice for windows and doors,
              Master/ re-key services, Outside security inspections, Real estate lock boxes installed,
              24/7 Emergency Service"
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/trashout">
            <img
              className="navigable-image"
              onClick={() => handleClick("/trashout")}
              src="images/Trash-1.jpg"
              alt="Complete site demo and disposal Eco friendly products used, Foreclosure clean-outs
              Hazardous waste clean up, Maid service, Recycling, Power washing, Small to huge jobs"
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/winterization">
            <img
              className="navigable-image"
              onClick={() => handleClick("/winterization")}
              src="images/Winter.jpg"
              alt="Cap wires, plug gas & water lines Caution notifications placed throughout the property
              Environmental friendly products, Pipe & pressure inspections ,
              Piping system drained & air blown through, 24/7 SERVICE AVAILABLE"
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/landscaping">
            <img
              className="navigable-image"
              onClick={() => handleClick("/landscaping")}
              src="images/Land.jpg"
              alt="Design & installation,All types of plantings; Shrubs, Trees, Flowers,
              Sod, Patios & Walkways,Walls, Bug, fertilizer, and weed control,Debris pick up,Lawn mowing and edging,
              Mulching, Shrub and hedge trimming, Spring/fall cleanup"
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/snowremoval">
            <img
              className="navigable-image"
              onClick={() => handleClick("/snowremoval")}
              src="images/Snow.jpg"
              alt="24/7 EMERGENCY SERVICE,Driveways, parking lots, service roads, walkways,All property types,
              On-site based crew, if needed, Salting, Salt purchase option"
            />
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Services;
