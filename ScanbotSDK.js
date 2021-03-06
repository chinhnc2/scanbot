/*! For license information please see ScanbotSDK.min.js.LICENSE.txt */
!function(t, e) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define([], e);
    else {
        var n = e();
        for (var i in n)
            ("object" == typeof exports ? exports : t)[i] = n[i]
    }
}(window, (function() {
    return function(t) {
        var e = {};
        function n(i) {
            if (e[i])
                return e[i].exports;
            var r = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(r.exports, r, r.exports, n),
            r.l = !0,
            r.exports
        }
        return n.m = t,
        n.c = e,
        n.d = function(t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }
        ,
        n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(t, e) {
            if (1 & e && (t = n(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var i = Object.create(null);
            if (n.r(i),
            Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var r in t)
                    n.d(i, r, function(e) {
                        return t[e]
                    }
                    .bind(null, r));
            return i
        }
        ,
        n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return n.d(e, "a", e),
            e
        }
        ,
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "",
        n(n.s = 28)
    }([function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "useState", (function() {
            return J
        }
        )),
        n.d(e, "useReducer", (function() {
            return Z
        }
        )),
        n.d(e, "useEffect", (function() {
            return Q
        }
        )),
        n.d(e, "useLayoutEffect", (function() {
            return tt
        }
        )),
        n.d(e, "useRef", (function() {
            return et
        }
        )),
        n.d(e, "useImperativeHandle", (function() {
            return nt
        }
        )),
        n.d(e, "useMemo", (function() {
            return it
        }
        )),
        n.d(e, "useCallback", (function() {
            return rt
        }
        )),
        n.d(e, "useContext", (function() {
            return ot
        }
        )),
        n.d(e, "useDebugValue", (function() {
            return st
        }
        )),
        n.d(e, "useErrorBoundary", (function() {
            return at
        }
        )),
        n.d(e, "createElement", (function() {
            return f
        }
        )),
        n.d(e, "createContext", (function() {
            return F
        }
        )),
        n.d(e, "createRef", (function() {
            return m
        }
        )),
        n.d(e, "Fragment", (function() {
            return g
        }
        )),
        n.d(e, "Component", (function() {
            return v
        }
        )),
        n.d(e, "version", (function() {
            return te
        }
        )),
        n.d(e, "Children", (function() {
            return St
        }
        )),
        n.d(e, "render", (function() {
            return Rt
        }
        )),
        n.d(e, "hydrate", (function() {
            return jt
        }
        )),
        n.d(e, "unmountComponentAtNode", (function() {
            return re
        }
        )),
        n.d(e, "createPortal", (function() {
            return Tt
        }
        )),
        n.d(e, "createFactory", (function() {
            return ee
        }
        )),
        n.d(e, "cloneElement", (function() {
            return ie
        }
        )),
        n.d(e, "isValidElement", (function() {
            return ne
        }
        )),
        n.d(e, "findDOMNode", (function() {
            return oe
        }
        )),
        n.d(e, "PureComponent", (function() {
            return gt
        }
        )),
        n.d(e, "memo", (function() {
            return vt
        }
        )),
        n.d(e, "forwardRef", (function() {
            return bt
        }
        )),
        n.d(e, "unstable_batchedUpdates", (function() {
            return se
        }
        )),
        n.d(e, "StrictMode", (function() {
            return ae
        }
        )),
        n.d(e, "Suspense", (function() {
            return Et
        }
        )),
        n.d(e, "SuspenseList", (function() {
            return Ot
        }
        )),
        n.d(e, "lazy", (function() {
            return kt
        }
        )),
        n.d(e, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", (function() {
            return Gt
        }
        )),
        n.d(e, "unstable_ImmediatePriority", (function() {
            return qt
        }
        )),
        n.d(e, "unstable_UserBlockingPriority", (function() {
            return Kt
        }
        )),
        n.d(e, "unstable_NormalPriority", (function() {
            return Xt
        }
        )),
        n.d(e, "unstable_LowPriority", (function() {
            return Yt
        }
        )),
        n.d(e, "unstable_IdlePriority", (function() {
            return Jt
        }
        )),
        n.d(e, "unstable_runWithPriority", (function() {
            return Zt
        }
        )),
        n.d(e, "unstable_now", (function() {
            return Qt
        }
        ));
        var i, r, o, s, a, c = {}, l = [], u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
        function h(t, e) {
            for (var n in e)
                t[n] = e[n];
            return t
        }
        function d(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
        }
        function f(t, e, n) {
            var i, r, o, s = arguments, a = {};
            for (o in e)
                "key" == o ? i = e[o] : "ref" == o ? r = e[o] : a[o] = e[o];
            if (arguments.length > 3)
                for (n = [n],
                o = 3; o < arguments.length; o++)
                    n.push(s[o]);
            if (null != n && (a.children = n),
            "function" == typeof t && null != t.defaultProps)
                for (o in t.defaultProps)
                    void 0 === a[o] && (a[o] = t.defaultProps[o]);
            return p(t, a, i, r, null)
        }
        function p(t, e, n, r, o) {
            var s = {
                type: t,
                props: e,
                key: n,
                ref: r,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                __h: null,
                constructor: void 0,
                __v: null == o ? ++i.__v : o
            };
            return null != i.vnode && i.vnode(s),
            s
        }
        function m() {
            return {
                current: null
            }
        }
        function g(t) {
            return t.children
        }
        function v(t, e) {
            this.props = t,
            this.context = e
        }
        function _(t, e) {
            if (null == e)
                return t.__ ? _(t.__, t.__.__k.indexOf(t) + 1) : null;
            for (var n; e < t.__k.length; e++)
                if (null != (n = t.__k[e]) && null != n.__e)
                    return n.__e;
            return "function" == typeof t.type ? _(t) : null
        }
        function y(t) {
            var e, n;
            if (null != (t = t.__) && null != t.__c) {
                for (t.__e = t.__c.base = null,
                e = 0; e < t.__k.length; e++)
                    if (null != (n = t.__k[e]) && null != n.__e) {
                        t.__e = t.__c.base = n.__e;
                        break
                    }
                return y(t)
            }
        }
        function b(t) {
            (!t.__d && (t.__d = !0) && r.push(t) && !w.__r++ || s !== i.debounceRendering) && ((s = i.debounceRendering) || o)(w)
        }
        function w() {
            for (var t; w.__r = r.length; )
                t = r.sort((function(t, e) {
                    return t.__v.__b - e.__v.__b
                }
                )),
                r = [],
                t.some((function(t) {
                    var e, n, i, r, o, s;
                    t.__d && (o = (r = (e = t).__v).__e,
                    (s = e.__P) && (n = [],
                    (i = h({}, r)).__v = r.__v + 1,
                    A(s, r, i, e.__n, void 0 !== s.ownerSVGElement, null != r.__h ? [o] : null, n, null == o ? _(r) : o, r.__h),
                    D(n, r),
                    r.__e != o && y(r)))
                }
                ))
        }
        function S(t, e, n, i, r, o, s, a, u, h) {
            var d, f, m, v, y, b, w, S = i && i.__k || l, x = S.length;
            for (n.__k = [],
            d = 0; d < e.length; d++)
                if (null != (v = n.__k[d] = null == (v = e[d]) || "boolean" == typeof v ? null : "string" == typeof v || "number" == typeof v || "bigint" == typeof v ? p(null, v, null, null, v) : Array.isArray(v) ? p(g, {
                    children: v
                }, null, null, null) : v.__b > 0 ? p(v.type, v.props, v.key, null, v.__v) : v)) {
                    if (v.__ = n,
                    v.__b = n.__b + 1,
                    null === (m = S[d]) || m && v.key == m.key && v.type === m.type)
                        S[d] = void 0;
                    else
                        for (f = 0; f < x; f++) {
                            if ((m = S[f]) && v.key == m.key && v.type === m.type) {
                                S[f] = void 0;
                                break
                            }
                            m = null
                        }
                    A(t, v, m = m || c, r, o, s, a, u, h),
                    y = v.__e,
                    (f = v.ref) && m.ref != f && (w || (w = []),
                    m.ref && w.push(m.ref, null, v),
                    w.push(f, v.__c || y, v)),
                    null != y ? (null == b && (b = y),
                    "function" == typeof v.type && null != v.__k && v.__k === m.__k ? v.__d = u = C(v, u, t) : u = E(t, v, m, S, y, u),
                    h || "option" !== n.type ? "function" == typeof n.type && (n.__d = u) : t.value = "") : u && m.__e == u && u.parentNode != t && (u = _(m))
                }
            for (n.__e = b,
            d = x; d--; )
                null != S[d] && ("function" == typeof n.type && null != S[d].__e && S[d].__e == n.__d && (n.__d = _(i, d + 1)),
                L(S[d], S[d]));
            if (w)
                for (d = 0; d < w.length; d++)
                    I(w[d], w[++d], w[++d])
        }
        function C(t, e, n) {
            var i, r;
            for (i = 0; i < t.__k.length; i++)
                (r = t.__k[i]) && (r.__ = t,
                e = "function" == typeof r.type ? C(r, e, n) : E(n, r, r, t.__k, r.__e, e));
            return e
        }
        function x(t, e) {
            return e = e || [],
            null == t || "boolean" == typeof t || (Array.isArray(t) ? t.some((function(t) {
                x(t, e)
            }
            )) : e.push(t)),
            e
        }
        function E(t, e, n, i, r, o) {
            var s, a, c;
            if (void 0 !== e.__d)
                s = e.__d,
                e.__d = void 0;
            else if (null == n || r != o || null == r.parentNode)
                t: if (null == o || o.parentNode !== t)
                    t.appendChild(r),
                    s = null;
                else {
                    for (a = o,
                    c = 0; (a = a.nextSibling) && c < i.length; c += 2)
                        if (a == r)
                            break t;
                    t.insertBefore(r, o),
                    s = o
                }
            return void 0 !== s ? s : r.nextSibling
        }
        function P(t, e, n) {
            "-" === e[0] ? t.setProperty(e, n) : t[e] = null == n ? "" : "number" != typeof n || u.test(e) ? n : n + "px"
        }
        function k(t, e, n, i, r) {
            var o;
            t: if ("style" === e)
                if ("string" == typeof n)
                    t.style.cssText = n;
                else {
                    if ("string" == typeof i && (t.style.cssText = i = ""),
                    i)
                        for (e in i)
                            n && e in n || P(t.style, e, "");
                    if (n)
                        for (e in n)
                            i && n[e] === i[e] || P(t.style, e, n[e])
                }
            else if ("o" === e[0] && "n" === e[1])
                o = e !== (e = e.replace(/Capture$/, "")),
                e = e.toLowerCase()in t ? e.toLowerCase().slice(2) : e.slice(2),
                t.l || (t.l = {}),
                t.l[e + o] = n,
                n ? i || t.addEventListener(e, o ? M : O, o) : t.removeEventListener(e, o ? M : O, o);
            else if ("dangerouslySetInnerHTML" !== e) {
                if (r)
                    e = e.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
                else if ("href" !== e && "list" !== e && "form" !== e && "tabIndex" !== e && "download" !== e && e in t)
                    try {
                        t[e] = null == n ? "" : n;
                        break t
                    } catch (t) {}
                "function" == typeof n || (null != n && (!1 !== n || "a" === e[0] && "r" === e[1]) ? t.setAttribute(e, n) : t.removeAttribute(e))
            }
        }
        function O(t) {
            this.l[t.type + !1](i.event ? i.event(t) : t)
        }
        function M(t) {
            this.l[t.type + !0](i.event ? i.event(t) : t)
        }
        function A(t, e, n, r, o, s, a, c, l) {
            var u, d, f, p, m, _, y, b, w, C, x, E = e.type;
            if (void 0 !== e.constructor)
                return null;
            null != n.__h && (l = n.__h,
            c = e.__e = n.__e,
            e.__h = null,
            s = [c]),
            (u = i.__b) && u(e);
            try {
                t: if ("function" == typeof E) {
                    if (b = e.props,
                    w = (u = E.contextType) && r[u.__c],
                    C = u ? w ? w.props.value : u.__ : r,
                    n.__c ? y = (d = e.__c = n.__c).__ = d.__E : ("prototype"in E && E.prototype.render ? e.__c = d = new E(b,C) : (e.__c = d = new v(b,C),
                    d.constructor = E,
                    d.render = z),
                    w && w.sub(d),
                    d.props = b,
                    d.state || (d.state = {}),
                    d.context = C,
                    d.__n = r,
                    f = d.__d = !0,
                    d.__h = []),
                    null == d.__s && (d.__s = d.state),
                    null != E.getDerivedStateFromProps && (d.__s == d.state && (d.__s = h({}, d.__s)),
                    h(d.__s, E.getDerivedStateFromProps(b, d.__s))),
                    p = d.props,
                    m = d.state,
                    f)
                        null == E.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(),
                        null != d.componentDidMount && d.__h.push(d.componentDidMount);
                    else {
                        if (null == E.getDerivedStateFromProps && b !== p && null != d.componentWillReceiveProps && d.componentWillReceiveProps(b, C),
                        !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(b, d.__s, C) || e.__v === n.__v) {
                            d.props = b,
                            d.state = d.__s,
                            e.__v !== n.__v && (d.__d = !1),
                            d.__v = e,
                            e.__e = n.__e,
                            e.__k = n.__k,
                            e.__k.forEach((function(t) {
                                t && (t.__ = e)
                            }
                            )),
                            d.__h.length && a.push(d);
                            break t
                        }
                        null != d.componentWillUpdate && d.componentWillUpdate(b, d.__s, C),
                        null != d.componentDidUpdate && d.__h.push((function() {
                            d.componentDidUpdate(p, m, _)
                        }
                        ))
                    }
                    d.context = C,
                    d.props = b,
                    d.state = d.__s,
                    (u = i.__r) && u(e),
                    d.__d = !1,
                    d.__v = e,
                    d.__P = t,
                    u = d.render(d.props, d.state, d.context),
                    d.state = d.__s,
                    null != d.getChildContext && (r = h(h({}, r), d.getChildContext())),
                    f || null == d.getSnapshotBeforeUpdate || (_ = d.getSnapshotBeforeUpdate(p, m)),
                    x = null != u && u.type === g && null == u.key ? u.props.children : u,
                    S(t, Array.isArray(x) ? x : [x], e, n, r, o, s, a, c, l),
                    d.base = e.__e,
                    e.__h = null,
                    d.__h.length && a.push(d),
                    y && (d.__E = d.__ = null),
                    d.__e = !1
                } else
                    null == s && e.__v === n.__v ? (e.__k = n.__k,
                    e.__e = n.__e) : e.__e = T(n.__e, e, n, r, o, s, a, l);
                (u = i.diffed) && u(e)
            } catch (t) {
                e.__v = null,
                (l || null != s) && (e.__e = c,
                e.__h = !!l,
                s[s.indexOf(c)] = null),
                i.__e(t, e, n)
            }
        }
        function D(t, e) {
            i.__c && i.__c(e, t),
            t.some((function(e) {
                try {
                    t = e.__h,
                    e.__h = [],
                    t.some((function(t) {
                        t.call(e)
                    }
                    ))
                } catch (t) {
                    i.__e(t, e.__v)
                }
            }
            ))
        }
        function T(t, e, n, i, r, o, s, a) {
            var u, h, f, p, m = n.props, g = e.props, v = e.type, _ = 0;
            if ("svg" === v && (r = !0),
            null != o)
                for (; _ < o.length; _++)
                    if ((u = o[_]) && (u === t || (v ? u.localName == v : 3 == u.nodeType))) {
                        t = u,
                        o[_] = null;
                        break
                    }
            if (null == t) {
                if (null === v)
                    return document.createTextNode(g);
                t = r ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, g.is && g),
                o = null,
                a = !1
            }
            if (null === v)
                m === g || a && t.data === g || (t.data = g);
            else {
                if (o = o && l.slice.call(t.childNodes),
                h = (m = n.props || c).dangerouslySetInnerHTML,
                f = g.dangerouslySetInnerHTML,
                !a) {
                    if (null != o)
                        for (m = {},
                        p = 0; p < t.attributes.length; p++)
                            m[t.attributes[p].name] = t.attributes[p].value;
                    (f || h) && (f && (h && f.__html == h.__html || f.__html === t.innerHTML) || (t.innerHTML = f && f.__html || ""))
                }
                if (function(t, e, n, i, r) {
                    var o;
                    for (o in n)
                        "children" === o || "key" === o || o in e || k(t, o, null, n[o], i);
                    for (o in e)
                        r && "function" != typeof e[o] || "children" === o || "key" === o || "value" === o || "checked" === o || n[o] === e[o] || k(t, o, e[o], n[o], i)
                }(t, g, m, r, a),
                f)
                    e.__k = [];
                else if (_ = e.props.children,
                S(t, Array.isArray(_) ? _ : [_], e, n, i, r && "foreignObject" !== v, o, s, t.firstChild, a),
                null != o)
                    for (_ = o.length; _--; )
                        null != o[_] && d(o[_]);
                a || ("value"in g && void 0 !== (_ = g.value) && (_ !== t.value || "progress" === v && !_) && k(t, "value", _, m.value, !1),
                "checked"in g && void 0 !== (_ = g.checked) && _ !== t.checked && k(t, "checked", _, m.checked, !1))
            }
            return t
        }
        function I(t, e, n) {
            try {
                "function" == typeof t ? t(e) : t.current = e
            } catch (t) {
                i.__e(t, n)
            }
        }
        function L(t, e, n) {
            var r, o, s;
            if (i.unmount && i.unmount(t),
            (r = t.ref) && (r.current && r.current !== t.__e || I(r, null, e)),
            n || "function" == typeof t.type || (n = null != (o = t.__e)),
            t.__e = t.__d = void 0,
            null != (r = t.__c)) {
                if (r.componentWillUnmount)
                    try {
                        r.componentWillUnmount()
                    } catch (t) {
                        i.__e(t, e)
                    }
                r.base = r.__P = null
            }
            if (r = t.__k)
                for (s = 0; s < r.length; s++)
                    r[s] && L(r[s], e, n);
            null != o && d(o)
        }
        function z(t, e, n) {
            return this.constructor(t, n)
        }
        function R(t, e, n) {
            var r, o, s;
            i.__ && i.__(t, e),
            o = (r = "function" == typeof n) ? null : n && n.__k || e.__k,
            s = [],
            A(e, t = (!r && n || e).__k = f(g, null, [t]), o || c, c, void 0 !== e.ownerSVGElement, !r && n ? [n] : o ? null : e.firstChild ? l.slice.call(e.childNodes) : null, s, !r && n ? n : o ? o.__e : e.firstChild, r),
            D(s, t)
        }
        function j(t, e) {
            R(t, e, j)
        }
        function N(t, e, n) {
            var i, r, o, s = arguments, a = h({}, t.props);
            for (o in e)
                "key" == o ? i = e[o] : "ref" == o ? r = e[o] : a[o] = e[o];
            if (arguments.length > 3)
                for (n = [n],
                o = 3; o < arguments.length; o++)
                    n.push(s[o]);
            return null != n && (a.children = n),
            p(t.type, a, i || t.key, r || t.ref, null)
        }
        function F(t, e) {
            var n = {
                __c: e = "__cC" + a++,
                __: t,
                Consumer: function(t, e) {
                    return t.children(e)
                },
                Provider: function(t) {
                    var n, i;
                    return this.getChildContext || (n = [],
                    (i = {})[e] = this,
                    this.getChildContext = function() {
                        return i
                    }
                    ,
                    this.shouldComponentUpdate = function(t) {
                        this.props.value !== t.value && n.some(b)
                    }
                    ,
                    this.sub = function(t) {
                        n.push(t);
                        var e = t.componentWillUnmount;
                        t.componentWillUnmount = function() {
                            n.splice(n.indexOf(t), 1),
                            e && e.call(t)
                        }
                    }
                    ),
                    t.children
                }
            };
            return n.Provider.__ = n.Consumer.contextType = n
        }
        i = {
            __e: function(t, e) {
                for (var n, i, r; e = e.__; )
                    if ((n = e.__c) && !n.__)
                        try {
                            if ((i = n.constructor) && null != i.getDerivedStateFromError && (n.setState(i.getDerivedStateFromError(t)),
                            r = n.__d),
                            null != n.componentDidCatch && (n.componentDidCatch(t),
                            r = n.__d),
                            r)
                                return n.__E = n
                        } catch (e) {
                            t = e
                        }
                throw t
            },
            __v: 0
        },
        v.prototype.setState = function(t, e) {
            var n;
            n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state),
            "function" == typeof t && (t = t(h({}, n), this.props)),
            t && h(n, t),
            null != t && this.__v && (e && this.__h.push(e),
            b(this))
        }
        ,
        v.prototype.forceUpdate = function(t) {
            this.__v && (this.__e = !0,
            t && this.__h.push(t),
            b(this))
        }
        ,
        v.prototype.render = g,
        r = [],
        o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        w.__r = 0,
        a = 0;
        var U, B, V, $ = 0, H = [], W = i.__b, G = i.__r, q = i.diffed, K = i.__c, X = i.unmount;
        function Y(t, e) {
            i.__h && i.__h(B, t, $ || e),
            $ = 0;
            var n = B.__H || (B.__H = {
                __: [],
                __h: []
            });
            return t >= n.__.length && n.__.push({}),
            n.__[t]
        }
        function J(t) {
            return $ = 1,
            Z(ft, t)
        }
        function Z(t, e, n) {
            var i = Y(U++, 2);
            return i.t = t,
            i.__c || (i.__ = [n ? n(e) : ft(void 0, e), function(t) {
                var e = i.t(i.__[0], t);
                i.__[0] !== e && (i.__ = [e, i.__[1]],
                i.__c.setState({}))
            }
            ],
            i.__c = B),
            i.__
        }
        function Q(t, e) {
            var n = Y(U++, 3);
            !i.__s && dt(n.__H, e) && (n.__ = t,
            n.__H = e,
            B.__H.__h.push(n))
        }
        function tt(t, e) {
            var n = Y(U++, 4);
            !i.__s && dt(n.__H, e) && (n.__ = t,
            n.__H = e,
            B.__h.push(n))
        }
        function et(t) {
            return $ = 5,
            it((function() {
                return {
                    current: t
                }
            }
            ), [])
        }
        function nt(t, e, n) {
            $ = 6,
            tt((function() {
                "function" == typeof t ? t(e()) : t && (t.current = e())
            }
            ), null == n ? n : n.concat(t))
        }
        function it(t, e) {
            var n = Y(U++, 7);
            return dt(n.__H, e) && (n.__ = t(),
            n.__H = e,
            n.__h = t),
            n.__
        }
        function rt(t, e) {
            return $ = 8,
            it((function() {
                return t
            }
            ), e)
        }
        function ot(t) {
            var e = B.context[t.__c]
              , n = Y(U++, 9);
            return n.__c = t,
            e ? (null == n.__ && (n.__ = !0,
            e.sub(B)),
            e.props.value) : t.__
        }
        function st(t, e) {
            i.useDebugValue && i.useDebugValue(e ? e(t) : t)
        }
        function at(t) {
            var e = Y(U++, 10)
              , n = J();
            return e.__ = t,
            B.componentDidCatch || (B.componentDidCatch = function(t) {
                e.__ && e.__(t),
                n[1](t)
            }
            ),
            [n[0], function() {
                n[1](void 0)
            }
            ]
        }
        function ct() {
            H.forEach((function(t) {
                if (t.__P)
                    try {
                        t.__H.__h.forEach(ut),
                        t.__H.__h.forEach(ht),
                        t.__H.__h = []
                    } catch (e) {
                        t.__H.__h = [],
                        i.__e(e, t.__v)
                    }
            }
            )),
            H = []
        }
        i.__b = function(t) {
            B = null,
            W && W(t)
        }
        ,
        i.__r = function(t) {
            G && G(t),
            U = 0;
            var e = (B = t.__c).__H;
            e && (e.__h.forEach(ut),
            e.__h.forEach(ht),
            e.__h = [])
        }
        ,
        i.diffed = function(t) {
            q && q(t);
            var e = t.__c;
            e && e.__H && e.__H.__h.length && (1 !== H.push(e) && V === i.requestAnimationFrame || ((V = i.requestAnimationFrame) || function(t) {
                var e, n = function() {
                    clearTimeout(i),
                    lt && cancelAnimationFrame(e),
                    setTimeout(t)
                }, i = setTimeout(n, 100);
                lt && (e = requestAnimationFrame(n))
            }
            )(ct)),
            B = void 0
        }
        ,
        i.__c = function(t, e) {
            e.some((function(t) {
                try {
                    t.__h.forEach(ut),
                    t.__h = t.__h.filter((function(t) {
                        return !t.__ || ht(t)
                    }
                    ))
                } catch (n) {
                    e.some((function(t) {
                        t.__h && (t.__h = [])
                    }
                    )),
                    e = [],
                    i.__e(n, t.__v)
                }
            }
            )),
            K && K(t, e)
        }
        ,
        i.unmount = function(t) {
            X && X(t);
            var e = t.__c;
            if (e && e.__H)
                try {
                    e.__H.__.forEach(ut)
                } catch (t) {
                    i.__e(t, e.__v)
                }
        }
        ;
        var lt = "function" == typeof requestAnimationFrame;
        function ut(t) {
            var e = B;
            "function" == typeof t.__c && t.__c(),
            B = e
        }
        function ht(t) {
            var e = B;
            t.__c = t.__(),
            B = e
        }
        function dt(t, e) {
            return !t || t.length !== e.length || e.some((function(e, n) {
                return e !== t[n]
            }
            ))
        }
        function ft(t, e) {
            return "function" == typeof e ? e(t) : e
        }
        function pt(t, e) {
            for (var n in e)
                t[n] = e[n];
            return t
        }
        function mt(t, e) {
            for (var n in t)
                if ("__source" !== n && !(n in e))
                    return !0;
            for (var i in e)
                if ("__source" !== i && t[i] !== e[i])
                    return !0;
            return !1
        }
        function gt(t) {
            this.props = t
        }
        function vt(t, e) {
            function n(t) {
                var n = this.props.ref
                  , i = n == t.ref;
                return !i && n && (n.call ? n(null) : n.current = null),
                e ? !e(this.props, t) || !i : mt(this.props, t)
            }
            function i(e) {
                return this.shouldComponentUpdate = n,
                f(t, e)
            }
            return i.displayName = "Memo(" + (t.displayName || t.name) + ")",
            i.prototype.isReactComponent = !0,
            i.__f = !0,
            i
        }
        (gt.prototype = new v).isPureReactComponent = !0,
        gt.prototype.shouldComponentUpdate = function(t, e) {
            return mt(this.props, t) || mt(this.state, e)
        }
        ;
        var _t = i.__b;
        i.__b = function(t) {
            t.type && t.type.__f && t.ref && (t.props.ref = t.ref,
            t.ref = null),
            _t && _t(t)
        }
        ;
        var yt = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
        function bt(t) {
            function e(e, n) {
                var i = pt({}, e);
                return delete i.ref,
                t(i, (n = e.ref || n) && ("object" != typeof n || "current"in n) ? n : null)
            }
            return e.$$typeof = yt,
            e.render = e,
            e.prototype.isReactComponent = e.__f = !0,
            e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")",
            e
        }
        var wt = function(t, e) {
            return null == t ? null : x(x(t).map(e))
        }
          , St = {
            map: wt,
            forEach: wt,
            count: function(t) {
                return t ? x(t).length : 0
            },
            only: function(t) {
                var e = x(t);
                if (1 !== e.length)
                    throw "Children.only";
                return e[0]
            },
            toArray: x
        }
          , Ct = i.__e;
        i.__e = function(t, e, n) {
            if (t.then)
                for (var i, r = e; r = r.__; )
                    if ((i = r.__c) && i.__c)
                        return null == e.__e && (e.__e = n.__e,
                        e.__k = n.__k),
                        i.__c(t, e);
            Ct(t, e, n)
        }
        ;
        var xt = i.unmount;
        function Et() {
            this.__u = 0,
            this.t = null,
            this.__b = null
        }
        function Pt(t) {
            var e = t.__.__c;
            return e && e.__e && e.__e(t)
        }
        function kt(t) {
            var e, n, i;
            function r(r) {
                if (e || (e = t()).then((function(t) {
                    n = t.default || t
                }
                ), (function(t) {
                    i = t
                }
                )),
                i)
                    throw i;
                if (!n)
                    throw e;
                return f(n, r)
            }
            return r.displayName = "Lazy",
            r.__f = !0,
            r
        }
        function Ot() {
            this.u = null,
            this.o = null
        }
        i.unmount = function(t) {
            var e = t.__c;
            e && e.__R && e.__R(),
            e && !0 === t.__h && (t.type = null),
            xt && xt(t)
        }
        ,
        (Et.prototype = new v).__c = function(t, e) {
            var n = e.__c
              , i = this;
            null == i.t && (i.t = []),
            i.t.push(n);
            var r = Pt(i.__v)
              , o = !1
              , s = function() {
                o || (o = !0,
                n.__R = null,
                r ? r(a) : a())
            };
            n.__R = s;
            var a = function() {
                if (!--i.__u) {
                    if (i.state.__e) {
                        var t = i.state.__e;
                        i.__v.__k[0] = function t(e, n, i) {
                            return e && (e.__v = null,
                            e.__k = e.__k && e.__k.map((function(e) {
                                return t(e, n, i)
                            }
                            )),
                            e.__c && e.__c.__P === n && (e.__e && i.insertBefore(e.__e, e.__d),
                            e.__c.__e = !0,
                            e.__c.__P = i)),
                            e
                        }(t, t.__c.__P, t.__c.__O)
                    }
                    var e;
                    for (i.setState({
                        __e: i.__b = null
                    }); e = i.t.pop(); )
                        e.forceUpdate()
                }
            }
              , c = !0 === e.__h;
            i.__u++ || c || i.setState({
                __e: i.__b = i.__v.__k[0]
            }),
            t.then(s, s)
        }
        ,
        Et.prototype.componentWillUnmount = function() {
            this.t = []
        }
        ,
        Et.prototype.render = function(t, e) {
            if (this.__b) {
                if (this.__v.__k) {
                    var n = document.createElement("div")
                      , i = this.__v.__k[0].__c;
                    this.__v.__k[0] = function t(e, n, i) {
                        return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach((function(t) {
                            "function" == typeof t.__c && t.__c()
                        }
                        )),
                        e.__c.__H = null),
                        null != (e = pt({}, e)).__c && (e.__c.__P === i && (e.__c.__P = n),
                        e.__c = null),
                        e.__k = e.__k && e.__k.map((function(e) {
                            return t(e, n, i)
                        }
                        ))),
                        e
                    }(this.__b, n, i.__O = i.__P)
                }
                this.__b = null
            }
            var r = e.__e && f(g, null, t.fallback);
            return r && (r.__h = null),
            [f(g, null, e.__e ? null : t.children), r]
        }
        ;
        var Mt = function(t, e, n) {
            if (++n[1] === n[0] && t.o.delete(e),
            t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.o.size))
                for (n = t.u; n; ) {
                    for (; n.length > 3; )
                        n.pop()();
                    if (n[1] < n[0])
                        break;
                    t.u = n = n[2]
                }
        };
        function At(t) {
            return this.getChildContext = function() {
                return t.context
            }
            ,
            t.children
        }
        function Dt(t) {
            var e = this
              , n = t.i;
            e.componentWillUnmount = function() {
                R(null, e.l),
                e.l = null,
                e.i = null
            }
            ,
            e.i && e.i !== n && e.componentWillUnmount(),
            t.__v ? (e.l || (e.i = n,
            e.l = {
                nodeType: 1,
                parentNode: n,
                childNodes: [],
                appendChild: function(t) {
                    this.childNodes.push(t),
                    e.i.appendChild(t)
                },
                insertBefore: function(t, n) {
                    this.childNodes.push(t),
                    e.i.appendChild(t)
                },
                removeChild: function(t) {
                    this.childNodes.splice(this.childNodes.indexOf(t) >>> 1, 1),
                    e.i.removeChild(t)
                }
            }),
            R(f(At, {
                context: e.context
            }, t.__v), e.l)) : e.l && e.componentWillUnmount()
        }
        function Tt(t, e) {
            return f(Dt, {
                __v: t,
                i: e
            })
        }
        (Ot.prototype = new v).__e = function(t) {
            var e = this
              , n = Pt(e.__v)
              , i = e.o.get(t);
            return i[0]++,
            function(r) {
                var o = function() {
                    e.props.revealOrder ? (i.push(r),
                    Mt(e, t, i)) : r()
                };
                n ? n(o) : o()
            }
        }
        ,
        Ot.prototype.render = function(t) {
            this.u = null,
            this.o = new Map;
            var e = x(t.children);
            t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
            for (var n = e.length; n--; )
                this.o.set(e[n], this.u = [1, 0, this.u]);
            return t.children
        }
        ,
        Ot.prototype.componentDidUpdate = Ot.prototype.componentDidMount = function() {
            var t = this;
            this.o.forEach((function(e, n) {
                Mt(t, n, e)
            }
            ))
        }
        ;
        var It = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103
          , Lt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
          , zt = function(t) {
            return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(t)
        };
        function Rt(t, e, n) {
            return null == e.__k && (e.textContent = ""),
            R(t, e),
            "function" == typeof n && n(),
            t ? t.__c : null
        }
        function jt(t, e, n) {
            return j(t, e),
            "function" == typeof n && n(),
            t ? t.__c : null
        }
        v.prototype.isReactComponent = {},
        ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(t) {
            Object.defineProperty(v.prototype, t, {
                configurable: !0,
                get: function() {
                    return this["UNSAFE_" + t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        }
        ));
        var Nt = i.event;
        function Ft() {}
        function Ut() {
            return this.cancelBubble
        }
        function Bt() {
            return this.defaultPrevented
        }
        i.event = function(t) {
            return Nt && (t = Nt(t)),
            t.persist = Ft,
            t.isPropagationStopped = Ut,
            t.isDefaultPrevented = Bt,
            t.nativeEvent = t
        }
        ;
        var Vt, $t = {
            configurable: !0,
            get: function() {
                return this.class
            }
        }, Ht = i.vnode;
        i.vnode = function(t) {
            var e = t.type
              , n = t.props
              , i = n;
            if ("string" == typeof e) {
                for (var r in i = {},
                n) {
                    var o = n[r];
                    "value" === r && "defaultValue"in n && null == o || ("defaultValue" === r && "value"in n && null == n.value ? r = "value" : "download" === r && !0 === o ? o = "" : /ondoubleclick/i.test(r) ? r = "ondblclick" : /^onchange(textarea|input)/i.test(r + e) && !zt(n.type) ? r = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(r) ? r = r.toLowerCase() : Lt.test(r) ? r = r.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === o && (o = void 0),
                    i[r] = o)
                }
                "select" == e && i.multiple && Array.isArray(i.value) && (i.value = x(n.children).forEach((function(t) {
                    t.props.selected = -1 != i.value.indexOf(t.props.value)
                }
                ))),
                "select" == e && null != i.defaultValue && (i.value = x(n.children).forEach((function(t) {
                    t.props.selected = i.multiple ? -1 != i.defaultValue.indexOf(t.props.value) : i.defaultValue == t.props.value
                }
                ))),
                t.props = i
            }
            e && n.class != n.className && ($t.enumerable = "className"in n,
            null != n.className && (i.class = n.className),
            Object.defineProperty(i, "className", $t)),
            t.$$typeof = It,
            Ht && Ht(t)
        }
        ;
        var Wt = i.__r;
        i.__r = function(t) {
            Wt && Wt(t),
            Vt = t.__c
        }
        ;
        var Gt = {
            ReactCurrentDispatcher: {
                current: {
                    readContext: function(t) {
                        return Vt.__n[t.__c].props.value
                    }
                }
            }
        }
          , qt = 1
          , Kt = 2
          , Xt = 3
          , Yt = 4
          , Jt = 5;
        function Zt(t, e) {
            return e()
        }
        var Qt = "object" == typeof performance && "function" == typeof performance.now ? performance.now.bind(performance) : function() {
            return Date.now()
        }
          , te = "16.8.0";
        function ee(t) {
            return f.bind(null, t)
        }
        function ne(t) {
            return !!t && t.$$typeof === It
        }
        function ie(t) {
            return ne(t) ? N.apply(null, arguments) : t
        }
        function re(t) {
            return !!t.__k && (R(null, t),
            !0)
        }
        function oe(t) {
            return t && (t.base || 1 === t.nodeType && t) || null
        }
        var se = function(t, e) {
            return t(e)
        }
          , ae = g;
        e.default = {
            useState: J,
            useReducer: Z,
            useEffect: Q,
            useLayoutEffect: tt,
            useRef: et,
            useImperativeHandle: nt,
            useMemo: it,
            useCallback: rt,
            useContext: ot,
            useDebugValue: st,
            version: "16.8.0",
            Children: St,
            render: Rt,
            hydrate: jt,
            unmountComponentAtNode: re,
            createPortal: Tt,
            createElement: f,
            createContext: F,
            createFactory: ee,
            cloneElement: ie,
            createRef: m,
            Fragment: g,
            isValidElement: ne,
            findDOMNode: oe,
            Component: v,
            PureComponent: gt,
            memo: vt,
            forwardRef: bt,
            unstable_batchedUpdates: se,
            StrictMode: g,
            Suspense: Et,
            SuspenseList: Ot,
            lazy: kt,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Gt
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.Point = void 0;
        class i {
            constructor(t, e) {
                this.x = t,
                this.y = e
            }
            static toPolygon(t, e) {
                return [i.scaleDownTo(t[0], e), i.scaleDownTo(t[1], e), i.scaleDownTo(t[2], e), i.scaleDownTo(t[3], e)]
            }
            static scaleToPoint(t, e, n, r) {
                return new i(r * (t.x - e),r * (t.y - n))
            }
            static scaleUpTo(t, e) {
                return new i(t.x * e.width,t.y * e.height)
            }
            static scaleDownTo(t, e) {
                return new i(t.x / e.width,t.y / e.height)
            }
            static fromHtmlElement(t) {
                return new i(t.offsetLeft,t.offsetTop)
            }
            static withScale(t, e, n) {
                return new i(t / n,e / n)
            }
            static fromTouches(t, e, n) {
                const r = t[0];
                if (!r)
                    return new i(0,0);
                const o = new i(r.clientX,r.clientY);
                return n = null != n ? n : 1,
                1 === (e = e ? e % 4 : 0) ? i.withScale(o.y, -o.x, n) : 2 === e ? i.withScale(-o.x, -o.y, n) : 3 === e ? i.withScale(-o.y, o.x, n) : i.withScale(o.x, o.y, n)
            }
            static empty() {
                return new i(0,0)
            }
        }
        e.Point = i
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.Size = void 0;
        const i = n(1);
        class r {
            constructor(t, e) {
                this.width = t,
                this.height = e
            }
            isPortrait() {
                return this.height > this.width
            }
            ratio(t) {
                return t ? this.height / this.width : this.width / this.height
            }
            ratioDiff(t, e) {
                return this.ratio(e) / t.ratio(e)
            }
            static isEmpty(t) {
                return !t || (0 === t.width || 0 === t.height)
            }
            static toPolygon(t) {
                return [new i.Point(0,0), new i.Point(t.width,0), new i.Point(t.width,t.height), new i.Point(0,t.height)]
            }
            static fromHtmlElement(t) {
                return t ? new r(t.clientWidth,t.clientHeight) : new r(0,0)
            }
            static subtractFrom(t, e) {
                return new r(t.width - e,t.height - e)
            }
            static empty() {
                return new r(0,0)
            }
        }
        e.Size = r
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.Frame = void 0;
        class i {
            constructor(t, e, n, i) {
                this.x = t,
                this.y = e,
                this.width = n,
                this.height = i
            }
            scaleDown(t) {
                return new i(this.x / t,this.y / t,this.width / t,this.height / t)
            }
            static withSize(t, e) {
                return new i(0,0,t,e)
            }
            static empty() {
                return new i(0,0,0,0)
            }
            static fromRect(t) {
                return t ? new i(t.x,t.y,t.width,t.height) : i.empty()
            }
            static fromPoint(t, e) {
                return new i(t.x - e / 2,t.y - e / 2,e,e)
            }
        }
        e.Frame = i
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__awaiter || function(t, e, n, i) {
            return new (n || (n = Promise))((function(r, o) {
                function s(t) {
                    try {
                        c(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? r(t.value) : (e = t.value,
                    e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))).then(s, a)
                }
                c((i = i.apply(t, e || [])).next())
            }
            ))
        }
          , r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const o = n(29)
          , s = n(17)
          , a = n(31)
          , c = r(n(32))
          , l = r(n(33))
          , u = r(n(34))
          , h = n(20)
          , d = n(16)
          , f = n(21);
        class p {
            static initialize(t) {
                return i(this, void 0, void 0, (function*() {
                    const e = new p
                      , n = t.engine || p.defaultEnginePath;
                    e.bridge = yield o.WorkerBridge.initialize(n);
                    const i = [t.licenseKey, n, window.location.hostname, d.Constants.CDN_PATH];
                    return e.initialized = yield e.bridge.post("initialize", i),
                    e.initialized && (p.instance = e),
                    e
                }
                ))
            }
            createDocumentScanner(t) {
                return i(this, void 0, void 0, (function*() {
                    const e = n(36);
                    return yield e.default.create(t)
                }
                ))
            }
            createBarcodeScanner(t) {
                return i(this, void 0, void 0, (function*() {
                    const e = n(44);
                    return yield e.default.create(t)
                }
                ))
            }
            openCroppingView(t) {
                return i(this, void 0, void 0, (function*() {
                    const e = n(48);
                    return yield e.default.create(t)
                }
                ))
            }
            toDataUrl(t) {
                return i(this, void 0, void 0, (function*() {
                    return this.throwIfMissingBuffer(t),
                    yield h.ImageUtils.toDataUrl(t)
                }
                ))
            }
            applyFilter(t, e) {
                return i(this, void 0, void 0, (function*() {
                    return this.throwIfMissingBuffer(t),
                    yield this.bridge.post("applyFilter", [t, e])
                }
                ))
            }
            rotateImageCcw(t, e) {
                return i(this, void 0, void 0, (function*() {
                    return this.throwIfMissingBuffer(t),
                    yield this.bridge.post("rotateImageCcw", [t, e])
                }
                ))
            }
            cropAndRotateImageCcw(t, e, n) {
                return i(this, void 0, void 0, (function*() {
                    return this.throwIfMissingBuffer(t),
                    this.throwIfMissing(e, "Polygon may not be null"),
                    yield this.bridge.post("cropAndRotateImageCcw", [t, e, n])
                }
                ))
            }
            detectDocument(t, e, n) {
                return i(this, void 0, void 0, (function*() {
                    return this.throwIfMissingBuffer(t),
                    yield this.bridge.post("detectDocumentOnImage", [t, e || s.DocumentScannerConfiguration.DEFAULT_ACCEPTED_ANGLE_SCORE, n || s.DocumentScannerConfiguration.DEFAULT_ACCEPTED_SIZE_SCORE])
                }
                ))
            }
            detectBarcodes(t) {
                return i(this, void 0, void 0, (function*() {
                    return this.throwIfMissingBuffer(t),
                    new Promise((e=>{
                        const n = document.createElement("canvas")
                          , r = document.createElement("img");
                        r.src = t,
                        r.onload = ()=>i(this, void 0, void 0, (function*() {
                            n.width = r.width,
                            n.height = r.height;
                            const t = n.getContext("2d");
                            t.drawImage(r, 0, 0);
                            const i = t.getImageData(0, 0, r.width, r.height)
                              , o = yield this.bridge.post("recognizeBarcodes", [i, {}]);
                            e(f.BarcodeResult.fromWorker(o, i))
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            getLicenseInfo() {
                return i(this, void 0, void 0, (function*() {
                    const t = yield this.bridge.post("getLicenseInfo", []);
                    return a.LicenseInfo.fromJson(t)
                }
                ))
            }
            beginPdf(t={}) {
                return i(this, void 0, void 0, (function*() {
                    return new c.default(this,yield this.bridge.post("beginPdf", [t]))
                }
                ))
            }
            beginTiff(t={}) {
                return i(this, void 0, void 0, (function*() {
                    return new l.default(this,yield this.bridge.post("beginTiff", [t]))
                }
                ))
            }
            get utils() {
                return this._utils || (this._utils = new u.default),
                this._utils
            }
            throwIfMissingBuffer(t) {
                this.throwIfMissing(t, "ImageBuffer may not be null")
            }
            throwIfMissing(t, e) {
                if (!t)
                    throw new Error(e)
            }
        }
        e.default = p,
        p.defaultEnginePath = ""
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.ViewUtils = void 0;
        const i = n(37)
          , r = n(2)
          , o = n(1);
        e.ViewUtils = class {
            static convertLinesToViewportLines(t, e) {
                if (!e || !t)
                    return;
                const n = []
                  , {x: r, y: o, containerScale: s} = this.calculateScale(t);
                return e.forEach((t=>{
                    n.push(i.MagneticLine.scaleToLine(t, r, o, s))
                }
                )),
                n
            }
            static convertToViewportPointsFromParentSize(t, e) {
                return e ? r.Size.isEmpty(t) ? void 0 : e.map((e=>o.Point.scaleUpTo(e, t))) : r.Size.toPolygon(t)
            }
            static calculateScale(t) {
                let e, n = 0, i = 0;
                return 1 > t.width / t.height ? (e = t.height / 1,
                n = (1 - t.width / e) / 2) : (e = t.width / 1,
                i = (1 - t.height / e) / 2),
                {
                    x: n,
                    y: i,
                    containerScale: e
                }
            }
            static findScale(t, e) {
                let n, i = 0, r = 0;
                return e.ratio(!0) > t.ratio(!0) ? (n = t.width / e.width,
                r = (e.height - t.height / n) / 2) : (n = t.height / e.height,
                i = (e.width - t.width / n) / 2),
                {
                    x: i,
                    y: r,
                    scale: n
                }
            }
            static disableScreenMovement() {
                document.addEventListener("touchmove", (t=>t.preventDefault()), {
                    passive: !1
                })
            }
            static enableScreenMovement() {
                document.removeEventListener("touchmove", (t=>t.preventDefault()))
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.DocumentPolygon = void 0;
        const r = i(n(0));
        class o extends r.default.Component {
            constructor() {
                super(...arguments),
                this.LINE_COUNT = 4
            }
            render() {
                return r.default.createElement("svg", {
                    style: {
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        overflow: "visible"
                    }
                }, this.fill())
            }
            fill() {
                if (!this.props.points || 0 === this.props.points.length)
                    return null;
                const t = [];
                for (let e = 0; e < this.LINE_COUNT; e++) {
                    const n = this.props.points[e]
                      , i = this.props.points[(e + 1) % this.LINE_COUNT];
                    t.push(r.default.createElement("line", {
                        key: e,
                        style: this.props.polygonStyle,
                        className: this.props.polygonClasses,
                        x1: n.x,
                        y1: n.y,
                        x2: i.x,
                        y2: i.y
                    }))
                }
                return t
            }
            setFrame() {
                this.forceUpdate()
            }
        }
        e.DocumentPolygon = o,
        o.CLASSNAME = "scanbot-document-outline"
    }
    , function(t, e, n) {
        "use strict";
        var i, r = function() {
            return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)),
            i
        }, o = function() {
            var t = {};
            return function(e) {
                if (void 0 === t[e]) {
                    var n = document.querySelector(e);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                        try {
                            n = n.contentDocument.head
                        } catch (t) {
                            n = null
                        }
                    t[e] = n
                }
                return t[e]
            }
        }(), s = [];
        function a(t) {
            for (var e = -1, n = 0; n < s.length; n++)
                if (s[n].identifier === t) {
                    e = n;
                    break
                }
            return e
        }
        function c(t, e) {
            for (var n = {}, i = [], r = 0; r < t.length; r++) {
                var o = t[r]
                  , c = e.base ? o[0] + e.base : o[0]
                  , l = n[c] || 0
                  , u = "".concat(c, " ").concat(l);
                n[c] = l + 1;
                var h = a(u)
                  , d = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
                -1 !== h ? (s[h].references++,
                s[h].updater(d)) : s.push({
                    identifier: u,
                    updater: g(d, e),
                    references: 1
                }),
                i.push(u)
            }
            return i
        }
        function l(t) {
            var e = document.createElement("style")
              , i = t.attributes || {};
            if (void 0 === i.nonce) {
                var r = n.nc;
                r && (i.nonce = r)
            }
            if (Object.keys(i).forEach((function(t) {
                e.setAttribute(t, i[t])
            }
            )),
            "function" == typeof t.insert)
                t.insert(e);
            else {
                var s = o(t.insert || "head");
                if (!s)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                s.appendChild(e)
            }
            return e
        }
        var u, h = (u = [],
        function(t, e) {
            return u[t] = e,
            u.filter(Boolean).join("\n")
        }
        );
        function d(t, e, n, i) {
            var r = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
            if (t.styleSheet)
                t.styleSheet.cssText = h(e, r);
            else {
                var o = document.createTextNode(r)
                  , s = t.childNodes;
                s[e] && t.removeChild(s[e]),
                s.length ? t.insertBefore(o, s[e]) : t.appendChild(o)
            }
        }
        function f(t, e, n) {
            var i = n.css
              , r = n.media
              , o = n.sourceMap;
            if (r ? t.setAttribute("media", r) : t.removeAttribute("media"),
            o && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")),
            t.styleSheet)
                t.styleSheet.cssText = i;
            else {
                for (; t.firstChild; )
                    t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(i))
            }
        }
        var p = null
          , m = 0;
        function g(t, e) {
            var n, i, r;
            if (e.singleton) {
                var o = m++;
                n = p || (p = l(e)),
                i = d.bind(null, n, o, !1),
                r = d.bind(null, n, o, !0)
            } else
                n = l(e),
                i = f.bind(null, n, e),
                r = function() {
                    !function(t) {
                        if (null === t.parentNode)
                            return !1;
                        t.parentNode.removeChild(t)
                    }(n)
                }
                ;
            return i(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                        return;
                    i(t = e)
                } else
                    r()
            }
        }
        t.exports = function(t, e) {
            (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = r());
            var n = c(t = t || [], e);
            return function(t) {
                if (t = t || [],
                "[object Array]" === Object.prototype.toString.call(t)) {
                    for (var i = 0; i < n.length; i++) {
                        var r = a(n[i]);
                        s[r].references--
                    }
                    for (var o = c(t, e), l = 0; l < n.length; l++) {
                        var u = a(n[l]);
                        0 === s[u].references && (s[u].updater(),
                        s.splice(u, 1))
                    }
                    n = o
                }
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map((function(e) {
                    var n = t(e);
                    return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n
                }
                )).join("")
            }
            ,
            e.i = function(t, n, i) {
                "string" == typeof t && (t = [[null, t, ""]]);
                var r = {};
                if (i)
                    for (var o = 0; o < this.length; o++) {
                        var s = this[o][0];
                        null != s && (r[s] = !0)
                    }
                for (var a = 0; a < t.length; a++) {
                    var c = [].concat(t[a]);
                    i && r[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n),
                    e.push(c))
                }
            }
            ,
            e
        }
    }
    , function(t, e, n) {
        var i;
        !function() {
            "use strict";
            var n = {}.hasOwnProperty;
            function r() {
                for (var t = [], e = 0; e < arguments.length; e++) {
                    var i = arguments[e];
                    if (i) {
                        var o = typeof i;
                        if ("string" === o || "number" === o)
                            t.push(i);
                        else if (Array.isArray(i)) {
                            if (i.length) {
                                var s = r.apply(null, i);
                                s && t.push(s)
                            }
                        } else if ("object" === o)
                            if (i.toString === Object.prototype.toString)
                                for (var a in i)
                                    n.call(i, a) && i[a] && t.push(a);
                            else
                                t.push(i.toString())
                    }
                }
                return t.join(" ")
            }
            t.exports ? (r.default = r,
            t.exports = r) : void 0 === (i = function() {
                return r
            }
            .apply(e, [])) || (t.exports = i)
        }()
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.Debugger = void 0;
        e.Debugger = class {
            static saveImageData(t) {
                const e = document.createElement("canvas");
                e.className = "scanbot-sdk-canvas-element",
                e.width = t.width,
                e.height = t.height,
                e.getContext("2d").putImageData(t, 0, 0),
                e.toBlob((t=>this.saveBlob(t, this.uuid() + ".png")))
            }
            static saveBlob(t, e) {
                let n = document.createElement("a");
                n.setAttribute("download", e);
                let i = URL.createObjectURL(t);
                n.setAttribute("href", i),
                n.click()
            }
            static uuid() {
                let t = "";
                const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
                  , n = e.length;
                for (let i = 0; i < 5; i++)
                    t += e.charAt(Math.floor(Math.random() * n));
                return t
            }
            static warn(t) {
                console.warn("[ScanbotSDK]", t)
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        var i = n(8)
          , r = n.n(i)()((function(t) {
            return t[1]
        }
        ));
        r.push([t.i, "\n.scanbot-shutter-fade-in {\n    opacity: 1;\n}\n\n.scanbot-shutter-fade-out {\n    opacity: 0;\n}\n\n.scanbot-shutter-rotate {\n    animation: scanbot-shutter-rotating linear infinite;\n}\n\n.scanbot-shutter-pulse-fast {\n    animation: scanbot-shutter-pulsing 1s ease-in-out infinite;\n}\n\n.scanbot-shutter-button {\n    position: relative;\n    width: 64px;\n    height: 64px;\n    left: 50%;\n    bottom: 12px;\n    transform: translate(-50%, -100%);\n}\n\n.scanbot-shutter-button-part {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transition: opacity 0.5s ease-in-out;\n}\n\n@keyframes scanbot-shutter-rotating {\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes scanbot-shutter-pulsing {\n    0% {\n        opacity: 0.25;\n    }\n    50% {\n        opacity: 0.8;\n    }\n    100% {\n        opacity: 0.25;\n    }\n}\n", ""]),
        e.a = r
    }
    , function(t, e, n) {
        "use strict";
        var i = n(8)
          , r = n.n(i)()((function(t) {
            return t[1]
        }
        ));
        r.push([t.i, "\n.scanbot-document-outline {\n    stroke: yellow;\n    stroke-width: 2px;\n    fill: none;\n}\n\n.scanbot-document-outline-ok {\n    stroke: green;\n}\n\n.scanbot-document-outline-visible {\n    opacity: 1;\n    transition: opacity .3s ease-in-out;\n}\n\n.scanbot-document-outline-hidden {\n    opacity: 0;\n    transition: opacity .3s ease-in-out;\n}\n\n.scanbot-document-hint-text {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.4);\n    color: white;\n    border-radius: 0.25em;\n    padding: 0.05em 0.3em 0.05em 0.3em;\n    font-family: sans-serif;\n    font-size: 0.9em;\n    font-weight: 300;\n}\n", ""]),
        e.a = r
    }
    , function(t, e, n) {
        "use strict";
        t.exports = n(61)
    }
    , function(t, e, n) {
        "use strict";
        var i = n(62)
          , r = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }
          , o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        }
          , s = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        }
          , a = {};
        function c(t) {
            return i.isMemo(t) ? s : a[t.$$typeof] || r
        }
        a[i.ForwardRef] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        },
        a[i.Memo] = s;
        var l = Object.defineProperty
          , u = Object.getOwnPropertyNames
          , h = Object.getOwnPropertySymbols
          , d = Object.getOwnPropertyDescriptor
          , f = Object.getPrototypeOf
          , p = Object.prototype;
        t.exports = function t(e, n, i) {
            if ("string" != typeof n) {
                if (p) {
                    var r = f(n);
                    r && r !== p && t(e, r, i)
                }
                var s = u(n);
                h && (s = s.concat(h(n)));
                for (var a = c(e), m = c(n), g = 0; g < s.length; ++g) {
                    var v = s[g];
                    if (!(o[v] || i && i[v] || m && m[v] || a && a[v])) {
                        var _ = d(n, v);
                        try {
                            l(e, v, _)
                        } catch (t) {}
                    }
                }
            }
            return e
        }
    }
    , function(t, e, n) {
        "use strict";
        var i = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/
          , r = function(t) {
            var e = {};
            return function(n) {
                return void 0 === e[n] && (e[n] = t(n)),
                e[n]
            }
        }((function(t) {
            return i.test(t) || 111 === t.charCodeAt(0) && 110 === t.charCodeAt(1) && t.charCodeAt(2) < 91
        }
        ));
        e.a = r
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.Constants = void 0;
        i(n(30));
        class r {
        }
        e.Constants = r,
        r.CDN_PATH = "https://cdn.jsdelivr.net/npm/scanbot-web-sdk@2.3.0/bundle/",
        r.DEFAULT_WASM_FOLDER = "bin/complete/"
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.DocumentScannerConfiguration = void 0;
        const i = n(18);
        class r {
            constructor() {
                this.hint = new o
            }
        }
        class o {
            constructor() {
                this.OK = "Don't move. Capturing document...",
                this.OK_SmallSize = "Move closer",
                this.OK_BadAngles = "Turn your device to<br>have a more rectangular outline",
                this.OK_BadAspectRatio = "Wrong aspect ratio - rotate your device",
                this.OK_OffCenter = "Move to the center",
                this.Error_NothingDetected = "Searching for document...",
                this.Error_Brightness = "Poor light<br>Searching for document...",
                this.Error_Noise = "Noisy background<br>Searching for document..."
            }
            find(t) {
                return this[t]
            }
        }
        class s {
            constructor() {
                this.outline = new a,
                this.captureButton = new u
            }
        }
        class a {
            constructor() {
                this.polygon = new c,
                this.label = new l
            }
        }
        class c {
        }
        class l {
        }
        class u {
            constructor() {
                this.color = "#FFF"
            }
        }
        class h extends i.ScannerConfiguration {
            constructor() {
                super(),
                this.acceptedAngleScore = h.DEFAULT_ACCEPTED_ANGLE_SCORE,
                this.acceptedSizeScore = h.DEFAULT_ACCEPTED_SIZE_SCORE,
                this.autoCaptureEnabled = !0,
                this.autoCaptureSensitivity = .66,
                this.ignoreBadAspectRatio = !0,
                this.onDocumentDetected = function(t) {}
                ,
                this.text = new r,
                this.style = new s
            }
            static fromJson(t) {
                const e = new h;
                if (this.mapValues(t, e, ["text", "style", "videoConstraints"]),
                t.style) {
                    this.mapValues(t.style, e.style, ["outline", "captureButton"]);
                    const n = t.style.outline;
                    if (n) {
                        this.mapValues(n, e.style.outline, ["polygon", "label"]);
                        const t = n.polygon;
                        t && this.mapValues(t, e.style.outline.polygon);
                        const i = n.label;
                        i && this.mapValues(i, e.style.outline.label)
                    }
                    const i = t.style.captureButton;
                    i && this.mapValues(i, e.style.captureButton)
                }
                return this.mapVideoConstraints(t, e),
                e
            }
        }
        e.DocumentScannerConfiguration = h
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.ScannerConfiguration = void 0;
        const i = n(19);
        class r extends i.BaseConfiguration {
            constructor() {
                super(...arguments),
                this.videoConstraints = {
                    width: {
                        ideal: r.DEFAULT_VIDEO_WIDTH
                    },
                    height: {
                        ideal: r.DEFAULT_VIDEO_HEIGHT
                    },
                    facingMode: "environment",
                    resizeMode: "none",
                    experimental: {
                        focusMode: "continous",
                        focusDistance: 0
                    }
                },
                this.mirrored = !1,
                this.onError = function(t) {}
            }
            static mapVideoConstraints(t, e) {
                t.videoConstraints && this.mapValues(t.videoConstraints, e.videoConstraints)
            }
        }
        e.ScannerConfiguration = r,
        r.DEFAULT_VIDEO_WIDTH = 3840,
        r.DEFAULT_VIDEO_HEIGHT = 2160,
        r.DEFAULT_ACCEPTED_ANGLE_SCORE = 75,
        r.DEFAULT_ACCEPTED_SIZE_SCORE = 75
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.BaseConfiguration = void 0;
        e.BaseConfiguration = class {
            constructor() {
                this.containerId = void 0
            }
            static mapValues(t, e, n) {
                Object.keys(t).forEach((i=>{
                    (null == n ? void 0 : n.includes(i)) || (e[i] = t[i])
                }
                ))
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.ImageUtils = void 0;
        const i = n(3);
        e.ImageUtils = class {
            static toDataUrl(t) {
                return new Promise(((e,n)=>{
                    const i = new Blob([t],{
                        type: "image/jpeg"
                    })
                      , r = new FileReader;
                    r.onload = ()=>e(r.result),
                    r.onerror = ()=>n(r.error),
                    r.readAsDataURL(i)
                }
                ))
            }
            static getObjectFitSize(t, e, n=!0) {
                const r = e.width / e.height
                  , o = t.width / t.height;
                let s = 0
                  , a = 0;
                (n ? r > o : r < o) ? (s = t.width,
                a = s / r) : (a = t.height,
                s = a * r);
                const c = (t.width - s) / 2
                  , l = (t.height - a) / 2;
                return new i.Frame(c,l,s,a)
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.BarcodeResult = void 0;
        const i = n(35);
        class r {
            constructor(t, e) {
                this.barcodes = t,
                this.imageData = e
            }
            static fromWorker(t, e) {
                const n = [];
                return t.forEach((t=>{
                    n.push(i.Barcode.fromWorker(t))
                }
                )),
                new r(n,e)
            }
            isEmpty() {
                return 0 === this.barcodes.length
            }
        }
        e.BarcodeResult = r
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.ScannerView = e.ScanbotCameraState = e.ScanbotCameraProps = void 0;
        const r = i(n(0))
          , o = n(0)
          , s = i(n(4));
        e.ScanbotCameraProps = class {
        }
        ;
        e.ScanbotCameraState = class {
        }
        ;
        class a extends r.default.Component {
            constructor() {
                super(...arguments),
                this.onVideoReady = ()=>{
                    const {onReady: t} = this.props;
                    t && t(this)
                }
                ,
                this.onVideoError = t=>{
                    const {onError: e} = this.props;
                    e && e(t)
                }
            }
            get bridge() {
                return s.default.instance.bridge
            }
            dispose() {
                const {container: t} = this.props;
                if (!t)
                    throw Error("Component wasn't created with createDocumentScanner. Remove component from render tree to dispose.");
                this.componentWillUnmount(),
                o.render(null, t)
            }
            componentDidMount() {
                this.disposed = !1
            }
            componentWillUnmount() {
                this.disposed = !0
            }
            isSupported() {
                return "localhost" === location.hostname || "https:" === location.protocol
            }
        }
        e.ScannerView = a,
        a.DEFAULT_DETECTION_RESOLUTION = 600
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const r = i(n(0))
          , o = i(n(43))
          , s = n(2)
          , a = n(3)
          , c = n(10);
        class l extends r.default.Component {
            constructor() {
                super(...arguments),
                this.save = !1,
                this.onStreamChanged = t=>{
                    this.video.srcObject = t
                }
            }
            videoSize() {
                return this.calculateFrameSize(0)
            }
            saveExtractedData() {
                this.save = !0
            }
            createImageData(t=0) {
                var e;
                if (this.ctx || this.getCanvas(),
                !this.ctx)
                    return;
                if (!this.video)
                    return;
                const {videoWidth: n, videoHeight: i} = this.video
                  , {width: r, height: o} = this.calculateFrameSize(t)
                  , s = null !== (e = this.cutout) && void 0 !== e ? e : new a.Frame(0,0,r,o);
                this.ctx.drawImage(this.video, 0, 0, n, i, 0, 0, r, o);
                const l = this.ctx.getImageData(s.x, s.y, s.width, s.height);
                return this.save && (console.log("frame", s),
                c.Debugger.saveImageData(l),
                this.save = !1),
                l
            }
            calculateFrameSize(t) {
                const {videoWidth: e, videoHeight: n} = this.video;
                let i = e
                  , r = n;
                if (t > 0 && 0 != e && 0 != n) {
                    const o = e / n;
                    e < n ? (i = e < t ? e : t,
                    r = i / o) : (r = n < t ? n : t,
                    i = r * o)
                }
                return new s.Size(i,r)
            }
            getCanvas() {
                return this.video ? 0 === this.video.videoWidth ? null : (this.ctx || (this.canvas = document.createElement("canvas"),
                this.canvas.className = "scanbot-sdk-canvas-element",
                this.canvas.width = this.video.videoWidth,
                this.canvas.height = this.video.videoHeight,
                this.ctx = this.canvas.getContext("2d")),
                this.canvas) : null
            }
            componentWillUnmount() {
                this.canvas = null,
                this.ctx = null
            }
            style() {
                const t = {
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                };
                return this.props.mirrored && (t.transform = "scaleX(-1)"),
                t
            }
            render() {
                const {videoConstraints: t, onReady: e, onError: n} = this.props;
                return r.default.createElement(o.default, {
                    ref: t=>this.stream = t,
                    videoConstraints: t,
                    onReady: e,
                    onStreamChanged: this.onStreamChanged,
                    onError: n
                }, r.default.createElement("video", {
                    autoPlay: !0,
                    muted: !0,
                    playsInline: !0,
                    className: "scanbot-camera-view",
                    ref: t=>{
                        this.video = t
                    }
                    ,
                    style: this.style()
                }))
            }
        }
        e.default = l
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.DraggableBaseContainer = void 0;
        const r = i(n(0));
        class o extends r.default.Component {
            constructor() {
                super(...arguments),
                this.POINT_COUNT = 4,
                this.items = [],
                this.DRAG_BUFFER = 5
            }
            get pointSize() {
                var t, e;
                return (null === (t = this.props.style) || void 0 === t ? void 0 : t.size) ? (null === (e = this.props) || void 0 === e ? void 0 : e.scale) ? this.props.style.size / this.props.scale : this.props.style.size : 0
            }
            get pointStyle() {
                var t, e;
                return {
                    width: this.pointSize + "px",
                    height: this.pointSize + "px",
                    border: null === (t = this.props.style) || void 0 === t ? void 0 : t.border,
                    borderRadius: this.pointSize / 2 + "px",
                    backgroundColor: null === (e = this.props.style) || void 0 === e ? void 0 : e.color,
                    position: "absolute",
                    cursor: "pointer",
                    zIndex: 500
                }
            }
            nextIndex(t) {
                return (t + 1) % this.POINT_COUNT
            }
            previousIndex(t) {
                return (t - 1 + this.POINT_COUNT) % this.POINT_COUNT
            }
            isHorizontal(t) {
                return t % 2 == 0
            }
            isOutOfBounds(t, e) {
                return t < -this.DRAG_BUFFER || t > e + this.DRAG_BUFFER
            }
        }
        e.DraggableBaseContainer = o
    }
    , function(t, e) {
        t.exports = function(t, e, n, i) {
            var r = n ? n.call(i, t, e) : void 0;
            if (void 0 !== r)
                return !!r;
            if (t === e)
                return !0;
            if ("object" != typeof t || !t || "object" != typeof e || !e)
                return !1;
            var o = Object.keys(t)
              , s = Object.keys(e);
            if (o.length !== s.length)
                return !1;
            for (var a = Object.prototype.hasOwnProperty.bind(e), c = 0; c < o.length; c++) {
                var l = o[c];
                if (!a(l))
                    return !1;
                var u = t[l]
                  , h = e[l];
                if (!1 === (r = n ? n.call(i, u, h, l) : void 0) || void 0 === r && u !== h)
                    return !1
            }
            return !0
        }
    }
    , function(t, e, n) {
        "use strict";
        e.a = function(t) {
            function e(t, i, c, l, d) {
                for (var f, p, m, g, b, S = 0, C = 0, x = 0, E = 0, P = 0, T = 0, L = m = f = 0, R = 0, j = 0, N = 0, F = 0, U = c.length, B = U - 1, V = "", $ = "", H = "", W = ""; R < U; ) {
                    if (p = c.charCodeAt(R),
                    R === B && 0 !== C + E + x + S && (0 !== C && (p = 47 === C ? 10 : 47),
                    E = x = S = 0,
                    U++,
                    B++),
                    0 === C + E + x + S) {
                        if (R === B && (0 < j && (V = V.replace(h, "")),
                        0 < V.trim().length)) {
                            switch (p) {
                            case 32:
                            case 9:
                            case 59:
                            case 13:
                            case 10:
                                break;
                            default:
                                V += c.charAt(R)
                            }
                            p = 59
                        }
                        switch (p) {
                        case 123:
                            for (f = (V = V.trim()).charCodeAt(0),
                            m = 1,
                            F = ++R; R < U; ) {
                                switch (p = c.charCodeAt(R)) {
                                case 123:
                                    m++;
                                    break;
                                case 125:
                                    m--;
                                    break;
                                case 47:
                                    switch (p = c.charCodeAt(R + 1)) {
                                    case 42:
                                    case 47:
                                        t: {
                                            for (L = R + 1; L < B; ++L)
                                                switch (c.charCodeAt(L)) {
                                                case 47:
                                                    if (42 === p && 42 === c.charCodeAt(L - 1) && R + 2 !== L) {
                                                        R = L + 1;
                                                        break t
                                                    }
                                                    break;
                                                case 10:
                                                    if (47 === p) {
                                                        R = L + 1;
                                                        break t
                                                    }
                                                }
                                            R = L
                                        }
                                    }
                                    break;
                                case 91:
                                    p++;
                                case 40:
                                    p++;
                                case 34:
                                case 39:
                                    for (; R++ < B && c.charCodeAt(R) !== p; )
                                        ;
                                }
                                if (0 === m)
                                    break;
                                R++
                            }
                            switch (m = c.substring(F, R),
                            0 === f && (f = (V = V.replace(u, "").trim()).charCodeAt(0)),
                            f) {
                            case 64:
                                switch (0 < j && (V = V.replace(h, "")),
                                p = V.charCodeAt(1)) {
                                case 100:
                                case 109:
                                case 115:
                                case 45:
                                    j = i;
                                    break;
                                default:
                                    j = D
                                }
                                if (F = (m = e(i, j, m, p, d + 1)).length,
                                0 < I && (b = a(3, m, j = n(D, V, N), i, O, k, F, p, d, l),
                                V = j.join(""),
                                void 0 !== b && 0 === (F = (m = b.trim()).length) && (p = 0,
                                m = "")),
                                0 < F)
                                    switch (p) {
                                    case 115:
                                        V = V.replace(w, s);
                                    case 100:
                                    case 109:
                                    case 45:
                                        m = V + "{" + m + "}";
                                        break;
                                    case 107:
                                        m = (V = V.replace(v, "$1 $2")) + "{" + m + "}",
                                        m = 1 === A || 2 === A && o("@" + m, 3) ? "@-webkit-" + m + "@" + m : "@" + m;
                                        break;
                                    default:
                                        m = V + m,
                                        112 === l && ($ += m,
                                        m = "")
                                    }
                                else
                                    m = "";
                                break;
                            default:
                                m = e(i, n(i, V, N), m, l, d + 1)
                            }
                            H += m,
                            m = N = j = L = f = 0,
                            V = "",
                            p = c.charCodeAt(++R);
                            break;
                        case 125:
                        case 59:
                            if (1 < (F = (V = (0 < j ? V.replace(h, "") : V).trim()).length))
                                switch (0 === L && (f = V.charCodeAt(0),
                                45 === f || 96 < f && 123 > f) && (F = (V = V.replace(" ", ":")).length),
                                0 < I && void 0 !== (b = a(1, V, i, t, O, k, $.length, l, d, l)) && 0 === (F = (V = b.trim()).length) && (V = "\0\0"),
                                f = V.charCodeAt(0),
                                p = V.charCodeAt(1),
                                f) {
                                case 0:
                                    break;
                                case 64:
                                    if (105 === p || 99 === p) {
                                        W += V + c.charAt(R);
                                        break
                                    }
                                default:
                                    58 !== V.charCodeAt(F - 1) && ($ += r(V, f, p, V.charCodeAt(2)))
                                }
                            N = j = L = f = 0,
                            V = "",
                            p = c.charCodeAt(++R)
                        }
                    }
                    switch (p) {
                    case 13:
                    case 10:
                        47 === C ? C = 0 : 0 === 1 + f && 107 !== l && 0 < V.length && (j = 1,
                        V += "\0"),
                        0 < I * z && a(0, V, i, t, O, k, $.length, l, d, l),
                        k = 1,
                        O++;
                        break;
                    case 59:
                    case 125:
                        if (0 === C + E + x + S) {
                            k++;
                            break
                        }
                    default:
                        switch (k++,
                        g = c.charAt(R),
                        p) {
                        case 9:
                        case 32:
                            if (0 === E + S + C)
                                switch (P) {
                                case 44:
                                case 58:
                                case 9:
                                case 32:
                                    g = "";
                                    break;
                                default:
                                    32 !== p && (g = " ")
                                }
                            break;
                        case 0:
                            g = "\\0";
                            break;
                        case 12:
                            g = "\\f";
                            break;
                        case 11:
                            g = "\\v";
                            break;
                        case 38:
                            0 === E + C + S && (j = N = 1,
                            g = "\f" + g);
                            break;
                        case 108:
                            if (0 === E + C + S + M && 0 < L)
                                switch (R - L) {
                                case 2:
                                    112 === P && 58 === c.charCodeAt(R - 3) && (M = P);
                                case 8:
                                    111 === T && (M = T)
                                }
                            break;
                        case 58:
                            0 === E + C + S && (L = R);
                            break;
                        case 44:
                            0 === C + x + E + S && (j = 1,
                            g += "\r");
                            break;
                        case 34:
                        case 39:
                            0 === C && (E = E === p ? 0 : 0 === E ? p : E);
                            break;
                        case 91:
                            0 === E + C + x && S++;
                            break;
                        case 93:
                            0 === E + C + x && S--;
                            break;
                        case 41:
                            0 === E + C + S && x--;
                            break;
                        case 40:
                            if (0 === E + C + S) {
                                if (0 === f)
                                    switch (2 * P + 3 * T) {
                                    case 533:
                                        break;
                                    default:
                                        f = 1
                                    }
                                x++
                            }
                            break;
                        case 64:
                            0 === C + x + E + S + L + m && (m = 1);
                            break;
                        case 42:
                        case 47:
                            if (!(0 < E + S + x))
                                switch (C) {
                                case 0:
                                    switch (2 * p + 3 * c.charCodeAt(R + 1)) {
                                    case 235:
                                        C = 47;
                                        break;
                                    case 220:
                                        F = R,
                                        C = 42
                                    }
                                    break;
                                case 42:
                                    47 === p && 42 === P && F + 2 !== R && (33 === c.charCodeAt(F + 2) && ($ += c.substring(F, R + 1)),
                                    g = "",
                                    C = 0)
                                }
                        }
                        0 === C && (V += g)
                    }
                    T = P,
                    P = p,
                    R++
                }
                if (0 < (F = $.length)) {
                    if (j = i,
                    0 < I && (void 0 !== (b = a(2, $, j, t, O, k, F, l, d, l)) && 0 === ($ = b).length))
                        return W + $ + H;
                    if ($ = j.join(",") + "{" + $ + "}",
                    0 != A * M) {
                        switch (2 !== A || o($, 2) || (M = 0),
                        M) {
                        case 111:
                            $ = $.replace(y, ":-moz-$1") + $;
                            break;
                        case 112:
                            $ = $.replace(_, "::-webkit-input-$1") + $.replace(_, "::-moz-$1") + $.replace(_, ":-ms-input-$1") + $
                        }
                        M = 0
                    }
                }
                return W + $ + H
            }
            function n(t, e, n) {
                var r = e.trim().split(m);
                e = r;
                var o = r.length
                  , s = t.length;
                switch (s) {
                case 0:
                case 1:
                    var a = 0;
                    for (t = 0 === s ? "" : t[0] + " "; a < o; ++a)
                        e[a] = i(t, e[a], n).trim();
                    break;
                default:
                    var c = a = 0;
                    for (e = []; a < o; ++a)
                        for (var l = 0; l < s; ++l)
                            e[c++] = i(t[l] + " ", r[a], n).trim()
                }
                return e
            }
            function i(t, e, n) {
                var i = e.charCodeAt(0);
                switch (33 > i && (i = (e = e.trim()).charCodeAt(0)),
                i) {
                case 38:
                    return e.replace(g, "$1" + t.trim());
                case 58:
                    return t.trim() + e.replace(g, "$1" + t.trim());
                default:
                    if (0 < 1 * n && 0 < e.indexOf("\f"))
                        return e.replace(g, (58 === t.charCodeAt(0) ? "" : "$1") + t.trim())
                }
                return t + e
            }
            function r(t, e, n, i) {
                var s = t + ";"
                  , a = 2 * e + 3 * n + 4 * i;
                if (944 === a) {
                    t = s.indexOf(":", 9) + 1;
                    var c = s.substring(t, s.length - 1).trim();
                    return c = s.substring(0, t).trim() + c + ";",
                    1 === A || 2 === A && o(c, 1) ? "-webkit-" + c + c : c
                }
                if (0 === A || 2 === A && !o(s, 1))
                    return s;
                switch (a) {
                case 1015:
                    return 97 === s.charCodeAt(10) ? "-webkit-" + s + s : s;
                case 951:
                    return 116 === s.charCodeAt(3) ? "-webkit-" + s + s : s;
                case 963:
                    return 110 === s.charCodeAt(5) ? "-webkit-" + s + s : s;
                case 1009:
                    if (100 !== s.charCodeAt(4))
                        break;
                case 969:
                case 942:
                    return "-webkit-" + s + s;
                case 978:
                    return "-webkit-" + s + "-moz-" + s + s;
                case 1019:
                case 983:
                    return "-webkit-" + s + "-moz-" + s + "-ms-" + s + s;
                case 883:
                    if (45 === s.charCodeAt(8))
                        return "-webkit-" + s + s;
                    if (0 < s.indexOf("image-set(", 11))
                        return s.replace(P, "$1-webkit-$2") + s;
                    break;
                case 932:
                    if (45 === s.charCodeAt(4))
                        switch (s.charCodeAt(5)) {
                        case 103:
                            return "-webkit-box-" + s.replace("-grow", "") + "-webkit-" + s + "-ms-" + s.replace("grow", "positive") + s;
                        case 115:
                            return "-webkit-" + s + "-ms-" + s.replace("shrink", "negative") + s;
                        case 98:
                            return "-webkit-" + s + "-ms-" + s.replace("basis", "preferred-size") + s
                        }
                    return "-webkit-" + s + "-ms-" + s + s;
                case 964:
                    return "-webkit-" + s + "-ms-flex-" + s + s;
                case 1023:
                    if (99 !== s.charCodeAt(8))
                        break;
                    return "-webkit-box-pack" + (c = s.substring(s.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + s + "-ms-flex-pack" + c + s;
                case 1005:
                    return f.test(s) ? s.replace(d, ":-webkit-") + s.replace(d, ":-moz-") + s : s;
                case 1e3:
                    switch (e = (c = s.substring(13).trim()).indexOf("-") + 1,
                    c.charCodeAt(0) + c.charCodeAt(e)) {
                    case 226:
                        c = s.replace(b, "tb");
                        break;
                    case 232:
                        c = s.replace(b, "tb-rl");
                        break;
                    case 220:
                        c = s.replace(b, "lr");
                        break;
                    default:
                        return s
                    }
                    return "-webkit-" + s + "-ms-" + c + s;
                case 1017:
                    if (-1 === s.indexOf("sticky", 9))
                        break;
                case 975:
                    switch (e = (s = t).length - 10,
                    a = (c = (33 === s.charCodeAt(e) ? s.substring(0, e) : s).substring(t.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | c.charCodeAt(7))) {
                    case 203:
                        if (111 > c.charCodeAt(8))
                            break;
                    case 115:
                        s = s.replace(c, "-webkit-" + c) + ";" + s;
                        break;
                    case 207:
                    case 102:
                        s = s.replace(c, "-webkit-" + (102 < a ? "inline-" : "") + "box") + ";" + s.replace(c, "-webkit-" + c) + ";" + s.replace(c, "-ms-" + c + "box") + ";" + s
                    }
                    return s + ";";
                case 938:
                    if (45 === s.charCodeAt(5))
                        switch (s.charCodeAt(6)) {
                        case 105:
                            return c = s.replace("-items", ""),
                            "-webkit-" + s + "-webkit-box-" + c + "-ms-flex-" + c + s;
                        case 115:
                            return "-webkit-" + s + "-ms-flex-item-" + s.replace(C, "") + s;
                        default:
                            return "-webkit-" + s + "-ms-flex-line-pack" + s.replace("align-content", "").replace(C, "") + s
                        }
                    break;
                case 973:
                case 989:
                    if (45 !== s.charCodeAt(3) || 122 === s.charCodeAt(4))
                        break;
                case 931:
                case 953:
                    if (!0 === E.test(t))
                        return 115 === (c = t.substring(t.indexOf(":") + 1)).charCodeAt(0) ? r(t.replace("stretch", "fill-available"), e, n, i).replace(":fill-available", ":stretch") : s.replace(c, "-webkit-" + c) + s.replace(c, "-moz-" + c.replace("fill-", "")) + s;
                    break;
                case 962:
                    if (s = "-webkit-" + s + (102 === s.charCodeAt(5) ? "-ms-" + s : "") + s,
                    211 === n + i && 105 === s.charCodeAt(13) && 0 < s.indexOf("transform", 10))
                        return s.substring(0, s.indexOf(";", 27) + 1).replace(p, "$1-webkit-$2") + s
                }
                return s
            }
            function o(t, e) {
                var n = t.indexOf(1 === e ? ":" : "{")
                  , i = t.substring(0, 3 !== e ? n : 10);
                return n = t.substring(n + 1, t.length - 1),
                L(2 !== e ? i : i.replace(x, "$1"), n, e)
            }
            function s(t, e) {
                var n = r(e, e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2));
                return n !== e + ";" ? n.replace(S, " or ($1)").substring(4) : "(" + e + ")"
            }
            function a(t, e, n, i, r, o, s, a, c, u) {
                for (var h, d = 0, f = e; d < I; ++d)
                    switch (h = T[d].call(l, t, f, n, i, r, o, s, a, c, u)) {
                    case void 0:
                    case !1:
                    case !0:
                    case null:
                        break;
                    default:
                        f = h
                    }
                if (f !== e)
                    return f
            }
            function c(t) {
                return void 0 !== (t = t.prefix) && (L = null,
                t ? "function" != typeof t ? A = 1 : (A = 2,
                L = t) : A = 0),
                c
            }
            function l(t, n) {
                var i = t;
                if (33 > i.charCodeAt(0) && (i = i.trim()),
                i = [i],
                0 < I) {
                    var r = a(-1, n, i, i, O, k, 0, 0, 0, 0);
                    void 0 !== r && "string" == typeof r && (n = r)
                }
                var o = e(D, i, n, 0, 0);
                return 0 < I && (void 0 !== (r = a(-2, o, i, i, O, k, o.length, 0, 0, 0)) && (o = r)),
                "",
                M = 0,
                k = O = 1,
                o
            }
            var u = /^\0+/g
              , h = /[\0\r\f]/g
              , d = /: */g
              , f = /zoo|gra/
              , p = /([,: ])(transform)/g
              , m = /,\r+?/g
              , g = /([\t\r\n ])*\f?&/g
              , v = /@(k\w+)\s*(\S*)\s*/
              , _ = /::(place)/g
              , y = /:(read-only)/g
              , b = /[svh]\w+-[tblr]{2}/
              , w = /\(\s*(.*)\s*\)/g
              , S = /([\s\S]*?);/g
              , C = /-self|flex-/g
              , x = /[^]*?(:[rp][el]a[\w-]+)[^]*/
              , E = /stretch|:\s*\w+\-(?:conte|avail)/
              , P = /([^-])(image-set\()/
              , k = 1
              , O = 1
              , M = 0
              , A = 1
              , D = []
              , T = []
              , I = 0
              , L = null
              , z = 0;
            return l.use = function t(e) {
                switch (e) {
                case void 0:
                case null:
                    I = T.length = 0;
                    break;
                default:
                    if ("function" == typeof e)
                        T[I++] = e;
                    else if ("object" == typeof e)
                        for (var n = 0, i = e.length; n < i; ++n)
                            t(e[n]);
                    else
                        z = 0 | !!e
                }
                return t
            }
            ,
            l.set = c,
            void 0 !== t && c(t),
            l
        }
    }
    , function(t, e, n) {
        "use strict";
        e.a = {
            animationIterationCount: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1
        }
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.ScanbotSDK = void 0;
        const r = i(n(4));
        e.ScanbotSDK = r.default
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__awaiter || function(t, e, n, i) {
            return new (n || (n = Promise))((function(r, o) {
                function s(t) {
                    try {
                        c(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? r(t.value) : (e = t.value,
                    e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))).then(s, a)
                }
                c((i = i.apply(t, e || [])).next())
            }
            ))
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.WorkerBridge = void 0;
        const r = n(16);
        class o {
            constructor() {
                this.ASM_JS = "ScanbotSDK.Core.js"
            }
            static initialize(t) {
                return i(this, void 0, void 0, (function*() {
                    const e = new o;
                    if (t || (t = r.Constants.CDN_PATH),
                    t += e.ASM_JS,
                    e.continuations = {},
                    e.isRemote(t)) {
                        const n = new Blob([`importScripts("${t}")`]);
                        e.instance = new Worker(URL.createObjectURL(n))
                    } else
                        e.instance = new Worker(t);
                    const n = e;
                    return e.instance.onmessage = function(t) {
                        const {ticket: e, result: i, error: r} = t.data
                          , {resolve: o, reject: s} = n.continuations[e];
                        delete n.continuations[e],
                        r ? s(r) : o(i)
                    }
                    ,
                    e
                }
                ))
            }
            post(t, e) {
                return new Promise(((n,i)=>{
                    const r = Math.random().toString(36);
                    this.continuations[r] = {
                        resolve: n,
                        reject: i
                    },
                    this.instance.postMessage({
                        command: t,
                        args: e,
                        ticket: r
                    })
                }
                ))
            }
            isRemote(t) {
                return -1 !== t.indexOf("http")
            }
        }
        e.WorkerBridge = o
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = ""
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.LicenseInfo = void 0;
        class i {
            isValid() {
                return "Okay" === this.status
            }
            static fromJson(t) {
                const e = new i;
                return e.status = t.licenseStatus,
                e.description = t.description,
                e
            }
        }
        e.LicenseInfo = i
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__awaiter || function(t, e, n, i) {
            return new (n || (n = Promise))((function(r, o) {
                function s(t) {
                    try {
                        c(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? r(t.value) : (e = t.value,
                    e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))).then(s, a)
                }
                c((i = i.apply(t, e || [])).next())
            }
            ))
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = class {
            constructor(t, e) {
                this._sdk = t,
                this._pdfOperation = e
            }
            addPage(t) {
                return i(this, void 0, void 0, (function*() {
                    yield this._sdk.bridge.post("addPageToPdf", [this._pdfOperation, t])
                }
                ))
            }
            complete() {
                return i(this, void 0, void 0, (function*() {
                    return yield this._sdk.bridge.post("completePdf", [this._pdfOperation])
                }
                ))
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__awaiter || function(t, e, n, i) {
            return new (n || (n = Promise))((function(r, o) {
                function s(t) {
                    try {
                        c(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? r(t.value) : (e = t.value,
                    e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))).then(s, a)
                }
                c((i = i.apply(t, e || [])).next())
            }
            ))
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = class {
            constructor(t, e) {
                this._sdk = t,
                this._tiffOperation = e
            }
            addPage(t) {
                return i(this, void 0, void 0, (function*() {
                    yield this._sdk.bridge.post("addPageToTiff", [this._tiffOperation, t])
                }
                ))
            }
            complete() {
                return i(this, void 0, void 0, (function*() {
                    return yield this._sdk.bridge.post("completeTiff", [this._tiffOperation])
                }
                ))
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = class {
            isCameraSupported() {
                return !!navigator.mediaDevices
            }
            flash() {
                let t = this.findFlashElement();
                t.style.display = "block",
                this.animateFlashOpacity("0.5", (()=>{
                    this.animateFlashOpacity("0.0", (()=>{
                        t.style.opacity = "1.0",
                        t.style.display = "none"
                    }
                    ))
                }
                ))
            }
            findFlashElement() {
                return this.getOrCreateElement("flash", {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    "background-color": "#fff",
                    display: "none",
                    "z-index": "5000"
                })
            }
            animateFlashOpacity(t, e) {
                const n = this.getElementByClassName("flash");
                setTimeout((()=>{
                    n.style.opacity = t,
                    e()
                }
                ), 150)
            }
            getOrCreateElement(t, e) {
                let n = this.getElementByClassName(t);
                return n || (this.createElement(t, e),
                n = this.getElementByClassName(t)),
                n
            }
            createElement(t, e) {
                let n = document.createElement("div");
                n.className = t,
                n.style.cssText = this.cssToString(e),
                document.body.append(n)
            }
            cssToString(t) {
                let e = "";
                return Object.keys(t).forEach((n=>{
                    e += n + ":" + t[n] + ";"
                }
                )),
                e
            }
            getElementByClassName(t) {
                const e = document.getElementsByClassName(t);
                if (0 !== e.length)
                    return e[0]
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.Barcode = void 0;
        class i {
            constructor(t, e, n) {
                this.format = t,
                this.text = e,
                this.rawBytes = n
            }
            static fromWorker(t) {
                return new i(t.format,t.text,t.rawBytes)
            }
        }
        e.Barcode = i
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__awaiter || function(t, e, n, i) {
            return new (n || (n = Promise))((function(r, o) {
                function s(t) {
                    try {
                        c(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? r(t.value) : (e = t.value,
                    e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))).then(s, a)
                }
                c((i = i.apply(t, e || [])).next())
            }
            ))
        }
          , r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const o = r(n(0))
          , s = n(0)
          , a = r(n(4))
          , c = n(17)
          , l = n(5)
          , u = n(2)
          , h = n(1)
          , d = n(22)
          , f = n(38)
          , p = n(40)
          , m = r(n(23));
        d.ScanbotCameraState;
        d.ScanbotCameraProps;
        class g extends d.ScannerView {
            constructor(t) {
                if (super(t),
                this.defaultCaptureButtonClick = ()=>i(this, void 0, void 0, (function*() {
                    const t = yield this.detectAndCrop();
                    this.configuration.onDocumentDetected(t)
                }
                )),
                this.state = {
                    action: this.defaultAction
                },
                !this.isSupported()) {
                    throw Error("Camera can only be accessed if the content is served via HTTPS, or on localhost. Check DocumentScannerView.isSupported() before creating the scanner.")
                }
                if (!a.default.instance)
                    throw Error("Initialize the SDK by calling ScanbotSDK.initialize() before using the document scanner.")
            }
            get defaultAction() {
                return this.isAutoCaptureEnabled() ? "searching" : "manual"
            }
            get enabled() {
                return ("searching" == this.state.action || "capturing" == this.state.action || "manual" == this.state.action) && !this.disposed
            }
            get configuration() {
                return c.DocumentScannerConfiguration.fromJson(this.props.configuration)
            }
            static create(t) {
                return i(this, void 0, void 0, (function*() {
                    const e = document.getElementById(t.containerId);
                    if (!e)
                        throw Error("Unable to initialize ScanbotSDK: Cannot find container element with the id provided.");
                    return new Promise(((n,i)=>{
                        s.render(o.default.createElement(g, {
                            container: e,
                            configuration: t,
                            onReady: n,
                            onError: i
                        }), e)
                    }
                    ))
                }
                ))
            }
            detectAndCrop() {
                return i(this, void 0, void 0, (function*() {
                    try {
                        const t = this.camera.createImageData();
                        if (!t)
                            return;
                        this.setState({
                            action: "processing"
                        });
                        const e = yield this.bridge.post("detectAndCropDocument", [t]);
                        return e.videoSize = this.camera.videoSize(),
                        e
                    } finally {
                        this.setState({
                            action: this.defaultAction
                        })
                    }
                }
                ))
            }
            enableAutoCapture() {
                this.updateAutoCapture(!0)
            }
            disableAutoCapture() {
                this.updateAutoCapture(!1)
            }
            updateAutoCapture(t) {
                this.props.configuration.autoCaptureEnabled = t,
                this.setState({
                    action: this.defaultAction
                })
            }
            isAutoCaptureEnabled() {
                return this.configuration.autoCaptureEnabled
            }
            componentDidMount() {
                super.componentDidMount(),
                this.detect()
            }
            componentWillUnmount() {
                super.componentWillUnmount(),
                this.handleAutoCapture(!1)
            }
            detect() {
                return i(this, void 0, void 0, (function*() {
                    try {
                        if (!this.enabled)
                            return;
                        const t = yield this.detectInWebWorker();
                        if (!this.enabled)
                            return;
                        if (!t)
                            return;
                        if (!this.outline)
                            return;
                        const e = this.getStatusString(t)
                          , n = "OK" === e;
                        let i = t.polygon;
                        if (i) {
                            const t = this.camera.calculateFrameSize(g.DEFAULT_DETECTION_RESOLUTION)
                              , e = u.Size.fromHtmlElement(this.camera.video)
                              , n = l.ViewUtils.findScale(e, t);
                            i = l.ViewUtils.convertToViewportPointsFromParentSize(t, i),
                            i = i.map((t=>h.Point.scaleToPoint(t, n.x, n.y, n.scale)))
                        }
                        this.outline.update(n, i, this.configuration.text.hint.find(e)),
                        yield this.handleAutoCapture(n)
                    } finally {
                        requestAnimationFrame(this.detect.bind(this))
                    }
                }
                ))
            }
            getStatusString(t) {
                return this.configuration.ignoreBadAspectRatio && "OK_BadAspectRatio" === t.detectionStatus ? "OK" : t.detectionStatus
            }
            detectInWebWorker() {
                return i(this, void 0, void 0, (function*() {
                    const t = this.camera.createImageData(d.ScannerView.DEFAULT_DETECTION_RESOLUTION);
                    if (!t)
                        return;
                    const e = [t, this.configuration.acceptedAngleScore, this.configuration.acceptedSizeScore];
                    return yield this.bridge.post("detectDocument", e)
                }
                ))
            }
            handleAutoCapture(t) {
                return i(this, void 0, void 0, (function*() {
                    if (this.configuration.autoCaptureEnabled)
                        if (t && !this.autoCaptureToken) {
                            this.updateButton("capturing");
                            const t = 3e3 * (1 - this.configuration.autoCaptureSensitivity);
                            this.autoCaptureToken = setTimeout((()=>i(this, void 0, void 0, (function*() {
                                if (this.autoCaptureToken = void 0,
                                !this.enabled)
                                    return;
                                const t = yield this.detectAndCrop();
                                this.configuration.autoCaptureEnabled && t.success && this.configuration.onDocumentDetected && this.configuration.onDocumentDetected(t)
                            }
                            ))), t)
                        } else
                            !t && this.autoCaptureToken && (this.updateButton("searching"),
                            clearTimeout(this.autoCaptureToken),
                            this.autoCaptureToken = void 0)
                }
                ))
            }
            updateButton(t) {
                this.setState({
                    action: t
                })
            }
            render() {
                var t, e, n, i, r;
                const {action: s} = this.state
                  , {configuration: a} = this
                  , c = null === (t = a.style) || void 0 === t ? void 0 : t.captureButton;
                return o.default.createElement("div", {
                    style: {
                        position: "relative",
                        width: "100%",
                        height: "100%"
                    }
                }, o.default.createElement(m.default, {
                    videoConstraints: a.videoConstraints,
                    mirrored: a.mirrored,
                    onReady: this.onVideoReady,
                    onError: this.onVideoError,
                    ref: t=>{
                        this.camera = t
                    }
                }), o.default.createElement(p.DocumentOutline, {
                    style: {
                        polygon: null === (n = null === (e = a.style) || void 0 === e ? void 0 : e.outline) || void 0 === n ? void 0 : n.polygon,
                        label: null === (r = null === (i = a.style) || void 0 === i ? void 0 : i.outline) || void 0 === r ? void 0 : r.label
                    },
                    showLabel: "searching" == s || "capturing" == s,
                    visible: "processing" != s,
                    ref: t=>{
                        this.outline = t
                    }
                }), o.default.createElement(f.ShutterButton, {
                    color: (null == c ? void 0 : c.color) ? c.color : "FFF",
                    action: s,
                    onClick: a.onCaptureButtonClick || this.defaultCaptureButtonClick
                }))
            }
        }
        e.default = g
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.MagneticLine = void 0;
        const i = n(1);
        class r {
            constructor(t, e) {
                this.p1 = t,
                this.p2 = e
            }
            static scaleToLine(t, e, n, o) {
                const s = new i.Point(o * (t.p1.x - e),o * (t.p1.y - n))
                  , a = new i.Point(o * (t.p2.x - e),o * (t.p2.y - n));
                return new r(s,a)
            }
        }
        e.MagneticLine = r
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.ShutterButton = e.ShutterButtonProps = void 0;
        const r = i(n(0));
        n(39);
        const o = i(n(9));
        e.ShutterButtonProps = class {
        }
        ;
        class s {
            constructor(t) {
                this.lastTime = 0,
                this.lastDuration = 0,
                this.t = 0,
                this.element = null,
                this.animationClass = "",
                this.animationClass = t
            }
            setDuration(t) {
                const e = Date.now() / 1e3
                  , n = e - this.lastTime;
                this.lastDuration && (this.t += n % this.lastDuration / this.lastDuration,
                this.t -= 0 | this.t);
                const i = -t * this.t;
                this.element && (this.element.style.animationDuration = `${t}s`,
                this.element.style.animationDelay = `${i}s`,
                this.element.classList.remove(this.animationClass),
                this.element.offsetHeight,
                this.element.classList.add(this.animationClass)),
                this.lastTime = e,
                this.lastDuration = t
            }
        }
        class a extends r.default.Component {
            constructor() {
                super(...arguments),
                this.inner1 = new s("scanbot-shutter-rotate"),
                this.inner2 = new s("scanbot-shutter-rotate")
            }
            render() {
                return r.default.createElement("div", {
                    className: "scanbot-shutter-button",
                    onClick: this.props.onClick
                }, this.captureBackground(), this.captureInnerCircle(), this.captureSearchingInner1(), this.captureSearchingInner2())
            }
            updateAnimationSpeed(t) {
                "searching" == t ? (this.inner1.setDuration(3),
                this.inner2.setDuration(2)) : (this.inner1.setDuration(1.5),
                this.inner2.setDuration(.75))
            }
            componentDidMount() {
                this.updateAnimationSpeed(this.props.action)
            }
            componentDidUpdate() {
                this.updateAnimationSpeed(this.props.action)
            }
            captureBackground() {
                return this.svgBase(null, r.default.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: "1"
                }, this.path("M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0zm0 3C15.984 3 3 15.984 3 32s12.984 29 29 29 29-12.984 29-29S48.016 3 32 3z")))
            }
            captureInnerCircle() {
                const {action: t} = this.props;
                return this.svgBase({
                    "scanbot-shutter-button-part": !0,
                    "scanbot-shutter-fade-in": "processing" == t || "manual" == t,
                    "scanbot-shutter-fade-out": "searching" == t || "capturing" == t,
                    "scanbot-shutter-pulse-fast": "processing" == t
                }, r.default.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: "1"
                }, r.default.createElement("circle", {
                    cx: "32",
                    cy: "32",
                    r: "24",
                    fill: this.props.color,
                    fillRule: "nonzero"
                })))
            }
            captureSearchingInner1() {
                const {action: t} = this.props;
                return this.svgBase({
                    "scanbot-shutter-button-part": !0,
                    "scanbot-shutter-fade-in": "searching" == t || "capturing" == t,
                    "scanbot-shutter-fade-out": "processing" == t || "manual" == t
                }, r.default.createElement("g", {
                    fill: "none",
                    fillOpacity: "0.7",
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: "1"
                }, this.path("M44.24 51.476a1 1 0 01-1.066-1.692A20.981 20.981 0 0053 32c0-11.598-9.402-21-21-21a1 1 0 010-2c12.703 0 23 10.297 23 23a22.98 22.98 0 01-10.76 19.476z")), (t=>{
                    this.inner1.element = t
                }
                ))
            }
            captureSearchingInner2() {
                const {action: t} = this.props;
                return this.svgBase({
                    "scanbot-shutter-button-part": !0,
                    "scanbot-shutter-fade-in": "searching" == t || "capturing" == t,
                    "scanbot-shutter-fade-out": "processing" == t || "manual" == t
                }, r.default.createElement("g", {
                    fill: "none",
                    fillOpacity: "0.4",
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: "1"
                }, this.path("M46.624 35.35a1 1 0 01-1.95-.445C44.89 33.96 45 32.988 45 32c0-7.18-5.82-13-13-13a1 1 0 010-2c8.284 0 15 6.716 15 15 0 1.138-.127 2.26-.376 3.35z")), (t=>{
                    this.inner2.element = t
                }
                ))
            }
            path(t) {
                return r.default.createElement("path", {
                    fill: this.props.color,
                    fillRule: "nonzero",
                    d: t
                })
            }
            svgBase(t, e, n) {
                return r.default.createElement("div", {
                    className: o.default(t),
                    ref: n
                }, r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "64",
                    height: "64",
                    viewBox: "0 0 64 64"
                }, e))
            }
        }
        e.ShutterButton = a
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(7)
          , r = n.n(i)
          , o = n(11)
          , s = {
            insert: "head",
            singleton: !1
        };
        r()(o.a, s);
        e.default = o.a.locals || {}
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.DocumentOutline = void 0;
        const r = i(n(0))
          , o = i(n(9));
        n(41);
        const s = n(6)
          , a = n(42);
        class c extends r.default.Component {
            constructor() {
                super(...arguments),
                this.hintLabelClassName = "scanbot-document-hint-text",
                this.state = {
                    text: "Initializing...",
                    ok: !1,
                    validPoints: !1
                }
            }
            render() {
                const {ok: t, text: e, validPoints: n} = this.state
                  , i = this.props.visible && n
                  , c = o.default({
                    [s.DocumentPolygon.CLASSNAME]: !0,
                    [`${s.DocumentPolygon.CLASSNAME}-visible`]: i,
                    [`${s.DocumentPolygon.CLASSNAME}-hidden`]: !i,
                    [`${s.DocumentPolygon.CLASSNAME}-ok`]: t
                })
                  , l = o.default({
                    [this.hintLabelClassName]: !0,
                    [`${this.hintLabelClassName}-visible`]: i,
                    [`${this.hintLabelClassName}-hidden`]: !i
                });
                return r.default.createElement("div", {
                    style: {
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        left: 0,
                        top: 0
                    }
                }, r.default.createElement(a.AnimatedDocumentPolygon, {
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    polygonStyle: this.props.style.polygon,
                    polygonClasses: c,
                    ref: t=>{
                        this.polygon = t
                    }
                }), this.props.showLabel && r.default.createElement("label", {
                    style: this.props.style.label,
                    className: l,
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                }))
            }
            update(t, e, n) {
                e && (this.polygon.overlayPolygonCurrent || (this.polygon.overlayPolygonCurrent = e),
                this.polygon.overlayPolygonTarget || requestAnimationFrame(this.polygon.animate.bind(this.polygon)),
                this.polygon.overlayPolygonTarget = e),
                this.setState({
                    ok: t,
                    text: n,
                    validPoints: !!e
                })
            }
        }
        e.DocumentOutline = c
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(7)
          , r = n.n(i)
          , o = n(12)
          , s = {
            insert: "head",
            singleton: !1
        };
        r()(o.a, s);
        e.default = o.a.locals || {}
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.AnimatedDocumentPolygon = void 0;
        const r = n(6)
          , o = i(n(0))
          , s = n(2);
        class a extends o.default.Component {
            constructor(t) {
                super(t),
                this.PULL_FORCE = 4,
                this.MIN_SPEED = 100,
                this.state = {
                    points: []
                }
            }
            animate(t) {
                if (!this.overlayPolygonTarget)
                    return;
                let e = 0;
                for (let n = 0; n < 4; ++n) {
                    const i = this.overlayPolygonCurrent[n]
                      , r = this.overlayPolygonTarget[n]
                      , o = this.calculateOffset(t, i, r, "x")
                      , s = this.calculateOffset(t, i, r, "y");
                    i.x += o,
                    i.y += s,
                    e += Math.abs(o),
                    e += Math.abs(s)
                }
                this.polygon && this.setState({
                    points: this.overlayPolygonCurrent
                }),
                e < 1 && null !== this.animationLastTime ? (this.overlayPolygonTarget = null,
                this.animationLastTime = null) : (this.animationLastTime = t,
                requestAnimationFrame(this.animate.bind(this)))
            }
            calculateOffset(t, e, n, i) {
                const r = (this.animationLastTime ? t - this.animationLastTime : 0) / 1e3;
                return this.absMin(this.absMax(this.MIN_SPEED * Math.sign(n[i] - e[i]) * r, (n[i] - e[i]) * this.PULL_FORCE * r), n[i] - e[i])
            }
            absMin(t, e) {
                return Math.abs(t) < Math.abs(e) ? t : e
            }
            absMax(t, e) {
                return Math.abs(t) > Math.abs(e) ? t : e
            }
            render() {
                return o.default.createElement("div", {
                    style: this.props.style,
                    ref: t=>this.container = t
                }, o.default.createElement(r.DocumentPolygon, {
                    points: this.state.points,
                    polygonStyle: this.props.polygonStyle,
                    polygonClasses: this.props.polygonClasses,
                    ref: t=>this.polygon = t,
                    size: s.Size.fromHtmlElement(this.container)
                }))
            }
        }
        e.AnimatedDocumentPolygon = a
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__awaiter || function(t, e, n, i) {
            return new (n || (n = Promise))((function(r, o) {
                function s(t) {
                    try {
                        c(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? r(t.value) : (e = t.value,
                    e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))).then(s, a)
                }
                c((i = i.apply(t, e || [])).next())
            }
            ))
        }
          , r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const o = r(n(0))
          , s = n(10);
        class a extends o.default.Component {
            constructor(t) {
                super(t),
                this.state = {
                    orientation: window.orientation,
                    stream: void 0,
                    objectUrl: void 0
                }
            }
            orientationChanged(t) {
                this.setState({
                    orientation: window.orientation
                })
            }
            handleSelectDropdown(e) {
                const { value } = e.target.dataset;
                if (this.stream) {
                    this.stream.getTracks().forEach(track => {
                      track.stop();
                    });
                }
                
                const c = {
                    video: Object.assign(Object.assign({}, t), {
                        deviceId: value
                    }),
                };
              
                navigator.mediaDevices.getUserMedia(c).then(n => {
                    $(".dropdown__list").removeClass('show');
                    $(".dropdown__selected").text(`${n.getVideoTracks()[0].label}`);
                    this.setState({
                        stream: n
                    }, (()=>i(this, void 0, void 0, (function*() {
                        try {
                            const t = [this.props.videoConstraints.experimental];
                            yield this.videoTrack(n).applyConstraints({
                                advanced: t
                            })
                        } catch (t) {
                            s.Debugger.warn("Attempted to apply advanced constraints, but they seem to be unsupported")
                        }
                    }
                    ))));
                    null === (e = (t = this.props).onStreamChanged) || void 0 === e || e.call(t, n);
                    try {
                        const t = window.URL.createObjectURL(n);
                        this.setState({
                            objectUrl: t
                        })
                    } catch (t) {}
                });
            }
            tryAddDeviceId(t) {
                return i(this, void 0, void 0, (function*() {
                    const e = "camera2 0, facing back";
                    try {
                        const n = (yield navigator.mediaDevices.enumerateDevices()).filter((t=>t.kind === 'videoinput'));
                        if (n)
                            return s.Debugger.warn("Found primary camera with the label: " + e + "| Using it!"),
                            Object.assign(Object.assign({}, t), {
                                deviceId: n[0].deviceId,
                            });
                        s.Debugger.warn("Found no camera with the label: " + e)
                    } catch (t) {
                        s.Debugger.warn("Found no camera with the label: " + e)
                    }
                    return t
                }
                ))
            }
            componentDidMount() {
                var t, e, n, r, o, a;
                return i(this, void 0, void 0, (function*() {
                    window.addEventListener("orientationchange", this.orientationChanged.bind(this));
                    $("#lightdropdown .dropdown__list").delegate('li', 'click', this.handleSelectDropdown.bind(this));
                    const c = {
                        video: yield this.tryAddDeviceId(this.props.videoConstraints),
                    };
                    try {
                        if (void 0 === navigator.mediaDevices)
                            throw "UnsupportedError: navigator.mediaDevices is undefined";
                        const n = yield navigator.mediaDevices.getUserMedia(c);
                        $(".dropdown__selected").text(`${n.getVideoTracks()[0].label}`);
                        this.setState({
                            stream: n
                        }, (()=>i(this, void 0, void 0, (function*() {
                            try {
                                const t = [this.props.videoConstraints.experimental];
                                yield this.videoTrack(n).applyConstraints({
                                    advanced: t
                                })
                            } catch (t) {
                                s.Debugger.warn("Attempted to apply advanced constraints, but they seem to be unsupported")
                            }
                        }
                        )))),
                        null === (e = (t = this.props).onStreamChanged) || void 0 === e || e.call(t, n);
                        try {
                            const t = window.URL.createObjectURL(n);
                            this.setState({
                                objectUrl: t
                            })
                        } catch (t) {}
                    } catch (t) {
                        return void (null === (r = (n = this.props).onError) || void 0 === r || r.call(n, t))
                    }
                    null === (a = (o = this.props).onReady) || void 0 === a || a.call(o)
                }
                ))
            }
            componentWillUnmount() {
                window.removeEventListener("orientationchange", this.orientationChanged.bind(this)),
                this.state.stream && (this.state.stream.getVideoTracks && this.state.stream.getAudioTracks && (this.state.stream.getVideoTracks().forEach((t=>t.stop())),
                this.state.stream.getAudioTracks().forEach((t=>t.stop()))),
                this.setState({
                    stream: void 0
                })),
                this.state.objectUrl && (window.URL.revokeObjectURL(this.state.objectUrl),
                this.setState({
                    objectUrl: void 0
                }))
            }
            videoTrack(t) {
                return t.getVideoTracks()[0]
            }
            updateTorch(t) {
                return i(this, void 0, void 0, (function*() {
                    const e = [{
                        torch: t
                    }];
                    yield this.state.stream.getVideoTracks()[0].applyConstraints({
                        advanced: e
                    })
                }
                ))
            }
        }
        e.default = a
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__awaiter || function(t, e, n, i) {
            return new (n || (n = Promise))((function(r, o) {
                function s(t) {
                    try {
                        c(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? r(t.value) : (e = t.value,
                    e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))).then(s, a)
                }
                c((i = i.apply(t, e || [])).next())
            }
            ))
        }
          , r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.BarcodeScannerState = e.BarcodeScannerProps = void 0;
        const o = r(n(0))
          , s = n(0)
          , a = n(22)
          , c = r(n(23))
          , l = n(45)
          , u = n(21)
          , h = n(46)
          , d = n(2)
          , f = n(5)
          , p = n(10)
          , m = n(3);
        class g extends a.ScanbotCameraProps {
        }
        e.BarcodeScannerProps = g;
        class v extends a.ScanbotCameraState {
        }
        e.BarcodeScannerState = v;
        class _ extends a.ScannerView {
            constructor(t) {
                super(t),
                this.paused = !1,
                this.state = {
                    isFinderVisible: !0
                }
            }
            get configuration() {
                return l.BarcodeScannerConfiguration.fromJson(this.props.configuration)
            }
            get enabled() {
                return !this.disposed
            }
            static create(t) {
                return i(this, void 0, void 0, (function*() {
                    const e = document.getElementById(t.containerId);
                    if (!e)
                        throw Error("Unable to initialize ScanbotSDK: Cannot find container element with the id provided.");
                    return new Promise(((n,i)=>{
                        s.render(o.default.createElement(_, {
                            container: e,
                            configuration: t,
                            onReady: n,
                            onError: i
                        }), e)
                    }
                    ))
                }
                ))
            }
            isDetectionPaused() {
                return this.paused
            }
            resumeDetection() {
                return i(this, void 0, void 0, (function*() {
                    p.Debugger.warn("Barcode detection resumed"),
                    yield this.resume()
                }
                ))
            }
            pauseDetection() {
                p.Debugger.warn("Barcode detection paused"),
                this.pause()
            }
            componentDidMount() {
                const t = Object.create(null, {
                    componentDidMount: {
                        get: ()=>super.componentDidMount
                    }
                });
                return i(this, void 0, void 0, (function*() {
                    t.componentDidMount.call(this),
                    yield this.resume()
                }
                ))
            }
            componentWillUnmount() {
                this.pause(),
                super.componentWillUnmount()
            }
            resume() {
                return i(this, void 0, void 0, (function*() {
                    this.paused = !1,
                    yield this.detect()
                }
                ))
            }
            pause() {
                this.paused = !0
            }
            detect() {
                var t, e;
                return i(this, void 0, void 0, (function*() {
                    if (!this.enabled)
                        return;
                    if (this.paused)
                        return;
                    let n = !1;
                    try {
                        const i = this.camera.calculateFrameSize(a.ScannerView.DEFAULT_DETECTION_RESOLUTION)
                          , r = d.Size.fromHtmlElement(this.camera.video)
                          , o = f.ViewUtils.findScale(r, i);
                        let s = null === (t = this.finder) || void 0 === t ? void 0 : t.frame();
                        if (s) {
                            const t = m.Frame.withSize(s.width / o.scale, s.height / o.scale);
                            t.x = i.width / 2 - t.width / 2,
                            t.y = i.height / 2 - t.height / 2,
                            this.camera.cutout = t
                        } else
                            this.camera.cutout = void 0;
                        const c = this.camera.createImageData(a.ScannerView.DEFAULT_DETECTION_RESOLUTION);
                        if (!c)
                            return;
                        const l = yield this.bridge.post("recognizeBarcodes", [c, {}]);
                        if (!this.enabled)
                            return;
                        if (null === l)
                            return;
                        const h = u.BarcodeResult.fromWorker(l, c);
                        h.isEmpty() ? this.configuration._onDetectionFailed && (null === (e = this.configuration) || void 0 === e || e._onDetectionFailed(c)) : (n = !0,
                        this.configuration.onBarcodesDetected(h))
                    } finally {
                        n ? setTimeout((()=>{
                            requestAnimationFrame(this.detect.bind(this))
                        }
                        ), this.configuration.captureDelay) : requestAnimationFrame(this.detect.bind(this))
                    }
                }
                ))
            }
            saveExtractedImageData() {
                this.camera.saveExtractedData()
            }
            setFinderVisible(t) {
                this.setState({
                    isFinderVisible: t
                })
            }
            render() {
                return o.default.createElement("div", {
                    style: {
                        position: "relative",
                        width: "100%",
                        height: "100%"
                    }
                }, o.default.createElement(c.default, {
                    videoConstraints: this.configuration.videoConstraints,
                    mirrored: this.configuration.mirrored,
                    onReady: this.onVideoReady,
                    onError: this.onVideoError,
                    ref: t=>{
                        this.camera = t
                    }
                }), this.state.isFinderVisible && o.default.createElement(h.ViewFinder, {
                    ref: t=>this.finder = t,
                    configuration: this.configuration
                }))
            }
        }
        e.default = _
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.BarcodeScannerConfiguration = void 0;
        const i = n(18);
        class r {
            constructor() {
                this.width = "260px",
                this.height = "200px",
                this.borderColor = "white"
            }
        }
        class o {
            constructor() {
                this.color = "white",
                this.size = "0.9em",
                this.weight = 300
            }
        }
        class s {
            constructor() {
                this.backgroundColor = "rgba(0, 0, 0, 0.7)"
            }
        }
        class a extends i.ScannerConfiguration {
            constructor() {
                super(),
                this.captureDelay = 1e3,
                this.text = {
                    hint: "Please align the code in the frame above to scan it"
                },
                this.onBarcodesDetected = function(t) {}
                ,
                this.style = new s,
                this.style.window = new r,
                this.style.text = new o
            }
            static fromJson(t) {
                const e = new a;
                return this.mapValues(t, e, ["style", "videoConstraints"]),
                t.style && (this.mapValues(t.style, e.style, ["window", "text"]),
                t.style.window && this.mapValues(t.style.window, e.style.window),
                t.style.text && this.mapValues(t.style.text, e.style.text)),
                this.mapVideoConstraints(t, e),
                e
            }
        }
        e.BarcodeScannerConfiguration = a
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.ViewFinder = void 0;
        const r = i(n(0))
          , o = n(3)
          , s = n(47)
          , a = n(1);
        var c;
        !function(t) {
            t[t.Right = 0] = "Right",
            t[t.Down = 1] = "Down",
            t[t.Left = 2] = "Left",
            t[t.Up = 3] = "Up"
        }(c || (c = {}));
        class l extends r.default.Component {
            constructor() {
                super(...arguments),
                this.BORDER_SIZE = 2,
                this.TEXT_MARGIN = 10
            }
            frame() {
                var t, e, n, i, r;
                const a = null === (t = this.container) || void 0 === t ? void 0 : t.getBoundingClientRect()
                  , c = o.Frame.fromRect(a);
                if (!(null === (n = null === (e = this.overlay) || void 0 === e ? void 0 : e.style) || void 0 === n ? void 0 : n.clipPath)) {
                    const t = o.Frame.fromRect(null === (i = this.overlay) || void 0 === i ? void 0 : i.getBoundingClientRect())
                      , e = o.Frame.fromRect(null === (r = this.window) || void 0 === r ? void 0 : r.getBoundingClientRect());
                    e.x = c.x - t.x,
                    e.y = c.y - t.y;
                    const n = s.ClipPath.fromFrames(t, e)
                      , a = this.calculateClipPath(n);
                    this.overlay.style.clipPath = a,
                    this.overlay.style.webkitClipPath = a
                }
                return c
            }
            get backgroundStyle() {
                return {
                    backgroundColor: this.props.configuration.style.backgroundColor,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    bottom: 0
                }
            }
            get containerStyle() {
                return {
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    position: "absolute"
                }
            }
            get windowStyle() {
                const t = this.props.configuration.style.window;
                return {
                    width: t.width,
                    height: t.height,
                    borderRadius: "10px",
                    border: this.BORDER_SIZE + "px solid " + t.borderColor
                }
            }
            get textStyle() {
                const t = this.props.configuration.style.text;
                return {
                    color: t.color,
                    fontSize: t.size,
                    fontWeight: t.weight,
                    textAlign: "center",
                    marginTop: this.TEXT_MARGIN + "px",
                    width: this.props.configuration.style.window.width
                }
            }
            render() {
                var t;
                return r.default.createElement("div", null, r.default.createElement("div", {
                    ref: t=>this.overlay = t,
                    style: this.backgroundStyle
                }), r.default.createElement("div", {
                    ref: t=>this.container = t,
                    style: this.containerStyle
                }, r.default.createElement("div", {
                    ref: t=>this.window = t,
                    style: this.windowStyle
                }), r.default.createElement("div", {
                    style: this.textStyle
                }, null === (t = this.props.configuration.text) || void 0 === t ? void 0 : t.hint)))
            }
            calculateClipPath(t) {
                return `polygon(\n            \n            0% 0%, \n            0% 100%, \n            \n            ${t.left} 100%, \n\n            ${this.roundClipPath(t.left, t.top, c.Right)}\n            ${this.roundClipPath(t.right, t.top, c.Down)}\n            ${this.roundClipPath(t.right, t.bottom, c.Left)}\n            ${this.roundClipPath(t.left, t.bottom, c.Up)}\n\n            ${t.left} 100%, \n            100% 100%, \n            100% 0%\n        )`
            }
            roundClipPath(t, e, n) {
                let i = "";
                let r = new a.Point(s.ClipPath.toNumber(t),s.ClipPath.toNumber(e));
                switch (n) {
                case c.Right:
                    r.y += 10;
                    break;
                case c.Down:
                    r.x -= 10;
                    break;
                case c.Left:
                    r.y -= 10;
                    break;
                case c.Up:
                    r.x += 10
                }
                let o = [];
                switch (n) {
                case c.Right:
                    o = [{
                        x: 1,
                        y: -3
                    }, {
                        x: 3,
                        y: -5
                    }, {
                        x: 5,
                        y: -7
                    }, {
                        x: 7,
                        y: -9
                    }, {
                        x: 10,
                        y: -10
                    }];
                    break;
                case c.Down:
                    o = [{
                        x: 3,
                        y: 1
                    }, {
                        x: 5,
                        y: 3
                    }, {
                        x: 7,
                        y: 5
                    }, {
                        x: 9,
                        y: 7
                    }, {
                        x: 10,
                        y: 10
                    }];
                    break;
                case c.Left:
                    o = [{
                        x: -1,
                        y: 3
                    }, {
                        x: -3,
                        y: 5
                    }, {
                        x: -5,
                        y: 7
                    }, {
                        x: -7,
                        y: 9
                    }, {
                        x: -10,
                        y: 10
                    }];
                    break;
                case c.Up:
                    o = [{
                        x: -3,
                        y: -1
                    }, {
                        x: -5,
                        y: -3
                    }, {
                        x: -7,
                        y: -5
                    }, {
                        x: -9,
                        y: -7
                    }, {
                        x: -10,
                        y: -10
                    }];
                    break;
                default:
                    throw "Invalid ClipDirection"
                }
                return i += this.addIncrements(r, o),
                i
            }
            addIncrements(t, e) {
                let n = "";
                return n += t.x + "px " + t.y + "px, ",
                e.forEach((e=>{
                    n += t.x + e.x + "px " + (t.y + e.y) + "px, "
                }
                )),
                n
            }
        }
        e.ViewFinder = l
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.ClipPath = void 0;
        class i {
            static toPx(t) {
                return t + "px"
            }
            static toNumber(t) {
                return parseFloat(t.replace("px", ""))
            }
            static fromFrames(t, e) {
                const n = new i;
                return n.left = this.toPx(e.x),
                n.top = this.toPx(e.y),
                n.right = this.toPx(e.x + e.width),
                n.bottom = this.toPx(e.y + e.height),
                n
            }
            static subtractHalf(t, e) {
                return this.subtract(t, e / 2)
            }
            static subtract(t, e) {
                return this.toNumber(t) - e + "px"
            }
            static addHalf(t, e) {
                return this.add(t, e / 2)
            }
            static add(t, e) {
                return this.toNumber(t) + e + "px"
            }
        }
        e.ClipPath = i
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
            void 0 === i && (i = n),
            Object.defineProperty(t, i, {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        }
        : function(t, e, n, i) {
            void 0 === i && (i = n),
            t[i] = e[n]
        }
        )
          , r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
            Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            })
        }
        : function(t, e) {
            t.default = e
        }
        )
          , o = this && this.__importStar || function(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && i(e, t, n);
            return r(e, t),
            e
        }
          , s = this && this.__awaiter || function(t, e, n, i) {
            return new (n || (n = Promise))((function(r, o) {
                function s(t) {
                    try {
                        c(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? r(t.value) : (e = t.value,
                    e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))).then(s, a)
                }
                c((i = i.apply(t, e || [])).next())
            }
            ))
        }
          , a = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const c = a(n(0))
          , l = n(0)
          , u = a(n(9))
          , h = a(n(4))
          , d = n(49)
          , f = n(6)
          , p = n(50)
          , m = n(57)
          , g = n(58)
          , v = n(64)
          , _ = n(2)
          , y = n(1)
          , b = n(5)
          , w = n(20)
          , S = o(n(65));
        class C extends c.default.Component {
            constructor(t) {
                super(t),
                this.MAX_ROTATIONS = 4,
                this.BASE_SCALE = 1,
                this.state = {
                    image: void 0,
                    polygon: void 0,
                    calculatedSize: _.Size.empty(),
                    animation: {
                        rotations: 0,
                        scale: 1,
                        duration: 0
                    },
                    points: [],
                    magneticLines: {
                        horizontal: {
                            original: [],
                            scaled: []
                        },
                        vertical: {
                            original: [],
                            scaled: []
                        }
                    },
                    imageMargin: y.Point.empty()
                }
            }
            static create(t) {
                return s(this, void 0, void 0, (function*() {
                    const e = document.getElementById(t.containerId);
                    if (!e)
                        throw Error("Unable to initialize cropping component: Cannot find container element with the id provided.");
                    return new Promise(((n,i)=>{
                        l.render(c.default.createElement(C, {
                            onReady: n,
                            onError: i,
                            container: e,
                            configuration: d.CroppingViewConfiguration.fromJson(t)
                        }), e)
                    }
                    ))
                }
                ))
            }
            componentDidMount() {
                var t, e, n;
                return s(this, void 0, void 0, (function*() {
                    const i = null === (t = this.configuration) || void 0 === t ? void 0 : t.image
                      , r = yield h.default.instance.detectDocument(i);
                    this.setState({
                        image: yield w.ImageUtils.toDataUrl(i),
                        polygon: null !== (n = null === (e = this.configuration) || void 0 === e ? void 0 : e.polygon) && void 0 !== n ? n : r.polygon,
                        magneticLines: {
                            vertical: {
                                original: r.verticalLines
                            },
                            horizontal: {
                                original: r.horizontalLines
                            }
                        }
                    }),
                    this.props.onReady && this.props.onReady(this)
                }
                ))
            }
            componentWillUnmount() {}
            onImageLoaded(t) {
                return s(this, void 0, void 0, (function*() {
                    _.Size.isEmpty(this.state.calculatedSize) && (this.htmlImage = t,
                    this.loadImageAndPolygon())
                }
                ))
            }
            loadImageAndPolygon(t) {
                var e, n, i;
                const r = new _.Size(this.htmlImage.naturalWidth,this.htmlImage.naturalHeight)
                  , o = new _.Size(this.container.width(),this.container.height())
                  , s = w.ImageUtils.getObjectFitSize(o, r)
                  , a = new _.Size(s.width,s.height)
                  , c = _.Size.subtractFrom(a, 2 * this.configuration.style.padding)
                  , l = null !== (e = null == t ? void 0 : t.polygon) && void 0 !== e ? e : this.state.polygon
                  , u = b.ViewUtils.convertToViewportPointsFromParentSize(c, l)
                  , h = null !== (n = null == t ? void 0 : t.horizontalLines) && void 0 !== n ? n : this.state.magneticLines.horizontal.original
                  , d = null !== (i = null == t ? void 0 : t.verticalLines) && void 0 !== i ? i : this.state.magneticLines.vertical.original
                  , f = b.ViewUtils.convertLinesToViewportLines(a, h)
                  , p = b.ViewUtils.convertLinesToViewportLines(a, d);
                this.setState({
                    calculatedSize: a,
                    points: u,
                    magneticLines: {
                        horizontal: {
                            original: h,
                            scaled: f
                        },
                        vertical: {
                            original: d,
                            scaled: p
                        }
                    },
                    animation: Object.assign(Object.assign({}, this.state.animation), {
                        duration: 0,
                        rotations: this.rotations,
                        scale: this.calculateScale(0, this.rotations, a)
                    }),
                    imageMargin: this.calculateMargin(a)
                })
            }
            render() {
                var t, e, n, i, r, o;
                const s = f.DocumentPolygon.CLASSNAME
                  , a = u.default({
                    [s]: !0,
                    [`${s}-visible`]: !0
                })
                  , l = this.configuration.style.polygon.width
                  , h = (null === (t = this.state.animation) || void 0 === t ? void 0 : t.scale) ? l / this.state.animation.scale : l;
                return c.default.createElement("div", {
                    style: {
                        position: "relative",
                        width: "100%",
                        height: "100%"
                    }
                }, this.configuration.disableScroll && c.default.createElement(v.ScrollLock, null), c.default.createElement(S.default, {
                    ref: t=>this.magnifier = t,
                    style: this.configuration.style.magnifier
                }), c.default.createElement(g.Animatable, {
                    ref: t=>this.container = t,
                    size: this.state.calculatedSize,
                    margin: this.configuration.style.padding,
                    rotations: null === (e = this.state.animation) || void 0 === e ? void 0 : e.rotations,
                    scale: null === (n = this.state.animation) || void 0 === n ? void 0 : n.scale,
                    duration: null === (i = this.state.animation) || void 0 === i ? void 0 : i.duration,
                    imageMargin: this.state.imageMargin
                }, c.default.createElement(m.CroppingImage, {
                    src: this.state.image,
                    onImageLoaded: t=>this.onImageLoaded(t)
                }), c.default.createElement(p.DraggableDocumentPolygon, {
                    style: {
                        width: "100%",
                        height: "100%",
                        zIndex: 500
                    },
                    size: this.state.calculatedSize,
                    polygonStyle: {
                        cursor: "pointer",
                        stroke: this.configuration.style.polygon.color,
                        strokeWidth: `${h}px`
                    },
                    handleStyle: this.configuration.style.polygon.handles,
                    magneticLineStyle: this.configuration.style.magneticLines,
                    polygonClasses: a,
                    points: this.state.points,
                    rotations: null === (r = this.state.animation) || void 0 === r ? void 0 : r.rotations,
                    scale: null === (o = this.state.animation) || void 0 === o ? void 0 : o.scale,
                    magneticLines: this.state.magneticLines,
                    cornerMoveStart: this.showMagnifier.bind(this),
                    cornerMoved: this.updateMagnifier.bind(this),
                    cornerMoveEnd: this.hideMagnifier.bind(this)
                })))
            }
            showMagnifier(t) {
                var e;
                null === (e = this.magnifier) || void 0 === e || e.setIsVisible(!0, (()=>{
                    var e;
                    null === (e = this.magnifier) || void 0 === e || e.update(this.magnifierOptions(t))
                }
                ))
            }
            updateMagnifier(t) {
                var e;
                null === (e = this.magnifier) || void 0 === e || e.update(this.magnifierOptions(t))
            }
            magnifierOptions(t) {
                const e = new S.MagnifierOptions;
                return e.source = new S.MagnifierSourceImage(this.htmlImage,this.state.calculatedSize),
                e.container = new _.Size(this.container.width(),this.container.height()),
                e.origin = t.point,
                e.padding = this.configuration.style.padding,
                e.rotations = this.state.animation.rotations,
                e.scale = this.state.animation.scale,
                e
            }
            hideMagnifier() {
                var t;
                null === (t = this.magnifier) || void 0 === t || t.setIsVisible(!1)
            }
            apply() {
                var t;
                return s(this, void 0, void 0, (function*() {
                    const e = _.Size.subtractFrom(this.state.calculatedSize, 2 * this.configuration.style.padding)
                      , n = y.Point.toPolygon(this.state.points, e)
                      , i = this.toCcwRotations(this.rotations);
                    return {
                        image: yield h.default.instance.cropAndRotateImageCcw(null === (t = this.configuration) || void 0 === t ? void 0 : t.image, n, i),
                        polygon: n,
                        rotations: this.rotations
                    }
                }
                ))
            }
            toCcwRotations(t) {
                return this.MAX_ROTATIONS - t % this.MAX_ROTATIONS
            }
            rotate(t) {
                return s(this, void 0, void 0, (function*() {
                    if (this.container.isAnimating())
                        return void console.warn("Unable to rotate: previous rotation animation in progress");
                    const e = this.calculateScale(this.rotations, t);
                    this.setState({
                        animation: {
                            rotations: this.rotations + t,
                            scale: e,
                            duration: 1
                        }
                    })
                }
                ))
            }
            detect() {
                var t;
                return s(this, void 0, void 0, (function*() {
                    const e = yield h.default.instance.detectDocument(null === (t = this.configuration) || void 0 === t ? void 0 : t.image);
                    this.loadImageAndPolygon(e)
                }
                ))
            }
            dispose() {
                const {container: t} = this.props;
                if (!t)
                    throw Error("Component wasn't created with openCroppingView. Remove component from render tree to dispose.");
                this.componentWillUnmount(),
                l.render(null, t)
            }
            get rotations() {
                var t, e;
                const n = null === (t = this.state.animation) || void 0 === t ? void 0 : t.rotations;
                return n && 0 !== n ? n : null !== (e = this.configuration.rotations) && void 0 !== e ? e : 0
            }
            get configuration() {
                return d.CroppingViewConfiguration.fromJson(this.props.configuration)
            }
            calculateScale(t, e, n) {
                return e ? (t + e) % 2 == 0 ? this.BASE_SCALE : this.calculateRatio(n) : this.BASE_SCALE
            }
            calculateRatio(t) {
                return t || (t = this.state.calculatedSize),
                t.width > t.height ? this.container.height() / this.container.width() : this.container.width() / this.container.height()
            }
            calculateMargin(t) {
                return t.width > t.height ? {
                    x: this.configuration.style.padding,
                    y: this.container.height() / 2 - t.height / 2
                } : {
                    x: this.container.width() / 2 - t.width / 2,
                    y: this.configuration.style.padding
                }
            }
        }
        e.default = C
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.CroppingViewConfiguration = e.CroppingViewMagnifierCrosshairStyle = e.CroppingViewMagnifierBorderStyle = e.CroppingViewMagnifierStyle = e.CroppingViewStyle = e.CroppingViewPolygonStyle = e.CroppingViewPolygonHandleStyle = e.CroppingViewMagneticLineStyle = void 0;
        const i = n(19);
        class r {
            constructor() {
                this.disabled = !1,
                this.color = "transparent"
            }
        }
        e.CroppingViewMagneticLineStyle = r;
        class o {
            constructor() {
                this.color = "white",
                this.border = "1px solid lightgray",
                this.size = 20
            }
        }
        e.CroppingViewPolygonHandleStyle = o;
        class s {
            constructor() {
                this.color = "#1ec31e",
                this.width = 4
            }
        }
        e.CroppingViewPolygonStyle = s;
        class a {
            constructor() {
                this.padding = 10
            }
        }
        e.CroppingViewStyle = a;
        class c {
            constructor() {
                this.margin = 15,
                this.size = 100,
                this.zoom = 1.5
            }
        }
        e.CroppingViewMagnifierStyle = c;
        class l {
            constructor() {
                this.width = 2,
                this.color = "white"
            }
        }
        e.CroppingViewMagnifierBorderStyle = l;
        class u {
            constructor() {
                this.size = 20,
                this.color = "white"
            }
        }
        e.CroppingViewMagnifierCrosshairStyle = u;
        class h extends i.BaseConfiguration {
            constructor() {
                super(),
                this.disableScroll = !0,
                this.rotations = 0,
                this.style = new a,
                this.style.magneticLines = new r,
                this.style.polygon = new s,
                this.style.polygon.handles = new o,
                this.style.magnifier = new c,
                this.style.magnifier.border = new l,
                this.style.magnifier.crosshair = new u
            }
            static fromJson(t) {
                const e = new h;
                return this.mapValues(t, e, ["style"]),
                t.style && (this.mapValues(t.style, e.style, ["polygon", "magneticLines", "magnifier"]),
                t.style.polygon && (this.mapValues(t.style.polygon, e.style.polygon, ["handles"]),
                t.style.polygon.handles && this.mapValues(t.style.polygon.handles, e.style.polygon.handles)),
                t.style.magneticLines && this.mapValues(t.style.magneticLines, e.style.magneticLines, []),
                t.style.magnifier && (this.mapValues(t.style.magnifier, e.style.magnifier, ["border", "crosshair"]),
                t.style.magnifier.border && this.mapValues(t.style.magnifier.border, e.style.magnifier.border, []),
                t.style.magnifier.crosshair && this.mapValues(t.style.magnifier.crosshair, e.style.magnifier.crosshair, []))),
                e
            }
        }
        e.CroppingViewConfiguration = h
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.DraggableDocumentPolygon = void 0;
        const r = i(n(0))
          , o = n(6)
          , s = n(51)
          , a = n(52);
        class c extends r.default.Component {
            constructor(t) {
                super(t),
                this.state = {
                    movingLine: void 0
                }
            }
            render() {
                return r.default.createElement("div", null, r.default.createElement(a.DraggableHandlesComponent, {
                    ref: t=>this.handles = t,
                    containerSize: this.props.size,
                    coordinatePoints: this.props.points,
                    rotations: this.props.rotations,
                    scale: this.props.scale,
                    style: this.props.handleStyle,
                    cornerMoveStart: this.props.cornerMoveStart,
                    cornerMoved: t=>{
                        this.setFrame(),
                        this.props.cornerMoved(t)
                    }
                    ,
                    cornerMoveEnd: this.props.cornerMoveEnd,
                    lineMoved: t=>{
                        this.setFrame(),
                        this.setState({
                            movingLine: t
                        })
                    }
                }), r.default.createElement(s.MagneticLinesComponent, {
                    style: this.props.magneticLineStyle,
                    lines: this.props.magneticLines,
                    movingLine: this.state.movingLine,
                    snapTo: t=>{
                        var e, n;
                        null === (e = this.handles) || void 0 === e || e.snapTo(t),
                        null === (n = this.polygon) || void 0 === n || n.setFrame()
                    }
                }), r.default.createElement(o.DocumentPolygon, {
                    size: this.props.size,
                    points: this.props.points,
                    polygonStyle: this.props.polygonStyle,
                    polygonClasses: this.props.polygonClasses,
                    ref: t=>this.polygon = t
                }))
            }
            setFrame() {
                var t, e;
                null === (t = this.polygon) || void 0 === t || t.setFrame(),
                null === (e = this.handles) || void 0 === e || e.setFrame()
            }
        }
        e.DraggableDocumentPolygon = c
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.MagneticLinesComponent = void 0;
        const r = i(n(0));
        class o extends r.default.Component {
            constructor() {
                super(...arguments),
                this.BUFFER = 4
            }
            fromPoint(t) {
                return r.default.createElement("svg", {
                    style: {
                        width: "100%",
                        height: "100%",
                        position: "absolute"
                    }
                }, r.default.createElement("line", {
                    x1: t.p1.x.toString(),
                    y1: t.p1.y.toString(),
                    x2: t.p2.x.toString(),
                    y2: t.p2.y.toString(),
                    style: {
                        stroke: this.props.style.color,
                        strokeWidth: 2
                    }
                }))
            }
            componentDidUpdate(t, e, n) {
                this.props.style.disabled || this.isNearAny()
            }
            render() {
                var t, e, n, i, o, s;
                return r.default.createElement("div", {
                    style: {
                        width: "100%",
                        height: "100%",
                        position: "absolute"
                    }
                }, null === (n = null === (e = null === (t = this.props.lines) || void 0 === t ? void 0 : t.horizontal) || void 0 === e ? void 0 : e.scaled) || void 0 === n ? void 0 : n.map((t=>this.fromPoint(t))), null === (s = null === (o = null === (i = this.props.lines) || void 0 === i ? void 0 : i.vertical) || void 0 === o ? void 0 : o.scaled) || void 0 === s ? void 0 : s.map((t=>this.fromPoint(t))))
            }
            isNearAny() {
                var t, e, n, i;
                const r = this.props.movingLine;
                let o = null === (e = null === (t = this.props.lines) || void 0 === t ? void 0 : t.vertical) || void 0 === e ? void 0 : e.scaled;
                r.isHorizontal && (o = null === (i = null === (n = this.props.lines) || void 0 === n ? void 0 : n.horizontal) || void 0 === i ? void 0 : i.scaled),
                null == o || o.forEach((t=>{
                    this.isLineNearLine(t, r.points, r.isHorizontal) && this.props.snapTo({
                        magneticLine: t,
                        polygonLine: r
                    })
                }
                ))
            }
            isLineNearLine(t, e, n) {
                return this.isPointNearLine(t, e[0].coordinates, n) || this.isPointNearLine(t, e[1].coordinates, n)
            }
            isPointNearLine(t, e, n) {
                return this.isPointNearPoint(t.p1, e, n) || this.isPointNearPoint(t.p2, e, n)
            }
            isPointNearPoint(t, e, n) {
                return n ? Math.abs(t.y - e.y) < this.BUFFER : Math.abs(t.x - e.x) < this.BUFFER
            }
        }
        e.MagneticLinesComponent = o
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.DraggableHandlesComponent = void 0;
        const r = i(n(0))
          , o = n(53)
          , s = n(55);
        class a extends r.default.Component {
            constructor(t) {
                super(t),
                this.state = {
                    slopes: []
                }
            }
            render() {
                return r.default.createElement("div", {
                    style: {
                        width: "100%",
                        height: "100%",
                        position: "absolute"
                    }
                }, r.default.createElement(o.DraggablePointsContainer, {
                    ref: t=>this.corners = t,
                    style: this.props.style,
                    containerSize: this.props.containerSize,
                    scale: this.props.scale,
                    rotations: this.props.rotations,
                    points: this.props.coordinatePoints,
                    cornerMoveStart: this.props.cornerMoveStart,
                    cornerMoved: this.props.cornerMoved,
                    cornerMoveEnd: t=>{
                        this.setState({
                            slopes: t.slopes
                        }),
                        this.props.cornerMoveEnd()
                    }
                }), r.default.createElement(s.DraggableLinesContainer, {
                    ref: t=>this.lines = t,
                    style: this.props.style,
                    containerSize: this.props.containerSize,
                    scale: this.props.scale,
                    rotations: this.props.rotations,
                    points: this.props.coordinatePoints,
                    slopes: this.state.slopes,
                    lineMoved: this.props.lineMoved
                }))
            }
            setFrame() {
                for (let t = 0; t < this.corners.POINT_COUNT; t++) {
                    const e = this.props.coordinatePoints[t];
                    this.corners.items[t] && (this.corners.items[t].style.left = e.x - this.corners.pointSize / 2 + "px",
                    this.corners.items[t].style.top = e.y - this.corners.pointSize / 2 + "px");
                    let n = this.props.coordinatePoints[this.corners.nextIndex(t)];
                    this.lines.items[t] && (this.lines.items[t].style.left = e.x + (n.x - e.x) / 2 - this.corners.pointSize / 2 + "px",
                    this.lines.items[t].style.top = e.y + (n.y - e.y) / 2 - this.corners.pointSize / 2 + "px")
                }
            }
            snapTo(t) {
                const e = t.polygonLine.isHorizontal ? "y" : "x";
                this.snapToClosest(t.polygonLine.points[0].index, t.magneticLine, e),
                this.snapToClosest(t.polygonLine.points[1].index, t.magneticLine, e),
                this.corners.calculateSlopes(),
                this.setFrame()
            }
            snapToClosest(t, e, n) {
                const i = "x" === n ? "y" : "x";
                let r = this.props.coordinatePoints[t][i];
                r = Math.abs(e.p1[i] - r) < Math.abs(e.p2[i] - r) ? e.p1[n] : e.p2[n],
                this.props.coordinatePoints[t][n] = r
            }
        }
        e.DraggableHandlesComponent = a
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.DraggablePointsContainer = void 0;
        const r = i(n(0))
          , o = n(1)
          , s = n(54)
          , a = n(24);
        class c extends a.DraggableBaseContainer {
            create() {
                if (!this.props.points || 4 !== this.props.points.length)
                    return null;
                const t = [];
                for (let e = 0; e < this.POINT_COUNT; e++) {
                    const n = this.props.points[e]
                      , i = r.default.createElement("div", {
                        style: Object.assign(Object.assign({}, this.pointStyle), {
                            left: n.x - this.pointSize / 2 + "px",
                            top: n.y - this.pointSize / 2 + "px"
                        }),
                        key: e.toString(),
                        ref: t=>this.items[e] = t,
                        onTouchStart: t=>this.cornerTouchStart(t, e),
                        onTouchMove: t=>this.cornerTouchMove(t, e),
                        onTouchEnd: t=>this.cornerTouchEnd(t, e)
                    });
                    t.push(i)
                }
                return t
            }
            cornerTouchStart(t, e) {
                const n = o.Point.fromTouches(t.touches, this.props.rotations, this.props.scale)
                  , i = this.items[e]
                  , r = o.Point.fromHtmlElement(i);
                this.parentOffset = new o.Point(n.x - r.x,n.y - r.y),
                this.props.cornerMoveStart({
                    index: e,
                    point: this.props.points[e]
                })
            }
            cornerTouchMove(t, e) {
                const n = o.Point.fromTouches(t.touches, this.props.rotations, this.props.scale)
                  , i = n.x - this.parentOffset.x
                  , r = n.y - this.parentOffset.y;
                this.isOutOfBounds(i, this.props.containerSize.width) || this.isOutOfBounds(r, this.props.containerSize.height) || (this.props.points[e] = new o.Point(i,r),
                s.MathUtils.isConvex(this.props.points) && this.props.cornerMoved({
                    index: e,
                    point: this.props.points[e]
                }))
            }
            cornerTouchEnd(t, e) {
                this.calculateSlopes()
            }
            calculateSlopes() {
                const t = [];
                for (let e = 0; e < this.POINT_COUNT; e++) {
                    const n = this.props.points[e]
                      , i = this.props.points[this.nextIndex(e)];
                    t.push(this.calculateSlope(n, i, !this.isHorizontal(e)))
                }
                this.props.cornerMoveEnd({
                    slopes: t
                })
            }
            calculateSlope(t, e, n) {
                return n ? (e.y - t.y) / (e.x - t.x) : (e.x - t.x) / (e.y - t.y)
            }
            render() {
                return r.default.createElement("div", {
                    style: {
                        width: "100%",
                        height: "100%",
                        position: "absolute"
                    }
                }, this.create())
            }
        }
        e.DraggablePointsContainer = c
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.MathUtils = void 0;
        e.MathUtils = class {
            static isConvex(t) {
                if (t.length < 4)
                    return !0;
                let e = !1
                  , n = t.length;
                for (let i = 0; i < n; i++) {
                    const r = t[(i + 2) % n].x - t[(i + 1) % n].x
                      , o = t[(i + 2) % n].y - t[(i + 1) % n].y
                      , s = t[i].x - t[(i + 1) % n].x
                      , a = r * (t[i].y - t[(i + 1) % n].y) - o * s;
                    if (0 == i)
                        e = a > 0;
                    else if (e != a > 0)
                        return !1
                }
                return !0
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.DraggableLinesContainer = void 0;
        const r = i(n(0))
          , o = n(1)
          , s = n(24)
          , a = n(56);
        class c extends s.DraggableBaseContainer {
            constructor() {
                super(...arguments),
                this.MAX_SLOPE_DIFF = 1
            }
            create() {
                if (!this.props.points || 4 !== this.props.points.length)
                    return null;
                const t = [];
                for (let e = 0; e < this.POINT_COUNT; e++) {
                    const n = this.props.points[e];
                    let i = this.props.points[this.nextIndex(e)];
                    const o = r.default.createElement("div", {
                        style: Object.assign(Object.assign({}, this.pointStyle), {
                            left: n.x + (i.x - n.x) / 2 - this.pointSize / 2 + "px",
                            top: n.y + (i.y - n.y) / 2 - this.pointSize / 2 + "px"
                        }),
                        key: e.toString(),
                        ref: t=>this.items[e] = t,
                        onTouchStart: t=>this.lineTouchStart(t, e),
                        onTouchMove: t=>this.lineTouchMove(t, e)
                    });
                    t.push(o)
                }
                return t
            }
            lineTouchStart(t, e) {
                const n = o.Point.fromTouches(t.touches, this.props.rotations, this.props.scale)
                  , i = this.items[e]
                  , r = o.Point.fromHtmlElement(i)
                  , s = this.props.points[e]
                  , c = this.props.points[this.nextIndex(e)];
                this.point1Start = a.Utils.copy(s),
                this.point2Start = a.Utils.copy(c),
                this.point1Offset = new o.Point(s.x - r.x,s.y - r.y),
                this.point2Offset = new o.Point(c.x - r.x,c.y - r.y),
                this.parentOffset = new o.Point(n.x - r.x,n.y - r.y)
            }
            lineTouchMove(t, e) {
                var n, i, r, s;
                const a = o.Point.fromTouches(t.touches, this.props.rotations, this.props.scale)
                  , c = this.props.points[e]
                  , l = this.props.points[this.nextIndex(e)]
                  , u = this.props.points[this.previousIndex(e)]
                  , h = this.props.points[this.nextIndex(e + 1)];
                if (this.isHorizontal(e)) {
                    const t = a.y - this.parentOffset.y;
                    if (this.isOutOfBounds(t, this.props.containerSize.height))
                        return;
                    const r = t + this.point1Offset.y
                      , o = t + this.point2Offset.y;
                    let s = c.x + (c.y - r) / -this.props.slopes[this.previousIndex(e)]
                      , d = l.x + (l.y - o) / -this.props.slopes[this.nextIndex(e)];
                    if (s = this.validateCoordinate(s, c.x),
                    d = this.validateCoordinate(d, l.x),
                    c.x = this.accountForSlopeCalculationError(s, c.x),
                    l.x = this.accountForSlopeCalculationError(d, l.x),
                    c.y = this.limitMinMaxCoordinates(r, null === (n = this.props.containerSize) || void 0 === n ? void 0 : n.height),
                    l.y = this.limitMinMaxCoordinates(o, null === (i = this.props.containerSize) || void 0 === i ? void 0 : i.height),
                    this.isNearOpposingPoint(this.point1Start, c, u, "y"))
                        return;
                    if (this.isNearOpposingPoint(this.point1Start, l, h, "y"))
                        return
                } else {
                    const t = a.x - this.parentOffset.x;
                    if (this.isOutOfBounds(t, this.props.containerSize.width))
                        return;
                    const n = t + this.point1Offset.x
                      , i = t + this.point2Offset.x;
                    let o = c.y + (c.x - n) / -this.props.slopes[this.previousIndex(e)]
                      , d = l.y + (l.x - i) / -this.props.slopes[this.nextIndex(e)];
                    if (o = this.validateCoordinate(o, c.y),
                    d = this.validateCoordinate(d, l.y),
                    c.y = this.accountForSlopeCalculationError(o, c.y),
                    l.y = this.accountForSlopeCalculationError(d, l.y),
                    c.x = this.limitMinMaxCoordinates(n, null === (r = this.props.containerSize) || void 0 === r ? void 0 : r.width),
                    l.x = this.limitMinMaxCoordinates(i, null === (s = this.props.containerSize) || void 0 === s ? void 0 : s.width),
                    this.isNearOpposingPoint(this.point1Start, c, u, "x"))
                        return;
                    if (this.isNearOpposingPoint(this.point1Start, l, h, "x"))
                        return
                }
                this.props.lineMoved({
                    points: [{
                        index: e,
                        coordinates: c
                    }, {
                        index: this.nextIndex(e),
                        coordinates: l
                    }],
                    isHorizontal: this.isHorizontal(e)
                })
            }
            accountForSlopeCalculationError(t, e) {
                return Math.abs(t - e) > this.MAX_SLOPE_DIFF ? e : t
            }
            isNearOpposingPoint(t, e, n, i) {
                if (t[i] > n[i]) {
                    if (e[i] - 10 < n[i])
                        return !0
                } else if (e[i] > n[i] - 10)
                    return !0;
                return !1
            }
            validateCoordinate(t, e) {
                return t === 1 / 0 || t === -1 / 0 || isNaN(t) ? e : t
            }
            limitMinMaxCoordinates(t, e) {
                return t < 0 ? 0 : t > e ? e : t
            }
            render() {
                return r.default.createElement("div", {
                    style: {
                        width: "100%",
                        height: "100%",
                        position: "absolute"
                    }
                }, this.create())
            }
        }
        e.DraggableLinesContainer = c
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.Utils = void 0;
        e.Utils = class {
            static toPixelSize(t) {
                return t + "px"
            }
            static containsString(t, e) {
                return !!t && -1 !== t.indexOf(e)
            }
            static copy(t) {
                return JSON.parse(JSON.stringify(t))
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.CroppingImage = void 0;
        const r = i(n(0));
        class o extends r.default.Component {
            render() {
                return r.default.createElement("img", {
                    ref: t=>this.image = t,
                    style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute"
                    },
                    src: this.props.src,
                    alt: ".",
                    onLoad: t=>{
                        t.target && this.props.onImageLoaded(t.target)
                    }
                })
            }
        }
        e.CroppingImage = o
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
            void 0 === i && (i = n),
            Object.defineProperty(t, i, {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        }
        : function(t, e, n, i) {
            void 0 === i && (i = n),
            t[i] = e[n]
        }
        )
          , r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
            Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            })
        }
        : function(t, e) {
            t.default = e
        }
        )
          , o = this && this.__importStar || function(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && i(e, t, n);
            return r(e, t),
            e
        }
          , s = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.Animatable = void 0;
        const a = s(n(0))
          , c = o(n(59));
        class l extends a.default.Component {
            constructor() {
                super(...arguments),
                this.animating = !1
            }
            width() {
                return this.container.offsetWidth - 2 * this.container.offsetLeft
            }
            height() {
                return this.container.offsetHeight - 2 * this.container.offsetTop
            }
            isAnimating() {
                return this.animating
            }
            render() {
                const {size: t, imageMargin: e, rotations: n, scale: i, margin: r, duration: o} = this.props
                  , s = 90 * (n - 1)
                  , l = 90 * n;
                this.previousScale || (this.previousScale = 1);
                const u = c.keyframes`
            from {transform: rotate(${s}deg) scale(${this.previousScale}); } 
            to   {transform: rotate(${l}deg)   scale(${i});
        }`
                  , h = c.default.div`position: absolute; animation: ${u} ${o}s;`;
                return this.previousScale = i,
                a.default.createElement("div", {
                    style: {
                        width: "100%",
                        height: "100%",
                        position: "absolute"
                    },
                    ref: t=>this.container = t
                }, a.default.createElement(h, {
                    style: {
                        width: this.calculate(t, r, "width"),
                        height: this.calculate(t, r, "height"),
                        transform: `rotate(${l}deg) scale(${i})`,
                        margin: r,
                        marginTop: this.marginWithAspect(e, "y", t),
                        marginLeft: this.marginWithAspect(e, "x", t)
                    },
                    onAnimationStart: ()=>{
                        this.animating = !0
                    }
                    ,
                    onAnimationEnd: ()=>{
                        this.animating = !1
                    }
                }, this.props.children))
            }
            marginWithAspect(t, e, n) {
                if (!t || !n)
                    return this.props.margin;
                const i = n.width > n.height;
                return "y" === e && i ? t[e] + this.props.margin : "x" !== e || i ? t[e] : t[e] + this.props.margin
            }
            calculate(t, e, n) {
                return t ? t[n] - 2 * e : "100%"
            }
        }
        e.Animatable = l
    }
    , function(t, e, n) {
        "use strict";
        n.r(e),
        function(t) {
            n.d(e, "ServerStyleSheet", (function() {
                return Nt
            }
            )),
            n.d(e, "StyleSheetConsumer", (function() {
                return it
            }
            )),
            n.d(e, "StyleSheetContext", (function() {
                return nt
            }
            )),
            n.d(e, "StyleSheetManager", (function() {
                return lt
            }
            )),
            n.d(e, "ThemeConsumer", (function() {
                return At
            }
            )),
            n.d(e, "ThemeContext", (function() {
                return Mt
            }
            )),
            n.d(e, "ThemeProvider", (function() {
                return Dt
            }
            )),
            n.d(e, "__PRIVATE__", (function() {
                return Bt
            }
            )),
            n.d(e, "createGlobalStyle", (function() {
                return Rt
            }
            )),
            n.d(e, "css", (function() {
                return _t
            }
            )),
            n.d(e, "isStyledComponent", (function() {
                return y
            }
            )),
            n.d(e, "keyframes", (function() {
                return jt
            }
            )),
            n.d(e, "useTheme", (function() {
                return Ut
            }
            )),
            n.d(e, "version", (function() {
                return w
            }
            )),
            n.d(e, "withTheme", (function() {
                return Ft
            }
            ));
            var i = n(13)
              , r = n(0)
              , o = n(25)
              , s = n.n(o)
              , a = n(26)
              , c = n(27)
              , l = n(15)
              , u = n(14)
              , h = n.n(u);
            function d() {
                return (d = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n)
                            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    return t
                }
                ).apply(this, arguments)
            }
            var f = function(t, e) {
                for (var n = [t[0]], i = 0, r = e.length; i < r; i += 1)
                    n.push(e[i], t[i + 1]);
                return n
            }
              , p = function(t) {
                return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !Object(i.typeOf)(t)
            }
              , m = Object.freeze([])
              , g = Object.freeze({});
            function v(t) {
                return "function" == typeof t
            }
            function _(t) {
                return t.displayName || t.name || "Component"
            }
            function y(t) {
                return t && "string" == typeof t.styledComponentId
            }
            var b = void 0 !== t && (t.env.REACT_APP_SC_ATTR || t.env.SC_ATTR) || "data-styled"
              , w = "5.3.0"
              , S = "undefined" != typeof window && "HTMLElement"in window
              , C = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : void 0 !== t && void 0 !== t.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== t.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== t.env.REACT_APP_SC_DISABLE_SPEEDY && t.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== t && void 0 !== t.env.SC_DISABLE_SPEEDY && "" !== t.env.SC_DISABLE_SPEEDY && ("false" !== t.env.SC_DISABLE_SPEEDY && t.env.SC_DISABLE_SPEEDY))
              , x = {};
            function E(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                    n[i - 1] = arguments[i];
                throw new Error("An error occurred. See https://git.io/JUIaE#" + t + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""))
            }
            var P = function() {
                function t(t) {
                    this.groupSizes = new Uint32Array(512),
                    this.length = 512,
                    this.tag = t
                }
                var e = t.prototype;
                return e.indexOfGroup = function(t) {
                    for (var e = 0, n = 0; n < t; n++)
                        e += this.groupSizes[n];
                    return e
                }
                ,
                e.insertRules = function(t, e) {
                    if (t >= this.groupSizes.length) {
                        for (var n = this.groupSizes, i = n.length, r = i; t >= r; )
                            (r <<= 1) < 0 && E(16, "" + t);
                        this.groupSizes = new Uint32Array(r),
                        this.groupSizes.set(n),
                        this.length = r;
                        for (var o = i; o < r; o++)
                            this.groupSizes[o] = 0
                    }
                    for (var s = this.indexOfGroup(t + 1), a = 0, c = e.length; a < c; a++)
                        this.tag.insertRule(s, e[a]) && (this.groupSizes[t]++,
                        s++)
                }
                ,
                e.clearGroup = function(t) {
                    if (t < this.length) {
                        var e = this.groupSizes[t]
                          , n = this.indexOfGroup(t)
                          , i = n + e;
                        this.groupSizes[t] = 0;
                        for (var r = n; r < i; r++)
                            this.tag.deleteRule(n)
                    }
                }
                ,
                e.getGroup = function(t) {
                    var e = "";
                    if (t >= this.length || 0 === this.groupSizes[t])
                        return e;
                    for (var n = this.groupSizes[t], i = this.indexOfGroup(t), r = i + n, o = i; o < r; o++)
                        e += this.tag.getRule(o) + "/*!sc*/\n";
                    return e
                }
                ,
                t
            }()
              , k = new Map
              , O = new Map
              , M = 1
              , A = function(t) {
                if (k.has(t))
                    return k.get(t);
                for (; O.has(M); )
                    M++;
                var e = M++;
                return k.set(t, e),
                O.set(e, t),
                e
            }
              , D = function(t) {
                return O.get(t)
            }
              , T = function(t, e) {
                k.set(t, e),
                O.set(e, t)
            }
              , I = "style[" + b + '][data-styled-version="5.3.0"]'
              , L = new RegExp("^" + b + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
              , z = function(t, e, n) {
                for (var i, r = n.split(","), o = 0, s = r.length; o < s; o++)
                    (i = r[o]) && t.registerName(e, i)
            }
              , R = function(t, e) {
                for (var n = e.innerHTML.split("/*!sc*/\n"), i = [], r = 0, o = n.length; r < o; r++) {
                    var s = n[r].trim();
                    if (s) {
                        var a = s.match(L);
                        if (a) {
                            var c = 0 | parseInt(a[1], 10)
                              , l = a[2];
                            0 !== c && (T(l, c),
                            z(t, l, a[3]),
                            t.getTag().insertRules(c, i)),
                            i.length = 0
                        } else
                            i.push(s)
                    }
                }
            }
              , j = function() {
                return "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null
            }
              , N = function(t) {
                var e = document.head
                  , n = t || e
                  , i = document.createElement("style")
                  , r = function(t) {
                    for (var e = t.childNodes, n = e.length; n >= 0; n--) {
                        var i = e[n];
                        if (i && 1 === i.nodeType && i.hasAttribute(b))
                            return i
                    }
                }(n)
                  , o = void 0 !== r ? r.nextSibling : null;
                i.setAttribute(b, "active"),
                i.setAttribute("data-styled-version", "5.3.0");
                var s = j();
                return s && i.setAttribute("nonce", s),
                n.insertBefore(i, o),
                i
            }
              , F = function() {
                function t(t) {
                    var e = this.element = N(t);
                    e.appendChild(document.createTextNode("")),
                    this.sheet = function(t) {
                        if (t.sheet)
                            return t.sheet;
                        for (var e = document.styleSheets, n = 0, i = e.length; n < i; n++) {
                            var r = e[n];
                            if (r.ownerNode === t)
                                return r
                        }
                        E(17)
                    }(e),
                    this.length = 0
                }
                var e = t.prototype;
                return e.insertRule = function(t, e) {
                    try {
                        return this.sheet.insertRule(e, t),
                        this.length++,
                        !0
                    } catch (t) {
                        return !1
                    }
                }
                ,
                e.deleteRule = function(t) {
                    this.sheet.deleteRule(t),
                    this.length--
                }
                ,
                e.getRule = function(t) {
                    var e = this.sheet.cssRules[t];
                    return void 0 !== e && "string" == typeof e.cssText ? e.cssText : ""
                }
                ,
                t
            }()
              , U = function() {
                function t(t) {
                    var e = this.element = N(t);
                    this.nodes = e.childNodes,
                    this.length = 0
                }
                var e = t.prototype;
                return e.insertRule = function(t, e) {
                    if (t <= this.length && t >= 0) {
                        var n = document.createTextNode(e)
                          , i = this.nodes[t];
                        return this.element.insertBefore(n, i || null),
                        this.length++,
                        !0
                    }
                    return !1
                }
                ,
                e.deleteRule = function(t) {
                    this.element.removeChild(this.nodes[t]),
                    this.length--
                }
                ,
                e.getRule = function(t) {
                    return t < this.length ? this.nodes[t].textContent : ""
                }
                ,
                t
            }()
              , B = function() {
                function t(t) {
                    this.rules = [],
                    this.length = 0
                }
                var e = t.prototype;
                return e.insertRule = function(t, e) {
                    return t <= this.length && (this.rules.splice(t, 0, e),
                    this.length++,
                    !0)
                }
                ,
                e.deleteRule = function(t) {
                    this.rules.splice(t, 1),
                    this.length--
                }
                ,
                e.getRule = function(t) {
                    return t < this.length ? this.rules[t] : ""
                }
                ,
                t
            }()
              , V = S
              , $ = {
                isServer: !S,
                useCSSOMInjection: !C
            }
              , H = function() {
                function t(t, e, n) {
                    void 0 === t && (t = g),
                    void 0 === e && (e = {}),
                    this.options = d({}, $, {}, t),
                    this.gs = e,
                    this.names = new Map(n),
                    !this.options.isServer && S && V && (V = !1,
                    function(t) {
                        for (var e = document.querySelectorAll(I), n = 0, i = e.length; n < i; n++) {
                            var r = e[n];
                            r && "active" !== r.getAttribute(b) && (R(t, r),
                            r.parentNode && r.parentNode.removeChild(r))
                        }
                    }(this))
                }
                t.registerId = function(t) {
                    return A(t)
                }
                ;
                var e = t.prototype;
                return e.reconstructWithOptions = function(e, n) {
                    return void 0 === n && (n = !0),
                    new t(d({}, this.options, {}, e),this.gs,n && this.names || void 0)
                }
                ,
                e.allocateGSInstance = function(t) {
                    return this.gs[t] = (this.gs[t] || 0) + 1
                }
                ,
                e.getTag = function() {
                    return this.tag || (this.tag = (n = (e = this.options).isServer,
                    i = e.useCSSOMInjection,
                    r = e.target,
                    t = n ? new B(r) : i ? new F(r) : new U(r),
                    new P(t)));
                    var t, e, n, i, r
                }
                ,
                e.hasNameForId = function(t, e) {
                    return this.names.has(t) && this.names.get(t).has(e)
                }
                ,
                e.registerName = function(t, e) {
                    if (A(t),
                    this.names.has(t))
                        this.names.get(t).add(e);
                    else {
                        var n = new Set;
                        n.add(e),
                        this.names.set(t, n)
                    }
                }
                ,
                e.insertRules = function(t, e, n) {
                    this.registerName(t, e),
                    this.getTag().insertRules(A(t), n)
                }
                ,
                e.clearNames = function(t) {
                    this.names.has(t) && this.names.get(t).clear()
                }
                ,
                e.clearRules = function(t) {
                    this.getTag().clearGroup(A(t)),
                    this.clearNames(t)
                }
                ,
                e.clearTag = function() {
                    this.tag = void 0
                }
                ,
                e.toString = function() {
                    return function(t) {
                        for (var e = t.getTag(), n = e.length, i = "", r = 0; r < n; r++) {
                            var o = D(r);
                            if (void 0 !== o) {
                                var s = t.names.get(o)
                                  , a = e.getGroup(r);
                                if (void 0 !== s && 0 !== a.length) {
                                    var c = b + ".g" + r + '[id="' + o + '"]'
                                      , l = "";
                                    void 0 !== s && s.forEach((function(t) {
                                        t.length > 0 && (l += t + ",")
                                    }
                                    )),
                                    i += "" + a + c + '{content:"' + l + '"}/*!sc*/\n'
                                }
                            }
                        }
                        return i
                    }(this)
                }
                ,
                t
            }()
              , W = /(a)(d)/gi
              , G = function(t) {
                return String.fromCharCode(t + (t > 25 ? 39 : 97))
            };
            function q(t) {
                var e, n = "";
                for (e = Math.abs(t); e > 52; e = e / 52 | 0)
                    n = G(e % 52) + n;
                return (G(e % 52) + n).replace(W, "$1-$2")
            }
            var K = function(t, e) {
                for (var n = e.length; n; )
                    t = 33 * t ^ e.charCodeAt(--n);
                return t
            }
              , X = function(t) {
                return K(5381, t)
            };
            function Y(t) {
                for (var e = 0; e < t.length; e += 1) {
                    var n = t[e];
                    if (v(n) && !y(n))
                        return !1
                }
                return !0
            }
            var J = X("5.3.0")
              , Z = function() {
                function t(t, e, n) {
                    this.rules = t,
                    this.staticRulesId = "",
                    this.isStatic = (void 0 === n || n.isStatic) && Y(t),
                    this.componentId = e,
                    this.baseHash = K(J, e),
                    this.baseStyle = n,
                    H.registerId(e)
                }
                return t.prototype.generateAndInjectStyles = function(t, e, n) {
                    var i = this.componentId
                      , r = [];
                    if (this.baseStyle && r.push(this.baseStyle.generateAndInjectStyles(t, e, n)),
                    this.isStatic && !n.hash)
                        if (this.staticRulesId && e.hasNameForId(i, this.staticRulesId))
                            r.push(this.staticRulesId);
                        else {
                            var o = vt(this.rules, t, e, n).join("")
                              , s = q(K(this.baseHash, o.length) >>> 0);
                            if (!e.hasNameForId(i, s)) {
                                var a = n(o, "." + s, void 0, i);
                                e.insertRules(i, s, a)
                            }
                            r.push(s),
                            this.staticRulesId = s
                        }
                    else {
                        for (var c = this.rules.length, l = K(this.baseHash, n.hash), u = "", h = 0; h < c; h++) {
                            var d = this.rules[h];
                            if ("string" == typeof d)
                                u += d;
                            else if (d) {
                                var f = vt(d, t, e, n)
                                  , p = Array.isArray(f) ? f.join("") : f;
                                l = K(l, p + h),
                                u += p
                            }
                        }
                        if (u) {
                            var m = q(l >>> 0);
                            if (!e.hasNameForId(i, m)) {
                                var g = n(u, "." + m, void 0, i);
                                e.insertRules(i, m, g)
                            }
                            r.push(m)
                        }
                    }
                    return r.join(" ")
                }
                ,
                t
            }()
              , Q = /^\s*\/\/.*$/gm
              , tt = [":", "[", ".", "#"];
            function et(t) {
                var e, n, i, r, o = void 0 === t ? g : t, s = o.options, c = void 0 === s ? g : s, l = o.plugins, u = void 0 === l ? m : l, h = new a.a(c), d = [], f = function(t) {
                    function e(e) {
                        if (e)
                            try {
                                t(e + "}")
                            } catch (t) {}
                    }
                    return function(n, i, r, o, s, a, c, l, u, h) {
                        switch (n) {
                        case 1:
                            if (0 === u && 64 === i.charCodeAt(0))
                                return t(i + ";"),
                                "";
                            break;
                        case 2:
                            if (0 === l)
                                return i + "/*|*/";
                            break;
                        case 3:
                            switch (l) {
                            case 102:
                            case 112:
                                return t(r[0] + i),
                                "";
                            default:
                                return i + (0 === h ? "/*|*/" : "")
                            }
                        case -2:
                            i.split("/*|*/}").forEach(e)
                        }
                    }
                }((function(t) {
                    d.push(t)
                }
                )), p = function(t, i, o) {
                    return 0 === i && -1 !== tt.indexOf(o[n.length]) || o.match(r) ? t : "." + e
                };
                function v(t, o, s, a) {
                    void 0 === a && (a = "&");
                    var c = t.replace(Q, "")
                      , l = o && s ? s + " " + o + " { " + c + " }" : c;
                    return e = a,
                    n = o,
                    i = new RegExp("\\" + n + "\\b","g"),
                    r = new RegExp("(\\" + n + "\\b){2,}"),
                    h(s || !o ? "" : o, l)
                }
                return h.use([].concat(u, [function(t, e, r) {
                    2 === t && r.length && r[0].lastIndexOf(n) > 0 && (r[0] = r[0].replace(i, p))
                }
                , f, function(t) {
                    if (-2 === t) {
                        var e = d;
                        return d = [],
                        e
                    }
                }
                ])),
                v.hash = u.length ? u.reduce((function(t, e) {
                    return e.name || E(15),
                    K(t, e.name)
                }
                ), 5381).toString() : "",
                v
            }
            var nt = r.default.createContext()
              , it = nt.Consumer
              , rt = r.default.createContext()
              , ot = (rt.Consumer,
            new H)
              , st = et();
            function at() {
                return Object(r.useContext)(nt) || ot
            }
            function ct() {
                return Object(r.useContext)(rt) || st
            }
            function lt(t) {
                var e = Object(r.useState)(t.stylisPlugins)
                  , n = e[0]
                  , i = e[1]
                  , o = at()
                  , a = Object(r.useMemo)((function() {
                    var e = o;
                    return t.sheet ? e = t.sheet : t.target && (e = e.reconstructWithOptions({
                        target: t.target
                    }, !1)),
                    t.disableCSSOMInjection && (e = e.reconstructWithOptions({
                        useCSSOMInjection: !1
                    })),
                    e
                }
                ), [t.disableCSSOMInjection, t.sheet, t.target])
                  , c = Object(r.useMemo)((function() {
                    return et({
                        options: {
                            prefix: !t.disableVendorPrefixes
                        },
                        plugins: n
                    })
                }
                ), [t.disableVendorPrefixes, n]);
                return Object(r.useEffect)((function() {
                    s()(n, t.stylisPlugins) || i(t.stylisPlugins)
                }
                ), [t.stylisPlugins]),
                r.default.createElement(nt.Provider, {
                    value: a
                }, r.default.createElement(rt.Provider, {
                    value: c
                }, t.children))
            }
            var ut = function() {
                function t(t, e) {
                    var n = this;
                    this.inject = function(t, e) {
                        void 0 === e && (e = st);
                        var i = n.name + e.hash;
                        t.hasNameForId(n.id, i) || t.insertRules(n.id, i, e(n.rules, i, "@keyframes"))
                    }
                    ,
                    this.toString = function() {
                        return E(12, String(n.name))
                    }
                    ,
                    this.name = t,
                    this.id = "sc-keyframes-" + t,
                    this.rules = e
                }
                return t.prototype.getName = function(t) {
                    return void 0 === t && (t = st),
                    this.name + t.hash
                }
                ,
                t
            }()
              , ht = /([A-Z])/
              , dt = /([A-Z])/g
              , ft = /^ms-/
              , pt = function(t) {
                return "-" + t.toLowerCase()
            };
            function mt(t) {
                return ht.test(t) ? t.replace(dt, pt).replace(ft, "-ms-") : t
            }
            var gt = function(t) {
                return null == t || !1 === t || "" === t
            };
            function vt(t, e, n, i) {
                if (Array.isArray(t)) {
                    for (var r, o = [], s = 0, a = t.length; s < a; s += 1)
                        "" !== (r = vt(t[s], e, n, i)) && (Array.isArray(r) ? o.push.apply(o, r) : o.push(r));
                    return o
                }
                return gt(t) ? "" : y(t) ? "." + t.styledComponentId : v(t) ? "function" != typeof (l = t) || l.prototype && l.prototype.isReactComponent || !e ? t : vt(t(e), e, n, i) : t instanceof ut ? n ? (t.inject(n, i),
                t.getName(i)) : t : p(t) ? function t(e, n) {
                    var i, r, o = [];
                    for (var s in e)
                        e.hasOwnProperty(s) && !gt(e[s]) && (p(e[s]) ? o.push.apply(o, t(e[s], s)) : v(e[s]) ? o.push(mt(s) + ":", e[s], ";") : o.push(mt(s) + ": " + (i = s,
                        (null == (r = e[s]) || "boolean" == typeof r || "" === r ? "" : "number" != typeof r || 0 === r || i in c.a ? String(r).trim() : r + "px") + ";")));
                    return n ? [n + " {"].concat(o, ["}"]) : o
                }(t) : t.toString();
                var l
            }
            function _t(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                    n[i - 1] = arguments[i];
                return v(t) || p(t) ? vt(f(m, [t].concat(n))) : 0 === n.length && 1 === t.length && "string" == typeof t[0] ? t : vt(f(t, n))
            }
            new Set;
            var yt = function(t, e, n) {
                return void 0 === n && (n = g),
                t.theme !== n.theme && t.theme || e || n.theme
            }
              , bt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g
              , wt = /(^-|-$)/g;
            function St(t) {
                return t.replace(bt, "-").replace(wt, "")
            }
            var Ct = function(t) {
                return q(X(t) >>> 0)
            };
            function xt(t) {
                return "string" == typeof t && !0
            }
            var Et = function(t) {
                return "function" == typeof t || "object" == typeof t && null !== t && !Array.isArray(t)
            }
              , Pt = function(t) {
                return "__proto__" !== t && "constructor" !== t && "prototype" !== t
            };
            function kt(t, e, n) {
                var i = t[n];
                Et(e) && Et(i) ? Ot(i, e) : t[n] = e
            }
            function Ot(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                    n[i - 1] = arguments[i];
                for (var r = 0, o = n; r < o.length; r++) {
                    var s = o[r];
                    if (Et(s))
                        for (var a in s)
                            Pt(a) && kt(t, s[a], a)
                }
                return t
            }
            var Mt = r.default.createContext()
              , At = Mt.Consumer;
            function Dt(t) {
                var e = Object(r.useContext)(Mt)
                  , n = Object(r.useMemo)((function() {
                    return function(t, e) {
                        return t ? v(t) ? t(e) : Array.isArray(t) || "object" != typeof t ? E(8) : e ? d({}, e, {}, t) : t : E(14)
                    }(t.theme, e)
                }
                ), [t.theme, e]);
                return t.children ? r.default.createElement(Mt.Provider, {
                    value: n
                }, t.children) : null
            }
            var Tt = {};
            function It(t, e, n) {
                var i = y(t)
                  , o = !xt(t)
                  , s = e.attrs
                  , a = void 0 === s ? m : s
                  , c = e.componentId
                  , u = void 0 === c ? function(t, e) {
                    var n = "string" != typeof t ? "sc" : St(t);
                    Tt[n] = (Tt[n] || 0) + 1;
                    var i = n + "-" + Ct("5.3.0" + n + Tt[n]);
                    return e ? e + "-" + i : i
                }(e.displayName, e.parentComponentId) : c
                  , f = e.displayName
                  , p = void 0 === f ? function(t) {
                    return xt(t) ? "styled." + t : "Styled(" + _(t) + ")"
                }(t) : f
                  , b = e.displayName && e.componentId ? St(e.displayName) + "-" + e.componentId : e.componentId || u
                  , w = i && t.attrs ? Array.prototype.concat(t.attrs, a).filter(Boolean) : a
                  , S = e.shouldForwardProp;
                i && t.shouldForwardProp && (S = e.shouldForwardProp ? function(n, i, r) {
                    return t.shouldForwardProp(n, i, r) && e.shouldForwardProp(n, i, r)
                }
                : t.shouldForwardProp);
                var C, x = new Z(n,b,i ? t.componentStyle : void 0), E = x.isStatic && 0 === a.length, P = function(t, e) {
                    return function(t, e, n, i) {
                        var o = t.attrs
                          , s = t.componentStyle
                          , a = t.defaultProps
                          , c = t.foldedComponentIds
                          , u = t.shouldForwardProp
                          , h = t.styledComponentId
                          , f = t.target
                          , p = function(t, e, n) {
                            void 0 === t && (t = g);
                            var i = d({}, e, {
                                theme: t
                            })
                              , r = {};
                            return n.forEach((function(t) {
                                var e, n, o, s = t;
                                for (e in v(s) && (s = s(i)),
                                s)
                                    i[e] = r[e] = "className" === e ? (n = r[e],
                                    o = s[e],
                                    n && o ? n + " " + o : n || o) : s[e]
                            }
                            )),
                            [i, r]
                        }(yt(e, Object(r.useContext)(Mt), a) || g, e, o)
                          , m = p[0]
                          , _ = p[1]
                          , y = function(t, e, n, i) {
                            var r = at()
                              , o = ct();
                            return e ? t.generateAndInjectStyles(g, r, o) : t.generateAndInjectStyles(n, r, o)
                        }(s, i, m)
                          , b = n
                          , w = _.$as || e.$as || _.as || e.as || f
                          , S = xt(w)
                          , C = _ !== e ? d({}, e, {}, _) : e
                          , x = {};
                        for (var E in C)
                            "$" !== E[0] && "as" !== E && ("forwardedAs" === E ? x.as = C[E] : (u ? u(E, l.a, w) : !S || Object(l.a)(E)) && (x[E] = C[E]));
                        return e.style && _.style !== e.style && (x.style = d({}, e.style, {}, _.style)),
                        x.className = Array.prototype.concat(c, h, y !== h ? y : null, e.className, _.className).filter(Boolean).join(" "),
                        x.ref = b,
                        Object(r.createElement)(w, x)
                    }(C, t, e, E)
                };
                return P.displayName = p,
                (C = r.default.forwardRef(P)).attrs = w,
                C.componentStyle = x,
                C.displayName = p,
                C.shouldForwardProp = S,
                C.foldedComponentIds = i ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId) : m,
                C.styledComponentId = b,
                C.target = i ? t.target : t,
                C.withComponent = function(t) {
                    var i = e.componentId
                      , r = function(t, e) {
                        if (null == t)
                            return {};
                        var n, i, r = {}, o = Object.keys(t);
                        for (i = 0; i < o.length; i++)
                            n = o[i],
                            e.indexOf(n) >= 0 || (r[n] = t[n]);
                        return r
                    }(e, ["componentId"])
                      , o = i && i + "-" + (xt(t) ? t : St(_(t)));
                    return It(t, d({}, r, {
                        attrs: w,
                        componentId: o
                    }), n)
                }
                ,
                Object.defineProperty(C, "defaultProps", {
                    get: function() {
                        return this._foldedDefaultProps
                    },
                    set: function(e) {
                        this._foldedDefaultProps = i ? Ot({}, t.defaultProps, e) : e
                    }
                }),
                C.toString = function() {
                    return "." + C.styledComponentId
                }
                ,
                o && h()(C, t, {
                    attrs: !0,
                    componentStyle: !0,
                    displayName: !0,
                    foldedComponentIds: !0,
                    shouldForwardProp: !0,
                    styledComponentId: !0,
                    target: !0,
                    withComponent: !0
                }),
                C
            }
            var Lt = function(t) {
                return function t(e, n, r) {
                    if (void 0 === r && (r = g),
                    !Object(i.isValidElementType)(n))
                        return E(1, String(n));
                    var o = function() {
                        return e(n, r, _t.apply(void 0, arguments))
                    };
                    return o.withConfig = function(i) {
                        return t(e, n, d({}, r, {}, i))
                    }
                    ,
                    o.attrs = function(i) {
                        return t(e, n, d({}, r, {
                            attrs: Array.prototype.concat(r.attrs, i).filter(Boolean)
                        }))
                    }
                    ,
                    o
                }(It, t)
            };
            ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function(t) {
                Lt[t] = Lt(t)
            }
            ));
            var zt = function() {
                function t(t, e) {
                    this.rules = t,
                    this.componentId = e,
                    this.isStatic = Y(t),
                    H.registerId(this.componentId + 1)
                }
                var e = t.prototype;
                return e.createStyles = function(t, e, n, i) {
                    var r = i(vt(this.rules, e, n, i).join(""), "")
                      , o = this.componentId + t;
                    n.insertRules(o, o, r)
                }
                ,
                e.removeStyles = function(t, e) {
                    e.clearRules(this.componentId + t)
                }
                ,
                e.renderStyles = function(t, e, n, i) {
                    t > 2 && H.registerId(this.componentId + t),
                    this.removeStyles(t, n),
                    this.createStyles(t, e, n, i)
                }
                ,
                t
            }();
            function Rt(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                    n[i - 1] = arguments[i];
                var o = _t.apply(void 0, [t].concat(n))
                  , s = "sc-global-" + Ct(JSON.stringify(o))
                  , a = new zt(o,s);
                function c(t) {
                    var e = at()
                      , n = ct()
                      , i = Object(r.useContext)(Mt)
                      , o = Object(r.useRef)(e.allocateGSInstance(s)).current;
                    return Object(r.useLayoutEffect)((function() {
                        return l(o, t, e, i, n),
                        function() {
                            return a.removeStyles(o, e)
                        }
                    }
                    ), [o, t, e, i, n]),
                    null
                }
                function l(t, e, n, i, r) {
                    if (a.isStatic)
                        a.renderStyles(t, x, n, r);
                    else {
                        var o = d({}, e, {
                            theme: yt(e, i, c.defaultProps)
                        });
                        a.renderStyles(t, o, n, r)
                    }
                }
                return r.default.memo(c)
            }
            function jt(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                    n[i - 1] = arguments[i];
                var r = _t.apply(void 0, [t].concat(n)).join("")
                  , o = Ct(r);
                return new ut(o,r)
            }
            var Nt = function() {
                function t() {
                    var t = this;
                    this._emitSheetCSS = function() {
                        var e = t.instance.toString()
                          , n = j();
                        return "<style " + [n && 'nonce="' + n + '"', b + '="true"', 'data-styled-version="5.3.0"'].filter(Boolean).join(" ") + ">" + e + "</style>"
                    }
                    ,
                    this.getStyleTags = function() {
                        return t.sealed ? E(2) : t._emitSheetCSS()
                    }
                    ,
                    this.getStyleElement = function() {
                        var e;
                        if (t.sealed)
                            return E(2);
                        var n = ((e = {})[b] = "",
                        e["data-styled-version"] = "5.3.0",
                        e.dangerouslySetInnerHTML = {
                            __html: t.instance.toString()
                        },
                        e)
                          , i = j();
                        return i && (n.nonce = i),
                        [r.default.createElement("style", d({}, n, {
                            key: "sc-0-0"
                        }))]
                    }
                    ,
                    this.seal = function() {
                        t.sealed = !0
                    }
                    ,
                    this.instance = new H({
                        isServer: !0
                    }),
                    this.sealed = !1
                }
                var e = t.prototype;
                return e.collectStyles = function(t) {
                    return this.sealed ? E(2) : r.default.createElement(lt, {
                        sheet: this.instance
                    }, t)
                }
                ,
                e.interleaveWithNodeStream = function(t) {
                    return E(3)
                }
                ,
                t
            }()
              , Ft = function(t) {
                var e = r.default.forwardRef((function(e, n) {
                    var i = Object(r.useContext)(Mt)
                      , o = t.defaultProps
                      , s = yt(e, i, o);
                    return r.default.createElement(t, d({}, e, {
                        theme: s,
                        ref: n
                    }))
                }
                ));
                return h()(e, t),
                e.displayName = "WithTheme(" + _(t) + ")",
                e
            }
              , Ut = function() {
                return Object(r.useContext)(Mt)
            }
              , Bt = {
                StyleSheet: H,
                masterSheet: ot
            };
            e.default = Lt
        }
        .call(this, n(60))
    }
    , function(t, e) {
        var n, i, r = t.exports = {};
        function o() {
            throw new Error("setTimeout has not been defined")
        }
        function s() {
            throw new Error("clearTimeout has not been defined")
        }
        function a(t) {
            if (n === setTimeout)
                return setTimeout(t, 0);
            if ((n === o || !n) && setTimeout)
                return n = setTimeout,
                setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }
        !function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (t) {
                n = o
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (t) {
                i = s
            }
        }();
        var c, l = [], u = !1, h = -1;
        function d() {
            u && c && (u = !1,
            c.length ? l = c.concat(l) : h = -1,
            l.length && f())
        }
        function f() {
            if (!u) {
                var t = a(d);
                u = !0;
                for (var e = l.length; e; ) {
                    for (c = l,
                    l = []; ++h < e; )
                        c && c[h].run();
                    h = -1,
                    e = l.length
                }
                c = null,
                u = !1,
                function(t) {
                    if (i === clearTimeout)
                        return clearTimeout(t);
                    if ((i === s || !i) && clearTimeout)
                        return i = clearTimeout,
                        clearTimeout(t);
                    try {
                        i(t)
                    } catch (e) {
                        try {
                            return i.call(null, t)
                        } catch (e) {
                            return i.call(this, t)
                        }
                    }
                }(t)
            }
        }
        function p(t, e) {
            this.fun = t,
            this.array = e
        }
        function m() {}
        r.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            l.push(new p(t,e)),
            1 !== l.length || u || a(f)
        }
        ,
        p.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        r.title = "browser",
        r.browser = !0,
        r.env = {},
        r.argv = [],
        r.version = "",
        r.versions = {},
        r.on = m,
        r.addListener = m,
        r.once = m,
        r.off = m,
        r.removeListener = m,
        r.removeAllListeners = m,
        r.emit = m,
        r.prependListener = m,
        r.prependOnceListener = m,
        r.listeners = function(t) {
            return []
        }
        ,
        r.binding = function(t) {
            throw new Error("process.binding is not supported")
        }
        ,
        r.cwd = function() {
            return "/"
        }
        ,
        r.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }
        ,
        r.umask = function() {
            return 0
        }
    }
    , function(t, e, n) {
        "use strict";
        var i = 60103
          , r = 60106
          , o = 60107
          , s = 60108
          , a = 60114
          , c = 60109
          , l = 60110
          , u = 60112
          , h = 60113
          , d = 60120
          , f = 60115
          , p = 60116
          , m = 60121
          , g = 60122
          , v = 60117
          , _ = 60129
          , y = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
            var b = Symbol.for;
            i = b("react.element"),
            r = b("react.portal"),
            o = b("react.fragment"),
            s = b("react.strict_mode"),
            a = b("react.profiler"),
            c = b("react.provider"),
            l = b("react.context"),
            u = b("react.forward_ref"),
            h = b("react.suspense"),
            d = b("react.suspense_list"),
            f = b("react.memo"),
            p = b("react.lazy"),
            m = b("react.block"),
            g = b("react.server.block"),
            v = b("react.fundamental"),
            _ = b("react.debug_trace_mode"),
            y = b("react.legacy_hidden")
        }
        function w(t) {
            if ("object" == typeof t && null !== t) {
                var e = t.$$typeof;
                switch (e) {
                case i:
                    switch (t = t.type) {
                    case o:
                    case a:
                    case s:
                    case h:
                    case d:
                        return t;
                    default:
                        switch (t = t && t.$$typeof) {
                        case l:
                        case u:
                        case p:
                        case f:
                        case c:
                            return t;
                        default:
                            return e
                        }
                    }
                case r:
                    return e
                }
            }
        }
        var S = c
          , C = i
          , x = u
          , E = o
          , P = p
          , k = f
          , O = r
          , M = a
          , A = s
          , D = h;
        e.ContextConsumer = l,
        e.ContextProvider = S,
        e.Element = C,
        e.ForwardRef = x,
        e.Fragment = E,
        e.Lazy = P,
        e.Memo = k,
        e.Portal = O,
        e.Profiler = M,
        e.StrictMode = A,
        e.Suspense = D,
        e.isAsyncMode = function() {
            return !1
        }
        ,
        e.isConcurrentMode = function() {
            return !1
        }
        ,
        e.isContextConsumer = function(t) {
            return w(t) === l
        }
        ,
        e.isContextProvider = function(t) {
            return w(t) === c
        }
        ,
        e.isElement = function(t) {
            return "object" == typeof t && null !== t && t.$$typeof === i
        }
        ,
        e.isForwardRef = function(t) {
            return w(t) === u
        }
        ,
        e.isFragment = function(t) {
            return w(t) === o
        }
        ,
        e.isLazy = function(t) {
            return w(t) === p
        }
        ,
        e.isMemo = function(t) {
            return w(t) === f
        }
        ,
        e.isPortal = function(t) {
            return w(t) === r
        }
        ,
        e.isProfiler = function(t) {
            return w(t) === a
        }
        ,
        e.isStrictMode = function(t) {
            return w(t) === s
        }
        ,
        e.isSuspense = function(t) {
            return w(t) === h
        }
        ,
        e.isValidElementType = function(t) {
            return "string" == typeof t || "function" == typeof t || t === o || t === a || t === _ || t === s || t === h || t === d || t === y || "object" == typeof t && null !== t && (t.$$typeof === p || t.$$typeof === f || t.$$typeof === c || t.$$typeof === l || t.$$typeof === u || t.$$typeof === v || t.$$typeof === m || t[0] === g)
        }
        ,
        e.typeOf = w
    }
    , function(t, e, n) {
        "use strict";
        t.exports = n(63)
    }
    , function(t, e, n) {
        "use strict";
        var i = "function" == typeof Symbol && Symbol.for
          , r = i ? Symbol.for("react.element") : 60103
          , o = i ? Symbol.for("react.portal") : 60106
          , s = i ? Symbol.for("react.fragment") : 60107
          , a = i ? Symbol.for("react.strict_mode") : 60108
          , c = i ? Symbol.for("react.profiler") : 60114
          , l = i ? Symbol.for("react.provider") : 60109
          , u = i ? Symbol.for("react.context") : 60110
          , h = i ? Symbol.for("react.async_mode") : 60111
          , d = i ? Symbol.for("react.concurrent_mode") : 60111
          , f = i ? Symbol.for("react.forward_ref") : 60112
          , p = i ? Symbol.for("react.suspense") : 60113
          , m = i ? Symbol.for("react.suspense_list") : 60120
          , g = i ? Symbol.for("react.memo") : 60115
          , v = i ? Symbol.for("react.lazy") : 60116
          , _ = i ? Symbol.for("react.block") : 60121
          , y = i ? Symbol.for("react.fundamental") : 60117
          , b = i ? Symbol.for("react.responder") : 60118
          , w = i ? Symbol.for("react.scope") : 60119;
        function S(t) {
            if ("object" == typeof t && null !== t) {
                var e = t.$$typeof;
                switch (e) {
                case r:
                    switch (t = t.type) {
                    case h:
                    case d:
                    case s:
                    case c:
                    case a:
                    case p:
                        return t;
                    default:
                        switch (t = t && t.$$typeof) {
                        case u:
                        case f:
                        case v:
                        case g:
                        case l:
                            return t;
                        default:
                            return e
                        }
                    }
                case o:
                    return e
                }
            }
        }
        function C(t) {
            return S(t) === d
        }
        e.AsyncMode = h,
        e.ConcurrentMode = d,
        e.ContextConsumer = u,
        e.ContextProvider = l,
        e.Element = r,
        e.ForwardRef = f,
        e.Fragment = s,
        e.Lazy = v,
        e.Memo = g,
        e.Portal = o,
        e.Profiler = c,
        e.StrictMode = a,
        e.Suspense = p,
        e.isAsyncMode = function(t) {
            return C(t) || S(t) === h
        }
        ,
        e.isConcurrentMode = C,
        e.isContextConsumer = function(t) {
            return S(t) === u
        }
        ,
        e.isContextProvider = function(t) {
            return S(t) === l
        }
        ,
        e.isElement = function(t) {
            return "object" == typeof t && null !== t && t.$$typeof === r
        }
        ,
        e.isForwardRef = function(t) {
            return S(t) === f
        }
        ,
        e.isFragment = function(t) {
            return S(t) === s
        }
        ,
        e.isLazy = function(t) {
            return S(t) === v
        }
        ,
        e.isMemo = function(t) {
            return S(t) === g
        }
        ,
        e.isPortal = function(t) {
            return S(t) === o
        }
        ,
        e.isProfiler = function(t) {
            return S(t) === c
        }
        ,
        e.isStrictMode = function(t) {
            return S(t) === a
        }
        ,
        e.isSuspense = function(t) {
            return S(t) === p
        }
        ,
        e.isValidElementType = function(t) {
            return "string" == typeof t || "function" == typeof t || t === s || t === d || t === c || t === a || t === p || t === m || "object" == typeof t && null !== t && (t.$$typeof === v || t.$$typeof === g || t.$$typeof === l || t.$$typeof === u || t.$$typeof === f || t.$$typeof === y || t.$$typeof === b || t.$$typeof === w || t.$$typeof === _)
        }
        ,
        e.typeOf = S
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.ScrollLock = void 0;
        const r = i(n(0))
          , o = n(5);
        class s extends r.default.Component {
            componentDidMount() {
                o.ViewUtils.disableScreenMovement()
            }
            componentWillUnmount() {
                o.ViewUtils.enableScreenMovement()
            }
            render() {
                return r.default.createElement("div", null)
            }
        }
        e.ScrollLock = s
    }
    , function(t, e, n) {
        "use strict";
        var i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.MagnifierViewProps = e.MagnifierCrosshair = e.MagnifierOptions = e.MagnifierSourceImage = void 0;
        const r = i(n(0))
          , o = n(1)
          , s = n(3)
          , a = n(2);
        e.MagnifierSourceImage = class {
            constructor(t, e) {
                this.element = t,
                this.size = e
            }
        }
        ;
        e.MagnifierOptions = class {
        }
        ;
        class c extends r.default.Component {
            render() {
                return r.default.createElement("div", {
                    style: this.props.style
                }, r.default.createElement("svg", null, this.vertical(), this.horizontal()))
            }
            half() {
                return this.props.size / 2
            }
            vertical() {
                const t = this.half();
                return r.default.createElement("line", {
                    x1: t,
                    y1: 0,
                    x2: t,
                    y2: this.props.size,
                    stroke: this.props.color,
                    strokeWidth: "2"
                })
            }
            horizontal() {
                const t = this.half();
                return r.default.createElement("line", {
                    x1: 0,
                    y1: t,
                    x2: this.props.size,
                    y2: t,
                    stroke: this.props.color,
                    strokeWidth: "2"
                })
            }
        }
        e.MagnifierCrosshair = c;
        e.MagnifierViewProps = class {
        }
        ;
        class l extends r.default.Component {
            constructor(t) {
                super(t),
                this.MAX_ROTATIONS = 4,
                this.state = {
                    frame: s.Frame.empty(),
                    cropImageFitSize: a.Size.empty(),
                    rotation: {
                        count: 0,
                        scale: 1
                    },
                    margin: {
                        left: this.props.style.margin,
                        top: this.props.style.margin
                    },
                    container: {
                        width: 0
                    },
                    scale: {
                        width: 1,
                        height: 1
                    }
                }
            }
            get crosshairSize() {
                var t, e;
                return null === (e = null === (t = this.props.style) || void 0 === t ? void 0 : t.crosshair) || void 0 === e ? void 0 : e.size
            }
            style() {
                return {
                    container: {
                        marginLeft: this.state.margin.left,
                        marginTop: this.state.margin.top,
                        width: this.state.frame.width,
                        height: this.state.frame.height,
                        borderRadius: this.props.style.size / 2,
                        border: this.props.style.border.width + "px solid " + this.props.style.border.color,
                        position: "absolute",
                        overflow: "hidden",
                        zIndex: 50,
                        transform: "rotate(" + 90 * this.state.rotation.count + "deg)"
                    },
                    image: {
                        width: this.state.cropImageFitSize.width * this.props.style.zoom,
                        height: this.state.cropImageFitSize.height * this.props.style.zoom,
                        marginLeft: -this.state.frame.x,
                        marginTop: -this.state.frame.y,
                        objectFit: "cover"
                    },
                    crosshair: {
                        margin: "auto",
                        position: "absolute",
                        width: this.crosshairSize,
                        height: this.crosshairSize,
                        top: this.state.frame.height / 2 - this.crosshairSize / 2,
                        left: this.state.frame.width / 2 - this.crosshairSize / 2
                    }
                }
            }
            render() {
                return this.state.visible ? r.default.createElement("div", {
                    style: this.style().container
                }, r.default.createElement("img", {
                    style: this.style().image,
                    ref: t=>this.destination = t,
                    src: this.props.src,
                    alt: "."
                }), r.default.createElement(c, {
                    style: this.style().crosshair,
                    size: this.crosshairSize,
                    color: this.props.style.crosshair.color
                })) : null
            }
            update(t) {
                this.destination.src = t.source.element.src;
                const e = s.Frame.fromPoint(o.Point.scaleUpTo(t.origin, new a.Size(this.props.style.zoom,this.props.style.zoom)), this.props.style.size)
                  , n = t.container.width - (this.props.style.margin + this.props.style.size)
                  , i = this.isPointTopLeft(t.origin, t.source.size, t.rotations);
                this.setState({
                    frame: e,
                    cropImageFitSize: a.Size.subtractFrom(t.source.size, 2 * t.padding),
                    rotation: {
                        count: t.rotations,
                        scale: t.scale
                    },
                    margin: {
                        left: i ? n : this.props.style.margin
                    },
                    container: {
                        width: t.container.width
                    },
                    scale: {
                        width: t.source.size.width / t.container.width,
                        height: t.source.size.height / t.container.height
                    }
                })
            }
            isPointTopLeft(t, e, n) {
                const i = t.x
                  , r = t.y
                  , o = this.normalizeRotations(n)
                  , s = this.state.container.width / 4;
                return 0 === o ? i < s && r < s : 1 === o ? i < s && r > e.height - s : 2 === o ? i > e.width - s && r > e.height - s : i > e.width - s && r < s
            }
            setIsVisible(t, e) {
                this.setState({
                    visible: t
                }, e)
            }
            normalizeRotations(t) {
                return t % this.MAX_ROTATIONS
            }
        }
        e.default = l
    }
    ])
}
));
