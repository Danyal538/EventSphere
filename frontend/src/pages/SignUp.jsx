import React, { useState } from 'react';
import logo from '../assets/assets/Logo.png';
import cross from '../assets/assets/Close button.png';
import google from '../assets/assets/Icon.png';
import facebook from '../assets/assets/Icon (1).png';
import eye from '../assets/assets/Vector.png';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-20 mb-20">
            <div className="flex flex-col lg:flex-row shadow-lg rounded-lg overflow-hidden max-w-5xl w-full">
                {/* Left Section */}
                <div className="bg-[#2B293D] text-white flex-1 p-10 flex flex-col justify-center">
                    <img src={logo} alt="Logo" className="w-32 mb-8" />
                    <h1 className="text-4xl font-bold leading-tight">
                        Discover tailored events.
                    </h1>
                    <p className="mt-4 text-lg">
                        Sign up for personalized recommendations today!
                    </p>
                </div>

                {/* Right Section */}
                <div className="bg-white flex-1 p-10 relative">
                    {/* Close button */}
                    <img src={cross} alt="Close" className="w-6 absolute top-4 right-4 cursor-pointer" onClick={() => navigate("/")} />

                    <h2 className="text-2xl font-semibold mb-6">Create Account</h2>

                    {/* Social Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <button className="flex items-center gap-3 border border-gray-300 py-2 px-4 w-full justify-center hover:bg-gray-50">
                            <img src={google} alt="Google" className="w-5" />
                            <span>Continue with Google</span>
                        </button>
                        <button className="flex items-center gap-3 border border-gray-300 py-2 px-4 w-full justify-center hover:bg-gray-50">
                            <img src={facebook} alt="Facebook" className="w-5" />
                            <span>Continue with Facebook</span>
                        </button>
                    </div>

                    <div className="text-center text-gray-400 mb-4">OR</div>

                    {/* Form */}
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter full name"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Password</label>
                            <div className="flex items-center border border-gray-300 rounded-md mt-1 px-4 py-2">
                                <input
                                    type="password"
                                    placeholder="Set password"
                                    className="flex-1 focus:outline-none"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <img src={eye} alt="Show password" className="w-4 cursor-pointer ml-2" />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#2B293D] text-white py-2 rounded-md hover:bg-[#1e1c2d] transition duration-200"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <span className="text-[#2B293D] font-semibold cursor-pointer hover:underline" onClick={() => navigate("/login")}>
                            Login
                        </span>
                    </p>
                    <p className='mt-6 text-center text-sm text-gray-500' onClick={() => navigate("/")}>Back to home page</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
