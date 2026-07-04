// =============================
// ShadowMC Official Script
// =============================

// Copy Server IP

function copyIP() {

const ip = "OpShadowMC.play.hosting";

navigator.clipboard.writeText(ip);

alert("✅ Server IP Copied!\n\n" + ip);

}

// =============================
// Active Navbar
// =============================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link=>{

if(link.href===window.location.href){

link.classList.add("active");

}

});

// =============================
// Fade Animation
// =============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

// =============================
// Counter Animation
// =============================

const counters=document.querySelectorAll(".stat-box h2");

counters.forEach(counter=>{

const update=()=>{

const target=counter.innerText.replace("+","");

if(isNaN(target)) return;

let value=+counter.getAttribute("data-value")||0;

const speed=Math.ceil(target/40);

if(value<target){

value+=speed;

counter.setAttribute("data-value",value);

counter.innerText=value+"+";

setTimeout(update,40);

}else{

counter.innerText=target+"+";

}

};

update();

});

// =============================
// Scroll Top Button
// =============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topButton";

document.body.appendChild(topBtn);

window.onscroll=()=>{

if(document.documentElement.scrollTop>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// =============================
// Hero Animation
// =============================

window.addEventListener("load",()=>{

const hero=document.querySelector(".hero-content");

if(hero){

hero.style.opacity="0";

hero.style.transform="translateY(60px)";

setTimeout(()=>{

hero.style.transition="1.2s";

hero.style.opacity="1";

hero.style.transform="translateY(0px)";

},300);

}

});

// =============================
// Card Hover Animation
// =============================

const cards=document.querySelectorAll(

".card,.rank-card,.key-card,.store-card,.staff-card"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

// =============================
// Welcome Message
// =============================

console.log("🌑 Welcome To ShadowMC Website");
console.log("IP : OpShadowMC.play.hosting");
console.log("Version : 1.21+");

// =============================
// Coming Soon Buttons
// =============================

document.querySelectorAll("button").forEach(btn=>{

if(btn.innerText.includes("Coming Soon")){

btn.addEventListener("click",()=>{

alert("🚧 This feature is coming soon!");

});

}

});
