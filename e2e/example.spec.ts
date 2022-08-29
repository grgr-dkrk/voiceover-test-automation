import { test, expect } from '@playwright/test'
import * as voiceOver from '../src/macos/voiceover/index.js'

test.afterAll(async () => {
  await voiceOver.end()
})

test('VoiceOver test example', async ({ page }) => {
  await page.goto('http://localhost:3000/', {
    waitUntil: 'networkidle',
  })
  await page.waitForTimeout(5000)
  await voiceOver.start()
  // await voiceOver.cursorMoveTo('into item')
  await voiceOver.cursorMoveToFirstItem()
  expect(await voiceOver.getSpokenPhrase()).toMatch(
    '私のホームページへようこそ',
  )
  await voiceOver.cursorMoveTo('right')
  expect(await voiceOver.getSpokenPhrase()).toMatch(
    '赤ちゃんが座って笑顔でピアニカを弾いてる',
  )
  await voiceOver.cursorMoveTo('right')
  expect(await voiceOver.getSpokenPhrase()).toMatch('今日の占い')
  await voiceOver.action()
  await page.waitForTimeout(1000)
  expect(await voiceOver.getSpokenPhrase()).toMatch('エラーです')
})
