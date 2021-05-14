var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*randomwallet address to use
0xce9b6da25e5b9578305f9c593c670736754ed4c5
0x923af7b3a0a65c514c09a68d4ef331cec93d451a
0x00bd53913a82f36e5796ed7d30f1b2a15cd31c20
0x50dd57f50a17d57304e7a4f262da30beb31c2e87
0x3f16d081113c613743ce1d7da6858dc4d26352c3
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

var AnotherDivNewClass = function (_React$Component) {
    _inherits(AnotherDivNewClass, _React$Component);

    function AnotherDivNewClass(props) {
        _classCallCheck(this, AnotherDivNewClass);

        var _this = _possibleConstructorReturn(this, (AnotherDivNewClass.__proto__ || Object.getPrototypeOf(AnotherDivNewClass)).call(this, props));

        _this.hiddenOverlay = _this.hiddenOverlay.bind(_this);
        _this.imgvdo = _this.imgvdo.bind(_this);

        _this.state = {
            whatisshown: ""

        };
        return _this;
    }

    _createClass(AnotherDivNewClass, [{
        key: 'hiddenOverlay',
        value: function hiddenOverlay() {
            if (document.querySelector('#vdovdovdo') != null) {
                document.querySelector('#vdovdovdo').muted = true;
            }

            console.log("should at least print something");
            console.log("super new vlass", document.querySelector('#supernewclass'));
            document.querySelector('#supernewclass').hidden = true;
        }
    }, {
        key: 'imgvdo',
        value: function imgvdo() {
            if (this.props.checkifurl != "image") {
                if (document.querySelector('#vdovdovdo').muted == true) {
                    document.querySelector('#vdovdovdo').muted = false;
                } else {
                    document.querySelector('#vdovdovdo').muted = true;
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            console.log("hex", this.props.hex);
            return React.createElement(
                'div',
                { id: 'overlayrc', style: { backgroundImage: this.props.bgimage, backgroundColor: this.props.bgcolor } },
                React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-end mr-2' },
                    React.createElement(
                        'button',
                        { id: 'overlaybutton', onClick: this.hiddenOverlay, 'class': 'fluke btn btn-outline-light btn-sm mt-2 mb-2' },
                        'Go Back'
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { id: 'forimagevdo', onClick: this.imgvdo, 'class': 'mt-5 d-flex justify-content-center' },
                        this.props.checkifurl == "image" ? React.createElement('img', { 'class': 'testingtestimgg', src: this.props.src }) : React.createElement(
                            'video',
                            { id: 'vdovdovdo', src: this.props.src, muted: true, autoplay: 'autoplay', loop: 'true', 'class': 'nftvdoo' },
                            React.createElement('source', { src: this.props.src, type: 'video/mp4' })
                        )
                    ),
                    this.props.title != "" || this.props.des != "" ? React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center' },
                        React.createElement(
                            'div',
                            { 'class': 'showtitledes mt-4 mb-2 bd-highlight', style: { backgroundColor: this.props.hex } },
                            this.props.title != "" ? React.createElement(
                                'p',
                                { 'class': 'ml-2 mr-2' },
                                'Title:',
                                React.createElement('br', null),
                                React.createElement(
                                    'h6',
                                    { 'class': 'yuptitle' },
                                    this.props.title
                                )
                            ) : null,
                            this.props.des != "" ? React.createElement(
                                'p',
                                { 'class': 'ml-2 mr-2' },
                                'Description:',
                                React.createElement('br', null),
                                React.createElement(
                                    'h6',
                                    { 'class': 'yuptitle' },
                                    this.props.des
                                )
                            ) : null
                        )
                    ) : null
                )
            );
        }
    }]);

    return AnotherDivNewClass;
}(React.Component);

var DivNewClass = function (_React$Component2) {
    _inherits(DivNewClass, _React$Component2);

    function DivNewClass(props) {
        _classCallCheck(this, DivNewClass);

        var _this2 = _possibleConstructorReturn(this, (DivNewClass.__proto__ || Object.getPrototypeOf(DivNewClass)).call(this, props));

        _this2.t2ImageOne = _this2.t2ImageOne.bind(_this2);
        _this2.deleteImgDiv = _this2.deleteImgDiv.bind(_this2);
        _this2.goIntoImage = _this2.goIntoImage.bind(_this2);
        _this2.checkDesArea = _this2.checkDesArea.bind(_this2);
        _this2.checkTitleArea = _this2.checkTitleArea.bind(_this2);

        var src = "";
        var des = "";
        var title = "";
        var border = "";
        var thisisfromprofile = "false";
        if (_this2.props.src != undefined) {
            src = _this2.props.src;
            des = _this2.props.des;
            title = _this2.props.title;
            border = "";
            thisisfromprofile = "true";
        }
        _this2.state = {
            url: src,
            border: border,
            title: title,
            des: des,
            fromprofile: thisisfromprofile,
            hexy: "",
            showtitledes: React.createElement(
                'div',
                { 'class': 'd-flex justify-content-center mt-3' },
                React.createElement('button', { onClick: _this2.showTitleDes, 'class': 'btn btn-outline-success btn-sm' })
            )

        };
        return _this2;
    }

    _createClass(DivNewClass, [{
        key: 'checkDesArea',
        value: function checkDesArea(e) {
            if (e.target.value.length > 0) {
                this.setState({ des: e.target.value });
            } else {
                this.setState({ des: "" });
            }
        }
    }, {
        key: 'checkTitleArea',
        value: function checkTitleArea(e) {
            if (e.target.value.length > 0) {
                this.setState({ title: e.target.value });
            } else {
                this.setState({ title: "" });
            }
        }
    }, {
        key: 't2ImageOne',
        value: function t2ImageOne() {
            console.log("going inside like a pro");
            this.setState({
                url: document.querySelector('#saveurl').value,
                border: null

            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            console.log("this.props.bgimage", this.props.bgimage);
            if (this.props.bgimage != undefined) {

                var bgimagesplit1 = this.props.bgimage.split('url(');
                console.log("bgimagesplit1", bgimagesplit1);
                var bgimagesplit2 = bgimagesplit1[1].split(')');
                var bgimagesplitcheck = bgimagesplit2[0].split('/');
                console.log("bgimagesplit2", bgimagesplit2);

                console.log("bgimagesplitcheck", bgimagesplitcheck);

                if (bgimagesplitcheck[3] != "") {
                    console.log("in if bgimagesplit");
                    var fac = new FastAverageColor();
                    fac.getColorAsync(bgimagesplit2[0]).then(function (color) {
                        function componentToHex(c) {
                            var hex = c.toString(16);
                            return hex.length == 1 ? "0" + hex : hex;
                        }
                        color = color.rgb;
                        var rgb = color.replace(/[^\d,]/g, '').split(',');
                        var firstcolor = rgb[0] - 30;
                        var secondcolor = rgb[1] - 30;
                        var thirdcolor = rgb[2] - 30;
                        if (firstcolor <= 30) {
                            console.log("wpw1");
                            firstcolor = parseInt(rgb[0]) + 80;
                        }

                        if (secondcolor <= 50) {
                            console.log("wpw2");

                            secondcolor = parseInt(rgb[1]) + 90;
                        }

                        if (thirdcolor <= 50) {
                            console.log("wpw3");

                            thirdcolor = parseInt(rgb[2]) + 90;
                        }

                        var hex = "#" + componentToHex(firstcolor) + componentToHex(secondcolor) + componentToHex(thirdcolor);
                        _this3.setState({
                            hexy: hex
                        });
                        // container.style.backgroundColor = color.rgba;
                        // container.style.color = color.isDark ? '#fff' : '#000';
                    });
                }
            }
            if (this.props.src != undefined) {
                var componentToHex = function componentToHex(c) {
                    var hex = c.toString(16);
                    return hex.length == 1 ? "0" + hex : hex;
                };

                var rgb = this.props.bgcolor.replace(/[^\d,]/g, '').split(',');
                var firstcolor = rgb[0] - 30;
                var secondcolor = rgb[1] - 30;
                var thirdcolor = rgb[2] - 30;
                if (firstcolor <= 30) {
                    console.log("wpw1");
                    firstcolor = parseInt(rgb[0]) + 80;
                }

                if (secondcolor <= 50) {
                    console.log("wpw2");

                    secondcolor = parseInt(rgb[1]) + 90;
                }

                if (thirdcolor <= 50) {
                    console.log("wpw3");

                    thirdcolor = parseInt(rgb[2]) + 90;
                }

                var hexyy = "#" + componentToHex(firstcolor) + componentToHex(secondcolor) + componentToHex(thirdcolor);
                this.setState({
                    hexy: hexyy
                });
            }
        }
    }, {
        key: 'goIntoImage',
        value: function goIntoImage(checkifurl, hexy) {
            console.log("this.state.url", this.state.url);
            console.log("this is checkifurl and i hope it works", checkifurl);
            document.querySelector('#supernewclass').hidden = false;

            ReactDOM.render(React.createElement(AnotherDivNewClass, { src: this.state.url, title: this.state.title, des: this.state.des,
                bgcolor: this.props.bgcolor, bgimage: this.props.bgimage, checkifurl: checkifurl, hex: hexy }), document.querySelector('#supernewclass'));
        }
    }, {
        key: 'deleteImgDiv',
        value: function deleteImgDiv(e) {
            e.target.parentElement.parentElement.remove();
            console.log(document.querySelector('#' + this.props.name).childNodes.length);
            if (document.querySelector('#' + this.props.name).childNodes.length == 1) {
                document.querySelector('#' + this.props.name).childNodes[0].className = "oneimage";
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var checkifurl = "video";
            if (this.state.url.charAt(8) == "l") {
                checkifurl = "image";
            }

            return React.createElement(
                'div',
                { id: 'wilachatww', name: 'imgdiv', value: 'false', className: 'threeimage' },
                React.createElement(
                    'div',
                    { id: 'oneinamillion', onClick: function onClick(e) {
                            return _this4.props.type != "profile" ? _this4.t2ImageOne(e) : _this4.goIntoImage(checkifurl, _this4.state.hexy);
                        }, 'class': 'divborder', style: { borderStyle: this.state.border } },
                    checkifurl == "image" ? React.createElement('img', { id: 'oneintwo', 'class': 'testingtestimgg', src: this.state.url }) : React.createElement(
                        'video',
                        { src: this.state.url, muted: true, autoplay: 'autoplay', loop: 'true', 'class': 'nftvdoo' },
                        React.createElement('source', { src: this.state.url, type: 'video/mp4' })
                    )
                ),
                this.props.type != "profile" ? React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-center mt-3' },
                    React.createElement('input', { 'class': 'form-control col-4', placeholder: 'Title of NFT', type: 'text', onChange: this.checkTitleArea, value: this.state.title })
                ) : null,
                this.props.type != "profile" ? React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-center mt-2' },
                    React.createElement('textarea', { 'class': 'form-control col-10', placeholder: 'Description of NFT', rows: '3', onChange: this.checkDesArea, value: this.state.des })
                ) : null,
                this.props.type != "profile" ? React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-center mt-2' },
                    React.createElement(
                        'button',
                        { 'class': 'btn btn-outline-dark btn-sm mt-2 mb-2', onClick: this.deleteImgDiv },
                        'X'
                    )
                ) : null
            );
        }
    }]);

    return DivNewClass;
}(React.Component);

var ShowTemplateTwo = function (_React$Component3) {
    _inherits(ShowTemplateTwo, _React$Component3);

    function ShowTemplateTwo(props) {
        _classCallCheck(this, ShowTemplateTwo);

        var _this5 = _possibleConstructorReturn(this, (ShowTemplateTwo.__proto__ || Object.getPrototypeOf(ShowTemplateTwo)).call(this, props));

        _this5.addImage = function (realid, e, classname) {
            console.log("is this the right thing?");
            console.log("check e", e);
            if (e.target.parentElement.parentElement.childNodes[1].childNodes != "") {
                if (e.target.parentElement.parentElement.childNodes[1].childNodes[0] != undefined) {
                    var i = 0;

                    if (e.target.parentElement.parentElement.childNodes[1].childNodes[0].className != undefined) {
                        for (i = 0; i < e.target.parentElement.parentElement.childNodes[1].childNodes.length; i++) {
                            e.target.parentElement.parentElement.childNodes[1].childNodes[i].className = classname;
                        }
                    }
                }
            }
            console.log("waker", e.target.parentElement.parentElement.childNodes[1].childNodes.length);
            if (e.target.parentElement.parentElement.childNodes[1].childNodes.length < 3) {

                var length = _this5.state.list.length + 1;
                _this5.setState({
                    imgdiv: React.createElement(DivNewClass, { classname: classname, name: realid })
                });

                _this5.setState(function (state) {
                    var list = state.list.concat(state.imgdiv);
                    return {
                        list: list
                    };
                });
            } else {
                window.alert("you can add a maximum of three images per template");
            }
        };

        _this5.addImage = _this5.addImage.bind(_this5);
        var array = [];
        var w = 0;
        var newlist = [];
        var imageinfo_src = "";
        var imageinfo_title = "";
        var imageinfo_des = "";
        var bgcolor = "";
        var bgimage = "";

        console.log("type", _this5.props.type);
        if (_this5.props.alldata != undefined) {
            bgcolor = _this5.props.alldata['bgcolor'];
            bgimage = _this5.props.alldata['bgimage'];
            var first = "url(/static/profile_pic/";
            var last = ")";
            bgimage = first + bgimage + last;
            for (w = 0; w < _this5.props.alldata['imageinfo'].length; w++) {
                imageinfo_src = _this5.props.alldata['imageinfo'][w]['src'];
                imageinfo_title = _this5.props.alldata['imageinfo'][w]['title'];
                imageinfo_des = _this5.props.alldata['imageinfo'][w]['des'];

                var newdivnewclass = React.createElement(DivNewClass, { src: imageinfo_src,
                    title: imageinfo_title, des: imageinfo_des, bgcolor: bgcolor,
                    bgimage: bgimage, type: _this5.props.type });
                newlist.push(newdivnewclass);
            }
        }

        _this5.state = {
            imgdiv: "",
            list: newlist,
            bgcolor: bgcolor,
            bgimage: bgimage

        };
        return _this5;
    }

    _createClass(ShowTemplateTwo, [{
        key: 'render',
        value: function render() {
            var _this6 = this;

            var classname = "";
            if (this.state.list.length + 1 == 1) {
                classname = "oneimage";
            } else {
                classname = "threeimage";
            }
            var realid = this.props.id + "forappend";

            return React.createElement(
                'div',
                null,
                this.props.type != "profile" ? React.createElement(
                    'div',
                    { id: 'boss', 'class': 'd-flex justify-content-center d-flex flex-wrap mt-2' },
                    React.createElement('input', { id: 'exampleColorInput', onChange: this.props.changeBgColor, type: 'color', 'class': 'changecolor form-control form-control-color col-1 mb-1', title: 'Choose your color' }),
                    React.createElement('input', { id: 'filetemplate1', onChange: this.props.imageTemplate, 'class': 'filetemplate1 form-control-file col-sm-1 mr-1', type: 'file' }),
                    React.createElement(
                        'button',
                        { id: 'addimagetemplate1', onClick: function onClick(e) {
                                return _this6.addImage(realid, e, classname);
                            }, 'class': 'deletetemplate btn btn-outline-dark btn-sm mr-2 mb-1' },
                        'Add Image'
                    ),
                    React.createElement(
                        'button',
                        { id: 'deletetemplate1', onClick: function onClick(e) {
                                return _this6.props.deleteTemplate(_this6.props.id, e);
                            }, 'class': 'deletetemplate btn btn-outline-danger btn-sm mr-2 mb-1' },
                        'X'
                    )
                ) : null,
                React.createElement(
                    'div',
                    { id: realid, name: this.props.id, className: 'd-flex justify-content-center template2 mr-4 d-flex flex-wrap', style: { backgroundImage: this.state.bgimage, backgroundColor: this.state.bgcolor } },
                    this.state.list.map(function (item) {
                        return item;
                    })
                )
            );
        }
    }]);

    return ShowTemplateTwo;
}(React.Component);

var SortNextImg = function (_React$Component4) {
    _inherits(SortNextImg, _React$Component4);

    function SortNextImg(props) {
        _classCallCheck(this, SortNextImg);

        var _this7 = _possibleConstructorReturn(this, (SortNextImg.__proto__ || Object.getPrototypeOf(SortNextImg)).call(this, props));

        var source = _this7.props.source;
        _this7.chooseImgTemplate = _this7.chooseImgTemplate.bind(_this7);

        return _this7;
    }

    _createClass(SortNextImg, [{
        key: 'chooseImgTemplate',
        value: function chooseImgTemplate(e) {
            var i = 0;
            if (e.target.id == "") {
                for (i = 0; i < e.target.parentElement.parentElement.parentElement.childNodes.length; i++) {
                    e.target.parentElement.parentElement.parentElement.childNodes[i].childNodes[0].style.backgroundColor = "";
                }

                if (e.target.parentElement.style.backgroundColor == "") {
                    e.target.parentElement.style.backgroundColor = "skyblue";
                } else if (e.target.parentElement.style.backgroundColor == "skyblue") {
                    e.target.parentElement.style.backgroundColor = "";
                }
            } else if (e.target.id == "wilachatww") {

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


var NextImg = function (_React$Component5) {
    _inherits(NextImg, _React$Component5);

    function NextImg(props) {
        _classCallCheck(this, NextImg);

        var _this8 = _possibleConstructorReturn(this, (NextImg.__proto__ || Object.getPrototypeOf(NextImg)).call(this, props));

        _this8.goBack = _this8.goBack.bind(_this8);
        _this8.showTemplate2 = _this8.showTemplate2.bind(_this8);
        _this8.changeBgColor = _this8.changeBgColor.bind(_this8);
        _this8.deleteTemplate = _this8.deleteTemplate.bind(_this8);
        _this8.checkGalleryTitleArea = _this8.checkGalleryTitleArea.bind(_this8);

        var bgimagetitle = "";
        var bgcolortitle = "";

        _this8.imageTemplate = _this8.imageTemplate.bind(_this8);
        _this8.goSave = _this8.goSave.bind(_this8);
        _this8.state = {
            gallerytitleedit: "",
            bgcolortitle: "",
            bgimagetitle: ""
        };

        var getcooked = getCookie('csrftoken');
        fetch('/realcreateapi/1', {
            method: 'PUT',
            headers: { 'X-CSRFToken': getcooked },
            body: JSON.stringify({
                edit: "edit"
            })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log("checking the data", data);
            var dataa = data['galleryinfo'];
            var gallerybgcolor = data['gallerybgcolor'];
            var gallerybgimage = data['gallerybgimage'];
            var gallerytitle = data['gallerytitle'];
            console.log("gallerytitle", gallerytitle);
            console.log("gallerybgimage", gallerybgimage);
            console.log("gallerybgcolor", gallerybgcolor);

            _this8.setState({
                gallerytitleedit: gallerytitle,
                bgcolortitle: gallerybgcolor,
                bgimagetitle: gallerybgimage
            });

            dataa = dataa.replaceAll("'", '"');
            dataa = JSON.parse(dataa);
            console.log("checking for new data", dataa);
            if (data != "") {
                var i = 0;
                for (i = 0; i < dataa['everydata'].length; i++) {
                    var count = i;
                    var newDiv = document.createElement("div");
                    newDiv.id = "saveddata" + count;
                    var id = "saveddata" + count;

                    document.querySelector('#showtemplates').append(newDiv);

                    ReactDOM.render(React.createElement(ShowTemplateTwo, { alldata: dataa['everydata'][i], type: 'edit', id: id, changeBgColor: _this8.changeBgColor,
                        deleteTemplate: _this8.deleteTemplate, imageTemplate: _this8.imageTemplate }), document.querySelector('#saveddata' + count));
                }
            }
        });

        return _this8;
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

            fetch('/realcreateapi/1', {
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
            document.querySelector('#navibarid').hidden = false;

            document.querySelector('#nextimg').hidden = true;
            document.querySelector('#shownfts').hidden = false;
            document.querySelector('#showtemplates').hidden = true;
        }
    }, {
        key: 'goSave',
        value: function goSave(e) {
            console.log("this again", e);
            var src = "";
            var title = "";
            var des = "";
            var bgcolor = "";
            var bgimage = "";
            var everydata = {};
            var tryeverydata = [];

            var gallerytitle = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[0].value;
            var gallerybgcolor = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].style.backgroundColor;
            var gallerybgimage = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].style.backgroundImage;

            var l = 0;

            var i = 0;

            for (i = 0; i < e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].childNodes.length - 1; i++) {
                var sectiondict = {};
                console.log("c1", e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0]);
                console.log("c2", e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1]);

                bgcolor = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].style.backgroundColor;
                sectiondict['bgcolor'] = bgcolor;
                bgimage = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].style.backgroundImage;
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

                for (j = 0; j < e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].childNodes.length; j++) {
                    var imageinfo = "imageinfo" + (j + 1);

                    var imageinfodict = {};

                    var _src = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].childNodes[j].childNodes[0].childNodes[0].src;

                    imageinfodict['src'] = _src;

                    var _title = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].childNodes[j].childNodes[1].childNodes[0].value;
                    imageinfodict['title'] = _title;

                    var _des = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[9].children[i].childNodes[0].childNodes[1].childNodes[j].childNodes[2].childNodes[0].value;
                    imageinfodict['des'] = _des;
                    console.log("this is image info dict", imageinfodict);
                    imagearray.push(imageinfodict);
                }
                sectiondict["imageinfo"] = imagearray;
            }

            console.log("everydata", everydata);
            console.log("try every data", tryeverydata);
            console.log("porno graffitti", gallerytitle);
            console.log("porno graffitti", gallerybgimage);
            console.log("porno graffitti", gallerybgcolor);

            var formData = new FormData();
            formData.append("everydata", everydata);
            var address = document.querySelector('#walletaddress').value;
            var getcooked = getCookie('csrftoken');
            var lastdata = {};
            lastdata["everydata"] = tryeverydata;
            fetch('/realsaveapi/' + address, {
                method: 'POST',
                headers: { 'X-CSRFToken': getcooked },
                body: JSON.stringify({
                    everydataa: lastdata,
                    gallerybgcolor: gallerybgcolor,
                    gallerybgimage: gallerybgimage,
                    gallerytitle: gallerytitle

                })

            });
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
        key: 'checkGalleryTitleArea',
        value: function checkGalleryTitleArea(e) {
            if (e.target.value.length > 0) {
                this.setState({ gallerytitleedit: e.target.value });
            } else {
                this.setState({ gallerytitleedit: "" });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this9 = this;

            var counttemplate1 = 0;
            var counttemplate2 = 0;
            console.log("STATE COLOR STATE IMAGE MOFOOOO");
            console.log("state image", this.state.bgimagetitle);
            console.log("state color", this.state.bgcolortitle);

            var img = [];
            var i = 0;
            if (this.props.type != "gallerycoverprofile") {
                for (i = 0; i < this.props.array.length; i++) {
                    img.push(React.createElement(SortNextImg, {
                        source: this.props.array[i] }));
                }
            }
            //creating new template just for title page and when to click
            return React.createElement(
                'div',
                null,
                this.props.type != "gallerycoverprofile" ? React.createElement(
                    'div',
                    { 'class': 'd-flex flex-wrap d-flex justify-content-center imgnextbg' },
                    img,
                    React.createElement(
                        'div',
                        { 'class': 'belowimgnextbg ' },
                        React.createElement(
                            'div',
                            { 'class': 'templateimgdiv d-flex justify-content-center' },
                            React.createElement(
                                'button',
                                { 'class': 'btn btn-outline-dark btn-sm mt-2 mb-2 mr-2', onClick: this.goBack },
                                'Back'
                            ),
                            React.createElement(
                                'a',
                                { href: 'http://127.0.0.1:8000/', target: '_blank', 'class': 'btn btn-outline-dark btn-sm mt-2 mb-2 mr-2' },
                                'How To'
                            ),
                            React.createElement(
                                'button',
                                { 'class': 'btn btn-outline-dark btn-sm mt-2 mb-2 mr-2', onClick: function onClick() {
                                        return _this9.showTemplate2(counttemplate2++);
                                    } },
                                'Add Template'
                            ),
                            React.createElement(
                                'button',
                                { 'class': 'btn btn-outline-dark btn-sm mt-2 mb-2', onClick: this.goSave },
                                'Save'
                            )
                        )
                    )
                ) : null,
                React.createElement(
                    'div',
                    { 'class': 'titlecolor' },
                    this.props.type != "gallerycoverprofile" ? React.createElement(
                        'div',
                        { id: 'bosss', 'class': 'd-flex justify-content-center d-flex flex-wrap' },
                        React.createElement('input', { id: 'exampleColorInput', onChange: this.changeBgColor, type: 'color', 'class': 'changecolor form-control form-control-color col-1 mb-1', title: 'Choose your color' }),
                        React.createElement('input', { id: 'filetemplate1', onChange: this.imageTemplate, 'class': 'filetemplate1 form-control-file col-sm-1 mr-1', type: 'file' })
                    ) : null,
                    React.createElement(
                        'div',
                        { id: this.props.type != "gallerycoverprofile" ? "nottitlecolor" : "titlecolor", className: 'd-flex justify-content-center template2 mr-4', style: this.props.type != "gallerycoverprofile" ? { backgroundImage: this.state.bgimagetitle, backgroundColor: this.state.bgcolortitle } : { backgroundImage: this.props.gallerybgimage, backgroundColor: this.props.gallerybgcolor } },
                        this.props.type != "gallerycoverprofile" ? React.createElement('input', { 'class': 'gallerytitleinput form-control col-4', placeholder: 'Title of Gallery', type: 'text', onChange: this.checkGalleryTitleArea, value: this.state.gallerytitleedit, required: true }) : React.createElement(
                            'h6',
                            { 'class': 'yuptitlee' },
                            this.props.gallerytitle
                        )
                    )
                )
            );
        }
    }]);

    return NextImg;
}(React.Component);

var EachNft = function (_React$Component6) {
    _inherits(EachNft, _React$Component6);

    function EachNft(props) {
        _classCallCheck(this, EachNft);

        var _this10 = _possibleConstructorReturn(this, (EachNft.__proto__ || Object.getPrototypeOf(EachNft)).call(this, props));

        _this10.chooseNft = _this10.chooseNft.bind(_this10);
        _this10.cancelNft = _this10.cancelNft.bind(_this10);
        var arrayurl = [];
        var animationurl = _this10.props.animationurl;
        var index = 65;

        if (animationurl != null) {
            index = animationurl.indexOf('.gltf');
        }
        _this10.state = {
            arrayurl: arrayurl,
            wholeimg: React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { id: 'wilachatww', name: 'imgdiv', value: 'false', className: 'box', onClick: _this10.chooseNft, 'data-selected': 'false' },
                    index == 65 ? React.createElement('img', { 'class': 'nftimg', src: _this10.props.imageurl }) : React.createElement(
                        'video',
                        { src: _this10.props.animationurl, muted: true, autoplay: 'autoplay', loop: 'true', 'class': 'nftvdo' },
                        React.createElement('source', { src: _this10.props.animationurl, type: 'video/mp4' })
                    )
                ),
                React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-center' },
                    React.createElement(
                        'a',
                        { href: index == 65 ? _this10.props.imageurl : _this10.props.animationurl, target: '_blank', 'class': 'btn btn-outline-dark btn-sm mt-1 mb-1' },
                        'view'
                    )
                )
            )
        };
        return _this10;
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

var ShowNfts = function (_React$Component7) {
    _inherits(ShowNfts, _React$Component7);

    function ShowNfts(props) {
        _classCallCheck(this, ShowNfts);

        var _this11 = _possibleConstructorReturn(this, (ShowNfts.__proto__ || Object.getPrototypeOf(ShowNfts)).call(this, props));

        _this11.selectedImg = _this11.selectedImg.bind(_this11);
        console.log("check for data inside to get the address to send back to api", _this11.props.data);
        return _this11;
    }

    _createClass(ShowNfts, [{
        key: 'selectedImg',
        value: function selectedImg(e) {
            document.querySelector('#navibarid').hidden = true;
            console.log("selected img", e);

            var i = 0;
            var array = [];
            console.log(e);
            for (i = 0; i < e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[1].childNodes.length; i++) {
                if (e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].dataset["selected"] == "true") {
                    array.push(e.target.offsetParent.childNodes[3].childNodes[3].childNodes[0].childNodes[1].childNodes[i].childNodes[0].childNodes[0].childNodes[0].src);
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
                    { id: 'whattodoinselectimg', 'class': 'd-flex justify-content-center' },
                    React.createElement(
                        'h1',
                        { 'class': 'whattodoinselectimg' },
                        'Select NFTs you would like to display in your gallery.'
                    )
                ),
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
    var clicked = window.location.pathname;
    if (clicked == "/realcreate") {
        document.querySelector('#navcreate').style.color = "salmon";
    }

    // do while u dont own an nfts (not the query)

    var wallclick = document.querySelector('#wallclick');
    wallclick.addEventListener('click', function (e) {
        console.log("what");
        var query = "";
        var i = 0;
        console.log("e", e);
        for (i = 0; i < e.path[1].childNodes[3].length; i++) {
            if (e.path[1].childNodes[3].options[i].selected == true) {
                query = e.path[1].childNodes[3].options[i].value;
            }
        }

        console.log("query", query);

        var address = document.querySelector('#walletaddress').value;

        fetch('https://api.opensea.io/api/v1/assets?owner=' + address + query + '&offset=0&limit=50').then(function (response) {
            return response.json();
        }).then(function (data) {
            document.querySelector('#askforwallet').hidden = true;
            ReactDOM.render(React.createElement(ShowNfts, { data: data }), document.querySelector('#shownfts'));
        });
    });
});
export { NextImg, ShowTemplateTwo };