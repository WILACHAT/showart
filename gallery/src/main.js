
  class PostRow extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props.id)

      console.log(this.props.username)
      console.log(this.props.gallerytitle)
      console.log(this.props.gallerybgimage)
      console.log(this.props.gallerybgcolor)
      console.log(this.props.modifiedtime)
      console.log("views", this.props.views)
      };
 
  

    render() {
     
      const createdDate = this.props.time_stamp
      const changedTime = this.props.changedtime
      const thegallery = "/thegallery/"+this.props.id

      let checknone = ""
      if (this.props.curuser == null)
      {
        checknone = "None"
      }
     
      const info = this.props.post_info
      const profilelink = "/profile/"+this.props.id

     
        return (
          <div>
        <a class="aeexplore" href={profilelink}>
          <div class="coversall">
            <div class="d-flex justify-content-center mt-5">
              <div class="postexplore2">
                {this.props.title != "" ? <p class="titlep d-flex justify-content-end"id="aescape" class="font-weight-light timestamp">Title: <h6>{this.props.gallerytitle}</h6></p>:null}
              </div>
            </div>
            
            <div class="d-flex justify-content-center">
                <div class="postexplore"style={{backgroundColor: this.props.gallerybgcolor, backgroundImage: this.props.gallerybgimage}}></div>
            </div>

          <div class="d-flex justify-content-center">
            <div class="postexplore2 d-flex justify-content-between">
              <p class="d-flex justify-content-start"href={profilelink} id="aescape" class="h4 colorstyle">{this.props.username}</p> 
              <p></p>
              <p id="aescape" class="titlep d-flex justify-content-end"name="timestamp" class="font-weight-light timestamp">{this.props.views} {this.props.views > 1 ? "views":"view"}</p>
            </div>
          </div>
            
            <div class="d-flex justify-content-center">
              <div class="postexplore2">
                    <p id="aescape" class="font-weight-light timestamp mb-5">Last Updated: {this.props.modifiedtime}</p>

              </div>           
            </div>  
           
         
           
            <div class="d-flex justify-content-center">
                <input type="hidden" value={this.props.id}></input>
            </div>    
            </div>
            </a>
          </div>
        )
    }
  }

class PostTable extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.changePage = this.changePage.bind(this);
  }
  changePage(e)
  {
    let pagination = e.target.id
    const innerhtmlpage = e.target.innerHTML
    let whatkind = this.props.data["whatkind"]
    console.log("this is whatkind", whatkind)
  
    if (innerhtmlpage == "Previous")
    {
      pagination = parseInt(pagination)
      pagination = pagination - 1
    }
    else if(innerhtmlpage == "Next")
    {
      pagination = parseInt(pagination)
      pagination = pagination + 1
    }
    else{
      pagination = parseInt(e.target.innerHTML)
    }
    let checkfornull = window.location.pathname.split('/')[2]
    let clicked = parseInt(window.location.pathname.split('/')[2])
    if (checkfornull == null){
        clicked = 0
    }


    fetch(`/currentgalleryapi/${whatkind}/${clicked}/${pagination}`)
    .then(response => response.json())
    .then(data => {

    ReactDOM.render(<PostTable data={data}/>, document.querySelector('#postpage'));
    });

    window.scrollTo(0, 0)
  }
  render() 
  {
    
    let h1nopost = ""
    
    const rows = [];
    const button = [];
    const curuser = this.props.data["user"]
    console.log("whatkind", this.props.data["whatkind"])

    const paginationid = this.props.data["paginationid"]

    for (let j = 0; j < this.props.data["num_pages"]; j++)
    {
      let thej = j + 1
      button.push
      (
        <li class={paginationid == thej ? "page-item active":"page-item"} onClick={this.changePage}><a class="page-link">{thej}</a></li>
      )

    }
    const datalength = this.props.data["data"].length
    for (let i = 0; i < this.props.data["data"].length; i++)
    {
      rows.push(
        <PostRow
          id={this.props.data["data"][i].id}
          username={this.props.data["data"][i].username}
          gallerytitle={this.props.data["data"][i].gallerytitle}
          gallerybgcolor={this.props.data["data"][i].gallerybgcolor}
          gallerybgimage={this.props.data["data"][i].gallerybgimage}
          modifiedtime={this.props.data["data"][i].modifiedtime}
          views={this.props.data["data"][i].views}
          

          curuser={curuser}/>
      );

    }
    return (
      <div>
      <div class="flex-column">
        {rows}
      </div>
        
        {this.props.data["whatkind"] == "explore" ? 
        <div>
        {this.props.data["num_pages"] != 0 ?
        <ul class="pagination container justify-content-center ">
            <li class="page-item">
              {paginationid != 1 ? <span id={paginationid} class="page-link" onClick={this.changePage}>Previous</span>: null}
              </li>
                {button}              
              <li class="page-item">
              {paginationid != this.props.data["num_pages"] ? <span id={paginationid} class="page-link" onClick={this.changePage}>Next</span>: null}
            </li>
        </ul>: null}
        </div>: null}
      </div>
    );
  }
}
export default PostTable 