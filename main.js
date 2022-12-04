const titleint = document.getElementById('title')
const authorint = document.getElementById('author')
const pagesint = document.getElementById('pages')
const submit = document.getElementById('submit')
const bookcontainer = document.querySelector('.book-container')
checkbox = document.querySelector('.checkbox')
let myLibrary = []
let counter = 0

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
    if(checkbox.value == true){
        book.status = 'Read'
    }else{
        book.status = "Not Read"
    }
    if(book.title.length === 0 || book.author.length === 0 || book.pages.length === 0){
        console.log("null")
    }else{
        if(counter % 5 == 0){
            const row = document.createElement('div')
            row.classList.add('div-row')
            bookcontainer.appendChild(row)
        }else{
            
        }
    }
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
    console.log(counter)
})

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