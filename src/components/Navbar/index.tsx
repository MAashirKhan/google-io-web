import React from 'react';
import { Navbar } from 'flowbite-react';

const DashboardNavbar: React.FC = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <span className="self-center text-xl font-semibold whitespace-nowrap">
          Dashboard
        </span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default DashboardNavbar;
