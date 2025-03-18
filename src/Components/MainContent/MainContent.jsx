import { useScroll } from "framer-motion";
import CreateSearch from "../CreateSearch/CreateSearch"
import Discover from "../Discover/Discover";
import './MainContent.scss';
import { useRef } from "react";

const MainContent = ({setJsonResult}) =>{
    const ref = useRef(null);
    const {scrollY} = useScroll({target: ref, offset:["start end", "end end"]});
    return(
        <main className="main-content" id="main-content" ref={ref}>
            <div className="main-content__container">
                <CreateSearch setJsonResult={setJsonResult}/>
            </div>
            
            
        </main>
    )
}
export default MainContent;