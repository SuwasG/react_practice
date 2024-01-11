import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const UnsplashAPI = () => {
    const [pic, setPic] = useState([])
    useEffect(() => {
        axios.get(`https://api.unsplash.com/photos`).then(res => setPic(res.data)).catch(err => console.log(err))
    }, [])

    return (
        <>
 {pic.map((photo, index) => (
                <div key={index}>
                    <img src={photo.urls.small} alt={photo.alt_description} />
                    <p>{photo.description}</p>
                </div>
            ))}
        </>
    )
}

export default UnsplashAPI