import {motion, useScroll, useTransform} from 'framer-motion';
import {useRef} from 'react';
import {ArrowIcon} from '../../assets/SVG.jsx'

import './HeaderBackground.scss';

const HeaderBackground = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    return(
        <div ref={ref} className='header-background'>
            
            <motion.div className='header-background__image' style={{y: backgroundY}}></motion.div>
            <div className='header-background__image-bottom'></div>
            <motion.h2  style={{y: textY}}className='start-tagline--main'>Discover the world with us</motion.h2>
            <div className='header-background__content'>
            <h3 className='start-tagline--sub'>Start Planning</h3>
       <motion.div
                    initial={{y: -30}}
                    animate={{y:5}}
                    transition={{type: 'inertia', velocity: 40, repeat: Infinity, repeatDelay: 3} }
                >
                    <a href='#main-content' className='arrow-down-button'><ArrowIcon/></a>
        </motion.div>
        </div>
        </div>
    );
}
export default HeaderBackground;