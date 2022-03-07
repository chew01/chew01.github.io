import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Loading from './views/Loading';

const Home = lazy(() => import('./views/Home'));
const Profile = lazy(() => import('./views/Profile'));
const Ongoing = lazy(() => import('./views/Ongoing'));

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HashRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ongoing" element={<Ongoing />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
