#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";

const initCli = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.h) {
    // вивід допомоги
  }
  if (args.s) {
    // зберігаємо місто
  }
  if (args.t) {
    // зберігаємо токен
  }
  // вивід погоди
};

initCli();
