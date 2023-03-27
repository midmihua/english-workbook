import { Outlet } from 'react-router-dom';
import Footer from '../../footer';
import Header from '../../header';

const Main = () => {

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

export default Main;
