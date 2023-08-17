import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
const host ="http://localhost:5000"
    const notesInitial =[]
    const [notes,setNotes]= useState(notesInitial)

    // GET All Notes
    const getNotes = async ()=>{
      //API Call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMzIxNjBmOGNmNDBjZTVhMGRhZGFlIn0sImlhdCI6MTY5MTU1OTM1Nn0.cxVUSsgJoaKqQSfMJ3wCP2K7-Ad4DVbUJW0xrcRqc0M"
          
        }
    
    });
    const json = await response.json()
    setNotes(json)
  }

      //Add a Note
      const addNote = async(title,description,tag) =>
    { //TODO API CALL
      // API Call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
          'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMzIxNjBmOGNmNDBjZTVhMGRhZGFlIn0sImlhdCI6MTY5MTU1OTM1Nn0.cxVUSsgJoaKqQSfMJ3wCP2K7-Ad4DVbUJW0xrcRqc0M"
          
        },
         body: JSON.stringify({title,description,tag})
      });
        
      const note = await response.json();
  
      setNotes (notes.concat(note))
      
    }
      // Delete a note
      const deleteNote = async(id) =>
    { //TODO API CALL

      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json',
          'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMzIxNjBmOGNmNDBjZTVhMGRhZGFlIn0sImlhdCI6MTY5MTU1OTM1Nn0.cxVUSsgJoaKqQSfMJ3wCP2K7-Ad4DVbUJW0xrcRqc0M"
          
        }
      });
        const json = response.json();
     const newNotes = notes.filter((note)=> {return note._id!==id})
      setNotes(newNotes)

    }


      //Edit a note
      const editNote = async (id, title, description , tag) =>{
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json',
        'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMzIxNjBmOGNmNDBjZTVhMGRhZGFlIn0sImlhdCI6MTY5MTU1OTM1Nn0.cxVUSsgJoaKqQSfMJ3wCP2K7-Ad4DVbUJW0xrcRqc0M"
        
      },
       body: JSON.stringify({title,description,tag})
    });
      const json = await response.json();
     

      // Logic to edit in client
    
      let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index =0; index<newNotes.length; index++){

          const element = newNotes[index];
          if(element._id ===id)
            { 
              element.title= title;
              element.description= description;
              element.tag= tag;
              break;
            }

        }
        setNotes(newNotes);
        
      }




    return (
        <NoteContext.Provider value = {{ notes, addNote,deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )



    }

export default NoteState;