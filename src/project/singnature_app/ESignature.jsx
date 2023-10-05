import React,{useState} from 'react'
import Title from '../componenents/Title'


function ESignature() {
  const [name, setName] = useState("Your signature")
  const [date, setDate] = useState("")

  const handleName = (e)=>{
   setName(e.target.value)
  }

  const handleDate = (e)=>{
    setDate(e.target.value)
   }
  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
    marginRight: "10px"

  };
  document.body.style.background = "#eee";
  return (
    <div className='container text-center '>
      <Title classes={"title"} text={name} />
      <Title classes={"main-title mb-4"} text={!date ? "DOB" : date} />
      <p>
      I am captivated by a career as a Software Developer 
      due to the endless opportunities it offers to solve 
      real-world problems and make a meaningful impact on people's lives. The dynamic nature of the tech world excites me, pushing me to constantly learn and adapt. By translating human needs into technological solutions, I see the role as a blend of artistry and logic. Being at the forefront of innovation and crafting tools that can potentially redefine our future is an aspiration that deeply resonates with me.
      </p>
      <footer className='d-flex' style={{justifyContent:
        "space-around", position: "relative", top: "40vh"
        
        }}>
      <input type="date" value={date} style={inputStyle} onChange={handleDate} />
      

      <input type="text" value={name} style={inputStyle} onChange=
      {handleName}/>
   

      </footer>
    </div>
  )
}

export default ESignature