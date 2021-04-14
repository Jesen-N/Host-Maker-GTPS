//Made By Jesen N#9071

const fs = require('fs');
const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Put The Ip: ', IP => {
	rl.question('Name Host: ', HOST => {
		rl.question('Extensi (txt,js,bin,json,dll...): ', EXT => {
			fs.open(HOST + "." + EXT, 'w+', function(err, file) {
				if (err) throw err;

				let content = `${IP} growtopia1.com\n${IP} growtopia2.com`;

				fs.writeFile(file, content, err => {
					if (err) throw err;
					console.clear();
					console.log('Host has been created!');
				});
			});
		});
	});
});
