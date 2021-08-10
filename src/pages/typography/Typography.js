import React from "react";
import { Row, Col } from "reactstrap";

import Widget from "../../components/Widget";

const Typography = () => (
  <div>
    <h1 className="page-title">
      Weekly Forecast - <span className="fw-semi-bold"></span>
    </h1>
    <Row>
      <Col xs={12} lg={6}>
        <Widget>
          <h4>Your week is going to look like</h4>
          {/* <WeekWeather /> */}
        </Widget>
      </Col>
    </Row>
  </div>
);

export default Typography;
