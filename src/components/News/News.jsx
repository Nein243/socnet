import React from 'react';
import Post from './Post/Post.jsx';
import NewsStyle from './News.module.css';

const News = function (props) {



    let postItems = props.state.posts.map(post => <Post id={post.id} name={post.name} text={post.text} likes={post.likes} comments={post.comments} />)

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
        props.addPost(text)
    }

    let newPostElement = React.createRef();

    return (
        <section className={NewsStyle.news}>
            <h1>My Posts</h1>
            <div className={NewsStyle.addPost}>
                <textarea ref={newPostElement}></textarea>
                <button className={NewsStyle.postButton} onClick={addPost}>Add Post</button>
            </div>
            {postItems}


        </section>

    )
}


export default News;