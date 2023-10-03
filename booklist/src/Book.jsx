function Book(props){
    const {img, title, author, getBook, id, number, removeBook} = props;
    
    return (
        <div>
            <article className='book'>
                <img src={img} alt={title} />
                <h2>{title}</h2>
                <h4>{author}</h4>
                <button onClick={() => getBook(id)}>❤ Save to wishlist</button>
                <button onClick={() => removeBook(id)}>⊘ Not interested</button>
                <span className="number">#{number + 1}</span>
            </article>
        </div>
        
    );
};

export default Book;