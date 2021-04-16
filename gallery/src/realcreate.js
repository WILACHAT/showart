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

class EachNft extends React.Component{
    constructor(props){
        super(props);
        this.chooseNft = this.chooseNft.bind(this);
        let arrayurl = [];
        this.state = {
            arrayurl: arrayurl
        }
      }
      chooseNft(e){
        this.setState({
            arrayurl:this.state.arrayurl.push(this.props.imageurl)
        })
        console.log(this.props.imageurl)
        console.log("this is array", this.state.arrayurl)
            
      }
      render() {
          console.log("animation url", this.props.animationurl)
          console.log("img url", this.props.imageurl)
          let animationurl =  this.props.animationurl 
          let index = 65

          if (animationurl != null)
          { 
            index = animationurl.indexOf( '.gltf' );
          }
        
          return (
            <div>
                <div class="box" onClick={this.chooseNft}>
                    {index == 65 ? <img class="nftimg" src={this.props.imageurl}></img>: <video autoplay="autoplay" loop="true" class="nftvdo"><source src={this.props.animationurl} type = "video/mp4"></source></video>}                  
                </div>
                <div class="d-flex justify-content-center">
                    <a href = {index == 65 ? this.props.imageurl: this.props.animationurl} target="_blank" class="btn btn-outline-dark btn-sm">view</a>
                </div>
            </div>
          )
      }
  }
  class ShowNfts extends React.Component {
    constructor(props) {
        super(props);
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
            <h1></h1>
        <div class="d-flex justify-content-around d-flex flex-wrap">
            {img}
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
        console.log(`https://api.opensea.io/api/v1/assets?owner=${address}${orderby}${orderdirection}&offset=0&limit=50`)
        
        fetch(`https://api.opensea.io/api/v1/assets?owner=${address}${orderby}${orderdirection}&offset=0&limit=50`)
      
        .then(response => response.json())
    
         .then(data => {
            document.querySelector('#askforwallet').hidden = true;
            ReactDOM.render(<ShowNfts data={data}/>, document.querySelector('#shownfts'));
            
        });
    });
});
            
      
        
          