import {motion} from 'framer-motion';

import {ArrowIcon} from '../../assets/SVG.jsx'
import './header.scss'

 const Header = () => {
    // const [backgroundImage, setBackgroundImage] = useState('');
    // useEffect(()=>{
    //     async function getImage() {
    //         const pexelAPI = new Pexels();
    //         const photoIdResult = await pexelAPI.getPhotoById(691668);
    //         console.log(photoIdResult);
    //         setBackgroundImage(photoIdResult.src.large2x);
    //     }
    //     getImage();
    // },[])
  
    return(
    <header className='header'>
       <article className='header__call-to-action'>
            <h2 className='start-tagline'>Start Planning</h2>
            <motion.div
                initial={{y: -30}}
                animate={{y:5}}
                transition={{type: 'inertia', velocity: 40, repeat: Infinity, repeatDelay: 3} }
              
            >
                <a href='#discover' className='arrow-down-button'><ArrowIcon/></a>
            </motion.div>
            
       </article>
    </header>)

}
export default Header;