(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function Car(brand, model, color, year) {
  var _this = this;

  _classCallCheck(this, Car);

  this.buildCar = function () {
    return "Car " + _this.brand + " model " + _this.model + " in color " + _this.color + " year " + _this.year;
  };

  this.brand = brand;
  this.model = model;
  this.color = color;
  this.year = year;
};

exports.default = Car;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _car = require('../class/car.class');

var _car2 = _interopRequireDefault(_car);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Client = function (_Car) {
  _inherits(Client, _Car);

  function Client(brand, model, color, year, name, age, gender, phone) {
    _classCallCheck(this, Client);

    var _this = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, brand, model, color, year));

    _this.buildClient = function () {
      return 'Client ' + _this.name + ' has a car ' + _this.brand + ' model ' + _this.model + ' in color ' + _this.color + ' year ' + _this.year;
    };

    _this.name = name;
    _this.age = age;
    _this.gender = gender;
    _this.phone = phone;
    return _this;
  }

  return Client;
}(_car2.default);

exports.default = Client;

},{"../class/car.class":1}],3:[function(require,module,exports){
'use strict';

var _car = require('./modules/car.module');

var _car2 = _interopRequireDefault(_car);

var _client = require('./modules/client.module');

var _client2 = _interopRequireDefault(_client);

var _names = require('./modules/names');

var _names2 = _interopRequireDefault(_names);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  'use strict';

  (0, _car2.default)();
  (0, _client2.default)();
  (0, _names2.default)();
})();

},{"./modules/car.module":4,"./modules/client.module":5,"./modules/names":6}],4:[function(require,module,exports){
'use strict';

var _car = require('../class/car.class');

var _car2 = _interopRequireDefault(_car);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  var kia = new _car2.default('KIA', 'Sportage', 'gray', 2016);
  console.log(kia.buildCar());
};

},{"../class/car.class":1}],5:[function(require,module,exports){
'use strict';

var _client = require('../class/client.class');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  var brandon = new _client2.default('KIA', 'Sportage', 'gray', 2016, 'Brandon', 22, 84486800, 'Male');
  console.log(brandon.buildClient());
};

},{"../class/client.class":2}],6:[function(require,module,exports){
'use strict';

var _print = require('../utils/print');

module.exports = function () {
  var names = ['Brandon', 'Nanda', 'Zayda', 'Luis', 'Jonathan', 'Joshua', 'Marley'];
  _print.printArray.apply(undefined, names);
};

},{"../utils/print":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var printArray = function printArray() {
  for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      console.log("Printing: " + item);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

exports.printArray = printArray;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvZXM2L2NsYXNzL2Nhci5jbGFzcy5qcyIsImFwcC9qcy9lczYvY2xhc3MvY2xpZW50LmNsYXNzLmpzIiwiYXBwL2pzL2VzNi9tYWluLmpzIiwiYXBwL2pzL2VzNi9tb2R1bGVzL2Nhci5tb2R1bGUuanMiLCJhcHAvanMvZXM2L21vZHVsZXMvY2xpZW50Lm1vZHVsZS5qcyIsImFwcC9qcy9lczYvbW9kdWxlcy9uYW1lcy5qcyIsImFwcC9qcy9lczYvdXRpbHMvcHJpbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztJQ0FNLEcsR0FVSixhQUFZLEtBQVosRUFBbUIsS0FBbkIsRUFBMEIsS0FBMUIsRUFBaUMsSUFBakMsRUFBc0M7QUFBQTs7QUFBQTs7QUFBQSxPQUp0QyxRQUlzQyxHQUozQixZQUFNO0FBQ2Ysb0JBQWMsTUFBSyxLQUFuQixlQUFrQyxNQUFLLEtBQXZDLGtCQUF5RCxNQUFLLEtBQTlELGNBQTRFLE1BQUssSUFBakY7QUFDRCxHQUVxQzs7QUFDcEMsT0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLE9BQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxPQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsT0FBSyxJQUFMLEdBQVksSUFBWjtBQUNELEM7O1FBR1ksTyxHQUFQLEc7Ozs7Ozs7Ozs7QUNsQlI7Ozs7Ozs7Ozs7OztJQUVNLE07OztBQVVKLGtCQUFZLEtBQVosRUFBbUIsS0FBbkIsRUFBMEIsS0FBMUIsRUFBaUMsSUFBakMsRUFBdUMsSUFBdkMsRUFBNkMsR0FBN0MsRUFBa0QsTUFBbEQsRUFBMEQsS0FBMUQsRUFBZ0U7QUFBQTs7QUFBQSxnSEFDeEQsS0FEd0QsRUFDakQsS0FEaUQsRUFDMUMsS0FEMEMsRUFDbkMsSUFEbUM7O0FBQUEsVUFKaEUsV0FJZ0UsR0FKbEQsWUFBTTtBQUNsQix5QkFBaUIsTUFBSyxJQUF0QixtQkFBd0MsTUFBSyxLQUE3QyxlQUE0RCxNQUFLLEtBQWpFLGtCQUFtRixNQUFLLEtBQXhGLGNBQXNHLE1BQUssSUFBM0c7QUFDRCxLQUUrRDs7QUFFOUQsVUFBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFVBQUssR0FBTCxHQUFXLEdBQVg7QUFDQSxVQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsVUFBSyxLQUFMLEdBQWEsS0FBYjtBQUw4RDtBQU0vRDs7Ozs7UUFHZSxPLEdBQVYsTTs7Ozs7QUNyQlI7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxDQUFDLFlBQVU7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDRCxDQU5EOzs7OztBQ0xBOzs7Ozs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsWUFBVTtBQUN6QixNQUFJLE1BQU0sa0JBQVEsS0FBUixFQUFlLFVBQWYsRUFBMkIsTUFBM0IsRUFBbUMsSUFBbkMsQ0FBVjtBQUNBLFVBQVEsR0FBUixDQUFZLElBQUksUUFBSixFQUFaO0FBQ0QsQ0FIRDs7Ozs7QUNGQTs7Ozs7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLFlBQVU7QUFDekIsTUFBSSxVQUFVLHFCQUFXLEtBQVgsRUFBa0IsVUFBbEIsRUFBOEIsTUFBOUIsRUFBc0MsSUFBdEMsRUFBNEMsU0FBNUMsRUFBdUQsRUFBdkQsRUFBMkQsUUFBM0QsRUFBcUUsTUFBckUsQ0FBZDtBQUNBLFVBQVEsR0FBUixDQUFZLFFBQVEsV0FBUixFQUFaO0FBQ0QsQ0FIRDs7Ozs7QUNGQTs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsWUFBVTtBQUN6QixNQUFJLFFBQVEsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixPQUFyQixFQUE4QixNQUE5QixFQUFzQyxVQUF0QyxFQUFrRCxRQUFsRCxFQUE0RCxRQUE1RCxDQUFaO0FBQ0EscUNBQWMsS0FBZDtBQUNELENBSEQ7Ozs7Ozs7O0FDRkEsSUFBTSxhQUFhLFNBQWIsVUFBYSxHQUFjO0FBQUEsb0NBQVYsS0FBVTtBQUFWLFNBQVU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDL0IseUJBQWdCLEtBQWhCLDhIQUFzQjtBQUFBLFVBQWQsSUFBYzs7QUFDcEIsY0FBUSxHQUFSLGdCQUF5QixJQUF6QjtBQUNEO0FBSDhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJaEMsQ0FKRDs7UUFNUSxVLEdBQUEsVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBDYXJ7XG4gIGJyYW5kO1xuICBtb2RlbDtcbiAgY29sb3I7XG4gIHllYXI7XG5cbiAgYnVpbGRDYXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBDYXIgJHt0aGlzLmJyYW5kfSBtb2RlbCAke3RoaXMubW9kZWx9IGluIGNvbG9yICR7dGhpcy5jb2xvcn0geWVhciAke3RoaXMueWVhcn1gO1xuICB9XG5cbiAgY29uc3RydWN0b3IoYnJhbmQsIG1vZGVsLCBjb2xvciwgeWVhcil7XG4gICAgdGhpcy5icmFuZCA9IGJyYW5kO1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy55ZWFyID0geWVhcjtcbiAgfVxufVxuXG5leHBvcnQge0NhciBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBDYXIgZnJvbSAnLi4vY2xhc3MvY2FyLmNsYXNzJztcblxuY2xhc3MgQ2xpZW50IGV4dGVuZHMgQ2Fye1xuICBuYW1lO1xuICBhZ2U7XG4gIGdlbmRlcjtcbiAgcGhvbmU7XG5cbiAgYnVpbGRDbGllbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBDbGllbnQgJHt0aGlzLm5hbWV9IGhhcyBhIGNhciAke3RoaXMuYnJhbmR9IG1vZGVsICR7dGhpcy5tb2RlbH0gaW4gY29sb3IgJHt0aGlzLmNvbG9yfSB5ZWFyICR7dGhpcy55ZWFyfWA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihicmFuZCwgbW9kZWwsIGNvbG9yLCB5ZWFyLCBuYW1lLCBhZ2UsIGdlbmRlciwgcGhvbmUpe1xuICAgIHN1cGVyKGJyYW5kLCBtb2RlbCwgY29sb3IsIHllYXIpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hZ2UgPSBhZ2U7XG4gICAgdGhpcy5nZW5kZXIgPSBnZW5kZXI7XG4gICAgdGhpcy5waG9uZSA9IHBob25lO1xuICB9XG59XG5cbmV4cG9ydCB7Q2xpZW50IGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IGNhck1vZHVsZSBmcm9tICcuL21vZHVsZXMvY2FyLm1vZHVsZSc7XG5pbXBvcnQgY2xpZW50TW9kdWxlIGZyb20gJy4vbW9kdWxlcy9jbGllbnQubW9kdWxlJztcblxuaW1wb3J0IG5hbWVzIGZyb20gJy4vbW9kdWxlcy9uYW1lcyc7XG5cbihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgY2FyTW9kdWxlKCk7XG4gIGNsaWVudE1vZHVsZSgpO1xuICBuYW1lcygpO1xufSkoKTtcbiIsImltcG9ydCBDYXIgZnJvbSAnLi4vY2xhc3MvY2FyLmNsYXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICBsZXQga2lhID0gbmV3IENhcignS0lBJywgJ1Nwb3J0YWdlJywgJ2dyYXknLCAyMDE2KTtcbiAgY29uc29sZS5sb2coa2lhLmJ1aWxkQ2FyKCkpO1xufVxuIiwiaW1wb3J0IENsaWVudCBmcm9tICcuLi9jbGFzcy9jbGllbnQuY2xhc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIGxldCBicmFuZG9uID0gbmV3IENsaWVudCgnS0lBJywgJ1Nwb3J0YWdlJywgJ2dyYXknLCAyMDE2LCAnQnJhbmRvbicsIDIyLCA4NDQ4NjgwMCwgJ01hbGUnKTtcbiAgY29uc29sZS5sb2coYnJhbmRvbi5idWlsZENsaWVudCgpKTtcbn1cbiIsImltcG9ydCB7cHJpbnRBcnJheX0gZnJvbSAnLi4vdXRpbHMvcHJpbnQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIGxldCBuYW1lcyA9IFsnQnJhbmRvbicsICdOYW5kYScsICdaYXlkYScsICdMdWlzJywgJ0pvbmF0aGFuJywgJ0pvc2h1YScsICdNYXJsZXknXTtcbiAgcHJpbnRBcnJheSguLi5uYW1lcyk7XG59XG4iLCJjb25zdCBwcmludEFycmF5ID0gKC4uLml0ZW1zKSA9PiB7XG4gIGZvcihsZXQgaXRlbSBvZiBpdGVtcyl7XG4gICAgY29uc29sZS5sb2coYFByaW50aW5nOiAke2l0ZW19YCk7XG4gIH1cbn1cblxuZXhwb3J0IHtwcmludEFycmF5fTtcbiJdfQ==
