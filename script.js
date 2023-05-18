let input = document.getElementById('input')
let response = ''
let previous = document.getElementById('previous')

document.getElementById('input-form').addEventListener('submit', (e) => {
    e.preventDefault()
    response = ''
    switch (input.value) {
        case 'help': 
            response = `
            GNU bash, version 5.1.4(1)-release (x86_64-pc-linux-gnu)<br>
            school     See all my experiences in learning<br>
            work       See all my working experiences<br>
            skills     See all my technical skills<br>
            projects   See some of my projects<br>
            resumee    See a complete resumee of my curriculum
            `
            break;
        case 'summary':
            response = `
            Hi everyone! I am Andrea, a Junior Software Developer!<br>
            I'm an 18-year-old boy interested in information technology and the way it can help us in daily life, both in small things and in big innovations: thanks to my knowledge I'd like to create something useful for others.<br>
            I'm currently studying at ITIS Paleocapa and I'm in my final year. Next year I intend to enroll at the University of Milano-Bicocca in the computer science faculty, in order to continue to deepen this discipline especially in the software engineering sector. I would like to gain some work experience while studying to acquire skills in software development.
            `
            break;
        case 'school':
            response = `
            <b class='title'>ITIS Paleocapa</b><br>
            I am attending the 5th year of school at ITIS P.Paleocapa in Bergamo.<br>
            I am studying computer science, and I learned a lot both in development and networks.<br><br>
            <b class='title'>Milano-Bicocca university (bachellor's degree)</b>
            Coming soon
            `
            break;
        case 'skills':
            response = `
            <b class='title'>Software enginnering</b><br>
            I am able to design an application with the UML deployment and entity-relationship diagrams.<br>
            I am also learning new design patterns: now I am studying MVC.<br>
            <b class='title'>Frontend development</b><br>
            I can design and implement modern frontend applications using HTML, CSS and JavaScript.<br>
            I am also able to use React and Bootstrap.<br>
            <b class='title'>Backend development</b><br>
            Backend development is my favourite part of a web application: I can use both PHP (with MVC pattern) and JavaScript (with Node and Express) to make a complex backend for an application.<br>
            I am also able to design and implement relational DataBases.<br>
            <b class='title'>Software development</b><br>
            I can develop simple desktop applications using C# with .NET.<br>
            I am also able to write simple Python scripts.
            ` 
            break;
        case 'cls':
            previous.innerHTML = ''
            break;
        default: 
            response = 'Command not found, digit <i>help</i>'
            break;
    }
    if (input.value !== 'cls') { previous.innerHTML += `<a class='dollar'>user@andrearanica:~$</a> ${ input.value }<br>${ response }<br>` }
    input.value = ''
})