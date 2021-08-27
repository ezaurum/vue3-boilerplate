// global emitter
import mitt from "mitt"
import { store } from "@/store"

type Events = {
  // key : event value
  globalIncrement: number
}

export const emitter = mitt<Events>()

// handler global event
emitter.on("globalIncrement", (value) => {
  store.commit("increment", value)
})
