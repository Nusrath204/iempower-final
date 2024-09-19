import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import IntroductionSection from "./IntroductionSection";


const headerItems = [
    "Payroll Processing",
    "Manager Self Services",
    "Employee Self Service",
    "HR Processes",
    "Leaves And Attendance",
    "Regularisation and Reimbursements"
];

// Function to handle the floating text animation
const HeaderList = () => {
    return (
        <div className="ticker-wrap">
            <div className="ticker">
                {[...headerItems, ...headerItems].map((item, index) => (
                    <div
                        key={index}
                        className={`ticker-item ${item === "Payroll Processing" ? "with-dot" : ""}`}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

const LandingPage = () => {
    return (
        <div>
            <div
                className="relative w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('topsection.png')`,
                    backgroundSize: '300vh',
                    backgroundPosition: 'center',
                    backgroundPositionY: '50%',
                    backgroundPositionX: 'center',
                    minHeight: '150vh',
                    backdropFilter: 'blur(20px)',
                }}
            >
                <header className="flex flex-col items-center p-6">
                    <div className="flex items-center bg-white p-4 rounded-full shadow-md space-x-6">
                        <img src="/Dlogo.png" alt="Logo" className="w-16 h-16"/>
                        <nav className="flex space-x-6">
                            <div className="group relative">
                                <button className="text-black text-lg font-medium">Modules</button>
                                <div
                                    className="hidden group-hover:block absolute top-full mt-2 bg-white shadow-md p-4 rounded">
                                    <ul>
                                        <li className="py-2">Module 1</li>
                                        <li className="py-2">Module 2</li>
                                    </ul>
                                </div>
                            </div>
                            <button className="text-black text-lg font-medium">Experience</button>
                            <button className="text-black text-lg font-medium">Pricing</button>
                            <button className="text-black text-lg font-medium">Blogs</button>
                            <button className="text-black text-lg font-medium">Contact Us</button>
                        </nav>

                        <Link to="/manager-login">
                            <button className="bg-purple-700 text-white rounded-full py-2 px-6 ml-6">
                                Sign In
                            </button>
                        </Link>
                    </div>
                </header>

                <main className="text-center mt-12">
                    <img
                        src="/logo.png"
                        alt="Empower Image"
                        style={{width: '150px', height: 'auto'}}
                        className="mx-auto mb-8"
                    />
                    <h1 className="text-3xl font-extrabold text-white leading-tight tracking-wide">
                        Empowering your workforce,
                        <br/>
                        one click at a time.
                    </h1>
                    <p className="text-gray-300 mt-4 text-lg tracking-wider max-w-2xl mx-auto">
                        Empower your workforce with iEmpPower, the all-in-one HR solution for modern businesses.
                    </p>

                    <button
                        className="mt-8 bg-purple-500 text-white rounded-full py-3 px-8 hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Book a Demo
                    </button>
                </main>

                <img
                    src="/Background.png"
                    alt="Additional Image"
                    className="mx-auto"
                    style={{
                        width: '1400px',
                        height: 'auto',
                        zIndex: 5,
                        position: 'relative',
                        marginTop: '-50px',
                    }}
                />
                {/* Floating Text Below */}
                <div className="absolute-bottom-ticker">
                    <HeaderList/>
                </div>

            </div>
            <div className="absolute-bottom-introduction">
                <IntroductionSection/>
            </div>
        </div>
    );
};

export default LandingPage;
