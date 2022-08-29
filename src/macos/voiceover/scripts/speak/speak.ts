import { execOsaScript } from '../../../exec/index.js'

export const speak = (...args: string[]) =>
  execOsaScript<string>('say', ...args.map((arg) => `"${arg}"`))
