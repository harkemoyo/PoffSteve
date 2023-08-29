import fetch from 'node-fetch';

/**
 * Possible resources are posts, comments, albums, photos, todos, and users
 * @param {string} endpoint which resource to get from http://jsonplaceholder.typicode.com/
 * @returns {function} partially applied function
 */
let jsonPlaceholder = async (endpoint) => {
  let url = `http://jsonplaceholder.typicode.com/${endpoint}`;
  let resp = await fetch(url);
  let data = await resp.json();
  return (num) => {
    return data
      .slice(0, num)
      .map((item) => {
        let label = item.name || item.title;
        return `<p>${endpoint} :: ${label}</p>`;
      })
      .join('\n');
  };
};

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function init() {
  let posts = await jsonPlaceholder('posts');
  let users = await jsonPlaceholder('users');

  sleep(3000).then(() => {
    //after 3 seconds this runs
    log(posts(2));
    log(users(4));
  });
}
init();