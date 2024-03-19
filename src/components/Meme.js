import React, {useState} from "react"
import memesData from "../memesData.js"



export default function Meme(){

    const [meme, setMeme] = useState({  //to store meme related data basically top and bottom text
        topText: "",
        bottomText:"",
        randomImage:""
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData) 

    function text(){
        setMeme(prevMeme => {
            return(
                {
                    ...prevMeme,
                    topText: "",
                    bottomText:"",
                    randomImage:""
                }
            )
        })
    }

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const newUrl = memesArray[randomNumber].url
        setMeme(prevMeme => {
            return({
                ...prevMeme,
                randomImage: newUrl
            })
        })
    }

    return(
        <main>
            <div className="form">
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Top text"
                />
                <input 
                    className="form--input" 
                    type="text"
                    placeholder="Bottom text"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
                <img 
                    className="meme--img" 
                    src={meme.randomImage} 
                />
            </div>
        </main>
    )
}

 
