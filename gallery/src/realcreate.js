
/*randomwallet address to use
0xce9b6da25e5b9578305f9c593c670736754ed4c5
0x923af7b3a0a65c514c09a68d4ef331cec93d451a
0x00bd53913a82f36e5796ed7d30f1b2a15cd31c20
0x50dd57f50a17d57304e7a4f262da30beb31c2e87
0x3f16d081113c613743ce1d7da6858dc4d26352c3
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
  class ShowTemplateOne extends React.Component{
      constructor(props){
          super(props);
          this.tImageOne = this.tImageOne.bind(this);
          this.state =
          {
              div1: <div></div>,
              div2: <div></div>,
              border1:"dotted",
              border2:"dotted"
          }
      }
      tImageOne(number, e)
      {
        console.log("waifu", e)
        let t1image1 = "t1-image1" + this.props.id;
        let t1vdo1 = "t1-vdo1" + this.props.id;
        let t1image2 = "t1-image2" + this.props.id;
        let t1vdo2 = "t1-vdo2" + this.props.id;
        let url = document.querySelector('#saveurl').value
        
        if (url == "")
        {
            window.alert("You haven't choose a nft yet")
  
        }
        else if (url.charAt(8) == "l")
        {
            if (number == 1)
            {
                this.setState({
                    div1: <img id={t1image1} src={url} class="testingtestimgg"></img>,
                    border1:""
                 })
            }
            else
            {
                this.setState({
                    div2: <img id={t1image2} src={url} class="testingtestimgg"></img>,
                    border2:""
                    })
            }
        }
        else
        {
            console.log("check url", url)
            if (number == 1)
            {
                this.setState({
                    div1: <video id={t1vdo1} src={url} muted autoplay="autoplay" loop="true" class="nftvdoo"><source src={url} type = "video/mp4"></source></video>,
                    border1:""
                })
            }
            else
            {
                this.setState({
                    div2: <video id={t1vdo2} src={url} muted autoplay="autoplay" loop="true" class="nftvdoo"><source src={url} type = "video/mp4"></source></video>,
                    border2:""
                })
            }
        }
        }
  
      render(){
        return (
            <div>
            <div class="margin120 d-flex justify-content-center d-flex flex-wrap mt-2">
                <input onChange={this.props.changeBgColor} type="color" class="changecolor form-control form-control-color col-1 mb-1" id="exampleColorInput" title="Choose your color"></input>
                <input onChange={this.props.imageTemplate} class="filetemplate1 form-control-file col-sm-1 mr-1"id="filetemplate1" type="file"></input>
                <button onClick={(e) => this.props.deleteTemplate(this.props.id, e)} class="deletetemplate btn btn-danger mb-1"></button>
  
            </div>
            <div class="d-flex justify-content-center template1 mr-4 d-flex flex-wrap">
                <div id="wilachatww" name="imgdiv" value="false" class="templates1" >
                    <div id="one"onClick={(e) => this.tImageOne(1, e)} class="divborder" style={{borderStyle: this.state.border1}}>
                        {this.state.div1}
                    </div>
                    <div class="d-flex justify-content-center mt-3">
                        <input class="form-control col-4 "placeholder="Title of NFT"type="text" ></input>
                    </div>
                    <div class="d-flex justify-content-center mt-2">
                        <textarea class="form-control col-10"placeholder="Description of NFT"rows="3"></textarea>
                    </div>
                </div>
                <div id="wilachatww" name="imgdiv" value="false" class="templates1" >
                    <div id="two" onClick={(e) => this.tImageOne(2, e)}class="divborder" style={{borderStyle: this.state.border2}}>
                        {this.state.div2}
                    </div>
                    
                    <div class="d-flex justify-content-center mt-3">
                        <input class="form-control col-4"placeholder="Title of NFT"type="text"></input>
                    </div>
                    <div class="d-flex justify-content-center mt-2">
                        <textarea class="form-control col-10"placeholder="Description of NFT"rows="3"></textarea>
                    </div>
                </div>
            </div>
            </div>
        )
      }
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

        console.log("should at least print something")
        console.log("super new vlass", document.querySelector('#supernewclass'))
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
          console.log("hex", this.props.hex)
        return (
            <div id="overlayrc" style={{backgroundImage: this.props.bgimage, backgroundColor: this.props.bgcolor}}>
            <div class="d-flex justify-content-end mr-2">
                <button id="overlaybutton" onClick={this.hiddenOverlay} class="btn btn-outline-danger btn-sm mt-2 mb-2">Go Back</button>
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
        


       let src = ""
       let des = ""
       let title = ""
       let border = "dotted"
       let thisisfromprofile = "false"
       if (this.props.src != undefined)
       {
            src = this.props.src
            des = this.props.des
            title = this.props.title
            border = ""
            thisisfromprofile = "true"
       }
        this.state =
        {
            url:src,
            border:border,
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
            border:null
  
         })
    }
    componentDidMount() {
        console.log("this.props.bgimage", this.props.bgimage)
        if (this.props.bgimage != undefined)
        {

        let bgimagesplit1 = this.props.bgimage.split('url(')
        console.log("bgimagesplit1", bgimagesplit1)
        let bgimagesplit2 = bgimagesplit1[1].split(')')
        let bgimagesplitcheck = bgimagesplit2[0].split('/')
        console.log("bgimagesplit2", bgimagesplit2)

        console.log("bgimagesplitcheck", bgimagesplitcheck)
        

        if (bgimagesplitcheck[3] != "")
       {
           console.log("in if bgimagesplit")
           const fac = new FastAverageColor();
           fac.getColorAsync(bgimagesplit2[0])
               .then(color => {
                 this.setState({
                  hexy:color.hex
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

    return (
        <div id="wilachatww" name="imgdiv" value="false" className="threeimage" >
            <div id="oneinamillion" onClick={(e) => this.props.type != "profile" ? this.t2ImageOne(e): this.goIntoImage(checkifurl, this.state.hexy)} class="divborder"style={{borderStyle: this.state.border}}>
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
        let array = []
        let w = 0
        let newlist = []
        let imageinfo_src = ""
        let imageinfo_title = ""
        let imageinfo_des = ""
        let bgcolor = ""
        let bgimage = ""

        console.log("type", this.props.type)
        if (this.props.alldata != undefined)
        {
            bgcolor = this.props.alldata['bgcolor']
            bgimage = this.props.alldata['bgimage']
            let first = "url(/static/profile_pic/"
            let last = ")"
            bgimage = first + bgimage + last
            for(w = 0; w < this.props.alldata['imageinfo'].length; w++)
            {
                imageinfo_src = this.props.alldata['imageinfo'][w]['src']
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
      
  
    render(){
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

            {this.props.type != "profile" ? <div id="boss"class="d-flex justify-content-center d-flex flex-wrap  mt-2">
                <input id="exampleColorInput" onChange={this.props.changeBgColor} type="color" class="changecolor form-control form-control-color col-1 mb-1" title="Choose your color"></input>
                <input id="filetemplate1" onChange={this.props.imageTemplate} class="filetemplate1 form-control-file col-sm-1 mr-1" type="file"></input>
                <button id="deletetemplate1" onClick={(e) => this.props.deleteTemplate(this.props.id, e)} class="deletetemplate btn btn-outline-danger btn-sm mr-1 mb-1">X</button>
                <button id="addimagetemplate1"onClick={(e) => this.addImage(realid, e, classname)} class="deletetemplate btn btn-outline-dark btn-sm mb-1">Add Image</button>
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
        this.showTemplate1 = this.showTemplate1.bind(this);
        this.showTemplate2 = this.showTemplate2.bind(this);
        this.changeBgColor = this.changeBgColor.bind(this);
        this.deleteTemplate = this.deleteTemplate.bind(this);
        this.checkGalleryTitleArea = this.checkGalleryTitleArea.bind(this);

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
                deleteTemplate={this.deleteTemplate} imageTemplate={this.imageTemplate}/>,document.querySelector('#saveddata' + count));
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
        let address = document.querySelector('#walletaddress').value
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
        document.querySelector('#nextimg').hidden = true
        document.querySelector('#shownfts').hidden = false
        document.querySelector('#showtemplates').hidden = true
  
    }
    goSave(e)
    {
  
        let src = ""
        let title = ""
        let des = ""
        let bgcolor = ""
        let bgimage = ""
        let everydata = {}
        let tryeverydata = []
        
        let gallerytitle = e.target.parentElement.parentElement.parentElement.childNodes[0].childNodes[3].childNodes[1].childNodes[0].value
        let gallerybgcolor = e.target.parentElement.parentElement.parentElement.childNodes[0].childNodes[3].childNodes[1].style.backgroundColor
        let gallerybgimage = e.target.parentElement.parentElement.parentElement.childNodes[0].childNodes[3].childNodes[1].style.backgroundImage
  
        let l = 0;
      
        let z = 0;
        let num = 0
        for (z = 0; z < e.target.parentElement.parentElement.parentElement.parentElement.childNodes.length; z++)
        {
            if (z == 7 || z == 9)
            {
                console.log("should console twice")
                num = z
                console.log(num)
            }
        }
            let i = 0;
            
            for (i = 0; i < e.target.parentElement.parentElement.parentElement.parentElement.childNodes[9].childNodes.length - 1; i++)
            { 
                let sectiondict = {}
                console.log("c1", e.target.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0])
                console.log("c2", e.target.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1])
                
                bgcolor = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].style.backgroundColor
                sectiondict['bgcolor'] = bgcolor
                bgimage = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].style.backgroundImage
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
    
            for (j = 0; j < e.target.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].childNodes.length; j++)
            {
                    let imageinfo = "imageinfo" + (j + 1)
    
                    let imageinfodict = {}
    
                    let src = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].childNodes[j].childNodes[0].childNodes[0].src
                    
                    imageinfodict['src'] = src
                    
                    let title = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].childNodes[j].childNodes[1].childNodes[0].value
                    imageinfodict['title'] = title
                    
                    let des = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].childNodes[j].childNodes[2].childNodes[0].value
                    imageinfodict['des'] = des
                    console.log("this is image info dict", imageinfodict)
                    imagearray.push(imageinfodict)
    
                } 
                sectiondict["imageinfo"] = imagearray 
    
            }
     
        console.log("everydata", everydata)
        console.log("try every data", tryeverydata)
  
        let formData = new FormData();
        formData.append("everydata", everydata)
        let address = document.querySelector('#walletaddress').value
        const getcooked = getCookie('csrftoken')
        let lastdata = {}
        lastdata["everydata"] = tryeverydata;
        fetch(`/realsaveapi/${address}`, {
            method: 'POST',
            headers:{'X-CSRFToken': getcooked},
            body: JSON.stringify({
                everydataa: lastdata,
                gallerybgcolor: gallerybgcolor,
                gallerybgimage: gallerybgimage,
                gallerytitle:  gallerytitle

                })
   
            
          })
    }
    showTemplate1(count)
    {
        const newDiv = document.createElement("div");
        newDiv.id = "templatesidone" + count
        let id = "templatesidone" + count
        document.querySelector('#showtemplates').append(newDiv)
        ReactDOM.render(<ShowTemplateOne id={id} changeBgColor={this.changeBgColor} 
        deleteTemplate={this.deleteTemplate} imageTemplate={this.imageTemplate}/>, document.querySelector('#templatesidone' + count));
           
    }
    showTemplate2(count)
    {
      
        const newDiv = document.createElement("div");
        newDiv.id = "templatesidtwo" + count
        let id = "templatesidtwo" + count
  
        document.querySelector('#showtemplates').append(newDiv)
       
        ReactDOM.render(<ShowTemplateTwo id={id} changeBgColor={this.changeBgColor} 
        deleteTemplate={this.deleteTemplate} imageTemplate={this.imageTemplate}/>, document.querySelector('#templatesidtwo' + count));
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
            </div>: null}
           
            {this.props.type != "gallerycoverprofile" ?  <div class="belowimgnextbg">
                <div class="d-flex justify-content-center">
                    <button class="btn btn-outline-dark btn-sm mt-2 mb-2 mr-1" onClick={() => this.showTemplate1(counttemplate1++)}>Template1</button>
                    <button class="btn btn-outline-dark btn-sm mt-2 mb-2" onClick={() => this.showTemplate2(counttemplate2++)}>Template2</button>
                </div>
            </div> :null}
           
            {this.props.type != "gallerycoverprofile" ?  <div class="d-flex justify-content-center">
                <button class="btn btn-outline-dark btn-sm mt-2 mb-2 mr-2" onClick={this.goBack}>Back</button>
                <button class="btn btn-outline-dark btn-sm mt-2 mb-2" onClick={this.goSave}>Save</button>
  
            </div>:null}
            <div>
            {this.props.type != "gallerycoverprofile" ? <div id="boss"class="d-flex justify-content-center d-flex flex-wrap  mt-2">
                <input id="exampleColorInput" onChange={this.changeBgColor} type="color" class="changecolor form-control form-control-color col-1 mb-1" title="Choose your color"></input>
                <input id="filetemplate1" onChange={this.imageTemplate} class="filetemplate1 form-control-file col-sm-1 mr-1" type="file"></input>
                 </div> :null}
         
            <div id="titlecolor" className="d-flex justify-content-center template2 mr-4" style={this.props.type != "gallerycoverprofile" ? {backgroundImage: this.state.bgimagetitle, backgroundColor: this.state.bgcolortitle} :{backgroundImage: this.props.gallerybgimage, backgroundColor: this.props.gallerybgcolor}}>
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
        let animationurl =  this.props.animationurl ;
        let index = 65;
  
        if (animationurl != null)
        { 
        index = animationurl.indexOf( '.gltf' );
        }
        this.state = {
            arrayurl: arrayurl,
            wholeimg:
            <div>
                <div id="wilachatww" name="imgdiv" value="false" className="box" onClick={this.chooseNft} data-selected="false">
                    {index == 65 ? <img class="nftimg" src={this.props.imageurl}></img>: <video src={this.props.animationurl} muted autoplay="autoplay" loop="true" class="nftvdo"><source src={this.props.animationurl} type = "video/mp4"></source></video>}                  
                </div>
                <div class="d-flex justify-content-center">
                    <a href = {index == 65 ? this.props.imageurl: this.props.animationurl} target="_blank" class="btn btn-outline-dark btn-sm mt-1 mb-1">view</a>
                </div>
            </div>
        }
      }
      chooseNft(e){
        let animationurl =  this.props.animationurl ;
        let index = 65;
  
        if (animationurl != null)
        { 
        index = animationurl.indexOf( '.gltf' );
        }
  
        this.setState({
            wholeimg:
            <div>
                <div id="wilachatww" name="imgdiv" value="true" className="boxcolor" data-selected="true" onClick={this.cancelNft}>
                    {index == 65  ? <img class="nftimg" src={this.props.imageurl}></img>: <video src={this.props.animationurl} muted autoplay="autoplay" loop="true" class="nftvdo"><source src={this.props.animationurl} type = "video/mp4"></source></video>}                  
                </div>
                <div class="d-flex justify-content-center">
                    <a href = {index == 65 ? this.props.imageurl: this.props.animationurl} target="_blank" class="btn btn-outline-dark btn-sm mt-1 mb-1">view</a>
                </div>
            </div>
        })
            
      }
      cancelNft(e)
      {
        let animationurl =  this.props.animationurl ;
        let index = 65;
  
        if (animationurl != null)
        { 
        index = animationurl.indexOf( '.gltf' );
        }
  
        this.setState({
            wholeimg:
            <div>
                <div id="wilachatww" name="imgdiv" className="box" data-selected="false" onClick={this.chooseNft}>
                    {index == 65  ? <img class="nftimg" src={this.props.imageurl}></img>: <video src={this.props.animationurl} muted autoplay="autoplay" loop="true" class="nftvdo"><source src={this.props.animationurl} type = "video/mp4"></source></video>}                  
                </div>
                <div class="d-flex justify-content-center">
                    <a href = {index == 65 ? this.props.imageurl: this.props.animationurl} target="_blank" class="btn btn-outline-dark btn-sm mt-1 mb-1">view</a>
                </div>
            </div>
        })
  
      }
      render() {
          console.log("animation url", this.props.animationurl)
          console.log("img url", this.props.imageurl)
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
        console.log("check for data inside to get the address to send back to api", this.props.data)
    }
    selectedImg(e)
    {   

        let i = 0
        let array = []
        console.log(e)
        for (i = 0; i < e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[0].childNodes.length; i++)
        {
            if (e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].dataset["selected"] == "true")
            {
                array.push(e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].src)
            }
        }
        if (array[0] != undefined)
        {
            
           // document.querySelector('#shownfts').style.visibility = 'hidden'
            document.querySelector('#shownfts').hidden = true
  
  
  
            ReactDOM.render(<NextImg array={array}/>, document.querySelector('#nextimg'));
  
        }
        else{
            window.alert("You need to select a nft before proceeding to create gallery")
        }
    }
        render() {
            const img = [];
            const counter = [];
            let counterr = 0;
  
            for (let i = 0; i < this.props.data["assets"].length; i++)
            {
                img.push(
                    <EachNft imageurl={this.props.data["assets"][i]["image_url"]} 
                    animationurl={this.props.data["assets"][i]["animation_url"]} />
                  );
            }
      return (
        <div>
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
  
    // do while u dont own an nfts (not the query)
  
    let wallclick = document.querySelector('#wallclick')
    wallclick.addEventListener('click', (e) => {
        console.log("what")
        let query = ""
        let i = 0
        console.log("e", e)
        for (i = 0; i < e.path[1].childNodes[3].length; i++)
        {
            if (e.path[1].childNodes[3].options[i].selected == true)
            {
                query = e.path[1].childNodes[3].options[i].value
            }
        }
        
       console.log("query", query)
        
        let address = document.querySelector('#walletaddress').value
        
        fetch(`https://api.opensea.io/api/v1/assets?owner=${address}${query}&offset=0&limit=20`)
      
        .then(response => response.json())
    
         .then(data => {
            document.querySelector('#askforwallet').hidden = true;
            ReactDOM.render(<ShowNfts data={data}/>, document.querySelector('#shownfts'));
            
        });
    });
  });
  export {
    NextImg,
    ShowTemplateTwo,
  }