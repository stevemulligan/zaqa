"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _focus = _interopRequireDefault(require("@chrysalis-api/focus"));

var _hardwareKeyboardioModel = require("@chrysalis-api/hardware-keyboardio-model01");

var _colorConvert = _interopRequireDefault(require("color-convert"));

var _os = _interopRequireDefault(require("os"));

/* model01-load.js -- A Chrysalis API example
 * Copyright (C) 2019  Keyboardio, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var focus = new _focus.default();

var mapLoad =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(avg) {
    var load, ledMap, hueMap, nearest, i, _frac, _convert$hsl$rgb, _convert$hsl$rgb2, _r, _g, _b, frac, _convert$hsl$rgb3, _convert$hsl$rgb4, r, g, b, _i;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            load = avg / (_os.default.cpus().length / 2);
            ledMap = [3, 4, 11, 12, 19, 20, 26];
            hueMap = [120, 80, 60, 40, 20, 10, 0];
            nearest = Math.min(Math.max(Math.round(load) - 1, 0), ledMap.length - 1);
            i = 0;

          case 5:
            if (!(i < nearest)) {
              _context.next = 13;
              break;
            }

            _frac = i < nearest ? 1 : load - Math.trunc(load);
            _convert$hsl$rgb = _colorConvert.default.hsl.rgb(hueMap[i], 100, 50), _convert$hsl$rgb2 = (0, _slicedToArray2.default)(_convert$hsl$rgb, 3), _r = _convert$hsl$rgb2[0], _g = _convert$hsl$rgb2[1], _b = _convert$hsl$rgb2[2];
            _context.next = 10;
            return focus.command("led.at", ledMap[i], _r, _g, _b);

          case 10:
            i++;
            _context.next = 5;
            break;

          case 13:
            frac = (load - Math.trunc(load)) / 2 + 0.5;
            _convert$hsl$rgb3 = _colorConvert.default.hsl.rgb(hueMap[nearest], 100, 50 * frac), _convert$hsl$rgb4 = (0, _slicedToArray2.default)(_convert$hsl$rgb3, 3), r = _convert$hsl$rgb4[0], g = _convert$hsl$rgb4[1], b = _convert$hsl$rgb4[2];
            _context.next = 17;
            return focus.command("led.at", ledMap[nearest], r, g, b);

          case 17:
            _i = nearest + 1;

          case 18:
            if (!(_i < ledMap.length)) {
              _context.next = 24;
              break;
            }

            _context.next = 21;
            return focus.command("led.at", ledMap[_i], 0, 0, 0);

          case 21:
            _i++;
            _context.next = 18;
            break;

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function mapLoad(_x) {
    return _ref.apply(this, arguments);
  };
}();

var simulate = function simulate() {
  var load = 0.0;
  var target = Math.random() * _os.default.cpus().length * 5;
  var speed = 0.1;
  setInterval(function () {
    if (!focus.device) return;
    mapLoad(load);
    load += speed;

    if (load >= target && speed > 0) {
      target = Math.random() * _os.default.cpus().length * 5;

      if (load >= target) {
        speed = -0.1;
      } else {
        speed = 0.1;
      }
    }

    if (load <= target && speed < 0) {
      target = Math.random() * _os.default.cpus().length * 5;

      if (load >= target) {
        speed = -0.1;
      } else {
        speed = 0.1;
      }
    }

    if (load <= 0) {
      load = 0;
      speed = 0.1;
    }
  }, 20);
};

var realLoad = function realLoad() {
  mapLoad(_os.default.loadavg()[0]);
  setInterval(function () {
    if (!focus.device) return;
    mapLoad(_os.default.loadavg()[0]);
  }, 1000 * 60);
};

focus.open(_hardwareKeyboardioModel.Model01).then(function () {
  if (process.argv[2] == "simulate") {
    simulate();
  } else {
    realLoad();
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2FkLmpzIl0sIm5hbWVzIjpbImZvY3VzIiwiRm9jdXMiLCJtYXBMb2FkIiwiYXZnIiwibG9hZCIsIm9zIiwiY3B1cyIsImxlbmd0aCIsImxlZE1hcCIsImh1ZU1hcCIsIm5lYXJlc3QiLCJNYXRoIiwibWluIiwibWF4Iiwicm91bmQiLCJpIiwiZnJhYyIsInRydW5jIiwiY29udmVydCIsImhzbCIsInJnYiIsInIiLCJnIiwiYiIsImNvbW1hbmQiLCJzaW11bGF0ZSIsInRhcmdldCIsInJhbmRvbSIsInNwZWVkIiwic2V0SW50ZXJ2YWwiLCJkZXZpY2UiLCJyZWFsTG9hZCIsImxvYWRhdmciLCJvcGVuIiwiTW9kZWwwMSIsInRoZW4iLCJwcm9jZXNzIiwiYXJndiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQWdCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFuQkE7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsY0FBSixFQUFkOztBQUVBLElBQU1DLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFHLGlCQUFPQyxHQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsWUFBQUEsSUFEUSxHQUNERCxHQUFHLElBQUlFLFlBQUdDLElBQUgsR0FBVUMsTUFBVixHQUFtQixDQUF2QixDQURGO0FBRVJDLFlBQUFBLE1BRlEsR0FFQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sRUFBUCxFQUFXLEVBQVgsRUFBZSxFQUFmLEVBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLENBRkQ7QUFHUkMsWUFBQUEsTUFIUSxHQUdDLENBQUMsR0FBRCxFQUFNLEVBQU4sRUFBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixFQUFsQixFQUFzQixFQUF0QixFQUEwQixDQUExQixDQUhEO0FBSVJDLFlBQUFBLE9BSlEsR0FJRUMsSUFBSSxDQUFDQyxHQUFMLENBQVNELElBQUksQ0FBQ0UsR0FBTCxDQUFTRixJQUFJLENBQUNHLEtB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anMgLS0gQSBDaHJ5c2FsaXMgQVBJIGV4YW1wbGVcbiAqIENvcHlyaWdodCAoQykgMjAxOSAgS2V5Ym9hcmRpbywgSW5jLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZVxuICogRm91bmRhdGlvbiwgdmVyc2lvbiAzLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbmltcG9ydCBGb2N1cyBmcm9tIFwiQGNocnlzYWxpcy1hcGkvZm9jdXNcIjtcbmltcG9ydCB7IE1vZGVsMDEgfSBmcm9tIFwiQGNocnlzYWxpcy1hcGkvaGFyZHdhcmUta2V5Ym9hcmRpby1tb2RlbDAxXCI7XG5pbXBvcnQgY29udmVydCBmcm9tIFwiY29sb3ItY29udmVydFwiO1xuaW1wb3J0IG9zIGZyb20gXCJvc1wiO1xuXG5jb25zdCBmb2N1cyA9IG5ldyBGb2N1cygpO1xuXG5jb25zdCBtYXBMb2FkID0gYXN5bmMgKGF2ZykgPT4ge1xuICBjb25zdCBsb2FkID0gYXZnIC8gKG9zLmNwdXMoKS5sZW5ndGggLyAyKTtcbiAgY29uc3QgbGVkTWFwID0gWzMsIDQsIDExLCAxMiwgMTksIDIwLCAyNl07XG4gIGNvbnN0IGh1ZU1hcCA9IFsxMjAsIDgwLCA2MCwgNDAsIDIwLCAxMCwgMF07XG4gIGNvbnN0IG5lYXJlc3QgPSBNYXRoLm1pbihNYXRoLm1heChNYXRoLnJvdW5kKGxvYWQpIC0gMSwgMCksIGxlZE1hcC5sZW5ndGggLSAxKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5lYXJlc3Q7IGkrKykge1xuICAgIGNvbnN0IGZyYWMgPSBpIDwgbmVhcmVzdCA/IDEgOiBsb2FkIC0gTWF0aC50cnVuYyhsb2FkKTtcbiAgICBjb25zdCBbIHIsIGcsIGIgXSA9IGNvbnZlcnQuaHNsLnJnYihodWVNYXBbaV0sIDEwMCwgNTApO1xuICAgIGF3YWl0IGZvY3VzLmNvbW1hbmQoXCJsZWQuYXRcIiwgbGVkTWFwW2ldLCByLCBnLCBiKTtcbiAgfVxuXG4gIGNvbnN0IGZyYWMgPSAobG9hZCAtIE1hdGgudHJ1bmMobG9hZCkpIC8gMiArIDAuNTtcbiAgY29uc3QgWyByLCBnLCBiIF0gPSBjb252ZXJ0LmhzbC5yZ2IoaHVlTWFwW25lYXJlc3RdLCAxMDAsIDUwICogZnJhYyk7XG4gIGF3YWl0IGZvY3VzLmNvbW1hbmQoXCJsZWQuYXRcIiwgbGVkTWFwW25lYXJlc3RdLCByLCBnLCBiKTtcblxuICBmb3IgKGxldCBpID0gbmVhcmVzdCArIDE7IGkgPCBsZWRNYXAubGVuZ3RoOyBpKyspIHtcbiAgICBhd2FpdCBmb2N1cy5jb21tYW5kKFwibGVkLmF0XCIsIGxlZE1hcFtpXSwgMCwgMCwgMCk7XG4gIH1cbn07XG5cbmNvbnN0IHNpbXVsYXRlID0gKCkgPT4ge1xuICBsZXQgbG9hZCA9IDAuMDtcbiAgbGV0IHRhcmdldCA9IE1hdGgucmFuZG9tKCkgKiBvcy5jcHVzKCkubGVuZ3RoICogNTtcbiAgbGV0IHNwZWVkID0gMC4xO1xuXG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoIWZvY3VzLmRldmljZSkgcmV0dXJuO1xuICAgIG1hcExvYWQobG9hZCk7XG4gICAgbG9hZCArPSBzcGVlZDtcbiAgICBpZiAobG9hZCA+PSB0YXJnZXQgJiYgc3BlZWQgPiAwKSB7XG4gICAgICB0YXJnZXQgPSBNYXRoLnJhbmRvbSgpICogb3MuY3B1cygpLmxlbmd0aCAqIDU7XG4gICAgICBpZiAobG9hZCA+PSB0YXJnZXQpIHtcbiAgICAgICAgc3BlZWQgPSAtMC4xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BlZWQgPSAwLjE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsb2FkIDw9IHRhcmdldCAmJiBzcGVlZCA8IDApIHtcbiAgICAgIHRhcmdldCA9IE1hdGgucmFuZG9tKCkgKiBvcy5jcHVzKCkubGVuZ3RoICogNTtcbiAgICAgIGlmIChsb2FkID49IHRhcmdldCkge1xuICAgICAgICBzcGVlZCA9IC0wLjE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcGVlZCA9IDAuMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxvYWQgPD0gMCkge1xuICAgICAgbG9hZCA9IDA7XG4gICAgICBzcGVlZCA9IDAuMTtcbiAgICB9XG4gIH0sIDIwKTtcbn07XG5cbmNvbnN0IHJlYWxMb2FkID0gKCkgPT4ge1xuICBtYXBMb2FkKG9zLmxvYWRhdmcoKVswXSk7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoIWZvY3VzLmRldmljZSkgcmV0dXJuO1xuICAgIG1hcExvYWQob3MubG9hZGF2ZygpWzBdKTtcbiAgfSwgMTAwMCAqIDYwKTtcbn07XG5cbmZvY3VzLm9wZW4oTW9kZWwwMSkudGhlbigoKSA9PiB7XG4gIGlmIChwcm9jZXNzLmFyZ3ZbMl0gPT0gXCJzaW11bGF0ZVwiKSB7XG4gICAgc2ltdWxhdGUoKTtcbiAgfSBlbHNlIHtcbiAgICByZWFsTG9hZCgpO1xuICB9XG59KTtcbiJdfQ==