let input = document.getElementById('input')
let response = ''
let previous = document.getElementById('previous')
let header = document.getElementById('header')

const help = `
GNU bash, version 5.1.4(1)-release (x86_64-pc-linux-gnu)<br>
&nbsp;&nbsp;summary&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Who am I?<br>
&nbsp;&nbsp;skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See all my skills<br>
`

const summary = `
<center>
<div style="font-size: 120%;">
<h2 style='color: orange'>Welcome on my website! I'm Andrea, a Junior Software Developer</h2>
I'm a Junior Software developer who wants to learn more every single day. I love improving my skills in computer science and programming.<br>
In my free time, I like going to the gym 🏋🏻, play videogames 🕹️ and improve myself 🚀<br>
<h3 style='color: orange'>What am I doing? 👀</h3>
I'm studying Computer Science @ University of Milano-Bicocca (currently first year)</li><br>
I'm working as a Software developer @ DDX Software Solutions</li><br>
<h3 style='color: orange'>My skills ✨</h3>
<img src="https://skillicons.dev/icons?i=python,cs,cpp,javascript,nodejs,php,mysql,mongodb,bash," /><br>
<img src="https://skillicons.dev/icons?i=bootstrap,react,express,laravel" /><br>
<img src="https://skillicons.dev/icons?i=linux,vscode,github,gitlab,postman" />
<br>
<h3>Connect with me 👋🏻</h3>
If you want to know more about me or to contact me, use the buttons below. A presto 💪🏻<br><br>
<a href="https://github.com/andrearanica"><img src="https://skillicons.dev/icons?i=github" /></a>
<a href="https://linkedin.com/in/andrearanica"><img src="https://skillicons.dev/icons?i=linkedin" /></a>
<br><br>
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
        case 'summary':
            response = summary
            break   
        case 'cls':
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
    if (input.value !== 'cls') { 
        previous.innerHTML += `<a class='dollar'>user@andrearanica:~$</a> ${ input.value }<br>${response}`
    }
    input.value = ''
})