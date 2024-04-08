import './style.css'
// import { BreakingbadApp } from './src/breakingbad/breakingbad-app';
import { UsersApp } from './src/users/users-app';

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">

    </div>
  </div>
`;

const element = document.querySelector('.card');
// BreakingbadApp(element); 
UsersApp(element);
