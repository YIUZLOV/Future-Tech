import pxToRem from "./utils/pxToRem.js"

const MatchMedia = {
  mobole: window.matchMedia(`(width <= ${pxToRem(767.97)}rem )`),
}


export default MatchMedia