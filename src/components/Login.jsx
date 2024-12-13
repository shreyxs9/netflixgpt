import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";


const Login = () => {
    const [isSignIn, setisSignIn] = useState(false);
    const [errormessage, setErrormessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = validate(email.current.value, password.current.value);
        setErrormessage(message);
        if(message) return;

        if(!isSignIn){
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });
        } else {

        }
    };

    const toggleSignIn = () => {
        setisSignIn(!isSignIn);
    };

    return (
        <div className="relative h-screen flex flex-col items-center justify-center bg-black">
            <Header />
            <div className="absolute inset-0 z-0">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg"
                    alt="bg"
                    className="w-full h-full object-cover"
                />
            </div>
            <form onSubmit={handleSubmit} className="relative z-10 w-3/12 bg-stone-900 bg-opacity-80 text-white p-12 py-16 rounded-lg flex flex-col items-center">
                <h2 className="text-3xl px-4 pb-4">{isSignIn ? "Sign Up" : "Sign In"}</h2>
                {isSignIn && (
                    <input
                        type="text"
                        placeholder="Full name"
                        className="w-full p-3 py-4 m-2 my-4 bg-gray-700 rounded-md outline-none"
                    />
                )}
                <input
                    type="text"
                    ref={email}
                    placeholder="Email"
                    className="w-full p-3 py-4 m-2 my-4 bg-gray-700 rounded-md outline-none"
                />
                <input
                    type="password"
                    ref={password}
                    placeholder="Password"
                    className="w-full p-3 py-4 m-2 my-4 bg-gray-700 rounded-md outline-none"
                />
                <p className="p-2 text-red-500 text-left">{errormessage}</p>
                <button type="submit" className="w-full p-2 m-2 py-4 my-2 mb-4 bg-red-600 rounded-md hover:bg-red-700">
                    {isSignIn ? "Sign Up" : "Sign In"}
                </button>
                <div className="flex pt-2 justify-start">
                    <span className="text-gray-400">{!isSignIn ? "New to NetflixGPT?" : "Already a Member?"} </span>
                    <span onClick={toggleSignIn} className="ml-1 text-white cursor-pointer hover:underline">
                        {!isSignIn ? "Sign up now." : "Sign In now"}
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;
