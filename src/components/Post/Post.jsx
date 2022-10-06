import React from 'react';
import PostStyle from './Post.module.css';

const Post = function (props) {
    return (
        <div className={PostStyle.post}>
            <div className={PostStyle.postAvatar}>
                <img src="https://secure.gravatar.com/avatar/6f2b5cd69cdc5a925be2f496efd5ffba?s=96&d=mm&r=g" alt="Avatar" />
            </div>
            <div className={PostStyle.postContent}>
                <div className={PostStyle.postName}>{props.name}</div>
                <div className={PostStyle.postText}>{props.text}</div>
            </div>
            <div className={PostStyle.postFeedback}>
                <div className={PostStyle.postLikes}>{props.likes} likes</div>
                <div className={PostStyle.postComments}>{props.comments} comments</div>
            </div>
        </div>

    )
}


export default Post;