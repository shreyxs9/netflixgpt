import React, { useEffect } from 'react';
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    useEffect( () =>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
          navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });
      },[]);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      console.error("Sign-out error:", error);
    });
  };

  return (
    <div className='flex w-screen' style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8000) 0.000%, rgba(0, 0, 0, 0.7889) 8.333%, rgba(0, 0, 0, 0.7556) 16.67%, rgba(0, 0, 0, 0.7000) 25.00%, rgba(0, 0, 0, 0.6222) 33.33%, rgba(0, 0, 0, 0.5222) 41.67%, rgba(0, 0, 0, 0.4000) 50.00%, rgba(0, 0, 0, 0.2778) 58.33%, rgba(0, 0, 0, 0.1778) 66.67%, rgba(0, 0, 0, 0.1000) 75.00%, rgba(0, 0, 0, 0.04444) 83.33%, rgba(0, 0, 0, 0.01111) 91.67%, rgba(0, 0, 0, 0.000) 100.0%)' }}>
      <div className="fixed flex top-0 left-0 w-full z-20 p-4 justify-between items-center">
        <img 
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
          alt="Netflix Logo" 
          className="w-44 h-auto"
        />
        {user && (
          <div className="flex items-center">
            <img 
              src={user.photoURL} // Ensure this is photoURL
              alt="User Avatar" 
              className="w-20 rounded-3xl h-auto"
            />
            <button onClick={handleSignOut} className="bg-red-500 text-white font-bold py-2 px-4 ml-4 rounded hover:bg-red-700">
              Sign Out
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;