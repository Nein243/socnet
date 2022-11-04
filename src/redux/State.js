import { rerenderEntireTree } from "../render";

let state = {
    newsPage:{
        posts: [
            { id: 1, name: 'Denis Denisov', text: 'That is a cool platform', likes: 2, comments: 0 },
            { id: 1, name: 'Petro Petrov', text: 'Why do nobody text me?', likes: 48, comments: 9 },
            { id: 1, name: 'Ivan Ivanov', text: 'Glat to meet you here!', likes: 8, comments: 1 },
            { id: 1, name: 'Valerii Holubiev', text: 'Hey there! It\'s my first post!', likes: 12, comments: 3 }
        ],
        newPostText: 'Type new post...'
    },
    
    messagesPage: {
        dialogs: [
            { id: 1, name: 'Valerii' },
            { id: 2, name: 'Serhii' },
            { id: 3, name: 'Alexander' }
        ],
    
        messages: [
            { id: 1, text: 'Hello!' },
            { id: 2, text: 'That\'s nice!!!' },
            { id: 3, text: 'How r u doin?' }
        ]
    }
    
}

export let addPost = (text) => {
    let newPost = {
        id: 5,
        text: text,
        likesCount: 0
    }
    state.newsPage.posts.push(newPost);
    rerenderEntireTree(state);
}
export let updateNewPost = (newText) => {
    state.newsPage.newPostText = newText;
    rerenderEntireTree();
}

export default state