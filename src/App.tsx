import './App.scss'
import { useEffect } from 'react'
import  { motion } from 'framer-motion'
import { fadeInUp } from './anim'

function App() {

  useEffect(() => {
    
  })

  return (
    <main className='pt-4 px-6 overflow-x-hidden'>
      <header className='relative mb-2'>
        <motion.nav className='flex items-center justify-between' variants={}>
          <div className='lg:hidden block'>
            <p className='flex flex-col items-center'>
              <strong className='text-5xl'>C.P.</strong>
              <span className='-translate-y-3 text-2xl'>COMPANY</span>
            </p>
          </div>
          <svg className='lg:hidden block w-[50px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" fill="rgba(255,255,255,1)"></path></svg>
          <ul className='lg:flex items-center gap-6 hidden'>
            <li>SHOP</li>
            <li>COLLECTION</li>
            <li>ABOUT</li>
            <li>CONTACTS</li>
          </ul>
          <div className='lg:block logo absolute left-0 right-0 ml-auto mr-auto w-max translate-y-4 hidden'>
            <p className='flex flex-col items-center'>
              <strong className='text-4xl'>C.P.</strong>
              <span className='-translate-y-3'>COMPANY</span>
            </p>
          </div>
          <ul className='lg:flex items-center gap-4 hidden'>
            <li><svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="rgba(255,255,255,1)"></path></svg></li>
            <li><svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="rgba(255,255,255,1)"></path></svg></li>
            <li><svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" fill="rgba(255,255,255,1)"></path></svg></li>
            <li><svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.00488 7.99951V5.99951C7.00488 3.23809 9.24346 0.999512 12.0049 0.999512C14.7663 0.999512 17.0049 3.23809 17.0049 5.99951V7.99951H20.0049C20.5572 7.99951 21.0049 8.44723 21.0049 8.99951V20.9995C21.0049 21.5518 20.5572 21.9995 20.0049 21.9995H4.00488C3.4526 21.9995 3.00488 21.5518 3.00488 20.9995V8.99951C3.00488 8.44723 3.4526 7.99951 4.00488 7.99951H7.00488ZM7.00488 9.99951H5.00488V19.9995H19.0049V9.99951H17.0049V11.9995H15.0049V9.99951H9.00488V11.9995H7.00488V9.99951ZM9.00488 7.99951H15.0049V5.99951C15.0049 4.34266 13.6617 2.99951 12.0049 2.99951C10.348 2.99951 9.00488 4.34266 9.00488 5.99951V7.99951Z" fill="rgba(255,255,255,1)"></path></svg></li>
          </ul>
        </motion.nav>
      </header>
      <section className='flex flex-col items-center'>
        <h1 className='lg:text-[4vw] text-[6vw] flex flex-col items-center scale-y-[0.8] xl:-mb-8 lg:-mb-4'>
          NEW COLLECTION
          <br />
          <span className='2xl:-translate-y-8 xl:-translate-y-6 -translate-y-4 tracking-wider text-black'>
            METROPOLIS SERIES
          </span>
        </h1>
        <div className='images-container flex lg:items-start w-screen lg:justify-between gap-4 lg:flex-row flex-col items-center'>
          <img src="/1.jpg" alt="mode photo number 1" className='flex-1 lg:w-[33%] w-[90%] h-[800px] object-cover'/>
          <img src="/2.jpg" alt="mode photo number 2" className='flex-1 lg:w-[33%] w-[90%] h-[800px] object-cover'/>
          <img src="/3.jpg" alt="mode photo number 3" className='flex-1 lg:w-[33%] w-[90%] h-[800px] object-cover'/>
        </div>
      </section>
    </main>
  )
}

export default App
