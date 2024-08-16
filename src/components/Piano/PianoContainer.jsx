import { useEffect, useState, useRef } from "react"
import PianoInstrument from "@/utils/Piano"
import { NaturalKey } from "./NaturalKey"
import { AccidentalKey } from "./AccidentalKey"
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion"

export default function PianoContainer() {
  const [piano] = useState(new PianoInstrument())
  const [keyPressed, setKeyPressed] = useState("")
  const [keyReleased, setKeyReleased] = useState("")

  const counter = useMotionValue(0)
  const stop = useTransform(counter, [0, 10], ["#000", "#2d78f1"])
  const background = useMotionTemplate`linear-gradient(0deg, rgba(27,10,104,1) 0%, ${stop} 100%)`

  useEffect(() => {
    piano.make()
  }, [piano])

  useEffect(() => {
    if (!piano.synth) return

    document.addEventListener("keydown", async (e) => await handleKeyDown(e))
    document.addEventListener("keyup", async (e) => await handleKeyUp(e))

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  async function handleKeyDown(e) {
    const activeElement = document.activeElement

    const cancelKey =
      activeElement.tagName == "INPUT" || activeElement.tagName == "TEXTAREA"

    !cancelKey &&
      piano.getKey(e.code).then(async (key) => {
        console.log(counter.get())

        setKeyPressed(key)
        setKeyReleased(false)
        await piano.playNote(key)
        animate(counter, 10, {
          duration: 0.5,
          ease: "easeOut",
        })
      })
  }

  async function handleKeyUp(e) {
    piano.getKey(e.code).then(async (key) => {
      setKeyPressed(key)
      setKeyReleased(key)
      animate(counter, 0, {
        duration: 0.5,
        ease: "easeIn",
      })

      await piano.releaseNote(key)
    })
  }

  return (
    <motion.div
      className="h-screen flex justify-center items-center w-full z-10 py-28 "
      style={{
        background,
      }}
      id="play-piano"
    >
      <div className="hidden lg:grid grid-rows-2 grid-cols-1 h-full  mb-32 relative">
        <div className="flex flex-row row-start-1 grid-rows-2 col-start-1 row-span-2  w-full">
          {piano.keys.map((key, index) => {
            return (
              !key.accidental && ( // if key.accidental is false, then is a Natural Key
                <NaturalKey
                  key={key.event_code}
                  props={[key, keyPressed, keyReleased, index]}
                />
              )
            )
          })}
        </div>
        {/* xl:ml-[12.5rem] 2xl:ml-[7rem] */}
        <div className="row-1 row-start-1 col-start-1 w-full lg:ml-[3.9rem] xl:ml-[5.2rem] 2xl:ml-[7rem] ">
          <div className="flex flex-row  h-full w-full ">
            {piano.keys.map((key, index) => {
              let extra_spacing =
                key.note.includes("D#") || key.note.includes("A#")
                  ? "lg:mr-[8rem] xl:mr-[11rem] 2xl:mr-[14rem]" // if D# or A# key
                  : "lg:mr-[1rem] xl:mr-[2rem] 2xl:mr-[3rem]"

              return (
                key.accidental && (
                  <AccidentalKey
                    key={key.event_code}
                    props={[key, keyPressed, keyReleased, index]}
                    className={extra_spacing}
                  />
                )
              )
            })}
          </div>
        </div>
      </div>
      <div>
        <h1 className="block lg:hidden font-bold text-6xl sm:text-8xl lg:text-9xl">
          Piano Available <br /> On Desktop!
        </h1>
      </div>
    </motion.div>
  )
}