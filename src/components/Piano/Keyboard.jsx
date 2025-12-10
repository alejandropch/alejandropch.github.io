import {useState, useEffect} from "react"
import { NaturalKey } from "./NaturalKey"
import { AccidentalKey } from "./AccidentalKey"
import PianoInstrument from "@/lib/Piano"
import { isValidKey } from "@/utils/piano"
import { KeyWrapper } from "./KeyWrapper"
import PianoController from "@/lib/PianoController"

export default function Keyboard({counter}) {

  const [keyPressed, setKeyPressed] = useState("")
  const [keyReleased, setKeyReleased] = useState("")
  const [piano] = useState(new PianoInstrument())
  const [controller] = useState(() => new PianoController(piano, counter))
  const [pianoReady, setPianoReady] = useState(false)


  useEffect(() => {
    let destroyed = false

    async function waitForPiano() {
      await piano.make()
      if (!destroyed) 
        setPianoReady(true)
    }
    waitForPiano()

    return () => {
      destroyed = true
    }
  }, [piano])
  useEffect(() => {
    if (!pianoReady) return

    const keyDown = (e) => {
      if (!isValidKey(document.activeElement)) return
      controller.handleKeyDown(e, setKeyPressed, setKeyReleased)
    }

    const keyUp = (e) => controller.handleKeyUp(e, setKeyPressed, setKeyReleased)

    document.addEventListener("keydown", keyDown)
    document.addEventListener("keyup", keyUp)

    return () => {
      document.removeEventListener("keydown", keyDown)
      document.removeEventListener("keyup", keyUp)
    }
  }, [controller, pianoReady])


  async function handleTapDown(key) {
    if(!pianoReady)return
    await controller.press(key, setKeyPressed, setKeyReleased)
  }

  async function handleTapUp(key) {
    if(!pianoReady)return
    controller.release(key, setKeyPressed, setKeyReleased)
  }

  return (
    pianoReady && <div className="hidden lg:grid grid-rows-2 grid-cols-1 h-full relative overflow-hidden">
      <div className="flex flex-row row-start-1 grid-rows-2 col-start-1 row-span-2 w-full ">
        {piano.keys.map((key, index) => {
          return (
            !key.accidental && ( // if key.accidental is false, then is a Natural Key
              <KeyWrapper
                key={key.event_code}
                keyObj={key}
                onPress={handleTapDown}
                onRelease={handleTapUp}
              >
                <NaturalKey
                  props={[key, keyPressed, keyReleased, index]}
                />
              </KeyWrapper>
            )
          )
        })}
      </div>
      <div className="row-1 row-start-1 col-start-1 lg:ml-[3.9rem] xl:ml-[5.2rem] 2xl:ml-[7rem] mr-12 ">
        <div className="flex flex-row  h-full">
          {piano.keys.map((key, index) => {
            let extra_spacing =
              key.note.includes("D#") || key.note.includes("A#")
                ? "lg:mr-[8rem] xl:mr-[11rem] 2xl:mr-[14rem]" // if D# or A# key
                : "lg:mr-[1rem] xl:mr-[2rem] 2xl:mr-[3rem]"

            return (
              key.accidental && (
                <KeyWrapper
                  key={key.event_code}
                  keyObj={key}
                  onPress={handleTapDown}
                  onRelease={handleTapUp}
                >
                  <AccidentalKey
                    props={[key, keyPressed, keyReleased, index]}
                    className={extra_spacing}
                  />
                </KeyWrapper>
              )
            )
          })}
        </div>
      </div>
    </div>
  )
}
