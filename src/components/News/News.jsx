import React from 'react';
import Post from './Post/Post.jsx';
import NewsStyle from './News.module.css';

const News = function (props) {

    

    let postItems = props.appState.posts.map(post => <Post id={post.id} name={post.name} text={post.text} likes={post.likes} comments={post.comments} />)


    return (
        <section className={NewsStyle.news}>
            <h1>My Posts</h1>
            <div className={NewsStyle.addPost}>
                <textarea></textarea>
                <button className={NewsStyle.postButton}>Add Post</button>
            </div>
            {postItems }


        </section>

    )
}


export default News;