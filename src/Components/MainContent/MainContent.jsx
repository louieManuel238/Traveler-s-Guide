import CreateSearch from "../CreateSearch/CreateSearch"
import Discover from "../Discover/Discover";
import './MainContent.scss';

const MainContent = ({setJsonResult}) =>{
    return(
        <main className="main-content" id="main-content">
            <div className="main-content__container">
                <CreateSearch setJsonResult={setJsonResult}/>
                <Discover/>
            </div>
            
            
        </main>
    )
}
export default MainContent;