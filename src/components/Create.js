import React, { useState } from 'react';
import env from '../env.json'

function Create() {
    const [url, setUrl] = useState();
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState();

    const sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.result) {
                    setUrl(env.url + '/' + response.url)
                }
            })
    }

    const loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Заполните поле')
            return false
        }
        sendData({ "note": note })
    }
    return (
        <div >
            <form onSubmit={loadDataFromForm} className={formClass} >
                <label htmlFor="" >Введите заметку</label>
                <textarea name="note" id="note" className="form-group"></textarea>
                <button type="submit" className="brn btn-primary">Создать</button>
            </form>
            <div className={lineClass}>
                <div className="hash-text ">{url}</div>
            </div>
            <div className={lineClass}>
                <button className="brn btn-primary" onClick={function () {
                    window.location.reload()
                }}>Создать новую заметку</button>
            </div>
        </div>
    );
}

export default Create;