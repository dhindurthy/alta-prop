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
      <section className="service-section">
        <h2 className="service-heading">
          WE CAN PROVIDE ALL YOUR PROPERTY SERVICES
        </h2>
        <p>
          Alta Property Services began with a small crew mowing lawns for REO
          and REI distressed properties. Soon our customers, appreciating our
          can-do attitude and attention to detail, asked us to take on larger
          jobs and to provide more services such as secured services,
          maintenance, landscaping, and remodeling. Today, after years of
          delivering quality property services to satisfied customers, Alta is
          now one of Chicago’s fastest growing commercial and residential
          multi-service providers.
        </p>
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
              alt=""
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/securedservices">
            <img
              className="navigable-image"
              onClick={() => handleClick("/securedservices")}
              src="images/Secured.jpg"
              alt=""
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/trashout">
            <img
              className="navigable-image"
              onClick={() => handleClick("/trashout")}
              src="images/Trash-1.jpg"
              alt=""
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/remediationservices">
            <img
              className="navigable-image"
              onClick={() => handleClick("/remediationservices")}
              src="images/Remdiations.jpg"
              alt=""
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/winterization">
            <img
              className="navigable-image"
              onClick={() => handleClick("/winterization")}
              src="images/Winter.jpg"
              alt=""
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/landscaping">
            <img
              className="navigable-image"
              onClick={() => handleClick("/landscaping")}
              src="images/Land.jpg"
              alt=""
            />
          </Link>
          <Link tabIndex="0" role="menuitem" to="/snowremoval">
            <img
              className="navigable-image"
              onClick={() => handleClick("/snowremoval")}
              src="images/Snow.jpg"
              alt=""
            />
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Services;
