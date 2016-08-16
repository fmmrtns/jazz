var Layer = require('../layer');
var template = require('../template');

module.exports = Rows;

function Rows(name, editor, template) {
  Layer.call(this, name, editor, template, 20);
}

Rows.prototype.__proto__ = Layer.prototype;

Rows.prototype.render = function() {
  var views = this.views;
  var rows = this.editor.rows;
  for (var i = 0; i < views.length; i++) {
    var view = views[i];
    var r = view;
    if (!view.visible) continue;

    if (r[1] > rows) view.clear();
  }
  this.renderAhead();
};