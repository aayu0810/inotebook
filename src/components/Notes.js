import React, {useContext} from 'react'
import noteContext from "../context/Notes/noteContext";
import Notesitem from "./Notesitem";

const Notes = () => {
 
    const context = useContext (noteContext);
    const {notes, setNotes}= context;
    
    return(
    <div className = "row my-3">
           
            <h2>Your Notes</h2>
            {notes.map((note)=>{
                return <Notesitem note={note}/>;
            })}
         </div>
  )
}

export default Notes
