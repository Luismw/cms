/**
* jquery.material-color-picker.js v1.0.0
* http://www.castorstudio.com
*
* This color picker is part of the Material Plus UI Kit
*
* Color Picker inspired by Google's Material Design
* 
* Copyright (c) 2017 Paulo Mendez,
* http://www.castorstudio.com
*/

! function(e, t, o, a) {
	var r = function(t, o) {
		this.name = i, this.version = c, this.target = t, this.$target = e(t);
		var a = this,
			r = {
				DEBUG: !1,
				colors: {
					red: {
						base: "#f44336",
						collection: {
							50: "#ffebee",
							100: "#ffcdd2",
							200: "#ef9a9a",
							300: "#e57373",
							400: "#ef5350",
							500: "#f44336",
							600: "#e53935",
							700: "#d32f2f",
							800: "#c62828",
							900: "#b71c1c",
							a100: "#ff8a80",
							a200: "#ff5252",
							a400: "#ff1744",
							a700: "#d50000"
						}
					},
					pink: {
						base: "#e91e63",
						collection: {
							50: "#fce4ec",
							100: "#f8bbd0",
							200: "#f48fb1",
							300: "#f06292",
							400: "#ec407a",
							500: "#e91e63",
							600: "#d81b60",
							700: "#c2185b",
							800: "#ad1457",
							900: "#880e4f",
							a100: "#ff80ab",
							a200: "#ff4081",
							a400: "#f50057",
							a700: "#c51162"
						}
					},
					purple: {
						base: "#9c27b0",
						collection: {
							50: "#f3e5f5",
							100: "#e1bee7",
							200: "#ce93d8",
							300: "#ba68c8",
							400: "#ab47bc",
							500: "#9c27b0",
							600: "#8e24aa",
							700: "#7b1fa2",
							800: "#6a1b9a",
							900: "#4a148c",
							a100: "#ea80fc",
							a200: "#e040fb",
							a400: "#d500f9",
							a700: "#aa00ff"
						}
					},
					deeppurple: {
						base: "#673ab7",
						collection: {
							50: "#ede7f6",
							100: "#d1c4e9",
							200: "#b39ddb",
							300: "#9575cd",
							400: "#7e57c2",
							500: "#673ab7",
							600: "#5e35b1",
							700: "#512da8",
							800: "#4527a0",
							900: "#311b92",
							a100: "#b388ff",
							a200: "#7c4dff",
							a400: "#651fff",
							a700: "#6200ea"
						}
					},
					indigo: {
						base: "#3f51b5",
						collection: {
							50: "#e8eaf6",
							100: "#c5cae9",
							200: "#9fa8da",
							300: "#7986cb",
							400: "#5c6bc0",
							500: "#3f51b5",
							600: "#3949ab",
							700: "#303f9f",
							800: "#283593",
							900: "#1a237e",
							a100: "#8c9eff",
							a200: "#536dfe",
							a400: "#3d5afe",
							a700: "#304ffe"
						}
					},
					green: {
						base: "#4caf50",
						collection: {
							50: "#e8f5e9",
							100: "#c8e6c9",
							200: "#a5d6a7",
							300: "#81c784",
							400: "#66bb6a",
							500: "#4caf50",
							600: "#43a047",
							700: "#388e3c",
							800: "#2e7d32",
							900: "#1b5e20",
							a100: "#b9f6ca",
							a200: "#69f0ae",
							a400: "#00e676",
							a700: "#00c853"
						}
					},
					teal: {
						base: "#009688",
						collection: {
							50: "#e0f2f1",
							100: "#b2dfdb",
							200: "#80cbc4",
							300: "#4db6ac",
							400: "#26a69a",
							500: "#009688",
							600: "#00897b",
							700: "#00796b",
							800: "#00695c",
							900: "#004d40",
							a100: "#a7ffeb",
							a200: "#64ffda",
							a400: "#1de9b6",
							a700: "#00bfa5"
						}
					},
					cyan: {
						base: "#00bcd4",
						collection: {
							50: "#e0f7fa",
							100: "#b2ebf2",
							200: "#80deea",
							300: "#4dd0e1",
							400: "#26c6da",
							500: "#00bcd4",
							600: "#00acc1",
							700: "#0097a7",
							800: "#00838f",
							900: "#006064",
							a100: "#84ffff",
							a200: "#18ffff",
							a400: "#00e5ff",
							a700: "#00b8d4"
						}
					},
					lightblue: {
						base: "#03a9f4",
						collection: {
							50: "#e1f5fe",
							100: "#b3e5fc",
							200: "#81d4fa",
							300: "#4fc3f7",
							400: "#29b6f6",
							500: "#03a9f4",
							600: "#039be5",
							700: "#0288d1",
							800: "#0277bd",
							900: "#01579b",
							a100: "#80d8ff",
							a200: "#40c4ff",
							a400: "#00b0ff",
							a700: "#0091ea"
						}
					},
					blue: {
						base: "#2196f3",
						collection: {
							50: "#e3f2fd",
							100: "#bbdefb",
							200: "#90caf9",
							300: "#64b5f6",
							400: "#42a5f5",
							500: "#2196f3",
							600: "#1e88e5",
							700: "#1976d2",
							800: "#1565c0",
							900: "#0d47a1",
							a100: "#82b1ff",
							a200: "#448aff",
							a400: "#2979ff",
							a700: "#2962ff"
						}
					},
					lightgreen: {
						base: "#8bc34a",
						collection: {
							50: "#f1f8e9",
							100: "#dcedc8",
							200: "#c5e1a5",
							300: "#aed581",
							400: "#9ccc65",
							500: "#8bc34a",
							600: "#7cb342",
							700: "#689f38",
							800: "#558b2f",
							900: "#33691e",
							a100: "#ccff90",
							a200: "#b2ff59",
							a400: "#76ff03",
							a700: "#64dd17"
						}
					},
					lime: {
						base: "#cddc39",
						collection: {
							50: "#f9fbe7",
							100: "#f0f4c3",
							200: "#e6ee9c",
							300: "#dce775",
							400: "#d4e157",
							500: "#cddc39",
							600: "#c0ca33",
							700: "#afb42b",
							800: "#9e9d24",
							900: "#827717",
							a100: "#f4ff81",
							a200: "#eeff41",
							a400: "#c6ff00",
							a700: "#aeea00"
						}
					},
					yellow: {
						base: "#ffeb3b",
						collection: {
							50: "#fffde7",
							100: "#fff9c4",
							200: "#fff59d",
							300: "#fff176",
							400: "#ffee58",
							500: "#ffeb3b",
							600: "#fdd835",
							700: "#fbc02d",
							800: "#f9a825",
							900: "#f57f17",
							a100: "#ffff8d",
							a200: "#ffff00",
							a400: "#ffea00",
							a700: "#ffd600"
						}
					},
					amber: {
						base: "#ffc107",
						collection: {
							50: "#fff8e1",
							100: "#ffecb3",
							200: "#ffe082",
							300: "#ffd54f",
							400: "#ffca28",
							500: "#ffc107",
							600: "#ffb300",
							700: "#ffa000",
							800: "#ff8f00",
							900: "#ff6f00",
							a100: "#ffe57f",
							a200: "#ffd740",
							a400: "#ffc400",
							a700: "#ffab00"
						}
					},
					orange: {
						base: "#ff9800",
						collection: {
							50: "#fff3e0",
							100: "#ffe0b2",
							200: "#ffcc80",
							300: "#ffb74d",
							400: "#ffa726",
							500: "#ff9800",
							600: "#fb8c00",
							700: "#f57c00",
							800: "#ef6c00",
							900: "#e65100",
							a100: "#ffd180",
							a200: "#ffab40",
							a400: "#ff9100",
							a700: "#ff6d00"
						}
					},
					black: "#000",
					bluegrey: {
						base: "#607d8b",
						collection: {
							50: "#eceff1",
							100: "#cfd8dc",
							200: "#b0bec5",
							300: "#90a4ae",
							400: "#78909c",
							500: "#607d8b",
							600: "#546e7a",
							700: "#455a64",
							800: "#37474f",
							900: "#263238"
						}
					},
					grey: {
						base: "#9e9e9e",
						collection: {
							50: "#fafafa",
							100: "#f5f5f5",
							200: "#eeeeee",
							300: "#e0e0e0",
							400: "#bdbdbd",
							500: "#9e9e9e",
							600: "#757575",
							700: "#616161",
							800: "#424242",
							900: "#212121"
						}
					},
					brown: {
						base: "#795548",
						collection: {
							50: "#efebe9",
							100: "#d7ccc8",
							200: "#bcaaa4",
							300: "#a1887f",
							400: "#8d6e63",
							500: "#795548",
							600: "#6d4c41",
							700: "#5d4037",
							800: "#4e342e",
							900: "#3e2723"
						}
					},
					deeporange: {
						base: "#ff5722",
						collection: {
							50: "#fbe9e7",
							100: "#ffccbc",
							200: "#ffab91",
							300: "#ff8a65",
							400: "#ff7043",
							500: "#ff5722",
							600: "#f4511e",
							700: "#e64a19",
							800: "#d84315",
							900: "#bf360c",
							a100: "#ff9e80",
							a200: "#ff6e40",
							a400: "#ff3d00",
							a700: "#dd2c00"
						}
					}
				},
				customcolors: !1,
				defaultcolor: !1,
				format: "rgb",
				opacity: !0,
				offset: "16px 0px",
				width: 350,
				height: 360,
				itemsize: 48,
				columns: 5,
				title: "",
				buttonbar: {
					cancel: {
						title: "Cancelar",
						action: function() {
							a._cancel()
						}
					},
					done: {
						title: "Aceptar",
						action: function() {
							a._close()
						}
					}
				},
				mode: "normal",
				placement: "bottom-left",
				trigger: "click",
				delay: !1,
				closeonselect: !1,
				closeonout: !0,
				closeonesc: !0,
				onInit: function() {},
				onOpen: function() {},
				onSelect: function() {},
				onClose: function() {},
				onCancel: function() {},
				template: '<div class="material-color-picker-wrapper"><div class="material-color-picker"><div class="mcp__title"><h3></h3></div><div class="mcp__collection-wrapper"></div></div></div>'
			},
			n = this.$target.data();
		return this.settingsDefault = r, this.settings = e.extend({}, r, o, n), this._init(), this
	};
	e.extend(r.prototype, {
		_init: function() {
			var t = this;
			target = this.$target, options = this.settings;
			var o = e(options.template),
				a = function(t, o, a) {
					var o = o || !1,
						a = a || !1,
						r = e("<div />", {
							"class": "mcp-color-item",
							"data-color-name": o,
							"data-color-code": a
						}),
						i = e("<div />", {
							"class": "mcp-color-item__swatch",
							title: o
						}),
						c = e("<div />", {
							"class": "mcp-color-item-palette",
							"data-color-palette": o
						});
					return "item" == t ? r : "swatch" == t ? i : "palette" == t ? c : void 0
				},
				r = function(e, t, o) {
					var r = a("item", t, e),
						i = a("swatch", t),
						c = {
							"background-color": e
						};
					i.css(c).appendTo(r), r.appendTo(o)
				},
				i = function(e, t) {
					for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
					return e
				};
			if (options.customcolors) var c = i(options.colors, options.customcolors);
			else var c = options.colors;
			var n = e(".mcp__collection-wrapper", o);
			e.each(c, function(t, o) {
				if (o instanceof Object) {
					var i = o.base,
						c = t,
						s = a("palette", c),
						l = e("<div />", {
							"class": "mcp-color-item mcp-color-back-to-palette"
						});
					l.appendTo(s), e.each(o.collection, function(e, t) {
						var o = t,
							a = c + "-" + e;
						r(o, a, s)
					}), r(i, c, n), s.appendTo(n)
				} else {
					var i = o,
						f = t;
					r(i, f, n)
				}
			}), t.picker = o, t.pickerState = "closed", t._buildTitle();
			var s = t._buildButtonbar();
			e(".material-color-picker", o).append(s);
			var l = options.defaultcolor;
			if (l) {
				var f = {
					colorname: l
				};
				t._setDefaultColor(f)
			} else t._setCurrentColor(!1);
			"modal" == options.mode, target.on(options.trigger, function(e) {
				e.preventDefault(), t._doOpen()
			}), t._hook("init")
		},
		_doOpen: function() {
			var e = this,
				t = e.settings.delay,
				o = e.pickerState;
			if ("closed" === o)
				if (t.show) {
					var o = "delayed";
					setTimeout(function() {
						e._open()
					}, t.show)
				} else e._open()
		},
		_open: function() {
			if ("open" == this.pickerState) return void this.DLOG("[x] Color Picker already opened");
			var t = this,
				o = this.picker,
				a = Math.round((new Date).getTime() + 1e4 * Math.random());
			mcpId = "material-color-picker-" + a, o.attr("id", mcpId), thePicker_internal_id = a, o = t._setPickerStyles(), "modal" === t.settings.mode && o.addClass("mcp--mode_modal mcp--animating"), e("body").append(o);
			setTimeout(function() {
				o.addClass("mcp--open").one("transitionend", function() {
					o.removeClass("mcp--animating")
				})
			}, 10);
			t._pickerHierarchicalDisplay(), t._pickerBindSelectSwatch(), t._pickerTriggerBackToColorCollection("static"), t._pickerBindBackToColorCollection(), t._closeOnOutside(), t._closeOnEsc("on"), t._bindButtonbarEvents(), t._setTempColor();
			setTimeout(function() {
				t.pickerState = "open"
			}, 0);
			t._hook("open"), t.DLOG("[✔] Open Picker ID: " + t.picker_internal_id)
		},
		_hidePicker: function(t) {
			var a = this,
				r = this.picker;
			e(".mcp__collection-wrapper", r).removeClass("mcp__collection-wrapper_loaded"), e(".material-color-picker", r).addClass("material-color-picker_closing").one("transitionend", function() {
				e(o).off("click.mcp-close_" + a.picker_internal_id), a.pickerState = "closed", e(this).removeClass("material-color-picker_closing"), r.removeClass("mcp--animating"), r.remove()
			}), r.addClass("mcp--animating").removeClass("mcp--open"), a.DLOG("[✔] Hide Picker ID: " + a.picker_internal_id)
		},
		_doClose: function() {
			var e = this,
				t = (this.picker, e.settings.delay),
				o = e.pickerState;
			if ("open" === o)
				if (t.hide) {
					var o = "delayed";
					setTimeout(function() {
						e._close(), e.DLOG("[✔] Delayed Close Picker ID: " + e.picker_internal_id)
					}, t.hide)
				} else e._close(), e.DLOG("[✔] Close Picker ID: " + e.picker_internal_id)
		},
		_close: function(e) {
			var t = this;
			this.picker;
			t._hidePicker(), t._closeOnEsc("off"), t._hook("close")
		},
		_closeOnEsc: function(t) {
			var a = this;
			"on" === t ? a.settings.closeonesc === !0 && e(o).on("keydown.mcpEventsCloseOnEsc_" + a.picker_internal_id, function(e) {
				return 27 == e.keyCode && (a._doCloselose(), a.DLOG("[✔] Close on Esc ID: " + a.picker_internal_id)), !0
			}) : "off" == t && (e(o).off("keydown.mcpEventsCloseOnEsc_" + a.picker_internal_id), a.DLOG("[x] Close on Esc ID: " + a.picker_internal_id))
		},
		_closeOnSelect: function() {
			var e = this;
			this.picker;
			e.settings.closeonselect === !0 && (e._doClose(), e.DLOG("[✔] Close on SELECT"))
		},
		_closeOnOutside: function() {
			var t = this;
			this.picker;
			t.settings.closeonout && e(o).on("click.mcp-close_" + t.picker_internal_id, function(o) {
				var a = e(o.target).parents(".material-color-picker-wrapper");
				a.length || "open" != t.pickerState || o.target === t.$target[0] || (t._doClose(), t.DLOG("[✔] Close On Outside ID: " + t.picker_internal_id))
			})
		},
		_cancel: function() {
			var t = this,
				o = this.picker,
				a = t._getTempColor();
			a ? t._pickerSelectColor(a.element) : (e(".mcp-color-item_selected", o).removeClass("mcp-color-item_selected"), t._setCurrentColor(!1)), t._hook("cancel"), t._doClose()
		},
		_setTempColor: function() {
			var e = this;
			e.tempcolor = e._getCurrentColor("obj")
		},
		_getTempColor: function() {
			var e = this,
				t = e.tempcolor;
			return t
		},
		_setDefaultColor: function(t) {
			var o = this,
				a = this.picker,
				r = e('.mcp-color-item[data-color-name="' + t.colorname + '"]', a);
			r.addClass("mcp-color-item_selected"), o._setCurrentColor(r.data(), r)
		},
		_setCurrentColor: function(e, t) {
			var o = this;
			this.picker;
			o.currentcolor = e, o.currentcoloritem = t
		},
		_getCurrentColor: function(e) {
			var t = this,
				o = t.currentcolor,
				a = t.settings.format;
			if (o) {
				var r = t._parseColor(o.colorCode, a);
				if ("obj" == e) {
					var i = {
						color: r,
						element: t.currentcoloritem
					};
					return i
				}
				return r
			}
		},
		_buildTitle: function() {
			var t = this,
				o = this.picker,
				a = t.settings.title;
			a ? e(".mcp__title h3", o).html(a) : e(".mcp__title", o).remove()
		},
		_buildButtonbar: function() {
			var t = this.settings.buttonbar,
				o = e('<section class="mcp__buttonbar-actions"></section>');
			return e.each(t, function(t, a) {
				e("<button />", {
					"class": "mcp__button mcp__action mcp-action_" + t,
					text: a.title
				}).appendTo(o)
			}), o
		},
		_bindButtonbarEvents: function() {
			var t = this.picker,
				o = this.settings.buttonbar;
			e.each(o, function(o, a) {
				e(".mcp__buttonbar-actions > .mcp-action_" + o, t).on("click", function() {
					a.action.call()
				})
			})
		},
		_setPickerStyles: function(t, o) {
			var a = this,
				r = this.picker,
				i = a.$target,
				c = i.offset(),
				n = i.outerHeight(),
				s = i.outerWidth(),
				l = 0,
				f = 0,
				p = "left top",
				d = a.settings,
				b = d.offset;
			switch (d.placement) {
				case "bottom-left":
					if (!b) var n = 0;
					var l = c.top + n,
						f = c.left,
						h = "0px",
						u = "initial",
						m = "initial",
						_ = "0px";
					break;
				case "bottom-right":
					if (!b) var n = 0;
					var l = c.top + n,
						f = c.left + s - d.width,
						h = "0px",
						u = "0px",
						m = "initial",
						_ = "initial";
					break;
				case "top-left":
					if (b) var n = 0;
					var l = c.top + n,
						f = c.left,
						h = "initial",
						u = "initial",
						m = "0px",
						_ = "0px";
					break;
				case "top-right":
					if (b) var n = 0;
					var l = c.top + n,
						f = c.left + s - d.width,
						h = "initial",
						u = "0px",
						m = "0px",
						_ = "initial";
					break;
				default:
					var l = c.top + n,
						f = c.left,
						h = "0px",
						u = "initial",
						m = "initial",
						_ = "0px"
			}
			var b = b || 0,
				o = {
					"--colorpicker-width": d.width + "px",
					"--colorpicker-height": d.height + "px",
					"--colorpicker-column-count": d.columns,
					"--colorpicker-item-size": d.itemsize + "px",
					"--colorpicker-top": l + "px",
					"--colorpicker-left": f + "px",
					"--colorpicker-placement": p,
					"--colorpicker-pos_top": h,
					"--colorpicker-pos_right": u,
					"--colorpicker-pos_bottom": m,
					"--colorpicker-pos_left": _,
					"--colorpicker-offset": b
				},
				g = function(t, o) {
					var a = e(t).get(0).style;
					for (var r in o) a.setProperty(r, o[r])
				};
			return g(r, o), r
		},
		_pickerHierarchicalDisplay: function() {
			var t = this.picker;
			e(".material-color-picker", t).one("animationend", function(o) {
				var a = e(".mcp__collection-wrapper", t).children(".mcp-color-item"),
					r = 2e3;
				a.each(function() {
					elementOffset = e(this).position(), calculatedOffset = .8 * elementOffset.left + elementOffset.top, elemDelay = parseFloat(calculatedOffset / r).toFixed(2), e(".mcp-color-item__swatch", this).css("-webkit-transition-delay", elemDelay + "s").css("transition-delay", elemDelay + "s")
				}), e(".mcp__collection-wrapper", t).addClass("mcp__collection-wrapper_loaded")
			})
		},
		_pickerBindBackToColorCollection: function() {
			var t = this,
				o = this.picker;
			e(".mcp-color-back-to-palette", o).on("click", function() {
				t._pickerBackToColorCollection(this)
			})
		},
		_pickerTriggerBackToColorCollection: function(t) {
			var o = this,
				a = this.picker;
			o._pickerBackToColorCollection(e(".mcp-color-back-to-palette", a), t)
		},
		_pickerBackToColorCollection: function(t, o) {
			var a = this.picker;
			"static" === o ? (e(".mcp__collection-wrapper > .mcp-color-item_hidden", a).removeClass("mcp-color-item_hidden"), e(".mcp__collection-wrapper > .mcp-color-item-palette_visible", a).removeClass("mcp-color-item-palette_visible")) : (e(t).parents(".mcp-color-item-palette_visible").removeClass("mcp-color-item-palette_visible").addClass("mcp-color-item-palette_closing").one("animationend", function(t) {
				e(this).removeClass("mcp-color-item-palette_closing")
			}), e(".mcp__collection-wrapper > .mcp-color-item_hidden", a).removeClass("mcp-color-item_hidden"))
		},
		_pickerBindSelectSwatch: function() {
			var t = this,
				o = this.picker;
			e(".mcp-color-item__swatch", o).on("click", function(a) {
				var r = e(this).parent(".mcp-color-item"),
					i = r.data("state"),
					c = e(this),
					n = r.data("color-name"),
					s = e('.mcp-color-item-palette[data-color-palette="' + n + '"]', o);
				if (s.length) {
					var l = c.position(),
						f = l.top,
						p = l.left,
						d = f + "px",
						b = p + "px";
					if (s.get(0).style.setProperty("--position-top", d), s.get(0).style.setProperty("--position-left", b), 1 != i) {
						e(".mcp__collection-wrapper > .mcp-color-item", o).addClass("mcp-color-item_hidden");
						setTimeout(function() {
							s.toggleClass("mcp-color-item-palette_visible")
						}, 100)
					}
				} else t._pickerSelectColor(r)
			})
		},
		_pickerSelectColor: function(t) {
			var o = this,
				a = this.picker;
			e(".mcp-color-item", a).removeClass("mcp-color-item_selected"), t.toggleClass("mcp-color-item_selected"), o._setCurrentColor(t.data(), t), o._closeOnSelect();
			var r = o._getCurrentColor();
			o._hook("select"), o.DLOG("[✔] Color Selected: ", r, " Picker ID: " + o.picker_internal_id)
		},
		_parseColor: function(e, t) {
			var o, a, r, i, c = this,
				e = (this.picker, e.toLowerCase()),
				t = t.toLowerCase(),
				n = c.settings.opacity,
				s = 4,
				l = e,
				f = {
					rgb: {
						re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
						example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
						toRGBA: function(e) {
							return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3], 10), 1]
						}
					},
					rgba: {
						re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
						example: ["rgba(123, 234, 45, 1)", "rgba(255,234,245, 0.5)"],
						toRGBA: function(e) {
							return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3], 10), parseFloat(e[4])]
						}
					},
					hex: {
						re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
						example: ["00ff00", "336699"],
						toRGBA: function(e) {
							return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16), 1]
						}
					},
					hex3: {
						re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
						example: ["fb0", "f0f"],
						toRGBA: function(e) {
							return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16), 1]
						}
					},
					hexa: {
						re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
						example: ["00ff00ff", "336699a0"],
						toRGBA: function(e) {
							return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16), parseInt(e[4], 16) / 255]
						}
					},
					hex4a: {
						re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
						example: ["fb0f", "f0f8"],
						toRGBA: function(e) {
							return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16), parseInt(e[4] + e[4], 16) / 255]
						}
					},
					hsl: {
						re: /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
						example: ["hsl(120, 100%, 25%)", "hsl(0, 100%, 50%)"],
						toRGBA: function(e) {
							e[4] = 1;
							var t = hslToRgb(e);
							return [t.r, t.g, t.b, t.a]
						}
					},
					hsla: {
						re: /^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
						example: ["hsla(120, 100%, 25%, 1)", "hsla(0, 100%, 50%, 0.5)"],
						toRGBA: function(e) {
							var t = hslToRgb(e);
							return [t.r, t.g, t.b, t.a]
						}
					},
					hsv: {
						re: /^hsv\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
						example: ["hsv(120, 100%, 25%)", "hsv(0, 100%, 50%)"],
						toRGBA: function(e) {
							var t = hsvToRgb(e);
							return [t.r, t.g, t.b, 1]
						}
					},
					hsb: {
						re: /^hsb\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
						example: ["hsb(120, 100%, 25%)", "hsb(0, 100%, 50%)"],
						toRGBA: function(e) {
							var t = hsvToRgb(e);
							return [t.r, t.g, t.b, 1]
						}
					}
				};
			for (var p in f) {
				var d = f[p].re,
					b = f[p].toRGBA,
					h = d.exec(e);
				if (h) {
					var u = b(h);
					o = u[0], a = u[1], r = u[2], i = +(Math.round(u[3] + ("e+" + s)) + ("e-" + s))
				}
			}
			switch (o = Math.round(o < 0 || isNaN(o) ? 0 : o > 255 ? 255 : o), a = Math.round(a < 0 || isNaN(a) ? 0 : a > 255 ? 255 : a), r = Math.round(r < 0 || isNaN(r) ? 0 : r > 255 ? 255 : r), i = i < 0 || isNaN(i) ? 0 : i > 1 ? 1 : i, t) {
				case "hex":
					l = "#" + ("0" + o.toString(16)).slice(-2) + ("0" + a.toString(16)).slice(-2) + ("0" + r.toString(16)).slice(-2);
					break;
				case "hexa":
					n && ([o, a, r, i] = c._calculateOpacityFromWhite(o, a, r, i)), l = "#" + ("0" + o.toString(16)).slice(-2) + ("0" + a.toString(16)).slice(-2) + ("0" + r.toString(16)).slice(-2) + ("0" + Math.round(255 * i).toString(16)).slice(-2);
					break;
				case "hsl":
					var m = c._rgbToHsl({
						r: o,
						g: a,
						b: r
					});
					l = "hsl(" + m.h + "," + m.s + "%," + m.l + "%)";
					break;
				case "hsla":
					n && ([o, a, r, i] = c._calculateOpacityFromWhite(o, a, r, i));
					var _ = c._rgbToHsl({
						r: o,
						g: a,
						b: r,
						a: i
					});
					l = "hsla(" + _.h + "," + _.s + "%," + _.l + "%," + _.a + ")";
					break;
				case "hsb":
					var g = c._rgbToHsv({
						r: o,
						g: a,
						b: r
					});
					l = "hsb(" + g.h + "," + g.s + "%," + g.v + "%)";
					break;
				case "hsv":
					var v = c._rgbToHsv({
						r: o,
						g: a,
						b: r
					});
					l = "hsv(" + v.h + "," + v.s + "%," + v.v + "%)";
					break;
				case "hwb":
					var k = c._rgbToHwb({
						r: o,
						g: a,
						b: r
					});
					l = "hwb(" + k.h + "," + k.w + "%," + k.b + "%)";
					break;
				case "cmyk":
					var C = c._rgbToCmyk({
						r: o,
						g: a,
						b: r
					});
					l = "cmyk(" + C.c + "%," + C.m + "%," + C.y + "%," + C.k + "%)";
					break;
				case "rgb":
					l = "rgb(" + o + "," + a + "," + r + ")";
					break;
				case "rgba":
				default:
					n && ([o, a, r, i] = c._calculateOpacityFromWhite(o, a, r, i)), l = "rgba(" + o + "," + a + "," + r + "," + i + ")"
			}
			return {
				color: l,
				format: t
			}
		},
		_calculateOpacityFromWhite: function(e, t, o, a) {
			"use strict";
			var r = 0;
			return a = (255 - (r = Math.min(e, t, o))) / 255, e = ((e - r) / a).toFixed(0), t = ((t - r) / a).toFixed(0), o = ((o - r) / a).toFixed(0), a = parseFloat(a.toFixed(4)), [e, t, o, a]
		},
		_rgbToHsl: function(e) {
			e.r = e.r / 255, e.g = e.g / 255, e.b = e.b / 255;
			var t, o = Math.max(e.r, e.g, e.b),
				a = Math.min(e.r, e.g, e.b),
				r = [];
			if (r.a = e.a, r.l = (o + a) / 2, o === a) r.h = 0, r.s = 0;
			else {
				switch (t = o - a, r.s = r.l >= .5 ? t / (2 - o - a) : t / (o + a), o) {
					case e.r:
						r.h = (e.g - e.b) / t + (e.g < e.b ? 6 : 0);
						break;
					case e.g:
						r.h = (e.b - e.r) / t + 2;
						break;
					case e.b:
						r.h = (e.r - e.g) / t + 4
				}
				r.h /= 6
			}
			return r.h = parseInt((360 * r.h).toFixed(0), 10), r.s = parseInt((100 * r.s).toFixed(0), 10), r.l = parseInt((100 * r.l).toFixed(0), 10), r
		},
		_rgbToHsv: function(e) {
			var t = function(e, t) {
				return e / t
			};
			e.r = t(parseInt(e.r, 10) % 256, 256), e.g = t(parseInt(e.g, 10) % 256, 256), e.b = t(parseInt(e.b, 10) % 256, 256);
			var o = Math.max(e.r, e.g, e.b),
				a = Math.min(e.r, e.g, e.b),
				r = o - a,
				i = {
					h: 0,
					s: 0 === o ? 0 : r / o,
					v: o
				};
			if (o !== a) {
				switch (o) {
					case e.r:
						i.h = (e.g - e.b) / r + (e.g < e.b ? 6 : 0);
						break;
					case e.g:
						i.h = (e.b - e.r) / r + 2;
						break;
					case e.b:
						i.h = (e.r - e.g) / r + 4
				}
				i.h /= 6
			}
			return i.h = parseInt((360 * i.h).toFixed(0), 10), i.s = parseInt((100 * i.s).toFixed(0), 10), i.v = parseInt((100 * i.v).toFixed(0), 10), i
		},
		_rgbToHwb: function(e) {
			var t = this,
				o = e.r,
				a = e.g,
				r = e.b,
				i = t._rgbToHsl(e).h,
				c = 1 / 255 * Math.min(o, Math.min(a, r)),
				r = 1 - 1 / 255 * Math.max(o, Math.max(a, r)),
				n = [];
			return console.log(t._rgbToHsl(e).h), n.h = parseInt(i.toFixed(0), 10), n.w = parseInt((100 * c).toFixed(0), 10), n.b = parseInt((100 * r).toFixed(0), 10), n
		},
		_rgbToCmyk: function(e) {
			var t, o, a, r, i = e.r / 255,
				c = e.g / 255,
				n = e.b / 255,
				s = [];
			return r = Math.min(1 - i, 1 - c, 1 - n), t = (1 - i - r) / (1 - r) || 0, o = (1 - c - r) / (1 - r) || 0, a = (1 - n - r) / (1 - r) || 0, s.c = parseInt((100 * t).toFixed(0), 10), s.m = parseInt((100 * o).toFixed(0), 10), s.y = parseInt((100 * a).toFixed(0), 10), s.k = parseInt((100 * r).toFixed(0), 10), s
		},
		_hsvToRgb: function(e) {
			var t = {},
				o = {
					h: e[1] / 360,
					s: e[2] / 100,
					v: e[3] / 100
				},
				a = Math.floor(6 * o.h),
				r = 6 * o.h - a,
				i = o.v * (1 - o.s),
				c = o.v * (1 - r * o.s),
				n = o.v * (1 - (1 - r) * o.s);
			switch (a % 6) {
				case 0:
					t.r = o.v, t.g = n, t.b = i;
					break;
				case 1:
					t.r = c, t.g = o.v, t.b = i;
					break;
				case 2:
					t.r = i, t.g = o.v, t.b = n;
					break;
				case 3:
					t.r = i, t.g = c, t.b = o.v;
					break;
				case 4:
					t.r = n, t.g = i, t.b = o.v;
					break;
				case 5:
					t.r = o.v, t.g = i, t.b = c
			}
			return t.r = 255 * t.r, t.g = 255 * t.g, t.b = 255 * t.b, t
		},
		_hueToRgb: function(e, t, o) {
			return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? e + 6 * (t - e) * o : o < .5 ? t : o < 2 / 3 ? e + (t - e) * (6 * (2 / 3 - o)) : e
		},
		_hslToRgb: function(e) {
			var t = {},
				o = {
					h: e[1] / 360,
					s: e[2] / 100,
					l: e[3] / 100,
					a: parseFloat(e[4])
				};
			if (0 === o.s) {
				var a = 255 * o.l;
				t = {
					r: a,
					g: a,
					b: a,
					a: o.a
				}
			} else {
				var r = o.l < .5 ? o.l * (1 + o.s) : o.l + o.s - o.l * o.s,
					i = 2 * o.l - r;
				t.r = 255 * hueToRgb(i, r, o.h + 1 / 3), t.g = 255 * hueToRgb(i, r, o.h), t.b = 255 * hueToRgb(i, r, o.h - 1 / 3), t.a = o.a
			}
			return t
		},
		_callbackSupport: function(t, o) {
			e.isFunction(t) && t.call(this.$target, o)
		},
		_hook: function(e) {
			var t = this,
				o = {
					target: t.$target,
					currentcolor: t._getCurrentColor()
				};
			switch (e) {
				case "init":
					t._callbackSupport(t.settings.onInit, o);
					break;
				case "open":
					t._callbackSupport(t.settings.onOpen, o);
					break;
				case "select":
					t._callbackSupport(t.settings.onSelect, o);
					break;
				case "close":
					t._callbackSupport(t.settings.onClose, o);
					break;
				case "cancel":
					t._callbackSupport(t.settings.onCancel, o)
			}
		}
	}), e.extend(r.prototype, {
		show: function(e) {
			var t = this;
			return t._doOpen(), t
		},
		close: function(e) {
			var t = this;
			return t._doClose(), t
		},
		cancel: function(e) {
			var t = this;
			return t._cancel(), t
		},
		getColor: function(e) {
			var t = this,
				o = t.currentcolor,
				e = e || t.settings.format;
			if (o) {
				var a = t._parseColor(o.colorCode, e);
				return a.color
			}
		},
		getVersion: function() {
			return this.version
		},
		destroy: function(e) {}
	}), r.prototype.DLOG = function() {
		if (this.settings.DEBUG)
			for (var e in arguments) console.log(i + ": ", arguments[e])
	}, r.prototype.DWARN = function() {
		this.settings.DEBUG && console.warn(arguments)
	};
	var i = "materialColorPicker",
		c = "1.0.0";
	e.fn[i] = function(t) {
		var o = arguments;
		return result = "", this.each(function() {
			if (!e(this).length) return e(this);
			var c = e(this),
				n = c.data(i),
				s = {};
			if (n && "object" != typeof t && 0 != t.indexOf("_") && n[t] && "function" == typeof n[t]) {
				var l = Array.prototype.slice.call(o, 1);
				result = n[t].apply(n, l)
			} else if (n) {
				var c = e(this).attr("id") ? e(this).attr("id") : e(this).attr("class");
				console.error(i + " plugin already initialised on element: #" + c)
			} else {
				if ("object" == typeof t || !t) return n = new r(c, t), c.data(i, n), s[i] = function(t) {
					return e(t).data(i) !== a
				}, e.extend(e.expr[":"], s), c;
				n ? 0 == t.indexOf("_") ? e.error(i + ' Method "' + t + '" is private!') : e.error(i + ' Method "' + t + '" does not exist on ' + i + " plugin.") : e.error(i + " plugin must be initialised before using method: " + t)
			}
		}), result
	}
}(jQuery, window, document);