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
      }
      render() {
 
          return (
            <div class={this.props.user_id == this.props.curuser ? "container border border-black rounded post_style" : "container border border-black rounded post_style_noedit"} >
                <img src={this.props.imageurl} width="500" height="300"></img>
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
            console.log("waanandfkds")
            console.log(this.props.data["assets"])
            for (let i = 0; i < this.props.data["assets"].length; i++)
            {
                counter.push(counterr)
                counterr = counterr + 1;
                console.log("waan")
                let imageurl = this.props.data["assets"][i]["image_url"]
                img.push(imageurl)
                console.log(imageurl)
                
                img.push(
                    <EachNft imageurl={this.props.data["assets"][i]["image_url"]}/>
                  );
            }
            console.log(img)
            console.log(counter)
       
      return (
        <div>
            <tbody> {img} </tbody>
        </div>
        );
    }
  }


document.addEventListener('DOMContentLoaded', function() {

    // do while u dont own an nfts
    console.log("waan")
    let wallclick = document.querySelector('#wallclick')
    wallclick.addEventListener('click', () => {
        let address = document.querySelector('#walletaddress').value
        console.log("address", address)

       // fetch(`https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=100`)
        fetch(`https://api.opensea.io/api/v1/collections?asset_owner=${address}&offset=0&limit=300`)
        //fetch(`/realcreateapi/${whatkind}/${clicked}/${pagination}`)

        .then(response => response.json())
    
         .then(data => {
            console.log(data)

            ReactDOM.render(<ShowNfts data={data}/>, document.querySelector('#shownfts'));
            // for (let i = 0; i < data["assets"].length; i++)
             //{
                // let imageurl = data["assets"][i]["image_url"]
                 //console.log(imageurl)
             //}
             
         });
    });
});
            
      
        
          