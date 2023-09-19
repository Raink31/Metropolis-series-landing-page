import './App.scss'
import  { motion } from 'framer-motion'
import { slide } from '../src/anim';

export default function Link({data} ) {

    const {title, href, index} = data

    return (
        <motion.div
        variants={slide}
        custom={index}
        initial='initial'
        animate='enter'
        exit='exit'
        >
            <a href={href} className='linkNav'>{title}</a>
        </motion.div>
    )
}