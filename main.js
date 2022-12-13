const titleint = document.getElementById('title')
const authorint = document.getElementById('author')
const pagesint = document.getElementById('pages')
const submit = document.getElementById('submit')
const bookcontainer = document.querySelector('.book-container')
const form_container = document.querySelector('.form-container')
const closebutton = document.querySelector('.closebtn')

function Book(title,author,pages)
{
    this.title = title
    this.author = author
    this.pages = pages
}

const addBook = () =>{
    const book = new Book
    book.title = titleint.value
    book.author = authorint.value
    book.pages = pagesint.value
    let div = document.createElement('div')
    div.classList.add('book-div')
    appendSpan('span', 'tspan', book.title, div)
    appendSpan('span', 'aspan', book.author, div)
    appendSpan('span', 'pspan',  book.pages + " pages", div)
    let sspan = document.createElement('button')
    sspan.textContent = 'Not Read'
    sspan.style.background = 'red'
    sspan.classList.add('sspan')
    div.appendChild(sspan)
    let rbutton = document.createElement('button')
    rbutton.textContent = 'Remove'
    rbutton.classList.add('rbutton')
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
    resetInput()})

const readEvent = (element) =>{
    element.addEventListener('click', () =>{
        if(element.textContent === 'Read'){
            element.textContent = 'Not Read'
            element.style.background = 'red'
        }else if(element.textContent === 'Not Read'){
            element.textContent = 'Read'
            element.style.background = 'lightgreen'
        }
    })
}

const removeEvent = (e,target) =>{
    e.addEventListener('click', () =>{
        target.style.scale = '0.01'
        target.style.transition = '0.8s'
        setTimeout(() => {
            target.remove();
          }, 750)
    })
}

const openModal = () =>{
    form_container.classList.add('active')
}
const closeModal = () =>{
    form_container.classList.remove('active')
}

