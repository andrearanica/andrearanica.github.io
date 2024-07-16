let inputCommand = document.getElementById('input-command')
let inputForm = document.getElementById('input-form')
let response = ''
let previous = document.getElementById('previous')
let header = document.getElementById('header')
let body = document.getElementById('body')
let title = document.getElementById('title')
let upperPage = document.getElementById('upper-page')

const SUBTITLES = [
    "I'm a Software Developer @ DDX Software Solutions",
    "I study Computer Science @ University of Milano-Bicocca",
    "In my free time I enjoy going to the gym, play videogames and biking",
    "Write help to continue..."
]

inputForm.addEventListener('submit', e => {
    e.preventDefault()
    previous.innerHTML += '<br>'
    writeInputLine()
    command = inputCommand.value
    switch(command) {
        case 'clear':
            previous.innerHTML = ''
            break;
        default:
            previous.innerHTML += `<br>bash: ${command}: command not found`
    }

    inputCommand.value = ''
})

body.onload = async e => {
    e.preventDefault()
    let title = `I'm Andrea, a Software Developer & Computer Science student`
    writeTitle(title)
    
    let i = 0
    setInterval(() => {
        if (i < SUBTITLES.length) {
            write(SUBTITLES[i], upperPage)
            i++
        } else {
            clearInterval(timer)
        }
    }, 2000)

    for(i = 0; i < SUBTITLES.length; i++) {
        write(SUBTITLES[i], upperPage)
        await new Promise(r => setTimeout(r, 5000))
    }
}

const writeTitle = text => {
    title.innerHTML += `<h2 style='color: orange; text-align: center; font-size: 200%;'>${text}</h2>`
}

const writeHelp = async () => {
    // TODO add constants instead of strings
    await write('GNU bash, version 5.1.4(1)-release (x86_64-pc-linux-gnu)')
}

const writeError = async (wrongCommand) => {
    errorMessage = `bash: ${wrongCommand}: command not found`
    await write(errorMessage)
}

const write = async (message, element=previous) => {
    /** Writes the message inside the passed element of the DOM 
     */
    i = 0
    while (i < message.length) {
        element.innerHTML += message.charAt(i)
        i++
        await new Promise(r => setTimeout(r, 10))
    }
    
    while (i >= 0) {
        element.innerHTML = message.substring(0, i)
        i--
        await new Promise(r => setTimeout(r, 10))
    }
}

const writeInputLine = () => {
    previous.innerHTML += `<br><a class='dollar'>user@andrearanica:~$</a> ${ inputCommand ? inputCommand.value : '' }<br>`
}