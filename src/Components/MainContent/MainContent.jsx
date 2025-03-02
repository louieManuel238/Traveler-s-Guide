import CreateSearch from "../CreateSearch/CreateSearch"
import Discover from "../Discover/Discover";
import './MainContent.scss';

const MainContent = () =>{
    return(
        <main 
        className="main-content">
            <CreateSearch/>
            <Discover/>
            
        </main>
    )
}
export default MainContent;