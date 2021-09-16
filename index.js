const name = ['Lisa', 'Kaitlin', 'Jan',]
const event = 'surprise'


function writeCards(name, event) {
    const newArr = [];
    for (let i = 0 ; i <name.length; i++) {
        newArr.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
        debugger;
    }
    return newArr;
}
writeCards('name', 'event');

function countDown(init = 10) {
    while (init >=0) {
        console.log(init--);
    }
} 