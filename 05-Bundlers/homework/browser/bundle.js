(() => {
  var e = {
      394: (e) => {
        function t() {
          this.subscribers = {};
        }
        (t.prototype.on = function (e, t) {
          this.subscribers[e] || (this.subscribers[e] = []),
            this.subscribers[e].push(t);
        }),
          (t.prototype.emit = function (e) {
            if (this.subscribers[e]) {
              var t = [].slice.call(arguments, 1);
              this.subscribers[e].forEach(function (e) {
                e.apply(null, t);
              });
            }
          }),
          (e.exports = t);
      },
      672: (e, t, s) => {
        const n = new (s(394))();
        var r;
        [].slice
          .call(document.querySelectorAll(".marker"))
          .forEach(function (e) {
            (e.style.backgroundColor = e.id),
              e.addEventListener("click", function () {
                (r = this.id),
                  document
                    .querySelector(".selected")
                    .classList.remove("selected"),
                  this.classList.add("selected");
              });
          });
        var o = document.getElementById("paint"),
          i = o.getContext("2d");
        function a() {
          i.setTransform(1, 0, 0, 1, 0, 0);
          var e = window.devicePixelRatio || 1,
            t = o.clientWidth * e,
            s = o.clientHeight * e;
          if (t !== o.width || s !== o.height) {
            var n = i.getImageData(0, 0, o.width, o.height);
            (o.width = t), (o.height = s), i.putImageData(n, 0, 0);
          }
          i.scale(e, e),
            (i.lineWidth = 5),
            (i.lineJoin = "round"),
            (i.lineCap = "round");
        }
        a(), window.addEventListener("resize", a);
        var c = { x: 0, y: 0 },
          u = { x: 0, y: 0 },
          h = !1;
        o.addEventListener("mousedown", function (e) {
          (h = !0),
            (c.x = e.pageX - this.offsetLeft),
            (c.y = e.pageY - this.offsetTop);
        }),
          o.addEventListener("mouseup", function () {
            h = !1;
          }),
          o.addEventListener("mousemove", function (e) {
            h &&
              ((u.x = c.x),
              (u.y = c.y),
              (c.x = e.pageX - this.offsetLeft),
              (c.y = e.pageY - this.offsetTop),
              n.draw(u, c, r, !0));
          }),
          (n.draw = function (e, t, s, r) {
            i.beginPath(),
              (i.strokeStyle = s || "black"),
              i.moveTo(e.x, e.y),
              i.lineTo(t.x, t.y),
              i.closePath(),
              i.stroke(),
              r && n.emit("draw", e, t, s);
          }),
          (e.exports = n);
      },
      802: (e, t, s) => {
        (t.formatArgs = function (t) {
          if (
            ((t[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              t[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const s = "color: " + this.color;
          t.splice(1, 0, s, "color: inherit");
          let n = 0,
            r = 0;
          t[0].replace(/%[a-zA-Z%]/g, (e) => {
            "%%" !== e && (n++, "%c" === e && (r = n));
          }),
            t.splice(r, 0, s);
        }),
          (t.save = function (e) {
            try {
              e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
            } catch (e) {}
          }),
          (t.load = function () {
            let e;
            try {
              e = t.storage.getItem("debug");
            } catch (e) {}
            return (
              !e &&
                "undefined" != typeof process &&
                "env" in process &&
                (e = process.env.DEBUG),
              e
            );
          }),
          (t.useColors = function () {
            return (
              !(
                "undefined" == typeof window ||
                !window.process ||
                ("renderer" !== window.process.type && !window.process.__nwjs)
              ) ||
              (("undefined" == typeof navigator ||
                !navigator.userAgent ||
                !navigator.userAgent
                  .toLowerCase()
                  .match(/(edge|trident)\/(\d+)/)) &&
                (("undefined" != typeof document &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                  ("undefined" != typeof window &&
                    window.console &&
                    (window.console.firebug ||
                      (window.console.exception && window.console.table))) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                    parseInt(RegExp.$1, 10) >= 31) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent
                      .toLowerCase()
                      .match(/applewebkit\/(\d+)/))))
            );
          }),
          (t.storage = (function () {
            try {
              return localStorage;
            } catch (e) {}
          })()),
          (t.destroy = (() => {
            let e = !1;
            return () => {
              e ||
                ((e = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                ));
            };
          })()),
          (t.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (t.log = console.debug || console.log || (() => {})),
          (e.exports = s(804)(t));
        const { formatters: n } = e.exports;
        n.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        };
      },
      804: (e, t, s) => {
        e.exports = function (e) {
          function t(e) {
            let s,
              r,
              o,
              i = null;
            function a(...e) {
              if (!a.enabled) return;
              const n = a,
                r = Number(new Date()),
                o = r - (s || r);
              (n.diff = o),
                (n.prev = s),
                (n.curr = r),
                (s = r),
                (e[0] = t.coerce(e[0])),
                "string" != typeof e[0] && e.unshift("%O");
              let i = 0;
              (e[0] = e[0].replace(/%([a-zA-Z%])/g, (s, r) => {
                if ("%%" === s) return "%";
                i++;
                const o = t.formatters[r];
                if ("function" == typeof o) {
                  const t = e[i];
                  (s = o.call(n, t)), e.splice(i, 1), i--;
                }
                return s;
              })),
                t.formatArgs.call(n, e),
                (n.log || t.log).apply(n, e);
            }
            return (
              (a.namespace = e),
              (a.useColors = t.useColors()),
              (a.color = t.selectColor(e)),
              (a.extend = n),
              (a.destroy = t.destroy),
              Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== i
                    ? i
                    : (r !== t.namespaces &&
                        ((r = t.namespaces), (o = t.enabled(e))),
                      o),
                set: (e) => {
                  i = e;
                },
              }),
              "function" == typeof t.init && t.init(a),
              a
            );
          }
          function n(e, s) {
            const n = t(this.namespace + (void 0 === s ? ":" : s) + e);
            return (n.log = this.log), n;
          }
          function r(e) {
            return e
              .toString()
              .substring(2, e.toString().length - 2)
              .replace(/\.\*\?$/, "*");
          }
          return (
            (t.debug = t),
            (t.default = t),
            (t.coerce = function (e) {
              return e instanceof Error ? e.stack || e.message : e;
            }),
            (t.disable = function () {
              const e = [
                ...t.names.map(r),
                ...t.skips.map(r).map((e) => "-" + e),
              ].join(",");
              return t.enable(""), e;
            }),
            (t.enable = function (e) {
              let s;
              t.save(e), (t.namespaces = e), (t.names = []), (t.skips = []);
              const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                r = n.length;
              for (s = 0; s < r; s++)
                n[s] &&
                  ("-" === (e = n[s].replace(/\*/g, ".*?"))[0]
                    ? t.skips.push(new RegExp("^" + e.slice(1) + "$"))
                    : t.names.push(new RegExp("^" + e + "$")));
            }),
            (t.enabled = function (e) {
              if ("*" === e[e.length - 1]) return !0;
              let s, n;
              for (s = 0, n = t.skips.length; s < n; s++)
                if (t.skips[s].test(e)) return !1;
              for (s = 0, n = t.names.length; s < n; s++)
                if (t.names[s].test(e)) return !0;
              return !1;
            }),
            (t.humanize = s(810)),
            (t.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              );
            }),
            Object.keys(e).forEach((s) => {
              t[s] = e[s];
            }),
            (t.names = []),
            (t.skips = []),
            (t.formatters = {}),
            (t.selectColor = function (e) {
              let s = 0;
              for (let t = 0; t < e.length; t++)
                (s = (s << 5) - s + e.charCodeAt(t)), (s |= 0);
              return t.colors[Math.abs(s) % t.colors.length];
            }),
            t.enable(t.load()),
            t
          );
        };
      },
      810: (e) => {
        var t = 1e3,
          s = 60 * t,
          n = 60 * s,
          r = 24 * n;
        function o(e, t, s, n) {
          var r = t >= 1.5 * s;
          return Math.round(e / s) + " " + n + (r ? "s" : "");
        }
        e.exports = function (e, i) {
          i = i || {};
          var a,
            c,
            u = typeof e;
          if ("string" === u && e.length > 0)
            return (function (e) {
              if (!((e = String(e)).length > 100)) {
                var o =
                  /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    e
                  );
                if (o) {
                  var i = parseFloat(o[1]);
                  switch ((o[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * i;
                    case "weeks":
                    case "week":
                    case "w":
                      return 6048e5 * i;
                    case "days":
                    case "day":
                    case "d":
                      return i * r;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return i * n;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return i * s;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return i * t;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return i;
                    default:
                      return;
                  }
                }
              }
            })(e);
          if ("number" === u && isFinite(e))
            return i.long
              ? ((a = e),
                (c = Math.abs(a)) >= r
                  ? o(a, c, r, "day")
                  : c >= n
                  ? o(a, c, n, "hour")
                  : c >= s
                  ? o(a, c, s, "minute")
                  : c >= t
                  ? o(a, c, t, "second")
                  : a + " ms")
              : (function (e) {
                  var o = Math.abs(e);
                  return o >= r
                    ? Math.round(e / r) + "d"
                    : o >= n
                    ? Math.round(e / n) + "h"
                    : o >= s
                    ? Math.round(e / s) + "m"
                    : o >= t
                    ? Math.round(e / t) + "s"
                    : e + "ms";
                })(e);
          throw new Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(e)
          );
        };
      },
      669: (e, t, s) => {
        (t.formatArgs = function (t) {
          if (
            ((t[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              t[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const s = "color: " + this.color;
          t.splice(1, 0, s, "color: inherit");
          let n = 0,
            r = 0;
          t[0].replace(/%[a-zA-Z%]/g, (e) => {
            "%%" !== e && (n++, "%c" === e && (r = n));
          }),
            t.splice(r, 0, s);
        }),
          (t.save = function (e) {
            try {
              e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
            } catch (e) {}
          }),
          (t.load = function () {
            let e;
            try {
              e = t.storage.getItem("debug");
            } catch (e) {}
            return (
              !e &&
                "undefined" != typeof process &&
                "env" in process &&
                (e = process.env.DEBUG),
              e
            );
          }),
          (t.useColors = function () {
            return (
              !(
                "undefined" == typeof window ||
                !window.process ||
                ("renderer" !== window.process.type && !window.process.__nwjs)
              ) ||
              (("undefined" == typeof navigator ||
                !navigator.userAgent ||
                !navigator.userAgent
                  .toLowerCase()
                  .match(/(edge|trident)\/(\d+)/)) &&
                (("undefined" != typeof document &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                  ("undefined" != typeof window &&
                    window.console &&
                    (window.console.firebug ||
                      (window.console.exception && window.console.table))) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                    parseInt(RegExp.$1, 10) >= 31) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent
                      .toLowerCase()
                      .match(/applewebkit\/(\d+)/))))
            );
          }),
          (t.storage = (function () {
            try {
              return localStorage;
            } catch (e) {}
          })()),
          (t.destroy = (() => {
            let e = !1;
            return () => {
              e ||
                ((e = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                ));
            };
          })()),
          (t.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (t.log = console.debug || console.log || (() => {})),
          (e.exports = s(231)(t));
        const { formatters: n } = e.exports;
        n.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        };
      },
      231: (e, t, s) => {
        e.exports = function (e) {
          function t(e) {
            let s,
              r,
              o,
              i = null;
            function a(...e) {
              if (!a.enabled) return;
              const n = a,
                r = Number(new Date()),
                o = r - (s || r);
              (n.diff = o),
                (n.prev = s),
                (n.curr = r),
                (s = r),
                (e[0] = t.coerce(e[0])),
                "string" != typeof e[0] && e.unshift("%O");
              let i = 0;
              (e[0] = e[0].replace(/%([a-zA-Z%])/g, (s, r) => {
                if ("%%" === s) return "%";
                i++;
                const o = t.formatters[r];
                if ("function" == typeof o) {
                  const t = e[i];
                  (s = o.call(n, t)), e.splice(i, 1), i--;
                }
                return s;
              })),
                t.formatArgs.call(n, e),
                (n.log || t.log).apply(n, e);
            }
            return (
              (a.namespace = e),
              (a.useColors = t.useColors()),
              (a.color = t.selectColor(e)),
              (a.extend = n),
              (a.destroy = t.destroy),
              Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== i
                    ? i
                    : (r !== t.namespaces &&
                        ((r = t.namespaces), (o = t.enabled(e))),
                      o),
                set: (e) => {
                  i = e;
                },
              }),
              "function" == typeof t.init && t.init(a),
              a
            );
          }
          function n(e, s) {
            const n = t(this.namespace + (void 0 === s ? ":" : s) + e);
            return (n.log = this.log), n;
          }
          function r(e) {
            return e
              .toString()
              .substring(2, e.toString().length - 2)
              .replace(/\.\*\?$/, "*");
          }
          return (
            (t.debug = t),
            (t.default = t),
            (t.coerce = function (e) {
              return e instanceof Error ? e.stack || e.message : e;
            }),
            (t.disable = function () {
              const e = [
                ...t.names.map(r),
                ...t.skips.map(r).map((e) => "-" + e),
              ].join(",");
              return t.enable(""), e;
            }),
            (t.enable = function (e) {
              let s;
              t.save(e), (t.namespaces = e), (t.names = []), (t.skips = []);
              const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                r = n.length;
              for (s = 0; s < r; s++)
                n[s] &&
                  ("-" === (e = n[s].replace(/\*/g, ".*?"))[0]
                    ? t.skips.push(new RegExp("^" + e.slice(1) + "$"))
                    : t.names.push(new RegExp("^" + e + "$")));
            }),
            (t.enabled = function (e) {
              if ("*" === e[e.length - 1]) return !0;
              let s, n;
              for (s = 0, n = t.skips.length; s < n; s++)
                if (t.skips[s].test(e)) return !1;
              for (s = 0, n = t.names.length; s < n; s++)
                if (t.names[s].test(e)) return !0;
              return !1;
            }),
            (t.humanize = s(241)),
            (t.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              );
            }),
            Object.keys(e).forEach((s) => {
              t[s] = e[s];
            }),
            (t.names = []),
            (t.skips = []),
            (t.formatters = {}),
            (t.selectColor = function (e) {
              let s = 0;
              for (let t = 0; t < e.length; t++)
                (s = (s << 5) - s + e.charCodeAt(t)), (s |= 0);
              return t.colors[Math.abs(s) % t.colors.length];
            }),
            t.enable(t.load()),
            t
          );
        };
      },
      241: (e) => {
        var t = 1e3,
          s = 60 * t,
          n = 60 * s,
          r = 24 * n;
        function o(e, t, s, n) {
          var r = t >= 1.5 * s;
          return Math.round(e / s) + " " + n + (r ? "s" : "");
        }
        e.exports = function (e, i) {
          i = i || {};
          var a,
            c,
            u = typeof e;
          if ("string" === u && e.length > 0)
            return (function (e) {
              if (!((e = String(e)).length > 100)) {
                var o =
                  /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    e
                  );
                if (o) {
                  var i = parseFloat(o[1]);
                  switch ((o[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * i;
                    case "weeks":
                    case "week":
                    case "w":
                      return 6048e5 * i;
                    case "days":
                    case "day":
                    case "d":
                      return i * r;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return i * n;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return i * s;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return i * t;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return i;
                    default:
                      return;
                  }
                }
              }
            })(e);
          if ("number" === u && isFinite(e))
            return i.long
              ? ((a = e),
                (c = Math.abs(a)) >= r
                  ? o(a, c, r, "day")
                  : c >= n
                  ? o(a, c, n, "hour")
                  : c >= s
                  ? o(a, c, s, "minute")
                  : c >= t
                  ? o(a, c, t, "second")
                  : a + " ms")
              : (function (e) {
                  var o = Math.abs(e);
                  return o >= r
                    ? Math.round(e / r) + "d"
                    : o >= n
                    ? Math.round(e / n) + "h"
                    : o >= s
                    ? Math.round(e / s) + "m"
                    : o >= t
                    ? Math.round(e / t) + "s"
                    : e + "ms";
                })(e);
          throw new Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(e)
          );
        };
      },
      618: (e, t, s) => {
        (t.formatArgs = function (t) {
          if (
            ((t[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              t[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const s = "color: " + this.color;
          t.splice(1, 0, s, "color: inherit");
          let n = 0,
            r = 0;
          t[0].replace(/%[a-zA-Z%]/g, (e) => {
            "%%" !== e && (n++, "%c" === e && (r = n));
          }),
            t.splice(r, 0, s);
        }),
          (t.save = function (e) {
            try {
              e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
            } catch (e) {}
          }),
          (t.load = function () {
            let e;
            try {
              e = t.storage.getItem("debug");
            } catch (e) {}
            return (
              !e &&
                "undefined" != typeof process &&
                "env" in process &&
                (e = process.env.DEBUG),
              e
            );
          }),
          (t.useColors = function () {
            return (
              !(
                "undefined" == typeof window ||
                !window.process ||
                ("renderer" !== window.process.type && !window.process.__nwjs)
              ) ||
              (("undefined" == typeof navigator ||
                !navigator.userAgent ||
                !navigator.userAgent
                  .toLowerCase()
                  .match(/(edge|trident)\/(\d+)/)) &&
                (("undefined" != typeof document &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                  ("undefined" != typeof window &&
                    window.console &&
                    (window.console.firebug ||
                      (window.console.exception && window.console.table))) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                    parseInt(RegExp.$1, 10) >= 31) ||
                  ("undefined" != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent
                      .toLowerCase()
                      .match(/applewebkit\/(\d+)/))))
            );
          }),
          (t.storage = (function () {
            try {
              return localStorage;
            } catch (e) {}
          })()),
          (t.destroy = (() => {
            let e = !1;
            return () => {
              e ||
                ((e = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                ));
            };
          })()),
          (t.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (t.log = console.debug || console.log || (() => {})),
          (e.exports = s(224)(t));
        const { formatters: n } = e.exports;
        n.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        };
      },
      224: (e, t, s) => {
        e.exports = function (e) {
          function t(e) {
            let s,
              r,
              o,
              i = null;
            function a(...e) {
              if (!a.enabled) return;
              const n = a,
                r = Number(new Date()),
                o = r - (s || r);
              (n.diff = o),
                (n.prev = s),
                (n.curr = r),
                (s = r),
                (e[0] = t.coerce(e[0])),
                "string" != typeof e[0] && e.unshift("%O");
              let i = 0;
              (e[0] = e[0].replace(/%([a-zA-Z%])/g, (s, r) => {
                if ("%%" === s) return "%";
                i++;
                const o = t.formatters[r];
                if ("function" == typeof o) {
                  const t = e[i];
                  (s = o.call(n, t)), e.splice(i, 1), i--;
                }
                return s;
              })),
                t.formatArgs.call(n, e),
                (n.log || t.log).apply(n, e);
            }
            return (
              (a.namespace = e),
              (a.useColors = t.useColors()),
              (a.color = t.selectColor(e)),
              (a.extend = n),
              (a.destroy = t.destroy),
              Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== i
                    ? i
                    : (r !== t.namespaces &&
                        ((r = t.namespaces), (o = t.enabled(e))),
                      o),
                set: (e) => {
                  i = e;
                },
              }),
              "function" == typeof t.init && t.init(a),
              a
            );
          }
          function n(e, s) {
            const n = t(this.namespace + (void 0 === s ? ":" : s) + e);
            return (n.log = this.log), n;
          }
          function r(e) {
            return e
              .toString()
              .substring(2, e.toString().length - 2)
              .replace(/\.\*\?$/, "*");
          }
          return (
            (t.debug = t),
            (t.default = t),
            (t.coerce = function (e) {
              return e instanceof Error ? e.stack || e.message : e;
            }),
            (t.disable = function () {
              const e = [
                ...t.names.map(r),
                ...t.skips.map(r).map((e) => "-" + e),
              ].join(",");
              return t.enable(""), e;
            }),
            (t.enable = function (e) {
              let s;
              t.save(e), (t.namespaces = e), (t.names = []), (t.skips = []);
              const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                r = n.length;
              for (s = 0; s < r; s++)
                n[s] &&
                  ("-" === (e = n[s].replace(/\*/g, ".*?"))[0]
                    ? t.skips.push(new RegExp("^" + e.slice(1) + "$"))
                    : t.names.push(new RegExp("^" + e + "$")));
            }),
            (t.enabled = function (e) {
              if ("*" === e[e.length - 1]) return !0;
              let s, n;
              for (s = 0, n = t.skips.length; s < n; s++)
                if (t.skips[s].test(e)) return !1;
              for (s = 0, n = t.names.length; s < n; s++)
                if (t.names[s].test(e)) return !0;
              return !1;
            }),
            (t.humanize = s(896)),
            (t.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              );
            }),
            Object.keys(e).forEach((s) => {
              t[s] = e[s];
            }),
            (t.names = []),
            (t.skips = []),
            (t.formatters = {}),
            (t.selectColor = function (e) {
              let s = 0;
              for (let t = 0; t < e.length; t++)
                (s = (s << 5) - s + e.charCodeAt(t)), (s |= 0);
              return t.colors[Math.abs(s) % t.colors.length];
            }),
            t.enable(t.load()),
            t
          );
        };
      },
      896: (e) => {
        var t = 1e3,
          s = 60 * t,
          n = 60 * s,
          r = 24 * n;
        function o(e, t, s, n) {
          var r = t >= 1.5 * s;
          return Math.round(e / s) + " " + n + (r ? "s" : "");
        }
        e.exports = function (e, i) {
          i = i || {};
          var a,
            c,
            u = typeof e;
          if ("string" === u && e.length > 0)
            return (function (e) {
              if (!((e = String(e)).length > 100)) {
                var o =
                  /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    e
                  );
                if (o) {
                  var i = parseFloat(o[1]);
                  switch ((o[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * i;
                    case "weeks":
                    case "week":
                    case "w":
                      return 6048e5 * i;
                    case "days":
                    case "day":
                    case "d":
                      return i * r;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return i * n;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return i * s;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return i * t;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return i;
                    default:
                      return;
                  }
                }
              }
            })(e);
          if ("number" === u && isFinite(e))
            return i.long
              ? ((a = e),
                (c = Math.abs(a)) >= r
                  ? o(a, c, r, "day")
                  : c >= n
                  ? o(a, c, n, "hour")
                  : c >= s
                  ? o(a, c, s, "minute")
                  : c >= t
                  ? o(a, c, t, "second")
                  : a + " ms")
              : (function (e) {
                  var o = Math.abs(e);
                  return o >= r
                    ? Math.round(e / r) + "d"
                    : o >= n
                    ? Math.round(e / n) + "h"
                    : o >= s
                    ? Math.round(e / s) + "m"
                    : o >= t
                    ? Math.round(e / t) + "s"
                    : e + "ms";
                })(e);
          throw new Error(
            "val is not a non-empty string or a valid number. val=" +
              JSON.stringify(e)
          );
        };
      },
      419: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.hasCORS = void 0);
        let s = !1;
        try {
          s =
            "undefined" != typeof XMLHttpRequest &&
            "withCredentials" in new XMLHttpRequest();
        } catch (e) {}
        t.hasCORS = s;
      },
      754: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.decode = t.encode = void 0),
          (t.encode = function (e) {
            let t = "";
            for (let s in e)
              e.hasOwnProperty(s) &&
                (t.length && (t += "&"),
                (t += encodeURIComponent(s) + "=" + encodeURIComponent(e[s])));
            return t;
          }),
          (t.decode = function (e) {
            let t = {},
              s = e.split("&");
            for (let e = 0, n = s.length; e < n; e++) {
              let n = s[e].split("=");
              t[decodeURIComponent(n[0])] = decodeURIComponent(n[1]);
            }
            return t;
          });
      },
      222: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.parse = void 0);
        const s =
            /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
          n = [
            "source",
            "protocol",
            "authority",
            "userInfo",
            "user",
            "password",
            "host",
            "port",
            "relative",
            "path",
            "directory",
            "file",
            "query",
            "anchor",
          ];
        t.parse = function (e) {
          const t = e,
            r = e.indexOf("["),
            o = e.indexOf("]");
          -1 != r &&
            -1 != o &&
            (e =
              e.substring(0, r) +
              e.substring(r, o).replace(/:/g, ";") +
              e.substring(o, e.length));
          let i = s.exec(e || ""),
            a = {},
            c = 14;
          for (; c--; ) a[n[c]] = i[c] || "";
          return (
            -1 != r &&
              -1 != o &&
              ((a.source = t),
              (a.host = a.host
                .substring(1, a.host.length - 1)
                .replace(/;/g, ":")),
              (a.authority = a.authority
                .replace("[", "")
                .replace("]", "")
                .replace(/;/g, ":")),
              (a.ipv6uri = !0)),
            (a.pathNames = (function (e, t) {
              const s = t.replace(/\/{2,9}/g, "/").split("/");
              return (
                ("/" != t.slice(0, 1) && 0 !== t.length) || s.splice(0, 1),
                "/" == t.slice(-1) && s.splice(s.length - 1, 1),
                s
              );
            })(0, a.path)),
            (a.queryKey = (function (e, t) {
              const s = {};
              return (
                t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, n) {
                  t && (s[t] = n);
                }),
                s
              );
            })(0, a.query)),
            a
          );
        };
      },
      726: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.yeast = t.decode = t.encode = void 0);
        const s =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
              ""
            ),
          n = {};
        let r,
          o = 0,
          i = 0;
        function a(e) {
          let t = "";
          do {
            (t = s[e % 64] + t), (e = Math.floor(e / 64));
          } while (e > 0);
          return t;
        }
        for (
          t.encode = a,
            t.decode = function (e) {
              let t = 0;
              for (i = 0; i < e.length; i++) t = 64 * t + n[e.charAt(i)];
              return t;
            },
            t.yeast = function () {
              const e = a(+new Date());
              return e !== r ? ((o = 0), (r = e)) : e + "." + a(o++);
            };
          i < 64;
          i++
        )
          n[s[i]] = i;
      },
      242: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.globalThisShim = void 0),
          (t.globalThisShim =
            "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : Function("return this")());
      },
      679: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.nextTick =
            t.parse =
            t.installTimerFunctions =
            t.transports =
            t.Transport =
            t.protocol =
            t.Socket =
              void 0);
        const n = s(481);
        Object.defineProperty(t, "Socket", {
          enumerable: !0,
          get: function () {
            return n.Socket;
          },
        }),
          (t.protocol = n.Socket.protocol);
        var r = s(870);
        Object.defineProperty(t, "Transport", {
          enumerable: !0,
          get: function () {
            return r.Transport;
          },
        });
        var o = s(385);
        Object.defineProperty(t, "transports", {
          enumerable: !0,
          get: function () {
            return o.transports;
          },
        });
        var i = s(622);
        Object.defineProperty(t, "installTimerFunctions", {
          enumerable: !0,
          get: function () {
            return i.installTimerFunctions;
          },
        });
        var a = s(222);
        Object.defineProperty(t, "parse", {
          enumerable: !0,
          get: function () {
            return a.parse;
          },
        });
        var c = s(552);
        Object.defineProperty(t, "nextTick", {
          enumerable: !0,
          get: function () {
            return c.nextTick;
          },
        });
      },
      481: function (e, t, s) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Socket = void 0);
        const r = s(385),
          o = s(622),
          i = s(754),
          a = s(222),
          c = n(s(802)),
          u = s(260),
          h = s(373),
          l = (0, c.default)("engine.io-client:socket");
        class d extends u.Emitter {
          constructor(e, t = {}) {
            super(),
              e && "object" == typeof e && ((t = e), (e = null)),
              e
                ? ((e = (0, a.parse)(e)),
                  (t.hostname = e.host),
                  (t.secure = "https" === e.protocol || "wss" === e.protocol),
                  (t.port = e.port),
                  e.query && (t.query = e.query))
                : t.host && (t.hostname = (0, a.parse)(t.host).host),
              (0, o.installTimerFunctions)(this, t),
              (this.secure =
                null != t.secure
                  ? t.secure
                  : "undefined" != typeof location &&
                    "https:" === location.protocol),
              t.hostname && !t.port && (t.port = this.secure ? "443" : "80"),
              (this.hostname =
                t.hostname ||
                ("undefined" != typeof location
                  ? location.hostname
                  : "localhost")),
              (this.port =
                t.port ||
                ("undefined" != typeof location && location.port
                  ? location.port
                  : this.secure
                  ? "443"
                  : "80")),
              (this.transports = t.transports || ["polling", "websocket"]),
              (this.readyState = ""),
              (this.writeBuffer = []),
              (this.prevBufferLen = 0),
              (this.opts = Object.assign(
                {
                  path: "/engine.io",
                  agent: !1,
                  withCredentials: !1,
                  upgrade: !0,
                  timestampParam: "t",
                  rememberUpgrade: !1,
                  rejectUnauthorized: !0,
                  perMessageDeflate: { threshold: 1024 },
                  transportOptions: {},
                  closeOnBeforeunload: !0,
                },
                t
              )),
              (this.opts.path = this.opts.path.replace(/\/$/, "") + "/"),
              "string" == typeof this.opts.query &&
                (this.opts.query = (0, i.decode)(this.opts.query)),
              (this.id = null),
              (this.upgrades = null),
              (this.pingInterval = null),
              (this.pingTimeout = null),
              (this.pingTimeoutTimer = null),
              "function" == typeof addEventListener &&
                (this.opts.closeOnBeforeunload &&
                  ((this.beforeunloadEventListener = () => {
                    this.transport &&
                      (this.transport.removeAllListeners(),
                      this.transport.close());
                  }),
                  addEventListener(
                    "beforeunload",
                    this.beforeunloadEventListener,
                    !1
                  )),
                "localhost" !== this.hostname &&
                  ((this.offlineEventListener = () => {
                    this.onClose("transport close", {
                      description: "network connection lost",
                    });
                  }),
                  addEventListener("offline", this.offlineEventListener, !1))),
              this.open();
          }
          createTransport(e) {
            l('creating transport "%s"', e);
            const t = Object.assign({}, this.opts.query);
            (t.EIO = h.protocol),
              (t.transport = e),
              this.id && (t.sid = this.id);
            const s = Object.assign(
              {},
              this.opts.transportOptions[e],
              this.opts,
              {
                query: t,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port,
              }
            );
            return l("options: %j", s), new r.transports[e](s);
          }
          open() {
            let e;
            if (
              this.opts.rememberUpgrade &&
              d.priorWebsocketSuccess &&
              -1 !== this.transports.indexOf("websocket")
            )
              e = "websocket";
            else {
              if (0 === this.transports.length)
                return void this.setTimeoutFn(() => {
                  this.emitReserved("error", "No transports available");
                }, 0);
              e = this.transports[0];
            }
            this.readyState = "opening";
            try {
              e = this.createTransport(e);
            } catch (e) {
              return (
                l("error while creating transport: %s", e),
                this.transports.shift(),
                void this.open()
              );
            }
            e.open(), this.setTransport(e);
          }
          setTransport(e) {
            l("setting transport %s", e.name),
              this.transport &&
                (l("clearing existing transport %s", this.transport.name),
                this.transport.removeAllListeners()),
              (this.transport = e),
              e
                .on("drain", this.onDrain.bind(this))
                .on("packet", this.onPacket.bind(this))
                .on("error", this.onError.bind(this))
                .on("close", (e) => this.onClose("transport close", e));
          }
          probe(e) {
            l('probing transport "%s"', e);
            let t = this.createTransport(e),
              s = !1;
            d.priorWebsocketSuccess = !1;
            const n = () => {
              s ||
                (l('probe transport "%s" opened', e),
                t.send([{ type: "ping", data: "probe" }]),
                t.once("packet", (n) => {
                  if (!s)
                    if ("pong" === n.type && "probe" === n.data) {
                      if (
                        (l('probe transport "%s" pong', e),
                        (this.upgrading = !0),
                        this.emitReserved("upgrading", t),
                        !t)
                      )
                        return;
                      (d.priorWebsocketSuccess = "websocket" === t.name),
                        l(
                          'pausing current transport "%s"',
                          this.transport.name
                        ),
                        this.transport.pause(() => {
                          s ||
                            ("closed" !== this.readyState &&
                              (l(
                                "changing transport and sending upgrade packet"
                              ),
                              u(),
                              this.setTransport(t),
                              t.send([{ type: "upgrade" }]),
                              this.emitReserved("upgrade", t),
                              (t = null),
                              (this.upgrading = !1),
                              this.flush()));
                        });
                    } else {
                      l('probe transport "%s" failed', e);
                      const s = new Error("probe error");
                      (s.transport = t.name),
                        this.emitReserved("upgradeError", s);
                    }
                }));
            };
            function r() {
              s || ((s = !0), u(), t.close(), (t = null));
            }
            const o = (s) => {
              const n = new Error("probe error: " + s);
              (n.transport = t.name),
                r(),
                l('probe transport "%s" failed because of error: %s', e, s),
                this.emitReserved("upgradeError", n);
            };
            function i() {
              o("transport closed");
            }
            function a() {
              o("socket closed");
            }
            function c(e) {
              t &&
                e.name !== t.name &&
                (l('"%s" works - aborting "%s"', e.name, t.name), r());
            }
            const u = () => {
              t.removeListener("open", n),
                t.removeListener("error", o),
                t.removeListener("close", i),
                this.off("close", a),
                this.off("upgrading", c);
            };
            t.once("open", n),
              t.once("error", o),
              t.once("close", i),
              this.once("close", a),
              this.once("upgrading", c),
              t.open();
          }
          onOpen() {
            if (
              (l("socket open"),
              (this.readyState = "open"),
              (d.priorWebsocketSuccess = "websocket" === this.transport.name),
              this.emitReserved("open"),
              this.flush(),
              "open" === this.readyState &&
                this.opts.upgrade &&
                this.transport.pause)
            ) {
              l("starting upgrade probes");
              let e = 0;
              const t = this.upgrades.length;
              for (; e < t; e++) this.probe(this.upgrades[e]);
            }
          }
          onPacket(e) {
            if (
              "opening" === this.readyState ||
              "open" === this.readyState ||
              "closing" === this.readyState
            )
              switch (
                (l('socket receive: type "%s", data "%s"', e.type, e.data),
                this.emitReserved("packet", e),
                this.emitReserved("heartbeat"),
                e.type)
              ) {
                case "open":
                  this.onHandshake(JSON.parse(e.data));
                  break;
                case "ping":
                  this.resetPingTimeout(),
                    this.sendPacket("pong"),
                    this.emitReserved("ping"),
                    this.emitReserved("pong");
                  break;
                case "error":
                  const t = new Error("server error");
                  (t.code = e.data), this.onError(t);
                  break;
                case "message":
                  this.emitReserved("data", e.data),
                    this.emitReserved("message", e.data);
              }
            else
              l('packet received with socket readyState "%s"', this.readyState);
          }
          onHandshake(e) {
            this.emitReserved("handshake", e),
              (this.id = e.sid),
              (this.transport.query.sid = e.sid),
              (this.upgrades = this.filterUpgrades(e.upgrades)),
              (this.pingInterval = e.pingInterval),
              (this.pingTimeout = e.pingTimeout),
              (this.maxPayload = e.maxPayload),
              this.onOpen(),
              "closed" !== this.readyState && this.resetPingTimeout();
          }
          resetPingTimeout() {
            this.clearTimeoutFn(this.pingTimeoutTimer),
              (this.pingTimeoutTimer = this.setTimeoutFn(() => {
                this.onClose("ping timeout");
              }, this.pingInterval + this.pingTimeout)),
              this.opts.autoUnref && this.pingTimeoutTimer.unref();
          }
          onDrain() {
            this.writeBuffer.splice(0, this.prevBufferLen),
              (this.prevBufferLen = 0),
              0 === this.writeBuffer.length
                ? this.emitReserved("drain")
                : this.flush();
          }
          flush() {
            if (
              "closed" !== this.readyState &&
              this.transport.writable &&
              !this.upgrading &&
              this.writeBuffer.length
            ) {
              const e = this.getWritablePackets();
              l("flushing %d packets in socket", e.length),
                this.transport.send(e),
                (this.prevBufferLen = e.length),
                this.emitReserved("flush");
            }
          }
          getWritablePackets() {
            if (
              !(
                this.maxPayload &&
                "polling" === this.transport.name &&
                this.writeBuffer.length > 1
              )
            )
              return this.writeBuffer;
            let e = 1;
            for (let t = 0; t < this.writeBuffer.length; t++) {
              const s = this.writeBuffer[t].data;
              if (
                (s && (e += (0, o.byteLength)(s)), t > 0 && e > this.maxPayload)
              )
                return (
                  l(
                    "only send %d out of %d packets",
                    t,
                    this.writeBuffer.length
                  ),
                  this.writeBuffer.slice(0, t)
                );
              e += 2;
            }
            return (
              l("payload size is %d (max: %d)", e, this.maxPayload),
              this.writeBuffer
            );
          }
          write(e, t, s) {
            return this.sendPacket("message", e, t, s), this;
          }
          send(e, t, s) {
            return this.sendPacket("message", e, t, s), this;
          }
          sendPacket(e, t, s, n) {
            if (
              ("function" == typeof t && ((n = t), (t = void 0)),
              "function" == typeof s && ((n = s), (s = null)),
              "closing" === this.readyState || "closed" === this.readyState)
            )
              return;
            (s = s || {}).compress = !1 !== s.compress;
            const r = { type: e, data: t, options: s };
            this.emitReserved("packetCreate", r),
              this.writeBuffer.push(r),
              n && this.once("flush", n),
              this.flush();
          }
          close() {
            const e = () => {
                this.onClose("forced close"),
                  l("socket closing - telling transport to close"),
                  this.transport.close();
              },
              t = () => {
                this.off("upgrade", t), this.off("upgradeError", t), e();
              },
              s = () => {
                this.once("upgrade", t), this.once("upgradeError", t);
              };
            return (
              ("opening" !== this.readyState && "open" !== this.readyState) ||
                ((this.readyState = "closing"),
                this.writeBuffer.length
                  ? this.once("drain", () => {
                      this.upgrading ? s() : e();
                    })
                  : this.upgrading
                  ? s()
                  : e()),
              this
            );
          }
          onError(e) {
            l("socket error %j", e),
              (d.priorWebsocketSuccess = !1),
              this.emitReserved("error", e),
              this.onClose("transport error", e);
          }
          onClose(e, t) {
            ("opening" !== this.readyState &&
              "open" !== this.readyState &&
              "closing" !== this.readyState) ||
              (l('socket close with reason: "%s"', e),
              this.clearTimeoutFn(this.pingTimeoutTimer),
              this.transport.removeAllListeners("close"),
              this.transport.close(),
              this.transport.removeAllListeners(),
              "function" == typeof removeEventListener &&
                (removeEventListener(
                  "beforeunload",
                  this.beforeunloadEventListener,
                  !1
                ),
                removeEventListener("offline", this.offlineEventListener, !1)),
              (this.readyState = "closed"),
              (this.id = null),
              this.emitReserved("close", e, t),
              (this.writeBuffer = []),
              (this.prevBufferLen = 0));
          }
          filterUpgrades(e) {
            const t = [];
            let s = 0;
            const n = e.length;
            for (; s < n; s++) ~this.transports.indexOf(e[s]) && t.push(e[s]);
            return t;
          }
        }
        (t.Socket = d), (d.protocol = h.protocol);
      },
      870: function (e, t, s) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Transport = void 0);
        const r = s(373),
          o = s(260),
          i = s(622),
          a = (0, n(s(802)).default)("engine.io-client:transport");
        class c extends Error {
          constructor(e, t, s) {
            super(e),
              (this.description = t),
              (this.context = s),
              (this.type = "TransportError");
          }
        }
        class u extends o.Emitter {
          constructor(e) {
            super(),
              (this.writable = !1),
              (0, i.installTimerFunctions)(this, e),
              (this.opts = e),
              (this.query = e.query),
              (this.readyState = ""),
              (this.socket = e.socket);
          }
          onError(e, t, s) {
            return super.emitReserved("error", new c(e, t, s)), this;
          }
          open() {
            return (
              ("closed" !== this.readyState && "" !== this.readyState) ||
                ((this.readyState = "opening"), this.doOpen()),
              this
            );
          }
          close() {
            return (
              ("opening" !== this.readyState && "open" !== this.readyState) ||
                (this.doClose(), this.onClose()),
              this
            );
          }
          send(e) {
            "open" === this.readyState
              ? this.write(e)
              : a("transport is not open, discarding packets");
          }
          onOpen() {
            (this.readyState = "open"),
              (this.writable = !0),
              super.emitReserved("open");
          }
          onData(e) {
            const t = (0, r.decodePacket)(e, this.socket.binaryType);
            this.onPacket(t);
          }
          onPacket(e) {
            super.emitReserved("packet", e);
          }
          onClose(e) {
            (this.readyState = "closed"), super.emitReserved("close", e);
          }
        }
        t.Transport = u;
      },
      385: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.transports = void 0);
        const n = s(484),
          r = s(308);
        t.transports = { websocket: r.WS, polling: n.Polling };
      },
      484: function (e, t, s) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Request = t.Polling = void 0);
        const r = s(870),
          o = n(s(802)),
          i = s(726),
          a = s(754),
          c = s(373),
          u = s(666),
          h = s(260),
          l = s(622),
          d = s(242),
          p = (0, o.default)("engine.io-client:polling");
        function f() {}
        const g = null != new u.XHR({ xdomain: !1 }).responseType;
        class y extends r.Transport {
          constructor(e) {
            if (
              (super(e), (this.polling = !1), "undefined" != typeof location)
            ) {
              const t = "https:" === location.protocol;
              let s = location.port;
              s || (s = t ? "443" : "80"),
                (this.xd =
                  ("undefined" != typeof location &&
                    e.hostname !== location.hostname) ||
                  s !== e.port),
                (this.xs = e.secure !== t);
            }
            const t = e && e.forceBase64;
            this.supportsBinary = g && !t;
          }
          get name() {
            return "polling";
          }
          doOpen() {
            this.poll();
          }
          pause(e) {
            this.readyState = "pausing";
            const t = () => {
              p("paused"), (this.readyState = "paused"), e();
            };
            if (this.polling || !this.writable) {
              let e = 0;
              this.polling &&
                (p("we are currently polling - waiting to pause"),
                e++,
                this.once("pollComplete", function () {
                  p("pre-pause polling complete"), --e || t();
                })),
                this.writable ||
                  (p("we are currently writing - waiting to pause"),
                  e++,
                  this.once("drain", function () {
                    p("pre-pause writing complete"), --e || t();
                  }));
            } else t();
          }
          poll() {
            p("polling"),
              (this.polling = !0),
              this.doPoll(),
              this.emitReserved("poll");
          }
          onData(e) {
            p("polling got data %s", e),
              (0, c.decodePayload)(e, this.socket.binaryType).forEach((e) => {
                if (
                  ("opening" === this.readyState &&
                    "open" === e.type &&
                    this.onOpen(),
                  "close" === e.type)
                )
                  return (
                    this.onClose({
                      description: "transport closed by the server",
                    }),
                    !1
                  );
                this.onPacket(e);
              }),
              "closed" !== this.readyState &&
                ((this.polling = !1),
                this.emitReserved("pollComplete"),
                "open" === this.readyState
                  ? this.poll()
                  : p('ignoring poll - transport state "%s"', this.readyState));
          }
          doClose() {
            const e = () => {
              p("writing close packet"), this.write([{ type: "close" }]);
            };
            "open" === this.readyState
              ? (p("transport open - closing"), e())
              : (p("transport not open - deferring close"),
                this.once("open", e));
          }
          write(e) {
            (this.writable = !1),
              (0, c.encodePayload)(e, (e) => {
                this.doWrite(e, () => {
                  (this.writable = !0), this.emitReserved("drain");
                });
              });
          }
          uri() {
            let e = this.query || {};
            const t = this.opts.secure ? "https" : "http";
            let s = "";
            !1 !== this.opts.timestampRequests &&
              (e[this.opts.timestampParam] = (0, i.yeast)()),
              this.supportsBinary || e.sid || (e.b64 = 1),
              this.opts.port &&
                (("https" === t && 443 !== Number(this.opts.port)) ||
                  ("http" === t && 80 !== Number(this.opts.port))) &&
                (s = ":" + this.opts.port);
            const n = (0, a.encode)(e);
            return (
              t +
              "://" +
              (-1 !== this.opts.hostname.indexOf(":")
                ? "[" + this.opts.hostname + "]"
                : this.opts.hostname) +
              s +
              this.opts.path +
              (n.length ? "?" + n : "")
            );
          }
          request(e = {}) {
            return (
              Object.assign(e, { xd: this.xd, xs: this.xs }, this.opts),
              new m(this.uri(), e)
            );
          }
          doWrite(e, t) {
            const s = this.request({ method: "POST", data: e });
            s.on("success", t),
              s.on("error", (e, t) => {
                this.onError("xhr post error", e, t);
              });
          }
          doPoll() {
            p("xhr poll");
            const e = this.request();
            e.on("data", this.onData.bind(this)),
              e.on("error", (e, t) => {
                this.onError("xhr poll error", e, t);
              }),
              (this.pollXhr = e);
          }
        }
        t.Polling = y;
        class m extends h.Emitter {
          constructor(e, t) {
            super(),
              (0, l.installTimerFunctions)(this, t),
              (this.opts = t),
              (this.method = t.method || "GET"),
              (this.uri = e),
              (this.async = !1 !== t.async),
              (this.data = void 0 !== t.data ? t.data : null),
              this.create();
          }
          create() {
            const e = (0, l.pick)(
              this.opts,
              "agent",
              "pfx",
              "key",
              "passphrase",
              "cert",
              "ca",
              "ciphers",
              "rejectUnauthorized",
              "autoUnref"
            );
            (e.xdomain = !!this.opts.xd), (e.xscheme = !!this.opts.xs);
            const t = (this.xhr = new u.XHR(e));
            try {
              p("xhr open %s: %s", this.method, this.uri),
                t.open(this.method, this.uri, this.async);
              try {
                if (this.opts.extraHeaders) {
                  t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
                  for (let e in this.opts.extraHeaders)
                    this.opts.extraHeaders.hasOwnProperty(e) &&
                      t.setRequestHeader(e, this.opts.extraHeaders[e]);
                }
              } catch (e) {}
              if ("POST" === this.method)
                try {
                  t.setRequestHeader(
                    "Content-type",
                    "text/plain;charset=UTF-8"
                  );
                } catch (e) {}
              try {
                t.setRequestHeader("Accept", "*/*");
              } catch (e) {}
              "withCredentials" in t &&
                (t.withCredentials = this.opts.withCredentials),
                this.opts.requestTimeout &&
                  (t.timeout = this.opts.requestTimeout),
                (t.onreadystatechange = () => {
                  4 === t.readyState &&
                    (200 === t.status || 1223 === t.status
                      ? this.onLoad()
                      : this.setTimeoutFn(() => {
                          this.onError(
                            "number" == typeof t.status ? t.status : 0
                          );
                        }, 0));
                }),
                p("xhr data %s", this.data),
                t.send(this.data);
            } catch (e) {
              return void this.setTimeoutFn(() => {
                this.onError(e);
              }, 0);
            }
            "undefined" != typeof document &&
              ((this.index = m.requestsCount++),
              (m.requests[this.index] = this));
          }
          onError(e) {
            this.emitReserved("error", e, this.xhr), this.cleanup(!0);
          }
          cleanup(e) {
            if (void 0 !== this.xhr && null !== this.xhr) {
              if (((this.xhr.onreadystatechange = f), e))
                try {
                  this.xhr.abort();
                } catch (e) {}
              "undefined" != typeof document && delete m.requests[this.index],
                (this.xhr = null);
            }
          }
          onLoad() {
            const e = this.xhr.responseText;
            null !== e &&
              (this.emitReserved("data", e),
              this.emitReserved("success"),
              this.cleanup());
          }
          abort() {
            this.cleanup();
          }
        }
        if (
          ((t.Request = m),
          (m.requestsCount = 0),
          (m.requests = {}),
          "undefined" != typeof document)
        )
          if ("function" == typeof attachEvent) attachEvent("onunload", C);
          else if ("function" == typeof addEventListener) {
            const e = "onpagehide" in d.globalThisShim ? "pagehide" : "unload";
            addEventListener(e, C, !1);
          }
        function C() {
          for (let e in m.requests)
            m.requests.hasOwnProperty(e) && m.requests[e].abort();
        }
      },
      552: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultBinaryType =
            t.usingBrowserWebSocket =
            t.WebSocket =
            t.nextTick =
              void 0);
        const n = s(242);
        (t.nextTick =
          "function" == typeof Promise && "function" == typeof Promise.resolve
            ? (e) => Promise.resolve().then(e)
            : (e, t) => t(e, 0)),
          (t.WebSocket =
            n.globalThisShim.WebSocket || n.globalThisShim.MozWebSocket),
          (t.usingBrowserWebSocket = !0),
          (t.defaultBinaryType = "arraybuffer");
      },
      308: function (e, t, s) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.WS = void 0);
        const r = s(870),
          o = s(754),
          i = s(726),
          a = s(622),
          c = s(552),
          u = n(s(802)),
          h = s(373),
          l = (0, u.default)("engine.io-client:websocket"),
          d =
            "undefined" != typeof navigator &&
            "string" == typeof navigator.product &&
            "reactnative" === navigator.product.toLowerCase();
        class p extends r.Transport {
          constructor(e) {
            super(e), (this.supportsBinary = !e.forceBase64);
          }
          get name() {
            return "websocket";
          }
          doOpen() {
            if (!this.check()) return;
            const e = this.uri(),
              t = this.opts.protocols,
              s = d
                ? {}
                : (0, a.pick)(
                    this.opts,
                    "agent",
                    "perMessageDeflate",
                    "pfx",
                    "key",
                    "passphrase",
                    "cert",
                    "ca",
                    "ciphers",
                    "rejectUnauthorized",
                    "localAddress",
                    "protocolVersion",
                    "origin",
                    "maxPayload",
                    "family",
                    "checkServerIdentity"
                  );
            this.opts.extraHeaders && (s.headers = this.opts.extraHeaders);
            try {
              this.ws =
                c.usingBrowserWebSocket && !d
                  ? t
                    ? new c.WebSocket(e, t)
                    : new c.WebSocket(e)
                  : new c.WebSocket(e, t, s);
            } catch (e) {
              return this.emitReserved("error", e);
            }
            (this.ws.binaryType =
              this.socket.binaryType || c.defaultBinaryType),
              this.addEventListeners();
          }
          addEventListeners() {
            (this.ws.onopen = () => {
              this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
            }),
              (this.ws.onclose = (e) =>
                this.onClose({
                  description: "websocket connection closed",
                  context: e,
                })),
              (this.ws.onmessage = (e) => this.onData(e.data)),
              (this.ws.onerror = (e) => this.onError("websocket error", e));
          }
          write(e) {
            this.writable = !1;
            for (let t = 0; t < e.length; t++) {
              const s = e[t],
                n = t === e.length - 1;
              (0, h.encodePacket)(s, this.supportsBinary, (e) => {
                const t = {};
                !c.usingBrowserWebSocket &&
                  (s.options && (t.compress = s.options.compress),
                  this.opts.perMessageDeflate) &&
                  ("string" == typeof e ? Buffer.byteLength(e) : e.length) <
                    this.opts.perMessageDeflate.threshold &&
                  (t.compress = !1);
                try {
                  c.usingBrowserWebSocket
                    ? this.ws.send(e)
                    : this.ws.send(e, t);
                } catch (e) {
                  l("websocket closed before onclose event");
                }
                n &&
                  (0, c.nextTick)(() => {
                    (this.writable = !0), this.emitReserved("drain");
                  }, this.setTimeoutFn);
              });
            }
          }
          doClose() {
            void 0 !== this.ws && (this.ws.close(), (this.ws = null));
          }
          uri() {
            let e = this.query || {};
            const t = this.opts.secure ? "wss" : "ws";
            let s = "";
            this.opts.port &&
              (("wss" === t && 443 !== Number(this.opts.port)) ||
                ("ws" === t && 80 !== Number(this.opts.port))) &&
              (s = ":" + this.opts.port),
              this.opts.timestampRequests &&
                (e[this.opts.timestampParam] = (0, i.yeast)()),
              this.supportsBinary || (e.b64 = 1);
            const n = (0, o.encode)(e);
            return (
              t +
              "://" +
              (-1 !== this.opts.hostname.indexOf(":")
                ? "[" + this.opts.hostname + "]"
                : this.opts.hostname) +
              s +
              this.opts.path +
              (n.length ? "?" + n : "")
            );
          }
          check() {
            return !!c.WebSocket;
          }
        }
        t.WS = p;
      },
      666: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.XHR = void 0);
        const n = s(419),
          r = s(242);
        t.XHR = function (e) {
          const t = e.xdomain;
          try {
            if ("undefined" != typeof XMLHttpRequest && (!t || n.hasCORS))
              return new XMLHttpRequest();
          } catch (e) {}
          if (!t)
            try {
              return new r.globalThisShim[
                ["Active"].concat("Object").join("X")
              ]("Microsoft.XMLHTTP");
            } catch (e) {}
        };
      },
      622: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.byteLength = t.installTimerFunctions = t.pick = void 0);
        const n = s(242);
        t.pick = function (e, ...t) {
          return t.reduce(
            (t, s) => (e.hasOwnProperty(s) && (t[s] = e[s]), t),
            {}
          );
        };
        const r = setTimeout,
          o = clearTimeout;
        (t.installTimerFunctions = function (e, t) {
          t.useNativeTimers
            ? ((e.setTimeoutFn = r.bind(n.globalThisShim)),
              (e.clearTimeoutFn = o.bind(n.globalThisShim)))
            : ((e.setTimeoutFn = setTimeout.bind(n.globalThisShim)),
              (e.clearTimeoutFn = clearTimeout.bind(n.globalThisShim)));
        }),
          (t.byteLength = function (e) {
            return "string" == typeof e
              ? (function (e) {
                  let t = 0,
                    s = 0;
                  for (let n = 0, r = e.length; n < r; n++)
                    (t = e.charCodeAt(n)),
                      t < 128
                        ? (s += 1)
                        : t < 2048
                        ? (s += 2)
                        : t < 55296 || t >= 57344
                        ? (s += 3)
                        : (n++, (s += 4));
                  return s;
                })(e)
              : Math.ceil(1.33 * (e.byteLength || e.size));
          });
      },
      87: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ERROR_PACKET = t.PACKET_TYPES_REVERSE = t.PACKET_TYPES = void 0);
        const s = Object.create(null);
        (t.PACKET_TYPES = s),
          (s.open = "0"),
          (s.close = "1"),
          (s.ping = "2"),
          (s.pong = "3"),
          (s.message = "4"),
          (s.upgrade = "5"),
          (s.noop = "6");
        const n = Object.create(null);
        (t.PACKET_TYPES_REVERSE = n),
          Object.keys(s).forEach((e) => {
            n[s[e]] = e;
          }),
          (t.ERROR_PACKET = { type: "error", data: "parser error" });
      },
      469: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.decode = t.encode = void 0);
        const s =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          n = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
        for (let e = 0; e < s.length; e++) n[s.charCodeAt(e)] = e;
        (t.encode = (e) => {
          let t,
            n = new Uint8Array(e),
            r = n.length,
            o = "";
          for (t = 0; t < r; t += 3)
            (o += s[n[t] >> 2]),
              (o += s[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
              (o += s[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
              (o += s[63 & n[t + 2]]);
          return (
            r % 3 == 2
              ? (o = o.substring(0, o.length - 1) + "=")
              : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="),
            o
          );
        }),
          (t.decode = (e) => {
            let t,
              s,
              r,
              o,
              i,
              a = 0.75 * e.length,
              c = e.length,
              u = 0;
            "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
            const h = new ArrayBuffer(a),
              l = new Uint8Array(h);
            for (t = 0; t < c; t += 4)
              (s = n[e.charCodeAt(t)]),
                (r = n[e.charCodeAt(t + 1)]),
                (o = n[e.charCodeAt(t + 2)]),
                (i = n[e.charCodeAt(t + 3)]),
                (l[u++] = (s << 2) | (r >> 4)),
                (l[u++] = ((15 & r) << 4) | (o >> 2)),
                (l[u++] = ((3 & o) << 6) | (63 & i));
            return h;
          });
      },
      572: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = s(87),
          r = s(469),
          o = "function" == typeof ArrayBuffer,
          i = (e, t) => {
            if (o) {
              const s = (0, r.decode)(e);
              return a(s, t);
            }
            return { base64: !0, data: e };
          },
          a = (e, t) =>
            "blob" === t && e instanceof ArrayBuffer ? new Blob([e]) : e;
        t.default = (e, t) => {
          if ("string" != typeof e) return { type: "message", data: a(e, t) };
          const s = e.charAt(0);
          return "b" === s
            ? { type: "message", data: i(e.substring(1), t) }
            : n.PACKET_TYPES_REVERSE[s]
            ? e.length > 1
              ? { type: n.PACKET_TYPES_REVERSE[s], data: e.substring(1) }
              : { type: n.PACKET_TYPES_REVERSE[s] }
            : n.ERROR_PACKET;
        };
      },
      908: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = s(87),
          r =
            "function" == typeof Blob ||
            ("undefined" != typeof Blob &&
              "[object BlobConstructor]" ===
                Object.prototype.toString.call(Blob)),
          o = "function" == typeof ArrayBuffer,
          i = (e, t) => {
            const s = new FileReader();
            return (
              (s.onload = function () {
                const e = s.result.split(",")[1];
                t("b" + e);
              }),
              s.readAsDataURL(e)
            );
          };
        t.default = ({ type: e, data: t }, s, a) => {
          return r && t instanceof Blob
            ? s
              ? a(t)
              : i(t, a)
            : o &&
              (t instanceof ArrayBuffer ||
                ((c = t),
                "function" == typeof ArrayBuffer.isView
                  ? ArrayBuffer.isView(c)
                  : c && c.buffer instanceof ArrayBuffer))
            ? s
              ? a(t)
              : i(new Blob([t]), a)
            : a(n.PACKET_TYPES[e] + (t || ""));
          var c;
        };
      },
      373: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.decodePayload =
            t.decodePacket =
            t.encodePayload =
            t.encodePacket =
            t.protocol =
              void 0);
        const n = s(908);
        t.encodePacket = n.default;
        const r = s(572);
        t.decodePacket = r.default;
        const o = String.fromCharCode(30);
        (t.encodePayload = (e, t) => {
          const s = e.length,
            r = new Array(s);
          let i = 0;
          e.forEach((e, a) => {
            (0, n.default)(e, !1, (e) => {
              (r[a] = e), ++i === s && t(r.join(o));
            });
          });
        }),
          (t.decodePayload = (e, t) => {
            const s = e.split(o),
              n = [];
            for (let e = 0; e < s.length; e++) {
              const o = (0, r.default)(s[e], t);
              if ((n.push(o), "error" === o.type)) break;
            }
            return n;
          }),
          (t.protocol = 4);
      },
      159: (e, t) => {
        "use strict";
        function s(e) {
          (e = e || {}),
            (this.ms = e.min || 100),
            (this.max = e.max || 1e4),
            (this.factor = e.factor || 2),
            (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
            (this.attempts = 0);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Backoff = void 0),
          (t.Backoff = s),
          (s.prototype.duration = function () {
            var e = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
              var t = Math.random(),
                s = Math.floor(t * this.jitter * e);
              e = 0 == (1 & Math.floor(10 * t)) ? e - s : e + s;
            }
            return 0 | Math.min(e, this.max);
          }),
          (s.prototype.reset = function () {
            this.attempts = 0;
          }),
          (s.prototype.setMin = function (e) {
            this.ms = e;
          }),
          (s.prototype.setMax = function (e) {
            this.max = e;
          }),
          (s.prototype.setJitter = function (e) {
            this.jitter = e;
          });
      },
      46: function (e, t, s) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default =
            t.connect =
            t.io =
            t.Socket =
            t.Manager =
            t.protocol =
              void 0);
        const r = s(84),
          o = s(168);
        Object.defineProperty(t, "Manager", {
          enumerable: !0,
          get: function () {
            return o.Manager;
          },
        });
        const i = s(312);
        Object.defineProperty(t, "Socket", {
          enumerable: !0,
          get: function () {
            return i.Socket;
          },
        });
        const a = n(s(669)).default("socket.io-client"),
          c = {};
        function u(e, t) {
          "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
          const s = r.url(e, t.path || "/socket.io"),
            n = s.source,
            i = s.id,
            u = s.path,
            h = c[i] && u in c[i].nsps;
          let l;
          return (
            t.forceNew || t["force new connection"] || !1 === t.multiplex || h
              ? (a("ignoring socket cache for %s", n),
                (l = new o.Manager(n, t)))
              : (c[i] ||
                  (a("new io instance for %s", n),
                  (c[i] = new o.Manager(n, t))),
                (l = c[i])),
            s.query && !t.query && (t.query = s.queryKey),
            l.socket(s.path, t)
          );
        }
        (t.io = u),
          (t.connect = u),
          (t.default = u),
          Object.assign(u, {
            Manager: o.Manager,
            Socket: i.Socket,
            io: u,
            connect: u,
          });
        var h = s(514);
        Object.defineProperty(t, "protocol", {
          enumerable: !0,
          get: function () {
            return h.protocol;
          },
        }),
          (e.exports = u);
      },
      168: function (e, t, s) {
        "use strict";
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, s, n) {
                  void 0 === n && (n = s),
                    Object.defineProperty(e, n, {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      },
                    });
                }
              : function (e, t, s, n) {
                  void 0 === n && (n = s), (e[n] = t[s]);
                }),
          r =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var s in e)
                  "default" !== s &&
                    Object.prototype.hasOwnProperty.call(e, s) &&
                    n(t, e, s);
              return r(t, e), t;
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Manager = void 0);
        const a = s(679),
          c = s(312),
          u = o(s(514)),
          h = s(149),
          l = s(159),
          d = s(260),
          p = i(s(669)).default("socket.io-client:manager");
        class f extends d.Emitter {
          constructor(e, t) {
            var s;
            super(),
              (this.nsps = {}),
              (this.subs = []),
              e && "object" == typeof e && ((t = e), (e = void 0)),
              ((t = t || {}).path = t.path || "/socket.io"),
              (this.opts = t),
              a.installTimerFunctions(this, t),
              this.reconnection(!1 !== t.reconnection),
              this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
              this.reconnectionDelay(t.reconnectionDelay || 1e3),
              this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
              this.randomizationFactor(
                null !== (s = t.randomizationFactor) && void 0 !== s ? s : 0.5
              ),
              (this.backoff = new l.Backoff({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor(),
              })),
              this.timeout(null == t.timeout ? 2e4 : t.timeout),
              (this._readyState = "closed"),
              (this.uri = e);
            const n = t.parser || u;
            (this.encoder = new n.Encoder()),
              (this.decoder = new n.Decoder()),
              (this._autoConnect = !1 !== t.autoConnect),
              this._autoConnect && this.open();
          }
          reconnection(e) {
            return arguments.length
              ? ((this._reconnection = !!e), this)
              : this._reconnection;
          }
          reconnectionAttempts(e) {
            return void 0 === e
              ? this._reconnectionAttempts
              : ((this._reconnectionAttempts = e), this);
          }
          reconnectionDelay(e) {
            var t;
            return void 0 === e
              ? this._reconnectionDelay
              : ((this._reconnectionDelay = e),
                null === (t = this.backoff) || void 0 === t || t.setMin(e),
                this);
          }
          randomizationFactor(e) {
            var t;
            return void 0 === e
              ? this._randomizationFactor
              : ((this._randomizationFactor = e),
                null === (t = this.backoff) || void 0 === t || t.setJitter(e),
                this);
          }
          reconnectionDelayMax(e) {
            var t;
            return void 0 === e
              ? this._reconnectionDelayMax
              : ((this._reconnectionDelayMax = e),
                null === (t = this.backoff) || void 0 === t || t.setMax(e),
                this);
          }
          timeout(e) {
            return arguments.length
              ? ((this._timeout = e), this)
              : this._timeout;
          }
          maybeReconnectOnOpen() {
            !this._reconnecting &&
              this._reconnection &&
              0 === this.backoff.attempts &&
              this.reconnect();
          }
          open(e) {
            if (
              (p("readyState %s", this._readyState),
              ~this._readyState.indexOf("open"))
            )
              return this;
            p("opening %s", this.uri),
              (this.engine = new a.Socket(this.uri, this.opts));
            const t = this.engine,
              s = this;
            (this._readyState = "opening"), (this.skipReconnect = !1);
            const n = h.on(t, "open", function () {
                s.onopen(), e && e();
              }),
              r = h.on(t, "error", (t) => {
                p("error"),
                  s.cleanup(),
                  (s._readyState = "closed"),
                  this.emitReserved("error", t),
                  e ? e(t) : s.maybeReconnectOnOpen();
              });
            if (!1 !== this._timeout) {
              const e = this._timeout;
              p("connect attempt will timeout after %d", e), 0 === e && n();
              const s = this.setTimeoutFn(() => {
                p("connect attempt timed out after %d", e),
                  n(),
                  t.close(),
                  t.emit("error", new Error("timeout"));
              }, e);
              this.opts.autoUnref && s.unref(),
                this.subs.push(function () {
                  clearTimeout(s);
                });
            }
            return this.subs.push(n), this.subs.push(r), this;
          }
          connect(e) {
            return this.open(e);
          }
          onopen() {
            p("open"),
              this.cleanup(),
              (this._readyState = "open"),
              this.emitReserved("open");
            const e = this.engine;
            this.subs.push(
              h.on(e, "ping", this.onping.bind(this)),
              h.on(e, "data", this.ondata.bind(this)),
              h.on(e, "error", this.onerror.bind(this)),
              h.on(e, "close", this.onclose.bind(this)),
              h.on(this.decoder, "decoded", this.ondecoded.bind(this))
            );
          }
          onping() {
            this.emitReserved("ping");
          }
          ondata(e) {
            try {
              this.decoder.add(e);
            } catch (e) {
              this.onclose("parse error", e);
            }
          }
          ondecoded(e) {
            a.nextTick(() => {
              this.emitReserved("packet", e);
            }, this.setTimeoutFn);
          }
          onerror(e) {
            p("error", e), this.emitReserved("error", e);
          }
          socket(e, t) {
            let s = this.nsps[e];
            return s || ((s = new c.Socket(this, e, t)), (this.nsps[e] = s)), s;
          }
          _destroy(e) {
            const t = Object.keys(this.nsps);
            for (const e of t)
              if (this.nsps[e].active)
                return void p("socket %s is still active, skipping close", e);
            this._close();
          }
          _packet(e) {
            p("writing packet %j", e);
            const t = this.encoder.encode(e);
            for (let s = 0; s < t.length; s++)
              this.engine.write(t[s], e.options);
          }
          cleanup() {
            p("cleanup"),
              this.subs.forEach((e) => e()),
              (this.subs.length = 0),
              this.decoder.destroy();
          }
          _close() {
            p("disconnect"),
              (this.skipReconnect = !0),
              (this._reconnecting = !1),
              this.onclose("forced close"),
              this.engine && this.engine.close();
          }
          disconnect() {
            return this._close();
          }
          onclose(e, t) {
            p("closed due to %s", e),
              this.cleanup(),
              this.backoff.reset(),
              (this._readyState = "closed"),
              this.emitReserved("close", e, t),
              this._reconnection && !this.skipReconnect && this.reconnect();
          }
          reconnect() {
            if (this._reconnecting || this.skipReconnect) return this;
            const e = this;
            if (this.backoff.attempts >= this._reconnectionAttempts)
              p("reconnect failed"),
                this.backoff.reset(),
                this.emitReserved("reconnect_failed"),
                (this._reconnecting = !1);
            else {
              const t = this.backoff.duration();
              p("will wait %dms before reconnect attempt", t),
                (this._reconnecting = !0);
              const s = this.setTimeoutFn(() => {
                e.skipReconnect ||
                  (p("attempting reconnect"),
                  this.emitReserved("reconnect_attempt", e.backoff.attempts),
                  e.skipReconnect ||
                    e.open((t) => {
                      t
                        ? (p("reconnect attempt error"),
                          (e._reconnecting = !1),
                          e.reconnect(),
                          this.emitReserved("reconnect_error", t))
                        : (p("reconnect success"), e.onreconnect());
                    }));
              }, t);
              this.opts.autoUnref && s.unref(),
                this.subs.push(function () {
                  clearTimeout(s);
                });
            }
          }
          onreconnect() {
            const e = this.backoff.attempts;
            (this._reconnecting = !1),
              this.backoff.reset(),
              this.emitReserved("reconnect", e);
          }
        }
        t.Manager = f;
      },
      149: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.on = void 0),
          (t.on = function (e, t, s) {
            return (
              e.on(t, s),
              function () {
                e.off(t, s);
              }
            );
          });
      },
      312: function (e, t, s) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Socket = void 0);
        const r = s(514),
          o = s(149),
          i = s(260),
          a = n(s(669)).default("socket.io-client:socket"),
          c = Object.freeze({
            connect: 1,
            connect_error: 1,
            disconnect: 1,
            disconnecting: 1,
            newListener: 1,
            removeListener: 1,
          });
        class u extends i.Emitter {
          constructor(e, t, s) {
            super(),
              (this.connected = !1),
              (this.receiveBuffer = []),
              (this.sendBuffer = []),
              (this.ids = 0),
              (this.acks = {}),
              (this.flags = {}),
              (this.io = e),
              (this.nsp = t),
              s && s.auth && (this.auth = s.auth),
              this.io._autoConnect && this.open();
          }
          get disconnected() {
            return !this.connected;
          }
          subEvents() {
            if (this.subs) return;
            const e = this.io;
            this.subs = [
              o.on(e, "open", this.onopen.bind(this)),
              o.on(e, "packet", this.onpacket.bind(this)),
              o.on(e, "error", this.onerror.bind(this)),
              o.on(e, "close", this.onclose.bind(this)),
            ];
          }
          get active() {
            return !!this.subs;
          }
          connect() {
            return (
              this.connected ||
                (this.subEvents(),
                this.io._reconnecting || this.io.open(),
                "open" === this.io._readyState && this.onopen()),
              this
            );
          }
          open() {
            return this.connect();
          }
          send(...e) {
            return e.unshift("message"), this.emit.apply(this, e), this;
          }
          emit(e, ...t) {
            if (c.hasOwnProperty(e))
              throw new Error(
                '"' + e.toString() + '" is a reserved event name'
              );
            t.unshift(e);
            const s = { type: r.PacketType.EVENT, data: t, options: {} };
            if (
              ((s.options.compress = !1 !== this.flags.compress),
              "function" == typeof t[t.length - 1])
            ) {
              const e = this.ids++;
              a("emitting packet with ack id %d", e);
              const n = t.pop();
              this._registerAckCallback(e, n), (s.id = e);
            }
            const n =
              this.io.engine &&
              this.io.engine.transport &&
              this.io.engine.transport.writable;
            return (
              !this.flags.volatile || (n && this.connected)
                ? this.connected
                  ? (this.notifyOutgoingListeners(s), this.packet(s))
                  : this.sendBuffer.push(s)
                : a(
                    "discard packet as the transport is not currently writable"
                  ),
              (this.flags = {}),
              this
            );
          }
          _registerAckCallback(e, t) {
            const s = this.flags.timeout;
            if (void 0 === s) return void (this.acks[e] = t);
            const n = this.io.setTimeoutFn(() => {
              delete this.acks[e];
              for (let t = 0; t < this.sendBuffer.length; t++)
                this.sendBuffer[t].id === e &&
                  (a("removing packet with ack id %d from the buffer", e),
                  this.sendBuffer.splice(t, 1));
              a("event with ack id %d has timed out after %d ms", e, s),
                t.call(this, new Error("operation has timed out"));
            }, s);
            this.acks[e] = (...e) => {
              this.io.clearTimeoutFn(n), t.apply(this, [null, ...e]);
            };
          }
          packet(e) {
            (e.nsp = this.nsp), this.io._packet(e);
          }
          onopen() {
            a("transport is open - connecting"),
              "function" == typeof this.auth
                ? this.auth((e) => {
                    this.packet({ type: r.PacketType.CONNECT, data: e });
                  })
                : this.packet({ type: r.PacketType.CONNECT, data: this.auth });
          }
          onerror(e) {
            this.connected || this.emitReserved("connect_error", e);
          }
          onclose(e, t) {
            a("close (%s)", e),
              (this.connected = !1),
              delete this.id,
              this.emitReserved("disconnect", e, t);
          }
          onpacket(e) {
            if (e.nsp === this.nsp)
              switch (e.type) {
                case r.PacketType.CONNECT:
                  if (e.data && e.data.sid) {
                    const t = e.data.sid;
                    this.onconnect(t);
                  } else
                    this.emitReserved(
                      "connect_error",
                      new Error(
                        "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                      )
                    );
                  break;
                case r.PacketType.EVENT:
                case r.PacketType.BINARY_EVENT:
                  this.onevent(e);
                  break;
                case r.PacketType.ACK:
                case r.PacketType.BINARY_ACK:
                  this.onack(e);
                  break;
                case r.PacketType.DISCONNECT:
                  this.ondisconnect();
                  break;
                case r.PacketType.CONNECT_ERROR:
                  this.destroy();
                  const t = new Error(e.data.message);
                  (t.data = e.data.data), this.emitReserved("connect_error", t);
              }
          }
          onevent(e) {
            const t = e.data || [];
            a("emitting event %j", t),
              null != e.id &&
                (a("attaching ack callback to event"), t.push(this.ack(e.id))),
              this.connected
                ? this.emitEvent(t)
                : this.receiveBuffer.push(Object.freeze(t));
          }
          emitEvent(e) {
            if (this._anyListeners && this._anyListeners.length) {
              const t = this._anyListeners.slice();
              for (const s of t) s.apply(this, e);
            }
            super.emit.apply(this, e);
          }
          ack(e) {
            const t = this;
            let s = !1;
            return function (...n) {
              s ||
                ((s = !0),
                a("sending ack %j", n),
                t.packet({ type: r.PacketType.ACK, id: e, data: n }));
            };
          }
          onack(e) {
            const t = this.acks[e.id];
            "function" == typeof t
              ? (a("calling ack %s with %j", e.id, e.data),
                t.apply(this, e.data),
                delete this.acks[e.id])
              : a("bad ack %s", e.id);
          }
          onconnect(e) {
            a("socket connected with id %s", e),
              (this.id = e),
              (this.connected = !0),
              this.emitBuffered(),
              this.emitReserved("connect");
          }
          emitBuffered() {
            this.receiveBuffer.forEach((e) => this.emitEvent(e)),
              (this.receiveBuffer = []),
              this.sendBuffer.forEach((e) => {
                this.notifyOutgoingListeners(e), this.packet(e);
              }),
              (this.sendBuffer = []);
          }
          ondisconnect() {
            a("server disconnect (%s)", this.nsp),
              this.destroy(),
              this.onclose("io server disconnect");
          }
          destroy() {
            this.subs && (this.subs.forEach((e) => e()), (this.subs = void 0)),
              this.io._destroy(this);
          }
          disconnect() {
            return (
              this.connected &&
                (a("performing disconnect (%s)", this.nsp),
                this.packet({ type: r.PacketType.DISCONNECT })),
              this.destroy(),
              this.connected && this.onclose("io client disconnect"),
              this
            );
          }
          close() {
            return this.disconnect();
          }
          compress(e) {
            return (this.flags.compress = e), this;
          }
          get volatile() {
            return (this.flags.volatile = !0), this;
          }
          timeout(e) {
            return (this.flags.timeout = e), this;
          }
          onAny(e) {
            return (
              (this._anyListeners = this._anyListeners || []),
              this._anyListeners.push(e),
              this
            );
          }
          prependAny(e) {
            return (
              (this._anyListeners = this._anyListeners || []),
              this._anyListeners.unshift(e),
              this
            );
          }
          offAny(e) {
            if (!this._anyListeners) return this;
            if (e) {
              const t = this._anyListeners;
              for (let s = 0; s < t.length; s++)
                if (e === t[s]) return t.splice(s, 1), this;
            } else this._anyListeners = [];
            return this;
          }
          listenersAny() {
            return this._anyListeners || [];
          }
          onAnyOutgoing(e) {
            return (
              (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
              this._anyOutgoingListeners.push(e),
              this
            );
          }
          prependAnyOutgoing(e) {
            return (
              (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
              this._anyOutgoingListeners.unshift(e),
              this
            );
          }
          offAnyOutgoing(e) {
            if (!this._anyOutgoingListeners) return this;
            if (e) {
              const t = this._anyOutgoingListeners;
              for (let s = 0; s < t.length; s++)
                if (e === t[s]) return t.splice(s, 1), this;
            } else this._anyOutgoingListeners = [];
            return this;
          }
          listenersAnyOutgoing() {
            return this._anyOutgoingListeners || [];
          }
          notifyOutgoingListeners(e) {
            if (
              this._anyOutgoingListeners &&
              this._anyOutgoingListeners.length
            ) {
              const t = this._anyOutgoingListeners.slice();
              for (const s of t) s.apply(this, e.data);
            }
          }
        }
        t.Socket = u;
      },
      84: function (e, t, s) {
        "use strict";
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.url = void 0);
        const r = s(679),
          o = n(s(669)).default("socket.io-client:url");
        t.url = function (e, t = "", s) {
          let n = e;
          (s = s || ("undefined" != typeof location && location)),
            null == e && (e = s.protocol + "//" + s.host),
            "string" == typeof e &&
              ("/" === e.charAt(0) &&
                (e = "/" === e.charAt(1) ? s.protocol + e : s.host + e),
              /^(https?|wss?):\/\//.test(e) ||
                (o("protocol-less url %s", e),
                (e = void 0 !== s ? s.protocol + "//" + e : "https://" + e)),
              o("parse %s", e),
              (n = r.parse(e))),
            n.port ||
              (/^(http|ws)$/.test(n.protocol)
                ? (n.port = "80")
                : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")),
            (n.path = n.path || "/");
          const i = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
          return (
            (n.id = n.protocol + "://" + i + ":" + n.port + t),
            (n.href =
              n.protocol +
              "://" +
              i +
              (s && s.port === n.port ? "" : ":" + n.port)),
            n
          );
        };
      },
      880: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.reconstructPacket = t.deconstructPacket = void 0);
        const n = s(665);
        function r(e, t) {
          if (!e) return e;
          if (n.isBinary(e)) {
            const s = { _placeholder: !0, num: t.length };
            return t.push(e), s;
          }
          if (Array.isArray(e)) {
            const s = new Array(e.length);
            for (let n = 0; n < e.length; n++) s[n] = r(e[n], t);
            return s;
          }
          if ("object" == typeof e && !(e instanceof Date)) {
            const s = {};
            for (const n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (s[n] = r(e[n], t));
            return s;
          }
          return e;
        }
        function o(e, t) {
          if (!e) return e;
          if (e && !0 === e._placeholder) {
            if ("number" == typeof e.num && e.num >= 0 && e.num < t.length)
              return t[e.num];
            throw new Error("illegal attachments");
          }
          if (Array.isArray(e))
            for (let s = 0; s < e.length; s++) e[s] = o(e[s], t);
          else if ("object" == typeof e)
            for (const s in e)
              Object.prototype.hasOwnProperty.call(e, s) && (e[s] = o(e[s], t));
          return e;
        }
        (t.deconstructPacket = function (e) {
          const t = [],
            s = e.data,
            n = e;
          return (
            (n.data = r(s, t)),
            (n.attachments = t.length),
            { packet: n, buffers: t }
          );
        }),
          (t.reconstructPacket = function (e, t) {
            return (e.data = o(e.data, t)), (e.attachments = void 0), e;
          });
      },
      514: (e, t, s) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Decoder = t.Encoder = t.PacketType = t.protocol = void 0);
        const n = s(260),
          r = s(880),
          o = s(665),
          i = s(618).default("socket.io-parser");
        var a;
        (t.protocol = 5),
          (function (e) {
            (e[(e.CONNECT = 0)] = "CONNECT"),
              (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
              (e[(e.EVENT = 2)] = "EVENT"),
              (e[(e.ACK = 3)] = "ACK"),
              (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
              (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
              (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
          })((a = t.PacketType || (t.PacketType = {}))),
          (t.Encoder = class {
            constructor(e) {
              this.replacer = e;
            }
            encode(e) {
              return (
                i("encoding packet %j", e),
                (e.type !== a.EVENT && e.type !== a.ACK) || !o.hasBinary(e)
                  ? [this.encodeAsString(e)]
                  : ((e.type =
                      e.type === a.EVENT ? a.BINARY_EVENT : a.BINARY_ACK),
                    this.encodeAsBinary(e))
              );
            }
            encodeAsString(e) {
              let t = "" + e.type;
              return (
                (e.type !== a.BINARY_EVENT && e.type !== a.BINARY_ACK) ||
                  (t += e.attachments + "-"),
                e.nsp && "/" !== e.nsp && (t += e.nsp + ","),
                null != e.id && (t += e.id),
                null != e.data && (t += JSON.stringify(e.data, this.replacer)),
                i("encoded %j as %s", e, t),
                t
              );
            }
            encodeAsBinary(e) {
              const t = r.deconstructPacket(e),
                s = this.encodeAsString(t.packet),
                n = t.buffers;
              return n.unshift(s), n;
            }
          });
        class c extends n.Emitter {
          constructor(e) {
            super(), (this.reviver = e);
          }
          add(e) {
            let t;
            if ("string" == typeof e) {
              if (this.reconstructor)
                throw new Error(
                  "got plaintext data when reconstructing a packet"
                );
              (t = this.decodeString(e)),
                t.type === a.BINARY_EVENT || t.type === a.BINARY_ACK
                  ? ((this.reconstructor = new u(t)),
                    0 === t.attachments && super.emitReserved("decoded", t))
                  : super.emitReserved("decoded", t);
            } else {
              if (!o.isBinary(e) && !e.base64)
                throw new Error("Unknown type: " + e);
              if (!this.reconstructor)
                throw new Error(
                  "got binary data when not reconstructing a packet"
                );
              (t = this.reconstructor.takeBinaryData(e)),
                t &&
                  ((this.reconstructor = null),
                  super.emitReserved("decoded", t));
            }
          }
          decodeString(e) {
            let t = 0;
            const s = { type: Number(e.charAt(0)) };
            if (void 0 === a[s.type])
              throw new Error("unknown packet type " + s.type);
            if (s.type === a.BINARY_EVENT || s.type === a.BINARY_ACK) {
              const n = t + 1;
              for (; "-" !== e.charAt(++t) && t != e.length; );
              const r = e.substring(n, t);
              if (r != Number(r) || "-" !== e.charAt(t))
                throw new Error("Illegal attachments");
              s.attachments = Number(r);
            }
            if ("/" === e.charAt(t + 1)) {
              const n = t + 1;
              for (; ++t && "," !== e.charAt(t) && t !== e.length; );
              s.nsp = e.substring(n, t);
            } else s.nsp = "/";
            const n = e.charAt(t + 1);
            if ("" !== n && Number(n) == n) {
              const n = t + 1;
              for (; ++t; ) {
                const s = e.charAt(t);
                if (null == s || Number(s) != s) {
                  --t;
                  break;
                }
                if (t === e.length) break;
              }
              s.id = Number(e.substring(n, t + 1));
            }
            if (e.charAt(++t)) {
              const n = this.tryParse(e.substr(t));
              if (!c.isPayloadValid(s.type, n))
                throw new Error("invalid payload");
              s.data = n;
            }
            return i("decoded %s as %j", e, s), s;
          }
          tryParse(e) {
            try {
              return JSON.parse(e, this.reviver);
            } catch (e) {
              return !1;
            }
          }
          static isPayloadValid(e, t) {
            switch (e) {
              case a.CONNECT:
                return "object" == typeof t;
              case a.DISCONNECT:
                return void 0 === t;
              case a.CONNECT_ERROR:
                return "string" == typeof t || "object" == typeof t;
              case a.EVENT:
              case a.BINARY_EVENT:
                return Array.isArray(t) && t.length > 0;
              case a.ACK:
              case a.BINARY_ACK:
                return Array.isArray(t);
            }
          }
          destroy() {
            this.reconstructor && this.reconstructor.finishedReconstruction();
          }
        }
        t.Decoder = c;
        class u {
          constructor(e) {
            (this.packet = e), (this.buffers = []), (this.reconPack = e);
          }
          takeBinaryData(e) {
            if (
              (this.buffers.push(e),
              this.buffers.length === this.reconPack.attachments)
            ) {
              const e = r.reconstructPacket(this.reconPack, this.buffers);
              return this.finishedReconstruction(), e;
            }
            return null;
          }
          finishedReconstruction() {
            (this.reconPack = null), (this.buffers = []);
          }
        }
      },
      665: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.hasBinary = t.isBinary = void 0);
        const s = "function" == typeof ArrayBuffer,
          n = Object.prototype.toString,
          r =
            "function" == typeof Blob ||
            ("undefined" != typeof Blob &&
              "[object BlobConstructor]" === n.call(Blob)),
          o =
            "function" == typeof File ||
            ("undefined" != typeof File &&
              "[object FileConstructor]" === n.call(File));
        function i(e) {
          return (
            (s &&
              (e instanceof ArrayBuffer ||
                ((e) =>
                  "function" == typeof ArrayBuffer.isView
                    ? ArrayBuffer.isView(e)
                    : e.buffer instanceof ArrayBuffer)(e))) ||
            (r && e instanceof Blob) ||
            (o && e instanceof File)
          );
        }
        (t.isBinary = i),
          (t.hasBinary = function e(t, s) {
            if (!t || "object" != typeof t) return !1;
            if (Array.isArray(t)) {
              for (let s = 0, n = t.length; s < n; s++) if (e(t[s])) return !0;
              return !1;
            }
            if (i(t)) return !0;
            if (
              t.toJSON &&
              "function" == typeof t.toJSON &&
              1 === arguments.length
            )
              return e(t.toJSON(), !0);
            for (const s in t)
              if (Object.prototype.hasOwnProperty.call(t, s) && e(t[s]))
                return !0;
            return !1;
          });
      },
      260: (e, t, s) => {
        "use strict";
        function n(e) {
          if (e)
            return (function (e) {
              for (var t in n.prototype) e[t] = n.prototype[t];
              return e;
            })(e);
        }
        s.r(t),
          s.d(t, { Emitter: () => n }),
          (n.prototype.on = n.prototype.addEventListener =
            function (e, t) {
              return (
                (this._callbacks = this._callbacks || {}),
                (this._callbacks["$" + e] =
                  this._callbacks["$" + e] || []).push(t),
                this
              );
            }),
          (n.prototype.once = function (e, t) {
            function s() {
              this.off(e, s), t.apply(this, arguments);
            }
            return (s.fn = t), this.on(e, s), this;
          }),
          (n.prototype.off =
            n.prototype.removeListener =
            n.prototype.removeAllListeners =
            n.prototype.removeEventListener =
              function (e, t) {
                if (
                  ((this._callbacks = this._callbacks || {}),
                  0 == arguments.length)
                )
                  return (this._callbacks = {}), this;
                var s,
                  n = this._callbacks["$" + e];
                if (!n) return this;
                if (1 == arguments.length)
                  return delete this._callbacks["$" + e], this;
                for (var r = 0; r < n.length; r++)
                  if ((s = n[r]) === t || s.fn === t) {
                    n.splice(r, 1);
                    break;
                  }
                return 0 === n.length && delete this._callbacks["$" + e], this;
              }),
          (n.prototype.emit = function (e) {
            this._callbacks = this._callbacks || {};
            for (
              var t = new Array(arguments.length - 1),
                s = this._callbacks["$" + e],
                n = 1;
              n < arguments.length;
              n++
            )
              t[n - 1] = arguments[n];
            if (s) {
              n = 0;
              for (var r = (s = s.slice(0)).length; n < r; ++n)
                s[n].apply(this, t);
            }
            return this;
          }),
          (n.prototype.emitReserved = n.prototype.emit),
          (n.prototype.listeners = function (e) {
            return (
              (this._callbacks = this._callbacks || {}),
              this._callbacks["$" + e] || []
            );
          }),
          (n.prototype.hasListeners = function (e) {
            return !!this.listeners(e).length;
          });
      },
    },
    t = {};
  function s(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var o = (t[n] = { exports: {} });
    return e[n].call(o.exports, o, o.exports, s), o.exports;
  }
  (s.d = (e, t) => {
    for (var n in t)
      s.o(t, n) &&
        !s.o(e, n) &&
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (s.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      const e = s(672),
        t = s(46)(window.location.origin);
      t.on("connect", function () {
        console.log("Connected!");
      }),
        t.on("load", function (t) {
          t.forEach(function (t) {
            var s = t.start,
              n = t.end,
              r = t.color;
            e.draw(s, n, r, !1);
          });
        }),
        t.on("draw", function (t, s, n) {
          e.draw(t, s, n, !1);
        }),
        e.on("draw", function (e, s, n) {
          t.emit("draw", e, s, n);
        });
    })();
})();
