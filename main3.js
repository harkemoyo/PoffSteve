import { PIE, f } from "./a.js";
import someFunc, { CAKE } from './b.js';
//g will be someFunc

const APP = (function () {
  document.addEventListener('DOMContentLoaded', () => {
    console.log(PIE);
    f();
    someFunc();
    console.log(CAKE);
  });

  //rest of code just like in main-2
})();