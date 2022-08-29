import * as voiceOver from './macos/voiceover/index.js'

await voiceOver.start()
await voiceOver.cursorMoveToFirstItem()
const spokenPhrase = await voiceOver.getSpokenPhrase()
console.log(spokenPhrase)
await voiceOver.end()
