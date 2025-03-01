import React from 'react';
import './CreateSearch.scss';
import {TextField, Label, Input} from 'react-aria-components';

const CreateSearch = () => {
    return (
        <section className='search-section'>
            <h2>Where do you want to go?</h2>
            <form className='search-form'>
            

                <TextField className={"flex size-1"}>
                <Label className='size-12'>First name</Label>
                <Input />
                </TextField>
                
            </form>
        </section>
        
    );
};

export default CreateSearch;