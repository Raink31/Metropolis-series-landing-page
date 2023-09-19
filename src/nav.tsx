import './App.scss'
import  { motion } from 'framer-motion'
import { menuSlide } from '../src/anim';
import Link from '../src/link'

const navItems = [
    {
        title: 'SHOP',
        href: "/",
    },   
    {
        title: 'COLLECTION',
        href: "/",
    },
    {
        title: 'ABOUT',
        href: "/",
    },
    {
        title: 'CONTACTS',
        href: "/",
    },
]

export default function nav() {
    return (
        <motion.div
            variants={menuSlide}
            initial='initial'
            animate='enter'
            exit='exit'
            className='menu'
        >
            <div className="body absolute bg-[#090909] top-[-60px] right-[-30px] h-[9999px] sm:w-[500px] z-20 lg:hidden sm:text-4xl text-2xl pt-40 sm:pl-16 menuBody w-[350px] pl-8">
                <div className="menuNav">
                    <div className="menuHeader pb-20">
                        <div className='flex items-center gap-8 pb-10'>
                            <a href=""><svg className='w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="rgba(255,255,255,1)"></path></svg></a>
                            <a href=""><svg className='w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" fill="rgba(255,255,255,1)"></path></svg></a>
                            <a href=""><svg className='w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.00488 7.99951V5.99951C7.00488 3.23809 9.24346 0.999512 12.0049 0.999512C14.7663 0.999512 17.0049 3.23809 17.0049 5.99951V7.99951H20.0049C20.5572 7.99951 21.0049 8.44723 21.0049 8.99951V20.9995C21.0049 21.5518 20.5572 21.9995 20.0049 21.9995H4.00488C3.4526 21.9995 3.00488 21.5518 3.00488 20.9995V8.99951C3.00488 8.44723 3.4526 7.99951 4.00488 7.99951H7.00488ZM7.00488 9.99951H5.00488V19.9995H19.0049V9.99951H17.0049V11.9995H15.0049V9.99951H9.00488V11.9995H7.00488V9.99951ZM9.00488 7.99951H15.0049V5.99951C15.0049 4.34266 13.6617 2.99951 12.0049 2.99951C10.348 2.99951 9.00488 4.34266 9.00488 5.99951V7.99951Z" fill="rgba(255,255,255,1)"></path></svg></a>
                        </div>
                        <form className='flex sm:items-center gap-8 flex-col sm:flex-row' action="">
                            <input type="text" className={`bg-[#fafafa] h-[4vh] rounded-md text-[#131313] searchbar text-base sm:w-[290px] w-[250px] px-2 placeholder-gray-400`} placeholder='What are you looking for ?' />
                            <button type='button'>
                                <svg className='w-9' xmlns="http://www.w3.o rg/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="rgba(255,255,255,1)"></path></svg>
                            </button>
                        </form>
                    </div>
                    <div className='flex flex-col gap-10'>
                        {
                            navItems.map((data, index) => {
                                return <Link
                                    key={index}
                                    data={{ ...data, index }}
                                ></Link>
                            })
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
    
}