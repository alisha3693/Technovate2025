import React, { Component } from "react";
import Indicator from "./index";

const withScrollIndicator = (scrollProps = {}) => (Page) =>
  class ScrollBarIndicator extends Component {
    limitZeroToOneHundred(n) {
      return n > 0 ? (n <= 100 ? n : 100) : 0;
    }

    getPageHeight = () => {
      if (typeof window !== "undefined") {
        const { document } = window;

        var body = document.body,
          html = document.documentElement;

        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      }

      return 0;
    };

    getScrollPercentage = (rounded = false, precision = 2) => {
      if (typeof window !== "undefined") {
        const pageHeight = this.getPageHeight();
        const position = window.scrollY;
        const windowHeight = window.innerHeight;

        const percentage = (position * 100) / (pageHeight - windowHeight);

        if (rounded) {
          if (precision < 0) {
            precision = 2;
          }

          return this.limitZeroToOneHundred(Math.round(percentage * Math.pow(10, precision)) / Math.pow(10, precision));
        }

        return this.limitZeroToOneHundred(percentage);
      }

      return 0;
    };

    render() {
      return (
        <React.Fragment>
          <Indicator {...scrollProps} />
          <Page
            {...this.props}
            scrollInfo={{
              getPercentage: this.getScrollPercentage,
              getHeight: this.getPageHeight
            }}
          />
        </React.Fragment>
      );
    }
  };

export default withScrollIndicator;
