#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp, printSuccess, printError } from './services/log.service.js'
import { saveKeyValue } from './services/save.service.js'

const saveToken = async (token) => {
  if (!token.length) {
    printError('No token provided.')
    return
  }
  try {
    await saveKeyValue('token', token)
    printSuccess('Token saved')
  } catch (error) {
    printError(error.message)
  }
}

const initCli = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp()
    // вивід допомоги
  }
  if (args.s) {
    // зберігаємо місто
  }
  if (args.t) {
    return saveToken(args.t)
  }
  // вивід погоди
}

initCli()
