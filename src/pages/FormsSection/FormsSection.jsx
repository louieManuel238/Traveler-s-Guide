import CreateSearch from "../../Components/CreateSearch/CreateSearch";
import './FormsSection.scss';

const FormsSection = ({setJsonResult}) => {
    return (
        <main className="main-content" id="main-content">
            <div className="main-content__container">
                <CreateSearch setJsonResult={setJsonResult}/>
            </div>
        </main>
    );
};

export default FormsSection;