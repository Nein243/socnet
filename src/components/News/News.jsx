import React from 'react';
import Post from '../Post/Post';
import NewsStyle from './News.module.css';

const News = function () {

    let posts = [
        { id: 1, name: 'Denis Denisov', text: 'That is a cool platform', likes: 2, comments: 0 },
        { id: 1, name: 'Petro Petrov', text: 'Why do nobody text me?', likes: 48, comments: 9 },
        { id: 1, name: 'Ivan Ivanov', text: 'Glat to meet you here!', likes: 8, comments: 1 },
        { id: 1, name: 'Valerii Holubiev', text: 'Hey there! It\'s my first post!', likes: 12, comments: 3 },
    ]

    let postItems = posts.map(post => <Post id={post.id} name={post.name} text={post.text} likes={post.likes} comments={post.comments} />)


    return (
        <section className={NewsStyle.news}>
            <h1>My Posts</h1>
            <div className={NewsStyle.addPost}>
                <textarea></textarea>
                <button className={NewsStyle.postButton}>Add Post</button>
            </div>
            {postItems}


        </section>

    )
}


export default News;