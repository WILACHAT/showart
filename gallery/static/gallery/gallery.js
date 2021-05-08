import PostTable from './main.js';

document.addEventListener('DOMContentLoaded', function () {

  var pagination = 1;
  var whatkind = window.location.pathname.split('/')[1];

  var clicked = 0;
  console.log("atleast");
  fetch('/currentgalleryapi/' + whatkind + '/' + clicked + '/' + pagination).then(function (response) {
    return response.json();
  }).then(function (data) {

    ReactDOM.render(React.createElement(PostTable, { data: data }), document.querySelector('#topgallery'));

    console.log(data);
  });
});