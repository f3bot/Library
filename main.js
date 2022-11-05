const titleint = document.querySelector('.title')
const authorint = document.querySelector('.author')
const pagesint = document.querySelector('.pages')
const submit = document.querySelector('.submit')
const bookDiv = document.querySelector('.bookdiv')

let myLibrary = []

const book = {
    title: '',
    author: '',
    pages: ''
}

const resetInput = () =>{
    titleint.value = ''
    authorint.value = ''
    pagesint.value = ''
}

const addBookToLibrary = () =>{
    if(titleint.value.length != 0 && authorint.value.length !=0 && pagesint.value.length != 0 && Number.isInteger(pagesint.value)){
        book.title = titleint.value
        book.author = authorint.value
        book.pages = pagesint.value
        console.log(book.title)
        console.log(book.author)
        console.log(book.pages)
        myLibrary.push(book.title, book.author, book.pages)
        resetInput()
        console.table(myLibrary)
        for(let i = 0; i <= myLibrary.length; i++){
            if(myLibrary.includes(book.title,book.author,book.pages)){
                console.log("book alerady present")
            }else{
                
            }
        }
    }else{

    }
}
submit.addEventListener('click', (e) =>{
    e.preventDefault()
    addBookToLibrary()
})