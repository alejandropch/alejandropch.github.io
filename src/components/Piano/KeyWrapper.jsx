
export function KeyWrapper({ keyObj, children, onPress, onRelease }) {
  async function handleTapDown(key) {
    setKeyPressed(key)
    setKeyReleased(false)

    await piano.playNote(key)
    animate(counter, 10, {
      duration: 0.5,
      ease: "easeOut",
    })
  }

  async function handleTapUp(key) {
    setKeyPressed(key)
    setKeyReleased(key)

    animate(counter, 0, {
      duration: 0.5,
      ease: "easeIn",
    })

    await piano.releaseNote(key)
  }

  return (
    <div
      onPointerDown={() => onPress(keyObj)}
      onPointerUp={() => onRelease(keyObj)}
      onPointerLeave={() => onRelease(keyObj)}
      className="contents"
    >
      {children}
    </div>
  );
}

