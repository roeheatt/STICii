import React from 'react'

import './NoteContainer.css'

import Note from '../Note/Note'

function NoteContainer(props) {

    const reverArray = (arr) =>{
        const array=[]

        for(let i=arr.length - 1;i>=0;--i){
            array.push(arr[i])
        }
        return array
    }

    const notes = reverArray(props.notes)

  return (
    <div className="note_container">
        <h2>STIC<i>ii</i> NOTES</h2>
        <div className="note_container_notes custom-scroll">
            {
                notes?.length > 0 ? (notes.map((item) => 
                <Note key={item.id} note={item}
                deleteNote = {props.deleteNote}
                updateText = {props.updateText}
                />)

                ): <h3>Empty!!!</h3>}   
        </div>
    </div>
  )
}

export default NoteContainer