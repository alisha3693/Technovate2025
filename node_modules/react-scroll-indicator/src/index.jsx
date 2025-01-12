import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Indicator = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  ${(props) => css`
    background: ${props.color};
    width: ${props.percentage}%;
    height: ${props.size}px;
    opacity: ${props.opacity};
  `}
`;

class ScrollIndicator extends Component {
  state = {
    percentage: 0
  };

  componentDidMount() {
    this.updateState();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.updateState);
      window.addEventListener("scroll", this.updateState);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.updateState);
      window.removeEventListener("scroll", this.updateState);
    }
  }

  getPageHeight() {
    if (typeof window !== "undefined") {
      const { document } = window;

      var body = document.body,
        html = document.documentElement;

      return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    }

    return 0;
  }

  getScrollPercentage() {
    if (typeof window !== "undefined") {
      const pageHeight = this.getPageHeight();
      const position = window.scrollY;
      const windowHeight = window.innerHeight;

      const percentage = (position * 100) / (pageHeight - windowHeight);

      return this.limitZeroToOneHundred(percentage);
    }

    return 0;
  }

  limitZeroToOneHundred(n) {
    return n > 0 ? (n <= 100 ? n : 100) : 0;
  }

  updateState = () => {
    const opacity = this.getScrollPercentage(true, 0) / 100;

    this.setState({
      percentage: this.getScrollPercentage(false),
      opacity: this.props.dynamicOpacity ? (opacity > this.props.minOpacity ? opacity : this.props.minOpacity) : 1
    });
  };

  render() {
    return (
      <Indicator
        color={this.props.color}
        size={this.props.size}
        percentage={this.state.percentage}
        opacity={this.state.opacity}
      />
    );
  }
}

ScrollIndicator.defaultProps = {
  size: 5,
  color: "#3d3d3d",
  minOpacity: 0.2,
  dynamicOpacity: false
};

ScrollIndicator.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  minOpacity: PropTypes.number,
  dynamicOpacity: PropTypes.bool
};

export default ScrollIndicator;
