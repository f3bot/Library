const addbtn = document.querySelector('.add-btn')
const form = document.querySelector('.form')
const titleform = document.querySelector('.title')
const authorform = document.querySelector('.author')
const pagesform = document.querySelector('.pages')
const statusform = document.querySelector('.statusbtn')
const submitbtn = document.querySelector('.submit')
const booksDiv = document.querySelector('.books')
const addBookBtn = document.querySelector('.add-btn')

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
    const deleteBtn = document.createElement('button')
    titlespan.innerHTML = myLibrary[counter].title
    authorspan.innerHTML = myLibrary[counter].author
    pagesspan.innerHTML = myLibrary[counter].pages
    readBtn.innerHTML = myLibrary[counter].status
    deleteBtn.innerHTML = 'Delete Book'
    listenerToRead(readBtn) 
    listenerToDelete(deleteBtn, parentDiv)
    parentDiv.appendChild(titlespan).appendChild(authorspan).appendChild(pagesspan).appendChild(readBtn).appendChild(deleteBtn)
    booksDiv.appendChild(parentDiv)
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
    
})