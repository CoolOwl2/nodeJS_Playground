const fs = require('fs');

const data = 'Hello, World!';

fs.writeFile('helloWorld.txt', data, 'utf8', (err) => {

	if (err) {
		console.error('Error writing file:', err);
		return;
	}

	console.log('File written successfully!');
});