import React, { useEffect } from 'react';
import './CreateSearch.scss';
import {TextField, Label, Input} from 'react-aria-components';
import Autocomplete from "react-google-autocomplete";
import AutoCompleteAddressSearch from './AutoCompleteAddressSearch';


const CreateSearch = () => {
    
    return (
        <section className='search-section'>
            <h2 className='search-section__header'>Where do you want to go?</h2>
            <form className='search-section__search-form'>
            <AutoCompleteAddressSearch/>
                
            </form>
        </section>
        
    );
};

export default CreateSearch;