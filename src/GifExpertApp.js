import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

//FUNCTIONAL COMPONENT
//rafc -> atajo para crear componente
const GifExpertApp = () => {
    // const categories = ["One Punch", "Dragon Ball", "Naruto"];
    const [categories, setCategories] = useState([
        "One Punch",
        // "Dragon Ball",
        // "Naruto",
    ]);

    // const handleAdd = () => {
    //   // setCategories([...categories, "HunterxHunter"]);
    //   setCategories((cats) => [...cats, "HunterxHunter"]);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {categories.map((category) => {
                    // return <li key={category}>{category}</li>;
                    return <GifGrid key={category} category={category} />;
                })}
            </ol>
        </>
    );
};

export default GifExpertApp;
