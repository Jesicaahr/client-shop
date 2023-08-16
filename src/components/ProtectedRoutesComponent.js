import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutesComponent = ({ admin }) => {
  // let auth = false;
  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to='/login' />;
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        <Outlet />
      </>
    ) : (
      <Navigate to='/login' />
    );
  }
};

export default ProtectedRoutesComponent;
