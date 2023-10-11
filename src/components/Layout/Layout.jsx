import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Main } from 'components/Main/Main';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </>
  );
};
