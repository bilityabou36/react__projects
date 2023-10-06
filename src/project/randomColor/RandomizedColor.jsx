import React from 'react'
import Title from '../componenents/Title'

function RandomizedColor() {


    function handleClick(e){
        console.log(e.target)
    }
    const handleSearch = (e) => {
        let body = document.querySelector("body")
        body.style.background = getRandomColor()
        e.target.style.backgroundColor = getRandomColor
    }

    function getRandomColor(){
        let letters = "012345789ABCDEF"
        let color = "#"
        for (let i= 0; i < 6; i++){
            color += letters[Math.floor[Math.random() * 16]]
        }
        return color
    }
  return (
    <div className='container'>
    <Title text={"RandomizedColor"} classes={"mb-4"} />
    <button className='btn btn-danger' onClick={handleSearch}>Click Me</button>
    <button className='btn btn-sucess' onClick={handleSearch}>Click Me</button>
    <button className='btn btn-primary' onClick={handleSearch}>Click Me</button>
    <button className='btn btn-warning' onClick={handleSearch}>Click Me</button>
    </div>
  )
}

export default RandomizedColor