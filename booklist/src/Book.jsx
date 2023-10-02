function Book(props){
    const {img, title, author, getBook, id, number} = props;
    
    return (
        <div>
            <article className='book'>
                <img src={img} alt={title} />
                <h2>{title}</h2>
                <h4>{author}</h4>
                <button onClick={() => getBook(id)}>❤ Save to wishlist</button>
                <button onClick={() => getBook(id)}>⊘ Not interested</button>
                <span className="number">#{number + 1}</span>
            </article>
        </div>
        
    );
};

export default Book;