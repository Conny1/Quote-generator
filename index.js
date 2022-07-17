const quotes=[{
    quote:'"The best way to find yourself is to lose yourself in the service of others."',
    person:'Mahatma Gandhi'
},{
    quote:'"If you want to liveahappy life,tie it toagoal,notto people or things."',
    person:'Albert Einstein'
},{
   quote:'"At his best,man is the noblest of all animals;separated from law and justice he is the worst."',
    person:'Aristotle'
},{
    quote:'"Your time is limited,so dont waste it living someone else\'s life."',
    person:'Steve Jobs'
},{
    quote:"Tell me and I forget.Teach me andIremember.Involve me and I learn.",
    person:'Benjamin Franklin'
},{
    quote:'"If you look at what you have in life,you\'ll always have more.If you look at what you don\'t have in life,you\'ll never I have enough."',
    person:'Oprah Winfrey'
},{
    quote:'"If you look at what you have in life,you\'ll always have more.If you look at what you don\'t have in life,you\'ll never have enough."',
    person:'Oprah Winfrey'
 },{
    quote:'"tdoes not matter how slowly you go as long as you do not stop."',
    person:'Confucius'
 },{
    quote:'"Our lives begin to end the day we become silent about things that matter."',
    person:'Martin Luther King Jr.'
 },{
    quote:'"Remember that not getting what you want is sometimesa wonderful stroke of luck."',
    person:'Dalai Lama'
 },{
    quote:'"The journey of a thousand miles begins with one step."',
    person:'Lao Tzu'
 }];


const quote = document.querySelector('.quote');
const person = document.querySelector('.name');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    console.log("clicked");
    let count = Math.floor( Math.random()* quotes.length );
    console.log(count);
    quote.innerText = quotes[count].quote;
    person.innerText = quotes[count].person;
})