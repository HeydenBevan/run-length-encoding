const rawWord = "door";
const expectedEncoding = "1d2o1r";

console.log('Encoding Test:')
console.log(`Word: ${rawWord} | Expected: ${expectedEncoding}`);

function encode(str) {
    let counter = 1;
    let lastChar = '';
    let sequence = '';
    for (let i = 0; i < str.length + 1; i++) {
        let currentChar = i >= str.length ? null : str[i];

        if (lastChar === '') {
            lastChar = currentChar;
            continue;
        }

        if (currentChar !== lastChar) {
            sequence = sequence + counter.toString() + lastChar;
            counter = 1;
        }

        if (currentChar === lastChar) {
            counter++;
        }

        lastChar = currentChar;
    }

    return sequence;
}

let encodedWord = encode(rawWord);

console.log(`Result: ${encodedWord}`);
console.log(`Status: ${encodedWord === expectedEncoding ? 'success' : 'failure'}`);
console.log('\n');
console.log('Decoding Test:');
console.log(`Word: ${encodedWord} | Expected: ${rawWord}`);

function decode(str) {
    let lastCount = 0; 
    let decodedStr = '';
    for (let i = 0; i < str.length + 1; i++) {
        let currentChar = i >= str.length ? null : str[i];
        if (currentChar === null) {
            continue;
        }

        let num = Number.parseInt(currentChar);
        if (Number.isNaN(num)) {
            decodedStr = decodedStr.padEnd(decodedStr.length + lastCount, currentChar);
            continue;
        }

        lastCount = num;
    }

    return decodedStr;
}

let decodedWord = decode(encodedWord);

console.log(`Result: ${decodedWord}\nStatus: ${decodedWord === rawWord ? 'success' : 'failure'}`);
