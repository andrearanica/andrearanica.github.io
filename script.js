let inputCommand = document.getElementById('input-command')
let inputForm = document.getElementById('input-form')
let previous = document.getElementById('previous')
let header = document.getElementById('header')
let body = document.getElementById('body')
let title = document.getElementById('title')
let subtitle = document.getElementById('subtitle')
let upperPage = document.getElementById('upper-page')
let commandsDiv = document.getElementById('commands')

const SUBTITLES = [
    "I'm a Software Developer @ DDX Software Solutions",
    "I study Computer Science @ University of Milano-Bicocca",
    "In my free time I enjoy going to the gym, play videogames and biking",
    "Write help to continue..."
]

const PRESENTATION = `
<center>
<h2 class='dollar'>Welcome on my portfolio!</h2>
I'm Andrea, I'm 19yo and I live in Bergamo 👋🏻<br><br>
I study <a class='dollar'>computer science</a> @ University of Milano-Bicocca, I'm currently at the second year of the <a class='dollar'>Bachelor's degree</a><br>
I work as a <a class='dollar'>software developer</a> @ DDX Software Solutions, where I develop <a class='dollar'>CAD/CAM plugins</a> in Python<br><br>
In my free time I like <a class='dollar'>coding</a> my projects, going to the <a class='dollar'>gym</a> and <a class='dollar'>biking</a>!<br><br>
If you want to learn more about me, type the 'help' command down here
<br><br></center>
`

const HELP = `
GNU bash, version 5.2.15(1)-release (x86_64-pc-linux-gnu)<br>
&nbsp about-me &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp A quick presentation of myself<br>
&nbsp experiences &nbsp&nbsp&nbsp My study and working experiences<br>
&nbsp projects &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Some of the projects I worked on<br>
`

const ABOUT_ME = `
<center>
<div style='display: flex'>
    <div id='left' style='float: left;'>
        <img class='about-me-image' src='img/mola-mia.jpg' />
    </div>
    <div id='right' style='float: left;'>
        <h2 class='dollar'>About me</h2>    
        Welcome on my webiste! I'm Andrea, I'm 19yo and I live in Bergamo (Italy)<br>
        I'm a computer science enthusiast: I started coding at 13yo, starting with Scratch and learning in the next years different programming languages and tools.<br><br>

        After the middle schools, I decided to go to a computer science high school, where I started to learn coding by myself: from Python to Visual Basic .NET, passing for
        simple video games with Construct and web development with React and Node; I was excited about what I could create with coding!<br><br>

        In my free time, I like going to the gym and biking: in the gym I like the feeling to constantly improving my skills (like with coding), while biking makes me enjoying
        the best places here in Bergamo.<br><br>

        My goal is to learn always more about computer science, both in the theoretical side and in the practical side<br><br>
    </div>
</div>

</center>
`

const EXPERIENCES = `
<center>
<h2 class='dollar'>My experiences</h2>
I studied <a class='dollar'>computer science</a> at the Pietro Paleocapa high school in Bergamo<br><br>
Since I loved the topics I studied during those 5 years, I decided to continue studying computer study<br>
In fact, I'm currently studying for my <a class='dollar'>Bachelor's degree</a> in computer science @ University of Milano-Bicocca<br><br>
Since 2023, I work @ DDX Software Solutions as a <a class='dollar'>software developer</a>: I maily develop <a class='dollar'>CAD/CAM plugins</a> using Python, to automate the creation of CAD/CAM projects and customize the customer experience<br><br>
Thanks to these experiences, I learned to work with different tools and programming languages like the following<br><br>

<img src="https://skillicons.dev/icons?i=python,cs,cpp,javascript,nodejs,php,mysql,mongodb,bash,bootstrap,react,express,laravel,linux,vscode,github,gitlab,postman&perline=9" />
</center>
`

const PROJECTS = `
<center>
<h2 class='dollar'>Projects</h2>
In my free time, I like to work on some projects that can help me to improve with my CS skills
<h3><a class='dollar' target='_blank' href='https://github.com/andrearanica/mips-simulator'>MIPS Simulator</a></h3>
This is the project I'm currently working on: it is a Python software that simulates the MIPS32 architecture executing assembly files.<br>
To build this software I used what I learned during the "Computer architecture" course at university, in fact I tried to replicate the processor components 
and phases as realistic as I could. <br><br>
<img class='project-image' src='img/mips-simulator.png' /><br><br>

<h3><a class='dollar' target='_blank' href='https://github.com/andrearanica/fotoregistro'>Fotoregistro</a></h3>
During the last year of high school I developed a web application that aimed to collect students' photos<br>
to allow teachers to create the photo registers of their classes.<br><br>
<img class='project-image' src='img/fotoregistro.png' /><br><br>

<h3><a class='dollar' target='_blank' href='https://github.com/andrearanica/blockchain'>Blockchain simulator</a></h3>
One of my favourite school projecs was a web application made completely in JavaScript that simulated a simple blockchain mining process<br>
Every user could mine blocks and earn coins to grow the chain; building this project I explored the blockchain world and I could understand how they work<br><br>
<img src="https://skillicons.dev/icons?i=react,nodejs,mongodb" />
</center>
`

const loadBody = () => {
    previous.innerHTML = PRESENTATION
}

inputForm.addEventListener('submit', e => {
    e.preventDefault();
    writeInputLine();
    command = inputCommand.value;
    switch(command) {
        case 'clear':
            previous.innerHTML = '';
            break;
        case 'help':
            previous.innerHTML += HELP;
            commandsDiv.scrollTop = commandsDiv.scrollHeight
            break;
        case 'about-me':
            previous.innerHTML = ABOUT_ME;
            break;
        case 'experiences':
            previous.innerHTML = EXPERIENCES;
            break;
        case 'projects':
            previous.innerHTML = PROJECTS;
            break;
        default:
            previous.innerHTML += `bash: ${command}: command not found`
            commandsDiv.scrollTop = commandsDiv.scrollHeight
            break;
    }

    if (command != 'clear') {
        previous.innerHTML += '<br>'
    }
    
    inputCommand.value = ''
})

const writeInputLine = () => {
    previous.innerHTML += `<a class='dollar'>user@andrearanica:~$</a> ${ inputCommand ? inputCommand.value : '' }<br>`
}