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

        var _this = _possibleConstructorReturn(this, (EachNft.__proto__ || Object.getPrototypeOf(EachNft)).call(this, props));

        _this.chooseNft = _this.chooseNft.bind(_this);
        var arrayurl = [];
        _this.state = {
            arrayurl: arrayurl
        };
        return _this;
    }

    _createClass(EachNft, [{
        key: 'chooseNft',
        value: function chooseNft(e) {
            this.setState({
                arrayurl: this.state.arrayurl.push(this.props.imageurl)
            });
            console.log(this.props.imageurl);
            console.log("this is array", this.state.arrayurl);
        }
    }, {
        key: 'render',
        value: function render() {
            console.log("animation url", this.props.animationurl);
            console.log("img url", this.props.imageurl);
            var animationurl = this.props.animationurl;
            var index = 65;

            if (animationurl != null) {
                index = animationurl.indexOf('.gltf');
            }

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { 'class': 'box', onClick: this.chooseNft },
                    index == 65 ? React.createElement('img', { 'class': 'nftimg', src: this.props.imageurl }) : React.createElement(
                        'video',
                        { autoplay: 'autoplay', loop: 'true', 'class': 'nftvdo' },
                        React.createElement('source', { src: this.props.animationurl, type: 'video/mp4' })
                    )
                ),
                React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-center' },
                    React.createElement(
                        'a',
                        { href: index == 65 ? this.props.imageurl : this.props.animationurl, target: '_blank', 'class': 'btn btn-outline-dark btn-sm' },
                        'view'
                    )
                )
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

            for (var i = 0; i < this.props.data["assets"].length; i++) {
                img.push(React.createElement(EachNft, { imageurl: this.props.data["assets"][i]["image_url"],
                    animationurl: this.props.data["assets"][i]["animation_url"] }));
            }

            return React.createElement(
                'div',
                null,
                React.createElement('h1', null),
                React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-around d-flex flex-wrap' },
                    img
                )
            );
        }
    }]);

    return ShowNfts;
}(React.Component);

document.addEventListener('DOMContentLoaded', function (e) {

    // do while u dont own an nfts (not the query)

    var wallclick = document.querySelector('#wallclick');
    wallclick.addEventListener('click', function (e) {
        var query = "";
        var queryhl = "";
        var i = 0;
        for (i = 0; i < 4; i++) {
            if (e.path[1].childNodes[3].options[i].selected == true) {
                query = e.path[1].childNodes[3].options[i].value;
            }
        }
        var j = 0;
        for (j = 0; j < 3; j++) {
            if (e.path[1].childNodes[5].options[j].selected == true) {
                queryhl = e.path[1].childNodes[5].options[j].value;
            }
        }
        var orderby = "asc";
        if (query != "None") {
            orderby = "&order_by=" + query;
        }

        var orderdirection = "&order_direction=" + queryhl;

        var address = document.querySelector('#walletaddress').value;
        console.log('https://api.opensea.io/api/v1/assets?owner=' + address + orderby + orderdirection + '&offset=0&limit=50');

        fetch('https://api.opensea.io/api/v1/assets?owner=' + address + orderby + orderdirection + '&offset=0&limit=50').then(function (response) {
            return response.json();
        }).then(function (data) {
            document.querySelector('#askforwallet').hidden = true;
            ReactDOM.render(React.createElement(ShowNfts, { data: data }), document.querySelector('#shownfts'));
        });
    });
});