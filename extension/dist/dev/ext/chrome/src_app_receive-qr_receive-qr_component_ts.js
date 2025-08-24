(self["webpackChunkzelf_extension"] = self["webpackChunkzelf_extension"] || []).push([["src_app_receive-qr_receive-qr_component_ts"],{

/***/ 6455:
/*!*************************************************************!*\
  !*** ./node_modules/qr-code-styling/lib/qr-code-styling.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 85000)["default"]);
!function (t, e) {
   true ? module.exports = e() : 0;
}(this, () => (() => {
  var t = {
      873: (t, e) => {
        var i,
          r,
          n = function () {
            var t = function (t, e) {
              var i = t,
                r = s[e],
                n = null,
                o = 0,
                h = null,
                p = [],
                v = {},
                m = function (t, e) {
                  n = function (t) {
                    for (var e = new Array(t), i = 0; i < t; i += 1) {
                      e[i] = new Array(t);
                      for (var r = 0; r < t; r += 1) e[i][r] = null;
                    }
                    return e;
                  }(o = 4 * i + 17), b(0, 0), b(o - 7, 0), b(0, o - 7), x(), y(), C(t, e), i >= 7 && S(t), null == h && (h = M(i, r, p)), A(h, e);
                },
                b = function (t, e) {
                  for (var i = -1; i <= 7; i += 1) if (!(t + i <= -1 || o <= t + i)) for (var r = -1; r <= 7; r += 1) e + r <= -1 || o <= e + r || (n[t + i][e + r] = 0 <= i && i <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= r && r <= 4);
                },
                y = function () {
                  for (var t = 8; t < o - 8; t += 1) null == n[t][6] && (n[t][6] = t % 2 == 0);
                  for (var e = 8; e < o - 8; e += 1) null == n[6][e] && (n[6][e] = e % 2 == 0);
                },
                x = function () {
                  for (var t = a.getPatternPosition(i), e = 0; e < t.length; e += 1) for (var r = 0; r < t.length; r += 1) {
                    var o = t[e],
                      s = t[r];
                    if (null == n[o][s]) for (var h = -2; h <= 2; h += 1) for (var d = -2; d <= 2; d += 1) n[o + h][s + d] = -2 == h || 2 == h || -2 == d || 2 == d || 0 == h && 0 == d;
                  }
                },
                S = function (t) {
                  for (var e = a.getBCHTypeNumber(i), r = 0; r < 18; r += 1) {
                    var s = !t && 1 == (e >> r & 1);
                    n[Math.floor(r / 3)][r % 3 + o - 8 - 3] = s;
                  }
                  for (r = 0; r < 18; r += 1) s = !t && 1 == (e >> r & 1), n[r % 3 + o - 8 - 3][Math.floor(r / 3)] = s;
                },
                C = function (t, e) {
                  for (var i = r << 3 | e, s = a.getBCHTypeInfo(i), h = 0; h < 15; h += 1) {
                    var d = !t && 1 == (s >> h & 1);
                    h < 6 ? n[h][8] = d : h < 8 ? n[h + 1][8] = d : n[o - 15 + h][8] = d;
                  }
                  for (h = 0; h < 15; h += 1) d = !t && 1 == (s >> h & 1), h < 8 ? n[8][o - h - 1] = d : h < 9 ? n[8][15 - h - 1 + 1] = d : n[8][15 - h - 1] = d;
                  n[o - 8][8] = !t;
                },
                A = function (t, e) {
                  for (var i = -1, r = o - 1, s = 7, h = 0, d = a.getMaskFunction(e), u = o - 1; u > 0; u -= 2) for (6 == u && (u -= 1);;) {
                    for (var c = 0; c < 2; c += 1) if (null == n[r][u - c]) {
                      var l = !1;
                      h < t.length && (l = 1 == (t[h] >>> s & 1)), d(r, u - c) && (l = !l), n[r][u - c] = l, -1 == (s -= 1) && (h += 1, s = 7);
                    }
                    if ((r += i) < 0 || o <= r) {
                      r -= i, i = -i;
                      break;
                    }
                  }
                },
                M = function (t, e, i) {
                  for (var r = u.getRSBlocks(t, e), n = c(), o = 0; o < i.length; o += 1) {
                    var s = i[o];
                    n.put(s.getMode(), 4), n.put(s.getLength(), a.getLengthInBits(s.getMode(), t)), s.write(n);
                  }
                  var h = 0;
                  for (o = 0; o < r.length; o += 1) h += r[o].dataCount;
                  if (n.getLengthInBits() > 8 * h) throw "code length overflow. (" + n.getLengthInBits() + ">" + 8 * h + ")";
                  for (n.getLengthInBits() + 4 <= 8 * h && n.put(0, 4); n.getLengthInBits() % 8 != 0;) n.putBit(!1);
                  for (; !(n.getLengthInBits() >= 8 * h || (n.put(236, 8), n.getLengthInBits() >= 8 * h));) n.put(17, 8);
                  return function (t, e) {
                    for (var i = 0, r = 0, n = 0, o = new Array(e.length), s = new Array(e.length), h = 0; h < e.length; h += 1) {
                      var u = e[h].dataCount,
                        c = e[h].totalCount - u;
                      r = Math.max(r, u), n = Math.max(n, c), o[h] = new Array(u);
                      for (var l = 0; l < o[h].length; l += 1) o[h][l] = 255 & t.getBuffer()[l + i];
                      i += u;
                      var g = a.getErrorCorrectPolynomial(c),
                        f = d(o[h], g.getLength() - 1).mod(g);
                      for (s[h] = new Array(g.getLength() - 1), l = 0; l < s[h].length; l += 1) {
                        var w = l + f.getLength() - s[h].length;
                        s[h][l] = w >= 0 ? f.getAt(w) : 0;
                      }
                    }
                    var p = 0;
                    for (l = 0; l < e.length; l += 1) p += e[l].totalCount;
                    var v = new Array(p),
                      _ = 0;
                    for (l = 0; l < r; l += 1) for (h = 0; h < e.length; h += 1) l < o[h].length && (v[_] = o[h][l], _ += 1);
                    for (l = 0; l < n; l += 1) for (h = 0; h < e.length; h += 1) l < s[h].length && (v[_] = s[h][l], _ += 1);
                    return v;
                  }(n, r);
                };
              v.addData = function (t, e) {
                var i = null;
                switch (e = e || "Byte") {
                  case "Numeric":
                    i = l(t);
                    break;
                  case "Alphanumeric":
                    i = g(t);
                    break;
                  case "Byte":
                    i = f(t);
                    break;
                  case "Kanji":
                    i = w(t);
                    break;
                  default:
                    throw "mode:" + e;
                }
                p.push(i), h = null;
              }, v.isDark = function (t, e) {
                if (t < 0 || o <= t || e < 0 || o <= e) throw t + "," + e;
                return n[t][e];
              }, v.getModuleCount = function () {
                return o;
              }, v.make = function () {
                if (i < 1) {
                  for (var t = 1; t < 40; t++) {
                    for (var e = u.getRSBlocks(t, r), n = c(), o = 0; o < p.length; o++) {
                      var s = p[o];
                      n.put(s.getMode(), 4), n.put(s.getLength(), a.getLengthInBits(s.getMode(), t)), s.write(n);
                    }
                    var h = 0;
                    for (o = 0; o < e.length; o++) h += e[o].dataCount;
                    if (n.getLengthInBits() <= 8 * h) break;
                  }
                  i = t;
                }
                m(!1, function () {
                  for (var t = 0, e = 0, i = 0; i < 8; i += 1) {
                    m(!0, i);
                    var r = a.getLostPoint(v);
                    (0 == i || t > r) && (t = r, e = i);
                  }
                  return e;
                }());
              }, v.createTableTag = function (t, e) {
                t = t || 2;
                var i = "";
                i += '<table style="', i += " border-width: 0px; border-style: none;", i += " border-collapse: collapse;", i += " padding: 0px; margin: " + (e = void 0 === e ? 4 * t : e) + "px;", i += '">', i += "<tbody>";
                for (var r = 0; r < v.getModuleCount(); r += 1) {
                  i += "<tr>";
                  for (var n = 0; n < v.getModuleCount(); n += 1) i += '<td style="', i += " border-width: 0px; border-style: none;", i += " border-collapse: collapse;", i += " padding: 0px; margin: 0px;", i += " width: " + t + "px;", i += " height: " + t + "px;", i += " background-color: ", i += v.isDark(r, n) ? "#000000" : "#ffffff", i += ";", i += '"/>';
                  i += "</tr>";
                }
                return (i += "</tbody>") + "</table>";
              }, v.createSvgTag = function (t, e, i, r) {
                var n = {};
                "object" == typeof arguments[0] && (t = (n = arguments[0]).cellSize, e = n.margin, i = n.alt, r = n.title), t = t || 2, e = void 0 === e ? 4 * t : e, (i = "string" == typeof i ? {
                  text: i
                } : i || {}).text = i.text || null, i.id = i.text ? i.id || "qrcode-description" : null, (r = "string" == typeof r ? {
                  text: r
                } : r || {}).text = r.text || null, r.id = r.text ? r.id || "qrcode-title" : null;
                var o,
                  s,
                  a,
                  h,
                  d = v.getModuleCount() * t + 2 * e,
                  u = "";
                for (h = "l" + t + ",0 0," + t + " -" + t + ",0 0,-" + t + "z ", u += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', u += n.scalable ? "" : ' width="' + d + 'px" height="' + d + 'px"', u += ' viewBox="0 0 ' + d + " " + d + '" ', u += ' preserveAspectRatio="xMinYMin meet"', u += r.text || i.text ? ' role="img" aria-labelledby="' + $([r.id, i.id].join(" ").trim()) + '"' : "", u += ">", u += r.text ? '<title id="' + $(r.id) + '">' + $(r.text) + "</title>" : "", u += i.text ? '<description id="' + $(i.id) + '">' + $(i.text) + "</description>" : "", u += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', u += '<path d="', s = 0; s < v.getModuleCount(); s += 1) for (a = s * t + e, o = 0; o < v.getModuleCount(); o += 1) v.isDark(s, o) && (u += "M" + (o * t + e) + "," + a + h);
                return (u += '" stroke="transparent" fill="black"/>') + "</svg>";
              }, v.createDataURL = function (t, e) {
                t = t || 2, e = void 0 === e ? 4 * t : e;
                var i = v.getModuleCount() * t + 2 * e,
                  r = e,
                  n = i - e;
                return _(i, i, function (e, i) {
                  if (r <= e && e < n && r <= i && i < n) {
                    var o = Math.floor((e - r) / t),
                      s = Math.floor((i - r) / t);
                    return v.isDark(s, o) ? 0 : 1;
                  }
                  return 1;
                });
              }, v.createImgTag = function (t, e, i) {
                t = t || 2, e = void 0 === e ? 4 * t : e;
                var r = v.getModuleCount() * t + 2 * e,
                  n = "";
                return n += "<img", n += ' src="', n += v.createDataURL(t, e), n += '"', n += ' width="', n += r, n += '"', n += ' height="', n += r, n += '"', i && (n += ' alt="', n += $(i), n += '"'), n + "/>";
              };
              var $ = function (t) {
                for (var e = "", i = 0; i < t.length; i += 1) {
                  var r = t.charAt(i);
                  switch (r) {
                    case "<":
                      e += "&lt;";
                      break;
                    case ">":
                      e += "&gt;";
                      break;
                    case "&":
                      e += "&amp;";
                      break;
                    case '"':
                      e += "&quot;";
                      break;
                    default:
                      e += r;
                  }
                }
                return e;
              };
              return v.createASCII = function (t, e) {
                if ((t = t || 1) < 2) return function (t) {
                  t = void 0 === t ? 2 : t;
                  var e,
                    i,
                    r,
                    n,
                    o,
                    s = 1 * v.getModuleCount() + 2 * t,
                    a = t,
                    h = s - t,
                    d = {
                      "██": "█",
                      "█ ": "▀",
                      " █": "▄",
                      "  ": " "
                    },
                    u = {
                      "██": "▀",
                      "█ ": "▀",
                      " █": " ",
                      "  ": " "
                    },
                    c = "";
                  for (e = 0; e < s; e += 2) {
                    for (r = Math.floor((e - a) / 1), n = Math.floor((e + 1 - a) / 1), i = 0; i < s; i += 1) o = "█", a <= i && i < h && a <= e && e < h && v.isDark(r, Math.floor((i - a) / 1)) && (o = " "), a <= i && i < h && a <= e + 1 && e + 1 < h && v.isDark(n, Math.floor((i - a) / 1)) ? o += " " : o += "█", c += t < 1 && e + 1 >= h ? u[o] : d[o];
                    c += "\n";
                  }
                  return s % 2 && t > 0 ? c.substring(0, c.length - s - 1) + Array(s + 1).join("▀") : c.substring(0, c.length - 1);
                }(e);
                t -= 1, e = void 0 === e ? 2 * t : e;
                var i,
                  r,
                  n,
                  o,
                  s = v.getModuleCount() * t + 2 * e,
                  a = e,
                  h = s - e,
                  d = Array(t + 1).join("██"),
                  u = Array(t + 1).join("  "),
                  c = "",
                  l = "";
                for (i = 0; i < s; i += 1) {
                  for (n = Math.floor((i - a) / t), l = "", r = 0; r < s; r += 1) o = 1, a <= r && r < h && a <= i && i < h && v.isDark(n, Math.floor((r - a) / t)) && (o = 0), l += o ? d : u;
                  for (n = 0; n < t; n += 1) c += l + "\n";
                }
                return c.substring(0, c.length - 1);
              }, v.renderTo2dContext = function (t, e) {
                e = e || 2;
                for (var i = v.getModuleCount(), r = 0; r < i; r++) for (var n = 0; n < i; n++) t.fillStyle = v.isDark(r, n) ? "black" : "white", t.fillRect(r * e, n * e, e, e);
              }, v;
            };
            t.stringToBytes = (t.stringToBytesFuncs = {
              default: function (t) {
                for (var e = [], i = 0; i < t.length; i += 1) {
                  var r = t.charCodeAt(i);
                  e.push(255 & r);
                }
                return e;
              }
            }).default, t.createStringToBytes = function (t, e) {
              var i = function () {
                  for (var i = v(t), r = function () {
                      var t = i.read();
                      if (-1 == t) throw "eof";
                      return t;
                    }, n = 0, o = {};;) {
                    var s = i.read();
                    if (-1 == s) break;
                    var a = r(),
                      h = r() << 8 | r();
                    o[String.fromCharCode(s << 8 | a)] = h, n += 1;
                  }
                  if (n != e) throw n + " != " + e;
                  return o;
                }(),
                r = "?".charCodeAt(0);
              return function (t) {
                for (var e = [], n = 0; n < t.length; n += 1) {
                  var o = t.charCodeAt(n);
                  if (o < 128) e.push(o);else {
                    var s = i[t.charAt(n)];
                    "number" == typeof s ? (255 & s) == s ? e.push(s) : (e.push(s >>> 8), e.push(255 & s)) : e.push(r);
                  }
                }
                return e;
              };
            };
            var e,
              i,
              r,
              n,
              o,
              s = {
                L: 1,
                M: 0,
                Q: 3,
                H: 2
              },
              a = (e = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], i = 1335, r = 7973, o = function (t) {
                for (var e = 0; 0 != t;) e += 1, t >>>= 1;
                return e;
              }, (n = {}).getBCHTypeInfo = function (t) {
                for (var e = t << 10; o(e) - o(i) >= 0;) e ^= i << o(e) - o(i);
                return 21522 ^ (t << 10 | e);
              }, n.getBCHTypeNumber = function (t) {
                for (var e = t << 12; o(e) - o(r) >= 0;) e ^= r << o(e) - o(r);
                return t << 12 | e;
              }, n.getPatternPosition = function (t) {
                return e[t - 1];
              }, n.getMaskFunction = function (t) {
                switch (t) {
                  case 0:
                    return function (t, e) {
                      return (t + e) % 2 == 0;
                    };
                  case 1:
                    return function (t, e) {
                      return t % 2 == 0;
                    };
                  case 2:
                    return function (t, e) {
                      return e % 3 == 0;
                    };
                  case 3:
                    return function (t, e) {
                      return (t + e) % 3 == 0;
                    };
                  case 4:
                    return function (t, e) {
                      return (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0;
                    };
                  case 5:
                    return function (t, e) {
                      return t * e % 2 + t * e % 3 == 0;
                    };
                  case 6:
                    return function (t, e) {
                      return (t * e % 2 + t * e % 3) % 2 == 0;
                    };
                  case 7:
                    return function (t, e) {
                      return (t * e % 3 + (t + e) % 2) % 2 == 0;
                    };
                  default:
                    throw "bad maskPattern:" + t;
                }
              }, n.getErrorCorrectPolynomial = function (t) {
                for (var e = d([1], 0), i = 0; i < t; i += 1) e = e.multiply(d([1, h.gexp(i)], 0));
                return e;
              }, n.getLengthInBits = function (t, e) {
                if (1 <= e && e < 10) switch (t) {
                  case 1:
                    return 10;
                  case 2:
                    return 9;
                  case 4:
                  case 8:
                    return 8;
                  default:
                    throw "mode:" + t;
                } else if (e < 27) switch (t) {
                  case 1:
                    return 12;
                  case 2:
                    return 11;
                  case 4:
                    return 16;
                  case 8:
                    return 10;
                  default:
                    throw "mode:" + t;
                } else {
                  if (!(e < 41)) throw "type:" + e;
                  switch (t) {
                    case 1:
                      return 14;
                    case 2:
                      return 13;
                    case 4:
                      return 16;
                    case 8:
                      return 12;
                    default:
                      throw "mode:" + t;
                  }
                }
              }, n.getLostPoint = function (t) {
                for (var e = t.getModuleCount(), i = 0, r = 0; r < e; r += 1) for (var n = 0; n < e; n += 1) {
                  for (var o = 0, s = t.isDark(r, n), a = -1; a <= 1; a += 1) if (!(r + a < 0 || e <= r + a)) for (var h = -1; h <= 1; h += 1) n + h < 0 || e <= n + h || 0 == a && 0 == h || s == t.isDark(r + a, n + h) && (o += 1);
                  o > 5 && (i += 3 + o - 5);
                }
                for (r = 0; r < e - 1; r += 1) for (n = 0; n < e - 1; n += 1) {
                  var d = 0;
                  t.isDark(r, n) && (d += 1), t.isDark(r + 1, n) && (d += 1), t.isDark(r, n + 1) && (d += 1), t.isDark(r + 1, n + 1) && (d += 1), 0 != d && 4 != d || (i += 3);
                }
                for (r = 0; r < e; r += 1) for (n = 0; n < e - 6; n += 1) t.isDark(r, n) && !t.isDark(r, n + 1) && t.isDark(r, n + 2) && t.isDark(r, n + 3) && t.isDark(r, n + 4) && !t.isDark(r, n + 5) && t.isDark(r, n + 6) && (i += 40);
                for (n = 0; n < e; n += 1) for (r = 0; r < e - 6; r += 1) t.isDark(r, n) && !t.isDark(r + 1, n) && t.isDark(r + 2, n) && t.isDark(r + 3, n) && t.isDark(r + 4, n) && !t.isDark(r + 5, n) && t.isDark(r + 6, n) && (i += 40);
                var u = 0;
                for (n = 0; n < e; n += 1) for (r = 0; r < e; r += 1) t.isDark(r, n) && (u += 1);
                return i + Math.abs(100 * u / e / e - 50) / 5 * 10;
              }, n),
              h = function () {
                for (var t = new Array(256), e = new Array(256), i = 0; i < 8; i += 1) t[i] = 1 << i;
                for (i = 8; i < 256; i += 1) t[i] = t[i - 4] ^ t[i - 5] ^ t[i - 6] ^ t[i - 8];
                for (i = 0; i < 255; i += 1) e[t[i]] = i;
                return {
                  glog: function (t) {
                    if (t < 1) throw "glog(" + t + ")";
                    return e[t];
                  },
                  gexp: function (e) {
                    for (; e < 0;) e += 255;
                    for (; e >= 256;) e -= 255;
                    return t[e];
                  }
                };
              }();
            function d(t, e) {
              if (void 0 === t.length) throw t.length + "/" + e;
              var i = function () {
                  for (var i = 0; i < t.length && 0 == t[i];) i += 1;
                  for (var r = new Array(t.length - i + e), n = 0; n < t.length - i; n += 1) r[n] = t[n + i];
                  return r;
                }(),
                r = {
                  getAt: function (t) {
                    return i[t];
                  },
                  getLength: function () {
                    return i.length;
                  },
                  multiply: function (t) {
                    for (var e = new Array(r.getLength() + t.getLength() - 1), i = 0; i < r.getLength(); i += 1) for (var n = 0; n < t.getLength(); n += 1) e[i + n] ^= h.gexp(h.glog(r.getAt(i)) + h.glog(t.getAt(n)));
                    return d(e, 0);
                  },
                  mod: function (t) {
                    if (r.getLength() - t.getLength() < 0) return r;
                    for (var e = h.glog(r.getAt(0)) - h.glog(t.getAt(0)), i = new Array(r.getLength()), n = 0; n < r.getLength(); n += 1) i[n] = r.getAt(n);
                    for (n = 0; n < t.getLength(); n += 1) i[n] ^= h.gexp(h.glog(t.getAt(n)) + e);
                    return d(i, 0).mod(t);
                  }
                };
              return r;
            }
            var u = function () {
                var t = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
                  e = function (t, e) {
                    var i = {};
                    return i.totalCount = t, i.dataCount = e, i;
                  },
                  i = {
                    getRSBlocks: function (i, r) {
                      var n = function (e, i) {
                        switch (i) {
                          case s.L:
                            return t[4 * (e - 1) + 0];
                          case s.M:
                            return t[4 * (e - 1) + 1];
                          case s.Q:
                            return t[4 * (e - 1) + 2];
                          case s.H:
                            return t[4 * (e - 1) + 3];
                          default:
                            return;
                        }
                      }(i, r);
                      if (void 0 === n) throw "bad rs block @ typeNumber:" + i + "/errorCorrectionLevel:" + r;
                      for (var o = n.length / 3, a = [], h = 0; h < o; h += 1) for (var d = n[3 * h + 0], u = n[3 * h + 1], c = n[3 * h + 2], l = 0; l < d; l += 1) a.push(e(u, c));
                      return a;
                    }
                  };
                return i;
              }(),
              c = function () {
                var t = [],
                  e = 0,
                  i = {
                    getBuffer: function () {
                      return t;
                    },
                    getAt: function (e) {
                      var i = Math.floor(e / 8);
                      return 1 == (t[i] >>> 7 - e % 8 & 1);
                    },
                    put: function (t, e) {
                      for (var r = 0; r < e; r += 1) i.putBit(1 == (t >>> e - r - 1 & 1));
                    },
                    getLengthInBits: function () {
                      return e;
                    },
                    putBit: function (i) {
                      var r = Math.floor(e / 8);
                      t.length <= r && t.push(0), i && (t[r] |= 128 >>> e % 8), e += 1;
                    }
                  };
                return i;
              },
              l = function (t) {
                var e = t,
                  i = {
                    getMode: function () {
                      return 1;
                    },
                    getLength: function (t) {
                      return e.length;
                    },
                    write: function (t) {
                      for (var i = e, n = 0; n + 2 < i.length;) t.put(r(i.substring(n, n + 3)), 10), n += 3;
                      n < i.length && (i.length - n == 1 ? t.put(r(i.substring(n, n + 1)), 4) : i.length - n == 2 && t.put(r(i.substring(n, n + 2)), 7));
                    }
                  },
                  r = function (t) {
                    for (var e = 0, i = 0; i < t.length; i += 1) e = 10 * e + n(t.charAt(i));
                    return e;
                  },
                  n = function (t) {
                    if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
                    throw "illegal char :" + t;
                  };
                return i;
              },
              g = function (t) {
                var e = t,
                  i = {
                    getMode: function () {
                      return 2;
                    },
                    getLength: function (t) {
                      return e.length;
                    },
                    write: function (t) {
                      for (var i = e, n = 0; n + 1 < i.length;) t.put(45 * r(i.charAt(n)) + r(i.charAt(n + 1)), 11), n += 2;
                      n < i.length && t.put(r(i.charAt(n)), 6);
                    }
                  },
                  r = function (t) {
                    if ("0" <= t && t <= "9") return t.charCodeAt(0) - "0".charCodeAt(0);
                    if ("A" <= t && t <= "Z") return t.charCodeAt(0) - "A".charCodeAt(0) + 10;
                    switch (t) {
                      case " ":
                        return 36;
                      case "$":
                        return 37;
                      case "%":
                        return 38;
                      case "*":
                        return 39;
                      case "+":
                        return 40;
                      case "-":
                        return 41;
                      case ".":
                        return 42;
                      case "/":
                        return 43;
                      case ":":
                        return 44;
                      default:
                        throw "illegal char :" + t;
                    }
                  };
                return i;
              },
              f = function (e) {
                var i = t.stringToBytes(e);
                return {
                  getMode: function () {
                    return 4;
                  },
                  getLength: function (t) {
                    return i.length;
                  },
                  write: function (t) {
                    for (var e = 0; e < i.length; e += 1) t.put(i[e], 8);
                  }
                };
              },
              w = function (e) {
                var i = t.stringToBytesFuncs.SJIS;
                if (!i) throw "sjis not supported.";
                !function () {
                  var t = i("友");
                  if (2 != t.length || 38726 != (t[0] << 8 | t[1])) throw "sjis not supported.";
                }();
                var r = i(e),
                  n = {
                    getMode: function () {
                      return 8;
                    },
                    getLength: function (t) {
                      return ~~(r.length / 2);
                    },
                    write: function (t) {
                      for (var e = r, i = 0; i + 1 < e.length;) {
                        var n = (255 & e[i]) << 8 | 255 & e[i + 1];
                        if (33088 <= n && n <= 40956) n -= 33088;else {
                          if (!(57408 <= n && n <= 60351)) throw "illegal char at " + (i + 1) + "/" + n;
                          n -= 49472;
                        }
                        n = 192 * (n >>> 8 & 255) + (255 & n), t.put(n, 13), i += 2;
                      }
                      if (i < e.length) throw "illegal char at " + (i + 1);
                    }
                  };
                return n;
              },
              p = function () {
                var t = [],
                  e = {
                    writeByte: function (e) {
                      t.push(255 & e);
                    },
                    writeShort: function (t) {
                      e.writeByte(t), e.writeByte(t >>> 8);
                    },
                    writeBytes: function (t, i, r) {
                      i = i || 0, r = r || t.length;
                      for (var n = 0; n < r; n += 1) e.writeByte(t[n + i]);
                    },
                    writeString: function (t) {
                      for (var i = 0; i < t.length; i += 1) e.writeByte(t.charCodeAt(i));
                    },
                    toByteArray: function () {
                      return t;
                    },
                    toString: function () {
                      var e = "";
                      e += "[";
                      for (var i = 0; i < t.length; i += 1) i > 0 && (e += ","), e += t[i];
                      return e + "]";
                    }
                  };
                return e;
              },
              v = function (t) {
                var e = t,
                  i = 0,
                  r = 0,
                  n = 0,
                  o = {
                    read: function () {
                      for (; n < 8;) {
                        if (i >= e.length) {
                          if (0 == n) return -1;
                          throw "unexpected end of file./" + n;
                        }
                        var t = e.charAt(i);
                        if (i += 1, "=" == t) return n = 0, -1;
                        t.match(/^\s$/) || (r = r << 6 | s(t.charCodeAt(0)), n += 6);
                      }
                      var o = r >>> n - 8 & 255;
                      return n -= 8, o;
                    }
                  },
                  s = function (t) {
                    if (65 <= t && t <= 90) return t - 65;
                    if (97 <= t && t <= 122) return t - 97 + 26;
                    if (48 <= t && t <= 57) return t - 48 + 52;
                    if (43 == t) return 62;
                    if (47 == t) return 63;
                    throw "c:" + t;
                  };
                return o;
              },
              _ = function (t, e, i) {
                for (var r = function (t, e) {
                    var i = t,
                      r = e,
                      n = new Array(t * e),
                      o = {
                        setPixel: function (t, e, r) {
                          n[e * i + t] = r;
                        },
                        write: function (t) {
                          t.writeString("GIF87a"), t.writeShort(i), t.writeShort(r), t.writeByte(128), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(255), t.writeByte(255), t.writeByte(255), t.writeString(","), t.writeShort(0), t.writeShort(0), t.writeShort(i), t.writeShort(r), t.writeByte(0);
                          var e = s(2);
                          t.writeByte(2);
                          for (var n = 0; e.length - n > 255;) t.writeByte(255), t.writeBytes(e, n, 255), n += 255;
                          t.writeByte(e.length - n), t.writeBytes(e, n, e.length - n), t.writeByte(0), t.writeString(";");
                        }
                      },
                      s = function (t) {
                        for (var e = 1 << t, i = 1 + (1 << t), r = t + 1, o = a(), s = 0; s < e; s += 1) o.add(String.fromCharCode(s));
                        o.add(String.fromCharCode(e)), o.add(String.fromCharCode(i));
                        var h,
                          d,
                          u,
                          c = p(),
                          l = (h = c, d = 0, u = 0, {
                            write: function (t, e) {
                              if (t >>> e != 0) throw "length over";
                              for (; d + e >= 8;) h.writeByte(255 & (t << d | u)), e -= 8 - d, t >>>= 8 - d, u = 0, d = 0;
                              u |= t << d, d += e;
                            },
                            flush: function () {
                              d > 0 && h.writeByte(u);
                            }
                          });
                        l.write(e, r);
                        var g = 0,
                          f = String.fromCharCode(n[g]);
                        for (g += 1; g < n.length;) {
                          var w = String.fromCharCode(n[g]);
                          g += 1, o.contains(f + w) ? f += w : (l.write(o.indexOf(f), r), o.size() < 4095 && (o.size() == 1 << r && (r += 1), o.add(f + w)), f = w);
                        }
                        return l.write(o.indexOf(f), r), l.write(i, r), l.flush(), c.toByteArray();
                      },
                      a = function () {
                        var t = {},
                          e = 0,
                          i = {
                            add: function (r) {
                              if (i.contains(r)) throw "dup key:" + r;
                              t[r] = e, e += 1;
                            },
                            size: function () {
                              return e;
                            },
                            indexOf: function (e) {
                              return t[e];
                            },
                            contains: function (e) {
                              return void 0 !== t[e];
                            }
                          };
                        return i;
                      };
                    return o;
                  }(t, e), n = 0; n < e; n += 1) for (var o = 0; o < t; o += 1) r.setPixel(o, n, i(o, n));
                var s = p();
                r.write(s);
                for (var a = function () {
                    var t = 0,
                      e = 0,
                      i = 0,
                      r = "",
                      n = {},
                      o = function (t) {
                        r += String.fromCharCode(s(63 & t));
                      },
                      s = function (t) {
                        if (t < 0) ;else {
                          if (t < 26) return 65 + t;
                          if (t < 52) return t - 26 + 97;
                          if (t < 62) return t - 52 + 48;
                          if (62 == t) return 43;
                          if (63 == t) return 47;
                        }
                        throw "n:" + t;
                      };
                    return n.writeByte = function (r) {
                      for (t = t << 8 | 255 & r, e += 8, i += 1; e >= 6;) o(t >>> e - 6), e -= 6;
                    }, n.flush = function () {
                      if (e > 0 && (o(t << 6 - e), t = 0, e = 0), i % 3 != 0) for (var n = 3 - i % 3, s = 0; s < n; s += 1) r += "=";
                    }, n.toString = function () {
                      return r;
                    }, n;
                  }(), h = s.toByteArray(), d = 0; d < h.length; d += 1) a.writeByte(h[d]);
                return a.flush(), "data:image/gif;base64," + a;
              };
            return t;
          }();
        n.stringToBytesFuncs["UTF-8"] = function (t) {
          return function (t) {
            for (var e = [], i = 0; i < t.length; i++) {
              var r = t.charCodeAt(i);
              r < 128 ? e.push(r) : r < 2048 ? e.push(192 | r >> 6, 128 | 63 & r) : r < 55296 || r >= 57344 ? e.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r) : (i++, r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(i)), e.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r));
            }
            return e;
          }(t);
        }, void 0 === (r = "function" == typeof (i = function () {
          return n;
        }) ? i.apply(e, []) : i) || (t.exports = r);
      }
    },
    e = {};
  function i(r) {
    var n = e[r];
    if (void 0 !== n) return n.exports;
    var o = e[r] = {
      exports: {}
    };
    return t[r](o, o.exports, i), o.exports;
  }
  i.n = t => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return i.d(e, {
      a: e
    }), e;
  }, i.d = (t, e) => {
    for (var r in e) i.o(e, r) && !i.o(t, r) && Object.defineProperty(t, r, {
      enumerable: !0,
      get: e[r]
    });
  }, i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
  var r = {};
  return (() => {
    "use strict";

    i.d(r, {
      default: () => $
    });
    const t = t => !!t && "object" == typeof t && !Array.isArray(t);
    function e(i, ...r) {
      if (!r.length) return i;
      const n = r.shift();
      return void 0 !== n && t(i) && t(n) ? (i = Object.assign({}, i), Object.keys(n).forEach(r => {
        const o = i[r],
          s = n[r];
        Array.isArray(o) && Array.isArray(s) ? i[r] = s : t(o) && t(s) ? i[r] = e(Object.assign({}, o), s) : i[r] = s;
      }), e(i, ...r)) : i;
    }
    function n(t, e) {
      const i = document.createElement("a");
      i.download = e, i.href = t, document.body.appendChild(i), i.click(), document.body.removeChild(i);
    }
    const o = {
      L: .07,
      M: .15,
      Q: .25,
      H: .3
    };
    class s {
      constructor({
        svg: t,
        type: e,
        window: i
      }) {
        this._svg = t, this._type = e, this._window = i;
      }
      draw(t, e, i, r) {
        let n;
        switch (this._type) {
          case "dots":
            n = this._drawDot;
            break;
          case "classy":
            n = this._drawClassy;
            break;
          case "classy-rounded":
            n = this._drawClassyRounded;
            break;
          case "rounded":
            n = this._drawRounded;
            break;
          case "extra-rounded":
            n = this._drawExtraRounded;
            break;
          default:
            n = this._drawSquare;
        }
        n.call(this, {
          x: t,
          y: e,
          size: i,
          getNeighbor: r
        });
      }
      _rotateFigure({
        x: t,
        y: e,
        size: i,
        rotation: r = 0,
        draw: n
      }) {
        var o;
        const s = t + i / 2,
          a = e + i / 2;
        n(), null === (o = this._element) || void 0 === o || o.setAttribute("transform", `rotate(${180 * r / Math.PI},${s},${a})`);
      }
      _basicDot(t) {
        const {
          size: e,
          x: i,
          y: r
        } = t;
        this._rotateFigure(Object.assign(Object.assign({}, t), {
          draw: () => {
            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "circle"), this._element.setAttribute("cx", String(i + e / 2)), this._element.setAttribute("cy", String(r + e / 2)), this._element.setAttribute("r", String(e / 2));
          }
        }));
      }
      _basicSquare(t) {
        const {
          size: e,
          x: i,
          y: r
        } = t;
        this._rotateFigure(Object.assign(Object.assign({}, t), {
          draw: () => {
            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect"), this._element.setAttribute("x", String(i)), this._element.setAttribute("y", String(r)), this._element.setAttribute("width", String(e)), this._element.setAttribute("height", String(e));
          }
        }));
      }
      _basicSideRounded(t) {
        const {
          size: e,
          x: i,
          y: r
        } = t;
        this._rotateFigure(Object.assign(Object.assign({}, t), {
          draw: () => {
            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${i} ${r}v ${e}h ` + e / 2 + `a ${e / 2} ${e / 2}, 0, 0, 0, 0 ${-e}`);
          }
        }));
      }
      _basicCornerRounded(t) {
        const {
          size: e,
          x: i,
          y: r
        } = t;
        this._rotateFigure(Object.assign(Object.assign({}, t), {
          draw: () => {
            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${i} ${r}v ${e}h ${e}v ` + -e / 2 + `a ${e / 2} ${e / 2}, 0, 0, 0, ${-e / 2} ${-e / 2}`);
          }
        }));
      }
      _basicCornerExtraRounded(t) {
        const {
          size: e,
          x: i,
          y: r
        } = t;
        this._rotateFigure(Object.assign(Object.assign({}, t), {
          draw: () => {
            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${i} ${r}v ${e}h ${e}a ${e} ${e}, 0, 0, 0, ${-e} ${-e}`);
          }
        }));
      }
      _basicCornersRounded(t) {
        const {
          size: e,
          x: i,
          y: r
        } = t;
        this._rotateFigure(Object.assign(Object.assign({}, t), {
          draw: () => {
            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${i} ${r}v ` + e / 2 + `a ${e / 2} ${e / 2}, 0, 0, 0, ${e / 2} ${e / 2}h ` + e / 2 + "v " + -e / 2 + `a ${e / 2} ${e / 2}, 0, 0, 0, ${-e / 2} ${-e / 2}`);
          }
        }));
      }
      _drawDot({
        x: t,
        y: e,
        size: i
      }) {
        this._basicDot({
          x: t,
          y: e,
          size: i,
          rotation: 0
        });
      }
      _drawSquare({
        x: t,
        y: e,
        size: i
      }) {
        this._basicSquare({
          x: t,
          y: e,
          size: i,
          rotation: 0
        });
      }
      _drawRounded({
        x: t,
        y: e,
        size: i,
        getNeighbor: r
      }) {
        const n = r ? +r(-1, 0) : 0,
          o = r ? +r(1, 0) : 0,
          s = r ? +r(0, -1) : 0,
          a = r ? +r(0, 1) : 0,
          h = n + o + s + a;
        if (0 !== h) {
          if (h > 2 || n && o || s && a) this._basicSquare({
            x: t,
            y: e,
            size: i,
            rotation: 0
          });else {
            if (2 === h) {
              let r = 0;
              return n && s ? r = Math.PI / 2 : s && o ? r = Math.PI : o && a && (r = -Math.PI / 2), void this._basicCornerRounded({
                x: t,
                y: e,
                size: i,
                rotation: r
              });
            }
            if (1 === h) {
              let r = 0;
              return s ? r = Math.PI / 2 : o ? r = Math.PI : a && (r = -Math.PI / 2), void this._basicSideRounded({
                x: t,
                y: e,
                size: i,
                rotation: r
              });
            }
          }
        } else this._basicDot({
          x: t,
          y: e,
          size: i,
          rotation: 0
        });
      }
      _drawExtraRounded({
        x: t,
        y: e,
        size: i,
        getNeighbor: r
      }) {
        const n = r ? +r(-1, 0) : 0,
          o = r ? +r(1, 0) : 0,
          s = r ? +r(0, -1) : 0,
          a = r ? +r(0, 1) : 0,
          h = n + o + s + a;
        if (0 !== h) {
          if (h > 2 || n && o || s && a) this._basicSquare({
            x: t,
            y: e,
            size: i,
            rotation: 0
          });else {
            if (2 === h) {
              let r = 0;
              return n && s ? r = Math.PI / 2 : s && o ? r = Math.PI : o && a && (r = -Math.PI / 2), void this._basicCornerExtraRounded({
                x: t,
                y: e,
                size: i,
                rotation: r
              });
            }
            if (1 === h) {
              let r = 0;
              return s ? r = Math.PI / 2 : o ? r = Math.PI : a && (r = -Math.PI / 2), void this._basicSideRounded({
                x: t,
                y: e,
                size: i,
                rotation: r
              });
            }
          }
        } else this._basicDot({
          x: t,
          y: e,
          size: i,
          rotation: 0
        });
      }
      _drawClassy({
        x: t,
        y: e,
        size: i,
        getNeighbor: r
      }) {
        const n = r ? +r(-1, 0) : 0,
          o = r ? +r(1, 0) : 0,
          s = r ? +r(0, -1) : 0,
          a = r ? +r(0, 1) : 0;
        0 !== n + o + s + a ? n || s ? o || a ? this._basicSquare({
          x: t,
          y: e,
          size: i,
          rotation: 0
        }) : this._basicCornerRounded({
          x: t,
          y: e,
          size: i,
          rotation: Math.PI / 2
        }) : this._basicCornerRounded({
          x: t,
          y: e,
          size: i,
          rotation: -Math.PI / 2
        }) : this._basicCornersRounded({
          x: t,
          y: e,
          size: i,
          rotation: Math.PI / 2
        });
      }
      _drawClassyRounded({
        x: t,
        y: e,
        size: i,
        getNeighbor: r
      }) {
        const n = r ? +r(-1, 0) : 0,
          o = r ? +r(1, 0) : 0,
          s = r ? +r(0, -1) : 0,
          a = r ? +r(0, 1) : 0;
        0 !== n + o + s + a ? n || s ? o || a ? this._basicSquare({
          x: t,
          y: e,
          size: i,
          rotation: 0
        }) : this._basicCornerExtraRounded({
          x: t,
          y: e,
          size: i,
          rotation: Math.PI / 2
        }) : this._basicCornerExtraRounded({
          x: t,
          y: e,
          size: i,
          rotation: -Math.PI / 2
        }) : this._basicCornersRounded({
          x: t,
          y: e,
          size: i,
          rotation: Math.PI / 2
        });
      }
    }
    const a = {
        dot: "dot",
        square: "square",
        extraRounded: "extra-rounded"
      },
      h = Object.values(a);
    class d {
      constructor({
        svg: t,
        type: e,
        window: i
      }) {
        this._svg = t, this._type = e, this._window = i;
      }
      draw(t, e, i, r) {
        let n;
        switch (this._type) {
          case a.square:
            n = this._drawSquare;
            break;
          case a.extraRounded:
            n = this._drawExtraRounded;
            break;
          default:
            n = this._drawDot;
        }
        n.call(this, {
          x: t,
          y: e,
          size: i,
          rotation: r
        });
      }
      _rotateFigure({
        x: t,
        y: e,
        size: i,
        rotation: r = 0,
        draw: n
      }) {
        var o;
        const s = t + i / 2,
          a = e + i / 2;
        n(), null === (o = this._element) || void 0 === o || o.setAttribute("transform", `rotate(${180 * r / Math.PI},${s},${a})`);
      }
      _basicDot(t) {
        const {
            size: e,
            x: i,
            y: r
          } = t,
          n = e / 7;
        this._rotateFigure(Object.assign(Object.assign({}, t), {
          draw: () => {
            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", `M ${i + e / 2} ${r}a ${e / 2} ${e / 2} 0 1 0 0.1 0zm 0 ${n}a ${e / 2 - n} ${e / 2 - n} 0 1 1 -0.1 0Z`);
          }
        }));
      }
      _basicSquare(t) {
        const {
            size: e,
            x: i,
            y: r
          } = t,
          n = e / 7;
        this._rotateFigure(Object.assign(Object.assign({}, t), {
          draw: () => {
            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", `M ${i} ${r}v ${e}h ${e}v ` + -e + "z" + `M ${i + n} ${r + n}h ` + (e - 2 * n) + "v " + (e - 2 * n) + "h " + (2 * n - e) + "z");
          }
        }));
      }
      _basicExtraRounded(t) {
        const {
            size: e,
            x: i,
            y: r
          } = t,
          n = e / 7;
        this._rotateFigure(Object.assign(Object.assign({}, t), {
          draw: () => {
            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", `M ${i} ${r + 2.5 * n}v ` + 2 * n + `a ${2.5 * n} ${2.5 * n}, 0, 0, 0, ${2.5 * n} ${2.5 * n}h ` + 2 * n + `a ${2.5 * n} ${2.5 * n}, 0, 0, 0, ${2.5 * n} ${2.5 * -n}v ` + -2 * n + `a ${2.5 * n} ${2.5 * n}, 0, 0, 0, ${2.5 * -n} ${2.5 * -n}h ` + -2 * n + `a ${2.5 * n} ${2.5 * n}, 0, 0, 0, ${2.5 * -n} ${2.5 * n}` + `M ${i + 2.5 * n} ${r + n}h ` + 2 * n + `a ${1.5 * n} ${1.5 * n}, 0, 0, 1, ${1.5 * n} ${1.5 * n}v ` + 2 * n + `a ${1.5 * n} ${1.5 * n}, 0, 0, 1, ${1.5 * -n} ${1.5 * n}h ` + -2 * n + `a ${1.5 * n} ${1.5 * n}, 0, 0, 1, ${1.5 * -n} ${1.5 * -n}v ` + -2 * n + `a ${1.5 * n} ${1.5 * n}, 0, 0, 1, ${1.5 * n} ${1.5 * -n}`);
          }
        }));
      }
      _drawDot({
        x: t,
        y: e,
        size: i,
        rotation: r
      }) {
        this._basicDot({
          x: t,
          y: e,
          size: i,
          rotation: r
        });
      }
      _drawSquare({
        x: t,
        y: e,
        size: i,
        rotation: r
      }) {
        this._basicSquare({
          x: t,
          y: e,
          size: i,
          rotation: r
        });
      }
      _drawExtraRounded({
        x: t,
        y: e,
        size: i,
        rotation: r
      }) {
        this._basicExtraRounded({
          x: t,
          y: e,
          size: i,
          rotation: r
        });
      }
    }
    const u = {
        dot: "dot",
        square: "square"
      },
      c = Object.values(u);
    class l {
      constructor({
        svg: t,
        type: e,
        window: i
      }) {
        this._svg = t, this._type = e, this._window = i;
      }
      draw(t, e, i, r) {
        let n;
        n = this._type === u.square ? this._drawSquare : this._drawDot, n.call(this, {
          x: t,
          y: e,
          size: i,
          rotation: r
        });
      }
      _rotateFigure({
        x: t,
        y: e,
        size: i,
        rotation: r = 0,
        draw: n
      }) {
        var o;
        const s = t + i / 2,
          a = e + i / 2;
        n(), null === (o = this._element) || void 0 === o || o.setAttribute("transform", `rotate(${180 * r / Math.PI},${s},${a})`);
      }
      _basicDot(t) {
        const {
          size: e,
          x: i,
          y: r
        } = t;
        this._rotateFigure(Object.assign(Object.assign({}, t), {
          draw: () => {
            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "circle"), this._element.setAttribute("cx", String(i + e / 2)), this._element.setAttribute("cy", String(r + e / 2)), this._element.setAttribute("r", String(e / 2));
          }
        }));
      }
      _basicSquare(t) {
        const {
          size: e,
          x: i,
          y: r
        } = t;
        this._rotateFigure(Object.assign(Object.assign({}, t), {
          draw: () => {
            this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect"), this._element.setAttribute("x", String(i)), this._element.setAttribute("y", String(r)), this._element.setAttribute("width", String(e)), this._element.setAttribute("height", String(e));
          }
        }));
      }
      _drawDot({
        x: t,
        y: e,
        size: i,
        rotation: r
      }) {
        this._basicDot({
          x: t,
          y: e,
          size: i,
          rotation: r
        });
      }
      _drawSquare({
        x: t,
        y: e,
        size: i,
        rotation: r
      }) {
        this._basicSquare({
          x: t,
          y: e,
          size: i,
          rotation: r
        });
      }
    }
    const g = "circle",
      f = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1]],
      w = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
    class p {
      constructor(t, e) {
        this._roundSize = t => this._options.dotsOptions.roundSize ? Math.floor(t) : t, this._window = e, this._element = this._window.document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("width", String(t.width)), this._element.setAttribute("height", String(t.height)), this._element.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), t.dotsOptions.roundSize || this._element.setAttribute("shape-rendering", "crispEdges"), this._element.setAttribute("viewBox", `0 0 ${t.width} ${t.height}`), this._defs = this._window.document.createElementNS("http://www.w3.org/2000/svg", "defs"), this._element.appendChild(this._defs), this._imageUri = t.image, this._instanceId = p.instanceCount++, this._options = t;
      }
      get width() {
        return this._options.width;
      }
      get height() {
        return this._options.height;
      }
      getElement() {
        return this._element;
      }
      drawQR(t) {
        var _this = this;
        return _asyncToGenerator(function* () {
          const e = t.getModuleCount(),
            i = Math.min(_this._options.width, _this._options.height) - 2 * _this._options.margin,
            r = _this._options.shape === g ? i / Math.sqrt(2) : i,
            n = _this._roundSize(r / e);
          let s = {
            hideXDots: 0,
            hideYDots: 0,
            width: 0,
            height: 0
          };
          if (_this._qr = t, _this._options.image) {
            if (yield _this.loadImage(), !_this._image) return;
            const {
                imageOptions: t,
                qrOptions: i
              } = _this._options,
              r = t.imageSize * o[i.errorCorrectionLevel],
              a = Math.floor(r * e * e);
            s = function ({
              originalHeight: t,
              originalWidth: e,
              maxHiddenDots: i,
              maxHiddenAxisDots: r,
              dotSize: n
            }) {
              const o = {
                  x: 0,
                  y: 0
                },
                s = {
                  x: 0,
                  y: 0
                };
              if (t <= 0 || e <= 0 || i <= 0 || n <= 0) return {
                height: 0,
                width: 0,
                hideYDots: 0,
                hideXDots: 0
              };
              const a = t / e;
              return o.x = Math.floor(Math.sqrt(i / a)), o.x <= 0 && (o.x = 1), r && r < o.x && (o.x = r), o.x % 2 == 0 && o.x--, s.x = o.x * n, o.y = 1 + 2 * Math.ceil((o.x * a - 1) / 2), s.y = Math.round(s.x * a), (o.y * o.x > i || r && r < o.y) && (r && r < o.y ? (o.y = r, o.y % 2 == 0 && o.x--) : o.y -= 2, s.y = o.y * n, o.x = 1 + 2 * Math.ceil((o.y / a - 1) / 2), s.x = Math.round(s.y / a)), {
                height: s.y,
                width: s.x,
                hideYDots: o.y,
                hideXDots: o.x
              };
            }({
              originalWidth: _this._image.width,
              originalHeight: _this._image.height,
              maxHiddenDots: a,
              maxHiddenAxisDots: e - 14,
              dotSize: n
            });
          }
          _this.drawBackground(), _this.drawDots((t, i) => {
            var r, n, o, a, h, d;
            return !(_this._options.imageOptions.hideBackgroundDots && t >= (e - s.hideYDots) / 2 && t < (e + s.hideYDots) / 2 && i >= (e - s.hideXDots) / 2 && i < (e + s.hideXDots) / 2 || (null === (r = f[t]) || void 0 === r ? void 0 : r[i]) || (null === (n = f[t - e + 7]) || void 0 === n ? void 0 : n[i]) || (null === (o = f[t]) || void 0 === o ? void 0 : o[i - e + 7]) || (null === (a = w[t]) || void 0 === a ? void 0 : a[i]) || (null === (h = w[t - e + 7]) || void 0 === h ? void 0 : h[i]) || (null === (d = w[t]) || void 0 === d ? void 0 : d[i - e + 7]));
          }), _this.drawCorners(), _this._options.image && (yield _this.drawImage({
            width: s.width,
            height: s.height,
            count: e,
            dotSize: n
          }));
        })();
      }
      drawBackground() {
        var t, e, i;
        const r = this._element,
          n = this._options;
        if (r) {
          const r = null === (t = n.backgroundOptions) || void 0 === t ? void 0 : t.gradient,
            o = null === (e = n.backgroundOptions) || void 0 === e ? void 0 : e.color;
          let s = n.height,
            a = n.width;
          if (r || o) {
            const t = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
            this._backgroundClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._backgroundClipPath.setAttribute("id", `clip-path-background-color-${this._instanceId}`), this._defs.appendChild(this._backgroundClipPath), (null === (i = n.backgroundOptions) || void 0 === i ? void 0 : i.round) && (s = a = Math.min(n.width, n.height), t.setAttribute("rx", String(s / 2 * n.backgroundOptions.round))), t.setAttribute("x", String(this._roundSize((n.width - a) / 2))), t.setAttribute("y", String(this._roundSize((n.height - s) / 2))), t.setAttribute("width", String(a)), t.setAttribute("height", String(s)), this._backgroundClipPath.appendChild(t), this._createColor({
              options: r,
              color: o,
              additionalRotation: 0,
              x: 0,
              y: 0,
              height: n.height,
              width: n.width,
              name: `background-color-${this._instanceId}`
            });
          }
        }
      }
      drawDots(t) {
        var e, i;
        if (!this._qr) throw "QR code is not defined";
        const r = this._options,
          n = this._qr.getModuleCount();
        if (n > r.width || n > r.height) throw "The canvas is too small.";
        const o = Math.min(r.width, r.height) - 2 * r.margin,
          a = r.shape === g ? o / Math.sqrt(2) : o,
          h = this._roundSize(a / n),
          d = this._roundSize((r.width - n * h) / 2),
          u = this._roundSize((r.height - n * h) / 2),
          c = new s({
            svg: this._element,
            type: r.dotsOptions.type,
            window: this._window
          });
        this._dotsClipPath = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", `clip-path-dot-color-${this._instanceId}`), this._defs.appendChild(this._dotsClipPath), this._createColor({
          options: null === (e = r.dotsOptions) || void 0 === e ? void 0 : e.gradient,
          color: r.dotsOptions.color,
          additionalRotation: 0,
          x: 0,
          y: 0,
          height: r.height,
          width: r.width,
          name: `dot-color-${this._instanceId}`
        });
        for (let e = 0; e < n; e++) for (let r = 0; r < n; r++) t && !t(e, r) || (null === (i = this._qr) || void 0 === i ? void 0 : i.isDark(e, r)) && (c.draw(d + r * h, u + e * h, h, (i, o) => !(r + i < 0 || e + o < 0 || r + i >= n || e + o >= n) && !(t && !t(e + o, r + i)) && !!this._qr && this._qr.isDark(e + o, r + i)), c._element && this._dotsClipPath && this._dotsClipPath.appendChild(c._element));
        if (r.shape === g) {
          const t = this._roundSize((o / h - n) / 2),
            e = n + 2 * t,
            i = d - t * h,
            r = u - t * h,
            s = [],
            a = this._roundSize(e / 2);
          for (let i = 0; i < e; i++) {
            s[i] = [];
            for (let r = 0; r < e; r++) i >= t - 1 && i <= e - t && r >= t - 1 && r <= e - t || Math.sqrt((i - a) * (i - a) + (r - a) * (r - a)) > a ? s[i][r] = 0 : s[i][r] = this._qr.isDark(r - 2 * t < 0 ? r : r >= n ? r - 2 * t : r - t, i - 2 * t < 0 ? i : i >= n ? i - 2 * t : i - t) ? 1 : 0;
          }
          for (let t = 0; t < e; t++) for (let n = 0; n < e; n++) s[t][n] && (c.draw(i + n * h, r + t * h, h, (e, i) => {
            var r;
            return !!(null === (r = s[t + i]) || void 0 === r ? void 0 : r[n + e]);
          }), c._element && this._dotsClipPath && this._dotsClipPath.appendChild(c._element));
        }
      }
      drawCorners() {
        if (!this._qr) throw "QR code is not defined";
        const t = this._element,
          e = this._options;
        if (!t) throw "Element code is not defined";
        const i = this._qr.getModuleCount(),
          r = Math.min(e.width, e.height) - 2 * e.margin,
          n = e.shape === g ? r / Math.sqrt(2) : r,
          o = this._roundSize(n / i),
          a = 7 * o,
          u = 3 * o,
          p = this._roundSize((e.width - i * o) / 2),
          v = this._roundSize((e.height - i * o) / 2);
        [[0, 0, 0], [1, 0, Math.PI / 2], [0, 1, -Math.PI / 2]].forEach(([t, r, n]) => {
          var g, _, m, b, y, x, S, C, A, M, $, O, D, k;
          const z = p + t * o * (i - 7),
            B = v + r * o * (i - 7);
          let P = this._dotsClipPath,
            I = this._dotsClipPath;
          if (((null === (g = e.cornersSquareOptions) || void 0 === g ? void 0 : g.gradient) || (null === (_ = e.cornersSquareOptions) || void 0 === _ ? void 0 : _.color)) && (P = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), P.setAttribute("id", `clip-path-corners-square-color-${t}-${r}-${this._instanceId}`), this._defs.appendChild(P), this._cornersSquareClipPath = this._cornersDotClipPath = I = P, this._createColor({
            options: null === (m = e.cornersSquareOptions) || void 0 === m ? void 0 : m.gradient,
            color: null === (b = e.cornersSquareOptions) || void 0 === b ? void 0 : b.color,
            additionalRotation: n,
            x: z,
            y: B,
            height: a,
            width: a,
            name: `corners-square-color-${t}-${r}-${this._instanceId}`
          })), (null === (y = e.cornersSquareOptions) || void 0 === y ? void 0 : y.type) && h.includes(e.cornersSquareOptions.type)) {
            const t = new d({
              svg: this._element,
              type: e.cornersSquareOptions.type,
              window: this._window
            });
            t.draw(z, B, a, n), t._element && P && P.appendChild(t._element);
          } else {
            const t = new s({
              svg: this._element,
              type: (null === (x = e.cornersSquareOptions) || void 0 === x ? void 0 : x.type) || e.dotsOptions.type,
              window: this._window
            });
            for (let e = 0; e < f.length; e++) for (let i = 0; i < f[e].length; i++) (null === (S = f[e]) || void 0 === S ? void 0 : S[i]) && (t.draw(z + i * o, B + e * o, o, (t, r) => {
              var n;
              return !!(null === (n = f[e + r]) || void 0 === n ? void 0 : n[i + t]);
            }), t._element && P && P.appendChild(t._element));
          }
          if (((null === (C = e.cornersDotOptions) || void 0 === C ? void 0 : C.gradient) || (null === (A = e.cornersDotOptions) || void 0 === A ? void 0 : A.color)) && (I = this._window.document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), I.setAttribute("id", `clip-path-corners-dot-color-${t}-${r}-${this._instanceId}`), this._defs.appendChild(I), this._cornersDotClipPath = I, this._createColor({
            options: null === (M = e.cornersDotOptions) || void 0 === M ? void 0 : M.gradient,
            color: null === ($ = e.cornersDotOptions) || void 0 === $ ? void 0 : $.color,
            additionalRotation: n,
            x: z + 2 * o,
            y: B + 2 * o,
            height: u,
            width: u,
            name: `corners-dot-color-${t}-${r}-${this._instanceId}`
          })), (null === (O = e.cornersDotOptions) || void 0 === O ? void 0 : O.type) && c.includes(e.cornersDotOptions.type)) {
            const t = new l({
              svg: this._element,
              type: e.cornersDotOptions.type,
              window: this._window
            });
            t.draw(z + 2 * o, B + 2 * o, u, n), t._element && I && I.appendChild(t._element);
          } else {
            const t = new s({
              svg: this._element,
              type: (null === (D = e.cornersDotOptions) || void 0 === D ? void 0 : D.type) || e.dotsOptions.type,
              window: this._window
            });
            for (let e = 0; e < w.length; e++) for (let i = 0; i < w[e].length; i++) (null === (k = w[e]) || void 0 === k ? void 0 : k[i]) && (t.draw(z + i * o, B + e * o, o, (t, r) => {
              var n;
              return !!(null === (n = w[e + r]) || void 0 === n ? void 0 : n[i + t]);
            }), t._element && I && I.appendChild(t._element));
          }
        });
      }
      loadImage() {
        var _this2 = this;
        return new Promise((t, e) => {
          var i;
          const r = this._options;
          if (!r.image) return e("Image is not defined");
          if (null === (i = r.nodeCanvas) || void 0 === i ? void 0 : i.loadImage) r.nodeCanvas.loadImage(r.image).then(e => {
            var i, n;
            if (this._image = e, this._options.imageOptions.saveAsBlob) {
              const t = null === (i = r.nodeCanvas) || void 0 === i ? void 0 : i.createCanvas(this._image.width, this._image.height);
              null === (n = null == t ? void 0 : t.getContext("2d")) || void 0 === n || n.drawImage(e, 0, 0), this._imageUri = null == t ? void 0 : t.toDataURL();
            }
            t();
          }).catch(e);else {
            const e = new this._window.Image();
            "string" == typeof r.imageOptions.crossOrigin && (e.crossOrigin = r.imageOptions.crossOrigin), this._image = e, e.onload = /*#__PURE__*/_asyncToGenerator(function* () {
              _this2._options.imageOptions.saveAsBlob && (_this2._imageUri = yield function () {
                var _ref2 = _asyncToGenerator(function* (t, e) {
                  return new Promise(i => {
                    const r = new e.XMLHttpRequest();
                    r.onload = function () {
                      const t = new e.FileReader();
                      t.onloadend = function () {
                        i(t.result);
                      }, t.readAsDataURL(r.response);
                    }, r.open("GET", t), r.responseType = "blob", r.send();
                  });
                });
                return function (_x, _x2) {
                  return _ref2.apply(this, arguments);
                };
              }()(r.image || "", _this2._window)), t();
            }), e.src = r.image;
          }
        });
      }
      drawImage(_x3) {
        var _this3 = this;
        return _asyncToGenerator(function* ({
          width: t,
          height: e,
          count: i,
          dotSize: r
        }) {
          const n = _this3._options,
            o = _this3._roundSize((n.width - i * r) / 2),
            s = _this3._roundSize((n.height - i * r) / 2),
            a = o + _this3._roundSize(n.imageOptions.margin + (i * r - t) / 2),
            h = s + _this3._roundSize(n.imageOptions.margin + (i * r - e) / 2),
            d = t - 2 * n.imageOptions.margin,
            u = e - 2 * n.imageOptions.margin,
            c = _this3._window.document.createElementNS("http://www.w3.org/2000/svg", "image");
          c.setAttribute("href", _this3._imageUri || ""), c.setAttribute("xlink:href", _this3._imageUri || ""), c.setAttribute("x", String(a)), c.setAttribute("y", String(h)), c.setAttribute("width", `${d}px`), c.setAttribute("height", `${u}px`), _this3._element.appendChild(c);
        }).apply(this, arguments);
      }
      _createColor({
        options: t,
        color: e,
        additionalRotation: i,
        x: r,
        y: n,
        height: o,
        width: s,
        name: a
      }) {
        const h = s > o ? s : o,
          d = this._window.document.createElementNS("http://www.w3.org/2000/svg", "rect");
        if (d.setAttribute("x", String(r)), d.setAttribute("y", String(n)), d.setAttribute("height", String(o)), d.setAttribute("width", String(s)), d.setAttribute("clip-path", `url('#clip-path-${a}')`), t) {
          let e;
          if ("radial" === t.type) e = this._window.document.createElementNS("http://www.w3.org/2000/svg", "radialGradient"), e.setAttribute("id", a), e.setAttribute("gradientUnits", "userSpaceOnUse"), e.setAttribute("fx", String(r + s / 2)), e.setAttribute("fy", String(n + o / 2)), e.setAttribute("cx", String(r + s / 2)), e.setAttribute("cy", String(n + o / 2)), e.setAttribute("r", String(h / 2));else {
            const h = ((t.rotation || 0) + i) % (2 * Math.PI),
              d = (h + 2 * Math.PI) % (2 * Math.PI);
            let u = r + s / 2,
              c = n + o / 2,
              l = r + s / 2,
              g = n + o / 2;
            d >= 0 && d <= .25 * Math.PI || d > 1.75 * Math.PI && d <= 2 * Math.PI ? (u -= s / 2, c -= o / 2 * Math.tan(h), l += s / 2, g += o / 2 * Math.tan(h)) : d > .25 * Math.PI && d <= .75 * Math.PI ? (c -= o / 2, u -= s / 2 / Math.tan(h), g += o / 2, l += s / 2 / Math.tan(h)) : d > .75 * Math.PI && d <= 1.25 * Math.PI ? (u += s / 2, c += o / 2 * Math.tan(h), l -= s / 2, g -= o / 2 * Math.tan(h)) : d > 1.25 * Math.PI && d <= 1.75 * Math.PI && (c += o / 2, u += s / 2 / Math.tan(h), g -= o / 2, l -= s / 2 / Math.tan(h)), e = this._window.document.createElementNS("http://www.w3.org/2000/svg", "linearGradient"), e.setAttribute("id", a), e.setAttribute("gradientUnits", "userSpaceOnUse"), e.setAttribute("x1", String(Math.round(u))), e.setAttribute("y1", String(Math.round(c))), e.setAttribute("x2", String(Math.round(l))), e.setAttribute("y2", String(Math.round(g)));
          }
          t.colorStops.forEach(({
            offset: t,
            color: i
          }) => {
            const r = this._window.document.createElementNS("http://www.w3.org/2000/svg", "stop");
            r.setAttribute("offset", 100 * t + "%"), r.setAttribute("stop-color", i), e.appendChild(r);
          }), d.setAttribute("fill", `url('#${a}')`), this._defs.appendChild(e);
        } else e && d.setAttribute("fill", e);
        this._element.appendChild(d);
      }
    }
    p.instanceCount = 0;
    const v = p,
      _ = "canvas",
      m = {};
    for (let t = 0; t <= 40; t++) m[t] = t;
    const b = {
      type: _,
      shape: "square",
      width: 300,
      height: 300,
      data: "",
      margin: 0,
      qrOptions: {
        typeNumber: m[0],
        mode: void 0,
        errorCorrectionLevel: "Q"
      },
      imageOptions: {
        saveAsBlob: !0,
        hideBackgroundDots: !0,
        imageSize: .4,
        crossOrigin: void 0,
        margin: 0
      },
      dotsOptions: {
        type: "square",
        color: "#000",
        roundSize: !0
      },
      backgroundOptions: {
        round: 0,
        color: "#fff"
      }
    };
    function y(t) {
      const e = Object.assign({}, t);
      if (!e.colorStops || !e.colorStops.length) throw "Field 'colorStops' is required in gradient";
      return e.rotation ? e.rotation = Number(e.rotation) : e.rotation = 0, e.colorStops = e.colorStops.map(t => Object.assign(Object.assign({}, t), {
        offset: Number(t.offset)
      })), e;
    }
    function x(t) {
      const e = Object.assign({}, t);
      return e.width = Number(e.width), e.height = Number(e.height), e.margin = Number(e.margin), e.imageOptions = Object.assign(Object.assign({}, e.imageOptions), {
        hideBackgroundDots: Boolean(e.imageOptions.hideBackgroundDots),
        imageSize: Number(e.imageOptions.imageSize),
        margin: Number(e.imageOptions.margin)
      }), e.margin > Math.min(e.width, e.height) && (e.margin = Math.min(e.width, e.height)), e.dotsOptions = Object.assign({}, e.dotsOptions), e.dotsOptions.gradient && (e.dotsOptions.gradient = y(e.dotsOptions.gradient)), e.cornersSquareOptions && (e.cornersSquareOptions = Object.assign({}, e.cornersSquareOptions), e.cornersSquareOptions.gradient && (e.cornersSquareOptions.gradient = y(e.cornersSquareOptions.gradient))), e.cornersDotOptions && (e.cornersDotOptions = Object.assign({}, e.cornersDotOptions), e.cornersDotOptions.gradient && (e.cornersDotOptions.gradient = y(e.cornersDotOptions.gradient))), e.backgroundOptions && (e.backgroundOptions = Object.assign({}, e.backgroundOptions), e.backgroundOptions.gradient && (e.backgroundOptions.gradient = y(e.backgroundOptions.gradient))), e;
    }
    var S = i(873),
      C = i.n(S);
    function A(t) {
      if (!t) throw new Error("Extension must be defined");
      "." === t[0] && (t = t.substring(1));
      const e = {
        bmp: "image/bmp",
        gif: "image/gif",
        ico: "image/vnd.microsoft.icon",
        jpeg: "image/jpeg",
        jpg: "image/jpeg",
        png: "image/png",
        svg: "image/svg+xml",
        tif: "image/tiff",
        tiff: "image/tiff",
        webp: "image/webp",
        pdf: "application/pdf"
      }[t.toLowerCase()];
      if (!e) throw new Error(`Extension "${t}" is not supported`);
      return e;
    }
    class M {
      constructor(t) {
        (null == t ? void 0 : t.jsdom) ? this._window = new t.jsdom("", {
          resources: "usable"
        }).window : this._window = window, this._options = t ? x(e(b, t)) : b, this.update();
      }
      static _clearContainer(t) {
        t && (t.innerHTML = "");
      }
      _setupSvg() {
        if (!this._qr) return;
        const t = new v(this._options, this._window);
        this._svg = t.getElement(), this._svgDrawingPromise = t.drawQR(this._qr).then(() => {
          var e;
          this._svg && (null === (e = this._extension) || void 0 === e || e.call(this, t.getElement(), this._options));
        });
      }
      _setupCanvas() {
        var t, e;
        this._qr && ((null === (t = this._options.nodeCanvas) || void 0 === t ? void 0 : t.createCanvas) ? (this._nodeCanvas = this._options.nodeCanvas.createCanvas(this._options.width, this._options.height), this._nodeCanvas.width = this._options.width, this._nodeCanvas.height = this._options.height) : (this._domCanvas = document.createElement("canvas"), this._domCanvas.width = this._options.width, this._domCanvas.height = this._options.height), this._setupSvg(), this._canvasDrawingPromise = null === (e = this._svgDrawingPromise) || void 0 === e ? void 0 : e.then(() => {
          var t;
          if (!this._svg) return;
          const e = this._svg,
            i = new this._window.XMLSerializer().serializeToString(e),
            r = btoa(i),
            n = `data:${A("svg")};base64,${r}`;
          if (null === (t = this._options.nodeCanvas) || void 0 === t ? void 0 : t.loadImage) return this._options.nodeCanvas.loadImage(n).then(t => {
            var e, i;
            t.width = this._options.width, t.height = this._options.height, null === (i = null === (e = this._nodeCanvas) || void 0 === e ? void 0 : e.getContext("2d")) || void 0 === i || i.drawImage(t, 0, 0);
          });
          {
            const t = new this._window.Image();
            return new Promise(e => {
              t.onload = () => {
                var i, r;
                null === (r = null === (i = this._domCanvas) || void 0 === i ? void 0 : i.getContext("2d")) || void 0 === r || r.drawImage(t, 0, 0), e();
              }, t.src = n;
            });
          }
        }));
      }
      _getElement() {
        var _this4 = this;
        return _asyncToGenerator(function* (t = "png") {
          if (!_this4._qr) throw "QR code is empty";
          return "svg" === t.toLowerCase() ? (_this4._svg && _this4._svgDrawingPromise || _this4._setupSvg(), yield _this4._svgDrawingPromise, _this4._svg) : ((_this4._domCanvas || _this4._nodeCanvas) && _this4._canvasDrawingPromise || _this4._setupCanvas(), yield _this4._canvasDrawingPromise, _this4._domCanvas || _this4._nodeCanvas);
        }).apply(this, arguments);
      }
      update(t) {
        M._clearContainer(this._container), this._options = t ? x(e(this._options, t)) : this._options, this._options.data && (this._qr = C()(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || function (t) {
          switch (!0) {
            case /^[0-9]*$/.test(t):
              return "Numeric";
            case /^[0-9A-Z $%*+\-./:]*$/.test(t):
              return "Alphanumeric";
            default:
              return "Byte";
          }
        }(this._options.data)), this._qr.make(), this._options.type === _ ? this._setupCanvas() : this._setupSvg(), this.append(this._container));
      }
      append(t) {
        if (t) {
          if ("function" != typeof t.appendChild) throw "Container should be a single DOM node";
          this._options.type === _ ? this._domCanvas && t.appendChild(this._domCanvas) : this._svg && t.appendChild(this._svg), this._container = t;
        }
      }
      applyExtension(t) {
        if (!t) throw "Extension function should be defined.";
        this._extension = t, this.update();
      }
      deleteExtension() {
        this._extension = void 0, this.update();
      }
      getRawData() {
        var _this5 = this;
        return _asyncToGenerator(function* (t = "png") {
          if (!_this5._qr) throw "QR code is empty";
          const e = yield _this5._getElement(t),
            i = A(t);
          if (!e) return null;
          if ("svg" === t.toLowerCase()) {
            const t = `<?xml version="1.0" standalone="no"?>\r\n${new _this5._window.XMLSerializer().serializeToString(e)}`;
            return "undefined" == typeof Blob || _this5._options.jsdom ? Buffer.from(t) : new Blob([t], {
              type: i
            });
          }
          return new Promise(t => {
            const r = e;
            if ("toBuffer" in r) {
              if ("image/png" === i) t(r.toBuffer(i));else if ("image/jpeg" === i) t(r.toBuffer(i));else {
                if ("application/pdf" !== i) throw Error("Unsupported extension");
                t(r.toBuffer(i));
              }
            } else "toBlob" in r && r.toBlob(t, i, 1);
          });
        }).apply(this, arguments);
      }
      download(t) {
        var _this6 = this;
        return _asyncToGenerator(function* () {
          if (!_this6._qr) throw "QR code is empty";
          if ("undefined" == typeof Blob) throw "Cannot download in Node.js, call getRawData instead.";
          let e = "png",
            i = "qr";
          "string" == typeof t ? (e = t, console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")) : "object" == typeof t && null !== t && (t.name && (i = t.name), t.extension && (e = t.extension));
          const r = yield _this6._getElement(e);
          if (r) if ("svg" === e.toLowerCase()) {
            let t = new XMLSerializer().serializeToString(r);
            t = '<?xml version="1.0" standalone="no"?>\r\n' + t, n(`data:${A(e)};charset=utf-8,${encodeURIComponent(t)}`, `${i}.svg`);
          } else n(r.toDataURL(A(e)), `${i}.${e}`);
        })();
      }
    }
    const $ = M;
  })(), r.default;
})());

/***/ }),

/***/ 15788:
/*!****************************************************!*\
  !*** ./src/app/receive-qr/receive-qr.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReceiveQrComponent: () => (/* binding */ ReceiveQrComponent)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var qr_code_styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qr-code-styling */ 6455);
/* harmony import */ var qr_code_styling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qr_code_styling__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 84460);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 18431);
/* harmony import */ var _jsverse_transloco__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @jsverse/transloco */ 88065);
/* harmony import */ var app_base_copy_to_clipboard_copy_to_clipboard_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/copy-to-clipboard/copy-to-clipboard.base */ 88070);
/* harmony import */ var app_zelf_loader_zelf_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/zelf-loader/zelf-loader.component */ 40152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 12596);
/* harmony import */ var app_wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/wallet.service */ 69556);
/* harmony import */ var app_chrome_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/chrome.service */ 85043);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);














const _c0 = ["qrCodeContainer"];
const _c1 = () => ["/receive"];
const _c2 = a0 => ({
  name: a0
});
function ReceiveQrComponent_div_0_zelf_loader_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "zelf-loader");
  }
}
function ReceiveQrComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.qrCodeOptions.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", t_r1("receive.your_token_address", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c2, ctx_r1.name)), " ");
  }
}
function ReceiveQrComponent_div_0_ng_container_15_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" (", ctx_r1.type, ")");
  }
}
function ReceiveQrComponent_div_0_ng_container_15_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function ReceiveQrComponent_div_0_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 25)(2, "div", 26)(3, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ReceiveQrComponent_div_0_ng_container_15_ng_container_5_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ReceiveQrComponent_div_0_ng_container_15_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.copyToClipboard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ReceiveQrComponent_div_0_ng_container_15_ng_container_9_Template, 1, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const copyIcon_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.symbol, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", copyIcon_r4);
  }
}
function ReceiveQrComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 9)(7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ReceiveQrComponent_div_0_zelf_loader_11_Template, 1, 0, "zelf-loader", 13)(12, ReceiveQrComponent_div_0_div_12_Template, 3, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "div", 15, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ReceiveQrComponent_div_0_ng_container_15_Template, 10, 4, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 16)(17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 22)(25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](t_r1("common.receive"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", t_r1("receive.information"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](t_r1("common.learn_more"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](t_r1("common.close"));
  }
}
function ReceiveQrComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class ReceiveQrComponent extends app_base_copy_to_clipboard_copy_to_clipboard_base__WEBPACK_IMPORTED_MODULE_2__.CopyToClipboardBase {
  _activatedRoute;
  _walletService;
  _chromeService;
  _snackBar;
  _translocoService;
  qrCodeContainer;
  unsubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  address = "";
  loading = true;
  name = "";
  network = "";
  symbol = "";
  type = "";
  wallet = {};
  qrCode;
  qrCodeGradient = {
    type: "linear",
    rotation: 90,
    colorStops: [{
      color: "#181818",
      offset: 0
    }, {
      color: "#5e5e5e",
      offset: 100
    }]
  };
  qrCodeOptions = {
    data: "",
    height: 240,
    image: "./assets/icons/icon.png",
    margin: 0,
    type: "svg",
    width: 240,
    backgroundOptions: {
      color: "#ffffff"
    },
    cornersSquareOptions: {
      color: "#000000",
      type: "extra-rounded",
      gradient: this.qrCodeGradient
    },
    cornersDotOptions: {
      color: "#000000",
      type: "dot",
      gradient: this.qrCodeGradient
    },
    dotsOptions: {
      color: "#181818",
      type: "rounded",
      gradient: this.qrCodeGradient
    },
    imageOptions: {
      crossOrigin: "anonymous",
      hideBackgroundDots: true,
      imageSize: 0.5,
      margin: 0
    },
    qrOptions: {
      errorCorrectionLevel: "H",
      mode: "Byte",
      typeNumber: 0
    }
  };
  constructor(_activatedRoute, _walletService, _chromeService, _snackBar, _translocoService) {
    super(_chromeService, _snackBar, _translocoService);
    this._activatedRoute = _activatedRoute;
    this._walletService = _walletService;
    this._chromeService = _chromeService;
    this._snackBar = _snackBar;
    this._translocoService = _translocoService;
    this.network = this._activatedRoute.snapshot.params["network"];
    this._activatedRoute.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.unsubscriber$)).subscribe(params => {
      this.network = params["network"];
      this._setNetwork();
      this._setQRCode();
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.wallet = (yield _this._walletService.getFirstWalletFromStorage()) || {};
      _this._setNetwork();
      _this._setQRCode();
      _this.loading = false;
    })();
  }
  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
  _setNetwork() {
    if (!this.network) return;
    const network = this.network.toLowerCase();
    if (network === "ethereum") {
      this.address = this.wallet.ethAddress || "";
      this.name = "Ethereum";
      this.symbol = "ETH";
      this.type = "ERC-20";
    } else if (network === "avalanche") {
      this.address = this.wallet.ethAddress || "";
      this.name = "Avalanche";
      this.symbol = "AVAX";
      this.type = "ERC-20";
    } else if (network === "sui") {
      this.address = this.wallet.suiAddress || "";
      this.name = "Sui";
      this.symbol = "SUI";
    } else if (network === "solana") {
      this.address = this.wallet.solanaAddress || "";
      this.name = "Solana";
      this.symbol = "SOL";
      this.type = "SPL";
    } else if (network === "bitcoin") {
      this.address = this.wallet.btcAddress || "";
      this.name = "Bitcoin";
      this.symbol = "BTC";
    }
  }
  _setQRCode() {
    if (!this.qrCodeContainer || !this.qrCodeContainer.nativeElement) return;
    this.qrCodeOptions.data = this.address;
    this.qrCodeOptions.image = this._walletService.getAssetImage(this.symbol);
    this.qrCode = new (qr_code_styling__WEBPACK_IMPORTED_MODULE_1___default())(this.qrCodeOptions);
    this.qrCode.append(this.qrCodeContainer.nativeElement);
  }
  copyToClipboard() {
    var _this2 = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2._copyToClipboard(_this2.address);
    })();
  }
  static ɵfac = function ReceiveQrComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ReceiveQrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_wallet_service__WEBPACK_IMPORTED_MODULE_4__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_chrome_service__WEBPACK_IMPORTED_MODULE_5__.ChromeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_jsverse_transloco__WEBPACK_IMPORTED_MODULE_11__.TranslocoService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ReceiveQrComponent,
    selectors: [["receive-qr"]],
    viewQuery: function ReceiveQrComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.qrCodeContainer = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 3,
    vars: 0,
    consts: [["copyIcon", ""], ["qrCodeContainer", ""], ["class", "zelf-card receive-qr", 4, "transloco"], [1, "zelf-card", "receive-qr"], [1, "receive-qr__header"], [1, "receive-qr__col1"], ["queryParamsHandling", "", "mat-flat-button", "", 1, "zelf-icon-button", "zelf-icon-button--anti-flash-white", "zelf-icon-button--40", 3, "routerLink"], ["width", "22", "height", "14", "viewBox", "0 0 22 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M20.0898 5.8277H4.72478L8.08478 2.4677C8.53978 2.0127 8.53978 1.2777 8.08478 0.822695C7.62978 0.367695 6.89478 0.367695 6.43978 0.822695L1.08478 6.1777C0.62978 6.6327 0.62978 7.3677 1.08478 7.8227L6.43978 13.1777C6.89478 13.6327 7.62978 13.6327 8.08478 13.1777C8.53978 12.7227 8.53978 11.9877 8.08478 11.5327L4.72478 8.16103H20.0898C20.7314 8.16103 21.2564 7.63603 21.2564 6.99436C21.2564 6.3527 20.7314 5.8277 20.0898 5.8277Z"], [1, "receive-qr__col2"], [1, "receive-qr__title"], [1, "receive-qr__col3"], [1, "zelf-card__content", "receive-qr__content"], [4, "ngIf"], ["class", "zelf-chip receive-qr__chip", 4, "ngIf"], [1, "qr-code", "receive-qr__qr-code"], [1, "zelf-card__actions", "zelf-card__actions--end"], [1, "tip-box"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 11C9.45 11 9 10.55 9 10V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V10C11 10.55 10.55 11 10 11ZM11 15H9V13H11V15Z", "fill", "#FF5721"], [1, "tip-box__text"], ["target", "_blank", 1, "tip-box__link"], ["mat-flat-button", "", 1, "zelf-button", "zelf-button--black", "zelf-button--wide", 3, "routerLink"], [1, "zelf-chip", "receive-qr__chip"], ["alt", "icon", 1, "zelf-chip__image", 3, "src"], [1, "zelf-action-row", "receive-qr__action-row"], [1, "receive-qr__action-col"], [1, "receive-qr__token-type"], [1, "receive-qr__address"], ["mat-flat-button", "", 1, "zelf-icon-button", "zelf-icon-button--40", "zelf-icon-button--anti-flash-white", "zelf-icon-button--border-soft", 3, "click"], [4, "ngTemplateOutlet"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.5 20H5.5V7C5.5 6.45 5.05 6 4.5 6C3.95 6 3.5 6.45 3.5 7V20C3.5 21.1 4.4 22 5.5 22H15.5C16.05 22 16.5 21.55 16.5 21C16.5 20.45 16.05 20 15.5 20ZM20.5 16V4C20.5 2.9 19.6 2 18.5 2H9.5C8.4 2 7.5 2.9 7.5 4V16C7.5 17.1 8.4 18 9.5 18H18.5C19.6 18 20.5 17.1 20.5 16ZM18.5 16H9.5V4H18.5V16Z"]],
    template: function ReceiveQrComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ReceiveQrComponent_div_0_Template, 27, 11, "div", 2)(1, ReceiveQrComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_11__.TranslocoModule, _jsverse_transloco__WEBPACK_IMPORTED_MODULE_11__.TranslocoDirective, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, app_zelf_loader_zelf_loader_component__WEBPACK_IMPORTED_MODULE_3__.ZelfLoaderComponent],
    styles: [".zelf-button-external-link[_ngcontent-%COMP%] {\n  display: block;\n}\n.zelf-button-external-link--wide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.zelf-button[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 16px;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  gap: 8px;\n  height: 56px;\n  justify-content: center;\n  outline: none;\n  padding: 8px 24px;\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.zelf-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.zelf-button__text--margin-right[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #73777f;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 9999px;\n  padding: 8px 16px;\n  transition: color 0.2s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--hyperlink--small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%]:hover {\n  color: #181818;\n  background-color: #e3e3e3;\n}\n.zelf-button--hyperlink[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--hyperlink[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #96939e !important;\n}\n.zelf-button--hyperlink[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #96939e;\n}\n.zelf-button--thin[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 12px 16px;\n}\n.zelf-button--wide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.zelf-button--wide.zelf-button--hyperlink[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.zelf-button--black[_ngcontent-%COMP%] {\n  background-color: #181818 !important;\n  color: #ffffff !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--black[_ngcontent-%COMP%]:active {\n  background-color: #96939e !important;\n}\n.zelf-button--black[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n}\n.zelf-button--black[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-button--black[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  stroke: #ffffff !important;\n}\n.zelf-button--black[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #73777f !important;\n  color: #ffffff !important;\n}\n.zelf-button--black[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%] {\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%]:focus, .zelf-button--anti-flash-white[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-button--anti-flash-white[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-button--anti-flash-white[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-button--anti-flash-white[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-button--anti-flash-white[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-button--anti-flash-white[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-button--white[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--white[_ngcontent-%COMP%]:focus, .zelf-button--white[_ngcontent-%COMP%]:hover {\n  background-color: #eeedf1 !important;\n}\n.zelf-button--white[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n}\n.zelf-button--white[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-button--white[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--white[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-button--outlined[_ngcontent-%COMP%] {\n  border: 1px solid #181818 !important;\n  background-color: #ffffff !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--outlined[_ngcontent-%COMP%]:focus, .zelf-button--outlined[_ngcontent-%COMP%]:hover {\n  background-color: #e3e3e3 !important;\n}\n.zelf-button--outlined[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-button--outlined[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-button--red[_ngcontent-%COMP%] {\n  border: none !important;\n  background-color: transparent !important;\n  color: #dc362e !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-button--red[_ngcontent-%COMP%]:focus, .zelf-button--red[_ngcontent-%COMP%]:hover {\n  background-color: #fceeee !important;\n}\n.zelf-button--red[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-button--red[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #dc362e;\n}\n.zelf-button--error[_ngcontent-%COMP%] {\n  background-color: #fceeee !important;\n  color: #dc362e !important;\n}\n.zelf-button--error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #dc362e !important;\n}\n.zelf-button--success[_ngcontent-%COMP%] {\n  background-color: #e7f8ed !important;\n  color: #1ea446 !important;\n}\n.zelf-button--success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #1ea446 !important;\n}\n.zelf-button--no-fill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-button--no-fill[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-button--no-fill[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .zelf-button--no-fill[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-button--pill[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  min-height: 0;\n  min-width: 0;\n  padding: 4px 12px;\n}\n\n.zelf-icon-button[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  align-items: center;\n  background-color: #eeedf1 !important;\n  border-radius: 56px;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  font-weight: 600;\n  gap: 16px;\n  height: 56px;\n  justify-content: center;\n  min-height: 56px;\n  min-width: 56px;\n  outline: none;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n  -webkit-user-select: none;\n          user-select: none;\n  width: 56px;\n}\n.zelf-icon-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.zelf-icon-button.zelf-icon-button--border-soft[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.zelf-icon-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: fill 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n  fill: #181818;\n  height: 24px;\n  width: 24px;\n}\n.zelf-icon-button[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-icon-button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: white;\n}\n.zelf-icon-button--border-soft[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.zelf-icon-button--40[_ngcontent-%COMP%] {\n  height: 40px;\n  min-height: 40px;\n  min-width: 40px;\n  width: 40px;\n  border-radius: 40px;\n  padding: 0 8px;\n}\n.zelf-icon-button--40.zelf-icon-button--border-soft[_ngcontent-%COMP%] {\n  border-radius: 14px;\n}\n.zelf-icon-button--40[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #73777f;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 9999px;\n  padding: 8px 16px;\n  transition: color 0.2s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--hyperlink--small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%]:hover {\n  color: #181818;\n  background-color: #e3e3e3;\n}\n.zelf-icon-button--hyperlink[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-icon-button--hyperlink[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #96939e !important;\n}\n.zelf-icon-button--hyperlink[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #96939e;\n}\n.zelf-icon-button--hyperlink[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #96939e !important;\n  stroke: #96939e !important;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%] {\n  background-color: #181818 !important;\n  color: #ffffff !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]:active {\n  background-color: #96939e !important;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]:hover {\n  background-color: #73777f !important;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-icon-button--black[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  stroke: #ffffff !important;\n}\n.zelf-icon-button--black[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--black[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--black[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818 !important;\n  stroke: #181818 !important;\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%] {\n  background-color: #eeedf1 !important;\n  color: #181818 !important;\n  transition: color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1), background-color 0.3s cubic-bezier(0.25, 0.4, 0.7, 1);\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:focus, .zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:hover {\n  background-color: #ff5721 !important;\n  color: white;\n}\n.zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-icon-button--anti-flash-white[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.zelf-icon-button--anti-flash-white[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--anti-flash-white[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--anti-flash-white[disabled][_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #73777f !important;\n  stroke: #73777f !important;\n}\n.zelf-icon-button--transparent[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #181818 !important;\n}\n.zelf-icon-button--transparent[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #181818;\n}\n.zelf-icon-button--transparent[_ngcontent-%COMP%]:focus, .zelf-icon-button--transparent[_ngcontent-%COMP%]:hover {\n  background-color: #e3e3e3 !important;\n}\n.zelf-icon-button--transparent[disabled][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  color: #73777f !important;\n}\n.zelf-icon-button--transparent[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c3c6cf;\n}\n.zelf-icon-button--no-fill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-icon-button--no-fill[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .zelf-icon-button--no-fill[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .zelf-icon-button--no-fill[disabled][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none !important;\n}\n.zelf-icon-button--text[_ngcontent-%COMP%] {\n  width: auto !important;\n  min-width: initial !important;\n}\n.zelf-icon-button--error[_ngcontent-%COMP%] {\n  background-color: #fceeee !important;\n  color: #dc362e !important;\n}\n.zelf-icon-button--error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #dc362e !important;\n}\n.zelf-icon-button--success[_ngcontent-%COMP%] {\n  background-color: #e7f8ed !important;\n  color: #1ea446 !important;\n}\n.zelf-icon-button--success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #1ea446 !important;\n}\n.zelf-icon-button--pill[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  height: auto;\n  min-height: 0;\n  min-width: 0;\n  padding: 4px 12px;\n  width: auto;\n}\n\n.tip-box[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  border-radius: 16px;\n  border: 1px solid #eeedf1;\n  box-sizing: border-box;\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  width: 100%;\n}\n.tip-box__text[_ngcontent-%COMP%] {\n  color: #181818;\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  margin: 0 !important;\n}\n.tip-box__link[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  font: Poppins;\n  position: absolute;\n  background-color: #181818;\n  color: #ffffff;\n  font-size: 12px;\n  padding: 8px 12px;\n  border-radius: 9999px;\n  white-space: nowrap;\n  top: -44px;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(10px);\n  transition: opacity 0.2s ease, transform 0.2s ease;\n}\n.tooltip[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-width: 6px;\n  border-style: solid;\n  border-color: #181818 transparent transparent transparent;\n}\n\n.tooltip-container[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.tooltip-container[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n\n[_nghost-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: center;\n}\n\n.receive-qr[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 524px;\n}\n.receive-qr__header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  column-gap: 12px;\n  align-content: center;\n  justify-content: start;\n  gap: 24px;\n  width: 100%;\n}\n.receive-qr__col1[_ngcontent-%COMP%], .receive-qr__col3[_ngcontent-%COMP%] {\n  grid-column: span 3;\n  display: flex;\n  align-items: center;\n}\n.receive-qr__col1[_ngcontent-%COMP%] {\n  justify-content: start;\n}\n.receive-qr__col2[_ngcontent-%COMP%] {\n  grid-column: span 4;\n  text-align: center;\n  align-items: center;\n}\n.receive-qr__col3[_ngcontent-%COMP%] {\n  justify-content: end;\n}\n.receive-qr__title[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  text-align: center;\n  vertical-align: middle;\n  color: #181818;\n}\n.receive-qr__content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  justify-content: flex-start;\n  position: relative;\n  gap: 24px;\n}\n.receive-qr__chip[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.receive-qr__qr-code[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 100%;\n  height: 312px;\n  max-height: 312px;\n  width: 100%;\n}\n.receive-qr__action-row[_ngcontent-%COMP%] {\n  gap: 12px;\n  min-height: 62px;\n  height: auto;\n}\n.receive-qr__action-col[_ngcontent-%COMP%] {\n  width: 86%;\n}\n.receive-qr__loader[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  margin: auto;\n}\n.receive-qr__token-type[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.5px;\n  vertical-align: middle;\n  margin: 0;\n  color: #181818;\n}\n.receive-qr__address[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", Arial, sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.1px;\n  vertical-align: middle;\n  margin: 0;\n  color: #181818;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9fYnV0dG9ucy5zY3NzIiwicmVjZWl2ZS1xci5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi9zdHlsZXMvX2VsZW1lbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FDREo7QURHSTtFQUNJLFdBQUE7QUNEUjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUNGSjtBRElJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0FDRlI7QURNUTtFQUNJLGtCQUFBO0FDSlo7QURRSTtFQUNJLDZCQUFBO0VBQ0EsY0VwQkQ7RUZxQkMsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZHQUNJO0FDUFo7QURVUTtFQUNJLGVBQUE7QUNSWjtBRFdRO0VBQ0ksYUVsQ0w7QUR5QlA7QURZUTtFQUNJLGNFdkNKO0VGd0NJLHlCRXBDRDtBRDBCWDtBRFlZO0VBQ0ksYUUzQ1I7QURpQ1I7QURjUTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUNaWjtBRGNZO0VBQ0ksYUVsREo7QURzQ1o7QURpQkk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDZlI7QURrQkk7RUFDSSxXQUFBO0FDaEJSO0FEa0JRO0VBQ0ksbUJBQUE7QUNoQlo7QURvQkk7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkdBQ0k7QUNuQlo7QURzQlE7RUFDSSxvQ0FBQTtBQ3BCWjtBRHVCUTtFQUNJLG9DQUFBO0FDckJaO0FEd0JRO0VBQ0ksYUUvRUo7QUR5RFI7QUR5QlE7RUFD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cUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0NsQ0E7QUR3ZVI7QUFuY0k7RUFDSSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFxY1I7QUFsY0k7RUFDSSxnQkFBQTtBQW9jUjtBQWpjSTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBbWNSO0FBaGNJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWtjUjtBQS9iSTtFQUNJLFVBQUE7QUFpY1I7QUE5Ykk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBZ2NSO0FBN2JJO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0NwRkE7QURtaEJSO0FBNWJJO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0MvRkE7RURnR0EscUJBQUE7QUE4YlIiLCJmaWxlIjoicmVjZWl2ZS1xci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCIuL3ZhcmlhYmxlc1wiO1xuXG4uemVsZi1idXR0b24tZXh0ZXJuYWwtbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAmLS13aWRlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uemVsZi1idXR0b24ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBnYXA6IDhweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgICZfX3RleHQge1xuICAgICAgICAmLS1tYXJnaW4tcmlnaHQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0taHlwZXJsaW5rIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuMnMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJi0tc21hbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR0YXVwZUdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS10aGluIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgfVxuXG4gICAgJi0td2lkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYuemVsZi1idXR0b24tLWh5cGVybGluayB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYmxhY2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1hbnRpLWZsYXNoLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0td2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tb3V0bGluZWQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1yZWQge1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGVycm9yTGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWVycm9yIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRlcnJvckxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXN1Y2Nlc3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3RMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tbm8tZmlsbCB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXBpbGwge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgfVxufVxuXG4uemVsZi1pY29uLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBnYXA6IDE2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgbWluLXdpZHRoOiA1NnB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjpcbiAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHdpZHRoOiA1NnB4O1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAmLnplbGYtaWNvbi1idXR0b24tLWJvcmRlci1zb2Z0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG4gICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWJvcmRlci1zb2Z0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB9XG5cbiAgICAmLS00MCB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG5cbiAgICAgICAgJi56ZWxmLWljb24tYnV0dG9uLS1ib3JkZXItc29mdCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0taHlwZXJsaW5rIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuMnMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJi0tc21hbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR0YXVwZUdyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ibGFjayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWFudGktZmxhc2gtd2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS10cmFuc3BhcmVudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tbm8tZmlsbCB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXRleHQge1xuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtaW4td2lkdGg6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLS1lcnJvciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZXJyb3JMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1zdWNjZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0TGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXBpbGwge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxufVxuIiwiQHVzZSBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcbkB1c2UgXCIuLi8uLi9zdHlsZXMvYnV0dG9uc1wiO1xuQHVzZSBcIi4uLy4uL3N0eWxlcy9lbGVtZW50c1wiO1xuXG46aG9zdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmVjZWl2ZS1xciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MjRweDtcblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgICAgICBjb2x1bW4tZ2FwOiAxMnB4O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgIGdhcDogMjRweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJl9fY29sMSxcbiAgICAmX19jb2wzIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19jb2wxIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICB9XG5cbiAgICAmX19jb2wyIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gNDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICZfX2NvbDMge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBnYXA6IDI0cHg7XG4gICAgfVxuXG4gICAgJl9fY2hpcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuXG4gICAgJl9fcXItY29kZSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMzEycHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMxMnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmX19hY3Rpb24tcm93IHtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA2MnB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgJl9fYWN0aW9uLWNvbCB7XG4gICAgICAgIHdpZHRoOiA4NiU7XG4gICAgfVxuXG4gICAgJl9fbG9hZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cblxuICAgICZfX3Rva2VuLXR5cGUge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgfVxuXG4gICAgJl9fYWRkcmVzcyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIH1cbn1cbiIsIiRwcmltYXJ5Q29sb3I6ICMwZTI2ZmY7XG4kcHJpbWFyeUxpZ2h0OiAjZGFkZGZhO1xuJHNlY29uZGFyeUNvbG9yOiAjZmY1NzIxO1xuJHNlY29uZGFyeUNvbG9yTGlnaHQ6ICNmNmU1ZTA7XG5cbiRjb3JyZWN0OiAjMWVhNDQ2O1xuJGNvcnJlY3REYXJrOiAjMGY1MjIzO1xuJGNvcnJlY3RMaWdodDogI2U3ZjhlZDtcblxuJGVycm9yOiAjZGMzNjJlO1xuJGVycm9yRGFyazogIzYwMTQxMDtcbiRlcnJvckxpZ2h0OiAjZmNlZWVlO1xuXG4kd2FybmluZzogI2RlNjgwMDtcbiR3YXJuaW5nRGFyazogIzRhMjEwYTtcbiR3YXJuaW5nTGlnaHQ6ICNmZmVlZTk7XG5cbiRpbmZvOiAjMzk5OGQzO1xuJGluZm9EYXJrOiAjMDA0YTc3O1xuJGluZm9MaWdodDogI2VjZjNmZTtcblxuJGJsYWNrOiAjMTgxODE4O1xuJGdyYXk6ICM3Mzc3N2Y7XG4kdGF1cGVHcmF5OiAjOTY5MzllO1xuJGZyZW5jaEdyYXk6ICNjM2M2Y2Y7XG4kcGxhdGludW06ICNlM2UzZTM7XG4kYW50aUZsYXNoV2hpdGU6ICNlZWVkZjE7XG4kc2VhU2FsdDogI2Y5ZjlmYztcbiR3aGl0ZTogI2ZmZmZmZjtcblxuJHNtb290aEJlemllcjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuNCwgMC43LCAxKTtcblxuJG1heEV4dHJhU21hbGw6IDU5NXB4O1xuJG1pblNtYWxsOiA2MDBweDtcbiRtZWRpdW06IDc2OHB4O1xuJGxhcmdlOiA4ODlweDtcbiRjb21wdXRlcnM6IDEyMDBweDtcbiIsIkB1c2UgXCIuL3ZhcmlhYmxlc1wiO1xuXG4udGlwLWJveCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICZfX3RleHQge1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJl9fbGluayB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbn1cblxuLnRvb2x0aXAge1xuICAgIGZvbnQ6IFBvcHBpbnM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgY29sb3I6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRvcDogLTQ0cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTEycHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICBib3JkZXItd2lkdGg6IDZweDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuLnRvb2x0aXAtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciAudG9vbHRpcCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVjZWl2ZS1xci9yZWNlaXZlLXFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19lbGVtZW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtBQ0RKO0FER0k7RUFDSSxXQUFBO0FDRFI7O0FES0E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FDRko7QURJSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBQ0ZSO0FETVE7RUFDSSxrQkFBQTtBQ0paO0FEUUk7RUFDSSw2QkFBQTtFQUNBLGNFcEJEO0VGcUJDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2R0FDSTtBQ1BaO0FEVVE7RUFDSSxlQUFBO0FDUlo7QURXUTtFQUNJLGFFbENMO0FEeUJQO0FEWVE7RUFDSSxjRXZDSjtFRndDSSx5QkVwQ0Q7QUQwQlg7QURZWTtFQUNJLGFFM0NSO0FEaUNSO0FEY1E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FDWlo7QURjWTtFQUNJLGFFbERKO0FEc0NaO0FEaUJJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ2ZSO0FEa0JJO0VBQ0ksV0FBQTtBQ2hCUjtBRGtCUTtFQUNJLG1CQUFBO0FDaEJaO0FEb0JJO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDZHQUNJO0FDbkJaO0FEc0JRO0VBQ0ksb0NBQUE7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O0FBdWNSO0FBcGNJO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNDbENBO0FEd2VSO0FBbmNJO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBcWNSO0FBbGNJO0VBQ0ksZ0JBQUE7QUFvY1I7QUFqY0k7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQW1jUjtBQWhjSTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFrY1I7QUEvYkk7RUFDSSxVQUFBO0FBaWNSO0FBOWJJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQWdjUjtBQTdiSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGNDcEZBO0FEbWhCUjtBQTViSTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGNDL0ZBO0VEZ0dBLHFCQUFBO0FBOGJSO0FBR0EsZ2k2QkFBZ2k2QiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCIuL3ZhcmlhYmxlc1wiO1xuXG4uemVsZi1idXR0b24tZXh0ZXJuYWwtbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAmLS13aWRlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uemVsZi1idXR0b24ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBnYXA6IDhweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgIH1cblxuICAgICZfX3RleHQge1xuICAgICAgICAmLS1tYXJnaW4tcmlnaHQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0taHlwZXJsaW5rIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuMnMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJi0tc21hbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR0YXVwZUdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS10aGluIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgfVxuXG4gICAgJi0td2lkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICYuemVsZi1idXR0b24tLWh5cGVybGluayB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYmxhY2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1hbnRpLWZsYXNoLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcjtcblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRzZWNvbmRhcnlDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRwbGF0aW51bSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZnJlbmNoR3JheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0td2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRhbnRpRmxhc2hXaGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXJpYWJsZXMuJGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0LXNwaW5uZXIgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tb3V0bGluZWQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1yZWQge1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGVycm9yTGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWVycm9yIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRlcnJvckxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZXJyb3IgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXN1Y2Nlc3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGNvcnJlY3RMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tbm8tZmlsbCB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXBpbGwge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgfVxufVxuXG4uemVsZi1pY29uLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYW50aUZsYXNoV2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1NnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBnYXA6IDE2cHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgbWluLXdpZHRoOiA1NnB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjpcbiAgICAgICAgY29sb3IgMC4zcyB2YXJpYWJsZXMuJHNtb290aEJlemllcixcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHdpZHRoOiA1NnB4O1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICB9XG5cbiAgICAmLnplbGYtaWNvbi1idXR0b24tLWJvcmRlci1zb2Z0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG4gICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kc2Vjb25kYXJ5Q29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWJvcmRlci1zb2Z0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB9XG5cbiAgICAmLS00MCB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG5cbiAgICAgICAgJi56ZWxmLWljb24tYnV0dG9uLS1ib3JkZXItc29mdCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0taHlwZXJsaW5rIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuMnMgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJi0tc21hbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtO1xuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR0YXVwZUdyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kdGF1cGVHcmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ibGFjayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgdmFyaWFibGVzLiRzbW9vdGhCZXppZXI7XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiR0YXVwZUdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdC1zcGlubmVyIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBzdHJva2U6IHZhcmlhYmxlcy4kYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWFudGktZmxhc2gtd2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBjb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIHZhcmlhYmxlcy4kc21vb3RoQmV6aWVyO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHNlY29uZGFyeUNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiR3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXJpYWJsZXMuJHBsYXRpbnVtICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtc3Bpbm5lciBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS10cmFuc3BhcmVudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kcGxhdGludW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRncmF5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgZmlsbDogdmFyaWFibGVzLiRmcmVuY2hHcmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tbm8tZmlsbCB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGZpbGw6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXRleHQge1xuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtaW4td2lkdGg6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmLS1lcnJvciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kZXJyb3JMaWdodCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRlcnJvciAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGVycm9yICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1zdWNjZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyaWFibGVzLiRjb3JyZWN0TGlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kY29ycmVjdCAhaW1wb3J0YW50O1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiB2YXJpYWJsZXMuJGNvcnJlY3QgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLXBpbGwge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxufVxuIiwiQHVzZSBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcbkB1c2UgXCIuLi8uLi9zdHlsZXMvYnV0dG9uc1wiO1xuQHVzZSBcIi4uLy4uL3N0eWxlcy9lbGVtZW50c1wiO1xuXG46aG9zdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmVjZWl2ZS1xciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MjRweDtcblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgICAgICBjb2x1bW4tZ2FwOiAxMnB4O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgIGdhcDogMjRweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJl9fY29sMSxcbiAgICAmX19jb2wzIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19jb2wxIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICB9XG5cbiAgICAmX19jb2wyIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gNDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICZfX2NvbDMge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBnYXA6IDI0cHg7XG4gICAgfVxuXG4gICAgJl9fY2hpcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuXG4gICAgJl9fcXItY29kZSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMzEycHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMxMnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmX19hY3Rpb24tcm93IHtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA2MnB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgJl9fYWN0aW9uLWNvbCB7XG4gICAgICAgIHdpZHRoOiA4NiU7XG4gICAgfVxuXG4gICAgJl9fbG9hZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cblxuICAgICZfX3Rva2VuLXR5cGUge1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgfVxuXG4gICAgJl9fYWRkcmVzcyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIH1cbn1cbiIsIiRwcmltYXJ5Q29sb3I6ICMwZTI2ZmY7XG4kcHJpbWFyeUxpZ2h0OiAjZGFkZGZhO1xuJHNlY29uZGFyeUNvbG9yOiAjZmY1NzIxO1xuJHNlY29uZGFyeUNvbG9yTGlnaHQ6ICNmNmU1ZTA7XG5cbiRjb3JyZWN0OiAjMWVhNDQ2O1xuJGNvcnJlY3REYXJrOiAjMGY1MjIzO1xuJGNvcnJlY3RMaWdodDogI2U3ZjhlZDtcblxuJGVycm9yOiAjZGMzNjJlO1xuJGVycm9yRGFyazogIzYwMTQxMDtcbiRlcnJvckxpZ2h0OiAjZmNlZWVlO1xuXG4kd2FybmluZzogI2RlNjgwMDtcbiR3YXJuaW5nRGFyazogIzRhMjEwYTtcbiR3YXJuaW5nTGlnaHQ6ICNmZmVlZTk7XG5cbiRpbmZvOiAjMzk5OGQzO1xuJGluZm9EYXJrOiAjMDA0YTc3O1xuJGluZm9MaWdodDogI2VjZjNmZTtcblxuJGJsYWNrOiAjMTgxODE4O1xuJGdyYXk6ICM3Mzc3N2Y7XG4kdGF1cGVHcmF5OiAjOTY5MzllO1xuJGZyZW5jaEdyYXk6ICNjM2M2Y2Y7XG4kcGxhdGludW06ICNlM2UzZTM7XG4kYW50aUZsYXNoV2hpdGU6ICNlZWVkZjE7XG4kc2VhU2FsdDogI2Y5ZjlmYztcbiR3aGl0ZTogI2ZmZmZmZjtcblxuJHNtb290aEJlemllcjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuNCwgMC43LCAxKTtcblxuJG1heEV4dHJhU21hbGw6IDU5NXB4O1xuJG1pblNtYWxsOiA2MDBweDtcbiRtZWRpdW06IDc2OHB4O1xuJGxhcmdlOiA4ODlweDtcbiRjb21wdXRlcnM6IDEyMDBweDtcbiIsIkB1c2UgXCIuL3ZhcmlhYmxlc1wiO1xuXG4udGlwLWJveCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXJpYWJsZXMuJGFudGlGbGFzaFdoaXRlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICZfX3RleHQge1xuICAgICAgICBjb2xvcjogdmFyaWFibGVzLiRibGFjaztcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJl9fbGluayB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbn1cblxuLnRvb2x0aXAge1xuICAgIGZvbnQ6IFBvcHBpbnM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcmlhYmxlcy4kYmxhY2s7XG4gICAgY29sb3I6IHZhcmlhYmxlcy4kd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRvcDogLTQ0cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTEycHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICBib3JkZXItd2lkdGg6IDZweDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXJpYWJsZXMuJGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuLnRvb2x0aXAtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciAudG9vbHRpcCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 85000:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \************************************************************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 88070:
/*!******************************************************************!*\
  !*** ./src/app/base/copy-to-clipboard/copy-to-clipboard.base.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopyToClipboardBase: () => (/* binding */ CopyToClipboardBase)
/* harmony export */ });
/* harmony import */ var _Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);

class CopyToClipboardBase {
  _chromeService;
  _snackBar;
  _translocoService;
  _copyToClipboardActionText;
  _copyToClipboardErrorActionText;
  _copyToClipboardErrorText;
  _copyToClipboardText;
  constructor(_chromeService, _snackBar, _translocoService) {
    this._chromeService = _chromeService;
    this._snackBar = _snackBar;
    this._translocoService = _translocoService;
    this._copyToClipboardActionText = this._translocoService.translate("common.close");
    this._copyToClipboardErrorActionText = this._translocoService.translate("common.close");
    this._copyToClipboardErrorText = this._translocoService.translate("common.failed_to_copy_to_clipboard");
    this._copyToClipboardText = this._translocoService.translate("common.copied_to_clipboard");
  }
  _copyToClipboard(_x) {
    var _this = this;
    return (0,_Users_miguel_zelf_avalanche_hackathon_2025_extension_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (value, showSnackBar = true) {
      try {
        yield _this._chromeService.copyToClipboard(value);
        if (showSnackBar) _this._showCopyToClipboardSnackBar();
      } catch (error) {
        if (!showSnackBar) return;
        _this._showCopyToClipboardSnackBarError();
      }
    }).apply(this, arguments);
  }
  _showCopyToClipboardSnackBar() {
    this._snackBar.open(this._copyToClipboardText, this._copyToClipboardActionText, {
      duration: 2000,
      panelClass: "zelf-snackbar",
      verticalPosition: "top"
    });
  }
  _showCopyToClipboardSnackBarError() {
    this._snackBar.open(this._copyToClipboardErrorText, this._copyToClipboardErrorActionText, {
      duration: 2000,
      panelClass: "zelf-snackbar",
      verticalPosition: "top"
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_receive-qr_receive-qr_component_ts.js.map