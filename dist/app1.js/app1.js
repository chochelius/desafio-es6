"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cliente = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this.nombre = nombre;
    this.impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "getNombre",
    get: function get() {
      return this.nombre;
    }
  }, {
    key: "setNombre",
    set: function set(nombre) {
      this.nombre = nombre;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto(MontoBrutoAnual, deducciones) {
      var totalBruto = MontoBrutoAnual + deducciones;
      var despuesDeImpuesto = totalBruto * 0.21 + totalBruto;
      return despuesDeImpuesto;
    }
  }]);

  return Cliente;
}();

exports.Cliente = Cliente;