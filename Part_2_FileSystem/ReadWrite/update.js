const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'helloWorld.txt');

const newContent = 'This is the updated content.\n';

try {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('File overwritten successfully.');

    fs.appendFileSync(filePath, 'Additional line.\n', 'utf8');
    console.log('Content appended successfully.');
} catch (err) {
    console.error('Error updating file:', err.message);
}