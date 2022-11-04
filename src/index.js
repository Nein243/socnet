import './index.css';
import state from './redux/State';
import { rerenderEntireTree } from './render';
import reportWebVitals from './reportWebVitals';

rerenderEntireTree(state);

reportWebVitals();
