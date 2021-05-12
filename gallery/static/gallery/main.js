var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostRow = function (_React$Component) {
  _inherits(PostRow, _React$Component);

  function PostRow(props) {
    _classCallCheck(this, PostRow);

    var _this = _possibleConstructorReturn(this, (PostRow.__proto__ || Object.getPrototypeOf(PostRow)).call(this, props));

    console.log(_this.props.id);

    console.log(_this.props.username);
    console.log(_this.props.gallerytitle);
    console.log(_this.props.gallerybgimage);
    console.log(_this.props.gallerybgcolor);
    console.log(_this.props.modifiedtime);
    console.log("views", _this.props.views);
    return _this;
  }

  _createClass(PostRow, [{
    key: "render",
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
        "div",
        null,
        React.createElement(
          "a",
          { "class": "aeexplore", href: profilelink },
          React.createElement(
            "div",
            { "class": "coversall" },
            React.createElement(
              "div",
              { "class": "d-flex justify-content-center mt-5" },
              React.createElement(
                "div",
                { "class": "postexplore2" },
                this.props.title != "" ? React.createElement(
                  "p",
                  _defineProperty({ "class": "titlep d-flex justify-content-end", id: "aescape" }, "class", "font-weight-light timestamp"),
                  "Title: ",
                  React.createElement(
                    "h6",
                    null,
                    this.props.gallerytitle
                  )
                ) : null
              )
            ),
            React.createElement(
              "div",
              { "class": "d-flex justify-content-center" },
              React.createElement("div", { "class": "postexplore", style: { backgroundColor: this.props.gallerybgcolor, backgroundImage: this.props.gallerybgimage } })
            ),
            React.createElement(
              "div",
              { "class": "d-flex justify-content-center" },
              React.createElement(
                "div",
                { "class": "postexplore2 d-flex justify-content-between" },
                React.createElement(
                  "p",
                  _defineProperty({ "class": "d-flex justify-content-start", href: profilelink, id: "aescape" }, "class", "h4 colorstyle"),
                  this.props.username
                ),
                React.createElement("p", null),
                React.createElement(
                  "p",
                  _defineProperty({ id: "aescape", "class": "titlep d-flex justify-content-end", name: "timestamp" }, "class", "font-weight-light timestamp"),
                  this.props.views,
                  " ",
                  this.props.views > 1 ? "views" : "view"
                )
              )
            ),
            React.createElement(
              "div",
              { "class": "d-flex justify-content-center" },
              React.createElement(
                "div",
                { "class": "postexplore2" },
                React.createElement(
                  "p",
                  { id: "aescape", "class": "font-weight-light timestamp mb-5" },
                  "Last Updated: ",
                  this.props.modifiedtime
                )
              )
            ),
            React.createElement(
              "div",
              { "class": "d-flex justify-content-center" },
              React.createElement("input", { type: "hidden", value: this.props.id })
            )
          )
        )
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
    key: "changePage",
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

      fetch("/currentgalleryapi/" + whatkind + "/" + clicked + "/" + pagination).then(function (response) {
        return response.json();
      }).then(function (data) {

        ReactDOM.render(React.createElement(PostTable, { data: data }), document.querySelector('#postpage'));
      });

      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      console.log("does the css work");
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
      console.log("whatkind", this.props.data["whatkind"]);

      var paginationid = this.props.data["paginationid"];

      for (var j = 0; j < this.props.data["num_pages"]; j++) {
        var thej = j + 1;
        button.push(React.createElement(
          "li",
          { "class": paginationid == thej ? "page-item active" : "page-item", onClick: this.changePage },
          React.createElement(
            "a",
            { "class": "page-link" },
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
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { "class": "flex-column" },
          rows
        ),
        this.props.data["whatkind"] == "explore" ? React.createElement(
          "div",
          null,
          this.props.data["num_pages"] != 0 ? React.createElement(
            "ul",
            { "class": "pagination container justify-content-center " },
            React.createElement(
              "li",
              { "class": "page-item" },
              paginationid != 1 ? React.createElement(
                "span",
                { id: paginationid, "class": "page-link", onClick: this.changePage },
                "Previous"
              ) : null
            ),
            button,
            React.createElement(
              "li",
              { "class": "page-item" },
              paginationid != this.props.data["num_pages"] ? React.createElement(
                "span",
                { id: paginationid, "class": "page-link", onClick: this.changePage },
                "Next"
              ) : null
            )
          ) : null
        ) : null
      );
    }
  }]);

  return PostTable;
}(React.Component);

export default PostTable;