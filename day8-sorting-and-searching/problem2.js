function isContains(a,b) {
    for (let j = 0; j < a.length; j++) {
        for (let k = 0; k < b.length; k++) {
            if (a[j] === b[k]) {
                return true
            }
        }
        return false
    }
}


function playingDomino(cards, deck) {
    // your code here
    // loop untuk membandingkan tiap dua kartu
    let kartuKeluar = 0
    let jumlahKartu = 0
    let jumlahKartuTemp = 0
    for (let i = 0; i < cards.length; i++) {
        // Membandingkan 2 kartu ke i dengan deck
        // console.log(`Membandingkan kartu [${cards[i]}] and [${deck}]`);
        let toCompare = cards[i]
        // Looping untuk membadingkan isi dari setiap 2 kartu di tangan kepada isi di tiap kartu di deck
        if (isContains(toCompare, deck)) {
            jumlahKartuTemp = toCompare[0] + toCompare[1]
            // console.log(`Jumlah kartu perulangan ke ${i} = ${jumlahKartuTemp}`);
        }
        if (jumlahKartu < jumlahKartuTemp) {
            jumlahKartu = jumlahKartuTemp
            kartuKeluar = cards[i]
        }
        // console.log(`jumlah kartu adalah ${jumlahKartu} dan kartu keluar adalah ${kartuKeluar}`);
    }
    if (kartuKeluar) {
        return kartuKeluar
    } else {
        return []
    }
}
  
  
// console.log(playingDomino([[6, 5], [3, 4], [2, 1], [3, 3]], [4, 3]))
// [3, 4]
// console.log(playingDomino([[6, 5], [3, 3], [3, 4], [2, 1]], [3, 6]))
// // [6 5]
// console.log(playingDomino([[6, 6], [2, 4], [3, 6]], [5, 1]))
// // []
  
module.exports = playingDomino