console.log("Js:Loaded");

const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


// Task 1.0 
const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');

// Task 2.0
const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = "#0e9aa7";
topMenuEl.classList.add('flex-around');

// Task 3.0 
menuLinks.forEach((link) =>{
   const aEl = document.createElement('a');
   aEl.href = link.href;
   aEl.textContent = link.text;
   topMenuEl.appendChild(aEl);
});

