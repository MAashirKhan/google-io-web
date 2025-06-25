import { Col, Row } from "antd";
import React from "react";

const Speakers: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center h-auto mt-24">
        {/* <h1 className="text-5xl font-semibold">Speakers</h1> */}
        {/* <p className="mt-2 text-lg font-normal">
          Our speakers are influential leaders and allies actively involved in
          various communities within their organizations, cities, countries, and
          beyond, making a significant impact through their contributions and
          support.
        </p> */}
      </div>
      <Row gutter={[20, 20]} justify={'center'} align={"middle"} className="w-full mt-6">
          <Col xs={24}>
              <h1 className="text-6xl font-bold text-center">Coming Soon</h1>
          </Col>
      </Row>
    </div>
  );
};

export default Speakers;
