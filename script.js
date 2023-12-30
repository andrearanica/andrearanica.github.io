let input = document.getElementById('input')
let response = ''
let previous = document.getElementById('previous')
let header = document.getElementById('header')

const help = `
GNU bash, version 5.1.4(1)-release (x86_64-pc-linux-gnu)<br>
&nbsp;&nbsp;resumee&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My CV with all my experiences<br>
&nbsp;&nbsp;education&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;School and University experience<br>
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
If you want to know more about me or to contact me, use the buttons below. A presto 💪🏻<br><br>
<a href="https://github.com/andrearanica"><img src="https://skillicons.dev/icons?i=github" /></a>
<a href="https://linkedin.com/in/andrearanica"><img src="https://skillicons.dev/icons?i=linkedin" /></a>
<a href="https://linkedin.com/in/andrearanica"><img src="https://skillicons.dev/icons?i=gmail" /></a>
<br><br>
</div>
</center>`

const education = `
<center>
<div style="font-size: 120%;">
<h2 style='color: orange'>📚 Education</h2>
<h3>High school</h3>
<img src="paleocapa.png" class="paleocapa">
<p>I studied Computer Science @ ITIS Pietro Paleocapa, in Bergamo (2018-2023)</p>
<p>In 5 years I learned all the basics concepts I needed to become a Junior Software Developer, like OOP and Web development, <br>and some Software designing concepts like UML and ER diagrams, project management basics ecc...</p>
<p>Some of the projects I made during these years are the following</p>
    <center>
        <a href="https://github.com/andrearanica/Cercatore-Di-Funghi"><button class="btn">🍄</button></a>
        <a href="https://github.com/andrearanica/lancio-dadi"><button class="btn">🎲</button></a>
        <a href="https://github.com/andrearanica/PiantApp"><button class="btn">🌵</button></a>
        <a href="https://github.com/andrearanica/blockchain"><button class="btn">🪙</button></a>
        <a href="https://github.com/andrearanica/movimentazione-manuale"><button class="btn">👷</button></a>    
        <a href="https://github.com/andrearanica/fotoregistro"><button class="btn">📷</button></a> 
    </center>
<br><br>
<h3>University</h3>
<img src="unimib.png" class="paleocapa">
<p>I'm studying Computer Science @ University of Milano-Bicocca (2023-)</p>
<p><u>Courses I'm attending</u>: Analisi I, Fondamenti di Informatica, Programmazione I</p>
</div>
</center>`

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
        case 'education':
            response = education
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