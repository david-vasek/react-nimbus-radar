import React from "react";

import s from "./Widget.module.scss";
import classNames from "classnames";
import Loader from "../Loader"; // eslint-disable-line css-modules/no-unused-class
import AnimateHeight from "react-animate-height";
import uuidv4 from "uuid/v4";

class Widget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomId: uuidv4(),
      hideWidget: false,
      collapseWidget: !!props.collapsed,
      height: props.collapsed ? 0 : "auto",
      fullscreened: false,
      reloading: false,
      modal: false,
      apiData: "",
    };
  }

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleClose = () => {
    this.setState({ hideWidget: !this.state.hideWidget });
  };

  handleCollapse = () => {
    let heightValue = this.state.collapseWidget ? "auto" : 0;
    this.setState({
      height: heightValue,
      collapseWidget: !this.state.collapseWidget,
      reloading: false,
    });
  };

  closeWithModal = () => {
    this.toggleModal();
    this.handleClose();
  };

  handleExpand = () => {
    this.setState({
      height: "auto",
      collapseWidget: false,
    });
  };

  handleReload = () => {
    const { widgetType, updateWidgetData } = this.props;
    const type = widgetType;
    if (type) {
      updateWidgetData(type);
    }
    this.setState({ reloading: true });
    let endpoint = false;
    if (!endpoint) {
      setTimeout(() => this.setState({ reloading: false }), 2000);
    } else {
      this.setState({ reloading: true });
      fetch("https://yourapi.com")
        .then((response) => response.json())
        .then((json) => this.setState({ apiData: json.title }))
        .then(setTimeout(() => this.setState({ reloading: false }), 1000));
    }
  };

  handleFullscreen = () => {
    this.setState({ fullscreened: !this.state.fullscreened });
  };

  render() {
    const {
      title,
      className,
      children,
      close,
      fullscreen,
      collapse,
      refresh,
      settings,
      settingsInverse,
      tooltipPlacement,
      showTooltip,
      bodyClass,
      customControls,
      customClose,
      customExpand,
      customCollapse,
      customFullscreen,
      customReload,
      fetchingData,
      customDropDown,
      customBody,
      prompt,
      collapsed,
      widgetType,
      updateWidgetData,
      options, //eslint-disable-line
      ...attributes
    } = this.props;

    const {
      reloading,
      fullscreened,

      height,
      hideWidget,
    } = this.state;

    return (
      <React.Fragment>
        <section
          style={{ display: hideWidget ? "none" : "" }}
          className={classNames(
            "widget",
            { fullscreened: !!fullscreened },
            s.widget,
            className,
            reloading || fetchingData ? s.reloading : ""
          )}
          {...attributes}
        >
          <AnimateHeight duration={500} height={height}>
            <div className={`${s.widgetBody} widget-body ${bodyClass}`}>
              {reloading || fetchingData ? (
                <Loader className={s.widgetLoader} size={40} />
              ) : customBody ? (
                <div className="jumbotron handle bg-default text-white mb-0">
                  <div className="container"></div>
                </div>
              ) : (
                children
              )}
            </div>
          </AnimateHeight>
        </section>
      </React.Fragment>
    );
  }
}

export default Widget;
