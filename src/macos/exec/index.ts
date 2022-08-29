import { execScript } from '../../core/exec/index.js'

export const execOsaScript = <T = unknown>(...args: T[]) =>
  execScript(`osascript -e '${args.join(' ')}'`)
