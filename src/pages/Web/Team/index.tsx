/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "antd";
import React from "react";
import { teamMembers } from "../../../constants/TeamData";
import TeamCard from "../../../components/TeamCard";

const Team: React.FC = () => {
  // Define the gradient colors array
  const gradients = [
    "linear-gradient(180deg,#fbbc04,#ff902a,#ea4335)", // Yellow to orange to red
    "linear-gradient(180deg,#34a853,#2daeb8,#4285f4)", // Green to teal to blue
    "linear-gradient(180deg,#fbbc04,#8cc52f,#34a853)", // Yellow to light green to green
    "linear-gradient(180deg,#ea4335,#9b72cb,#4285f4)"  // Red to purple to blue
  ];

  return (
    <div className="flex flex-col justify-center items-center px-4 pt-32 pb-16">
      <div className="flex flex-col justify-center items-center text-center max-w-4xl mb-16">
        <h1 className="text-3xl md:text-6xl font-bold text-black mb-0">
          Our Marvellous Team
        </h1>
      </div>
      <div className="w-full max-w-7xl flex justify-center">
        <Row gutter={[16, 32]} justify="center" className="w-full">
          {teamMembers?.map((member: any, index: number) => (
            <Col
              key={index}
              xl={6}
              lg={8}
              md={12}
              sm={12}
              xs={24}
              className="flex justify-center items-center"
            >
              <TeamCard
                name={member?.name}
                role={member?.role}
                image={member?.image}
                gradient={gradients[index % gradients.length]}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Team;
