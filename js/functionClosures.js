const makeCounterText = document.querySelector(".functionClosures__inner-text");

const makeCounter = (count) => {
    return () => {
        return count++;
    };
};

let counter = makeCounter(0);
let counter2 = makeCounter(0);

makeCounterText.innerHTML = `<span class="color__green">Вызовы функции counter:
 <span class="color__red"> ${counter()}<br> </span> </span>`;
makeCounterText.innerHTML += `<span class="color__green">Вызовы функции counter:
<span class="color__red"> ${counter()}<br> </span> </span>`;
makeCounterText.innerHTML += `<span class="color__green">Вызовы функции counter: 
<span class="color__red"> ${counter()}<br> <br> </span> </span>`;


makeCounterText.innerHTML += `<span class="color__red">Вызовы функции counter(2):
 <span class="color__green">${counter2()}<br> </span> </span>`;
makeCounterText.innerHTML += `<span class="color__red">Вызовы функции counter(2): 
<span class="color__green">${counter2()}<br> </span>  </span>`;
makeCounterText.innerHTML += `<span class="color__red">Вызовы функции counter(2):
<span class="color__green">${counter2()}<br> </span>  </span>`;
