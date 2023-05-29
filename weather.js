#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js'
import { printHelp, printSuccess, printError } from './services/log.service.js'
import { saveKeyValue, TOKEN_DICTIONARY } from './services/save.service.js'

const saveToken = async (token) => {
  if (!token.length) {
    printError('No token provided.')
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess('Token saved')
  } catch (error) {
    printError(error.message)
  }
}

const saveCity = async (city) => {
  if (!city.length) {
    printError('No city provided.')
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city)
    printSuccess('City saved')
  } catch (error) {
    printError(error.message)
  }
}

const getForecast = async () => {
  try {
    const weather = await getWeather(process.env.CITY)
    console.log(weather)
  } catch (error) {
    if (error?.response?.status == 401) {
      printError('Невірно вказаний токен')
    } else {
      printError(error.message)
    }
  }
}

const initCli = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp()
  }
  if (args.s) {
    saveCity(args.s)
  }
  if (args.t) {
    return saveToken(args.t)
  }
  getForecast()
}

initCli()
