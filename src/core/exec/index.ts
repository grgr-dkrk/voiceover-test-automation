import shellExec from 'shell-exec'

export const execScript = (commandStr: string) => {
  if (process.argv[2] === '--verbose') {
    console.log(commandStr)
  }
  // @ts-ignore
  return shellExec.default(commandStr)
}
