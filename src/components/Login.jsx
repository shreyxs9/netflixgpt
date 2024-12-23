import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom'
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";


const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async () => { 
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const message = validate(email, password);
        setErrorMessage(message);
        if (message) return;
 
        try {
            if (isSignUp) {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log("User signed up:", userCredential.user);
                await updateProfile(userCredential.user, {
                    displayName: nameRef.current.value,
                    photoURL: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                });
                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                navigate("/browse");
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                console.log("User signed in:", userCredential.user);
                navigate("/browse");

            }
        } catch (error) {
            setErrorMessage(`Error: ${error.message}`);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        }
    };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="relative h-screen flex flex-col items-center justify-center bg-black">
            <Header />
            <div className="absolute inset-0 z-0">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
                className="relative z-10 w-3/12 bg-stone-900 bg-opacity-80 text-white p-12 py-16 rounded-lg flex flex-col items-center"
            >
                <h2 className="text-3xl px-4 pb-4">{isSignUp ? "Sign Up" : "Sign In"}</h2>
                {isSignUp && (
                    <label htmlFor="name" className="w-full text-left text-gray-400">
                        Full Name
                        <input
                            id="name"
                            type="text"
                            ref={nameRef}
                            placeholder="Full name"
                            className="w-full p-3 py-4 m-2 my-4 bg-gray-700 rounded-md outline-none"
                        />
                    </label>
                )}
                <label htmlFor="email" className="w-full text-left text-gray-400">
                    Email
                    <input
                        id="email"
                        type="email"
                        ref={emailRef}
                        placeholder="Email"
                        className="w-full p-3 py-4 m-2 my-4 bg-gray-700 rounded-md outline-none"
                    />
                </label>
                <label htmlFor="password" className="w-full text-left text-gray-400">
                    Password
                    <input
                        id="password"
                        type="password"
                        ref={passwordRef}
                        placeholder="Password"
                        className="w-full p-3 py-4 m-2 my-4 bg-gray-700 rounded-md outline-none"
                    />
                </label>
                <p className="p-2 text-red-500 text-left">{errorMessage}</p>
                <button type="submit" className="w-full p-2 m-2 py-4 my-2 mb-4 bg-red-600 rounded-md hover:bg-red-700">
                    {isSignUp ? "Sign Up" : "Sign In"}
                </button>
                <div className="flex pt-2 justify-start">
                    <span className="text-gray-400">
                        {isSignUp ? "Already a member?" : "New to NetflixGPT?"}
                    </span>
                    <span onClick={toggleSignUp} className="ml-1 text-white cursor-pointer hover:underline">
                        {isSignUp ? "Sign in now." : "Sign up now."}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;
