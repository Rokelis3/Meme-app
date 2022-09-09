import React, { useState, useEffect } from 'react';

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



    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res=> res.json())
            .then(data=>setAllMemes(data.data.memes))
    }, [])



    function handleSubmit(event){
        event.preventDefault()
    }

    
    const [allMemes, setAllMemes] = useState([])
    
    function getMemes(){
        let randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        
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
                <button onClick={getMemes} className="form--button">Get a new meme image</button>
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