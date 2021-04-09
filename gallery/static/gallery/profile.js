var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PostTable from './main.js';
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

var ProfileEdit = function (_React$Component) {
    _inherits(ProfileEdit, _React$Component);

    function ProfileEdit(props) {
        _classCallCheck(this, ProfileEdit);

        var _this = _possibleConstructorReturn(this, (ProfileEdit.__proto__ || Object.getPrototypeOf(ProfileEdit)).call(this, props));

        _this.sendEditPost = _this.sendEditPost.bind(_this);
        _this.showEditPost = _this.showEditPost.bind(_this);
        _this.cancel = _this.cancel.bind(_this);
        var contactgmail = _this.props.data["contactgmail"];
        var openseaurl = _this.props.data["openseaurl"];
        var profiledes = _this.props.data["profiledes"];
        var username = _this.props.data["username"];
        var profilepic = _this.props.data["profilepic"];

        console.log("username", username);

        var clicked = parseInt(window.location.pathname.split('/')[2]);
        console.log("just to check the profile pic", profilepic);
        if (contactgmail == null) {
            contactgmail = "contactgmail";
        }
        if (openseaurl == null) {
            openseaurl = "openseaurl";
        }
        if (profiledes == null) {
            profiledes = "profiledes";
        }
        if (profilepic == null) {
            profilepic = "/static/profile_pic/wallpaper.png";
        }
        var edit_button = _this.props.data["user"] == clicked ? React.createElement(
            'button',
            { type: 'button', name: 'edit_button', onClick: _this.showEditPost, className: 'loll btn btn-outline-dark btn-sm' },
            'edit'
        ) : null;

        console.log("contact gmail", contactgmail);
        console.log("opensea url", openseaurl);
        console.log("profile des", profiledes);

        _this.state = {
            username: username,
            profiledes: profiledes,
            openseaurl: openseaurl,
            contactgmail: contactgmail,
            profilepic: profilepic,
            edit: React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-center' },
                    React.createElement('img', { 'class': 'imgnoedit', src: profilepic })
                ),
                React.createElement(
                    'div',
                    { 'class': 'mb-2' },
                    React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center ml-6 mt-3 mb-3' },
                        React.createElement(
                            'h2',
                            { 'class': 'wow' },
                            username,
                            ' ',
                            edit_button
                        )
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center mb-3' },
                        React.createElement(
                            'h3',
                            { 'class': 'contactgmailcss ' },
                            contactgmail
                        )
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center mb-3' },
                        React.createElement(
                            'a',
                            { 'class': 'openseaurlcss', href: openseaurl },
                            openseaurl
                        )
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center' },
                        React.createElement(
                            'h3',
                            { 'class': 'profiledescss' },
                            profiledes
                        )
                    )
                )
            )

            //in the first set state it will only show the img cannot edit an only view image

        };

        return _this;
    }

    _createClass(ProfileEdit, [{
        key: 'showEditPost',
        value: function showEditPost(e) {
            console.log("in showEditPost", this.state.profiledes);
            this.setState({
                username: this.state.username,
                profiledes: this.state.profiledes,
                openseaurl: this.state.openseaurl,
                contactgmail: this.state.contactgmail,
                profilepic: this.state.profilepic,
                edit: React.createElement(EditPost, { profiledes: this.state.profiledes, openseaurl: this.state.openseaurl, contactgmail: this.state.contactgmail, profilepic: this.state.profilepic,
                    savePostHandler: this.sendEditPost, cancel: this.cancel })

            });
        }
    }, {
        key: 'sendEditPost',
        value: function sendEditPost(profiledes, contactgmail, openseaurl, profilepic) {
            var _this2 = this;

            var whatkind = "profile";
            var clicked = parseInt(window.location.pathname.split('/')[2]);
            var pagination = 1;
            console.log("profilepic wahaha", profilepic);

            var csrftoken = getCookie('csrftoken');
            fetch('/currentgalleryapi/' + whatkind + '/' + clicked + '/' + pagination, {
                method: 'POST',
                headers: { 'X-CSRFToken': csrftoken
                },
                body: JSON.stringify({
                    profiledes: profiledes,
                    contactgmail: contactgmail,
                    openseaurl: openseaurl
                })
            }).then(function (response) {
                return response.json();
            }).then(function (result) {
                console.log("result", result);
                if (result.error) {
                    console.log("Error");
                    _this2.setState({
                        profiledes: _this2.state.profiledes,
                        contactgmail: _this2.state.contactgmail,
                        openseaurl: _this2.state.openseaurl,
                        profilepic: _this2.state.profilepic,
                        edit: React.createElement(
                            'div',
                            { 'class': 'mb-4' },
                            React.createElement(
                                'div',
                                { 'class': 'd-flex justify-content-center ml-6 mt-3 mb-3' },
                                React.createElement(
                                    'h2',
                                    { 'class': 'wow' },
                                    username,
                                    ' ',
                                    edit_button
                                )
                            ),
                            React.createElement(
                                'div',
                                { 'class': 'd-flex justify-content-center mb-3' },
                                React.createElement(
                                    'h3',
                                    { 'class': 'contactgmailcss ' },
                                    contactgmail
                                ),
                                ' '
                            ),
                            ' ',
                            React.createElement(
                                'div',
                                { 'class': 'd-flex justify-content-center mb-3' },
                                React.createElement(
                                    'a',
                                    { 'class': 'openseaurlcss', href: openseaurl },
                                    openseaurl
                                )
                            ),
                            React.createElement(
                                'div',
                                { 'class': 'd-flex justify-content-center' },
                                React.createElement(
                                    'h3',
                                    { 'class': 'profiledescss' },
                                    profiledes
                                )
                            )
                        ),
                        error: React.createElement(
                            'div',
                            { className: 'alert alert-danger alert-dismissible fade show', role: 'alert' },
                            'Sorry. An error has occured.'
                        ),
                        like_button: _this2.state.like_button
                    });
                } else {
                    var _username = _this2.state.username;
                    var _edit_button = React.createElement(
                        'button',
                        { type: 'button', name: 'edit_button', onClick: _this2.showEditPost, className: 'loll btn btn-outline-dark btn-sm' },
                        'edit'
                    );
                    _this2.setState({
                        username: _username,
                        profiledes: profiledes,
                        contactgmail: contactgmail,
                        openseaurl: openseaurl,
                        profilepic: profilepic,
                        edit: React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'div',
                                { 'class': 'd-flex justify-content-center' },
                                React.createElement('img', { 'class': 'imgnoedit', src: profilepic })
                            ),
                            React.createElement(
                                'div',
                                { 'class': 'mb-2' },
                                React.createElement(
                                    'div',
                                    { 'class': 'd-flex justify-content-center ml-6 mt-3 mb-3' },
                                    React.createElement(
                                        'h2',
                                        { 'class': 'wow' },
                                        _username,
                                        ' ',
                                        _edit_button
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { 'class': 'd-flex justify-content-center mb-3' },
                                    React.createElement(
                                        'h3',
                                        { 'class': 'contactgmailcss ' },
                                        contactgmail
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { 'class': 'd-flex justify-content-center mb-3' },
                                    React.createElement(
                                        'a',
                                        { 'class': 'openseaurlcss', href: openseaurl },
                                        openseaurl
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { 'class': 'd-flex justify-content-center' },
                                    React.createElement(
                                        'h3',
                                        { 'class': 'profiledescss' },
                                        profiledes
                                    )
                                )
                            )
                        ),
                        error: null,
                        like_button: _this2.state.like_button
                    });
                }
            });
        }
    }, {
        key: 'cancel',
        value: function cancel(profilepic) {
            console.log("we will be testing profilepic", profilepic);
            var username = this.state.username;
            var edit_button = React.createElement(
                'button',
                { type: 'button', name: 'edit_button', onClick: this.showEditPost, className: 'loll btn btn-outline-dark btn-sm' },
                'edit'
            );
            var clicked = parseInt(window.location.pathname.split('/')[2]);
            var user = this.props.data["user"];

            console.log("canceling lts go", this.state.username);
            this.setState({
                username: this.state.username,
                profiledes: this.state.profiledes,
                contactgmail: this.state.contactgmail,
                openseaurl: this.state.openseaurl,
                profilepic: profilepic,
                edit: React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center' },
                        React.createElement('img', { 'class': 'imgnoedit', src: profilepic })
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'mb-2' },
                        React.createElement(
                            'div',
                            { 'class': 'd-flex justify-content-center ml-6 mt-3 mb-3' },
                            React.createElement(
                                'h2',
                                { 'class': 'wow' },
                                this.state.username,
                                ' ',
                                edit_button
                            )
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'd-flex justify-content-center mb-3' },
                            React.createElement(
                                'h3',
                                { 'class': 'contactgmailcss ' },
                                this.state.contactgmail
                            )
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'd-flex justify-content-center mb-3' },
                            React.createElement(
                                'a',
                                { 'class': 'openseaurlcss', href: this.state.openseaurl },
                                this.state.openseaurl
                            )
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'd-flex justify-content-center' },
                            React.createElement(
                                'h3',
                                { 'class': 'profiledescss' },
                                this.state.profiledes
                            )
                        )
                    )
                ),

                choosefile: React.createElement('input', { id: 'choosefile', 'class': 'choosefile', onChange: this.chooseFile, type: 'file' }),

                error: null,
                like_button: this.state.like_button

            });
        }
    }, {
        key: 'render',
        value: function render() {
            var clicked = parseInt(window.location.pathname.split('/')[2]);
            var user = this.props.data["user"];
            return React.createElement(
                'div',
                null,
                this.state.edit
            );
        }
    }]);

    return ProfileEdit;
}(React.Component);

var EditPost = function (_React$Component2) {
    _inherits(EditPost, _React$Component2);

    function EditPost(props) {
        _classCallCheck(this, EditPost);

        var _this3 = _possibleConstructorReturn(this, (EditPost.__proto__ || Object.getPrototypeOf(EditPost)).call(this, props));

        _this3.textInput = React.createRef();
        _this3.editPost = _this3.editPost.bind(_this3);
        _this3.editCancel = _this3.editCancel.bind(_this3);
        _this3.chooseFile = _this3.chooseFile.bind(_this3);
        _this3.checkTxtArea = _this3.checkTxtArea.bind(_this3);

        _this3.state = { profiledes: _this3.props.profiledes,
            contactgmail: _this3.props.contactgmail,
            openseaurl: _this3.props.openseaurl,
            profilepic: _this3.props.profilepic
        };

        return _this3;
    }

    _createClass(EditPost, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Code reference from https://reactjs.org/docs/refs-and-the-dom.html and https://gist.github.com/hogenishi/409ecbd07f7b86b7da205ad61210a275
            // Set the focus on the text input after the component was mounted.
            this.textInput.current.focus();

            // Save the current text into temp.
            var temp = this.textInput.current.value;

            // Set the input to empty so that the cursor goes to the front. 
            this.textInput.current.value = '';

            // Input the post text into the text input so that the cursor moves to the end. 
            this.textInput.current.value = temp;
        }
    }, {
        key: 'editPost',
        value: function editPost() {
            this.props.savePostHandler(this.state.profiledes, this.state.contactgmail, this.state.openseaurl, this.state.profilepic);
        }
    }, {
        key: 'editCancel',
        value: function editCancel() {

            this.props.cancel(this.state.profilepic);
            console.log("cancelweird;y", this.state.profilepic);
        }
    }, {
        key: 'checkTxtArea',
        value: function checkTxtArea(e) {
            console.log(e);
            if (e.target.id == "profiledes") {
                if (e.target.value.length > 0) {
                    console.log(e.target.value);
                    this.setState({ profiledes: e.target.value });
                } else {
                    this.setState({ profiledes: "" });
                }
            }
            if (e.target.id == "openseaurl") {
                if (e.target.value.length > 0) {
                    console.log(e.target.value);
                    this.setState({ openseaurl: e.target.value });
                } else {
                    this.setState({ openseaurl: "" });
                }
            }
            if (e.target.id == "contactgmail") {
                if (e.target.value.length > 0) {
                    console.log(e.target.value);
                    this.setState({ contactgmail: e.target.value });
                } else {
                    this.setState({ contactgmail: "" });
                }
            }
        }
    }, {
        key: 'chooseFile',
        value: function chooseFile(e) {
            var _this4 = this;

            var getcooked = getCookie('csrftoken');
            var whatkind = "profile";
            var clicked = parseInt(window.location.pathname.split('/')[2]);
            var pagination = 1;
            var fileInput = document.querySelector('#choosefile').files[0];

            var formData = new FormData();
            formData.append("media", fileInput);

            fetch('/currentgalleryapi/' + whatkind + '/' + clicked + '/' + pagination, {
                method: 'POST',
                headers: { 'X-CSRFToken': getcooked },
                body: formData
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                _this4.setState({ profilepic: data["profilepic"] });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var clicked = parseInt(window.location.pathname.split('/')[2]);
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-center mt-1 mb-1' },
                    React.createElement(
                        'label',
                        { htmlFor: 'edit_post_txt' },
                        'Click to change profile picture: '
                    )
                ),
                React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-center' },
                    React.createElement(
                        'div',
                        { id: 'coverschoosefile' },
                        clicked == 1 ? React.createElement('input', { id: 'choosefile', 'class': 'choosefile', onChange: this.chooseFile, type: 'file' }) : null
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'form-floating' },
                    React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center mt-1 mb-1' },
                        React.createElement(
                            'label',
                            { htmlFor: 'edit_post_txt' },
                            'Contact Info: '
                        )
                    ),
                    React.createElement('textarea', { id: 'contactgmail', 'class': 'textedit', ref: this.textInput, name: 'edit_post_txt', style: { height: 100 + 'px' }, onChange: this.checkTxtArea, value: this.state.contactgmail }),
                    React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center mt-2 mb-2' },
                        React.createElement(
                            'label',
                            { htmlFor: 'edit_post_txt' },
                            'Your Opensea Url: '
                        )
                    ),
                    React.createElement('textarea', { id: 'openseaurl', 'class': 'textedit', ref: this.textInput, name: 'edit_post_txt', style: { height: 100 + 'px' }, onChange: this.checkTxtArea, value: this.state.openseaurl }),
                    React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center mt-2 mb-2' },
                        React.createElement(
                            'label',
                            { htmlFor: 'edit_post_txt' },
                            'Description: '
                        )
                    ),
                    React.createElement('textarea', { id: 'profiledes', 'class': 'textedit', ref: this.textInput, name: 'edit_post_txt', style: { height: 100 + 'px' }, onChange: this.checkTxtArea, value: this.state.profiledes }),
                    React.createElement(
                        'div',
                        { 'class': 'd-flex justify-content-center mt-2 mb-2' },
                        React.createElement(
                            'button',
                            { type: 'button', name: 'edit_post_button', className: 'loll btn btn-outline-success btn-sm mr-2', onClick: this.editPost },
                            'Save'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'loll btn btn-outline-danger btn-sm', name: 'cancel_button', onClick: this.editCancel },
                            'Cancel'
                        )
                    )
                )
            );
        }
    }]);

    return EditPost;
}(React.Component);

var FollowTable = function (_React$Component3) {
    _inherits(FollowTable, _React$Component3);

    function FollowTable(props) {
        _classCallCheck(this, FollowTable);

        var _this5 = _possibleConstructorReturn(this, (FollowTable.__proto__ || Object.getPrototypeOf(FollowTable)).call(this, props));

        var followname = _this5.props.data["following"] > 0 ? "Unfollow" : "Follow";
        _this5.followPost = _this5.followPost.bind(_this5);
        console.log("followname", followname);

        _this5.state = {
            followname: followname
        };
        return _this5;
    }

    _createClass(FollowTable, [{
        key: 'followPost',
        value: function followPost(e) {

            var whatkind = "profile";
            console.log(e);
            var clicked = parseInt(window.location.pathname.split('/')[2]);
            var current = this.props.data["user"];
            var pagination = 1;
            var getcooked = getCookie('csrftoken');

            if (this.state.followname == "Follow") {
                this.setState({ followname: "Unfollow" });
                fetch('/currentgalleryapi/' + whatkind + '/' + clicked + '/' + pagination, {
                    method: 'PUT',
                    headers: { 'X-CSRFToken': getcooked },
                    body: JSON.stringify({
                        follow: "true",
                        follower: clicked,
                        following: current
                    })
                });
            }
            if (this.state.followname == "Unfollow") {

                this.setState({ followname: "Follow" });
                console.log("whatever man");
                fetch('/currentgalleryapi/' + whatkind + '/' + clicked + '/' + pagination, {
                    method: 'PUT',
                    headers: { 'X-CSRFToken': getcooked },
                    body: JSON.stringify({
                        follow: "false",
                        follower: clicked,
                        following: current
                    })
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var userid_clicked = parseInt(window.location.pathname.split('/')[2]);

            var curuser = this.props.data["user"];
            curuser = parseInt(curuser);
            var checknone = "wow";
            var follow_button = null;

            if (this.props.data["user"] == null) {
                console.log("in first if");
                checknone = "None";
            }
            if (checknone != "None" && userid_clicked != this.props.data["user"]) {
                console.log("in second if");
                follow_button = React.createElement(
                    'div',
                    { 'class': 'd-flex justify-content-center mb-3' },
                    React.createElement(
                        'button',
                        { type: 'button', name: 'edit_button', onClick: this.followPost, className: 'loll btn btn-outline-dark btn-sm' },
                        this.state.followname
                    )
                );
            }

            return React.createElement(
                'div',
                null,
                follow_button
            );
        }
    }]);

    return FollowTable;
}(React.Component);

document.addEventListener('DOMContentLoaded', function () {
    var pagination = 1;
    console.log("atleast");
    var whatkind = "profile";
    var clicked = parseInt(window.location.pathname.split('/')[2]);

    fetch('/currentgalleryapi/' + whatkind + '/' + clicked + '/' + pagination).then(function (response) {
        return response.json();
    }).then(function (data) {
        ReactDOM.render(React.createElement(ProfileEdit, { data: data }), document.querySelector('#profileedit'));
        ReactDOM.render(React.createElement(FollowTable, { data: data }), document.querySelector('#followpart'));
        ReactDOM.render(React.createElement(PostTable, { data: data }), document.querySelector('#postpage'));

        console.log(data);
    });
});