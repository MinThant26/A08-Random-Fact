const fs = require('fs');

const fact = {
    random: () => {
        const jsonData = JSON.parse(fs.readFileSync('./facts_data.json'));
        const randomIndex = Math.floor(Math.random() * jsonData.length);

        return jsonData[randomIndex];
    },
    json: () => {
        const jsonData = JSON.parse(fs.readFileSync('./facts_data.json'));

        return jsonData;
    }
}

module.exports = fact;