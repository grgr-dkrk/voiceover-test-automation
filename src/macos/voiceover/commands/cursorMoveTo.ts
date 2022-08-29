import type { Direction } from '../../../types/index.js'
import { cursorMoveTo as cursorMoveToScript } from '../scripts/cursor/index.js'

export const cursorMoveTo = (direction: Direction) =>
  cursorMoveToScript(direction)
