import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const notesInitial =[
        {
          "_id": "64d4218e50ca51b50efd6061",
          "user": "64d32160f8cf40ce5a0dadae",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "youtube",
          "date": "2023-08-09T23:30:22.829Z",
          "__v": 0
        },
        {
          "_id": "64d435e56a0bffdbb4584f26",
          "user": "64d32160f8cf40ce5a0dadae",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-08-10T00:57:09.401Z",
          "__v": 0
        },
        {
            "_id": "64d4218e50ca51b50efd6061",
            "user": "64d32160f8cf40ce5a0dadae",
            "title": "New note",
            "description": "Please access the playlist",
            "tag": "youtube",
            "date": "2023-08-09T23:30:22.829Z",
            "__v": 0
          },
          {
            "_id": "64d435e56a0bffdbb4584f26",
            "user": "64d32160f8cf40ce5a0dadae",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-08-10T00:57:09.401Z",
            "__v": 0
          }
      ]

      const [notes, setNotes]= useState(notesInitial)

    return (
        <NoteContext.Provider value = {{notes , setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )



}

export default NoteState;