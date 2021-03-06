import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ({defaultCategories = []}) => {

    //const [categories, setCategories] = useState(['Dragon Ball']);
    const [categories, setCategories] = useState(defaultCategories);


    /* const handleAdd = () => {
        setCategories([...categories, 'Titans']);
    }; */

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories }/>

            <hr />

            <ol>
                {
                    categories.map(category => {
                        return <GifGrid
                            key={ category } 
                            category={ category } 
                        />;
                    })
                }
            </ol>
        </>
    );

};

export default GifExpertApp;