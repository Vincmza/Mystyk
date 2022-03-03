import { bands } from '../data/bands';
import React from 'react';
import { useParams } from 'react-router-dom';


const Band = () => {
    let {bandId}=useParams()
    let id = Number(bandId)
    const bandFiltered = bands.filter(elem=> elem.id === id)
    console.log("le param", bandFiltered)
    return (
        <div style={{color: "red"}}>
            <h1>{bandFiltered[0].name}</h1>
        </div>
    );
};

export default Band;