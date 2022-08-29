import { sleep } from '../../../utils/sleep.js'
import { startVoiceOver } from '../scripts/index.js'

export const start = async (sleepSec = 2): Promise<void> => {
  startVoiceOver()
  await sleep(sleepSec)
}
