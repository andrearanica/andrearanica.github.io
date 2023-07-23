let input = document.getElementById('input')
let response = ''
let previous = document.getElementById('previous')
let header = document.getElementById('header')

const education = `
<div class='row'>
    <b class='title'>ITIS Paleocapa</b> | Computer science (2018-now)<br>
    <div class='row'>
        &nbsp;I have studied computer science at ITIS Paleocapa, in Bergamo<br>&nbsp;Grade: 100/100<br>
    </div>
</div>
`

/*
<b class='title'>Software development</b><br>
UML deployment diagrams&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a class='full-star'>★★★★</a>☆<br>
Entity-relationship diagrams <a class='full-star'>★★★★</a>☆<br>
C# Windows Form Applications <a class='full-star'>★★★★</a>☆<br>
C++ and Python languages&nbsp;&nbsp;&nbsp;&nbsp; <a class='full-star'>★★★</a>☆☆<br><br>
*/

const skills = `
<div class='row'>
<b class='title'>Web development</b><br>
<div class='row'>
    Frontend: <i class="devicon-html5-plain colored"></i> <i class="devicon-css3-plain colored"></i> <i class="devicon-javascript-plain colored"></i>&nbsp;<i class="devicon-react-original colored"></i> <i class="devicon-bootstrap-plain colored"></i><br>
    Backend:  &nbsp;<i class="devicon-php-plain colored"></i> <i class="devicon-mysql-plain colored"></i>&nbsp;<i class="devicon-nodejs-plain colored"></i> <i class="devicon-express-original colored"></i> <i class="devicon-mongodb-plain-wordmark"></i>
</div><br>
<b class='title'>Software design</b>
<div class='row'>
    UML deployment diagram | Project management | Entity-relationship diagrams | Basics of cybersecurity
</div>
</div>
`

const links = `
<div class='row'>
    <b class='title'>Reach me!</b><br>
    <div class='row'>
        &nbsp;&nbsp;<i class="devicon-linkedin-plain"></i> <a href='https://linkedin.com/in/andrearanica'>Linkedin</a> (@andrearanica)<br>
        &nbsp;&nbsp;<i class="devicon-github-original"></i> <a href='https://github.com/andrearanica'>GitHub</a> &nbsp;&nbsp;(@andrearanica)<br>
    </div>
</div>
`

const help = `
GNU bash, version 5.1.4(1)-release (x86_64-pc-linux-gnu)<br>
<a class='title-red'>Welcome on my portfolio!</a><br>Choose one of the following commands to continue:<br>
&nbsp;&nbsp;summary&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See all my learning experiences<br>
&nbsp;&nbsp;skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See all my skills<br>
&nbsp;&nbsp;education&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See all my projects<br>
&nbsp;&nbsp;links&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See all my projects<br>
&nbsp;&nbsp;clear&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clean the screen<br>
`

const projects = `
<div class='row'>
    <b class='title'>Fotoregistro</b> (12/2022 - now)<br>
    <div class='row'>
        I am developing a web application to help teachers collecting students' photos <a href='https://github.com/andrearanica/fotoregistro'>(GitHub)</a><br>
    </div>
</div>
`

previous.innerHTML += `<a class='dollar'>user@andrearanica:~$</a> help<br>${ help }<br>`

document.getElementById('input-form').addEventListener('submit', (e) => {
    e.preventDefault()
    response = ''
    switch (input.value) {
        case 'help': 
            response = `
            ${ help }
            `
            break;
        case 'summary':
            response = `
            <div class='row'>
                <h3>Hi everyone! I am Andrea, a Junior Software Developer and Computer science student!</h3>
                <h3 class='title-red'>Education</h3><br>
                ${ education }<br>
                <h3 class='title-red'>Projects</h3><br>
                ${ projects }<br>
                <h3 class='title-red'>Skills</h3><br>
                ${ skills }<br>
                <h3 class='title-red'>Social</h3><br>
                ${ links } <br> 
            </div>
            `
            break;
        case 'education':
            response = `
            ${ education }
            `
            break
        case 'skills':
            response = `
            ${ skills }
            ` 
            break
        case 'projects':
            response = `
            ${ projects }
            `
            break
        case 'links':
            response = `
            ${ links }
            `
            break
        case 'clear':
            previous.innerHTML = ''
            break
        case 'ls':
            response = `
            index.html&nbsp;&nbsp;&nbsp;script.js&nbsp;&nbsp;&nbsp;style.css
            `
            break
        case 'pwd':
            response = 'https://andrearanica.altervista.org/'
            break
        default: 
            response = `bash: ${ input.value }: command not found`
            break
    }
    if (input.value !== 'clear') { previous.innerHTML += `<a class='dollar'>user@andrearanica:~$</a> ${ input.value }<br>${ response }<br>` }
    input.value = ''
})