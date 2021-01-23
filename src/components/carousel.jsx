import React from "react";
import Button from "./button.jsx";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0,
      isPrevDisabled: true,
      isNextDisabled: false,
      animationClass: "carousel-item-rtl"
    };
    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick = (type) => {
    let activeKey = this.state.activeKey;
    let length = this.props.todos.length;
    if (type === "next" && activeKey < length - 1) {
      this.setState({
        isPrevDisabled: false,
        animationClass: "carousel-item-rtl"
      });
      activeKey = activeKey + 1;
    } else if (type === "prev" && activeKey > 0) {
      this.setState({
        isNextDisabled: false,
        animationClass: "carousel-item-ltr"
      });
      activeKey = activeKey - 1;
    }
    if (activeKey === length - 1 || activeKey === 0) {
      if (type === "prev") {
        this.setState({
          isPrevDisabled: true,
          animationClass: "carousel-item-ltr"
        });
      }
      if (type === "next") {
        this.setState({
          isNextDisabled: true,
          animationClass: "carousel-item-rtl"
        });
      }
    }
    this.setState({ activeKey: activeKey });
  };

  render(props) {
    return (
      <section className="carousel">
        <section className="main">
          <ul id={this.props.id}>
            {this.props.todos.map(
              (i, index) =>
                this.state.activeKey === index && (
                  <li key={index} className={this.state.animationClass}>
                    {this.props.panelContent(i, index)}
                    {/* <p>Looped content: {i.name}</p> */}
                  </li>
                )
            )}
          </ul>
          <article>
            <hr />
            <h3 tabIndex="0">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis
            </h3>
            <hr />
          </article>
        </section>
        <div role="presentation" className="slider-buttons">
          <Button
            disabled={this.state.isPrevDisabled && this.props.prevDisabled}
            buttonClick={this.buttonClick.bind(this, "prev")}
          >
            {this.props.leftButton}
          </Button>
          {this.props.textBetweenButtons(this.state.activeKey)}
          <Button
            disabled={this.state.isNextDisabled && this.props.nextDisabled}
            buttonClick={this.buttonClick.bind(this, "next")}
          >
            {this.props.rightButton}
          </Button>
        </div>
      </section>
    );
  }
}
export default Carousel;

// Set default props
Carousel.defaultProps = {
  nextDisabled: true,
  prevDisabled: true
};
