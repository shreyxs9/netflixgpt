import React, { useEffect } from 'react';
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { addGptToggle } from '../utils/gptSlice';
import { changeLan } from '../utils/configSlice';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const toggle = useSelector((store) => store.gpt.gptToggle);
    console.log(toggle);

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
  const handleGptSearch = () => {
    dispatch(addGptToggle());
  }
const handleLanSelected = (e) => {
dispatch(changeLan(e.target.value));
}
  return (
    <div className='flex w-screen bg-gradient-to-t from-black'>
      <div className="fixed flex top-0 left-0 w-full z-20 p-4 pt-0 justify-between items-center">
        <img 
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
          alt="Netflix Logo" 
          className="w-44 h-auto "
        />
        
        {user && ( 
          <div className="flex w-1/3 justify-end items-center">
              {toggle && (
           <select onClick={handleLanSelected} className="bg-black text-white px-2 py-3 rounded-lg">
           <option value="en">English</option>
           <option value="hindi">Hindi</option>
           <option value="spanish">Spanish</option>
           <option value="french">French</option>
           <option value="kannada">Kannada</option>
           <option value="malyalam">Malyalam</option>
         </select>
        )}
            <button onClick={handleGptSearch} className='text-white ml-4 bg-purple-800 hover:bg-purple-950 p-3 rounded-lg'>
             {toggle? "Home Page": "GPT Search"}
            </button>
            <img 
              src={user.photoURL} // Ensure this is photoURL
              alt="User Avatar" 
              className="w-16 rounded-3xl ml-6 h-auto"
            />
            <button onClick={handleSignOut} className="bg-red-500 text-white font-bold py-3 px-6 ml-6 rounded hover:bg-red-700">
              Sign Out
             </button>
          </div>

   )}
     
      </div>
      
    </div>
  );
};

export default Header;