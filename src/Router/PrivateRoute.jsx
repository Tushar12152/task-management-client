

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import swal from 'sweetalert';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [redirectLocation, setRedirectLocation] = useState(null);
 

  useEffect(() => {
    if (!user && !loading) {
      swal({
        title: "Are you sure?",
        text: "Do you want to Log In Now?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          setRedirectLocation('/login');
        } else {
          swal("You have to Login First to Access it !!");
          setRedirectLocation('/')

        }
      });
    }
  }, [user, loading]);

  if (loading) {
    return  <p>loading......</p>
  }

  if (user) {
    return children;
  } else{
    return <Navigate to={redirectLocation} state={location?.pathname} />;
  } 
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;