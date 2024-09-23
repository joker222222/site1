let text = 'Занимаюсь Веб-программированием. Владею языками программирования: Python, Java, JavaScript, React JS, C#, а также работаю с базами данных,включая MySQL.';
let h3 = document.querySelector("#text h3");
let text1 =  " ";
let input = (i) => {
    setTimeout(() => {
        text1+=text[i];
        h3.textContent=text1
        // console.log(i)
    }, 50*i)
}
for (let i = 0; i < text.length; i ++) {
    input(i)
}

isMobile = window.matchMedia("only screen and (max-width: 753px)").matches;

if (isMobile)
{
    const img = document.createElement('img');
    img.src = './img/380/menu/menu.svg';
    img.alt = 'menu';
    const container = document.querySelector('#text h2 button');
    container.append(img);
}
document.getElementById("button").onclick =  function ()
{
    document.querySelector(".container").classList.toggle("open")
    // if (document.getElementsByClassName("open"))
    // {
    //     h3.textContent="";
    // }
    // else
    // {
    //     h3.textContent="";
    //     for (let i = 0; i < text.length; i ++) {
    //         input(i)
    //     }
    // }
}

// document.getElementById('button').onclick = function() {
//     alert("button was clicked");
// }
// document.addEventListener("DOMContentLoaded", function () {
//
// })