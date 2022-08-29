import { execOsaScript } from '../../../exec/index.js'

export const endVoiceOver = () =>
  execOsaScript('tell application "VoiceOver" to quit')
