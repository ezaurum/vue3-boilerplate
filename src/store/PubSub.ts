// global emitter
import mitt from "mitt"
import { useStore } from "@/store"

type Events = {
  // key : event value
  globalIncrement: number
}

export const emitter = mitt<Events>()

// handler global event
emitter.on("globalIncrement", (value) => {
  const store = useStore()
  store.increment(value)
})
