//Made By Jesen N

var fs = require('fs');
var rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Masukan Ip: ", IP => {
rl.question("Nama Host: ", HOST => {
rl.question("Nama Extensi (txt,js,bin,json,dll...): ", EXT => {

fs.open(HOST + `.${EXT}`, 'w+', function (err, file) {
    if (err) throw err;

    let content = `${IP} growtopia1.com\n${IP} growtopia2.com`

    fs.writeFile(file, content, (err) => {
        if (err) throw err;
        console.log('HOST SELESAI DI BUAT...');
    }); 

    fs.readFile(file, (err, data) => {
        if (err) throw err;
        console.log(data.toString('utf8'));
    });
});
});
});
});