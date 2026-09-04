const sections=document.querySelectorAll("section[id]");const links=document.querySelectorAll(".nav nav a");const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.classList.remove("active"));const a=document.querySelector(`.nav nav a[href="#${entry.target.id}"]`);if(a)a.classList.add("active")}})},{rootMargin:"-35% 0px -55% 0px"});sections.forEach(s=>observer.observe(s));
const lb=document.createElement("div");lb.className="lightbox";lb.innerHTML='<button aria-label="Close">×</button><img alt="">';document.body.appendChild(lb);const lbi=lb.querySelector("img");document.querySelectorAll(".gallery img").forEach(img=>img.onclick=()=>{lbi.src=img.src;lbi.alt=img.alt;lb.classList.add("open")});lb.onclick=e=>{if(e.target===lb||e.target.tagName==="BUTTON")lb.classList.remove("open")};
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
}