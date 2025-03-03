import CreateSearch from "../CreateSearch/CreateSearch"
import Discover from "../Discover/Discover";
import './MainContent.scss';

const MainContent = ({setJsonResult}) =>{
    return(
        <main 
        className="main-content">
            <CreateSearch setJsonResult={setJsonResult}/>
            <Discover/>
            
        </main>
    )
}
export default MainContent;