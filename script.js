
// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Theme toggle: light/dark simple (stores in localStorage)
const btn = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const current = localStorage.getItem('theme');
if(!current && prefersDark){
  document.documentElement.style.setProperty('--panel','#0b1220');
  document.documentElement.style.setProperty('--text','#e6eef8');
  document.documentElement.style.setProperty('--muted','#9aa6b2');
  btn.textContent = '☀️';
}
if(current === 'dark'){
  document.documentElement.style.setProperty('--panel','#0b1220');
  document.documentElement.style.setProperty('--text','#e6eef8');
  document.documentElement.style.setProperty('--muted','#9aa6b2');
  btn.textContent = '☀️';
}
btn.addEventListener('click', ()=>{
  const isDark = document.documentElement.style.getPropertyValue('--panel') === '#0b1220';
  if(!isDark){
    // switch to dark
    document.documentElement.style.setProperty('--panel','#0b1220');
    document.documentElement.style.setProperty('--text','#e6eef8');
    document.documentElement.style.setProperty('--muted','#9aa6b2');
    localStorage.setItem('theme','dark');
    btn.textContent = '☀️';
  } else {
    // switch to light
    document.documentElement.style.setProperty('--panel','#ffffff');
    document.documentElement.style.setProperty('--text','#0b1220');
    document.documentElement.style.setProperty('--muted','#6b7280');
    localStorage.setItem('theme','light');
    btn.textContent = '🌙';
  }
});
