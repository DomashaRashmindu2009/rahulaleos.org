const menu=document.querySelector(".menu-toggle"),nav=document.querySelector("nav");if(menu)menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("open")));
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")})},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.querySelectorAll("[data-count]").forEach(el=>{let done=false;const io=new IntersectionObserver(es=>{if(es[0].isIntersecting&&!done){done=true;let target=+el.dataset.count,start=0,duration=1300,t0=performance.now();function tick(t){let p=Math.min((t-t0)/duration,1);el.textContent=Math.floor(p*target).toLocaleString();if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);io.disconnect()}});io.observe(el)});
