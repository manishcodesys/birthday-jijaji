const partyItems = ["🎈","🎈","🎂","🥂","🎉","✨","🎁","🍾","🎊","💛","🌟"];
const layer = document.getElementById("partyLayer");

for(let i=0;i<28;i++){
  const el=document.createElement("div");
  el.className="floating "+(i%4===0?"balloon":"");
  el.textContent=partyItems[Math.floor(Math.random()*partyItems.length)];
  el.style.left=Math.random()*100+"vw";
  el.style.animationDuration=(9+Math.random()*12)+"s";
  el.style.animationDelay=(-Math.random()*15)+"s";
  el.style.fontSize=(1.3+Math.random()*2.2)+"rem";
  layer.appendChild(el);
}

function openModal(id){
  document.getElementById(id).classList.add("show");
  document.body.style.overflow="hidden";
}
function closeModal(id){
  document.getElementById(id).classList.remove("show");
  document.body.style.overflow="";
}
function closeOnBackdrop(e,id){
  if(e.target.id===id) closeModal(id);
}
function openRaja(){ openModal("rajaModal"); burstConfetti(); }

function burstConfetti(){
  for(let i=0;i<55;i++){
    const c=document.createElement("div");
    c.textContent=["✨","🎉","🎊","💛","⭐"][Math.floor(Math.random()*5)];
    c.style.position="fixed";
    c.style.left=(40+Math.random()*20)+"vw";
    c.style.top="45vh";
    c.style.zIndex="100";
    c.style.fontSize=(12+Math.random()*22)+"px";
    c.style.pointerEvents="none";
    document.body.appendChild(c);
    const x=(Math.random()-.5)*700, y=(Math.random()-.8)*700;
    c.animate([{transform:"translate(0,0) scale(.5)",opacity:1},{transform:`translate(${x}px,${y}px) rotate(500deg)`,opacity:0}],{duration:1200+Math.random()*900,easing:"cubic-bezier(.15,.8,.25,1)"});
    setTimeout(()=>c.remove(),2200);
  }
}
function claimTreat(type){
  const messages={
    cake:"🎂 CAKE UNLOCKED! Your cake is officially on the birthday agenda!",
    pizza:"🍕 PIZZA UNLOCKED! Call me with your favourite pizza and I will order it!",
    shake:"🥤 MILK SHAKE UNLOCKED! Call me and choose your favourite flavour!"
  };
  document.getElementById("treatResult").innerHTML=`<div class="claimed">${messages[type]} ❤️</div>`;
  burstConfetti();
}

document.addEventListener("keydown",e=>{if(e.key==="Escape") document.querySelectorAll(".modal.show").forEach(m=>m.classList.remove("show"));});
