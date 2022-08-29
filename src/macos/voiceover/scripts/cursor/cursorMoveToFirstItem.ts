import { execOsaScript } from '../../../exec/index.js'

export const cursorMoveToFirstItem = () =>
  execOsaScript(
    'tell application "VoiceOver" to tell vo cursor to move to first item',
  )
