import Group from './assets/Group 2.png';
import './assets/style.scss';
const title = document.createElement('h3');
title.textContent = 'Webpack made easy!';

const page = document.querySelector('body');
page.append(title);

const img = new Image();
img.src = Group;
page.appendChild(img);