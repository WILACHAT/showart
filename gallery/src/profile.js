
import  { NextImg, ShowTemplateTwo } from './realcreate.js';


function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  class DisplayGallery extends React.Component{
    constructor(props){
        super(props);
        this.toBack = this.toBack.bind(this);
   
    
        let data = this.props.data;
        
      
        data = data.replaceAll("'", '"');
        data = JSON.parse(data);
        const newerdiv = document.createElement("div");
        newerdiv.id = "gallerycoverid"
        document.querySelector('#gallerypageone').appendChild(newerdiv);
        
        ReactDOM.render(<NextImg gallerybgcolor={this.props.gallerybgcolor}
            gallerybgimage={this.props.gallerybgimage} gallerytitle={this.props.gallerytitle} 
            type="gallerycoverprofile" />,document.querySelector('#gallerycoverid'));

        console.log("dataeverydata", data['everydata'])
        let i = 0
        for (i = 0; i < data['everydata'].length; i++)
        {
            let count = i
            const newDiv = document.createElement("div");
            newDiv.id = "templatesidtwo" + count
            console.log("this is newDiv", newDiv);
            document.querySelector('#gallerypageone').appendChild(newDiv);
            
            ReactDOM.render(<ShowTemplateTwo alldata={data['everydata'][i]} type="profile"/>,document.querySelector('#templatesidtwo' + count));
        }
    }
    toBack()
    {
            document.querySelector('#profileedit').hidden = false;
            document.querySelector('#followpart').hidden = false;
            document.querySelector('#gallerypage').hidden = true;
            document.querySelector('#gallerypageone').hidden = true;
            document.querySelector('#navibarid').hidden = false;

    }
   

    render(){
        let i = 0;
      return (
        <div>
            <div class="backgrounddumbprofile">
                <div class="d-flex justify-content-center">
                    <button class="dumbbutton btn btn-outline-dark btn-lg" onClick={this.toBack}>return</button>
                </div>  
            </div>
        </div>
      )
    }
}
  class ProfileEdit extends React.Component {
    constructor(props) {
        super(props);
        this.sendEditPost = this.sendEditPost.bind(this);
        this.showEditPost = this.showEditPost.bind(this);
        this.showImg = this.showImg.bind(this);
        this.cancel = this.cancel.bind(this);
        this.toNext = this.toNext.bind(this);

        let contactgmail = this.props.data["contactgmail"];
        let openseaurl = this.props.data["openseaurl"];
        let profiledes = this.props.data["profiledes"];
        let username = this.props.data["username"];
        let profilepic = this.props.data["profilepic"];
        let numvotes = this.props.data["howmanyvotes"];
        let wallet = this.props.data["wallet"];


        console.log("username", username)

        let clicked = parseInt(window.location.pathname.split('/')[2])
        console.log("just to check the profile pic", profilepic)
        if (contactgmail == null)
        {
            contactgmail = ""
        }
        if (openseaurl == null)
        {
            openseaurl = ""
        }
        if (profiledes == null)
        {
            profiledes = ""
        }
        if (profilepic == null)
        {
            profilepic = "/static/profile_pic/brown.jpeg"
        }
        const edit_button = this.props.data["user"] == clicked ? 
        <button type="button" name="edit_button" onClick={this.showEditPost} className="btn btn-outline-dark btn-sm">Edit</button> 
        : null;

       
        console.log("contact gmail", contactgmail)
        console.log("opensea url", openseaurl)
        console.log("profile des", profiledes)

  this.state = {
    username: username,
    numvotes: numvotes,
    profiledes: profiledes,
    openseaurl: openseaurl,
    contactgmail: contactgmail,
    profilepic: profilepic,
    edit:  
    
    <div>
        <div onClick={this.showImg} class="d-flex justify-content-center">
            <img class="imgnoedit" src={profilepic}></img>
        </div>
        
        <div class="mb-2">
                <div class="d-flex justify-content-center ml-6 mt-3 mb-3">
                    <h2 class="wow mr-2">{username} </h2>{edit_button}
                </div> 
                <div class="d-flex justify-content-center mb-3">
                    <h3 class="walletcss">{wallet}</h3> 
                </div> 
                <div class="d-flex justify-content-center mb-3">
                    <h3 class="contactgmailcss ">{contactgmail}</h3> 
                </div> 
                <div class="d-flex justify-content-center mb-3">
                    <a class="openseaurlcss" href={openseaurl} target="_blank">{openseaurl}</a>
                </div> 
                <div class="d-flex justify-content-center">
                    <h3 class="profiledescss">{profiledes}</h3>
                </div>
              
        </div>
    </div>
   
    //in the first set state it will only show the img cannot edit an only view image
};

    }
   
    showEditPost(e) {
        console.log("in showEditPost", this.state.profiledes);
        this.setState({
            username: this.state.username,
            profiledes: this.state.profiledes,
            openseaurl: this.state.openseaurl,
            contactgmail: this.state.contactgmail,
            profilepic: this.state.profilepic,
            edit: <EditPost profiledes={this.state.profiledes} openseaurl={this.state.openseaurl} contactgmail={this.state.contactgmail} profilepic={this.state.profilepic}
            savePostHandler={this.sendEditPost} cancel={this.cancel}/>
           
        });
    
    }
    
    showImg()
    {
        document.getElementById("overlay").style.display = "block";

        document.querySelector('#uknowimg').src = this.state.profilepic
        document.querySelector('#overlay').onclick = function() { 
            document.getElementById("overlay").style.display = "none";
        }
    }
  
    sendEditPost(profiledes,contactgmail,openseaurl, profilepic){
        let whatkind = "profile"
        let clicked = parseInt(window.location.pathname.split('/')[2])
        let pagination = 1
        console.log("profilepic wahaha", profilepic)

        const csrftoken = getCookie('csrftoken');
        fetch(`/currentgalleryapi/${whatkind}/${clicked}/${pagination}`, {
            method: 'POST',
            headers: {'X-CSRFToken': csrftoken
            },
            body: JSON.stringify({
                profiledes: profiledes,
                contactgmail: contactgmail,
                openseaurl: openseaurl
            })
        })
        .then(response => response.json())
        .then(result =>{
            console.log("result", result)
            if(result.error) {
                console.log("Error");
                this.setState({
                    profiledes: this.state.profiledes,
                    contactgmail: this.state.contactgmail,
                    openseaurl: this.state.openseaurl,
                    profilepic: this.state.profilepic,
                    edit: <div class="mb-4" ><div class="d-flex justify-content-center ml-6 mt-3 mb-3"><h2 class="wow">{username} {edit_button}</h2></div> 
                    <div class="d-flex justify-content-center mb-3"><h3 class="contactgmailcss ">{contactgmail}</h3> </div> <div class="d-flex justify-content-center mb-3"><a class="openseaurlcss" href={openseaurl}>{openseaurl}</a></div> 
                   <div class="d-flex justify-content-center"><h3 class="profiledescss">{profiledes}</h3></div></div>,
                    error:  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                Sorry. An error has occured.
                            </div>,
                    like_button: this.state.like_button
                });
            }
            else {
                let username = this.state.username
                let edit_button = <button type="button" name="edit_button" onClick={this.showEditPost} className="loll btn btn-outline-dark btn-sm">edit</button> 
                this.setState({
                    username: username,
                    profiledes: profiledes,
                    contactgmail: contactgmail,
                    openseaurl: openseaurl,
                    profilepic: profilepic,
                    edit: 
                    <div>
                        <div onClick={this.showImg} class="d-flex justify-content-center">
                            <img class="imgnoedit" src={profilepic}></img>
                        </div>
                        
                        <div class="mb-2">
                            <div class="d-flex justify-content-center ml-6 mt-3 mb-3">
                                <h2 class="wow">{username} {edit_button}</h2>
                            </div>
                            <div class="d-flex justify-content-center mb-3">
                                <h3 class="walletcss">{this.props.data["wallet"]}</h3> 
                            </div> 
                            
                            <div class="d-flex justify-content-center mb-3">
                                <h3 class="contactgmailcss ">{contactgmail}</h3> 
                            </div> 
                            
                            <div class="d-flex justify-content-center mb-3">
                                <a class="openseaurlcss" href={openseaurl}>{openseaurl}</a>
                            </div> 
                            
                            <div class="d-flex justify-content-center">
                            <h3 class="profiledescss">{profiledes}</h3>
                            </div>
                        </div>
                    </div>,
                    error: null,
                    like_button: this.state.like_button
                });
            }
        });

    }
    toNext(e, count){
            console.log("this is count", count)
            //unhide the profileedit to make the gallery in the same page as profile info
           
            document.querySelector('#profileedit').hidden = true;           
            document.querySelector('#gallerypageone').hidden = false;
            document.querySelector('#followpart').hidden = true;
            document.querySelector('#gallerypage').hidden = false;
            console.log(e)
            document.querySelector('#navibarid').hidden = true;
            //document.getElementById("gallerycoverid").style.marginTop = "0px";



            let clicked = parseInt(window.location.pathname.split('/')[2])


            const getcooked = getCookie('csrftoken')
            fetch(`/realcreateapi/${clicked}`, {
                method: 'PUT',
                headers:{'X-CSRFToken': getcooked},
                body: JSON.stringify({
                    edit:"gallery"
                    })
            })
            .then(response => response.json())
            
            
         .then(data => {

            console.log("check for data in the thing", data['galleryinfo'])
            if (data['galleryinfo'] == null)
            {
                ReactDOM.render(<DisplayGallery data="blank"/>);            
            }
            
            else
            {
        
                ReactDOM.render(<DisplayGallery data={data['galleryinfo']} gallerytitle={data['gallerytitle']}
                gallerybgimage={data['gallerybgimage']} gallerybgcolor={data['gallerybgcolor']}/>, document.querySelector('#gallerypage'));
            } 

    

        });
    }

    
    cancel(profilepic){
       let username = this.state.username
       let edit_button = <button type="button" name="edit_button" onClick={this.showEditPost} className="loll btn btn-outline-dark btn-sm">edit</button> 
       let clicked = parseInt(window.location.pathname.split('/')[2])
       let user = this.props.data["user"]
      
       console.log("canceling lts go", this.state.username)
        this.setState({
            username: this.state.username,
            profiledes: this.state.profiledes,
            contactgmail: this.state.contactgmail,
            openseaurl: this.state.openseaurl,
            profilepic: profilepic,
            edit: 
            <div>
                <div onClick={this.showImg}  class="d-flex justify-content-center">
                    <img class="imgnoedit" src={profilepic}></img>
                </div>
                <div class="mb-2">
                    <div class="d-flex justify-content-center ml-6 mt-3 mb-3">
                        <h2 class="wow">{this.state.username} {edit_button}</h2>
                    </div>

                    <div class="d-flex justify-content-center mb-3">
                        <h3 class="walletcss">{this.props.data["wallet"]}</h3> 
                    </div> 
                    
                    <div class="d-flex justify-content-center mb-3">
                        <h3 class="contactgmailcss ">{this.state.contactgmail}</h3> 
                    </div> 
                    
                    <div class="d-flex justify-content-center mb-3">
                        <a class="openseaurlcss" href={this.state.openseaurl}>{this.state.openseaurl}</a>
                    </div> 
                    
                    <div class="d-flex justify-content-center">
                       <h3 class="profiledescss">{this.state.profiledes}</h3>
                    </div>
                
                </div>
            </div>,

            choosefile:<input id="choosefile" class="choosefile" onChange={this.chooseFile} type="file"></input>,

            error: null,
            like_button: this.state.like_button
           
        });
    }
   
    render() {
        let count = 0
        let clicked = parseInt(window.location.pathname.split('/')[2])
        console.log("dataaaaaa userrrr", this.props.data["user"])
        console.log("dataaaaaa", this.props.data)

        let checker = ""
        if (this.props.data["datainfo"] == null)
        {
            checker = "k"
        }
        else{
            checker = this.props.data["datainfo"][17]
        }
        if (checker == null)
        {
            checker = "k"
        }


        console.log("checker", checker)

        let user = this.props.data["user"]

      return (
        <div>
            {this.state.edit}

            <div class="d-flex justify-content-center">
                {checker != "k"  ? 
                <button class="btn btn-outline-dark btn-sm mt-2 mb-2" onClick={(e) => this.toNext(e, count++)}>Gallery</button>:<p class="font-weight-light">No Gallery</p>}
            </div>
        </div>
        );
    }
  }
  class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.editPost = this.editPost.bind(this);
        this.editCancel = this.editCancel.bind(this);
        this.chooseFile = this.chooseFile.bind(this);
        this.checkTxtArea = this.checkTxtArea.bind(this);

        this.state = {profiledes: this.props.profiledes,
            contactgmail: this.props.contactgmail,
            openseaurl: this.props.openseaurl,
            profilepic: this.props.profilepic
        };
      

    }

    componentDidMount() {
        // Code reference from https://reactjs.org/docs/refs-and-the-dom.html and https://gist.github.com/hogenishi/409ecbd07f7b86b7da205ad61210a275
        // Set the focus on the text input after the component was mounted.
        this.textInput.current.focus();

        // Save the current text into temp.
        const temp = this.textInput.current.value;

        // Set the input to empty so that the cursor goes to the front. 
        this.textInput.current.value = '';

        // Input the post text into the text input so that the cursor moves to the end. 
        this.textInput.current.value = temp;

    }

    editPost() {
       this.props.savePostHandler(this.state.profiledes, this.state.contactgmail, this.state.openseaurl, this.state.profilepic);
   }
   editCancel() {
    
    this.props.cancel(this.state.profilepic);
    console.log("cancelweird;y", this.state.profilepic)
}

  checkTxtArea(e) {
    console.log(e)
    if (e.target.id == "profiledes")
    {
        if (e.target.value.length > 0) {
            console.log(e.target.value)
            this.setState({profiledes: e.target.value});
        }
        else {
            this.setState({profiledes: ""});
        }
    }
    if (e.target.id == "openseaurl")
    {
        if (e.target.value.length > 0) {
            console.log(e.target.value)
            this.setState({openseaurl: e.target.value});
        }
        else {
            this.setState({openseaurl: ""});
        }
    }
    if (e.target.id == "contactgmail")
    {
        if (e.target.value.length > 0) {
            console.log(e.target.value)
            this.setState({contactgmail: e.target.value});
        }
        else {
            this.setState({contactgmail: ""});
        }
    }
    }
    chooseFile(e)
    {
        const getcooked = getCookie('csrftoken')
        let whatkind = "profile"
        let clicked = parseInt(window.location.pathname.split('/')[2])
        let pagination = 1
        
     
        let fileInput = document.querySelector('#choosefile').files[0]
        console.log("fileinput", fileInput)
    
        let formData = new FormData();
        formData.append("media", fileInput);

        fetch(`/currentgalleryapi/${whatkind}/${clicked}/${pagination}`, {
            method: 'POST',
            headers:{'X-CSRFToken': getcooked},
            body:formData
        })
        .then(response => response.json())
    
        .then(data => {
            this.setState({profilepic: data["profilepic"]});


        });
    }


    render(){
        let clicked = parseInt(window.location.pathname.split('/')[2])
        return (
            <div>
                <div class="d-flex justify-content-center mt-1 mb-1">
                    <label htmlFor="edit_post_txt">Click to change profile picture: </label>
                </div>
                <div class="d-flex justify-content-center">
                    <div id="coverschoosefile">
                        {<input id="choosefile" class="choosefile" onChange={this.chooseFile} type="file"></input>}
                    </div>
                </div>
                <div className="form-floating">
                    <div class="d-flex justify-content-center mt-1 mb-1">
                    <label htmlFor="edit_post_txt">Contact Info: </label>
                    </div>
                    
                        <textarea id="contactgmail" class="textedit" ref={this.textInput} name="edit_post_txt" style={{height: 100+'px'}} onChange={this.checkTxtArea} value={this.state.contactgmail}></textarea>
                    <div class="d-flex justify-content-center mt-2 mb-2">
                    <label htmlFor="edit_post_txt">Your Opensea Url: </label>
                    </div>
                        <textarea id="openseaurl"  class="textedit" ref={this.textInput} name="edit_post_txt" style={{height: 100+'px'}} onChange={this.checkTxtArea} value={this.state.openseaurl}></textarea>
                    <div class="d-flex justify-content-center mt-2 mb-2">
                    <label htmlFor="edit_post_txt">Description: </label>
                    </div> 
                        <textarea id="profiledes"  class="textedit" ref={this.textInput} name="edit_post_txt" style={{height: 100+'px'}} onChange={this.checkTxtArea} value={this.state.profiledes}></textarea>
                    
                    <div class="d-flex justify-content-center mt-2 mb-2">
                        <button type="button" name="edit_post_button" className="loll btn btn-outline-success btn-sm mr-2" onClick={this.editPost}>Save</button>
                        <button type="button"className="loll btn btn-outline-danger btn-sm" name="cancel_button" onClick={this.editCancel}>Cancel</button>
                    </div>
                
                </div>
            </div>
        );
    }
}

  class FollowTable extends React.Component {
    constructor(props) {
        super(props);
        const followname = this.props.data["following"] > 0 ? "Unvote" : "Vote";
        this.followPost = this.followPost.bind(this);
        console.log("followname",
         followname)

        this.state = {
            followname: followname,
            current_howmanyfollow: this.props.data["howmanyfollow"]

          };
      }
      followPost(e)
      {
        
        let whatkind = "profile"
        let updated_csl = 0

        console.log(e)
        let clicked = parseInt(window.location.pathname.split('/')[2])
        let current = this.props.data["user"]
        const pagination = 1
        const getcooked = getCookie('csrftoken')
        
        if (this.state.followname == "Vote"){
            updated_csl = this.state.current_howmanyfollow + 1
            this.setState({current_howmanyfollow: updated_csl, followname: "Unvote"})         
            fetch(`/currentgalleryapi/${whatkind}/${clicked}/${pagination}`, {
            method: 'PUT',
            headers:{'X-CSRFToken': getcooked},
                body: JSON.stringify({
                follow: "true",
                follower: clicked,
                following: current
                })
          })
        }
        if (this.state.followname == "Unvote"){
            updated_csl = this.state.current_howmanyfollow - 1
            this.setState({current_howmanyfollow: updated_csl, followname: "Vote"})
          console.log("whatever man")
          fetch(`/currentgalleryapi/${whatkind}/${clicked}/${pagination}`, {
            method: 'PUT',
            headers:{'X-CSRFToken': getcooked},
                body: JSON.stringify({
                follow: "false",
                follower: clicked,
                following: current
                })
          })
        }
      }
      
    render() {
    
        document.querySelector('#navprofile').style.color = "salmon";
          
        
        let userid_clicked = parseInt(window.location.pathname.split('/')[2])
        
        let curuser = this.props.data["user"]
        curuser = parseInt(curuser)
        let checknone = "wow"
        let follow_button = null;
        
        if (this.props.data["user"] == null)
        {
            console.log("in first if")
            checknone = "None"
        }
        if (checknone != "None" && userid_clicked != this.props.data["user"])
        {
            console.log("in second if")
            follow_button =  <div class="d-flex justify-content-center mb-3"><button type="button" name="edit_button" onClick={this.followPost} className="loll btn btn-outline-dark btn-sm">{this.state.followname}</button></div>;
        }
      
      return (
        <div>
             <div class="d-flex justify-content-center">
                    <div class="postexplore2 d-flex justify-content-between">
                        <p class="ptitle ml-2 d-flex justify-content-end"name="timestamp" class="font-weight-light timestamp">{this.state.current_howmanyfollow} {this.state.current_howmanyfollow > 1 ? "votes":"vote"}</p>
                        <p></p>
                        <p class="titlep mr-2 d-flex justify-content-end"name="timestamp" class="font-weight-light timestamp">{this.props.data["view"]} {this.props.data["view"] > 1 ? "views":"view"}</p>
                    </div>
                </div>
            {follow_button}
        </div>
  
        );
    }
    }

document.addEventListener('DOMContentLoaded', function() {
    const pagination = 1
    console.log("atleast")
    const whatkind = "profile"
    Grade(document.querySelectorAll('.gradient-wrap'))
    let clicked = parseInt(window.location.pathname.split('/')[2])
    document.querySelector('#gallerypage').hidden = true;


    fetch(`/currentgalleryapi/${whatkind}/${clicked}/${pagination}`)

    .then(response => response.json())
    
    .then(data => {
      ReactDOM.render(<ProfileEdit data={data}/>, document.querySelector('#profileedit'));
      ReactDOM.render(<FollowTable data={data}/>, document.querySelector('#followpart'));

      
      console.log(data)
      
    
    });
  });

