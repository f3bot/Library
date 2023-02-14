const addbtn = document.querySelector('.add-btn')
const form = document.querySelector('.form')
const titleform = document.querySelector('.title')
const authorform = document.querySelector('.author')
const pagesform = document.querySelector('.pages')
const statusform = document.querySelector('.statusbtn')
const submitbtn = document.querySelector('.submit')
const booksDiv = document.querySelector('.books')

let counter = 0
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
    const parentDiv = document.createElement('div')
    const titlespan = document.createElement('span')
    const authorspan = document.createElement('span')
    const pagesspan = document.createElement('span')
    const readBtn = document.createElement('button')
    titlespan.innerHTML = myLibrary[counter].title
    authorspan.innerHTML = myLibrary[counter].author
    pagesspan.innerHTML = myLibrary[counter].pages
    readBtn.innerHTML = myLibrary[counter].status
    parentDiv.appendChild(titlespan).appendChild(authorspan).appendChild(pagesspan).appendChild(readBtn)
    booksDiv.appendChild(parentDiv)
    counter++
}

submitbtn.addEventListener('click', (e) =>{
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