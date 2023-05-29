#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { getWeather, getIcon } from './services/api.service.js'
import {
  printHelp,
  printSuccess,
  printError,
  printWeather,
} from './services/log.service.js'
import {
  getKeyValue,
  saveKeyValue,
  TOKEN_DICTIONARY,
} from './services/save.service.js'

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
    const city = await getKeyValue(TOKEN_DICTIONARY.city)
    const weather = await getWeather(city)
    printWeather(weather, getIcon(weather.weather[0].icon))
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
    return printHelp()
  }
  if (args.s) {
    return saveCity(args.s)
  }
  if (args.t) {
    return saveToken(args.t)
  }
  return getForecast()
}

initCli()
