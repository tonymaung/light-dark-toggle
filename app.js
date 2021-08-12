//tagerting toggle switch
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const icon = document.getElementById('logo');
const text = document.querySelector('.toggle-text');
const nav = document.querySelector('nav');
const switchIcon = document.querySelector('.fas');
const img1 = document.querySelector('#image-1');
const img2 = document.querySelector('#image-2');
const img3 = document.querySelector('#image-3');
const textBox =document.getElementById("text-box")
let isDark = false;
//Check Local Storage for item
const currentTheme = localStorage.getItem('theme')
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme == 'dark'){
        isDark = true;
        toggleSwitch.setAttribute("checked",true);
        toggleDarkLight(isDark);
    }
}else{
    document.documentElement.setAttribute('data-theme', 'light');
}
//function for toggling dark and light mode
function toggleDarkLight(isDark){
    nav.style.backgroundColor = isDark? 'rgb(0 0 0 / 50%)' :'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
	document.documentElement.setAttribute('data-theme', isDark? 'dark' : 'light');
	icon.style.filter =  isDark ? 'invert(31%) sepia(96%) saturate(3371%) hue-rotate(253deg) brightness(100%) contrast(101%)' : 'invert(66%) sepia(67%) saturate(4405%) hue-rotate(323deg) brightness(100%) contrast(108%)';
	text.innerText = isDark? 'Dark Mode' : 'Light Mode';
	isDark? switchIcon.classList.replace('fa-sun','fa-moon') : switchIcon.classList.replace('fa-moon','fa-sun') ;
	imageMode(isDark ? "dark" : "light");
}
//Img Dark or Light 
function imageMode (color){
    img1.setAttribute('src', `img/undraw_proud_coder_${color}.svg`);
	img2.setAttribute('src', `img/undraw_feeling_proud_${color}.svg`);
	img3.setAttribute('src', `img/undraw_conceptual_idea_${color}.svg`);
}
//Switch Theme
const switchTheme = (e) => {
	if (e.target.checked) {
        isDark = true;
		toggleDarkLight(isDark);
        localStorage.setItem('theme','dark');
	} else {
        isDark = false;
		toggleDarkLight(isDark);
        localStorage.setItem('theme','light');
	}
};
//Adding Event Listener
toggleSwitch.addEventListener('change', switchTheme);



