//variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"To live is the rarest thing in the world. Most people exist, that is all."`,
    person: ` Oscar Wilde`,
  },
  {
    quote: `"That it will never come again is what makes life so sweet."`,
    person: ` Emily Dickinson`,
  },
  {
    quote: `"It is never too late to be what you might have been."`,
    person: ` George Eliot`,
  },
  {
    quote: `"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`,
    person: ` Ralph Waldo Emerson`,
  },
  {
    quote: `"All the world's a stage, and all the men and women merely players."`,
    person: ` William Shakespeare`,
  },
  {
    quote: `"Be kind, for everyone you meet is fighting a hard battle."`,
    person: ` Plato`,
  },
  {
    quote: `"Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well."`,
    person: ` Voltaire`,
  },
  {
    quote: `"Self-awareness and self-love matter. Who we are is how we lead."`,
    person: ` Brene Brown`,
  },
  {
    quote: `"Amateurs sit and wait for inspiration, the rest of us just get up and go to work."`,
    person: ` Stephen King`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[random].quote;
  person.innerHTML = quotes[random].person;
});
