import PostPage from './main.js';

document.addEventListener('DOMContentLoaded', function () {
  var pagination = 1;
  var whatkind = window.location.pathname.split('/')[1];

  var clicked = 0;
  console.log("atleast");
  fetch('/currentgalleryapi/' + whatkind + '/' + clicked + '/' + pagination).then(function (response) {
    return response.json();
  }).then(function (data) {

    ReactDOM.render(React.createElement(PostPage, { data: data }), document.querySelector('#postpage'));

    console.log(data);
  });
});