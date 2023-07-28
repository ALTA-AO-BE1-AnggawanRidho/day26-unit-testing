function mostAppearItem(items) {
    let counts = {};
    let kalimat =``
    for (let i = 0; i < items.length; i++) {
        let kata = items[i];
        if (counts[kata]) {
            counts[kata] += 1;
        } else {
            counts[kata] = 1;
        }
    }
    countsSorted= Object.fromEntries(
        Object.entries(counts).sort(([,a], [,b]) => a - b )
        )
    for (let key in countsSorted) {
        kalimat += `${key}->${countsSorted[key]} `
    }
    return kalimat;
}

// console.log(mostAppearItem(["js", "js", "golang", "ruby", "ruby", "js", "js"]))
// golang->1 ruby->2 js->4
// console.log(mostAppearItem(["A", "B", "B", "C", "A", "A", "B", "A", "D", "D"]))
// C->1 D->2 B->3 A->4
// console.log(mostAppearItem(["football", "basketball", "tenis"]))
// football->1 basketball->1 tenis->1

module.exports = mostAppearItem