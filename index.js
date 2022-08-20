/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-tabs */
import chalk from 'chalk'
import fs from 'fs'

function handleErr(err) {
	throw new Error(chalk.red(err.code, 'não encontrou o arquivo'))
}

function readFile(path) {
	const encoding = 'utf-8'
	fs.readFile(path, encoding, (err, data) => {
		if (err) {
			handleErr(err)
		}
		console.log(chalk.green(data))
	  })
}

readFile('./arquivos/teste.txt')
