import React from "react";
import "../style.scss";
import Button from "./button.jsx";
import Carousel from "./carousel.jsx";

class CarouselDemo extends React.Component {
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
      <section className="carousel-main">
        <Carousel
          leftButton="<"
          rightButton=">"
          todos={this.state.articles}
          textBetweenButtons={(activeKey) => (
            <span>{/* {activeKey + 1} de {this.state.articles.length} */}</span>
          )}
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
        />
      </section>
    );
  }
}

export default CarouselDemo;
