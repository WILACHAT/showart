var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.checkSearch = _this.checkSearch.bind(_this);

    return _this;
  }

  _createClass(SearchBar, [{
    key: 'checkSearch',
    value: function checkSearch(e) {
      this.props.oncheckSearch(e.target.value);
      console.log("searchbar", e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        { 'class': 'd-flex justify-content-end' },
        React.createElement(
          'div',
          { 'class': 'divsearch d-flex justify-content-center' },
          React.createElement(
            'form',
            null,
            React.createElement('input', {
              id: 'searchid',
              type: 'text',
              'class': 'inputsearch form-control mr-sm-2 mt-2 pb-2',
              placeholder: 'Search...',
              value: this.props.searchtext,
              onChange: this.checkSearch })
          )
        )
      );
    }
  }]);

  return SearchBar;
}(React.Component);

var PostPage = function (_React$Component2) {
  _inherits(PostPage, _React$Component2);

  function PostPage(props) {
    _classCallCheck(this, PostPage);

    var _this2 = _possibleConstructorReturn(this, (PostPage.__proto__ || Object.getPrototypeOf(PostPage)).call(this, props));

    _this2.checkSearch = _this2.checkSearch.bind(_this2);
    _this2.changePage = _this2.changePage.bind(_this2);

    _this2.state = {
      searchtext: "",
      newdata: _this2.props.data

    };
    return _this2;
  }

  _createClass(PostPage, [{
    key: 'changePage',
    value: function changePage(e) {
      var _this3 = this;

      console.log("change page page");
      var pagination = e.target.id;
      var innerhtmlpage = e.target.innerHTML;
      var whatkind = this.props.data["whatkind"];
      console.log("this is whatkind", whatkind);

      if (innerhtmlpage == "Previous") {
        pagination = parseInt(pagination);
        pagination = pagination - 1;
      } else if (innerhtmlpage == "Next") {
        pagination = parseInt(pagination);
        pagination = pagination + 1;
      } else {
        pagination = parseInt(e.target.innerHTML);
      }
      var checkfornull = window.location.pathname.split('/')[2];
      var clicked = parseInt(window.location.pathname.split('/')[2]);
      if (checkfornull == null) {
        clicked = 0;
      }

      fetch('/currentgalleryapi/' + whatkind + '/' + clicked + '/' + pagination).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this3.setState({
          newdata: data
        });
        console.log("newest pagination", _this3.state.newdata);
      });

      window.scrollTo(0, 0);
    }
  }, {
    key: 'checkSearch',
    value: function checkSearch(searchtext, e) {
      var _this4 = this;

      console.log("in checksearch", searchtext);
      var whatkind = "";

      if (searchtext != "") {
        whatkind = "search";
      } else {
        whatkind = "explore";
      }
      var pagination = 1;
      if (this.props.pagilols != null) {
        pagination = this.props.pagilols;
      }
      var clicked = 1;

      this.setState({ searchtext: searchtext });

      var getcooked = getCookie('csrftoken');
      fetch('/currentgalleryapi/' + whatkind + '/' + clicked + '/' + pagination, {
        method: 'PUT',
        headers: { 'X-CSRFToken': getcooked },
        body: JSON.stringify({
          searchvalue: searchtext
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log("this is data", data);
        _this4.setState({
          newdata: data
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.props.data["whatkind"] == "explore" ? React.createElement(SearchBar, { searchtext: this.state.searchtext,
          oncheckSearch: this.checkSearch }) : null,
        React.createElement(PostTable, { data: this.state.newdata, changePage: this.changePage })
      );
    }
  }]);

  return PostPage;
}(React.Component);

var PostRow = function (_React$Component3) {
  _inherits(PostRow, _React$Component3);

  function PostRow(props) {
    _classCallCheck(this, PostRow);

    return _possibleConstructorReturn(this, (PostRow.__proto__ || Object.getPrototypeOf(PostRow)).call(this, props));
  }

  _createClass(PostRow, [{
    key: 'render',
    value: function render() {

      var createdDate = this.props.time_stamp;
      var changedTime = this.props.changedtime;
      var thegallery = "/thegallery/" + this.props.id;

      var checknone = "";
      if (this.props.curuser == null) {
        checknone = "None";
      }

      var info = this.props.post_info;
      var profilelink = "/profile/" + this.props.id;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'a',
          { 'class': 'aeexplore', href: profilelink },
          React.createElement(
            'div',
            { 'class': 'coversall' },
            React.createElement(
              'div',
              { 'class': 'd-flex justify-content-center mt-5' },
              React.createElement(
                'div',
                { 'class': 'postexplore2' },
                this.props.title != "" ? React.createElement(
                  'p',
                  _defineProperty({ 'class': 'titlep d-flex justify-content-end', id: 'aescape' }, 'class', 'font-weight-light timestamp'),
                  'Title: ',
                  React.createElement(
                    'h6',
                    null,
                    this.props.gallerytitle
                  )
                ) : null
              )
            ),
            React.createElement(
              'div',
              { 'class': 'cleary d-flex justify-content-center' },
              React.createElement('div', { 'class': 'postexplore', style: { backgroundColor: this.props.gallerybgcolor, backgroundImage: this.props.gallerybgimage } })
            ),
            React.createElement(
              'div',
              { 'class': 'd-flex justify-content-center' },
              React.createElement(
                'div',
                { 'class': 'postexplore2 d-flex justify-content-between' },
                React.createElement(
                  'p',
                  _defineProperty({ 'class': 'd-flex justify-content-start', href: profilelink, id: 'aescape' }, 'class', 'h4 colorstyle'),
                  this.props.username
                ),
                React.createElement('p', null),
                React.createElement(
                  'p',
                  _defineProperty({ id: 'aescape', 'class': 'titlep d-flex justify-content-end', name: 'timestamp' }, 'class', 'font-weight-light timestamp'),
                  this.props.views,
                  ' ',
                  this.props.views > 1 ? "views" : "view"
                )
              )
            ),
            React.createElement(
              'div',
              { 'class': 'd-flex justify-content-center' },
              React.createElement(
                'div',
                { 'class': 'postexplore2' },
                React.createElement(
                  'p',
                  { id: 'aescape', 'class': 'font-weight-light timestamp mb-5' },
                  'Last Updated: ',
                  this.props.modifiedtime
                )
              )
            ),
            React.createElement(
              'div',
              { 'class': 'd-flex justify-content-center' },
              React.createElement('input', { type: 'hidden', value: this.props.id })
            )
          )
        )
      );
    }
  }]);

  return PostRow;
}(React.Component);

var PostTable = function (_React$Component4) {
  _inherits(PostTable, _React$Component4);

  function PostTable(props) {
    _classCallCheck(this, PostTable);

    var _this6 = _possibleConstructorReturn(this, (PostTable.__proto__ || Object.getPrototypeOf(PostTable)).call(this, props));

    var data = _this6.props.data;

    return _this6;
  }

  _createClass(PostTable, [{
    key: 'render',
    value: function render() {
      if (this.props.data["whatkind"] == "following") {}
      if (this.props.data["whatkind"] == "following") {
        console.log("in what kind following");
        document.querySelector('#navfollowing').style.color = "salmon";
      } else if (this.props.data["whatkind"] == "explore") {
        console.log("in what kind explore");

        document.querySelector('#navexplore').style.color = "salmon";
      } else if (this.props.data["whatkind"] == "gallery") {
        console.log("in what kind explore");

        document.querySelector('#navgallery').style.color = "salmon";
      }

      var h1nopost = "";

      var rows = [];
      var button = [];
      var curuser = this.props.data["user"];

      var paginationid = this.props.data["paginationid"];

      for (var j = 0; j < this.props.data["num_pages"]; j++) {
        var thej = j + 1;
        button.push(React.createElement(
          'li',
          { 'class': paginationid == thej ? "page-item active" : "page-item", onClick: this.props.changePage },
          React.createElement(
            'a',
            { 'class': 'page-link' },
            thej
          )
        ));
      }
      var datalength = this.props.data["data"].length;
      for (var i = 0; i < this.props.data["data"].length; i++) {
        rows.push(React.createElement(PostRow, {
          id: this.props.data["data"][i].id,
          username: this.props.data["data"][i].username,
          gallerytitle: this.props.data["data"][i].gallerytitle,
          gallerybgcolor: this.props.data["data"][i].gallerybgcolor,
          gallerybgimage: this.props.data["data"][i].gallerybgimage,
          modifiedtime: this.props.data["data"][i].modifiedtime,
          views: this.props.data["data"][i].views,

          curuser: curuser }));
      }

      var explorelink = "/explore";

      return React.createElement(
        'div',
        { id: 'posttableid' },
        React.createElement(
          'div',
          null,
          rows == "" ? React.createElement(
            'div',
            null,
            ' ',
            this.props.data["whatkind"] == "following" ? React.createElement(
              'div',
              null,
              React.createElement(
                'h4',
                { 'class': 'authenh4' },
                'You Haven\'t Voted Anyone'
              ),
              React.createElement(
                'h6',
                { 'class': 'authenh4' },
                'Find Someone To Vote:',
                React.createElement(
                  'a',
                  { href: explorelink, 'class': 'btn btn-outline-dark btn-sm ml-2' },
                  'Explore'
                )
              )
            ) : React.createElement(
              'h4',
              { 'class': 'authenh4' },
              'No Result Found'
            )
          ) : React.createElement(
            'div',
            { id: 'rowsid', 'class': 'flex-column' },
            rows
          )
        ),
        rows != "" ? React.createElement(
          'div',
          { 'class': 'paginationcss' },
          this.props.data["num_pages"] != 0 ? React.createElement(
            'ul',
            { 'class': 'pagination container justify-content-center mt-3' },
            React.createElement(
              'li',
              { 'class': 'page-item' },
              paginationid != 1 ? React.createElement(
                'span',
                { id: paginationid, 'class': 'page-link pagelink', onClick: this.props.changePage },
                'Previous'
              ) : null
            ),
            button,
            React.createElement(
              'li',
              { 'class': 'page-item' },
              paginationid != this.props.data["num_pages"] ? React.createElement(
                'span',
                { id: paginationid, 'class': 'page-link pagelink', onClick: this.props.changePage },
                'Next'
              ) : null
            )
          ) : null
        ) : null
      );
    }
  }]);

  return PostTable;
}(React.Component);

export default PostPage;