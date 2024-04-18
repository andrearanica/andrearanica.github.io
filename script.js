let input = document.getElementById('input')
let response = ''
let previous = document.getElementById('previous')
let header = document.getElementById('header')

const help = `
GNU bash, version 5.1.4(1)-release (x86_64-pc-linux-gnu)<br>
&nbsp;&nbsp;resumee&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Info about me and what I do<br>
&nbsp;&nbsp;projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The projects I worked on<br>
&nbsp;&nbsp;clear&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clear the screen<br>
`

const summary = `
<center>
<div style="font-size: 120%;">
<h2 style='color: orange'>Welcome on my website! I'm Andrea, a Junior Software Developer</h2>
I'm a Junior Software developer who wants to learn more every single day. I love improving my skills in computer science and programming.<br>
In my free time, I like going to the gym 🏋🏻, play videogames 🕹️ and improve myself 🚀<br>
<h3 style='color: orange'>What am I doing? 👀</h3>
I'm studying Computer Science @ University of Milano-Bicocca (currently first year)</li><br>
I'm working as a CAD/CAM Software developer @ DDX Software Solutions</li><br>
<h3 style='color: orange'>My skills ✨</h3>
<img src="https://skillicons.dev/icons?i=python,cs,cpp,javascript,nodejs,php,mysql,mongodb,bash," /><br>
<img src="https://skillicons.dev/icons?i=bootstrap,react,express,laravel" /><br>
<img src="https://skillicons.dev/icons?i=linux,vscode,github,gitlab,postman" />
<br>
<h3 style='color: orange'>Connect with me 👋🏻</h3>
If you want to contact me, use the buttons below... I'll respond you as soon as possible 💪🏻<br><br>
<a href="https://github.com/andrearanica"><img src="https://skillicons.dev/icons?i=github" /></a>
<a href="https://linkedin.com/in/andrearanica"><img src="https://skillicons.dev/icons?i=linkedin" /></a>
<a href="https://linkedin.com/in/andrearanica"><img src="https://skillicons.dev/icons?i=gmail" /></a>
<br><br>
</div>
</center>`

const projects = `
<center>
<div style="font-size: 120%">
<h2 style="color: orange">Projects</h2>
Here there are some of the projects I made during the last years to learn some of the key topics of computer science    
<li><a href="https://github.com/andrearanica/piantapp">PiantApp</a>: a social media made with sockets with client/server architecture</li>
<li><a href="https://github.com/andrearanica/blockchain">Blockchain</a>: a simulator of the blockchain technology made in JavaScript</li>
<li><a href="https://github.com/andrearanica/fotoregistro">Fotoregistro</a>: a web application for teachers and students</li>
</div></center><br>`

previous.innerHTML += `<a class='dollar'>user@andrearanica:~$</a> help<br>${ help }<br>`

document.getElementById('input-form').addEventListener('submit', (e) => {
    e.preventDefault()
    response = ''
    switch (input.value) {
        case 'help': 
            response = help
            break;
        case 'resumee':
            response = summary
            break
        case 'projects':
            response = projects
            break   
        case 'clear':
            previous.innerHTML = ''
            break
        case 'ls':
            response = `
            index.html&nbsp;&nbsp;&nbsp;script.js&nbsp;&nbsp;&nbsp;style.css<br>
            `
            break
        default: 
            response = `bash: ${ input.value }: command not found<br>`
            break
    }
    if (input.value !== 'clear') { 
        previous.innerHTML += `<a class='dollar'>user@andrearanica:~$</a> ${ input.value }<br>${response}`
    }
    input.value = ''
    window.scrollTo(0, document.body.scrollHeight)
})