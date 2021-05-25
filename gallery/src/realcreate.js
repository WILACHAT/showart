
/*randomwallet address to use
using
0xce9b6da25e5b9578305f9c593c670736754ed4c5
0x923af7b3a0a65c514c09a68d4ef331cec93d451a
0x00bd53913a82f36e5796ed7d30f1b2a15cd31c20
using
0x50dd57f50a17d57304e7a4f262da30beb31c2e87
0x3f16d081113c613743ce1d7da6858dc4d26352c3
urs
0xc1a1974fb3c4032188b80ab08ff5aeecd31ca57c
*/

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

  class AnotherDivNewClass extends React.Component{
      constructor(props){
        super(props);
        this.hiddenOverlay = this.hiddenOverlay.bind(this);
        this.imgvdo = this.imgvdo.bind(this);
        
        this.state = {
        whatisshown: ""
       
        }
      }
      hiddenOverlay()
      {
        if (document.querySelector('#vdovdovdo') != null)
        {
            document.querySelector('#vdovdovdo').muted = true
        }

       
        document.querySelector('#supernewclass').hidden = true
      }
      imgvdo()
      {
        if(this.props.checkifurl != "image")
        {
            if (document.querySelector('#vdovdovdo').muted == true)
            {
                document.querySelector('#vdovdovdo').muted = false
            }
            else{
                document.querySelector('#vdovdovdo').muted = true
            }
        }
      }
      
      render(){
        return (
            <div id="overlayrc" style={{backgroundImage: this.props.bgimage, backgroundColor: this.props.bgcolor}}>
            <div class="d-flex justify-content-end mr-2">
                <button id="overlaybutton" onClick={this.hiddenOverlay} class="fluke btn btn-outline-light btn-sm mt-2 mb-2">Go Back</button>
            </div>
            <div>
            <div id="forimagevdo" onClick={this.imgvdo}class="mt-5 d-flex justify-content-center">
            {this.props.checkifurl == "image" ? <img class="testingtestimgg" src={this.props.src}></img>: 
            <video id="vdovdovdo" src={this.props.src} muted autoplay="autoplay" loop="true" class="nftvdoo"><source src={this.props.src} type = "video/mp4"></source></video>}     
            </div> 
            {this.props.title != "" || this.props.des != "" ?
             <div class="d-flex justify-content-center">
                <div class="showtitledes mt-4 mb-2 bd-highlight"style={{backgroundColor: this.props.hex }}>
                    {this.props.title != "" ? <p class="ml-2 mr-2">Title:<br></br><h6 class="yuptitle">{this.props.title}</h6></p>: null}
                    {this.props.des != "" ? <p class="ml-2 mr-2">Description:<br></br><h6 class="yuptitle">{this.props.des}</h6></p>: null}
                </div>
            </div>:null}
         </div>
        </div>
          )
        }

  }
  class DivNewClass extends React.Component{
    constructor(props){
        super(props);
        this.t2ImageOne = this.t2ImageOne.bind(this);
        this.deleteImgDiv = this.deleteImgDiv.bind(this);
        this.goIntoImage = this.goIntoImage.bind(this);
        this.checkDesArea = this.checkDesArea.bind(this);
        this.checkTitleArea = this.checkTitleArea.bind(this);
        

        console.log("this.src", this.props.src)
       let src = ""
       let des = ""
       let title = ""
       let bgcolor = "salmon"
       let thisisfromprofile = "false"
       if (this.props.src != undefined)
       {
            src = this.props.src
            des = this.props.des
            title = this.props.title
            bgcolor = null
            thisisfromprofile = "true"
       }
        this.state =
        {
            url:src,
            bgcolor:bgcolor,
            title:title,
            des:des,
            fromprofile:thisisfromprofile,
            hexy:"",
            showtitledes:<div class="d-flex justify-content-center mt-3"><button onClick={this.showTitleDes} class="btn btn-outline-success btn-sm"></button></div>

        }
    }
    checkDesArea(e)
    {
        if (e.target.value.length > 0) {
            this.setState({des: e.target.value});
        }
        else {
            this.setState({des: ""});
        }
    }
    checkTitleArea(e)
    {  if (e.target.value.length > 0) {
        this.setState({title: e.target.value});
    }
    else {
        this.setState({title: ""});
    }

    }
    
    t2ImageOne()
    {
        console.log("going inside like a pro")
        this.setState({
            url: document.querySelector('#saveurl').value,
            bgcolor:null

  
         })
    }
    componentDidMount() {
        if (this.props.bgimage != undefined)
        {

        let bgimagesplit1 = this.props.bgimage.split('url(')
        let bgimagesplit2 = bgimagesplit1[1].split(')')
        let bgimagesplitcheck = bgimagesplit2[0].split('/')

        

        if (bgimagesplitcheck[3] != "")
       {
           const fac = new FastAverageColor();
           fac.getColorAsync(bgimagesplit2[0])
               .then(color => {
                function componentToHex(c) {
                    var hex = c.toString(16);
                    return hex.length == 1 ? "0" + hex : hex;
                  }
                 color = color.rgb
                 let rgb = color.replace(/[^\d,]/g, '').split(',');
                 let firstcolor = rgb[0] - 30
                 let secondcolor = rgb[1] - 30
                 let thirdcolor = rgb[2] - 30
                 if (firstcolor <= 30)
                 {
                     firstcolor = parseInt(rgb[0]) + 80 
  
                 }
                 
                 if(secondcolor <= 50)
                 {
  
                    secondcolor = parseInt(rgb[1]) + 90
                 }
               
                 if(thirdcolor <= 50)
                 {
  
                    thirdcolor = parseInt(rgb[2]) + 90
                 }
              

                 let hex =  "#" + componentToHex(firstcolor) + componentToHex(secondcolor) + componentToHex(thirdcolor);
                 this.setState({
                  hexy:hex
                 })
            // container.style.backgroundColor = color.rgba;
            // container.style.color = color.isDark ? '#fff' : '#000';
              })
             }
            }
              if (this.props.src != undefined)
              {
               function componentToHex(c) {
                   var hex = c.toString(16);
                   return hex.length == 1 ? "0" + hex : hex;
                 }
             
               let rgb = this.props.bgcolor.replace(/[^\d,]/g, '').split(',');
               let firstcolor = rgb[0] - 30
               let secondcolor = rgb[1] - 30
               let thirdcolor = rgb[2] - 30
               if (firstcolor <= 30)
               {
                   firstcolor = parseInt(rgb[0]) + 80 

               }
               
               if(secondcolor <= 50)
               {

                  secondcolor = parseInt(rgb[1]) + 90
               }
             
               if(thirdcolor <= 50)
               {

                  thirdcolor = parseInt(rgb[2]) + 90
               }
            
               let hexyy =  "#" + componentToHex(firstcolor) + componentToHex(secondcolor) + componentToHex(thirdcolor);
               this.setState({
                   hexy:hexyy
               })
               
           }
    
    }

    goIntoImage(checkifurl, hexy)
    {
        console.log("this.state.url", this.state.url)
        console.log("this is checkifurl and i hope it works",checkifurl)
        document.querySelector('#supernewclass').hidden = false        

        ReactDOM.render(<AnotherDivNewClass src={this.state.url} title={this.state.title} des={this.state.des}
        bgcolor={this.props.bgcolor} bgimage={this.props.bgimage} checkifurl={checkifurl} hex={hexy}/>, document.querySelector('#supernewclass'));

    }
    deleteImgDiv(e)
    {
        e.target.parentElement.parentElement.remove()
        console.log(document.querySelector(`#${this.props.name}`).childNodes.length)
        if (document.querySelector(`#${this.props.name}`).childNodes.length == 1)
        {
            document.querySelector(`#${this.props.name}`).childNodes[0].className = "oneimage"
        }
    }
    render(){
    
    let checkifurl = "video"
    if (this.state.url.charAt(8) == "l")
    {
        checkifurl = "image"
    }
    if (this.state.url.charAt(8) == "s")
    {
        if (this.state.url.indexOf( '.jpg' ) == 85)
        {
            checkifurl = "image"
        }
    }

    console.log("color state", this.state.bgcolor)
    return (
        <div id="wilachatww" name="imgdiv" value="false" className="threeimage" >
            <div id="oneinamillion" onClick={(e) => this.props.type != "profile" ? this.t2ImageOne(e): this.goIntoImage(checkifurl, this.state.hexy)} class="divborder"style={{backgroundColor: this.state.bgcolor}}>
                {checkifurl == "image" ? <img id="oneintwo"class="testingtestimgg" src={this.state.url}></img>: 
                 <video src={this.state.url} muted autoplay="autoplay" loop="true" class="nftvdoo"><source src={this.state.url} type = "video/mp4"></source></video>}                  
            </div>
           {this.props.type != "profile" ? <div class="d-flex justify-content-center mt-3">
                <input class="form-control col-4"placeholder="Title of NFT" type="text" onChange={this.checkTitleArea} value={this.state.title}></input>
            </div>: null}
            {this.props.type != "profile" ? <div class="d-flex justify-content-center mt-2">
                <textarea class="form-control col-10"placeholder="Description of NFT" rows="3" onChange={this.checkDesArea} value={this.state.des}></textarea>
            </div>: null}
            {this.props.type != "profile" ? <div class="d-flex justify-content-center mt-2">
                <button class="btn btn-outline-dark btn-sm mt-2 mb-2" onClick={this.deleteImgDiv}>X</button>
            </div>: null}
        </div>
      )
    }
}

  class ShowTemplateTwo extends React.Component{
    constructor(props){
        super(props);
        this.addImage = this.addImage.bind(this);
        console.log("mother mother fak er", this.props.adddata)
      
        let array = []
        let w = 0
        let newlist = []
        let imageinfo_src = ""
        let imageinfo_title = ""
        let imageinfo_des = ""
        let bgcolor = ""
        let bgimage = ""
        
        if (this.props.alldata != undefined)
        {
            console.log("ALL DATA IS FAKING UNDEFINED")
            bgcolor = this.props.alldata['bgcolor']
            bgimage = this.props.alldata['bgimage']
            let first = "url(/static/profile_pic/"
            let last = ")"
            bgimage = first + bgimage + last
            console.log("TYPE DESU", this.props.type)
            
            for(w = 0; w < this.props.alldata['imageinfo'].length; w++)
            {

                let checker = 0
                if (this.props.type == "edit")
                {
                    for(let o = 0; o < this.props.adddata.length; o++)
                    {
                        
                        if (this.props.adddata[o][1] != null)
                        {
                            if(this.props.adddata[o][1] == this.props.alldata['imageinfo'][w]['src'])
                            {
                                imageinfo_src = this.props.alldata['imageinfo'][w]['src']
                                checker = 1;
                            }
                            else
                            {
                                imageinfo_src = "/static/profile_pic/brown.jpeg"
                            }
                        }
                        else
                        {
                    
                            if(this.props.adddata[o][0] == this.props.alldata['imageinfo'][w]['src'])
                            {
                                imageinfo_src = this.props.alldata['imageinfo'][w]['src']
                                checker = 1;
                            }
                            else
                            {
                                if (checker != 1)
                                {
                                    imageinfo_src = "/static/profile_pic/brown.jpeg"

                                }
                            }
                        
                        }
                    }
                }
                else
                {
                    imageinfo_src = this.props.alldata['imageinfo'][w]['src']
                }
                imageinfo_title = this.props.alldata['imageinfo'][w]['title']
                imageinfo_des = this.props.alldata['imageinfo'][w]['des']
               
                const newdivnewclass = <DivNewClass src={imageinfo_src} 
                title={imageinfo_title} des={imageinfo_des} bgcolor={bgcolor} 
                bgimage={bgimage} type={this.props.type}/>
                newlist.push(newdivnewclass);
              
            }
        }

 
        this.state =
        {
            imgdiv: "",
            list:newlist,
            bgcolor:bgcolor,
            bgimage:bgimage
            
        }
      

    }
   
    addImage = (realid, e, classname) => {  
        console.log("is this the right thing?")
        console.log("check e", e)
        if (e.target.parentElement.parentElement.childNodes[1].childNodes != "")
        {
            if (e.target.parentElement.parentElement.childNodes[1].childNodes[0] != undefined)
            {   let i = 0
                
                if (e.target.parentElement.parentElement.childNodes[1].childNodes[0].className != undefined)
                {
                    for (i = 0; i < e.target.parentElement.parentElement.childNodes[1].childNodes.length; i++)
                    {
                        e.target.parentElement.parentElement.childNodes[1].childNodes[i].className = classname
                    }
                }
            }
        }

        console.log("waker", e.target.parentElement.parentElement.childNodes[1].childNodes.length)
        if (e.target.parentElement.parentElement.childNodes[1].childNodes.length < 3)
        {

        let length = this.state.list.length + 1
        this.setState({
        imgdiv: 
        <DivNewClass classname={classname} name={realid}/>
        })

        this.setState(state => {
          const list = state.list.concat(state.imgdiv);
          return {
            list,
          };
        });
        }
        else{
            window.alert("you can add a maximum of three images per template")
        }
        
      }
      

      
  
    render(){
        let counttemplate2 = 0;
        let classname = ""
        if (this.state.list.length + 1 == 1)
        {
            classname = "oneimage"
        }
        else
        {
            classname = "threeimage"
        }
        let realid = this.props.id + "forappend"
        

        return (
        <div>

            {this.props.type != "profile" ? <div id="boss"class="d-flex justify-content-center d-flex flex-wrap mt-2">
                <input id="exampleColorInput" onChange={this.props.changeBgColor} type="color" class="changecolor form-control form-control-color col-1 mb-1" title="Choose your color"></input>
                <input id="filetemplate1" onChange={this.props.imageTemplate} class="filetemplate1 form-control-file col-sm-1 mr-1" type="file"></input>
                <button id="addimagetemplate1"onClick={(e) => this.addImage(realid, e, classname)} class="deletetemplate btn btn-outline-dark btn-sm mr-2 mb-1">Add Asset</button>
                <button id="addimagetemplate1"onClick={(e) => this.props.addTemplateAbove(realid, e, classname, counttemplate2++)} class="deletetemplate btn btn-outline-dark btn-sm mr-2 mb-1">Add Background Above</button>

                <button id="deletetemplate1" onClick={(e) => this.props.deleteTemplate(this.props.id, e)} class="deletetemplate btn btn-outline-danger btn-sm mr-2 mb-1">X</button>
            </div> :null}
            <div id={realid} name={this.props.id} className="d-flex justify-content-center template2 mr-4 d-flex flex-wrap" style={{backgroundImage: this.state.bgimage, backgroundColor: this.state.bgcolor}}>
            {this.state.list.map(item => (
              item
            ))}
            </div>
        </div>
      )
    }
  }
  class SortNextImg extends React.Component {
    constructor(props){
        super(props);
        let source = this.props.source;       
        this.chooseImgTemplate = this.chooseImgTemplate.bind(this);
      
    }
    chooseImgTemplate(e)
    {   
        let i = 0
        if (e.target.id == "")
        {
            for (i = 0; i < e.target.parentElement.parentElement.parentElement.childNodes.length; i ++)
            {
                e.target.parentElement.parentElement.parentElement.childNodes[i].childNodes[0].style.backgroundColor = ""
            }
  
            if (e.target.parentElement.style.backgroundColor == "")
            {
                e.target.parentElement.style.backgroundColor = "skyblue"
            }            
            else if (e.target.parentElement.style.backgroundColor == "skyblue")
            {
                e.target.parentElement.style.backgroundColor = ""
            }
        }
        else if (e.target.id == "wilachatww")
        {
  
            for (i = 0; i < e.target.parentElement.parentElement.childNodes.length; i ++)
            {
                e.target.parentElement.parentElement.childNodes[i].childNodes[0].style.backgroundColor = ""
            }
            
            if (e.target.parentElement.style.backgroundColor == "")
            {
                e.target.style.backgroundColor = "skyblue"
            }
            else if (e.target.parentElement.style.backgroundColor == "skyblue")
            {
                e.target.style.backgroundColor = ""
            }
        }
    
        
        let source = this.props.source
        document.querySelector('#saveurl').value = source
  
    }
  
    render(){
        document.querySelector('#nextimg').hidden = false
        document.querySelector('#showtemplates').hidden = false
  
        let char = this.props.source.charAt(8)
        if (this.props.source.charAt(8) == "s")
        {
            if (this.props.source.indexOf( '.jpg' ) == 85)
            {
                char = "l"
            }
        }

  
        return (
            <div>
                <div onClick={this.chooseImgTemplate} id="wilachatww" name="imgdiv" value="false" className="boxnext">
                    {char == "l" ? <img class="nftimg" src={this.props.source}></img>: <video onClick={this.chooseImgTemplate} src={this.props.source} muted autoplay="autoplay" loop="true" class="nftvdo"><source src={this.props.source} type = "video/mp4"></source></video>}                  
                </div>
            </div>
        )
    }
  
  }
  
  //send delete + add background color function to template classes
  class NextImg extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this)
        this.showTemplate2 = this.showTemplate2.bind(this);
        this.changeBgColor = this.changeBgColor.bind(this);
        this.deleteTemplate = this.deleteTemplate.bind(this);
        this.checkGalleryTitleArea = this.checkGalleryTitleArea.bind(this);
        this.addTemplateAbove = this.addTemplateAbove.bind(this);



        let bgimagetitle = "";
        let bgcolortitle = "";
  
        this.imageTemplate = this.imageTemplate.bind(this);
        this.goSave = this.goSave.bind(this)
        this.state = {
            gallerytitleedit:"",
            bgcolortitle:"",
            bgimagetitle:""
        }
 

        const getcooked = getCookie('csrftoken')
        fetch(`/realcreateapi/1`, {
            method: 'PUT',
            headers:{'X-CSRFToken': getcooked},
            body: JSON.stringify({
                edit:"edit"
                })
        })
        .then(response => response.json())
     .then(data => {
        console.log("checking the data", data)
        let dataa = data['galleryinfo']
        let gallerybgcolor= data['gallerybgcolor']
        let gallerybgimage = data['gallerybgimage']
        let gallerytitle = data['gallerytitle']
        console.log("gallerytitle", gallerytitle)
        console.log("gallerybgimage", gallerybgimage)
        console.log("gallerybgcolor", gallerybgcolor)

        this.setState({
            gallerytitleedit: gallerytitle,
            bgcolortitle: gallerybgcolor,
            bgimagetitle: gallerybgimage
        })
       

        dataa = dataa.replaceAll("'", '"');
        dataa = JSON.parse(dataa);
        console.log("checking for new data", dataa)
        if (data != "")
        {
            let i = 0
            for (i = 0; i < dataa['everydata'].length; i++)
            {
                let count = i
                const newDiv = document.createElement("div");
                newDiv.id = "saveddata" + count
                let id = "saveddata" + count
                
     
                document.querySelector('#showtemplates').append(newDiv);

                ReactDOM.render(<ShowTemplateTwo alldata={dataa['everydata'][i]} type="edit" id={id} changeBgColor={this.changeBgColor} 
                deleteTemplate={this.deleteTemplate} imageTemplate={this.imageTemplate} addTemplateAbove={this.addTemplateAbove} adddata={this.props.adddata}/>,document.querySelector('#saveddata' + count));
            }
        }    
    });
    }
    changeBgColor(e){
        console.log("waan")
        console.log(e)
        console.log("what what what what", document.querySelector('#exampleColorInput').value)
        let color = e.target.value
        e.target.parentElement.childNodes[1].value = ""
        e.target.parentElement.parentElement.childNodes[1].style.backgroundImage = ""
        e.target.parentElement.parentElement.childNodes[1].style.backgroundColor = color
  
    }
    deleteTemplate(id, e){
        //without react might be wrong
        //ReactDOM.unmountComponentAtNode(document.querySelector(`#${id}`));
        document.querySelector(`#${id}`).remove()
  
    }
  
    imageTemplate(e){
        console.log("MOTHER FAKING CONFUSING")
        console.log("faking e liar", e)
        let fileInput =  e.target.files[0]
        console.log("fileINput", fileInput)
        let formData = new FormData();
        formData.append("media", fileInput);
        const getcooked = getCookie('csrftoken')
  
        fetch(`/realcreateapi/1`, {
            method: 'POST',
            headers:{'X-CSRFToken': getcooked},
            body:formData
        })
        .then(response => response.json())
    
         .then(data => {
            console.log("ALIBABA IS SAVING THE WORLD WITH MORG SAN!", data)
            let first = "url(/static/profile_pic/"
            let last = ")"
            let source = first + data + last
            console.log("source", source)
            e.target.parentElement.parentElement.childNodes[1].style.backgroundColor = ""
            e.target.parentElement.parentElement.childNodes[1].style.backgroundImage = source
            console.log("morg x alibaba", e.target.parentElement.parentElement.childNodes[1])
        });
  
    }
  
  
    goBack(e)
    {
        console.log("wtf")
        document.querySelector('#navibarid').hidden = false;

        document.querySelector('#nextimg').hidden = true
        document.querySelector('#shownfts').hidden = false
        document.querySelector('#showtemplates').hidden = true
  
    }
    goSave(e)
    {
        console.log("this again", e)
        let src = ""
        let title = ""
        let des = ""
        let bgcolor = ""
        let bgimage = ""
        let everydata = {}
        let tryeverydata = []
    
        let gallerytitle = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[0].value
        let gallerybgcolor = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].style.backgroundColor
        let gallerybgimage = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].style.backgroundImage
  
        let l = 0;
      
      
            let i = 0;    

            
            for (i = 0; i < e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].childNodes.length - 1; i++)
            { 
                let sectiondict = {}
                console.log("c1", e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0])
                console.log("c2", e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1])
                
                //newest new
              //  bgcolor = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].children[i].childNodes[0].childNodes[1].style.backgroundColor

                bgcolor = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].style.backgroundColor
                sectiondict['bgcolor'] = bgcolor
                bgimage = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].style.backgroundImage
                console.log("just to make sure this is the bgimage", bgimage)
        
    
                //everydata[section] = sectiondict
                tryeverydata.push(sectiondict)
    
                
                if (bgimage != "")
                {
                    let check = bgimage.split('/')
                    console.log("change of heart", check)
                    let coh = check[3].split('"')
                    console.log("change of", coh)
                    sectiondict['bgimage'] = coh[0]
    
                }
                else{
                    sectiondict['bgimage'] = ""
                }
            
                let j = 0;
                let imagearray = []
    
            for (j = 0; j < e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].childNodes.length; j++)
            {
                    let imageinfo = "imageinfo" + (j + 1)
    
                    let imageinfodict = {}
    
                    let src = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].childNodes[j].childNodes[0].childNodes[0].src
                    
                    imageinfodict['src'] = src
                    
                    let title = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].childNodes[j].childNodes[1].childNodes[0].value
                    imageinfodict['title'] = title
                    
                    let des = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].childNodes[j].childNodes[2].childNodes[0].value
                    imageinfodict['des'] = des
                    console.log("this is image info dict", imageinfodict)
                    imagearray.push(imageinfodict)
    
                } 
                sectiondict["imageinfo"] = imagearray 
    
            }
     
        console.log("everydata", everydata)
        console.log("try every data", tryeverydata)
        console.log("porno graffitti", gallerytitle)
        console.log("porno graffitti", gallerybgimage)
        console.log("porno graffitti", gallerybgcolor)



  
        let formData = new FormData();
        formData.append("everydata", everydata)
        const getcooked = getCookie('csrftoken')
        let lastdata = {}
        lastdata["everydata"] = tryeverydata;
        fetch(`/realsaveapi`, {
            method: 'POST',
            headers:{'X-CSRFToken': getcooked},
            body: JSON.stringify({
                everydataa: lastdata,
                gallerybgcolor: gallerybgcolor,
                gallerybgimage: gallerybgimage,
                gallerytitle:  gallerytitle

                })
          })
          .then(response => response.json())
    
          .then(data => {
            window.location.href = "profile/" + data;
  
  
          });
    }
    showTemplate2(count)
    {
      
        const newDiv = document.createElement("div");
        newDiv.id = "templatesidtwo" + count
        let id = "templatesidtwo" + count
  
        document.querySelector('#showtemplates').append(newDiv)
       
        ReactDOM.render(<ShowTemplateTwo id={id} changeBgColor={this.changeBgColor} 
        deleteTemplate={this.deleteTemplate} imageTemplate={this.imageTemplate} addTemplateAbove={this.addTemplateAbove}/>, document.querySelector('#templatesidtwo' + count));
    }
    addTemplateAbove(realid, e, classname, count){
        console.log("real id", realid)
        console.log("e", e)
        console.log("class name", classname)

        const newDiv = document.createElement('div');
        newDiv.id = "templatesidtwoabove" + realid + count
        let id = "templatesidtwoabove" + realid + count
     
      //  document.querySelector('#showtemplates').append(newDiv)
        e.target.parentElement.parentElement.parentElement.insertAdjacentElement('beforebegin', newDiv);

     
      ReactDOM.render(<ShowTemplateTwo id={id} changeBgColor={this.changeBgColor} 
      deleteTemplate={this.deleteTemplate} imageTemplate={this.imageTemplate} addTemplateAbove={this.addTemplateAbove}/>, document.querySelector('#templatesidtwoabove' + realid + count));

    }
     
    checkGalleryTitleArea(e)
    {  if (e.target.value.length > 0) {
        this.setState({gallerytitleedit: e.target.value});
    }
    else {
        this.setState({gallerytitleedit: ""});
    }

    }
    
        render() {    
        let clicked = parseInt(window.location.pathname.split('/')[2])
        let toprofilelink = "http://127.0.0.1:8000/profile" + clicked
        let counttemplate1 = 0;
        let counttemplate2 = 0;
        console.log("STATE COLOR STATE IMAGE MOFOOOO")
        console.log("state image", this.state.bgimagetitle)
        console.log("state color", this.state.bgcolortitle)
      
       
            const img = [];
            let i = 0
            if (this.props.type != "gallerycoverprofile")
            {
                for (i = 0; i < this.props.array.length; i ++)
                {
                    console.log("array i", this.props.array[i])
                    img.push(<SortNextImg 
                        source={this.props.array[i]}/>
                    );
                }
            } 
        //creating new template just for title page and when to click
      return (
        <div>
           {this.props.type != "gallerycoverprofile" ? <div class="d-flex flex-wrap d-flex justify-content-center imgnextbg">
                {img}
                <div class="belowimgnextbg ">
                    <div class="templateimgdiv d-flex justify-content-center">
                    <button class="btn btn-outline-dark btn-sm mt-2 mb-2 mr-2" onClick={this.goBack}>Back</button>
                    <a href = "http://127.0.0.1:8000/" target="_blank" class="btn btn-outline-dark btn-sm mt-2 mb-2 mr-2">How To</a>
                    <button class="btn btn-outline-dark btn-sm mt-2 mb-2 mr-2" onClick={() => this.showTemplate2(counttemplate2++)}>Add Background</button>
                    <button class="btn btn-outline-dark btn-sm mt-2 mb-2" onClick={this.goSave}>Post</button>

                </div>
                </div>
            </div>: null}
           
            
            <div class= {this.props.type != "gallerycoverprofile" ? "titlecolor": "nottitlecolor"}>
            {this.props.type != "gallerycoverprofile" ? <div id="bosss"class="d-flex justify-content-center d-flex flex-wrap">
                <input id="exampleColorInput" onChange={this.changeBgColor} type="color" class="changecolor form-control form-control-color col-1 mb-1" title="Choose your color"></input>
                <input id="filetemplate1" onChange={this.imageTemplate} class="filetemplate1 form-control-file col-sm-1 mr-1" type="file"></input>
                 </div> :null}
         
            <div id= {this.props.type != "gallerycoverprofile" ? "nottitlecolor": "titlecolor"} className="d-flex justify-content-center template2 mr-4" style={this.props.type != "gallerycoverprofile" ? {backgroundImage: this.state.bgimagetitle, backgroundColor: this.state.bgcolortitle} :{backgroundImage: this.props.gallerybgimage, backgroundColor: this.props.gallerybgcolor}}>
            {this.props.type != "gallerycoverprofile" ? <input class="gallerytitleinput form-control col-4"placeholder="Title of Gallery" type="text" onChange={this.checkGalleryTitleArea} value={this.state.gallerytitleedit} required></input> : <h6 class="yuptitlee">{this.props.gallerytitle}</h6>}
            </div>

            

            </div>
        </div>
        );
    }
  }
  
  class EachNft extends React.Component{
    constructor(props){
        super(props);
        this.chooseNft = this.chooseNft.bind(this);
        this.cancelNft = this.cancelNft.bind(this)
        let arrayurl = [];
        let animationurl =  this.props.animationurl;
        let imageurl = this.props.imageurl;
        let index = 65;

        
  
        if (animationurl != null)
        { 
            index = animationurl.indexOf( '.gltf' );
       //     console.log("index gltf", index)

        }
        if (imageurl.charAt(8) == "s")
        {
            if (imageurl != null)
            { 
                if (imageurl.indexOf( '.jpg' ) == 85)
                {
                    index = 65
                }
                else
                {
                    index = -99
                }    
            }
          
        }

        console.log("index", index)

        this.state = {
            arrayurl: arrayurl,
            wholeimg:
            <div>
                {index == -99 ? <div id="wilachatww" name="imgdiv" value="false" className="box" onClick={this.chooseNft} data-selected="false">
                <video src={this.props.imageurl} muted autoplay="autoplay" loop="true" class="nftvdo"><source src={this.props.imageurl} type = "video/mp4"></source></video></div>
                :<div id="wilachatww" name="imgdiv" value="false" className="box" onClick={this.chooseNft} data-selected="false">
                {index == 65 ? <img class="nftimg" src={this.props.imageurl}></img>: <video src={this.props.animationurl} muted autoplay="autoplay" loop="true" class="nftvdo"><source src={this.props.animationurl} type = "video/mp4"></source></video>}        
            </div>}

                
        
                <div class="d-flex justify-content-center">
                    <a href = {index == 65 ? this.props.imageurl: this.props.animationurl} target="_blank" class="btn btn-outline-dark btn-sm mt-1 mb-1">view</a>
                </div>
            </div>
        }
      }
      chooseNft(e){
        let animationurl =  this.props.animationurl;
        let imageurl = this.props.imageurl;

        let index = 65;
  
        if (animationurl != null)
        { 
        index = animationurl.indexOf( '.gltf' );
        }
        if (imageurl.charAt(8) == "s")
        {
            if (imageurl != null)
            { 
                if (imageurl.indexOf( '.jpg' ) == 85)
                {
                    index = 65
                }
                else
                {
                    index = -99
                }    
            }
        }
  
        this.setState({
            wholeimg:
            <div>       
                  
                {index == -99 ? <div id="wilachatww" name="imgdiv" value="true" className="boxcolor" data-selected="true"  onClick={this.cancelNft}>
                <video src={this.props.imageurl} muted autoplay="autoplay" loop="true" class="nftvdo"><source src={this.props.imageurl} type = "video/mp4"></source></video></div>
                :<div id="wilachatww" name="imgdiv" value="true" className="boxcolor" data-selected="true" onClick={this.cancelNft}>
                {index == 65 ? <img class="nftimg" src={this.props.imageurl}></img>: <video src={this.props.animationurl} muted autoplay="autoplay" loop="true" class="nftvdo"><source src={this.props.animationurl} type = "video/mp4"></source></video>}        
                </div>}

                <div class="d-flex justify-content-center">
                    <a href = {index == 65 ? this.props.imageurl: this.props.animationurl} target="_blank" class="btn btn-outline-dark btn-sm mt-1 mb-1">view</a>
                </div>
            </div>
        })
            
      }
      cancelNft(e)
      {
        let animationurl =  this.props.animationurl;
        let imageurl = this.props.imageurl;

        let index = 65;
  
        if (animationurl != null)
        { 
        index = animationurl.indexOf( '.gltf' );
        }

        if (imageurl.charAt(8) == "s")
        {
            if (imageurl != null)
            { 
                if (imageurl.indexOf( '.jpg' ) == 85)
                {
                    index = 65
                }
                else
                {
                    index = -99
                }    
            }
        }
  
        this.setState({
            wholeimg:
            <div>
                  {index == -99 ? <div id="wilachatww" name="imgdiv" value="false" className="box" onClick={this.chooseNft} data-selected="false">
                <video src={this.props.imageurl} muted autoplay="autoplay" loop="true" class="nftvdo"><source src={this.props.imageurl} type = "video/mp4"></source></video></div>
                :<div id="wilachatww" name="imgdiv" value="false" className="box" onClick={this.chooseNft} data-selected="false">
                {index == 65 ? <img class="nftimg" src={this.props.imageurl}></img>: <video src={this.props.animationurl} muted autoplay="autoplay" loop="true" class="nftvdo"><source src={this.props.animationurl} type = "video/mp4"></source></video>}        
            </div>}
                <div class="d-flex justify-content-center">
                    <a href = {index == 65 ? this.props.imageurl: this.props.animationurl} target="_blank" class="btn btn-outline-dark btn-sm mt-1 mb-1">view</a>
                </div>
            </div>
        })
  
      }
      render() {
         // console.log("animation url", this.props.animationurl)
  //    console.log("img url", this.props.imageurl)
          return (
            <div>
                {this.state.wholeimg}
            </div>
          )
      }
  }
  class ShowNfts extends React.Component {
    constructor(props) {
        super(props);
        this.selectedImg = this.selectedImg.bind(this);
    }
    selectedImg(e)
    {   
        document.querySelector('#navibarid').hidden = true;
        console.log("selected img", e)


        let i = 0
        let array = []
        console.log("wilachat array", e)

        for (i = 0; i < e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[1].childNodes.length; i++)
        {
            if (e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].dataset["selected"] == "true")
            {
                console.log("INSIDE 1", e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0])
                console.log("INSIDE 2", e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[1])
                console.log("INSIDE 3", e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[1].childNodes[i])
                console.log("INSIDE 4", e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[1].childNodes[i].childNodes[0])
                console.log("INSIDE 5", e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0])
                console.log("INSIDE 6", e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[0])
                console.log("INSIDE 7", e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[0].src)

                array.push(e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[0].src)
            }
        }
       
        if (array[0] != undefined)
        {
           // document.querySelector('#shownfts').style.visibility = 'hidden'
            document.querySelector('#shownfts').hidden = true
            console.log("demon king iruma alsdfnlasdkfn lsadfjdosaijflasdfjnoi dfoaisdfoiadsj oifjsdofi dofij asodifjasod")
            
            ReactDOM.render(<NextImg array={array} adddata={this.props.data}/>, document.querySelector('#nextimg'));
  
        }

        else
        {
            window.alert("You need to select a nft before proceeding to create gallery")
        }
    }
        render() {
            const img = [];
            const counter = [];
            let counterr = 0;
           // console.log("HYPERLOOP", this.props.data)
           // console.log("FAKE HYPERLOOP", this.props.data.length)

            for (let i = 0; i < this.props.data.length; i++)
            {
               //console.log("hyperloop img", this.props.data[i][0])
               //console.log("hyperloop vdo", this.props.data[i][1])
                img.push(
                    <EachNft imageurl={this.props.data[i][0]} 
                    animationurl={this.props.data[i][1]}/>
                  );
            }
      return (
        <div class="formargin">
        <div id="whattodoinselectimg" class="d-flex justify-content-center">
            <h1 class="whattodoinselectimg">Select NFTs you would like to display in your gallery.</h1>
        </div>
        <div class="d-flex justify-content-around d-flex flex-wrap">
            {img}
        </div>
        <div class="d-flex justify-content-center">
            <button class="btn btn-outline-dark btn-sm mt-2 mb-2" onClick={this.selectedImg}>Next</button>
        </div>
        </div>
        );
    }
  }
  
  document.addEventListener('DOMContentLoaded', function(e) {
    document.querySelector('#loading').hidden = false
    console.log("this is real create")
    const getcooked = getCookie('csrftoken')

   // document.querySelector('#loading').hidden = true


    let clicked = window.location.pathname
    if (clicked == "/realcreate"){
        document.querySelector('#navcreate').style.color = "salmon";
    }

      fetch(`/realcreateapi/1`, {
            method: 'PUT',
            headers:{'X-CSRFToken': getcooked},
            body: JSON.stringify({
                edit:"fetchnft"
                })
        })
        .then(response => response.json())
        .then(data => {
            document.querySelector('#loading').hidden = true



            ReactDOM.render(<ShowNfts data={data['adddata']}/>, document.querySelector('#shownfts'));

        });
        

       
        
     
  
  });
  export {
    NextImg,
    ShowTemplateTwo,
  }