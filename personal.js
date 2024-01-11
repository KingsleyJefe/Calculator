const colors = ['Red', 'Blue', 'Yellow', 'Green', 'Black', 'White', 'Grey'];
const alphabets = ['a', 'b', 'c', 'd', 'e', 'f'];

function getRandomcolors() {
   const randomIndex = Math.floor(Math.random() * colors.length);  
   return colors[randomIndex]; 
}

function getRandomAlphabets() {
    const randomAlphabet = Math.floor(Math.random() * alphabets.length);
    return alphabets[randomAlphabet];
}

const randomizer = getRandomcolors();
const alphabetizer = getRandomAlphabets();
console.log(`Random color: ${randomizer}, ${alphabetizer}`);