import express from 'express';
import chalk from 'chalk';
const app = express();
const port = 3000 || process.env.PORT;

app.get('/', (req, res) => {
	res.send(chalk.underline('Kandilli Rasathanesi Unofficial API Servisi\n'));
});

app.listen(port, () => {
	console.log(`API servisi http://localhost:${port} adresinde calisiyor.`);
});
