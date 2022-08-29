import type { Direction } from '../../../../types/index.js'
import { execOsaScript } from '../../../exec/index.js'

export const cursorMoveTo = (direction: Direction) =>
  execOsaScript(
    `tell application "VoiceOver" to tell vo cursor to move ${direction}`,
  )
