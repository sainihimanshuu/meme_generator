//state in js
/*
react doesnt look for local variable changes

function add() {setCount( prevCount => prevCount + 1)}
*/


import React, {useState} from "react"

const [things, setThings] = useState(["Thing 1", "Thing 2"])

function addItem(){
    setThings(prevThings => [...prevThings, 'Thing ${prevThings.length + 1}'])
}

const [count, setCount] = useState(0)
let number = count

<Count number={number} />
 
export default function Count(number){
    
}