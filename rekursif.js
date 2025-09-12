function faktorial(n) {
    let hasil = 1;
    for (let i = 1; i <= n; i++) {
        hasil *= i;       // proses faktorial
    }
    return hasil;         // kembalikan hasil faktorial
}

for (let n=0; n<= 10; n++) {
console.log("Faktorial dari" + n + " Adalah : " +  hasil);
}

