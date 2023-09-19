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
            <div className="body bg-red-400">
                <div className="menuNav">
                    <div className="menuHeader">
                        <p>Navigation</p>
                    </div>
                    {
                        navItems.map( (data, index) => {
                            return <Link
                            key={index}
                            data={{...data, index}}
                            ></Link>
                            
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
    
}