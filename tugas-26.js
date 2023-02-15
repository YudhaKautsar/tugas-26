const numberss = [ 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16, -5 ];

// console.log(angka);
numberss.forEach(function (item, index, array) {
    if (isFinite(item)) {
        console.log(`Angka ${item} NOT Infinity`);
    } else {
        console.log(`Angka ${item} Infinity`);
    }
});
