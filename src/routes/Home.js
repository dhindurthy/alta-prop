import React from "react";
import Carousel from "../components/carousel.jsx";
// import CarouselDemo from "../components/carouseldemo.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    this.setState({
      articles: [
        { name: "donkey" },
        { name: "buffalo" },
        { name: "pig" },
        { name: "cow" },
        { name: "sheep" }
      ]
    });
  }
  render() {
    return (
      <section className="home-page">
        <head>
          <title>All Property Services at Alta Property Services</title>
          <meta name="robots" content="index, follow" />
          <meta name="description" content="ALTA Property Services offers all kinfd of services like Landscaping, Snow Removal, Repairs and Rehab, Trash Out, Secured
            Services, Winterization"/>
        </head>
        <section className="body">
          <Carousel
            leftButton="<"
            rightButton=">"
            showBanner={true}
            sliders={this.state.articles}
            textBetweenButtons={(activeKey) => (
              <span>
                {/* {activeKey + 1} de {this.state.articles.length} */}
              </span>
            )}
            banner="Proudly Serving Greater Chicago Since 2010"
            panelContent={(i, index) =>
              (index === 0 && (
                <section>
                  <img
                    width="533"
                    height="400"
                    src="images/Snow_plow-matchedsize.png"
                    alt="snow-plough"
                  />
                  <img
                    width="533"
                    height="400"
                    src="images/winterixzed_matchedsize.png"
                    alt="winterized"
                  />
                </section>
              )) ||
              (index === 1 && (
                <section>
                   <img
                    width="533"
                    height="400"
                    src="images/trashout.jpg"
                    alt="trashout"
                  />
                  <img
                    width="533"
                    height="400"
                    src="images/maintenace_matchedsize.jpg"
                    alt="maintenance"
                  />
                </section>
              )) ||
              (index === 2 && (
                <section>
                  <img
                    width="533"
                    height="400"
                    src="images/boardup-side-houseCleanUp.jpg"
                    alt="boardup"
                  />
                  <img
                    width="533"
                    height="400"
                    src="images/flowerbed-matchedsize.jpg"
                    alt="flowerbed"
                  />
                  {/*  */}
                </section>
              ))  ||
              (index === 3 && (
                <section>
                  <img
                    width="533"
                    height="400"
                    src="images/septic-drain-sewer-drain-backups-1024x768-1.jpg"
                    alt="drain clean"
                  />
                  <img
                    width="533"
                    height="400"
                    src="images/powerwash_matchedsize.jpg"
                    alt="powerwash"
                  />
                </section>
              )) ||
              (index === 4 && (
                <section
                  style={{
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "flex-start",
                    width: "min-content"
                  }}
                  className="picture-frame"
                >
                  <div>
                    <img
                      src="images/drilling-machine-guy-e1613935293115.jpg"
                      alt="somethign"
                    />
                    
                  </div>
                  <div>
                    <img
                      src="images/trash-claean_matchedsize.jpg"
                      alt="somethign"
                    />
                  </div>
                </section>
              ))
            }
          />
        </section>
        <h2 className="h2-content" tabIndex="0">
          <hr />
          ALTA Property Services
          <hr />
        </h2>
        <section className="articles-main">
          <article tabIndex="0">
            <h3>About Us</h3>Alta is your top choice for all your commercial or
            residential property & preservation services. You can count on us!
          </article>
          <article tabIndex="0">
            <h3>Our Services</h3>Alta Property Services is one of Chicago’s
            fastest growing commercial and residential multi-service providers.
            <br />
            Below are some services we provide.
            <br />
            Landscaping, Snow Removal, Repairs and Rehab, Trash Out, Secured
            Services, Winterization
          </article>
          <article className="home-page-images">
            {/* <img
              width="202"
              height="153"
              src="images/I-Hire-Veterans.png"
              alt="veterans"
            />
            <img
              width="110"
              height="33"
              src="images/osha.png"
              alt="osha"
            /> */}
            <img
              width="400"
              height="153"
              src="images/IICRC-Logo-Best-for-Digital.png"
              alt="IIRC"
            />
            <img
              width="245"
              height="153"
              src="images/EPA_Leadsafe_Logo.png"
              alt="IIRC"
            />
          </article>
        </section>
      </section>
    );
  }
}

export default Home;
