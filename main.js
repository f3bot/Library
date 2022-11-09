const titleint = document.getElementById('title')
const authorint = document.getElementById('author')
const pagesint = document.getElementById('pages')
const submit = document.getElementById('submit')
const bookcontainer = document.getElementsByClassName('book-container')
let checkbox = document.querySelector('.checkbox')
let myLibrary = []

const book = {
    title: '',
    author: '',
    pages: ''
}

let uniqueLibrary = []

const bookToArray = () =>{
    book.title = titleint.value
    book.author = authorint.value
    book.pages = pagesint.value
    myLibrary.push(book.title, book.author, book.pages)
    resetInput()
    uniqueLibrary = [...new Set(myLibrary)];
    console.log(uniqueLibrary)
    console.log(uniqueLibrary.length)
    for(let i = 0; i < uniqueLibrary.length; i++){
        let div = document.createElement('div')
        let titlespan = document.createElement('span')
        titlespan.innerHTML = uniqueLibrary[i]
        div.appendChild(titlespan)
        let authorspan = document.createElement('span')
        authorspan.innerHTML = uniqueLibrary[i+1]
        div.appendChild(authorspan)
        let pagesspan = document.createElement('span')
        pagesspan.innerHTML = uniqueLibrary[i+2]
        div.appendChild(pagesspan)
        let img = document.createElement('img')
        if(checkbox.checked == true){
            console.log("true")
            img.src = "yes.png"
        }else{
            console.log("false")
            img.src = "no.png"
        }
        div.appendChild(img)
        let deletebutton = document.createElement('button')
        deletebutton.innerHTML = 'Delete Book'
        deletebutton.addEventListener('click', () =>{
            div.remove()
        })
        div.appendChild(deletebutton)
        console.log(div)
    }
    bookcontainer.appendChild(div)
}

const resetInput = () =>{
    titleint.value = ''
    authorint.value = ''
    pagesint.value = ''
}


submit.addEventListener('click', (e) =>{
    e.preventDefault()
    bookToArray()
})