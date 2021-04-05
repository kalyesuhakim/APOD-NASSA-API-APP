import { CircularProgress } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import Navbar from './Navbar';

const NasaPhoto = () => {
    // const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
    const API_KEY = "P0ReyqM9Mwf9B1xjEUtnXbNymaDiXOchR0rSKDYd" // it's disconnected use yours
    const [photoData,setPhotoData] = useState(null);
    useEffect(() => {
        async function fetchPhoto(){
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
            const data = await  res.json();
            setPhotoData(data);
            console.log(data)
        }
        fetchPhoto();
    },[]);

    if(!photoData) return <CircularProgress className="circle"/>
    return (
        <>
        <Navbar />
        <div className="nasa-photo">
            {photoData.media_type === "image" ? (
            <img className="photo" src={photoData.url} alt={photoData.title}
            />) : (
                <iframe title="space-video" src={photoData.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen className="photo"/>
            )}
            <div>
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p>
                <p className="explanation">{photoData.explanation}</p>
            </div>
        </div>
        </>
    )
}

export default NasaPhoto
