import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    let Links = [
        { name: "Information", link: "/" },
        { name: "Trips", link: "/" },
        { name: "About Me", link: "/" },
        { name: "Contact Me", link: "/" },
    ];

    let [open, setOpen] = useState(false);

    return (
        <>
            <div className='w-full bg-white fixed top-0 left-0 z-10'>
                <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
                    <motion.div 
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }} 
                        transition={{ duration: 1 }}
                        className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                        <span className='text-3xl text-gray-900 mr-1 pt-2'>
                            <ion-icon name="airplane"></ion-icon>
                        </span>
                        FeetToMile
                    </motion.div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon>
                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-10 z-[10]
                    left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in-out ${open ? 'top-20' : 'top-[-490px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                    <a href={link.link} className='text-gray-800 hover:text-gray-600 duration-300'>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;