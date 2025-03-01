import { useEffect, useState} from 'react';
import Pexels from '../../api/pixels.js';
import './header.scss'

 const Header = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    useEffect(()=>{
        async function getImage() {
            const pexelAPI = new Pexels();
            const photoIdResult = await pexelAPI.getPhotoById(691668);
            console.log(photoIdResult);
            setBackgroundImage(photoIdResult.src.large2x);
        }
        getImage();
    },[])
    
    return(
    <div className='header' style={{ backgroundImage: `url(${backgroundImage})` }}>
       <article className='header__call-to-action'>
            <h2>Plan your Trails &  Start your Tales</h2>
       </article>
    </div>)

}
export default Header;