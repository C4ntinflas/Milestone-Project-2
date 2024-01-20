import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-[#36311F] p-2">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-white text-lg font-bold">Home</Link>
                <div className="flex space-x-2">
                    <Link to="/stores" className="text-white hover:underline">Stores</Link>
                    <Link to="/user-login" className="text-white hover:underline">User Login</Link>
                    <Link to="/store/login" className="text-white hover:underline">Store Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;