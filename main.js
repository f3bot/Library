const addbtn = document.querySelector('.add-btn')
const form = document.querySelector('.form')
const titleform = document.querySelector('.title')
const authorform = document.querySelector('.author')
const pagesform = document.querySelector('.pages')
const statusform = document.querySelector('.statusbtn')
const submitbtn = document.querySelector('.submit')
const booksDiv = document.querySelector('.books')
const addBookBtn = document.querySelector('.add-btn')
const overlay = document.querySelector('#overlay')
const closeBtn = document.querySelector('.close')

let counter = 0
let i = 0
let myLibrary = []

function Book(title, author, pages ,status)
{
    this.title = title
    this.author = author 
    this.pages = pages
    this.status = status
}

statusform.addEventListener('click', () =>{
    if(statusform.value == 'Read')
    {
        statusform.value = 'Not Read'
    }
    else
    {
        statusform.value = 'Read'
    }
})

const addBook = () =>{
    myLibrary.push(new Book(titleform.value, authorform.value, pagesform.value, statusform.value))
    console.log(myLibrary)
    console.log("%%%%%%%")
    console.log(counter)
    console.log(myLibrary.length)
}

const clearFields = ( ) =>{
    titleform.value = ''
    authorform.value = ''
    pagesform.value = ''
    statusform.value = 'Not Read'
}

const displayBook = () =>{
    //Tak wiem, można wpierdolić to gówno w array i jebać forloopa, ale za chuja mi sie nie chce
    const parentDiv = document.createElement('div')
    const titlespan = document.createElement('span')
    const authorspan = document.createElement('span')
    const pagesspan = document.createElement('span')
    const readBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')
    titlespan.innerHTML = "''" + myLibrary[counter].title + "''"
    authorspan.innerHTML = myLibrary[counter].author
    pagesspan.innerHTML = myLibrary[counter].pages
    readBtn.innerHTML = myLibrary[counter].status
    deleteBtn.innerHTML = 'Delete Book'
    listenerToRead(readBtn) 
    listenerToDelete(deleteBtn, parentDiv)
    parentDiv.appendChild(titlespan)
    parentDiv.appendChild(authorspan)
    parentDiv.appendChild(pagesspan)
    parentDiv.appendChild(readBtn)
    parentDiv.appendChild(deleteBtn)
    booksDiv.appendChild(parentDiv)
    parentDiv.classList.add('book-container')
    titlespan.classList.add('titlespan')
    counter++
}

const listenerToRead = (button) =>{
    button.addEventListener('click', () =>{
        if(button.innerHTML == 'Read')
        {
            button.innerHTML = 'Not Read'
            button.style.background = 'red'
        }
        else
        {
            button.innerHTML = 'Read'
            button.style.background = 'green'
        }
    })
} 

const listenerToDelete = (button, div) =>{
    button.addEventListener('click', () =>{
        div.remove()
    })
}

submitbtn.addEventListener('click', (e) =>{
    e.preventDefault()
    if(titleform.value == '' || authorform.value == '' || pagesform.value == '')
    {
        console.log("throw")
    }
    else
    {
        addBook()
        displayBook()
        clearFields()
    }
})

addBookBtn.addEventListener('click', () =>{
    if(i % 2 == 0)
    {
        form.classList.add('form-active')
        overlay.classList.add('overlay-active')
    }
    else
    {
        form.classList.remove('form-active')
        overlay.classList.remove('overlay-active')
    }
    i++
})

closeBtn.addEventListener('click', () =>{
    form.classList.remove('form-active')
    overlay.classList.remove('overlay-active')
    i++
})