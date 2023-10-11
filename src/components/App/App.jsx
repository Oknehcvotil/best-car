import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

import { Home } from 'pages/Home/Home';
import { Catalog } from 'pages/Catalog/Catalog';
import { Favorite } from 'pages/Favorite/Favorite';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
