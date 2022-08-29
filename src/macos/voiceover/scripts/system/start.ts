import { execScript } from '../../../../core/exec/index.js'

export const startVoiceOver = (): void =>
  execScript(
    '/System/Library/CoreServices/VoiceOver.app/Contents/MacOS/VoiceOverStarter',
  )
