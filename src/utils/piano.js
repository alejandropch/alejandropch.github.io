// document elements that shouldn't trigger a piano key
const elements = ["INPUT", "TEXTAREA"]

export function isValidKey(tagName){
  if(elements.find(el => el === tagName))
    return false
  return true
}
