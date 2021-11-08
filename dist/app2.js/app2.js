"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Impuestos = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Impuestos = /*#__PURE__*/function () {
  function Impuestos(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuestos);

    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "getMontoBrutoAnual",
    get: function get() {
      return this.montoBrutoAnual;
    }
  }, {
    key: "setMontoBrutoAnual",
    set: function set(montoBrutoAnual) {
      this.montoBrutoAnual = montoBrutoAnual;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this.deducciones;
    },
    set: function set(deducciones) {
      this.deducciones = deducciones;
    }
  }]);

  return Impuestos;
}();

exports.Impuestos = Impuestos;