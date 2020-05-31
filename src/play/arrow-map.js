const multiplier = {
    nums: [12, 12, 565, 65, 889, 76745],
    multiplyBy: 34,
    getValues() {
        return this.nums.map((num) => this.multiplyBy * num)
    }
}

console.log(multiplier.getValues());

/*
const templatePerson = (
    <div>
        <h1>Name:{person.name ? person.name : 'Anashku'}</h1>
        {(person.age && person.age > 18) && <p>Age:{person.age}</p>}
        {getlocation(person.location)}
    </div>
);
const appRoot = document.getElementById('app');
*/