const titleint = document.getElementById('title')
const authorint = document.getElementById('author')
const pagesint = document.getElementById('pages')
const submit = document.getElementById('submit')
const bookcontainer = document.querySelector('.book-container')
const loginPopUp = document.querySelector('.popup')
const checkbox = document.querySelector('.checkbox')
let myLibrary = []
let counter = 0

const openForm = () =>{
    loginPopUp.style.display = 'block'
}

const closeForm = () =>{
    loginPopUp.style.display = 'none'
}



function Book(title,author,pages,status)
{
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

const addBook = () =>{
    const book = new Book
    book.title = titleint.value
    book.author = authorint.value
    book.pages = pagesint.value
    let div = document.createElement('div')
    div.classList.add('book-div')
    appendSpan('tspan', 'span', book.title, div)
    appendSpan('aspan', 'span', book.author, div)
    appendSpan('pspan', 'span',  book.pages + "pages", div)
    let sspan = document.createElement('button')
    sspan.textContent = 'Not Read'
    sspan.style.background = 'red'
    div.appendChild(sspan)
    let rbutton = document.createElement('button')
    rbutton.textContent = 'Remove'
    div.appendChild(rbutton)
    bookcontainer.appendChild(div)
    readEvent(sspan)
    removeEvent(rbutton,div)
}

const appendSpan = (element, elementclass, content, parent) =>{
    element = document.createElement(element)
    element.classList.add(elementclass)
    element.textContent = content
    parent.appendChild(element)
}

const resetInput = () =>{
    titleint.value = ''
    pagesint.value = ''
    authorint.value = ''
}

submit.addEventListener('click', (e) =>{
    e.preventDefault()
    addBook()
    resetInput()
    counter++
})

const readEvent = (element) =>{
    element.addEventListener('click', () =>{
        if(element.textContent === 'Read'){
            element.textContent = 'Not Read'
            element.style.background = 'red'
        }else if(element.textContent === 'Not Read'){
            element.textContent = 'Read'
            element.style.background = 'green'
        }
    })
}

const removeEvent = (e,target) =>{
    e.addEventListener('click', () =>{
        target.remove();
    })
}

