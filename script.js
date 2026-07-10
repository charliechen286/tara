// =================================
// RELATIONSHIP TIMER
// =================================


const startDate = new Date(
    "January 10, 2026 21:00:00"
);



function updateTimer(){


const now = new Date();


const difference = now - startDate;



const seconds =
Math.floor(difference / 1000);



const days =
Math.floor(seconds / (3600 * 24));



const hours =
Math.floor(
(seconds % (3600 * 24)) / 3600
);



const minutes =
Math.floor(
(seconds % 3600) / 60
);



const secs =
seconds % 60;



if(document.getElementById("days")){


document.getElementById("days").innerHTML = days;


document.getElementById("hours").innerHTML = hours;


document.getElementById("minutes").innerHTML = minutes;


document.getElementById("seconds").innerHTML = secs;


}


}



setInterval(updateTimer,1000);

updateTimer();






// =================================
// MEMORY GALLERY
// =================================


const gallery =
document.getElementById("gallery");



if(
gallery &&
typeof memories !== "undefined"
){


memories.forEach(memory=>{


const card =
document.createElement("div");


card.className =
"photo-card";



card.innerHTML = `

<img src="${memory.image}">

<h3>
${memory.title}
</h3>

<p>
${memory.description}
</p>

`;



gallery.appendChild(card);



});


}







// =================================
// DATE WHEEL
// =================================


const dates=[


"watch a movie 🎬",

"cook the same meal 🍜",

"listen to music together 🎵",

"look through old pictures 📸",

"play a game together 🎮",

"plan our future home 🏡"


];




function spinWheel(){


const wheel =
document.getElementById("wheel");


if(!wheel)
return;



wheel.style.transform =
"rotate(720deg)";



setTimeout(()=>{


const result =
document.getElementById("result");



if(result){


result.innerHTML =
dates[
Math.floor(
Math.random()*dates.length
)
];


}



wheel.style.transform =
"rotate(0deg)";


},1500);



}









// =================================
// MUSIC PLAYER
// =================================



const musicButton =
document.getElementById(
"music-button"
);



const music =
document.getElementById(
"music"
);



let playing=false;



if(musicButton && music){


musicButton.onclick=function(){


if(!playing){


music.play();


musicButton.innerHTML="⏸";


}

else{


music.pause();


musicButton.innerHTML="🎵";


}



playing=!playing;


};


}








// =================================
// PAW CLICKS
// =================================


document.addEventListener(
"click",
function(e){



const paw =
document.createElement("div");


paw.className="paw";


paw.innerHTML="🐾";


paw.style.left =
e.clientX+"px";


paw.style.top =
e.clientY+"px";



document.body.appendChild(paw);



setTimeout(()=>{


paw.remove();


},2000);



}

);









// =================================
// UNDERTALE CAT COMPANION
// =================================



let catLove = 0;




function updateLove(){



const fill =
document.getElementById(
"love-fill"
);



const number =
document.getElementById(
"love-number"
);



if(!fill || !number)
return;



if(catLove > 100){

catLove=100;

}



fill.style.width =
catLove+"%";



number.innerHTML =
catLove;



localStorage.setItem(
"catLove",
catLove
);



}







function changeCat(
face,
message
){



const cat =
document.getElementById(
"cat-sprite"
);



const text =
document.getElementById(
"cat-text"
);



if(cat){

cat.innerHTML=face;

}



if(text){

text.innerHTML =
"* "+message;

}



}






function petCat(){



catLove +=5;



changeCat(
"😽",
"the cat loves your pets..."
);



updateLove();



}







function talkCat(){


const messages=[


"the cat says meow.",


"the cat thinks you are nice.",


"the cat remembers tara loves cats.",


"the cat sings you a song."

];



changeCat(

"🐈‍⬛",

messages[
Math.floor(
Math.random()*messages.length
)

]

);


}







function feedCat(){



catLove +=10;



changeCat(

"😻",

"the cat happily eats the treat."

);



updateLove();



}







function playCat(){



catLove +=7;



changeCat(

"🙀",

"the cat zooms around!"

);



updateLove();



}




updateLove();

// =====================
// LOADER FIX
// =====================

window.addEventListener("load",()=>{


    const loader =
    document.getElementById("loader");


    if(loader){


        setTimeout(()=>{


            loader.classList.add("hidden");


        },1500);



        setTimeout(()=>{


            loader.style.display="none";


        },2500);


    }


});