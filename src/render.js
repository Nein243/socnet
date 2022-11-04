import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import { addPost, updateNewPost } from './redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<App state={state} addPost={addPost} updateNewPost={updateNewPost} />
		</React.StrictMode>);

};