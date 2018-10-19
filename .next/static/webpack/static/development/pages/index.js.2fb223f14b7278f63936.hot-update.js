webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/restaurant/restaurantList.js":
/*!*************************************************!*\
  !*** ./components/restaurant/restaurantList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");

var _jsxFileName = "/home/developer/Documents/Projetos/strapi-ecommerce/components/restaurant/restaurantList.js";



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    {\n        retaurants {\n            _id\n            name\n            description\n            image {\n                url\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var RestaurantList = function RestaurantList(_ref, req) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      restaurants = _ref$data.restaurants,
      search = _ref.search;
  if (error) return "Error loading restaurants"; // if restaurants are returned from the GraphQL query, run the filter query and set equal to variable restaurantSearch

  if (restaurants && restaurants.length) {
    // search query 
    var searchQuery = restaurants.filter(function (query) {
      return query.name.toLowerCase().include(search);
    });

    if (searchQuery.lenght != 0) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-16456047",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-16456047" + " " + "h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, searchQuery.map(function (res) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
          style: {
            height: 250
          },
          src: "http://localhost:1337".concat(res.image.url),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
          top: true,
          style: {
            height: 250
          },
          src: "http://localhost:1337".concat(res.image.url),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CardBoy, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, res.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, res.description)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-16456047" + " " + "card-footer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          as: "/restaurants/".concat(res._id),
          href: "/restaurants?id=".concat(res._id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          className: "jsx-16456047" + " " + "btn btn-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "View"))));
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "16456047",
        css: "a{color:white;}a:link{-webkit-text-decoration:none;text-decoration:none;color:white;}a:hover{color:white;}.card-columns{-webkit-column-count:3;column-count:3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3Blci9Eb2N1bWVudHMvUHJvamV0b3Mvc3RyYXBpLWVjb21tZXJjZS9jb21wb25lbnRzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0R5QixBQUc2QyxBQUdTLEFBSVQsQUFHRyxZQVRuQixBQU9BLDBCQUdBLFlBUGdCLFlBQ2hCIiwiZmlsZSI6Ii9ob21lL2RldmVsb3Blci9Eb2N1bWVudHMvUHJvamV0b3Mvc3RyYXBpLWVjb21tZXJjZS9jb21wb25lbnRzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCB7IFxuICAgIEJ1dHRvbiwgXG4gICAgQ2FyZCwgXG4gICAgQ2FyZEJvZHksIFxuICAgIENhcmRDb2x1bW5zLCBcbiAgICBDYXJkSW1nLCBcbiAgICBDYXJkU3VidGl0bGUgXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyBDYXJkVGV4dCwgQ2FyZFRpdGxlLCBDb2wsIFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNvbnN0IFJlc3RhdXJhbnRMaXN0ID0gKFxuICAgIHsgZGF0YTogeyBsb2FkaW5nLCBlcnJvciwgcmVzdGF1cmFudHMgfSwgc2VhcmNoIH0sIHJlcSkgPT4ge1xuICAgIGlmIChlcnJvcikgcmV0dXJuIFwiRXJyb3IgbG9hZGluZyByZXN0YXVyYW50c1wiO1xuICAgIC8vIGlmIHJlc3RhdXJhbnRzIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBHcmFwaFFMIHF1ZXJ5LCBydW4gdGhlIGZpbHRlciBxdWVyeSBhbmQgc2V0IGVxdWFsIHRvIHZhcmlhYmxlIHJlc3RhdXJhbnRTZWFyY2hcblxuICAgIGlmIChyZXN0YXVyYW50cyAmJiByZXN0YXVyYW50cy5sZW5ndGgpIHtcbiAgICAgICAgLy8gc2VhcmNoIHF1ZXJ5IFxuICAgICAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHJlc3RhdXJhbnRzLmZpbHRlcihxdWVyeSA9PlxuICAgICAgICBxdWVyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZShzZWFyY2gpXG4gICAgICAgICk7XG4gICAgICAgIGlmICggc2VhcmNoUXVlcnkubGVuZ2h0ICE9MCApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3NlYXJjaFF1ZXJ5Lm1hcChyZXMgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGhlaWdodDogMjUwIH19IHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cmVzLmltYWdlLnVybH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRJbWcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A9e3RydWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyNTAgfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke3Jlcy5pbWFnZS51cmx9YH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm95PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT57cmVzLm5hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+e3Jlcy5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb3k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Jlc3RhdXJhbnRzLyR7cmVzLl9pZH1gfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Jlc3RhdXJhbnRzP2lkPSR7cmVzLl9pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlZpZXc8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD4gXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOmxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtY29sdW1ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi1jb3VudDogMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8aDE+Tm8gUmVzdGF1cmFudHMgRm91bmQ8L2gxPjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gPGgxPkxvYWRpbmc8L2gxPjtcbn07XG5cbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICAgIHtcbiAgICAgICAgcmV0YXVyYW50cyB7XG4gICAgICAgICAgICBfaWRcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gO1xuUmVzdGF1cmFudExpc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvemVpdC9uZXh0LmpzXCIpO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiB7IHN0YXJzOiBqc29uLnN0YXJnYXplcnNfY291bnQgfTtcbn07XG5cbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZXIgY29tcG9uZW50IChSZXN0YXVyYW50TGlzdClcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChxdWVyeSwge1xuICAgIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgICAgIGRhdGFcbiAgICB9KVxufSkoUmVzdGF1cmFudExpc3QpOyJdfQ== */\n/*@ sourceURL=/home/developer/Documents/Projetos/strapi-ecommerce/components/restaurant/restaurantList.js */",
        __self: this
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "No Restaurants Found");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Loading");
};

var query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

RestaurantList.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            _context.next = 3;
            return fetch("https://api.github.com/repos/zeit/next.js");

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            return _context.abrupt("return", {
              stars: json.stargazers_count
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}(); // The `graphql` wrapper executes a GraphQL query and makes the results available on the `data` prop of the wrapper component (RestaurantList)


/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_5__["graphql"])(query, {
  props: function props(_ref4) {
    var data = _ref4.data;
    return {
      data: data
    };
  }
})(RestaurantList));

/***/ })

})
//# sourceMappingURL=index.js.2fb223f14b7278f63936.hot-update.js.map