import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import * as Pages from "../../pages/index";
import PublicWrapper from '../../Layout/PublicWrapper';

// Custom hook to scroll to top on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RegRoutes: React.FC = () => {
 // Assuming user will be null or an object if logged in

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicWrapper />}>
          <Route path="/" element={<Pages.WebPage />} />
          <Route path="/team" element={<Pages.Team />} />
          <Route path="/speakers" element={<Pages.Speakers />} />
          <Route path="/faq" element={<Pages.FAQs />} />
          <Route path="/agenda" element={<Pages.Agenda />} />
          <Route path="/badge" element={<Pages.Badge />} />  
        </Route>
      </Routes>
    </Router>
  );
};

export default RegRoutes;
