import {motion} from 'framer-motion';

import './header.scss'
import HeaderBackground from '../HeaderBackground/HeaderBackground.jsx';
import {ArrowIcon} from '../../assets/SVG.jsx'

 const Header = () => {
  
    return(
    <header className='header'>
       <HeaderBackground/>
      
    </header>)

}
export default Header;