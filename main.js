const titleint = document.getElementById('title')
const authorint = document.getElementById('author')
const pagesint = document.getElementById('pages')
const submit = document.getElementById('submit')
const bookcontainer = document.querySelector('.book-container')
const loginPopUp = document.querySelector('.popup')
let checkbox = document.querySelector('.checkbox')
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
    myLibrary.push(book)
    let div = document.createElement('div')
    div.classList.add('book-div')
    let tspan = document.createElement('span')
    tspan.classList.add('Booktitle')
    tspan.textContent = book.title;
    div.appendChild(tspan)
    let aspan = document.createElement('span')
    aspan.textContent = book.author
    div.appendChild(aspan)
    let pspan = document.createElement('span')
    pspan.textContent = book.pages + " Pages"
    div.appendChild(pspan)
    let sspan = document.createElement('button')
    sspan.textContent = 'Not Read'
    sspan.style.background = 'red'
    div.appendChild(sspan)
    let rbutton = document.createElement('button')
    rbutton.textContent = 'Remove'
    div.appendChild(rbutton)
    bookcontainer.appendChild(div)
    console.table(myLibrary)
    readEvent(sspan)
    removeEvent(rbutton,div)
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

/*
        myLibrary.push(book)
        let div = document.createElement('div')
        div.classList.add('book-div')
        let tspan = document.createElement('span')
        tspan.textContent = book.title;
        div.appendChild(tspan)
        let aspan = document.createElement('span')
        aspan.textContent = book.author
        div.appendChild(aspan)
        let pspan = document.createElement('span')
        pspan.textContent = book.pages
        div.appendChild(pspan)
        let sspan = document.createElement('span')
        sspan.textContent = book.status
        div.appendChild(sspan)
        bookcontainer.appendChild(div)
        console.table(myLibrary)
*/