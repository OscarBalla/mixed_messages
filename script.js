const place = ["Egypt", "Australia", "Rome", "Athens", "Sparta", "China", "Troy", "Carthage", "Macedonia", "Jerusalem"];
const person = ["Alexander of Macedon", "Augustus Caesar", "Phillip II", "Sun Tzu", "Indigenous Australians", "Odysseus", "Achilles", "Hector"];
const event = ["died", "became king", "engulfed the area in flames", "wrote a book", "played Among Us", "got married"];

const getRandData = array => {
    return array[Math.floor(Math.random() * array.length)];
}

const createMessage = () => {
    const mPlace = getRandData(place);
    const mPerson = getRandData(person);
    const mEvent = getRandData(event);
    const year = Math.floor(Math.random()* 4000);
    const age = Math.floor(Math.random() * 88);

    return `In ${mPlace}, ${mPerson} was born in ${year}BCE. At the age of ${age}, they ${mEvent}.`;
}

console.log(createMessage());