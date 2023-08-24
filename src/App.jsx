import React,{ useEffect, useState } from 'react'

import './App.css'

import NoteContainer from './Components/NoteContainer/NoteContainer'
import Sidebar from './Components/Sidebar/Sidebar'
import Foot from './Components/Foot/Foot'
// import Foot from './Components/Foot/Foot'

function App() {
 
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("Stic-ii")) || [] )

  const addNote = (color) => {
    const tempNotes = [...notes]

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random()*78),
      text: "",
      time: Date.now(),
      color,
    })
    setNotes(tempNotes)
  }

  const deleteNote=(id)=>{
    const tempNotes = [...notes]

    const index = tempNotes.findIndex(item=>item.id===id)

    if(index<0) return

    tempNotes.splice(index, 1)
    setNotes(tempNotes)
  }

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("Stic-ii",JSON.stringify(notes))
  }, [notes])

  return (
    <>
      <div className="App">
        <Sidebar addNote={addNote}/>
        <NoteContainer 
          notes={notes} 
          deleteNote={deleteNote}
          updateText={updateText}
        />
      </div>
      {/* <div className="center"><Foot /></div> */}
      {/* <footer>
        <div className='center'>
            Copyright &copy; www.Stic-ii.com. All Rights Reserved!
        </div>
      </footer> */}
      <footer>
        <div><Foot /></div>
      </footer>
    </>
  )
}

export default App
