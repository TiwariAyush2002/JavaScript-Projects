let btn = document.querySelector('#new-quote');
let quote= document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes=[
    {
        quote:'hello',
        person:'adarsh'
    },{
        quote:'hi',
        person:'ayush'
    },{
        quote:'all the best',
        person:'somidh'

    },{
        quote:'you are a pro',
        person:'avi'
    },{
        quote:'always believe in God',
        person:'shivi'
    }
];
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);
    console.log(quotes[random].quote)
    console.log('button')
    quote.textContent= quotes[random].quote;
    person.textContent = quotes[random].person;
    
})