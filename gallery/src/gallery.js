
class PostTableGallery extends React.Component 
{
constructor(props) 
{
  super(props);
}
render() 
{
  const profilelinkrank1 = "/profile/"+this.props.data["data"][0].id
  const profilelinkrank2 = "/profile/"+this.props.data["data"][1].id
  const profilelinkrank3 = "/profile/"+this.props.data["data"][2].id


  
  if(this.props.data["whatkind"] == "gallery"){
    console.log("in what kind explore")

    document.querySelector('#navgallery').style.color = "salmon";

  }
  
 
  
  let h1nopost = ""
  
  const rows = [];
  const button = [];
  const curuser = this.props.data["user"]
  console.log("whatkind", this.props.data["whatkind"])


 
  const datalength = this.props.data["data"].length

  return (
    <div>
      <div class="d-flex justify-content-center">
        <h1 class="gallerymostvoted">TOP 3 MOST VOTED GALLERY</h1>
      </div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
  <div class="carousel-inner">
    
    <div class="flex-column carousel-item active">
    <div>
      <a class="aeexplore" href={profilelinkrank1}>
        <div class="coversall">
          <div class="d-flex justify-content-center mt-5">
            <div class="postexplore2 d-flex justify-content-between">
              {this.props.title != "" ? <p class="titlep d-flex justify-content-end"id="aescape" class="font-weight-light timestamp">Title: <h6>{this.props.data["data"][0].gallerytitle}</h6></p>:null}
              <p></p>
              <p id="aescape" class="titlep d-flex justify-content-end"name="timestamp" class="font-weight-light timestamp">#1</p>
            </div>
          </div>
          
          <div class="d-flex justify-content-center">
              <div class="postexploregallery"style={{backgroundColor: this.props.data["data"][0].gallerybgcolor, backgroundImage: this.props.data["data"][0].gallerybgimage}}></div>
          </div>

        <div class="d-flex justify-content-center">
          <div class="postexplore2 d-flex justify-content-between">
            <p class="d-flex justify-content-start"href={profilelinkrank1} id="aescape" class="h4 colorstyle">{this.props.data["data"][0].username}</p> 
            <p></p>
            <p id="aescape" class="titlep d-flex justify-content-end"name="timestamp" class="font-weight-light timestamp">{this.props.data["data"][0].views} {this.props.data["data"][0].views > 1 ? "views":"view"}</p>
          </div>
        </div>
          
          <div class="d-flex justify-content-center">
            <div class="postexplore2">
                  <p id="aescape" class="font-weight-light timestamp mb-5">Last Updated: {this.props.data["data"][0].modifiedtime}</p>

            </div>           
          </div>  
         
       
        
          </div>
          </a>
        </div>
    </div>
    <div class="flex-column carousel-item">
    <div>
      <a class="aeexplore" href={profilelinkrank2}>
        <div class="coversall">
          <div class="d-flex justify-content-center mt-5">
            <div class="postexplore2 d-flex justify-content-between">
              {this.props.title != "" ? <p class="titlep d-flex justify-content-end"id="aescape" class="font-weight-light timestamp">Title: <h6>{this.props.data["data"][1].gallerytitle}</h6></p>:null}
              <p></p>
              <p id="aescape" class="titlep d-flex justify-content-end"name="timestamp" class="font-weight-light timestamp">#2</p>
            </div>
          </div>
          
          <div class="d-flex justify-content-center">
              <div class="postexploregallery"style={{backgroundColor: this.props.data["data"][1].gallerybgcolor, backgroundImage: this.props.data["data"][1].gallerybgimage}}></div>
          </div>

        <div class="d-flex justify-content-center">
          <div class="postexplore2 d-flex justify-content-between">
            <p class="d-flex justify-content-start"href={profilelinkrank1} id="aescape" class="h4 colorstyle">{this.props.data["data"][1].username}</p> 
            <p></p>
            <p id="aescape" class="titlep d-flex justify-content-end"name="timestamp" class="font-weight-light timestamp">{this.props.data["data"][1].views} {this.props.data["data"][0].views > 1 ? "views":"view"}</p>
          </div>
        </div>
          
          <div class="d-flex justify-content-center">
            <div class="postexplore2">
                  <p id="aescape" class="font-weight-light timestamp mb-5">Last Updated: {this.props.data["data"][1].modifiedtime}</p>

            </div>           
          </div>  
         
       
        
          </div>
          </a>
        </div>
    </div>
  
    <div class="flex-column carousel-item">
    <div>
      <a class="aeexplore" href={profilelinkrank3}>
        <div class="coversall">
          <div class="d-flex justify-content-center mt-5">
            <div class="postexplore2 d-flex justify-content-between">
              {this.props.title != "" ? <p class="titlep d-flex justify-content-end"id="aescape" class="font-weight-light timestamp">Title: <h6>{this.props.data["data"][2].gallerytitle}</h6></p>:null}
              <p></p>
              <p id="aescape" class="titlep d-flex justify-content-end"name="timestamp" class="font-weight-light timestamp">#3</p>
            </div>
          </div>
          
          <div class="d-flex justify-content-center">
              <div class="postexploregallery"style={{backgroundColor: this.props.data["data"][2].gallerybgcolor, backgroundImage: this.props.data["data"][2].gallerybgimage}}></div>
          </div>

        <div class="d-flex justify-content-center">
          <div class="postexplore2 d-flex justify-content-between">
            <p class="d-flex justify-content-start"href={profilelinkrank1} id="aescape" class="h4 colorstyle">{this.props.data["data"][2].username}</p> 
            <p></p>
            <p id="aescape" class="titlep d-flex justify-content-end"name="timestamp" class="font-weight-light timestamp">{this.props.data["data"][2].views} {this.props.data["data"][2].views > 1 ? "views":"view"}</p>
          </div>
        </div>
          
          <div class="d-flex justify-content-center">
            <div class="postexplore2">
                  <p id="aescape" class="font-weight-light timestamp mb-5">Last Updated: {this.props.data["data"][0].modifiedtime}</p>

            </div>           
          </div>  
         
       
        
          </div>
          </a>
        </div>
    </div>
  
    
  
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon carouselol" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    
   </div>
   
  );
}
}
document.addEventListener('DOMContentLoaded', function() {
    
    const pagination = 1
    const whatkind = window.location.pathname.split('/')[1]

    const clicked = 0
    console.log("atleast")
    fetch(`/currentgalleryapi/${whatkind}/${clicked}/${pagination}`)

    .then(response => response.json())
    
    .then(data => {
      
      ReactDOM.render(<PostTableGallery data={data}/>, document.querySelector('#topgallery'));

      console.log(data)
      
    
    });
  });


  