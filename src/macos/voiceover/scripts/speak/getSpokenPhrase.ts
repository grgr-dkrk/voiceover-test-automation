import { execOsaScript } from '../../../exec/index.js'

export const getSpokenPhrase = () =>
  execOsaScript('tell application "VoiceOver" to return content of last phrase')
