import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Preloader from "../Loading/Preloader";
import NavBar from '../NavBar/NavBar';

const Layout = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setLoading(true), 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!loading ? (
        <Preloader />
      ) : (
        <div className="wrapper">
          <div className="content">
            <main>
              <Outlet />
              <NavBar />
            </main>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};


export default Layout;
