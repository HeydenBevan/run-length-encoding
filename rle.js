const rawWord = "door";
const expectedEncoding = "1d2o1r";

console.log('Encoding Test:')
console.log(`Word: ${rawWord} | Expected: ${expectedEncoding}`);

class RleEncoder {
    static encode(str) {
        let counter = 1;
        let lastChar = '';
        let encodedStr = '';

        for (let i = 0; i < str.length + 1; i++) {
            let currentChar = i >= str.length ?
                null :
                str[i];

            if (lastChar === '') {
                lastChar = currentChar;
                continue;
            }

            if (currentChar !== lastChar) {
                encodedStr = encodedStr + counter.toString() + lastChar;
                counter = 1;
            }

            if (currentChar === lastChar) {
                counter++;
            }

            lastChar = currentChar;
        }

        return encodedStr;
    }

    static decode(str) {
        let lastCount = 0;
        let decodedStr = '';

        for (let i = 0; i < str.length + 1; i++) {
            let currentChar = i >= str.length ?
                null :
                str[i];

            if (currentChar === null) {
                continue;
            }

            let num = Number.parseInt(currentChar);
            if (Number.isNaN(num)) {
                decodedStr = decodedStr.padEnd(decodedStr.length + lastCount, currentChar);
            }

            lastCount = num;
        }

        return decodedStr;
    }
}

let encodedWord = RleEncoder.encode(rawWord);

console.log(`Result: ${encodedWord}`);
console.log(`Status: ${encodedWord === expectedEncoding ? 'success' : 'failure'}`);
console.log('\n');
console.log('Decoding Test:');
console.log(`Word: ${encodedWord} | Expected: ${rawWord}`);

let decodedWord = RleEncoder.decode(encodedWord);

console.log(`Result: ${decodedWord}\nStatus: ${decodedWord === rawWord ? 'success' : 'failure'}`);
