import chalk from 'chalk'
import dedent from 'dedent-js'

const printSuccess = (message) => {
  console.log(`${chalk.bgGreen(' SUCCESS: ')} ${message}`)
}

const printError = (error) => {
  console.log(`${chalk.bgRed(' ERROR: ')} ${error}`)
}

const printHelp = () => {
  console.log(dedent`${chalk.bgCyan(' HELP: ')}
        Без параметрів - вивід погоди
        -s [CITY] - для установки міста
        -h - для виводу допомоги
        -t [API_KEY] - для збереження токену
  `)
}

const printWeather = (res, icon) => {
  console.log(dedent`${chalk.bgYellow(' WEATHER: ')} Погода в місті ${res.name}
        ${icon}  - ${res.weather[0].description}
        Температура: ${res.main.temp} (відчувається як ${res.main.feels_like})
        Вологість: ${res.main.humidity}%
        Швидкість вітру: ${res.wind.speed} м/с        
  `)
}

export { printSuccess, printError, printHelp, printWeather }
