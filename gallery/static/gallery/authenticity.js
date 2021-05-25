var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var AnotherCheckClass = function (_React$Component) {
    _inherits(AnotherCheckClass, _React$Component);

    function AnotherCheckClass(props) {
        _classCallCheck(this, AnotherCheckClass);

        return _possibleConstructorReturn(this, (AnotherCheckClass.__proto__ || Object.getPrototypeOf(AnotherCheckClass)).call(this, props));
    }

    _createClass(AnotherCheckClass, [{
        key: 'render',
        value: function render() {
            var char = this.props.source.charAt(8);
            if (this.props.source.charAt(8) == "s") {
                if (this.props.source.indexOf('.jpg') == 85) {
                    char = "l";
                }
            }
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { id: 'wilachatww', name: 'imgdiv', value: 'false', className: 'box' },
                    char == "l" ? React.createElement('img', { 'class': 'nftimg', src: this.props.source }) : React.createElement(
                        'video',
                        { src: this.props.source, muted: true, autoplay: 'autoplay', loop: 'true', 'class': 'nftvdo' },
                        React.createElement('source', { src: this.props.source, type: 'video/mp4' })
                    )
                )
            );
        }
    }]);

    return AnotherCheckClass;
}(React.Component);

var CheckClass = function (_React$Component2) {
    _inherits(CheckClass, _React$Component2);

    function CheckClass(props) {
        _classCallCheck(this, CheckClass);

        return _possibleConstructorReturn(this, (CheckClass.__proto__ || Object.getPrototypeOf(CheckClass)).call(this, props));
    }

    _createClass(CheckClass, [{
        key: 'render',
        value: function render() {

            var array = [];
            var imageinfo_src = "";
            if (this.props.checky == "true") {
                var data = this.props.data;

                data = data.replaceAll("'", '"');
                data = JSON.parse(data);
                var i = 0;
                for (i = 0; i < data['everydata'].length; i++) {

                    for (var w = 0; w < data['everydata'][i]['imageinfo'].length; w++) {
                        var checker = 0;
                        for (var o = 0; o < this.props.adddata.length; o++) {
                            if (this.props.adddata[o][1] != null) {
                                if (this.props.adddata[o][1] == data['everydata'][i]['imageinfo'][w]['src']) {
                                    checker = 1;
                                }
                            } else {
                                if (this.props.adddata[o][0] == data['everydata'][i]['imageinfo'][w]['src']) {

                                    checker = 1;
                                }
                            }
                        }
                        if (checker != 1) {
                            imageinfo_src = data['everydata'][i]['imageinfo'][w]['src'];
                            array.push(React.createElement(AnotherCheckClass, {
                                source: imageinfo_src }));
                        }
                    }
                }
            }

            var authen = "/authenticity";

            return React.createElement(
                'div',
                null,
                this.props.checky == "true" ? React.createElement(
                    'div',
                    null,
                    array == "" ? React.createElement(
                        'div',
                        { 'class': 'authengiant d-flex justify-content-center' },
                        React.createElement(
                            'h4',
                            { 'class': 'authenh4' },
                            'THE OWNER STILL OWNS EVERY NFT IN THE GALLERY!'
                        ),
                        React.createElement('img', { 'class': 'testingtestimgg mt-5', src: 'https://nerdschalk.com/wp-content/uploads/2020/08/pogger-1.png' })
                    ) : React.createElement(
                        'div',
                        { 'class': 'authengiant d-flex justify-content-center' },
                        React.createElement(
                            'h4',
                            { 'class': 'authenh4' },
                            'THESE ARE THE USER DISPLAY IN GALLERY THAT THEY DONT OWE'
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'd-flex justify-content-around d-flex flex-wrap' },
                            array
                        )
                    )
                ) : React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { 'class': 'authengiantt d-flex justify-content-center' },
                        React.createElement(
                            'h4',
                            { 'class': 'authenh4' },
                            'No user with the wallet address'
                        )
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center' },
                        React.createElement(
                            'a',
                            { 'class': 'btn btn-outline-dark btn-sm', href: authen },
                            'Back'
                        )
                    )
                )
            );
        }
    }]);

    return CheckClass;
}(React.Component);

var AuthenticityCheck = function (_React$Component3) {
    _inherits(AuthenticityCheck, _React$Component3);

    function AuthenticityCheck(props) {
        _classCallCheck(this, AuthenticityCheck);

        var _this3 = _possibleConstructorReturn(this, (AuthenticityCheck.__proto__ || Object.getPrototypeOf(AuthenticityCheck)).call(this, props));

        _this3.checkAuthen = _this3.checkAuthen.bind(_this3);

        return _this3;
    }

    _createClass(AuthenticityCheck, [{
        key: 'checkAuthen',
        value: function checkAuthen(e) {

            document.querySelector('#loading').hidden = false;

            console.log("what");
            console.log(e);
            var walletaddress = e.target.offsetParent.children[1].children[0].children[0].children[1].children[0].value;
            var getcooked = getCookie('csrftoken');
            document.querySelector('#authenticityid').hidden = true;

            fetch('/realcreateapi/1', {
                method: 'PUT',
                headers: { 'X-CSRFToken': getcooked },
                body: JSON.stringify({
                    edit: "authen",
                    wallet: walletaddress
                })
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                document.querySelector('#loading').hidden = true;

                if (data == "error") {

                    console.log("niceee");
                    //  alert("No user with the wallet address");


                    // window.location.href = "authenticity";
                    ReactDOM.render(React.createElement(CheckClass, { data: data['galleryinfo'], gallerytitle: data['gallerytitle'],
                        gallerybgimage: data['gallerybgimage'], gallerybgcolor: data['gallerybgcolor'], adddata: data['adddata'], checky: 'false' }), document.querySelector('#checkingwallet'));
                } else {
                    ReactDOM.render(React.createElement(CheckClass, { data: data['galleryinfo'], gallerytitle: data['gallerytitle'],
                        gallerybgimage: data['gallerybgimage'], gallerybgcolor: data['gallerybgcolor'], adddata: data['adddata'], checky: 'true' }), document.querySelector('#checkingwallet'));
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            document.querySelector('#navauthen').style.color = "salmon";

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { id: 'formtocheck', 'class': 'd-flex justify-content-center mb-3' },
                    React.createElement(
                        'h4',
                        { 'class': 'authenh4' },
                        'Check whether the gallery maker really owns the nfts or not!'
                    )
                ),
                this.props.error == "true" ? React.createElement(
                    'div',
                    { id: 'formtocheck', 'class': 'd-flex justify-content-center mb-3' },
                    React.createElement(
                        'h4',
                        { 'class': 'authenh4' },
                        'No User With Wallet Address Found'
                    )
                ) : null,
                React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-center' },
                    React.createElement('input', { 'class': 'form-control w-25', placeholder: 'Wallet Address' }),
                    React.createElement(
                        'button',
                        { onClick: this.checkAuthen, 'class': 'btn btn-outline-dark btn-sm ml-2' },
                        'Check'
                    )
                )
            );
        }
    }]);

    return AuthenticityCheck;
}(React.Component);

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#authenticityid').hidden = false;
    document.querySelector('#loading').hidden = true;

    ReactDOM.render(React.createElement(AuthenticityCheck, { error: 'false' }), document.querySelector('#authenticityid'));
});