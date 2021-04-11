
  class PostRow extends React.Component {
    constructor(props) {
      super(props);
      
      };
    
 
    toEdit()
    {
      ReactDOM.unmountComponentAtNode(document.querySelector('#postpage'));
      ReactDOM.render(<EditPage 
      id={this.props.id} 
      postinfo={this.props.post_info}
      curuser={this.props.curuser}
      timestamp={this.props.time_stamp}/>, document.querySelector('#posting_view'));
    }

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
      const profilelink = "/profile/"+this.props.user_id

     
        return (
          <div class={this.props.user_id == this.props.curuser ? "container border border-black rounded post_style" : "container border border-black rounded post_style_noedit"} >
            <a href={profilelink} name="posterr" class="h4 colorstyle">{this.props.user_name}</a> 
              <input type="hidden" value={this.props.id}></input>
              <a href={thegallery} class="postinfo"name="post_info">{info}</a>
              <input type="hidden" value={this.props.user_id}></input>
              <p name="timestamp" class="font-weight-light timestamp">{changedTime}</p>
              {createdDate != changedTime ? <p name="timestamp" class="font-weight-light timestamp">Last Updated: {createdDate}</p>: null}
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
          post_info={this.props.data["data"][i].post_info}
          user_id={this.props.data["data"][i].user_id}
          user_name={this.props.data["data"][i].user_name}
          time_stamp={this.props.data["data"][i].timestamp}
          changedtime={this.props.data["data"][i].changedtime}
          curuser={curuser}/>
      );

    }
    return (
      <div>
        {datalength != 0 ?
        <table className="table table-hover table-sm">
        <tbody> {rows} </tbody>
        </table>: <div>{h1nopost}</div> }
        
        {this.props.data["num_pages"] != 0 ?
        
        <ul class="pagination container justify-content-center">
            <li class="page-item">
              {paginationid != 1 ? <span id={paginationid} class="page-link" onClick={this.changePage}>Previous</span>: null}
              </li>
                {button}              
              <li class="page-item">
              {paginationid != this.props.data["num_pages"] ? <span id={paginationid} class="page-link" onClick={this.changePage}>Next</span>: null}
            </li>
        </ul>: null}
      </div>
    );
  }
}
export default PostTable 