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

var ShowTemplateOne = function (_React$Component) {
    _inherits(ShowTemplateOne, _React$Component);

    function ShowTemplateOne(props) {
        _classCallCheck(this, ShowTemplateOne);

        var _this = _possibleConstructorReturn(this, (ShowTemplateOne.__proto__ || Object.getPrototypeOf(ShowTemplateOne)).call(this, props));

        _this.tImageOne = _this.tImageOne.bind(_this);
        _this.state = {
            div1: React.createElement('div', null),
            div2: React.createElement('div', null),
            border1: "dotted",
            border2: "dotted"
        };

        return _this;
    }

    _createClass(ShowTemplateOne, [{
        key: 'tImageOne',
        value: function tImageOne(number, e) {
            console.log("waifu", e);
            var t1image1 = "t1-image1" + this.props.id;
            var t1vdo1 = "t1-vdo1" + this.props.id;
            var t1image2 = "t1-image2" + this.props.id;
            var t1vdo2 = "t1-vdo2" + this.props.id;
            var url = document.querySelector('#saveurl').value;

            if (url == "") {
                window.alert("You haven't choose a nft yet");
            } else if (url.charAt(8) == "l") {
                if (number == 1) {
                    this.setState({
                        div1: React.createElement('img', { id: t1image1, src: url, 'class': 'testingtestimgg' }),
                        border1: ""
                    });
                } else {
                    this.setState({
                        div2: React.createElement('img', { id: t1image2, src: url, 'class': 'testingtestimgg' }),
                        border2: ""
                    });
                }
            } else {
                console.log("check url", url);
                if (number == 1) {
                    this.setState({
                        div1: React.createElement(
                            'video',
                            { id: t1vdo1, src: url, muted: true, autoplay: 'autoplay', loop: 'true', 'class': 'nftvdoo' },
                            React.createElement('source', { src: url, type: 'video/mp4' })
                        ),
                        border1: ""
                    });
                } else {
                    this.setState({
                        div2: React.createElement(
                            'video',
                            { id: t1vdo2, src: url, muted: true, autoplay: 'autoplay', loop: 'true', 'class': 'nftvdoo' },
                            React.createElement('source', { src: url, type: 'video/mp4' })
                        ),
                        border2: ""
                    });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { 'class': 'margin120 d-flex justify-content-center d-flex flex-wrap mt-2' },
                    React.createElement('input', { onChange: this.props.changeBgColor, type: 'color', 'class': 'changecolor form-control form-control-color col-1 mb-1', id: 'exampleColorInput', title: 'Choose your color' }),
                    React.createElement('input', { onChange: this.props.imageTemplate, 'class': 'filetemplate1 form-control-file col-sm-1 mr-1', id: 'filetemplate1', type: 'file' }),
                    React.createElement('button', { onClick: function onClick(e) {
                            return _this2.props.deleteTemplate(_this2.props.id, e);
                        }, 'class': 'deletetemplate btn btn-danger mb-1' })
                ),
                React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-center template1 mr-4 d-flex flex-wrap' },
                    React.createElement(
                        'div',
                        { id: 'wilachatww', name: 'imgdiv', value: 'false', 'class': 'templates1' },
                        React.createElement(
                            'div',
                            { id: 'one', onClick: function onClick(e) {
                                    return _this2.tImageOne(1, e);
                                }, 'class': 'divborder', style: { borderStyle: this.state.border1 } },
                            this.state.div1
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'd-flex justify-content-center mt-3' },
                            React.createElement('input', { 'class': 'form-control col-4 ', placeholder: 'Title of NFT', type: 'text' })
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'd-flex justify-content-center mt-2' },
                            React.createElement('textarea', { 'class': 'form-control col-10', placeholder: 'Description of NFT', rows: '3' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { id: 'wilachatww', name: 'imgdiv', value: 'false', 'class': 'templates1' },
                        React.createElement(
                            'div',
                            { id: 'two', onClick: function onClick(e) {
                                    return _this2.tImageOne(2, e);
                                }, 'class': 'divborder', style: { borderStyle: this.state.border2 } },
                            this.state.div2
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'd-flex justify-content-center mt-3' },
                            React.createElement('input', { 'class': 'form-control col-4', placeholder: 'Title of NFT', type: 'text' })
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'd-flex justify-content-center mt-2' },
                            React.createElement('textarea', { 'class': 'form-control col-10', placeholder: 'Description of NFT', rows: '3' })
                        )
                    )
                )
            );
        }
    }]);

    return ShowTemplateOne;
}(React.Component);

var ShowTemplateTwo = function (_React$Component2) {
    _inherits(ShowTemplateTwo, _React$Component2);

    function ShowTemplateTwo(props) {
        _classCallCheck(this, ShowTemplateTwo);

        var _this3 = _possibleConstructorReturn(this, (ShowTemplateTwo.__proto__ || Object.getPrototypeOf(ShowTemplateTwo)).call(this, props));

        _this3.addImage = function (e) {
            var checkifurl = "";

            if (_this3.state.url.charAt(8) == "l") {
                checkifurl = "image";
            }

            _this3.setState({
                imgdiv: React.createElement(
                    'div',
                    { id: 'wilachatww', name: 'imgdiv', value: 'false', 'class': 'templates1' },
                    React.createElement(
                        'div',
                        { id: 'one', onClick: _this3.t2ImageOne, 'class': 'divborder', style: { borderStyle: "dotted" } },
                        checkifurl == "image" ? React.createElement('img', { 'class': 'testingtestimgg', src: _this3.state.url }) : React.createElement(
                            'video',
                            { src: _this3.state.url, muted: true, autoplay: 'autoplay', loop: 'true', 'class': 'nftvdoo' },
                            React.createElement('source', { src: _this3.state.url, type: 'video/mp4' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center mt-3' },
                        React.createElement('input', { 'class': 'form-control col-4', placeholder: 'Title of NFT', type: 'text' })
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center mt-2' },
                        React.createElement('textarea', { 'class': 'form-control col-10', placeholder: 'Description of NFT', rows: '3' })
                    )
                )
            });

            _this3.setState(function (state) {
                var list = state.list.concat(state.imgdiv);

                return {
                    list: list,
                    value: ''
                };
            });
        };

        _this3.t2ImageOne = _this3.t2ImageOne.bind(_this3);
        _this3.addImage = _this3.addImage.bind(_this3);

        var array = [];

        _this3.state = {
            border: "dotted",
            imgdiv: "",
            value: "",
            list: []
        };
        return _this3;
    }

    _createClass(ShowTemplateTwo, [{
        key: 't2ImageOne',
        value: function t2ImageOne(e) {
            console.log(e);

            this.setState({
                url: document.querySelector('#saveurl').value,
                border: ""

            });
            console.log("newurl", this.state.url);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-center d-flex flex-wrap  mt-2' },
                    React.createElement('input', { onChange: this.props.changeBgColor, type: 'color', 'class': 'changecolor form-control form-control-color col-1 mb-1', id: 'exampleColorInput', title: 'Choose your color' }),
                    React.createElement('input', { onChange: this.props.imageTemplate, id: 'filetemplate1', 'class': 'filetemplate1 form-control-file col-sm-1 mr-1', type: 'file' }),
                    React.createElement('button', { onClick: function onClick(e) {
                            return _this4.props.deleteTemplate(_this4.props.id, e);
                        }, 'class': 'deletetemplate btn btn-danger mb-1' }),
                    React.createElement(
                        'button',
                        { onClick: function onClick(e) {
                                return _this4.addImage(_this4.props.id, e);
                            }, 'class': 'deletetemplate btn btn-danger mb-1' },
                        'Add Image'
                    )
                ),
                React.createElement(
                    'div',
                    { id: 'forappend', 'class': 'd-flex justify-content-center template2 mr-4 d-flex flex-wrap' },
                    this.state.list.map(function (item) {
                        return item;
                    })
                )
            );
        }
    }]);

    return ShowTemplateTwo;
}(React.Component);

var SortNextImg = function (_React$Component3) {
    _inherits(SortNextImg, _React$Component3);

    function SortNextImg(props) {
        _classCallCheck(this, SortNextImg);

        var _this5 = _possibleConstructorReturn(this, (SortNextImg.__proto__ || Object.getPrototypeOf(SortNextImg)).call(this, props));

        var source = _this5.props.source;
        _this5.chooseImgTemplate = _this5.chooseImgTemplate.bind(_this5);

        return _this5;
    }

    _createClass(SortNextImg, [{
        key: 'chooseImgTemplate',
        value: function chooseImgTemplate(e) {
            console.log(e);
            var i = 0;
            console.log("chekcecke", e.target.parentElement.parentElement.parentElement.childNodes.length);
            if (e.target.id == "") {
                console.log("not in id?");
                for (i = 0; i < e.target.parentElement.parentElement.parentElement.childNodes.length; i++) {
                    e.target.parentElement.parentElement.parentElement.childNodes[i].childNodes[0].style.backgroundColor = "";
                }
                console.log("check background color", e.target.parentElement.style.backgroundColor);

                if (e.target.parentElement.style.backgroundColor == "") {
                    e.target.parentElement.style.backgroundColor = "skyblue";
                } else if (e.target.parentElement.style.backgroundColor == "skyblue") {
                    e.target.parentElement.style.backgroundColor = "";
                }
            } else if (e.target.id == "wilachatww") {
                console.log("not in wilachat?");

                for (i = 0; i < e.target.parentElement.parentElement.childNodes.length; i++) {
                    e.target.parentElement.parentElement.childNodes[i].childNodes[0].style.backgroundColor = "";
                }

                if (e.target.parentElement.style.backgroundColor == "") {
                    e.target.style.backgroundColor = "skyblue";
                } else if (e.target.parentElement.style.backgroundColor == "skyblue") {
                    e.target.style.backgroundColor = "";
                }
            }

            var source = this.props.source;
            document.querySelector('#saveurl').value = source;
        }
    }, {
        key: 'render',
        value: function render() {
            document.querySelector('#nextimg').hidden = false;
            document.querySelector('#showtemplates').hidden = false;

            var char = this.props.source.charAt(8);

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { onClick: this.chooseImgTemplate, id: 'wilachatww', name: 'imgdiv', value: 'false', className: 'boxnext' },
                    char == "l" ? React.createElement('img', { 'class': 'nftimg', src: this.props.source }) : React.createElement(
                        'video',
                        { onClick: this.chooseImgTemplate, src: this.props.source, muted: true, autoplay: 'autoplay', loop: 'true', 'class': 'nftvdo' },
                        React.createElement('source', { src: this.props.source, type: 'video/mp4' })
                    )
                )
            );
        }
    }]);

    return SortNextImg;
}(React.Component);

//send delete + add background color function to template classes


var NextImg = function (_React$Component4) {
    _inherits(NextImg, _React$Component4);

    function NextImg(props) {
        _classCallCheck(this, NextImg);

        var _this6 = _possibleConstructorReturn(this, (NextImg.__proto__ || Object.getPrototypeOf(NextImg)).call(this, props));

        _this6.goBack = _this6.goBack.bind(_this6);
        _this6.showTemplate1 = _this6.showTemplate1.bind(_this6);
        _this6.showTemplate2 = _this6.showTemplate2.bind(_this6);
        _this6.changeBgColor = _this6.changeBgColor.bind(_this6);
        _this6.deleteTemplate = _this6.deleteTemplate.bind(_this6);

        _this6.imageTemplate = _this6.imageTemplate.bind(_this6);
        _this6.goSave = _this6.goSave.bind(_this6);

        return _this6;
    }

    _createClass(NextImg, [{
        key: 'changeBgColor',
        value: function changeBgColor(e) {
            console.log("waan");
            console.log(e);
            console.log("what what what what", document.querySelector('#exampleColorInput').value);
            var color = e.target.value;
            e.target.parentElement.childNodes[1].value = "";
            e.target.parentElement.parentElement.childNodes[1].style.backgroundImage = "";
            e.target.parentElement.parentElement.childNodes[1].style.backgroundColor = color;
        }
    }, {
        key: 'deleteTemplate',
        value: function deleteTemplate(id, e) {
            //without react might be wrong
            //ReactDOM.unmountComponentAtNode(document.querySelector(`#${id}`));
            document.querySelector('#' + id).remove();
        }
    }, {
        key: 'imageTemplate',
        value: function imageTemplate(e) {
            console.log("MOTHER FAKING CONFUSING");
            console.log("faking e liar", e);
            var fileInput = e.target.files[0];
            console.log("fileINput", fileInput);
            var formData = new FormData();
            formData.append("media", fileInput);
            var address = document.querySelector('#walletaddress').value;
            var getcooked = getCookie('csrftoken');

            fetch('/realcreateapi/' + address, {
                method: 'POST',
                headers: { 'X-CSRFToken': getcooked },
                body: formData
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log("ALIBABA IS SAVING THE WORLD WITH MORG SAN!", data);
                var first = "url(/static/profile_pic/";
                var last = ")";
                var source = first + data + last;
                console.log("source", source);
                e.target.parentElement.parentElement.childNodes[1].style.backgroundColor = "";
                e.target.parentElement.parentElement.childNodes[1].style.backgroundImage = source;
                console.log("morg x alibaba", e.target.parentElement.parentElement.childNodes[1]);
            });
        }
    }, {
        key: 'goBack',
        value: function goBack(e) {
            console.log("wtf");
            document.querySelector('#nextimg').hidden = true;
            document.querySelector('#shownfts').hidden = false;
            document.querySelector('#showtemplates').hidden = true;
        }
    }, {
        key: 'goSave',
        value: function goSave(e) {

            var src = "";
            var title = "";
            var des = "";
            var bgcolor = "";
            var bgimage = "";
            var everydata = {};
            var tryeverydata = [];

            var i = 0;
            for (i = 0; i < e.target.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes.length - 1; i++) {
                var section = "section" + (i + 1);

                var sectiondict = {};

                bgcolor = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes[i + 1].childNodes[0].childNodes[1].style.backgroundColor;
                sectiondict['bgcolor'] = bgcolor;
                bgimage = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes[i + 1].childNodes[0].childNodes[1].style.backgroundImage;
                console.log("just to make sure this is the bgimage", bgimage);

                //everydata[section] = sectiondict
                tryeverydata.push(sectiondict);

                if (bgimage != "") {
                    var check = bgimage.split('/');
                    console.log("change of heart", check);
                    var coh = check[3].split('"');
                    console.log("change of", coh);
                    sectiondict['bgimage'] = coh[0];
                } else {
                    sectiondict['bgimage'] = "";
                }

                var j = 0;
                var imagearray = [];

                for (j = 0; j < e.target.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes[i + 1].childNodes[0].childNodes[1].childNodes.length; j++) {
                    var imageinfo = "imageinfo" + (j + 1);

                    var imageinfodict = {};

                    var _src = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes[i + 1].childNodes[0].childNodes[1].childNodes[j].childNodes[0].childNodes[0].src;

                    imageinfodict['src'] = _src;

                    var _title = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes[i + 1].childNodes[0].childNodes[1].childNodes[j].childNodes[1].childNodes[0].value;
                    imageinfodict['title'] = _title;

                    var _des = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes[i + 1].childNodes[0].childNodes[1].childNodes[j].childNodes[2].childNodes[0].value;
                    imageinfodict['des'] = _des;
                    console.log("this is image info dict", imageinfodict);
                    imagearray.push(imageinfodict);
                }
                sectiondict["imageinfo"] = imagearray;
            }
            console.log("everydata", everydata);
            console.log("try every data", tryeverydata);

            var formData = new FormData();
            formData.append("everydata", everydata);
            var address = document.querySelector('#walletaddress').value;
            var getcooked = getCookie('csrftoken');

            fetch('/realsaveapi/' + address, {
                method: 'POST',
                headers: { 'X-CSRFToken': getcooked },
                body: JSON.stringify({
                    everydata: tryeverydata
                })

            });
        }
    }, {
        key: 'showTemplate1',
        value: function showTemplate1(count) {

            var newDiv = document.createElement("div");
            newDiv.id = "templatesidone" + count;
            var id = "templatesidone" + count;
            document.querySelector('#showtemplates').append(newDiv);
            ReactDOM.render(React.createElement(ShowTemplateOne, { id: id, changeBgColor: this.changeBgColor,
                deleteTemplate: this.deleteTemplate, imageTemplate: this.imageTemplate }), document.querySelector('#templatesidone' + count));
        }
    }, {
        key: 'showTemplate2',
        value: function showTemplate2(count) {
            var newDiv = document.createElement("div");
            newDiv.id = "templatesidtwo" + count;
            var id = "templatesidtwo" + count;

            document.querySelector('#showtemplates').append(newDiv);

            ReactDOM.render(React.createElement(ShowTemplateTwo, { id: id, changeBgColor: this.changeBgColor,
                deleteTemplate: this.deleteTemplate, imageTemplate: this.imageTemplate }), document.querySelector('#templatesidtwo' + count));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            var counttemplate1 = 0;
            var counttemplate2 = 0;

            var img = [];
            var i = 0;
            for (i = 0; i < this.props.array.length; i++) {
                img.push(React.createElement(SortNextImg, {
                    source: this.props.array[i] }));
            }
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { 'class': 'd-flex flex-wrap d-flex justify-content-center imgnextbg' },
                    img
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center' },
                        React.createElement(
                            'button',
                            { 'class': 'btn btn-outline-dark btn-sm mt-2 mb-2 mr-1', onClick: function onClick() {
                                    return _this7.showTemplate1(counttemplate1++);
                                } },
                            'Template1'
                        ),
                        React.createElement(
                            'button',
                            { 'class': 'btn btn-outline-dark btn-sm mt-2 mb-2', onClick: function onClick() {
                                    return _this7.showTemplate2(counttemplate2++);
                                } },
                            'Template2'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-center' },
                    React.createElement(
                        'button',
                        { 'class': 'btn btn-outline-dark btn-sm mt-2 mb-2 mr-2', onClick: this.goBack },
                        'Back'
                    ),
                    React.createElement(
                        'button',
                        { 'class': 'btn btn-outline-dark btn-sm mt-2 mb-2', onClick: this.goSave },
                        'Save'
                    )
                )
            );
        }
    }]);

    return NextImg;
}(React.Component);

var EachNft = function (_React$Component5) {
    _inherits(EachNft, _React$Component5);

    function EachNft(props) {
        _classCallCheck(this, EachNft);

        var _this8 = _possibleConstructorReturn(this, (EachNft.__proto__ || Object.getPrototypeOf(EachNft)).call(this, props));

        _this8.chooseNft = _this8.chooseNft.bind(_this8);
        _this8.cancelNft = _this8.cancelNft.bind(_this8);
        var arrayurl = [];
        var animationurl = _this8.props.animationurl;
        var index = 65;

        if (animationurl != null) {
            index = animationurl.indexOf('.gltf');
        }
        _this8.state = {
            arrayurl: arrayurl,
            wholeimg: React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { id: 'wilachatww', name: 'imgdiv', value: 'false', className: 'box', onClick: _this8.chooseNft, 'data-selected': 'false' },
                    index == 65 ? React.createElement('img', { 'class': 'nftimg', src: _this8.props.imageurl }) : React.createElement(
                        'video',
                        { src: _this8.props.animationurl, muted: true, autoplay: 'autoplay', loop: 'true', 'class': 'nftvdo' },
                        React.createElement('source', { src: _this8.props.animationurl, type: 'video/mp4' })
                    )
                ),
                React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-center' },
                    React.createElement(
                        'a',
                        { href: index == 65 ? _this8.props.imageurl : _this8.props.animationurl, target: '_blank', 'class': 'btn btn-outline-dark btn-sm mt-1 mb-1' },
                        'view'
                    )
                )
            )
        };
        return _this8;
    }

    _createClass(EachNft, [{
        key: 'chooseNft',
        value: function chooseNft(e) {
            var animationurl = this.props.animationurl;
            var index = 65;

            if (animationurl != null) {
                index = animationurl.indexOf('.gltf');
            }

            this.setState({
                wholeimg: React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { id: 'wilachatww', name: 'imgdiv', value: 'true', className: 'boxcolor', 'data-selected': 'true', onClick: this.cancelNft },
                        index == 65 ? React.createElement('img', { 'class': 'nftimg', src: this.props.imageurl }) : React.createElement(
                            'video',
                            { src: this.props.animationurl, muted: true, autoplay: 'autoplay', loop: 'true', 'class': 'nftvdo' },
                            React.createElement('source', { src: this.props.animationurl, type: 'video/mp4' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center' },
                        React.createElement(
                            'a',
                            { href: index == 65 ? this.props.imageurl : this.props.animationurl, target: '_blank', 'class': 'btn btn-outline-dark btn-sm mt-1 mb-1' },
                            'view'
                        )
                    )
                )
            });
        }
    }, {
        key: 'cancelNft',
        value: function cancelNft(e) {
            var animationurl = this.props.animationurl;
            var index = 65;

            if (animationurl != null) {
                index = animationurl.indexOf('.gltf');
            }

            this.setState({
                wholeimg: React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { id: 'wilachatww', name: 'imgdiv', className: 'box', 'data-selected': 'false', onClick: this.chooseNft },
                        index == 65 ? React.createElement('img', { 'class': 'nftimg', src: this.props.imageurl }) : React.createElement(
                            'video',
                            { src: this.props.animationurl, muted: true, autoplay: 'autoplay', loop: 'true', 'class': 'nftvdo' },
                            React.createElement('source', { src: this.props.animationurl, type: 'video/mp4' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center' },
                        React.createElement(
                            'a',
                            { href: index == 65 ? this.props.imageurl : this.props.animationurl, target: '_blank', 'class': 'btn btn-outline-dark btn-sm mt-1 mb-1' },
                            'view'
                        )
                    )
                )
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log("animation url", this.props.animationurl);
            console.log("img url", this.props.imageurl);
            return React.createElement(
                'div',
                null,
                this.state.wholeimg
            );
        }
    }]);

    return EachNft;
}(React.Component);

var ShowNfts = function (_React$Component6) {
    _inherits(ShowNfts, _React$Component6);

    function ShowNfts(props) {
        _classCallCheck(this, ShowNfts);

        var _this9 = _possibleConstructorReturn(this, (ShowNfts.__proto__ || Object.getPrototypeOf(ShowNfts)).call(this, props));

        _this9.selectedImg = _this9.selectedImg.bind(_this9);
        console.log("check for data inside to get the address to send back to api", _this9.props.data);
        return _this9;
    }

    _createClass(ShowNfts, [{
        key: 'selectedImg',
        value: function selectedImg(e) {
            var i = 0;
            var array = [];
            console.log(e);
            for (i = 0; i < e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[0].childNodes.length; i++) {
                if (e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].dataset["selected"] == "true") {
                    array.push(e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[0].childNodes[i].childNodes[0].childNodes[0].childNodes[0].src);
                }
            }
            if (array[0] != undefined) {

                // document.querySelector('#shownfts').style.visibility = 'hidden'
                document.querySelector('#shownfts').hidden = true;

                ReactDOM.render(React.createElement(NextImg, { array: array }), document.querySelector('#nextimg'));
            } else {
                window.alert("You need to select a nft before proceeding to create gallery");
            }
        }
    }, {
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
                React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-around d-flex flex-wrap' },
                    img
                ),
                React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-center' },
                    React.createElement(
                        'button',
                        { 'class': 'btn btn-outline-dark btn-sm mt-2 mb-2', onClick: this.selectedImg },
                        'Next'
                    )
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

        fetch('https://api.opensea.io/api/v1/assets?owner=' + address + orderby + orderdirection + '&offset=0&limit=20').then(function (response) {
            return response.json();
        }).then(function (data) {
            document.querySelector('#askforwallet').hidden = true;
            ReactDOM.render(React.createElement(ShowNfts, { data: data }), document.querySelector('#shownfts'));
        });
    });
});
export { ShowTemplateOne, ShowTemplateTwo };