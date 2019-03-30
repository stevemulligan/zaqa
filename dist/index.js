"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _focus = _interopRequireDefault(require("chrysalis-api/focus"));

var _hardwareKeyboardioModel = require("chrysalis-api/hardware-keyboardio-model01");

var focus = new _focus.default();
focus.open(_hardwareKeyboardioModel.Model01).then(function () {
  focus.command("help").then(function (result) {
    console.log(result);
    setLed();
  });
});

function setLed() {
  return _setLed.apply(this, arguments);
}

function _setLed() {
  _setLed = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return focus.command("led.setAll", 0, 128, 128);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _setLed.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmb2N1cyIsIkZvY3VzIiwib3BlbiIsIk1vZGVsMDEiLCJ0aGVuIiwiY29tbWFuZCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJzZXRMZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBSUEsS0FBSyxHQUFHLElBQUlDLGNBQUosRUFBWjtBQUNBRCxLQUFLLENBQUNFLElBQU4sQ0FBV0MsZ0NBQVgsRUFBb0JDLElBQXBCLENBQXlCLFlBQU07QUFDOUJKLEVBQUFBLEtBQUssQ0FBQ0ssT0FBTixDQUFjLE1BQWQsRUFBc0JELElBQXRCLENBQTJCLFVBQUNFLE1BQUQsRUFBWTtBQUN0Q0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDQUcsSUFBQUEsTUFBTTtBQUNOLEdBSEQ7QUFJQSxDQUxEOztTQU9lQSxNOzs7Ozs7OzRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNPVCxLQUFLLENBQUNLLE9BQU4sQ0FBYyxZQUFkLEVBQTRCLENBQTVCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLENBRFA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb2N1cyBmcm9tIFwiY2hyeXNhbGlzLWFwaS9mb2N1c1wiO1xuaW1wb3J0IHsgTW9kZWwwMSB9IGZyb20gXCJjaHJ5c2FsaXMtYXBpL2hhcmR3YXJlLWtleWJvYXJkaW8tbW9kZWwwMVwiO1xuXG5sZXQgZm9jdXMgPSBuZXcgRm9jdXMoKTtcbmZvY3VzLm9wZW4oTW9kZWwwMSkudGhlbigoKSA9PiB7XG5cdGZvY3VzLmNvbW1hbmQoXCJoZWxwXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0c2V0TGVkKCk7XG5cdH0pO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHNldExlZCgpIHtcblx0YXdhaXQgZm9jdXMuY29tbWFuZChcImxlZC5zZXRBbGxcIiwgMCwgMTI4LCAxMjgpO1xufVxuXG4iXX0=