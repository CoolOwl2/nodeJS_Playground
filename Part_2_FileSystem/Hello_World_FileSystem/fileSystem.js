const fs = require('fs/promises');

async function readFileToVar() {
	try {
		const content = await fs.readFile('example.txt', { encoding: 'utf8' });
		console.log(content);
	} catch (err) {
		console.error('Error reading file:', err);
	}
}

readFileToVar();