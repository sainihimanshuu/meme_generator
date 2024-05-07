import React, {useState, useEffect} from "react"

export default function Meme(){

    const [meme, setMeme]=useState({
        topText:"",
        bottomText:"",
        randomImage:""
    })

    const [allMemes, setAllMemes]=useState({})

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data))
    }, [])

    function getMemeImage(){
        let index=Math.floor(Math.random()*allMemes.data.memes.length);
        const url=allMemes.data.memes[index].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value}=event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
  
    return(
        <main>
            <div className="form">
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className="form--input" 
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img 
                    className="meme--img" 
                    src={meme.randomImage} 
                />
                <div className="meme--text-top">{meme.topText}</div>
                <div className="meme--text-bottom">{meme.bottomText}</div>
            </div>
        </main>
    )
}
