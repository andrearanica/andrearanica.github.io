let inputCommand = document.getElementById('input-command')
let inputForm = document.getElementById('input-form')
let response = ''
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
GNU bash, versione 5.2.15(1)-release (x86_64-pc-linux-gnu)<br>
&nbsp experience &nbsp&nbsp&nbsp&nbsp My study and working experiences<br>
&nbsp projects &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Some of the projects I worked on<br>
&nbsp contacts &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Reach me with my social medias
`

const EXPERIENCE = `
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
Work in progress...
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
            break;
        case 'experience':
            previous.innerHTML = EXPERIENCE
            break;
        case 'projects':
            previous.innerHTML += PROJECTS
            break;
        default:
            previous.innerHTML += `bash: ${command}: command not found`
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