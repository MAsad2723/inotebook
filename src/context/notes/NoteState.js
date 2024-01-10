import NoteContext from "./noteContext";
import { useState } from 'react';
const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6599e427065e32f5066b3535",
            "user": "6599d170bcdede860867099d",
            "title": "Title No1",
            "description": "Mera pehla title agaya",
            "tag": "Personal",
            "date": "2024-01-06T23:37:11.126Z",
            "__v": 0
        },
        {
            "_id": "6599e427065e32f5066b3537",
            "user": "6599d170bcdede860867099d",
            "title": "Title No1",
            "description": "Mera pehla title agaya",
            "tag": "Personal",
            "date": "2024-01-06T23:37:11.325Z",
            "__v": 0
        },
        {
            "_id": "6599e427065e32f5066b3539",
            "user": "6599d170bcdede860867099d",
            "title": "Title No1",
            "description": "Mera pehla title agaya",
            "tag": "Personal",
            "date": "2024-01-06T23:37:11.491Z",
            "__v": 0
        },
        {
            "_id": "6599e427065e32f5066b35391",
            "user": "6599d170bcdede860867099d",
            "title": "Title No1",
            "description": "Mera pehla title agaya",
            "tag": "Personal",
            "date": "2024-01-06T23:37:11.491Z",
            "__v": 0
        },
        {
            "_id": "6599e427065e32f5066b35392",
            "user": "6599d170bcdede860867099d",
            "title": "Title No1",
            "description": "Mera pehla title agaya",
            "tag": "Personal",
            "date": "2024-01-06T23:37:11.491Z",
            "__v": 0
        },
        {
            "_id": "6599e427065e32f5066b35393",
            "user": "6599d170bcdede860867099d",
            "title": "Title No1",
            "description": "Mera pehla title agaya",
            "tag": "Personal",
            "date": "2024-01-06T23:37:11.491Z",
            "__v": 0
        },
        {
            "_id": "6599e427065e32f5066b35394",
            "user": "6599d170bcdede860867099d",
            "title": "Title No1",
            "description": "Mera pehla title agaya",
            "tag": "Personal",
            "date": "2024-01-06T23:37:11.491Z",
            "__v": 0
        },
        {
            "_id": "6599e427065e32f5066b35395",
            "user": "6599d170bcdede860867099d",
            "title": "Title No1",
            "description": "Mera pehla title agaya",
            "tag": "Personal",
            "date": "2024-01-06T23:37:11.491Z",
            "__v": 0
        },
        {
            "_id": "6599e427065e32f5066b35396",
            "user": "6599d170bcdede860867099d",
            "title": "Title No1",
            "description": "Mera pehla title agaya",
            "tag": "Personal",
            "date": "2024-01-06T23:37:11.491Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    //Add a note
    const addNote = (title, description, tag) => {
        //Baad me krunga api call
        const note = {
            "_id": "6599e427065e32f5066b35397",
            "user": "6599d170bcdede860867099d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": Date.now,
            "__v": 0
        }
        setNotes(notes.concat(note));
    }

    //Delete a note
    const deleteNote = (id) => {
        //API Call lagade bhai
        console.log('Deleting the note with id' + id);
        const newNote = notes.filter((note) => { return note._id !== id });
        setNotes(newNote);
    }

    //Update a note
    const updateNote = (id, title, description, tag) => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;