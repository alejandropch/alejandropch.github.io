import * as Tone from "tone"

export default class Piano {
  keys = []
  _synth = {}

  constructor() {
    this.keys = [
      new Key("KeyA", "C4"),
      new Key("KeyW", "C#4", true),
      new Key("KeyS", "D4"),
      new Key("KeyE", "D#4", true),
      new Key("KeyD", "E4"),
      new Key("KeyF", "F4"),
      new Key("KeyT", "F#4", true),
      new Key("KeyG", "G4"),
      new Key("KeyY", "G#4", true),
      new Key("KeyH", "A4"),
      new Key("KeyU", "A#4", true),
      new Key("KeyJ", "B4"),
      new Key("KeyK", "C5"),
      new Key("KeyO", "C#5", true),
      new Key("KeyL", "D5"),
    ]
  }

  get synth() {
    return this._synth
  }
  set synth(synth){
    this._synth = synth
  }
  make() {
    ;async () => await Tone.start()

    this.synth = new Tone.Sampler({
      urls: {
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
      },

      baseUrl: "https://tonejs.github.io/audio/salamander/",
      release: 10,

    }).toDestination()
    return Tone.loaded()
  }

  getKey(event_code) {
    return this.keys.find((key) => (event_code === key.event_code))
  }
  async playNote(key) {
    if (key.is_pressed) return

    key.pressed = true
    await Tone.start()
  
    return Tone.loaded().then(() => {
      this.synth.triggerAttack(key.note)
    })
  }

  async releaseNote(key) {
    key.pressed = false
    await Tone.start()

    return Tone.loaded().then(() => {
      this.synth.triggerRelease(key.note)
    })
  }
}

class Key {

  constructor(event_code, note, accidental =false) {
    this._event_code = event_code
    this._note = note
    this._pressed = false
    this.accidental = accidental
  }

  get event_code() {
    return this._event_code
  }
  get accidental(){
    return this._accidental
  }

  get is_pressed() {
    return this._pressed
  }

  get note() {
    return this._note
  }

  set pressed(pressed) {
    this._pressed = pressed
  }
  set event_code(event_code){
    this._event_code = event_code
  }
  set note(note){
    this._note = note
  }
  set accidental(accidental){
    this._accidental = accidental
  }
}
