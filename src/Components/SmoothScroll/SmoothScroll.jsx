import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import './SmoothScroll.scss';

function SmoothScroll({children}){
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { mass: 0.09 })

    useEffect(() => {
        const handleResize = () => {
          if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight)
          }
        }
      
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        }
      }, [contentRef, children]);


      const y = useTransform(smoothProgress, value => {
        return value * -(contentHeight - window.innerHeight);
      });

    return <>
      <div style={{ height: contentHeight }} />

        <motion.div 
            className="scrollBody" 
            ref={contentRef}
            style={{ y }}
        >
            {children}
        </motion.div>
</>;

}
  
  export default SmoothScroll;