import React, { useState } from 'react';
import memesData from "../memesData";

const Meme = () => {

    const [memeImage, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    function handleChange(event){
        const{name, value} = event.target
        setMemeImage(prevMemeImage =>{
            return{
                ...prevMemeImage,
                [name]: value
            }
        })
    } 

    function handleSubmit(event){
        event.preventDefault()
        console.log(memeImage)
    }


    const [allMemeImages] = useState(memesData)
    
    function getMemeImage(){
        let memesArray = allMemeImages.data.memes;
        let randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        
        setMemeImage(prevMeme =>{
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }
    return(
    <main>
        <form onSubmit={handleSubmit}>
            <div className="form">
                <input 
                    type="text" 
                    onChange={handleChange}
                    name="topText"
                    placeholder="Top text" 
                    value={memeImage.topText}
                    className="form--input"/>
                <input 
                    type="text" 
                    onChange={handleChange}
                    name="bottomText"
                    placeholder="Bottom text" 
                    value={memeImage.bottomText}
                    className="form--input"/>
                <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
            </div>
            <div className="meme--container">
                <img src={memeImage.randomImage} alt="random meme" className='meme--image'/>
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </form>
    </main>
    )
}

export default Meme;