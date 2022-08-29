import { getSpokenPhrase as getSpokenPhraseScript } from '../scripts/speak/getSpokenPhrase.js'

export const getSpokenPhrase = async (): Promise<string> =>
  (await getSpokenPhraseScript()).stdout?.replace(/\r?\n/g, '') || ''
