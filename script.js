let inputCommand = document.getElementById('input-command')
let inputForm = document.getElementById('input-form')
let response = ''
let previous = document.getElementById('previous')
let header = document.getElementById('header')

const help = `
GNU bash, version 5.1.4(1)-release (x86_64-pc-linux-gnu)<br>
&nbsp;&nbsp;resumee&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Info about me and what I do<br>
&nbsp;&nbsp;projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The projects I worked on<br>
&nbsp;&nbsp;clear&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clear the screen<br>
`

inputForm.addEventListener('submit', e => {
    e.preventDefault()
    command = inputCommand.value
    switch (command) {
        case 'help':
            writeHelp()
            break
        default:
            writeError(command)
            break
    }
    writeInputLine()
    inputCommand.value = ''
})

const writeMain = async () => {
    let title = `I'm Andrea, a Software Developer & Computer Science student`
    writeTitle(title)
    let work = `I work as a Software Developer @ DDX Software Solutions`
    let university = `I'm studying Computer Science @ University of Milano-Bicocca`
    await write(work)
    await write(university)
}

const writeTitle = text => {
    previous.innerHTML += `<h2 style='color: orange; text-align: center; font-size: 200%;'>${text}</h2>`
}

const writeSubtitle = text => {
    previous.innerHTML += `<h2 style='color: orange; text-align: center;'>${text}</h2>`
}

const writeHelp = async () => {
    // TODO add constants instead of strings
    await write('GNU bash, version 5.1.4(1)-release (x86_64-pc-linux-gnu)')
}

const writeError = async (wrongCommand) => {
    errorMessage = `bash: ${wrongCommand}: command not found`
    await write(errorMessage)
}

const write = async (message) => {
    i = 0
    clearInterval()
    setInterval(() => {
        if (i < message.length) {
            previous.innerHTML += message.charAt(i)
            i++
        } else {
            clearInterval()
        } 
    }, 10)
    previous.innerHTML += '<br>'
}

const writeInputLine = () => {
    previous.innerHTML += `<a class='dollar'>user@andrearanica:~$</a> ${ inputCommand.value }<br></br>`
}

writeMain()