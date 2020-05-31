const book = {
    name: 'Parva',
    author: 'SLB',
    publisher: {
        name: 'SBH',
        year: '1988'
    }
}

const { name: bookName = 'none', author: authorName } = book;
const { name: publisherName = 'self' } = book.publisher;

console.log(`The ${bookName} is by ${authorName}`)
console.log(publisherName);

const coffee = ['Coffe-cold', '100rs', '150rs', '200rs']

const [coffeeType, , , , fpack = '1000rs'] = coffee;

console.log(`A ${coffeeType} family pack costs ${fpack}`)
