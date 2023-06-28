"use strict";
const fs = require('fs');
const csvFilePath = './csv/data.csv';
const jsonData = [];
fs.readFile(csvFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const lines = data.split('\n');
    const headers = lines[0].split(';');
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(';');
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
            const header = headers[j].trim();
            const value = values[j].trim();
            let transformedHeader = header.replace(/\s/g, '_');
            transformedHeader = transformedHeader.replace(/[^\w\s]/gi, '');
            obj[transformedHeader] = value;
        }
        jsonData.push(obj);
    }
    console.log(jsonData);
});
