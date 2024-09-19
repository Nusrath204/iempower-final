import React from 'react';

const ManagerLogin = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <form className="bg-white p-8 shadow-md rounded-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Manager Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-2 border mb-4 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border mb-4 rounded"
                />
                <button className="bg-purple-700 text-white w-full py-2 rounded">Login</button>
            </form>
        </div>
    );
};

export default ManagerLogin;
