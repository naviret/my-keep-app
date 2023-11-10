import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

function App() {
    return (
        <div>
            <Header text='Keeper'></Header>
            <Footer></Footer>

            <div className='add-note'>
                <form>
                    <input name='Title' placeholder='Title'></input>
                    <textarea
                        name='Content'
                        placeholder='Take a note...'
                        rows='3'
                    ></textarea>
                    <button>Add</button>
                </form>
            </div>

            <Note title='Hello World' content='saying hi'></Note>
            <Note title='Hello World' content='saying hi'></Note>
        </div>
    );
}

export default App;
