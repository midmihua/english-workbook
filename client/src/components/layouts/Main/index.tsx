import { Outlet } from 'react-router-dom';
import Footer from '../../main/Footer';
import Header from '../../main/Header';

const MainLayout = () => {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
