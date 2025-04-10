let btn = document.getElementById('swap');
let div = document.getElementById('app')
btn.addEventListener('click',()=>{
	div.classList.toggle('night')
	btn.classList.toggle('button_night')
})
