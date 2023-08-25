// IIFE - Immediately Invoked Function Expressions
// Uses namespaces but also lets you control access

const APP = (function () {
    document.addEventListener('DOMContentLoaded', init);
  
    let today = new Date();
    const KEY = 'jhj3245gj23h42j34';
  
    function init() {
      console.log('loaded');
      //function to start things off
      console.log(today.toLocaleDateString());
      //add some event listeners
      addListeners();
      //make a call to an API with a callback
      let url = `https://jsonplaceholder.typicode.com/posts?key=${KEY}`;
      getData(url, afterFetch);
    }
  
    function addListeners() {
      console.log('adding listeners to the page');
    }
  
    function getData(url, cb) {
      //do fetch call
      fetch(url)
        .then((res) => res.json())
        .then((content) => {
          //call function to add content
          //call the callback
          if (cb) {
            cb();
          }
        })
        .catch((err) => console.error);
    }
  
    function afterFetch() {
      console.log('data fetch completed');
    }
  
    return {
      getData,
      today,
      KEY,
    };
  })();
  
  // APP.getData()
  // APP.KEY
  //APP.afterFetch(); - ERROR. Private