var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostRow = function (_React$Component) {
  _inherits(PostRow, _React$Component);

  function PostRow(props) {
    _classCallCheck(this, PostRow);

    return _possibleConstructorReturn(this, (PostRow.__proto__ || Object.getPrototypeOf(PostRow)).call(this, props));
  }

  _createClass(PostRow, [{
    key: 'toEdit',
    value: function toEdit() {
      ReactDOM.unmountComponentAtNode(document.querySelector('#postpage'));
      ReactDOM.render(React.createElement(EditPage, {
        id: this.props.id,
        postinfo: this.props.post_info,
        curuser: this.props.curuser,
        timestamp: this.props.time_stamp }), document.querySelector('#posting_view'));
    }
  }, {
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
      var profilelink = "/profile/" + this.props.user_id;

      return React.createElement(
        'div',
        { 'class': this.props.user_id == this.props.curuser ? "container border border-black rounded post_style" : "container border border-black rounded post_style_noedit" },
        React.createElement(
          'a',
          { href: profilelink, name: 'posterr', 'class': 'h4 colorstyle' },
          this.props.user_name
        ),
        React.createElement('input', { type: 'hidden', value: this.props.id }),
        React.createElement(
          'a',
          { href: thegallery, 'class': 'postinfo', name: 'post_info' },
          info
        ),
        React.createElement('input', { type: 'hidden', value: this.props.user_id }),
        React.createElement(
          'p',
          { name: 'timestamp', 'class': 'font-weight-light timestamp' },
          changedTime
        ),
        createdDate != changedTime ? React.createElement(
          'p',
          { name: 'timestamp', 'class': 'font-weight-light timestamp' },
          'Last Updated: ',
          createdDate
        ) : null
      );
    }
  }]);

  return PostRow;
}(React.Component);

var PostTable = function (_React$Component2) {
  _inherits(PostTable, _React$Component2);

  function PostTable(props) {
    _classCallCheck(this, PostTable);

    var _this2 = _possibleConstructorReturn(this, (PostTable.__proto__ || Object.getPrototypeOf(PostTable)).call(this, props));

    _this2.changePage = _this2.changePage.bind(_this2);
    return _this2;
  }

  _createClass(PostTable, [{
    key: 'changePage',
    value: function changePage(e) {
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
        ReactDOM.render(React.createElement(PostTable, { data: data }), document.querySelector('#postpage'));
      });

      window.scrollTo(0, 0);
    }
  }, {
    key: 'render',
    value: function render() {

      var h1nopost = "";

      var rows = [];
      var button = [];
      var curuser = this.props.data["user"];
      var paginationid = this.props.data["paginationid"];

      for (var j = 0; j < this.props.data["num_pages"]; j++) {
        var thej = j + 1;
        button.push(React.createElement(
          'li',
          { 'class': paginationid == thej ? "page-item active" : "page-item", onClick: this.changePage },
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
          post_info: this.props.data["data"][i].post_info,
          user_id: this.props.data["data"][i].user_id,
          user_name: this.props.data["data"][i].user_name,
          time_stamp: this.props.data["data"][i].timestamp,
          changedtime: this.props.data["data"][i].changedtime,
          curuser: curuser }));
      }
      return React.createElement(
        'div',
        null,
        datalength != 0 ? React.createElement(
          'table',
          { className: 'table table-hover table-sm' },
          React.createElement(
            'tbody',
            null,
            ' ',
            rows,
            ' '
          )
        ) : React.createElement(
          'div',
          null,
          h1nopost
        ),
        this.props.data["num_pages"] != 0 ? React.createElement(
          'ul',
          { 'class': 'pagination container justify-content-center' },
          React.createElement(
            'li',
            { 'class': 'page-item' },
            paginationid != 1 ? React.createElement(
              'span',
              { id: paginationid, 'class': 'page-link', onClick: this.changePage },
              'Previous'
            ) : null
          ),
          button,
          React.createElement(
            'li',
            { 'class': 'page-item' },
            paginationid != this.props.data["num_pages"] ? React.createElement(
              'span',
              { id: paginationid, 'class': 'page-link', onClick: this.changePage },
              'Next'
            ) : null
          )
        ) : null
      );
    }
  }]);

  return PostTable;
}(React.Component);

export default PostTable;