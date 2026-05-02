import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
};

export default PublicLayout;
