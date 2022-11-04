import React from 'react';
import Post from './Post/Post.jsx';
import NewsStyle from './News.module.css';

const News = function (props) {



    let postItems = props.newsPage.posts.map(post => <Post id={post.id} name={post.name} text={post.text} likes={post.likes} comments={post.comments} />)

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        newPostElement.current.value = ''
    }
    let postOnChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPost(newText);
    }

    let newPostElement = React.createRef();

    return (
        <section className={NewsStyle.news}>
            <h1>My Posts</h1>
            <div className={NewsStyle.addPost}>
                <textarea ref={newPostElement} onChange={postOnChange} value={props.newsPage.newPostText}></textarea>
                <button className={NewsStyle.postButton} onClick={addPost}>Add Post</button>
            </div>
            {postItems}


        </section>

    )
}


export default News;