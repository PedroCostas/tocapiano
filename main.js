import './style.css';
import * as Tone from "tone";
import getNoteFromKey from './noteLine';

//const synth = new Tone.Synth().toDestination();
const synth = new Tone.Sampler({
	urls: {
		C4: "C4.mp3",
		"C#4": "Ds4.mp3",
		"F#4": "Fs4.mp3",
		A4: "A4.mp3",
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();


//document.querySelector("[data-note='C4']").addEventListener('click',() => playNota('C4') )


let keys = document.querySelectorAll('.key');



for(let key of keys) {
    let NotPlay=key.getAttribute('data-note')
  key.addEventListener('mousedown',() => playNota(NotPlay) )
  key.addEventListener('mousestop',stopNote())
  key.addEventListener('mouseleave',stopNote())
}



function playNota(note) {
    synth.triggerAttackRelease(note);
}

function stopNote() {
  synth.triggerRelease();
}

function ctrlTeclado(event) {
    let keyName  = event.key;
    let note = getNoteFromKey(keyName);
    playNota(note)
   
}



