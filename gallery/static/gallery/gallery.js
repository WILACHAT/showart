var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostTableGallery = function (_React$Component) {
  _inherits(PostTableGallery, _React$Component);

  function PostTableGallery(props) {
    _classCallCheck(this, PostTableGallery);

    return _possibleConstructorReturn(this, (PostTableGallery.__proto__ || Object.getPrototypeOf(PostTableGallery)).call(this, props));
  }

  _createClass(PostTableGallery, [{
    key: "render",
    value: function render() {
      var profilelinkrank1 = "/profile/" + this.props.data["data"][0].id;
      var profilelinkrank2 = "/profile/" + this.props.data["data"][1].id;
      var profilelinkrank3 = "/profile/" + this.props.data["data"][2].id;

      if (this.props.data["whatkind"] == "gallery") {
        console.log("in what kind explore");

        document.querySelector('#navgallery').style.color = "salmon";
      }

      var h1nopost = "";

      var rows = [];
      var button = [];
      var curuser = this.props.data["user"];
      console.log("whatkind", this.props.data["whatkind"]);

      var datalength = this.props.data["data"].length;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { "class": "d-flex justify-content-center" },
          React.createElement(
            "h1",
            { "class": "gallerymostvoted" },
            "TOP 3 MOST VOTED GALLERY"
          )
        ),
        React.createElement(
          "div",
          { id: "carouselExampleIndicators", "class": "carousel slide", "data-ride": "carousel" },
          React.createElement(
            "ol",
            { "class": "carousel-indicators" },
            React.createElement("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": "0", "class": "active" }),
            React.createElement("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": "1" }),
            React.createElement("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": "2" })
          ),
          React.createElement(
            "div",
            { "class": "carousel-inner" },
            React.createElement(
              "div",
              { "class": "flex-column carousel-item active" },
              React.createElement(
                "div",
                null,
                React.createElement(
                  "a",
                  { "class": "aeexplore", href: profilelinkrank1 },
                  React.createElement(
                    "div",
                    { "class": "coversall" },
                    React.createElement(
                      "div",
                      { "class": "d-flex justify-content-center mt-5" },
                      React.createElement(
                        "div",
                        { "class": "postexplore2 d-flex justify-content-between" },
                        this.props.title != "" ? React.createElement(
                          "p",
                          _defineProperty({ "class": "titlep d-flex justify-content-end", id: "aescape" }, "class", "font-weight-light timestamp"),
                          "Title: ",
                          React.createElement(
                            "h6",
                            null,
                            this.props.data["data"][0].gallerytitle
                          )
                        ) : null,
                        React.createElement("p", null),
                        React.createElement(
                          "p",
                          _defineProperty({ id: "aescape", "class": "titlep d-flex justify-content-end", name: "timestamp" }, "class", "font-weight-light timestamp"),
                          "#1"
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { "class": "d-flex justify-content-center" },
                      React.createElement("div", { "class": "postexploregallery", style: { backgroundColor: this.props.data["data"][0].gallerybgcolor, backgroundImage: this.props.data["data"][0].gallerybgimage } })
                    ),
                    React.createElement(
                      "div",
                      { "class": "d-flex justify-content-center" },
                      React.createElement(
                        "div",
                        { "class": "postexplore2 d-flex justify-content-between" },
                        React.createElement(
                          "p",
                          _defineProperty({ "class": "d-flex justify-content-start", href: profilelinkrank1, id: "aescape" }, "class", "h4 colorstyle"),
                          this.props.data["data"][0].username
                        ),
                        React.createElement("p", null),
                        React.createElement(
                          "p",
                          _defineProperty({ id: "aescape", "class": "titlep d-flex justify-content-end", name: "timestamp" }, "class", "font-weight-light timestamp"),
                          this.props.data["data"][0].views,
                          " ",
                          this.props.data["data"][0].views > 1 ? "views" : "view"
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
                          this.props.data["data"][0].modifiedtime
                        )
                      )
                    )
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { "class": "flex-column carousel-item" },
              React.createElement(
                "div",
                null,
                React.createElement(
                  "a",
                  { "class": "aeexplore", href: profilelinkrank2 },
                  React.createElement(
                    "div",
                    { "class": "coversall" },
                    React.createElement(
                      "div",
                      { "class": "d-flex justify-content-center mt-5" },
                      React.createElement(
                        "div",
                        { "class": "postexplore2 d-flex justify-content-between" },
                        this.props.title != "" ? React.createElement(
                          "p",
                          _defineProperty({ "class": "titlep d-flex justify-content-end", id: "aescape" }, "class", "font-weight-light timestamp"),
                          "Title: ",
                          React.createElement(
                            "h6",
                            null,
                            this.props.data["data"][1].gallerytitle
                          )
                        ) : null,
                        React.createElement("p", null),
                        React.createElement(
                          "p",
                          _defineProperty({ id: "aescape", "class": "titlep d-flex justify-content-end", name: "timestamp" }, "class", "font-weight-light timestamp"),
                          "#2"
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { "class": "d-flex justify-content-center" },
                      React.createElement("div", { "class": "postexploregallery", style: { backgroundColor: this.props.data["data"][1].gallerybgcolor, backgroundImage: this.props.data["data"][1].gallerybgimage } })
                    ),
                    React.createElement(
                      "div",
                      { "class": "d-flex justify-content-center" },
                      React.createElement(
                        "div",
                        { "class": "postexplore2 d-flex justify-content-between" },
                        React.createElement(
                          "p",
                          _defineProperty({ "class": "d-flex justify-content-start", href: profilelinkrank1, id: "aescape" }, "class", "h4 colorstyle"),
                          this.props.data["data"][1].username
                        ),
                        React.createElement("p", null),
                        React.createElement(
                          "p",
                          _defineProperty({ id: "aescape", "class": "titlep d-flex justify-content-end", name: "timestamp" }, "class", "font-weight-light timestamp"),
                          this.props.data["data"][1].views,
                          " ",
                          this.props.data["data"][0].views > 1 ? "views" : "view"
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
                          this.props.data["data"][1].modifiedtime
                        )
                      )
                    )
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { "class": "flex-column carousel-item" },
              React.createElement(
                "div",
                null,
                React.createElement(
                  "a",
                  { "class": "aeexplore", href: profilelinkrank3 },
                  React.createElement(
                    "div",
                    { "class": "coversall" },
                    React.createElement(
                      "div",
                      { "class": "d-flex justify-content-center mt-5" },
                      React.createElement(
                        "div",
                        { "class": "postexplore2 d-flex justify-content-between" },
                        this.props.title != "" ? React.createElement(
                          "p",
                          _defineProperty({ "class": "titlep d-flex justify-content-end", id: "aescape" }, "class", "font-weight-light timestamp"),
                          "Title: ",
                          React.createElement(
                            "h6",
                            null,
                            this.props.data["data"][2].gallerytitle
                          )
                        ) : null,
                        React.createElement("p", null),
                        React.createElement(
                          "p",
                          _defineProperty({ id: "aescape", "class": "titlep d-flex justify-content-end", name: "timestamp" }, "class", "font-weight-light timestamp"),
                          "#3"
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { "class": "d-flex justify-content-center" },
                      React.createElement("div", { "class": "postexploregallery", style: { backgroundColor: this.props.data["data"][2].gallerybgcolor, backgroundImage: this.props.data["data"][2].gallerybgimage } })
                    ),
                    React.createElement(
                      "div",
                      { "class": "d-flex justify-content-center" },
                      React.createElement(
                        "div",
                        { "class": "postexplore2 d-flex justify-content-between" },
                        React.createElement(
                          "p",
                          _defineProperty({ "class": "d-flex justify-content-start", href: profilelinkrank1, id: "aescape" }, "class", "h4 colorstyle"),
                          this.props.data["data"][2].username
                        ),
                        React.createElement("p", null),
                        React.createElement(
                          "p",
                          _defineProperty({ id: "aescape", "class": "titlep d-flex justify-content-end", name: "timestamp" }, "class", "font-weight-light timestamp"),
                          this.props.data["data"][2].views,
                          " ",
                          this.props.data["data"][2].views > 1 ? "views" : "view"
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
                          this.props.data["data"][0].modifiedtime
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            "a",
            { "class": "carousel-control-prev", href: "#carouselExampleIndicators", role: "button", "data-slide": "prev" },
            React.createElement("span", { "class": "carousel-control-prev-icon carouselol", "aria-hidden": "true" }),
            React.createElement(
              "span",
              { "class": "sr-only" },
              "Previous"
            )
          ),
          React.createElement(
            "a",
            { "class": "carousel-control-next", href: "#carouselExampleIndicators", role: "button", "data-slide": "next" },
            React.createElement("span", { "class": "carousel-control-next-icon", "aria-hidden": "true" }),
            React.createElement(
              "span",
              { "class": "sr-only" },
              "Next"
            )
          )
        )
      );
    }
  }]);

  return PostTableGallery;
}(React.Component);

document.addEventListener('DOMContentLoaded', function () {

  var pagination = 1;
  var whatkind = window.location.pathname.split('/')[1];

  var clicked = 0;
  console.log("atleast");
  fetch("/currentgalleryapi/" + whatkind + "/" + clicked + "/" + pagination).then(function (response) {
    return response.json();
  }).then(function (data) {

    ReactDOM.render(React.createElement(PostTableGallery, { data: data }), document.querySelector('#topgallery'));

    console.log(data);
  });
});