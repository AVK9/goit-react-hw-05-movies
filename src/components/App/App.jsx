import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Home, Movies, MovieDetail } from 'pages';
// import { Header, Section, Container, Text } from 'components';
import Layout from 'Layout/Layout';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Suspense>
  );
};
