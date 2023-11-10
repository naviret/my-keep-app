import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

var key = 0;

function App() {
    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');
    const [notes, setNotes] = useState([]);

    var inputNote = {};

    function handleTitleChange(event) {
        setInputTitle(event.target.value);
    }

    function handleContentChange(event) {
        setInputContent(event.target.value);
    }

    function addNote(event) {
        inputNote.key = key++;
        inputNote.title = inputTitle;
        inputNote.content = inputContent;

        event.preventDefault();

        setNotes(prevNotes => {
            return [...prevNotes, inputNote];
        });

        setInputTitle('');
        setInputContent('');
    }

    function removeNote(key) {
        const newNotes = notes.filter(note => note.key !== key);
        setNotes(newNotes);
    }

    return (
        <div>
            <Header text='Keeper'></Header>
            <Footer></Footer>

            <div className='add-note'>
                <form>
                    <input
                        name='Title'
                        placeholder='Title'
                        onChange={handleTitleChange}
                        value={inputTitle}
                    ></input>
                    <textarea
                        name='Content'
                        placeholder='Take a note...'
                        rows='3'
                        onChange={handleContentChange}
                        value={inputContent}
                    ></textarea>
                    <button onClick={addNote}>Add</button>
                </form>
            </div>

            {notes.map(note => (
                <Note
                    key={note.key}
                    title={note.title}
                    content={note.content}
                    onDelete={() => removeNote(note.key)}
                ></Note>
            ))}
        </div>
    );
}

export default App;
