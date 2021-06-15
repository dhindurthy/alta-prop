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
        { name: "sheep" },
        { name: "monkey" }
      ]
    });
  }
  render() {
    return (
      <section>
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
                    src="images/FireDeptweb.jpg"
                    alt="fire-dept"
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
              )) ||
              (index === 3 && (
                <section>
                  <img
                    width="533"
                    height="400"
                    src="images/Mold-Remediation.jpg"
                    alt="mold remedy"
                  />
                  <img
                    width="533"
                    height="400"
                    src="images/trashout.jpg"
                    alt="trashout"
                  />
                  {/* /*/}
                </section>
              )) ||
              (index === 4 && (
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
              (index === 5 && (
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
            Services, Remediation Services, Winterization
          </article>
        </section>
      </section>
    );
  }
}

export default Home;
