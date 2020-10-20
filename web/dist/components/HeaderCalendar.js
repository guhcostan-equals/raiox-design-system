"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _icons = _interopRequireDefault(require("../../../tokens/js/icons"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _FontUtil = _interopRequireDefault(require("../utils/FontUtil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  padding: 0 4px 0 8px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  margin-right: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: ", " solid #e0e0e0;\n  box-sizing: border-box;\n  border-radius: 5px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  height: 56px;\n  justify-content: space-between;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 11px;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Month = _styledComponents["default"].div(_templateObject());

var Date = _styledComponents["default"].div(_templateObject2(), function (props) {
  return (0, _FontUtil["default"])(props.theme, 'body', 'medium', 'md', ['neutral', 'dark', 'base']);
});

var Container = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.styles.border.width.hairline;
});

var Values = _styledComponents["default"].div(_templateObject4());

var Label = _styledComponents["default"].div(_templateObject5(), function (props) {
  return (0, _FontUtil["default"])(props.theme, 'body', 'medium', 'sm', ['neutral', 'dark', 'base']);
}, function (props) {
  return props.color;
});

var Value = _styledComponents["default"].div(_templateObject6(), function (props) {
  return (0, _FontUtil["default"])(props.theme, 'body', 'light', 'lg', ['neutral', 'dark', 'base']);
}, function (props) {
  return props.notLast && '24px';
});

var MoneySign = _styledComponents["default"].div(_templateObject7(), function (props) {
  return (0, _FontUtil["default"])(props.theme, 'body', 'regular', 'sm', ['neutral', 'dark', 'base']);
});

var HeaderCalendar = function HeaderCalendar(props) {
  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(Month, null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    size: "14px",
    appearance: "primary",
    style: {
      marginRight: '16px',
      cursor: 'pointer'
    },
    path: _icons["default"]['chevron-left']
  }), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    appearance: "primary",
    style: {
      cursor: 'pointer'
    },
    size: "14px",
    path: _icons["default"]['chevron-right']
  }), /*#__PURE__*/_react["default"].createElement(Date, null, (0, _dayjs["default"])().set('month', props.month).set('year', props.year).format('MMMM [de] YYYY'))), /*#__PURE__*/_react["default"].createElement(Values, null, props.values && props.values.map(function (_ref, index) {
    var label = _ref.label,
        value = _ref.value,
        color = _ref.color;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Label, {
      color: color
    }, label), /*#__PURE__*/_react["default"].createElement(MoneySign, null, "R$"), /*#__PURE__*/_react["default"].createElement(Value, {
      notLast: index !== props.values.length - 1
    }, value));
  })));
};

var _default = HeaderCalendar;
exports["default"] = _default;
HeaderCalendar.propTypes = {
  month: _propTypes["default"].number,
  values: _propTypes["default"].array,
  year: _propTypes["default"].number
};