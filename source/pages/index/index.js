import 'normalize.css';
import './index.scss';


import createMenu from '../../components/menu/menu';
let menu = createMenu(['Главная','Обо мне','Блог'], 'menu');
document.body.appendChild(menu);

console.log('in index.js');

console.log($);