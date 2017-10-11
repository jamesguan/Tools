Number.prototype.formatMoney = function(c, d, t){
  var n = this,
      c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
      j = (j = i.length) > 3 ? j % 3 : 0;
     return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

commaSeparateNumber = function(val){
  while (/(\d+)(\d{3})/.test(val.toString())){
    val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
  }
  return val;
};

Date.prototype.mmddyyyy = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();
  return `${(mm>9 ? '' : '0') + mm}/${(dd>9 ? '' : '0') + dd}/${this.getFullYear()}`;
};

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.toTitleCase = function () {
  var str = "";
  this.split(/\s+/g).forEach(function(value, index){
    str += (index ? "" : " ") + value.capitalize();
  });
  return str;
};

String.prototype.replaceUnderscores = function (replacement=" ") {
  return this.replace(/_/g, replacement);
};

String.prototype.snakeToTitleCase = function (replacement=" ") {
  return this.replaceUnderscores(replacement).toTitleCase();
};

String.prototype.isValidSnakeCase = function () {
  return !(/[\x20-\x2F + \x3A-\x5E]/g.test(this));
};

String.prototype.formatType = function () {
  return this.toLowerCase() === 'asi' ? this.toUpperCase() : this.snakeToTitleCase();
};
