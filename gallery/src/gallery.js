import PostTable from './main.js'

document.addEventListener('DOMContentLoaded', function() {
    
    const pagination = 1
    const whatkind = window.location.pathname.split('/')[1]

    const clicked = 0
    console.log("atleast")
    fetch(`/currentgalleryapi/${whatkind}/${clicked}/${pagination}`)

    .then(response => response.json())
    
    .then(data => {
      
      ReactDOM.render(<PostTable data={data}/>, document.querySelector('#topgallery'));

      console.log(data)
      
    
    });
  });


  