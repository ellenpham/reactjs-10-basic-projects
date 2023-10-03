import Book from './Book';
import { useState } from 'react';
import { booksData } from './Books';

function BookList() {

    const [books, setBooks] = useState(booksData)

    const removeBook = (id) => {
        const newBooks = books.filter( (book) => book.id !== id);
        setBooks(newBooks);
    }

    function getBook(id){
        const book = books.find( (book) => book.id === id);
        console.log(book);
    };

    return (
        <div>  
            <h1>Amazon best sellers</h1>
            <section className='booklist'>
                {books.map( (book, index) => {
                    // we can use book={book} to pass the whole book object
                    // but in Book.js, destructuring syntax will be "const {img, title, author} = props.book"
                    return <Book {...book} key={book.id} number={index} getBook={getBook} removeBook={removeBook}/>;
                })}
            </section>
        </div>

    );
}

export default BookList;