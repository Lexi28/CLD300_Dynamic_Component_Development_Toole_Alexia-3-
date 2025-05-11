import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home';
import Docs from './pages/Docs/Docs';
import DocsOverview from './pages/Docs/DocsOverview';
import DocsButton from './pages/Docs/DocsButton';
import DocsNavBar from './pages/Docs/DocsNavBar';
import DocsCard from './pages/Docs/DocsCard';
import DocsRatingWidget from './pages/Docs/DocsRatingWidget';
import DocsFooter from './pages/Docs/DocsFooter';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="docs" element={<Docs />}>
        <Route index element={<Navigate to="overview" />} />
        <Route path="overview" element={<DocsOverview />} />
        <Route path="button" element={<DocsButton />} />
        <Route path="navbar" element={<DocsNavBar />} />
        <Route path="card" element={<DocsCard />} />
        <Route path="ratingwidget" element={<DocsRatingWidget />} />
        <Route path="footer" element={<DocsFooter />} />
      </Route>
    </Routes>
  );
};

export default Router;
