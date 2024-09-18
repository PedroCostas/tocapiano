import './style.css';
import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

//document.querySelector("[data-note='C4']").addEventListener('click',() => playNota('C4') )


let keys = document.querySelectorAll('.key')

for (let key of keys) {
    let NotPlay=key.getAttribute('data-note')
  key.addEventListener('mousedown',() => playNota(NotPlay) )
  key.addEventListener('mousestop',() => stopNote())
}


function playNota(note) {
    synth.triggerAttackRelease(note);
}

function stopNote() {
  synth.triggerRelease();
}