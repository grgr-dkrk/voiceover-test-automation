import { execOsaScript } from '../../../exec/index.js'

export const action = () =>
  execOsaScript(
    'tell application "VoiceOver" to tell vo cursor to perform action',
  )
