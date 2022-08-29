import { execScript } from '.'
const jest = import.meta.jest

describe('core/exec', () => {
  let originalArgv: string[]
  beforeEach(() => {
    originalArgv = process.argv
  })
  afterEach(() => {
    process.argv = originalArgv
  })

  it('--verbose option have to call "console.log"', () => {
    process.argv = ['node', './test.ts', '--verbose']
    const consoleLog = jest.spyOn(global.console, 'log').mockImplementation()
    execScript('echo "hi"')
    expect(consoleLog).toHaveBeenCalledWith('echo "hi"')
  })
})
