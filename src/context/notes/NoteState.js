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
            "_id": "6599e427065e32f5066b3539",
            "user": "6599d170bcdede860867099d",
            "title": "Title No1",
            "description": "Mera pehla title agaya",
            "tag": "Personal",
            "date": "2024-01-06T23:37:11.491Z",
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
            "_id": "6599e427065e32f5066b3539",
            "user": "6599d170bcdede860867099d",
            "title": "Title No1",
            "description": "Mera pehla title agaya",
            "tag": "Personal",
            "date": "2024-01-06T23:37:11.491Z",
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
            "_id": "6599e427065e32f5066b3539",
            "user": "6599d170bcdede860867099d",
            "title": "Title No1",
            "description": "Mera pehla title agaya",
            "tag": "Personal",
            "date": "2024-01-06T23:37:11.491Z",
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
        }
    ]
    const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;