import React from 'react';
import NewsStyle from './News.module.css';

const PostItem = (props) => {
    return(
        <div className={NewsStyle.postItem}>
            
        </div>
    )
}

const News = function () {
    return (
        <section className={NewsStyle.news}>
            <h1>My Posts</h1>
            <div className={NewsStyle.addPost}>
                <textarea></textarea>
                <button className={NewsStyle.postButton}>Add Post</button>
            </div>


        </section>

    )
}


export default News;