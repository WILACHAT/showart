
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
  class AnotherCheckClass extends React.Component
  {
    constructor(props){
        super(props);
    }
    render()
    {
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
            <div id="wilachatww" name="imgdiv" value="false" className="box">
                {char == "l" ? <img class="nftimg" src={this.props.source}></img>: <video src={this.props.source} muted autoplay="autoplay" loop="true" class="nftvdo"><source src={this.props.source} type = "video/mp4"></source></video>}                  
            </div>
        </div>
        )
    }

    }
 
  class CheckClass extends React.Component{
    constructor(props){
        super(props);
    
        
    }
    render(){
        

     
  
      
      
        let array = []
        let imageinfo_src = ""
        if (this.props.checky == "true")
        {
            let data = this.props.data;
        
            data = data.replaceAll("'", '"');
            data = JSON.parse(data);
            let i = 0
            for (i = 0; i < data['everydata'].length; i++)
            {
                
                for(let w = 0; w < data['everydata'][i]['imageinfo'].length; w++)
                {
                let checker = 0
                for(let o = 0; o < this.props.adddata.length; o++)
                    {
                        if (this.props.adddata[o][1] != null)
                        {
                            if(this.props.adddata[o][1] == data['everydata'][i]['imageinfo'][w]['src'])
                            {
                                checker = 1;
                            }
                        }
                        else
                        {
                            if(this.props.adddata[o][0] == data['everydata'][i]['imageinfo'][w]['src'])
                            {

                                checker = 1;
                            }
                        }
                    }
                    if (checker != 1)
                    {
                        imageinfo_src = data['everydata'][i]['imageinfo'][w]['src']
                        array.push(<AnotherCheckClass 
                        source={imageinfo_src}/>)
                    }
                }
            }
    }
     
        
        const authen= "/authenticity";

        return (
            <div>
                {this.props.checky == "true" ? 
                <div>
                    {array == "" ? 
                    <div class="authengiant d-flex justify-content-center">
                        <h4 class="authenh4">THE OWNER STILL OWNS EVERY NFT IN THE GALLERY!</h4>
                    </div>: 
                    <div class="authengiant d-flex justify-content-center">
                        <h4 class="authenh4">THESE ARE THE USER DISPLAY IN GALLERY THAT THEY DONT OWE</h4> 
                        <div class="d-flex justify-content-around d-flex flex-wrap">{array}</div>
                    </div>}
                </div>
                :   
                <div>
                <div class="authengiantt d-flex justify-content-center">
                    <h4 class="authenh4">No user with the wallet address</h4> 
                </div>
                <div class="d-flex justify-content-center">
                    <a class="btn btn-outline-dark btn-sm" href={authen}>Back</a>
                </div>
                </div>}
            
         
            </div>
        )
      }
  }

  class AuthenticityCheck extends React.Component{
    constructor(props){
        super(props);
        this.checkAuthen = this.checkAuthen.bind(this);
   
       
    }
    checkAuthen(e)
    {

        document.querySelector('#loading').hidden = false


        console.log("what")
        console.log(e)
        let walletaddress = e.target.offsetParent.children[1].children[0].children[0].children[1].children[0].value
        const getcooked = getCookie('csrftoken')
        document.querySelector('#authenticityid').hidden = true

        fetch(`/realcreateapi/1`, {
                method: 'PUT',
                headers:{'X-CSRFToken': getcooked},
                body: JSON.stringify({
                    edit:"authen",
                    wallet:walletaddress
                    })
            })
            .then(response => response.json())

            .then(data => {
                document.querySelector('#loading').hidden = true


                if (data == "error"){

                    console.log("niceee")
                  //  alert("No user with the wallet address");

                    
                   // window.location.href = "authenticity";
                    ReactDOM.render(<CheckClass data={data['galleryinfo']} gallerytitle={data['gallerytitle']}
                    gallerybgimage={data['gallerybgimage']} gallerybgcolor={data['gallerybgcolor']} adddata={data['adddata']} checky="false"/>, document.querySelector('#checkingwallet'));

                }
                else{
                    ReactDOM.render(<CheckClass data={data['galleryinfo']} gallerytitle={data['gallerytitle']}
                    gallerybgimage={data['gallerybgimage']} gallerybgcolor={data['gallerybgcolor']} adddata={data['adddata']} checky="true"/>, document.querySelector('#checkingwallet'));
                }
            });
        
    }
        

    render(){
        document.querySelector('#navauthen').style.color = "salmon";

      return (
        <div>
            <div id="formtocheck" class="d-flex justify-content-center mb-3">    
                <h4 class="authenh4">Check whether the gallery maker really owns the nfts or not!</h4>
            </div>
            {this.props.error == "true" ? 
            <div id="formtocheck" class="d-flex justify-content-center mb-3">
                <h4 class="authenh4">No User With Wallet Address Found</h4>
            </div>:null}
             <div class="d-flex justify-content-center">
                <input class="form-control w-25"placeholder="Wallet Address"></input>
                <button onClick={this.checkAuthen} class="btn btn-outline-dark btn-sm ml-2">Check</button>
            </div>
        </div>
      )
    }
}



document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#authenticityid').hidden = false
    document.querySelector('#loading').hidden = true


    ReactDOM.render(<AuthenticityCheck error="false"/>, document.querySelector('#authenticityid'));
  });
