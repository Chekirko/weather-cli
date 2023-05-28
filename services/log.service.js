import chalk from 'chalk'
import dedent from 'dedent-js'

const printSuccess = (message) => {
  console.log(`${chalk.bgGreen('SUCCESS:')} ${message}`)
}

const printError = (error) => {
  console.log(`${chalk.bgRed('ERROR:')} ${error}`)
}

const printHelp = () => {
  console.log(dedent`${chalk.bgCyan('HELP:')}
        Без параметрів - вивід погоди
        -s [CITY] - для установки міста
        -h - для виводу допомоги
        -t [API_KEY] - для збереження токену
  `)
}

export { printSuccess, printError, printHelp }
