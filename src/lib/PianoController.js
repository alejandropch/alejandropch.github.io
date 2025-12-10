import {animate} from "framer-motion"
export default class PianoController {
  constructor(piano, counter){
    this.piano = piano
    this.counter = counter
  }

  async press(key, setKeyPressed = null, setKeyReleased = null) {
    if(setKeyReleased && setKeyPressed)
    {
      setKeyReleased(false)
      setKeyPressed(key)
    }
    await this.piano.playNote(key)
    animate(this.counter, 10, {
      duration: 0.5,
      ease: "easeOut",
    })
  }

  async release(key, setKeyPressed = null, setKeyReleased = null) {
    await this.piano.releaseNote(key)
    if(setKeyReleased && setKeyPressed)
    {
      setKeyPressed(key)
      setKeyReleased(key)
    }
    animate(this.counter, 0, {
      duration: 0.5,
      ease:"easeIn"
    })
  }

  async handleKeyDown(e, setKeyPressed = null, setKeyReleased = null) {
    const key = this.piano.getKey(e.code)
    if(!key) return
    if(setKeyReleased && setKeyPressed)
    {
      setKeyReleased(false)
      setKeyPressed(key)
    }
    await this.press(key)
  }
  async handleKeyUp(e, setKeyPressed, setKeyReleased) {
    const key = this.piano.getKey(e.code)
    if(!key) return
    setKeyPressed(key)
    setKeyReleased(key)
    await this.release(key)
  }
}
