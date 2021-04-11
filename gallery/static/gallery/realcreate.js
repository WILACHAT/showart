var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*randomwallet address to use
0xce9b6da25e5b9578305f9c593c670736754ed4c5
0x923af7b3a0a65c514c09a68d4ef331cec93d451a
0x00bd53913a82f36e5796ed7d30f1b2a15cd31c20
*/

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === name + '=') {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var EachNft = function (_React$Component) {
    _inherits(EachNft, _React$Component);

    function EachNft(props) {
        _classCallCheck(this, EachNft);

        return _possibleConstructorReturn(this, (EachNft.__proto__ || Object.getPrototypeOf(EachNft)).call(this, props));
    }

    _createClass(EachNft, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                { 'class': this.props.user_id == this.props.curuser ? "container border border-black rounded post_style" : "container border border-black rounded post_style_noedit" },
                React.createElement('img', { src: this.props.imageurl, width: '500', height: '300' })
            );
        }
    }]);

    return EachNft;
}(React.Component);

var ShowNfts = function (_React$Component2) {
    _inherits(ShowNfts, _React$Component2);

    function ShowNfts(props) {
        _classCallCheck(this, ShowNfts);

        return _possibleConstructorReturn(this, (ShowNfts.__proto__ || Object.getPrototypeOf(ShowNfts)).call(this, props));
    }

    _createClass(ShowNfts, [{
        key: 'render',
        value: function render() {
            var img = [];
            var counter = [];
            var counterr = 0;
            console.log("waanandfkds");
            console.log(this.props.data["assets"]);
            for (var i = 0; i < this.props.data["assets"].length; i++) {
                counter.push(counterr);
                counterr = counterr + 1;
                console.log("waan");
                var imageurl = this.props.data["assets"][i]["image_url"];
                img.push(imageurl);
                console.log(imageurl);

                img.push(React.createElement(EachNft, { imageurl: this.props.data["assets"][i]["image_url"] }));
            }
            console.log(img);
            console.log(counter);

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'tbody',
                    null,
                    ' ',
                    img,
                    ' '
                )
            );
        }
    }]);

    return ShowNfts;
}(React.Component);

document.addEventListener('DOMContentLoaded', function () {

    // do while u dont own an nfts
    console.log("waan");
    var wallclick = document.querySelector('#wallclick');
    wallclick.addEventListener('click', function () {
        var address = document.querySelector('#walletaddress').value;
        console.log("address", address);

        // fetch(`https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=100`)
        fetch('https://api.opensea.io/api/v1/collections?asset_owner=' + address + '&offset=0&limit=300')
        //fetch(`/realcreateapi/${whatkind}/${clicked}/${pagination}`)

        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);

            ReactDOM.render(React.createElement(ShowNfts, { data: data }), document.querySelector('#shownfts'));
            // for (let i = 0; i < data["assets"].length; i++)
            //{
            // let imageurl = data["assets"][i]["image_url"]
            //console.log(imageurl)
            //}
        });
    });
});