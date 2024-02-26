let divEl = document.querySelector(".eventBox");
divEl.onmouseover = (evt) =>{
    console.log("You are awsome.");
    divEl.innerHTML="Click me.";
    console.log(evt);
    console.log(evt.type);//mouseover
    console.log(evt.target);
}

//event listeners
divEl.addEventListener("click",(evt) =>{
    divEl.innerHTML ="Hello!";
    console.log(evt.type);//click
});

divEl.addEventListener("click", () =>{
    console.log("Hello is displayed.-1st handler");
});

divEl.addEventListener("click", () =>{
    console.log("Hello is displayed.-2nd handler");
});

const handler3 = ()=>{
    console.log("Hello is displayed.-3rd handler");
};

divEl.addEventListener("click",handler3 );

divEl.addEventListener("click",() =>{
    console.log("Hello is displayed.-4th handler");
});

//removing event listener
divEl.removeEventListener("click",handler3);

//practice
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; //dark

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else if (currMode === "dark") {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode);
});
