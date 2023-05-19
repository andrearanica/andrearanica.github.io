let input = document.getElementById('input')
let response = ''
let previous = document.getElementById('previous')
let header = document.getElementById('header')

const school = `
&nbsp;<b class='title'>ITIS Paleocapa</b> | Computer science (2018-now)<br>
&nbsp;I am currently studying CS at ITIS Paleocapa, in Bergamo. I'm attending the 5th year.<br>
&nbsp;During these years I learned a lot about both computer science and life, thanks to my<br>
&nbsp;teachers and my mates. <br>
&nbsp;<b class='title'>Milano-Bicocca University</b> | Computer science (2023-...)<br>
&nbsp;Coming soon...<br>
`

const skills = `
<b class='title'>Software development</b><br>
&nbsp;&nbsp;UML deployment diagrams&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a class='full-star'>★★★★</a>☆<br>
&nbsp;&nbsp;Entity-relationship diagrams <a class='full-star'>★★★★</a>☆<br>
&nbsp;&nbsp;C# Windows Form Applications <a class='full-star'>★★★★</a>☆<br>
&nbsp;&nbsp;C++ and Python languages&nbsp;&nbsp;&nbsp;&nbsp; <a class='full-star'>★★★</a>☆☆<br>
<b class='title'>Web development</b><br>
&nbsp;&nbsp;<i class="devicon-html5-plain colored"></i> <i class="devicon-css3-plain colored"></i> <i class="devicon-javascript-plain colored"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class='full-star'>★★★★</a>☆<br>
&nbsp;&nbsp;<i class="devicon-react-original colored"></i> <i class="devicon-bootstrap-plain colored"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a class='full-star'>★★★</a>☆☆<br>
&nbsp;&nbsp;<i class="devicon-php-plain colored"></i> <i class="devicon-mysql-plain colored"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a class='full-star'>★★★★</a>☆<br>
&nbsp;&nbsp;<i class="devicon-nodejs-plain colored"></i> <i class="devicon-express-original colored"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a class='full-star'>★★★★</a>☆<br>
`

const links = `
<b class='title'>Reach me!</b><br>
&nbsp;&nbsp;<i class="devicon-linkedin-plain"></i> <a href='https://linkedin.com/in/andrearanica'>Linkedin</a> (@andrearanica)<br>
&nbsp;&nbsp;<i class="devicon-github-original"></i> <a href='https://github.com/andrearanica'>GitHub</a> &nbsp;&nbsp;(@andrearanica)<br>
`

const help = `
GNU bash, version 5.1.4(1)-release (x86_64-pc-linux-gnu)<br>
&nbsp;&nbsp;summary&nbsp;&nbsp;&nbsp;&nbsp;See all my learning experiences<br>
&nbsp;&nbsp;skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See all my skills<br>
&nbsp;&nbsp;school&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See all my learning experiences<br>
`

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
            Hi everyone! I am Andrea, a Junior Software Developer! 💻<br>
            I'm an 18-year-old boy interested in information technology and the way it can help us in daily life, both in small things<br>
            and in big innovations: thanks to my knowledge I'd like to create something useful for others. 🎯<br>
            I'm currently studying at ITIS Paleocapa and I'm in my final year. Next year I intend to enroll at the University of <br>
            Milano-Bicocca in the computer science faculty, in order to continue to deepen this discipline especially in the software engineering sector. <br>
            I would like to gain some work experience while studying to acquire skills in software development. 📈<br><br>
            <b class='title-red'>School 📒</b><br>
            ${ school }<br>
            <b class='title-red'>Skills ⭐</b><br>
            ${ skills }<br>
            <b class='title-red'>Social 🎯</b><br>
            ${ links } <br> 
            `
            break;
        case 'school':
            response = `
            ${ school }
            `
            break;
        case 'skills':
            response = `
            
            ${ skills }
            ` 
            break;
        case 'cls':
            previous.innerHTML = ''
            break;
        default: 
            response = 'Command not found, digit `help` to get the list'
            break;
    }
    if (input.value !== 'cls') { previous.innerHTML += `<a class='dollar'>user@andrearanica:~$</a> ${ input.value }<br>${ response }<br>` }
    input.value = ''
})