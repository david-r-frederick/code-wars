'use strict';

class NotesStore {
    constructor(){
        this.validStates = ['completed', 'active', 'others'];
        this.notes = [];
    }

    addNote(state, name){
        if(!name || name === ''){
            throw new Error('Name cannot be empty');
        } else if (!this.validStates.includes(state)){
            throw new Error(`Invalid state ${state}`);
        } else {
            this.notes.push([state, name]);
        }
    }

    getNotes(state) {
        if(!this.validStates.includes(state)){
            throw new Error(`Invalid state ${state}`);
        }
        const requestedNotes = [];
        for(let i = 0; i < this.notes.length; i++){
            if(this.notes[i][0] === state){
                requestedNotes.push(this.notes[i][1]);
            }
        }
        return requestedNotes;
    }
}

const example = new NotesStore();

example.addNote('active', 'DrinkTea');
example.addNote('active', 'DrinkCoffee');
example.addNote('completed', 'Study');
console.log(example.getNotes('foo'));
// example.getNotes('active');
// example.getNotes('active');
