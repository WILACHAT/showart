
/*randomwallet address to use
0xce9b6da25e5b9578305f9c593c670736754ed4c5
0x923af7b3a0a65c514c09a68d4ef331cec93d451a
0x00bd53913a82f36e5796ed7d30f1b2a15cd31c20
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
  class DivNewClass extends React.Component{
    constructor(props){
        super(props);
        this.t2ImageOne = this.t2ImageOne.bind(this);
        this.deleteImgDiv = this.deleteImgDiv.bind(this);
        console.log("this . porps . length", this.props.length)
        let classname =  this.props.classname

        this.state =
        {
            url:"",
            border:"dotted"

        }
        
    }
    t2ImageOne(list, e)
    {

        //e.target.parentElement.parentElement.childNodes[i]
        this.setState({
            url: document.querySelector('#saveurl').value,
            border:null
  
         })
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
        <div id="wilachatww" name="imgdiv" value="false" className={this.props.classname} >
            <div id="one" onClick={(e) => this.t2ImageOne(this.state.list, e)} class="divborder"style={{borderStyle: this.state.border}}>
                {checkifurl == "image" ? <img class="testingtestimgg" src={this.state.url}></img>: <video src={this.state.url} muted autoplay="autoplay" loop="true" class="nftvdoo"><source src={this.state.url} type = "video/mp4"></source></video>}                  
            </div>
            <div class="d-flex justify-content-center mt-3">
                <input class="form-control col-4"placeholder="Title of NFT" type="text"></input>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <textarea class="form-control col-10"placeholder="Description of NFT" rows="3"></textarea>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <button class="btn btn-outline-dark btn-sm mt-2 mb-2" onClick={this.deleteImgDiv}>X</button>
            </div>
        </div>
      )
    }
}

  class ShowTemplateTwo extends React.Component{
    constructor(props){
        super(props);
        this.addImage = this.addImage.bind(this);
        let array = []
        this.state =
        {
            imgdiv: "",
            list:[]
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
        <DivNewClass length={length} classname={classname} name={realid}/>
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
            <div class="d-flex justify-content-center d-flex flex-wrap  mt-2">
                <input onChange={this.props.changeBgColor} type="color" class="changecolor form-control form-control-color col-1 mb-1" id="exampleColorInput" title="Choose your color"></input>
                <input onChange={this.props.imageTemplate} id="filetemplate1"  class="filetemplate1 form-control-file col-sm-1 mr-1" type="file"></input>
                <button onClick={(e) => this.props.deleteTemplate(this.props.id, e)} class="deletetemplate btn btn-danger mb-1"></button>
                <button onClick={(e) => this.addImage(realid, e, classname)} class="deletetemplate btn btn-danger mb-1">Add Image</button>
            </div>
            <div id={realid} name={this.props.id}class="d-flex justify-content-center template2 mr-4 d-flex flex-wrap">
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
  
        this.imageTemplate = this.imageTemplate.bind(this);
        this.goSave = this.goSave.bind(this)
  
  
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
  
        fetch(`/realcreateapi/${address}`, {
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
        
        let i = 0;
        for (i = 0; i < e.target.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes.length - 1; i++)
        {
            let section = "section" + (i + 1)
           
            let sectiondict = {}
  
            bgcolor = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes[i + 1].childNodes[0].childNodes[1].style.backgroundColor
            sectiondict['bgcolor'] = bgcolor
            bgimage = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes[i + 1].childNodes[0].childNodes[1].style.backgroundImage
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
  
           for (j = 0; j < e.target.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes[i + 1].childNodes[0].childNodes[1].childNodes.length; j++)
           {
                let imageinfo = "imageinfo" + (j + 1)
  
                let imageinfodict = {}
  
                let src = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes[i + 1].childNodes[0].childNodes[1].childNodes[j].childNodes[0].childNodes[0].src
                
                imageinfodict['src'] = src
                
                let title = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes[i + 1].childNodes[0].childNodes[1].childNodes[j].childNodes[1].childNodes[0].value
                imageinfodict['title'] = title
                
                let des = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes[i + 1].childNodes[0].childNodes[1].childNodes[j].childNodes[2].childNodes[0].value
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
  
        fetch(`/realsaveapi/${address}`, {
            method: 'POST',
            headers:{'X-CSRFToken': getcooked},
            body: JSON.stringify({
                everydata: tryeverydata
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
    
        render() {
  
        let counttemplate1 = 0;
        let counttemplate2 = 0;
  
        const img = [];
        let i = 0
        for (i = 0; i < this.props.array.length; i ++)
        {
            img.push(<SortNextImg 
                source={this.props.array[i]}/>
            );
        }
      return (
        <div>
            <div class="d-flex flex-wrap d-flex justify-content-center imgnextbg">
                {img}
            </div>
            <div class="belowimgnextbg">
                <div class="d-flex justify-content-center">
                    <button class="btn btn-outline-dark btn-sm mt-2 mb-2 mr-1" onClick={() => this.showTemplate1(counttemplate1++)}>Template1</button>
                    <button class="btn btn-outline-dark btn-sm mt-2 mb-2" onClick={() => this.showTemplate2(counttemplate2++)}>Template2</button>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <button class="btn btn-outline-dark btn-sm mt-2 mb-2 mr-2" onClick={this.goBack}>Back</button>
                <button class="btn btn-outline-dark btn-sm mt-2 mb-2" onClick={this.goSave}>Save</button>
  
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
        let query = ""
        let queryhl = ""
        let i = 0
        for (i = 0; i < 4; i++)
        {
            if (e.path[1].childNodes[3].options[i].selected == true)
            {
                query = e.path[1].childNodes[3].options[i].value
            }
        }
        let j = 0
        for (j = 0; j < 3; j++)
        {
            if (e.path[1].childNodes[5].options[j].selected == true)
            {
                queryhl = e.path[1].childNodes[5].options[j].value
            }
        }
        let orderby = "asc"
        if (query != "None")
        {
            orderby = "&order_by=" + query
        }
        
       let orderdirection = "&order_direction=" + queryhl
    
        let address = document.querySelector('#walletaddress').value
        
        fetch(`https://api.opensea.io/api/v1/assets?owner=${address}${orderby}${orderdirection}&offset=0&limit=20`)
      
        .then(response => response.json())
    
         .then(data => {
            document.querySelector('#askforwallet').hidden = true;
            ReactDOM.render(<ShowNfts data={data}/>, document.querySelector('#shownfts'));
            
        });
    });
  });
  export {
    ShowTemplateOne,
    ShowTemplateTwo,
  }