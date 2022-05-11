webpackJsonp([1], {
    0: function(e, t) {},
    "4cf+": function(e, t) {
        e.exports = {
            primaryColor: "#7c4eef",
            successColor: "#67C23A",
            errorColor: "#F56C6C",
            warningColor: "#E6A23C"
        }
    },
    "A7/q": function(e, t) {
        e.exports = {
            primaryColor: "#7c4eef",
            successColor: "#67C23A",
            errorColor: "#F56C6C",
            warningColor: "#E6A23C"
        }
    },
    "IX+u": function(e, t) {},
    IXeD: function(e, t) {},
    JUT5: function(e, t) {},
    "L+Pg": function(e, t) {
        e.exports = {
            primaryColor: "#7c4eef",
            successColor: "#67C23A",
            errorColor: "#F56C6C",
            warningColor: "#E6A23C",
            theme: "#7c4eef"
        }
    },
    NHnr: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {};
        a.d(i, "trimRegex", function() {
            return Pt
        }),
        a.d(i, "rules", function() {
            return Rt
        }),
        a.d(i, "validateRule", function() {
            return Ot
        });
        var n = {};
        a.d(n, "byteFmt", function() {
            return Wt
        }),
        a.d(n, "toTree", function() {
            return Zt
        }),
        a.d(n, "convertToIcon", function() {
            return Gt
        }),
        a.d(n, "getTreeNode", function() {
            return Jt
        });
        var o = {};
        a.d(o, "repoTypeMapping", function() {
            return Qt
        });
        var s = a("7+uW")
          , r = "TOKEN";
        function l() {
            return window.localStorage.getItem(r)
        }
        function c(e) {
            window.localStorage.setItem(r, e)
        }
        function u() {
            window.localStorage.removeItem(r)
        }
        window.parent.postMessage({
            childStatus: "isReady"
        }, "*"),
        window.addEventListener("message", function(e) {
            e.data.token && c(e.data.token),
            e.data.sendToken && window.parent.postMessage({
                childStatus: "isReceived"
            }, "*")
        });
        var p = {
            render: function() {
                var e = this.$createElement
                  , t = this._self._c || e;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t("router-view")], 1)
            },
            staticRenderFns: []
        };
        var d = a("VU/8")({
            name: "App"
        }, p, !1, function(e) {
            a("ajWB")
        }, null, null).exports
          , f = a("Bldn")
          , m = a.n(f)
          , h = {
            name: "IIcon",
            props: {
                name: {
                    type: String,
                    required: !0,
                    default: ""
                }
            },
            computed: {
                iconName: function() {
                    return "#icon-" + this.name
                }
            }
        }
          , v = {
            render: function() {
                var e = this.$createElement
                  , t = this._self._c || e;
                return t("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [t("use", {
                    attrs: {
                        "xlink:href": this.iconName
                    }
                })])
            },
            staticRenderFns: []
        }
          , g = a("VU/8")(h, v, !1, null, null, null).exports
          , b = a("Gu7T")
          , y = a.n(b)
          , F = {
            name: "PaginationCustom",
            props: {
                pageSize: {
                    type: Number,
                    default: 0
                },
                currentPage: {
                    type: Number,
                    default: 1
                },
                total: {
                    type: Number,
                    default: 0
                }
            },
            computed: {
                size: {
                    get: function() {
                        return this.pageSize
                    },
                    set: function(e) {
                        this.$emit("update:page-size", e)
                    }
                },
                page: {
                    get: function() {
                        return this.currentPage
                    },
                    set: function(e) {
                        this.$emit("update:current-page", e)
                    }
                }
            },
            watch: {
                total: function(e) {
                    this.size * (this.currentPage - 1) >= e && this.currentPage > 1 && (this.page = this.page - 1,
                    this.$emit("current-change", this.currentPage - 1))
                }
            },
            methods: {
                handleSizeChange: function(e) {
                    this.size = e,
                    this.$emit("size-change", e)
                },
                handleCurrentChange: function(e) {
                    this.page = e,
                    this.$emit("current-change", e)
                }
            }
        }
          , C = {
            render: function() {
                var e = this
                  , t = e.$createElement;
                return (e._self._c || t)("el-pagination", {
                    staticClass: "pagination",
                    attrs: {
                        "current-page": e.page,
                        "page-sizes": [5, 10, 15, 20],
                        "page-size": e.size,
                        layout: "total, sizes, prev, pager, next, jumper",
                        total: e.total,
                        background: ""
                    },
                    on: {
                        "size-change": e.handleSizeChange,
                        "current-change": e.handleCurrentChange,
                        "update:currentPage": function(t) {
                            e.page = t
                        },
                        "update:current-page": function(t) {
                            e.page = t
                        },
                        "update:pageSize": function(t) {
                            e.size = t
                        },
                        "update:page-size": function(t) {
                            e.size = t
                        }
                    }
                })
            },
            staticRenderFns: []
        };
        var _ = {
            name: "TableCustom",
            components: {
                PaginationCustom: a("VU/8")(F, C, !1, function(e) {
                    a("a33D")
                }, "data-v-22921d72", null).exports
            },
            props: {
                colConfigs: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                data: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                tableRef: {
                    type: String,
                    default: "table-ref"
                },
                tableLoading: {
                    type: Boolean,
                    default: !1
                },
                showPagination: {
                    type: Boolean,
                    default: !0
                },
                rowKey: [Function, String],
                pageSize: {
                    type: Number,
                    default: 10
                },
                currentPage: {
                    type: Number,
                    default: 0
                },
                sortProp: {
                    type: String,
                    default: ""
                },
                sortOrder: {
                    type: String,
                    default: ""
                },
                total: {
                    type: Number,
                    default: 0
                },
                unFlex: {
                    type: Boolean,
                    default: !1
                },
                size: {
                    type: String,
                    default: "medium"
                },
                headerHighlight: {
                    type: Boolean,
                    default: !0
                },
                treeProps: {
                    type: Object,
                    default: function() {}
                },
                paging: !1,
                border: Boolean,
                contentStyle: String,
                classNames: String,
                defaultExpandAll: Boolean,
                defaultExpandedKeys: Array,
                rowClassName: String
            },
            computed: {
                tableData: function() {
                    return this.paging && this.showPagination ? this.data.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize) : this.data
                },
                paginationSize: {
                    get: function() {
                        return this.pageSize
                    },
                    set: function(e) {
                        this.$emit("update:page-size", e)
                    }
                },
                paginationCurrent: {
                    get: function() {
                        return this.currentPage
                    },
                    set: function(e) {
                        this.$emit("update:current-page", e)
                    }
                },
                defaultOrder: {
                    get: function() {
                        return this.sortOrder
                    },
                    set: function(e) {
                        this.$emit("update:sort-order", e)
                    }
                },
                defaultProp: {
                    get: function() {
                        return this.sortProp
                    },
                    set: function(e) {
                        this.$emit("update:sort-prop", e)
                    }
                }
            },
            methods: {
                sortChange: function(e) {
                    var t = e.column
                      , a = e.prop
                      , i = e.order;
                    i ? (this.defaultOrder = i,
                    this.defaultProp = a) : (this.defaultOrder = null,
                    this.defaultProp = null),
                    this.$emit("sort-change", {
                        column: t,
                        prop: a,
                        order: i
                    })
                },
                sizeChange: function(e) {
                    this.paging ? this.paginationSize = e : this.$emit("size-change", e)
                },
                currentChange: function(e) {
                    this.paging ? this.paginationCurrent = e : this.$emit("current-change", e)
                },
                rowClick: function() {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                        t[a] = arguments[a];
                    this.$emit.apply(this, ["row-click"].concat(y()(t)))
                },
                select: function() {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                        t[a] = arguments[a];
                    this.$emit.apply(this, ["select"].concat(y()(t)))
                },
                selectAll: function() {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                        t[a] = arguments[a];
                    this.$emit.apply(this, ["select-all"].concat(y()(t)))
                }
            }
        }
          , w = {
            render: function() {
                var e, t = this, a = t.$createElement, i = t._self._c || a;
                return i("div", {
                    class: {
                        "flex-table": !t.unFlex
                    },
                    style: t.contentStyle
                }, [i("el-table", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: t.tableLoading,
                        expression: "tableLoading"
                    }],
                    ref: t.tableRef,
                    staticClass: "table-custom",
                    class: (e = {},
                    e[t.classNames] = !0,
                    e["header-highlight"] = t.headerHighlight,
                    e),
                    attrs: {
                        data: t.tableData,
                        "row-key": t.rowKey,
                        "element-loading-text": "拼命加载中",
                        "element-loading-spinner": "el-icon-loading",
                        size: t.size,
                        border: t.border,
                        "default-sort": {
                            order: t.sortOrder,
                            prop: t.sortProp
                        },
                        "default-expanded-keys": t.defaultExpandedKeys,
                        "cell-class-name": "table-custom-cell",
                        "header-cell-class-name": "table-custom-header-cell",
                        "tooltip-effect": "light",
                        "row-class-name": t.rowClassName,
                        stripe: ""
                    },
                    on: {
                        "sort-change": t.sortChange,
                        select: t.select,
                        "select-all": t.selectAll,
                        "row-click": t.rowClick
                    }
                }, [t._l(t.colConfigs, function(e) {
                    return [e.slot ? t._t(e.slot) : t._e(), t._v(" "), i("el-table-column", t._b({
                        key: e.prop,
                        attrs: {
                            align: e.align ? e.align : "left",
                            "header-align": e.headerAlign ? e.headerAlign : "left",
                            "show-overflow-tooltip": !0,
                            "column-key": e.prop,
                            formatter: e.formatter
                        }
                    }, "el-table-column", e, !1))]
                })], 2), t._v(" "), t.showPagination ? i("pagination-custom", {
                    staticClass: "pagination-custom",
                    attrs: {
                        "page-size": t.paginationSize,
                        "current-page": t.paginationCurrent,
                        total: t.total
                    },
                    on: {
                        "update:pageSize": function(e) {
                            t.paginationSize = e
                        },
                        "update:page-size": function(e) {
                            t.paginationSize = e
                        },
                        "update:currentPage": function(e) {
                            t.paginationCurrent = e
                        },
                        "update:current-page": function(e) {
                            t.paginationCurrent = e
                        },
                        "size-change": t.sizeChange,
                        "current-change": t.currentChange
                    }
                }) : t._e()], 1)
            },
            staticRenderFns: []
        };
        var k = a("VU/8")(_, w, !1, function(e) {
            a("ox+E")
        }, "data-v-788f49fb", null).exports
          , z = a("/ocq")
          , M = {
            name: "Login",
            data: function() {
                return {
                    loginForm: {
                        userName: null,
                        password: null
                    },
                    rules: {
                        userName: [this.$validator.validateRule()],
                        password: [this.$validator.validateRule()]
                    },
                    btnLoading: !1
                }
            },
            methods: {
                login: function() {
                    var e = this;
                    this.$refs.loginForm.validate(function(t) {
                        if (!t)
                            return !1;
                        e.btnLoading = !0,
                        e.$store.dispatch("loginForAll", e.loginForm).then(function(t) {
                            Dt.resetRouter(t),
                            Dt.replace("/"),
                            e.btnLoading = !1,
                            e.$message.success("登录成功")
                        }).catch(function(t) {
                            console.log(t),
                            e.btnLoading = !1
                        })
                    })
                }
            }
        }
          , x = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("div", {
                    staticClass: "login-container"
                }, [a("div", {
                    staticClass: "login-box"
                }, [a("h1", {
                    staticClass: "login-title"
                }, [e._v("HI~")]), e._v(" "), a("h1", {
                    staticClass: "login-title"
                }, [e._v("欢迎登录信服小贝")]), e._v(" "), a("el-form", {
                    ref: "loginForm",
                    staticClass: "login-form",
                    attrs: {
                        model: e.loginForm,
                        rules: e.rules
                    }
                }, [a("el-form-item", {
                    attrs: {
                        prop: "userName"
                    }
                }, [a("el-input", {
                    staticClass: "login-input",
                    attrs: {
                        placeholder: "请输入账号",
                        "prefix-icon": "el-icon-user"
                    },
                    nativeOn: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.login.apply(null, arguments)
                        }
                    },
                    model: {
                        value: e.loginForm.userName,
                        callback: function(t) {
                            e.$set(e.loginForm, "userName", t)
                        },
                        expression: "loginForm.userName"
                    }
                })], 1), e._v(" "), a("el-form-item", {
                    staticClass: "password-form-item",
                    attrs: {
                        prop: "password"
                    }
                }, [a("el-input", {
                    staticClass: "login-input",
                    attrs: {
                        placeholder: "请输入密码",
                        "prefix-icon": "el-icon-lock",
                        "show-password": ""
                    },
                    nativeOn: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.login.apply(null, arguments)
                        }
                    },
                    model: {
                        value: e.loginForm.password,
                        callback: function(t) {
                            e.$set(e.loginForm, "password", t)
                        },
                        expression: "loginForm.password"
                    }
                })], 1), e._v(" "), a("el-form-item", [a("span", {
                    staticClass: "login-btn",
                    class: {
                        "loading-btn": e.btnLoading
                    },
                    on: {
                        click: e.login
                    }
                }, [a("i", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.btnLoading,
                        expression: "btnLoading"
                    }],
                    staticClass: "el-icon-loading"
                }), e._v("登录\n        ")])])], 1)], 1)])
            },
            staticRenderFns: []
        };
        var I = a("VU/8")(M, x, !1, function(e) {
            a("X4aY")
        }, "data-v-ec76ab28", null).exports
          , $ = a("Dd8w")
          , T = a.n($)
          , N = a("+6Bu")
          , D = a.n(N)
          , S = {
            name: "NavMenu",
            props: {
                item: {
                    type: Object,
                    required: !0
                }
            }
        }
          , L = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("div", {
                    staticClass: "menu-wrapper"
                }, [(e.item.children || []).length <= 1 ? a("el-menu-item", {
                    attrs: {
                        index: e.item.path
                    }
                }, [[a("i-icon", {
                    staticClass: "menu-icon",
                    attrs: {
                        name: e.item.meta.icon
                    }
                }), e._v(" "), a("span", {
                    attrs: {
                        slot: "title"
                    },
                    slot: "title"
                }, [e._v(e._s(e.item.meta.title))])]], 2) : a("el-submenu", {
                    attrs: {
                        index: e.item.path
                    }
                }, [a("template", {
                    slot: "title"
                }, [a("i-icon", {
                    staticClass: "menu-icon",
                    attrs: {
                        name: e.item.meta.icon
                    }
                }), e._v(" "), a("span", [e._v(e._s(e.item.meta.title))])], 1), e._v(" "), e._l(e.item.children, function(e) {
                    return a("nav-menu", {
                        key: e.path,
                        attrs: {
                            item: e
                        }
                    })
                })], 2)], 1)
            },
            staticRenderFns: []
        };
        var B, E, q = a("VU/8")(S, L, !1, function(e) {
            a("WheY")
        }, "data-v-a5c4d182", null).exports, V = a("//Fk"), A = a.n(V), P = a("d7EF"), R = a.n(P), O = a("Xxa5"), U = a.n(O), H = a("exGp"), j = a.n(H), Y = a("9Qw9"), X = a.n(Y), W = a("fUgm"), Z = a("TNxr"), K = a.n(Z), G = a("cN5t"), J = a.n(G), Q = a("lHA8"), ee = a.n(Q), te = a("c/Tr"), ae = a.n(te), ie = a("bOdI"), ne = a.n(ie), oe = {
            state: {
                userInfo: {},
                token: "",
                ssoAddr: "",
                permissionCodes: []
            },
            mutations: (B = {},
            ne()(B, "SET_TOKEN", function(e, t) {
                e.token = t
            }),
            ne()(B, "CLEAR_TOKEN", function(e) {
                e.token = ""
            }),
            ne()(B, "SET_USER_INFO", function(e, t) {
                e.userInfo = t
            }),
            ne()(B, "CLEAR_LOGIN_INFO", function(e) {
                e.token = "",
                e.userInfo = {},
                e.routers = []
            }),
            ne()(B, "SET_ROUTERS", function(e, t) {
                e.routers = [].concat(y()(xt), y()(t))
            }),
            ne()(B, "SET_SSO_ADDR", function(e, t) {
                e.ssoAddr = t
            }),
            ne()(B, "SET_PERMISSION_CODES", function(e, t) {
                e.permissionCodes = t
            }),
            B),
            actions: {
                logout: function(e) {
                    var t = e.commit;
                    return he.request({
                        method: "post",
                        url: "/logout"
                    }).then(function(e) {
                        return t("CLEAR_LOGIN_INFO"),
                        u(),
                        e.data.message
                    })
                },
                loginForToken: function(e, t) {
                    var a, i = e.commit;
                    return (a = t,
                    he.request({
                        method: "post",
                        url: "/login",
                        data: a
                    })).then(function(e) {
                        c(e.data.data),
                        i("SET_TOKEN", e.data.data)
                    })
                },
                fetchSsoAddr: function(e) {
                    var t = e.commit
                      , a = e.state;
                    return new A.a(function(e, i) {
                        a.ssoAddr ? e(a.ssoAddr) : he.request({
                            method: "get",
                            url: "/sso-addr"
                        }).then(function(a) {
                            a.data.data || i(),
                            t("SET_SSO_ADDR", a.data.data),
                            e(a.data.data)
                        }).catch(function() {
                            i()
                        })
                    }
                    )
                },
                getToken: function(e) {
                    var t = e.dispatch
                      , a = e.commit;
                    return new A.a(function(e, i) {
                        l() ? e(l()) : t("fetchSsoAddr").then(function(t) {
                            var n = document.createElement("iframe");
                            n.style.display = "none",
                            n.src = t,
                            document.body.append(n),
                            window.addEventListener("message", function(t) {
                                "isReady" === t.data.childStatus && n.contentWindow && n.contentWindow.postMessage({
                                    parentStatus: "getToken"
                                }, "*"),
                                t.data.sendToken && (t.data.ssoToken ? (c(t.data.ssoToken),
                                a("SET_TOKEN", t.data.ssoToken),
                                n.remove(),
                                e(t.data.ssoToken)) : (n.remove(),
                                i()))
                            })
                        }).catch(function(e) {
                            console.log(e),
                            i()
                        })
                    }
                    )
                },
                setSsoToken: function(e) {
                    var t = e.dispatch
                      , a = e.state;
                    return new A.a(function(e) {
                        t("fetchSsoAddr").then(function(t) {
                            var i = document.createElement("iframe");
                            i.style.display = "none",
                            i.src = t,
                            document.body.append(i),
                            window.addEventListener("message", function(t) {
                                "isReady" === t.data.childStatus && i.contentWindow && i.contentWindow.postMessage({
                                    token: a.token,
                                    sendToken: !0
                                }, "*"),
                                "isReceived" === t.data.childStatus && (i.remove(),
                                e())
                            })
                        }).catch(function() {
                            e()
                        })
                    }
                    )
                },
                clearSsoToken: function(e) {
                    var t = e.dispatch;
                    return new A.a(function(e) {
                        t("fetchSsoAddr").then(function(t) {
                            var a = document.createElement("iframe");
                            a.style.display = "none",
                            a.src = t,
                            document.body.append(a),
                            window.addEventListener("message", function(t) {
                                "isReady" === t.data.childStatus && a.contentWindow && a.contentWindow.postMessage({
                                    clearToken: !0
                                }, "*"),
                                "isReceived" === t.data.childStatus && (a.remove(),
                                e())
                            })
                        }).catch(function() {
                            e()
                        })
                    }
                    )
                },
                jumpSsoLogin: function(e) {
                    return (0,
                    e.dispatch)("fetchSsoAddr").then(function(e) {
                        return window.location.replace(e),
                        A.a.resolve()
                    }).catch(function() {
                        return Dt.push({
                            path: "/login"
                        }),
                        A.a.reject()
                    })
                },
                loginByToken: function(e) {
                    var t = e.dispatch;
                    return t("getUserInfo").then(function(e) {
                        return t("generateRoutes", e)
                    })
                },
                generateRoutes: function(e, t) {
                    var a = e.commit
                      , i = t.roles
                      , n = (void 0 === i ? [] : i).filter(function(e) {
                        return "enable" === e.status
                    }).map(function(e) {
                        return e.resourceCodes
                    }) || []
                      , o = n.length > 0 ? ae()(new ee.a(n.reduce(function(e, t) {
                        return Array.isArray(t) ? [].concat(y()(e), y()(t)) : [].concat(y()(e), [t])
                    }))) : [];
                    return a("SET_PERMISSION_CODES", o),
                    new A.a(function(e) {
                        var t = function e(t, a) {
                            return t.filter(function(t) {
                                return !!function(e, t) {
                                    return !t.meta || !t.meta.resourceCodes || !t.meta.resourceCodes.length || e.some(function(e) {
                                        return t.meta.resourceCodes.includes(e)
                                    })
                                }(a, t) && (t.children && t.children.length > 0 && (t.children = e(t.children, a)),
                                t)
                            })
                        }([].concat(y()(It), y()(window ? [] : $t)), o);
                        return a("SET_ROUTERS", t),
                        e(t)
                    }
                    )
                },
                getUserInfo: function(e) {
                    var t = e.commit
                      , a = e.dispatch;
                    return he.request({
                        method: "get",
                        url: "/profile"
                    }).then(function(e) {
                        var i = e.data.data;
                        return 0 === (i.roles || []).length ? (f.Message.error("该用户无权限"),
                        a("jumpSsoLogin"),
                        A.a.reject()) : (t("SET_USER_INFO", i),
                        i)
                    })
                },
                loginForAll: function(e, t) {
                    var a = e.dispatch;
                    return a("loginForToken", t).then(function() {
                        return a("setSsoToken").then(function() {
                            return a("loginByToken")
                        })
                    })
                }
            }
        }, se = a("woOf"), re = a.n(se), le = a("gRE1"), ce = a.n(le), ue = {
            state: {
                uploadFilesMap: {},
                uploadingListVisible: !1
            },
            getters: {
                uploadFileList: function(e) {
                    return ce()(e.uploadFilesMap) || []
                }
            },
            mutations: (E = {},
            ne()(E, "SET_UPLOAD_LIST", function(e, t) {
                e.uploadFilesMap = re()({}, e.uploadFilesMap, ne()({}, t.uid, T()({}, e.uploadFilesMap[t.uid], t)))
            }),
            ne()(E, "REMOVE_UPLOAD_FILE", function(e, t) {
                s.default.delete(e.uploadFilesMap, t.uid)
            }),
            ne()(E, "SET_UPLOAD_LIST_VISIBLE", function(e, t) {
                e.uploadingListVisible = t
            }),
            E)
        };
        s.default.use(W.a);
        var pe = new W.a.Store({
            strict: !1,
            modules: {
                login: oe,
                upload: ue
            }
        })
          , de = []
          , fe = K.a.create({
            baseURL: "/api/xfxb",
            headers: {
                "Content-Type": "application/json"
            }
        })
          , me = function(e) {
            0 === document.getElementsByClassName("el-message--error").length && f.Message.error(e)
        };
        fe.interceptors.request.use(function(e) {
            return e.cancelToken = new K.a.CancelToken(function(t) {
                de.push({
                    cancel: t
                }),
                e.cancelUpload && e.cancelUpload(t)
            }
            ),
            "get" === e.method && (e.paramsSerializer = function(e) {
                return J.a.stringify(e, {
                    arrayFormat: "repeat"
                })
            }
            ),
            l() && (e.headers.common.Authorization = "bearer" + l()),
            e
        }, function(e) {
            return A.a.reject(e)
        }),
        fe.interceptors.response.use(void 0, function(e) {
            var t = e.message
              , a = void 0 === t ? "" : t
              , i = e.response
              , n = void 0 === i ? {} : i;
            if (a.indexOf("timeout") >= 0)
                return A.a.reject("请求超时，请检查网络连接");
            var o = n.data
              , s = void 0 === o ? {} : o
              , r = n.status;
            if (404 === r)
                return me("Not Found(404)"),
                A.a.reject();
            if (401 === r)
                return pe.commit("CLEAR_LOGIN_INFO"),
                u(),
                pe.dispatch("clearSsoToken"),
                "/login" !== window.location.pathname && Dt.push("/login"),
                de.forEach(function(e, t) {
                    e.cancel(),
                    delete de[t]
                }),
                A.a.reject();
            if (s.message && s.code) {
                var l = s.message + "(" + s.code + ")";
                return me(l),
                A.a.reject(l)
            }
            return A.a.reject()
        });
        var he = fe
          , ve = function(e) {
            return he.request({
                method: "get",
                url: "/files",
                params: e
            })
        }
          , ge = function(e, t) {
            return he.request({
                method: "post",
                url: "/files/" + e + "/copy",
                data: t
            })
        }
          , be = function(e) {
            return he.request({
                method: "delete",
                url: "/files",
                data: e
            })
        }
          , ye = function(e) {
            return he.request({
                method: "get",
                url: "/files/" + e + "/download"
            })
        }
          , Fe = a("WWTk")
          , Ce = {
            name: "UploadList",
            data: function() {
                return {
                    uploadingFileStatusMapping: {
                        uploading: "上传中",
                        waiting: "等待中",
                        success: "上传成功",
                        failed: "上传失败",
                        pause: "暂停中",
                        calculating: "计算md5中"
                    },
                    showCount: 30
                }
            },
            computed: {
                filesMap: function() {
                    return this.$store.state.upload.uploadFilesMap || []
                },
                fileList: function() {
                    return this.$store.getters.uploadFileList || []
                },
                uploadComplete: function() {
                    return this.fileList.every(function(e) {
                        return ["success", "failed", "pause"].includes(e.status)
                    })
                },
                showList: function() {
                    return this.showCount >= this.fileList.length ? this.fileList : this.fileList.slice(0, this.showCount)
                }
            },
            created: function() {
                this.$bus.on("upload-file", this.execFileUpload)
            },
            watch: {
                uploadComplete: function(e) {
                    e && this.$bus.emit("upload-complete")
                }
            },
            filters: {
                progressColorFilter: function(e) {
                    switch (e) {
                    case "waiting":
                    case "pause":
                        return Fe.warningColor;
                    case "failed":
                        return Fe.errorColor;
                    case "success":
                        return Fe.successColor;
                    default:
                        return Fe.primaryColor
                    }
                }
            },
            methods: T()({}, Object(W.b)({
                updateFilesMap: "SET_UPLOAD_LIST",
                deleteOneFile: "REMOVE_UPLOAD_FILE"
            }), {
                loadMore: function() {
                    this.showCount < this.fileList.length && (this.showCount += 30)
                },
                closeUploadList: function() {
                    this.$store.commit("SET_UPLOAD_LIST_VISIBLE", !1)
                },
                progressStatusText: function(e) {
                    return this.uploadingFileStatusMapping[e]
                },
                uploadNextFile: function() {
                    var e = this.fileList.findIndex(function(e) {
                        return "waiting" === e.status
                    });
                    if (-1 !== e) {
                        var t = this.fileList[e];
                        this.updateFilesMap({
                            uid: t.uid,
                            status: "calculating"
                        }),
                        this.execFileUpload(this.filesMap[t.uid])
                    }
                },
                execFileUpload: function(e) {
                    var t = this;
                    return j()(U.a.mark(function a() {
                        var i, n, o, s, r, l, c, u;
                        return U.a.wrap(function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2,
                                    t.calcMd5(e.chunks);
                                case 2:
                                    return i = a.sent,
                                    t.updateFilesMap({
                                        uid: e.uid,
                                        status: "uploading",
                                        md5: i
                                    }),
                                    a.next = 6,
                                    t.fetchUploadUrl(t.filesMap[e.uid]);
                                case 6:
                                    if (n = a.sent,
                                    o = n.uploadUrl,
                                    s = n.objectName,
                                    r = n.uploadId,
                                    l = n.uploadPartNumbers,
                                    c = n.fileName,
                                    u = n.bucketName,
                                    t.updateFilesMap(T()({}, e, {
                                        originalFileName: c || e.originalFileName,
                                        uploadUrl: o || [],
                                        objectName: s,
                                        uploadId: r,
                                        bucketName: u || e.bucketName,
                                        uploadPartNumbers: l || [],
                                        status: "uploading"
                                    })),
                                    r) {
                                        a.next = 17;
                                        break
                                    }
                                    return t.mergeChunks(t.filesMap[e.uid]),
                                    a.abrupt("return", !1);
                                case 17:
                                    t.uploadChunks(t.filesMap[e.uid]);
                                case 18:
                                case "end":
                                    return a.stop()
                                }
                        }, a, t)
                    }))()
                },
                uploadChunks: function(e) {
                    var t = this
                      , a = e.chunks
                      , i = e.uploadPartNumbers
                      , n = e.uploadUrl
                      , o = e.uid
                      , s = a.reduce(function(e, t, a) {
                        return i.includes(a + 1) ? [e[0] + t.size, e[1]] : [e[0], [].concat(y()(e[1]), [t])]
                    }, [0, []])
                      , r = R()(s, 2)
                      , l = r[0]
                      , c = r[1];
                    this.updateFilesMap({
                        uploadingChunkSizes: [],
                        uid: o
                    }),
                    A.a.all(c.map(function(e, a) {
                        return i = e,
                        s = n[a],
                        r = function(e) {
                            if (t.filesMap[o]) {
                                t.filesMap[o].uploadingChunkSizes[a] = e.loaded;
                                var i = l + t.filesMap[o].uploadingChunkSizes.reduce(function(e, t) {
                                    return e + t
                                }, 0)
                                  , n = i > t.filesMap[o].uploadedSize ? i : t.filesMap[o].uploadedSize;
                                t.updateFilesMap({
                                    uid: o,
                                    uploadedSize: n,
                                    percent: Math.floor(n / t.filesMap[o].size * 100)
                                })
                            }
                        }
                        ,
                        c = function(e) {
                            t.updateFilesMap({
                                uid: o,
                                cancels: [].concat(y()(t.filesMap[o].cancels), [e])
                            })
                        }
                        ,
                        he.request({
                            baseURL: "",
                            headers: {
                                "Content-Type": "multipart/form-data"
                            },
                            url: s,
                            method: "put",
                            data: i,
                            onUploadProgress: function(e) {
                                return r(e)
                            },
                            cancelUpload: c
                        });
                        var i, s, r, c
                    })).then(function() {
                        t.mergeChunks(t.filesMap[o] || {})
                    }).catch(function() {
                        "uploading" === (t.filesMap[o] || {}).status && (t.filesMap[o].cancels.forEach(function(e) {
                            e()
                        }),
                        t.updateFilesMap({
                            uid: o,
                            status: "failed",
                            cancels: []
                        })),
                        t.uploadNextFile()
                    })
                },
                mergeChunks: function(e) {
                    var t, a = this;
                    return "uploading" !== e.status ? A.a.reject() : (t = {
                        md5: e.md5,
                        uploadId: e.uploadId,
                        bucketName: e.bucketName,
                        objectName: e.objectName,
                        path: e.webkitRelativePath,
                        originalFileName: e.originalFileName,
                        suffix: e.suffix,
                        repoId: e.repoId,
                        parentId: e.parentId,
                        size: e.size,
                        chunkLength: e.chunks.length
                    },
                    he.request({
                        method: "post",
                        url: "/files/merge",
                        data: t
                    })).then(function() {
                        return a.updateFilesMap({
                            uid: e.uid,
                            uploadedSize: e.size,
                            percent: 100,
                            cancels: [],
                            status: "success"
                        }),
                        a.uploadNextFile(),
                        A.a.resolve()
                    }).catch(function() {
                        return "uploading" === (a.filesMap[e.uid] || {}).status && (a.filesMap[e.uid].cancels.forEach(function(e) {
                            e()
                        }),
                        a.updateFilesMap({
                            uid: e.uid,
                            status: "failed",
                            cancels: []
                        })),
                        a.uploadNextFile(),
                        A.a.reject()
                    })
                },
                fetchUploadUrl: function(e) {
                    var t, a = this;
                    return (t = {
                        bucketName: e.bucketName,
                        chunkLength: e.chunks.length,
                        originalFileName: e.originalFileName,
                        repoId: e.repoId,
                        parentId: e.parentId,
                        md5: e.md5,
                        uploadId: e.uploadId,
                        objectName: e.objectName
                    },
                    he.request({
                        method: "post",
                        url: "/files/upload-url",
                        data: t
                    })).then(function(e) {
                        return A.a.resolve(e.data.data || {})
                    }).catch(function() {
                        return a.updateFilesMap({
                            uid: e.uid,
                            status: "failed"
                        }),
                        a.uploadNextFile(),
                        A.a.reject()
                    })
                },
                calcMd5: function(e) {
                    return new A.a(function(t, a) {
                        var i = e.length
                          , n = 0
                          , o = new X.a.ArrayBuffer
                          , s = new FileReader;
                        s.readAsArrayBuffer(e[n]),
                        s.onload = function(a) {
                            o.append(a.target.result),
                            ++n < i ? s.readAsArrayBuffer(e[n]) : t(o.end())
                        }
                        ,
                        s.onerror = function(e) {
                            a(e)
                        }
                    }
                    )
                },
                continueUpload: function(e) {
                    var t = this;
                    return j()(U.a.mark(function a() {
                        var i, n, o, s;
                        return U.a.wrap(function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    return t.updateFilesMap({
                                        uid: e.uid,
                                        status: "uploading"
                                    }),
                                    a.next = 3,
                                    t.fetchUploadUrl(e);
                                case 3:
                                    if (i = a.sent,
                                    n = i.uploadId,
                                    o = i.uploadUrl,
                                    s = i.uploadPartNumbers,
                                    n) {
                                        a.next = 10;
                                        break
                                    }
                                    return t.mergeChunks(T()({}, e, {
                                        uploadId: n
                                    })),
                                    a.abrupt("return", !1);
                                case 10:
                                    t.uploadChunks(T()({}, e, {
                                        uploadPartNumbers: s || [],
                                        uploadUrl: o || []
                                    }));
                                case 11:
                                case "end":
                                    return a.stop()
                                }
                        }, a, t)
                    }))()
                },
                cancelUpload: function(e) {
                    e.cancels.forEach(function(e) {
                        e()
                    }),
                    this.deleteOneFile(e),
                    this.$message.success("取消成功")
                },
                pauseUpload: function(e) {
                    e.cancels.forEach(function(e) {
                        e()
                    }),
                    this.updateFilesMap({
                        uid: e.uid,
                        status: "pause",
                        cancels: []
                    }),
                    this.$message.success("暂停成功")
                }
            })
        }
          , _e = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("div", {
                    staticClass: "upload-container"
                }, [a("h4", {
                    staticClass: "upload-title"
                }, [e._v("\n    文件上传列表(" + e._s(e.fileList.filter(function(e) {
                    return "success" === e.status
                }).length) + " / " + e._s(e.fileList.length) + ")\n    "), a("el-button", {
                    attrs: {
                        type: "text",
                        icon: "el-icon-close"
                    },
                    on: {
                        click: e.closeUploadList
                    }
                })], 1), e._v(" "), e.fileList.length > 0 ? a("ul", {
                    directives: [{
                        name: "infinite-scroll",
                        rawName: "v-infinite-scroll",
                        value: e.loadMore,
                        expression: "loadMore"
                    }],
                    staticClass: "file-list"
                }, e._l(e.showList, function(t) {
                    return a("li", {
                        key: t.uuid,
                        staticClass: "file-item"
                    }, [a("i-icon", {
                        staticClass: "file-icon",
                        attrs: {
                            name: e.$convertToIcon(t)
                        }
                    }), e._v(" "), a("div", [a("div", {
                        staticClass: "file-name"
                    }, [e._v(e._s(t.originalFileName))]), e._v(" "), a("el-progress", {
                        staticClass: "progress",
                        attrs: {
                            percentage: t.percent || 0,
                            color: e._f("progressColorFilter")(t.status),
                            format: function() {
                                return e.progressStatusText(t.status)
                            }
                        }
                    }), e._v(" "), a("span", {
                        staticClass: "file-size"
                    }, [e._v(e._s(e.$byteFmt(t.uploadedSize)) + " / " + e._s(e.$byteFmt(t.size)))])], 1), e._v(" "), a("div", ["uploading" === t.status ? a("el-button", {
                        staticClass: "icon-btn",
                        attrs: {
                            type: "text",
                            icon: "el-icon-video-pause",
                            title: "暂停"
                        },
                        on: {
                            click: function(a) {
                                return a.stopPropagation(),
                                e.pauseUpload(t)
                            }
                        }
                    }) : e._e(), e._v(" "), "pause" === t.status || "failed" === t.status ? a("el-button", {
                        staticClass: "icon-btn",
                        attrs: {
                            type: "text",
                            icon: "el-icon-video-play",
                            title: "继续"
                        },
                        on: {
                            click: function(a) {
                                return a.stopPropagation(),
                                e.continueUpload(t)
                            }
                        }
                    }) : e._e(), e._v(" "), "success" !== t.status ? a("el-button", {
                        staticClass: "icon-btn",
                        attrs: {
                            type: "text",
                            icon: "el-icon-close",
                            title: "取消"
                        },
                        on: {
                            click: function(a) {
                                return a.stopPropagation(),
                                e.cancelUpload(t)
                            }
                        }
                    }) : e._e()], 1)], 1)
                }), 0) : a("el-empty", {
                    staticClass: "empty",
                    attrs: {
                        description: "暂无文件"
                    }
                })], 1)
            },
            staticRenderFns: []
        };
        var we = {
            name: "Layout",
            components: {
                NavMenu: q,
                UploadList: a("VU/8")(Ce, _e, !1, function(e) {
                    a("PGIu")
                }, "data-v-a5bc5110", null).exports
            },
            computed: {
                activeMenu: function() {
                    return this.$route.meta.activePath || this.$route.path
                },
                uploadingListVisible: function() {
                    return this.$store.state.upload.uploadingListVisible
                },
                menus: function() {
                    return function e(t) {
                        return t.filter(function(e) {
                            return (e.meta || {}).title
                        }).map(function(t) {
                            var a = t.children
                              , i = D()(t, ["children"]);
                            return T()({
                                children: e(a || [])
                            }, i)
                        })
                    }(this.$store.state.login.routers) || []
                }
            },
            methods: {
                logout: function() {
                    var e = this;
                    this.$confirm("此操作将登出系统, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        cancelButtonClass: "btn-custom-cancel",
                        type: "warning"
                    }).then(function() {
                        e.$store.dispatch("logout").then(function(t) {
                            e.$message.success(t),
                            e.$store.dispatch("clearSsoToken").then(function() {
                                e.$router.push({
                                    path: "/login"
                                })
                            }).catch(function() {
                                e.$router.push({
                                    path: "/login"
                                })
                            })
                        })
                    }).catch(function() {
                        e.$message.info("已取消操作")
                    })
                },
                downloadApk: function() {
                    var e = document.createElement("a");
                    e.style.display = "none",
                    e.href = window.location.origin + "/file/信服小贝.exe",
                    document.body.appendChild(e),
                    e.click(),
                    document.body.removeChild(e)
                },
                openManual: function() {
                    var e = this.$router.resolve({
                        path: "/user-manual/index.html"
                    });
                    window.open(e.href, "_blank")
                },
                setUploadListVisible: function() {
                    this.$store.commit("SET_UPLOAD_LIST_VISIBLE", !this.uploadingListVisible)
                }
            }
        }
          , ke = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("el-container", {
                    staticClass: "container-wrapper"
                }, [a("el-aside", {
                    staticClass: "aside",
                    attrs: {
                        width: "260px"
                    }
                }, [a("div", {
                    staticClass: "profile"
                }, [a("i-icon", {
                    staticClass: "avatar",
                    attrs: {
                        name: "avatar"
                    }
                }), e._v(" "), a("div", {
                    staticClass: "profile-operate"
                }, [a("span", {
                    staticClass: "real-name"
                }, [e._v(e._s(e.$store.state.login.userInfo.realName))]), e._v(" "), a("i-icon", {
                    staticClass: "logout-icon",
                    attrs: {
                        name: "logout"
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.logout.apply(null, arguments)
                        }
                    }
                })], 1)], 1), e._v(" "), a("el-menu", {
                    staticClass: "menu",
                    attrs: {
                        "default-active": e.activeMenu,
                        router: !0
                    }
                }, e._l(e.menus, function(e) {
                    return a("nav-menu", {
                        key: e.path,
                        attrs: {
                            item: e
                        }
                    })
                }), 1), e._v(" "), a("div", {
                    staticClass: "icon-btn-container"
                }, [a("i-icon", {
                    staticClass: "download-apk-icon",
                    attrs: {
                        name: "download-apk"
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.downloadApk.apply(null, arguments)
                        }
                    }
                }), e._v(" "), a("el-badge", {
                    staticClass: "upload-badge",
                    attrs: {
                        value: e.$store.getters.uploadFileList.filter(function(e) {
                            return !["success", "failed", "pause"].includes(e.status)
                        }).length,
                        max: 99
                    }
                }, [a("i-icon", {
                    staticClass: "upload-list-icon",
                    attrs: {
                        name: "upload-list"
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.setUploadListVisible.apply(null, arguments)
                        }
                    }
                })], 1), e._v(" "), a("i-icon", {
                    staticClass: "user-manual-icon",
                    attrs: {
                        name: "user-manual"
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.openManual.apply(null, arguments)
                        }
                    }
                })], 1)], 1), e._v(" "), a("transition", {
                    attrs: {
                        name: "el-zoom-in-left"
                    }
                }, [a("upload-list", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.uploadingListVisible,
                        expression: "uploadingListVisible"
                    }]
                })], 1), e._v(" "), a("el-main", {
                    staticClass: "main"
                }, [a("router-view")], 1)], 1)
            },
            staticRenderFns: []
        };
        var ze = a("VU/8")(we, ke, !1, function(e) {
            a("xduj")
        }, "data-v-4bc385c4", null).exports
          , Me = function(e) {
            return he.request({
                method: "get",
                url: "/repositories",
                params: e
            })
        }
          , xe = function(e) {
            return he.request({
                method: "delete",
                url: "/repositories",
                data: e
            })
        }
          , Ie = a("sSC0")
          , $e = a.n(Ie)
          , Te = a("f+DU")
          , Ne = a.n(Te)
          , De = {
            props: {
                visible: {
                    required: !0,
                    type: Boolean
                },
                action: {
                    type: String,
                    default: "create"
                }
            },
            data: function() {
                return {
                    btnLoading: !1,
                    formData: {},
                    originFormData: {}
                }
            },
            computed: {
                modalVisible: {
                    get: function() {
                        return this.visible
                    },
                    set: function(e) {
                        e || this.$emit("update:visible", e)
                    }
                }
            },
            methods: {
                beforeModalClose: function(e) {
                    this.hasModifiedBeforeClose(e)
                },
                cancelButtonClick: function() {
                    var e = this;
                    this.hasModifiedBeforeClose(function() {
                        e.modalVisible = !1
                    })
                },
                hasModifiedBeforeClose: function(e) {
                    Ne()(this.formData, this.originFormData) ? e() : this.$confirm("有未保存的修改，是否退出？", {
                        type: "warning",
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        cancelButtonClass: "btn-custom-cancel"
                    }).then(function() {
                        e()
                    }).catch(function() {})
                }
            }
        }
          , Se = function() {
            return he.request({
                method: "get",
                url: "/departs"
            })
        }
          , Le = function(e) {
            return he.request({
                method: "get",
                url: "/users",
                params: e
            })
        }
          , Be = function() {
            return he.request({
                method: "get",
                url: "/resources/templates"
            })
        }
          , Ee = {
            name: "OperateRepository",
            mixins: [De],
            props: {
                repository: {
                    type: Object,
                    required: !0,
                    default: function() {}
                }
            },
            data: function() {
                var e = this;
                return {
                    rules: {
                        name: [this.$validator.validateRule()],
                        principalId: [this.$validator.validateRule()],
                        selectedIdValidator: function(t, a, i, n) {
                            e.formData.permissions[n].templateId && !e.formData.permissions[n].selectedId ? i(new Error("必填项")) : i()
                        },
                        templateIdValidator: function(t, a, i, n) {
                            !e.formData.permissions[n].templateId && e.formData.permissions[n].selectedId ? i(new Error("必填项")) : i()
                        }
                    },
                    users: [],
                    departs: [],
                    templates: [],
                    loading: !1
                }
            },
            computed: {
                title: function() {
                    switch (this.action) {
                    case "create":
                        return "新增" + this.$repoTypeMapping[this.repository.type];
                    case "rename":
                        return "重命名空间";
                    case "setPrincipal":
                        return "设置管理员";
                    case "setPermission":
                        return "设置权限"
                    }
                },
                userInDepts: function() {
                    var e = this.users.map(function(e) {
                        return T()({
                            uniq: "user-" + e.id,
                            parentUniq: "dept-" + e.deptId,
                            name: e.realName,
                            isDept: !1
                        }, e)
                    })
                      , t = this.departs.map(function(e) {
                        return T()({
                            uniq: "dept-" + e.id,
                            parentUniq: "dept-" + e.parentId,
                            name: e.deptName,
                            isDept: !0
                        }, e)
                    })
                      , a = this.$toTree([].concat(y()(e), y()(t)), "uniq", "parentUniq");
                    if ("cooperative" === this.repository.type) {
                        var i = this.$getTreeNode(a, "dept-" + this.$store.state.login.userInfo.deptId, "uniq");
                        return i ? [i] : []
                    }
                    return a
                }
            },
            methods: {
                modalOpen: function() {
                    var e = this.repository
                      , t = e.permissions
                      , a = e.type
                      , i = e.principalId
                      , n = D()(e, ["permissions", "type", "principalId"]);
                    this.originFormData = $e()(T()({
                        permissions: this.initPermissions(t),
                        principalId: "user-" + i,
                        type: a
                    }, n)),
                    this.formData = $e()(this.originFormData),
                    this.fetchConfigs()
                },
                initPermissions: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return 0 === e.length ? [{
                        userId: "",
                        templateId: "",
                        selectedId: "",
                        deptId: ""
                    }] : e.map(function(e) {
                        return T()({}, e, {
                            selectedId: e.userId ? "user-" + e.userId : "dept-" + e.deptId
                        })
                    })
                },
                selectedIdChange: function(e, t) {
                    var a = this.$refs["permission-cascader"][t].getCheckedNodes()
                      , i = R()(a, 1)[0];
                    if (i) {
                        var n = i.data || {}
                          , o = n.id
                          , s = n.isDept
                          , r = n.deptId
                          , l = n.name
                          , c = n.deptName;
                        s ? (this.formData.permissions[t].deptId = o,
                        this.formData.permissions[t].userId = null,
                        this.formData.permissions[t].deptName = l,
                        this.formData.permissions[t].userName = null) : (this.formData.permissions[t].deptId = r,
                        this.formData.permissions[t].userId = o,
                        this.formData.permissions[t].deptName = c,
                        this.formData.permissions[t].userName = l)
                    }
                },
                addPermissions: function() {
                    this.formData.permissions.push({
                        deptName: "",
                        userName: "",
                        userId: "",
                        templateId: "",
                        selectedId: "",
                        deptId: ""
                    })
                },
                deletePermissions: function(e) {
                    this.formData.permissions.splice(e, 1)
                },
                fetchConfigs: function() {
                    var e, t = this;
                    "create" === this.action && (this.loading = !0,
                    A.a.all([Se(), Le(), Be()]).then(function(e) {
                        t.departs = e[0].data.data || [],
                        t.users = e[1].data.data || [],
                        t.templates = e[2].data.data || [],
                        t.loading = !1
                    }).catch(function() {
                        t.loading = !1
                    })),
                    "setPermission" === this.action && (this.loading = !0,
                    A.a.all([Se(), Le(), Be(), (e = this.repository.id,
                    he.request({
                        method: "get",
                        url: "/repositories/" + e + "/permissions"
                    }))]).then(function(e) {
                        t.departs = e[0].data.data || [],
                        t.users = e[1].data.data || [],
                        t.templates = e[2].data.data || [];
                        var a = t.initPermissions((e[3].data.data || []).map(function(e) {
                            return {
                                deptId: e.deptId,
                                templateId: e.templateId,
                                userId: e.userId
                            }
                        }));
                        t.formData.permissions = a,
                        t.originFormData.permissions = a,
                        t.loading = !1
                    }).catch(function() {
                        t.loading = !1
                    })),
                    "setPrincipal" === this.action && (this.loading = !0,
                    A.a.all([Se(), Le()]).then(function(e) {
                        t.departs = e[0].data.data || [],
                        t.users = e[1].data.data || [],
                        t.loading = !1
                    }).catch(function() {
                        t.loading = !1
                    }))
                },
                modalClose: function() {
                    this.$refs.form.resetFields()
                },
                pruningData: function(e) {
                    var t = e.permissions
                      , a = e.principalId
                      , i = D()(e, ["permissions", "principalId"])
                      , n = null;
                    if (t = t.filter(function(e) {
                        return !!e.deptId
                    }).map(function(e) {
                        e.selectedId;
                        return D()(e, ["selectedId"])
                    }),
                    this.$refs["principal-cascader"]) {
                        var o = this.$refs["principal-cascader"].getCheckedNodes()[0].data;
                        a = o.id,
                        n = o.realName
                    } else
                        a = null;
                    switch (this.action) {
                    case "create":
                        return T()({
                            permissions: t,
                            principalId: a
                        }, i);
                    case "rename":
                        return i;
                    case "setPrincipal":
                        return T()({
                            principalId: a,
                            principalName: n
                        }, i);
                    case "setPermission":
                        return T()({
                            permissions: t
                        }, i)
                    }
                },
                confirm: function() {
                    var e = this;
                    this.$refs.form.validate(function(t) {
                        if (!t)
                            return !1;
                        var a;
                        e.btnLoading = !0,
                        ("create" === e.action ? (a = e.pruningData(e.formData),
                        he.request({
                            method: "post",
                            url: "/repositories",
                            data: a
                        })) : function(e) {
                            return he.request({
                                method: "patch",
                                url: "/repositories/" + e.id,
                                data: e
                            })
                        }(e.pruningData(e.formData))).then(function(t) {
                            e.$message.success(t.data.message),
                            e.btnLoading = !1,
                            e.$emit("confirm"),
                            e.modalVisible = !1
                        }).catch(function() {
                            e.btnLoading = !1
                        })
                    })
                }
            }
        }
          , qe = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("el-dialog", {
                    attrs: {
                        visible: e.modalVisible,
                        "before-close": e.beforeModalClose,
                        title: e.title,
                        "append-to-body": !0
                    },
                    on: {
                        "update:visible": function(t) {
                            e.modalVisible = t
                        },
                        open: e.modalOpen,
                        close: e.modalClose
                    }
                }, [a("el-form", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading,
                        expression: "loading"
                    }],
                    ref: "form",
                    attrs: {
                        model: e.formData,
                        "label-width": "100px",
                        rules: e.rules,
                        size: "small",
                        "status-icon": ""
                    }
                }, [["create", "rename"].includes(e.action) ? a("el-form-item", {
                    attrs: {
                        label: "空间名称",
                        prop: "name"
                    }
                }, [a("el-input", {
                    attrs: {
                        placeholder: "请输入空间名称"
                    },
                    model: {
                        value: e.formData.name,
                        callback: function(t) {
                            e.$set(e.formData, "name", t)
                        },
                        expression: "formData.name"
                    }
                })], 1) : e._e(), e._v(" "), ["create", "setPrincipal"].includes(e.action) && "private" !== e.repository.type ? a("el-form-item", {
                    attrs: {
                        label: "管理员",
                        prop: "principalId"
                    }
                }, [a("el-cascader", {
                    ref: "principal-cascader",
                    staticClass: "width-fill",
                    attrs: {
                        placeholder: "请选择管理员",
                        options: e.userInDepts,
                        props: {
                            checkStrictly: !0,
                            emitPath: !1,
                            value: "uniq",
                            label: "name",
                            expandTrigger: "hover",
                            disabled: "isDept"
                        },
                        filterable: "",
                        "popper-class": "principal-popper"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            var i = t.data;
                            return [a("div", [a("i", {
                                class: i.isDept ? "el-icon-office-building" : "el-icon-user-solid"
                            }), e._v(" "), a("span", [e._v(e._s(i.name))])])]
                        }
                    }], null, !1, 380986579),
                    model: {
                        value: e.formData.principalId,
                        callback: function(t) {
                            e.$set(e.formData, "principalId", t)
                        },
                        expression: "formData.principalId"
                    }
                })], 1) : e._e(), e._v(" "), ["create", "setPermission"].includes(e.action) && "private" !== e.repository.type ? a("section", e._l(e.formData.permissions, function(t, i) {
                    return a("el-row", {
                        key: i,
                        attrs: {
                            gutter: 15
                        }
                    }, [a("el-col", {
                        attrs: {
                            span: 10
                        }
                    }, [a("el-form-item", {
                        attrs: {
                            label: "部门/用户",
                            prop: "selectedId",
                            rules: [{
                                validator: function(t, a, n) {
                                    return e.rules.selectedIdValidator(t, a, n, i)
                                },
                                trigger: ["change", "blur"]
                            }]
                        }
                    }, [a("el-cascader", {
                        ref: "permission-cascader",
                        refInFor: !0,
                        staticClass: "width-fill",
                        attrs: {
                            placeholder: "请选择部门/用户",
                            options: e.userInDepts,
                            props: {
                                checkStrictly: !0,
                                emitPath: !1,
                                value: "uniq",
                                label: "name",
                                expandTrigger: "hover"
                            },
                            filterable: "",
                            clearable: ""
                        },
                        on: {
                            change: function(t) {
                                return e.selectedIdChange(t, i)
                            }
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                var i = t.data;
                                return [a("div", [a("i", {
                                    class: i.isDept ? "el-icon-office-building" : "el-icon-user-solid"
                                }), e._v(" "), a("span", [e._v(e._s(i.name))])])]
                            }
                        }], null, !0),
                        model: {
                            value: e.formData.permissions[i].selectedId,
                            callback: function(t) {
                                e.$set(e.formData.permissions[i], "selectedId", t)
                            },
                            expression: "formData.permissions[index].selectedId"
                        }
                    })], 1)], 1), e._v(" "), a("el-col", {
                        attrs: {
                            span: 10
                        }
                    }, [a("el-form-item", {
                        attrs: {
                            label: "操作权限",
                            prop: "templateId",
                            "label-width": "80px",
                            rules: [{
                                validator: function(t, a, n) {
                                    return e.rules.templateIdValidator(t, a, n, i)
                                },
                                trigger: ["change", "blur"]
                            }]
                        }
                    }, [a("el-select", {
                        staticClass: "width-fill",
                        attrs: {
                            placeholder: "请选择操作权限",
                            clearable: ""
                        },
                        model: {
                            value: e.formData.permissions[i].templateId,
                            callback: function(t) {
                                e.$set(e.formData.permissions[i], "templateId", t)
                            },
                            expression: "formData.permissions[index].templateId"
                        }
                    }, e._l(e.templates, function(t) {
                        return a("el-option", {
                            key: t.id,
                            attrs: {
                                value: t.id,
                                label: t.name
                            }
                        }, [a("div", {
                            staticClass: "template"
                        }, [a("span", [e._v(e._s(t.name))]), e._v(" "), a("span", {
                            staticClass: "details"
                        }, [e._v(e._s((t.resourceNames || []).join("/")))])])])
                    }), 1)], 1)], 1), e._v(" "), a("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [e.formData.permissions.length > 1 ? a("el-button", {
                        attrs: {
                            icon: "el-icon-close",
                            type: "danger",
                            size: "small"
                        },
                        on: {
                            click: function(t) {
                                return e.deletePermissions(i)
                            }
                        }
                    }) : e._e(), e._v(" "), i === e.formData.permissions.length - 1 ? a("el-button", {
                        attrs: {
                            icon: "el-icon-plus",
                            type: "primary",
                            size: "small"
                        },
                        on: {
                            click: e.addPermissions
                        }
                    }) : e._e()], 1)], 1)
                }), 1) : e._e()], 1), e._v(" "), a("span", {
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [a("el-button", {
                    attrs: {
                        loading: e.btnLoading,
                        type: "primary"
                    },
                    on: {
                        click: e.confirm
                    }
                }, [e._v("确定")]), e._v(" "), a("el-button", {
                    on: {
                        click: e.cancelButtonClick
                    }
                }, [e._v("取消")])], 1)], 1)
            },
            staticRenderFns: []
        };
        var Ve = a("VU/8")(Ee, qe, !1, function(e) {
            a("UbPP"),
            a("A7/q")
        }, "data-v-54c64fd5", null).exports
          , Ae = {
            name: "Upload",
            data: function() {
                return {
                    chunkSize: 10485760,
                    maxUploadingLen: 5
                }
            },
            computed: {
                uploadingFilesLen: function() {
                    return (this.$store.getters.uploadFileList || []).filter(function(e) {
                        return "uploading" === e.status || "calculating" === e.status
                    }).length
                }
            },
            methods: T()({}, Object(W.b)({
                updateFilesMap: "SET_UPLOAD_LIST"
            }), {
                readyUpload: function(e) {
                    var t = this
                      , a = e.file;
                    return j()(U.a.mark(function e() {
                        var i, n;
                        return U.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== (i = t.createFileChunk(a)).length) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    try {
                                        t.$store.commit("SET_UPLOAD_LIST_VISIBLE", !0),
                                        n = {
                                            originalFileName: a.name,
                                            size: a.size,
                                            uid: a.uid,
                                            uploadingChunkSizes: [],
                                            percent: 0,
                                            uploadedSize: 0,
                                            status: t.uploadingFilesLen < t.maxUploadingLen ? "calculating" : "waiting",
                                            suffix: a.name.slice(a.name.lastIndexOf(".")),
                                            repoId: Number(t.$route.params.repoId),
                                            parentId: t.$route.query.parentId || null,
                                            cancels: [],
                                            chunks: i,
                                            bucketName: t.$route.query.bucketName,
                                            webkitRelativePath: a.webkitRelativePath
                                        },
                                        t.updateFilesMap(n),
                                        "calculating" === n.status && t.$bus.emit("upload-file", n)
                                    } catch (e) {
                                        console.log(e)
                                    }
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, t)
                    }))()
                },
                createFileChunk: function(e) {
                    for (var t = [], a = 0; a < e.size; )
                        t.push(e.slice(a, a + this.chunkSize)),
                        a += this.chunkSize;
                    return t
                }
            })
        }
          , Pe = {
            render: function() {
                var e = this.$createElement
                  , t = this._self._c || e;
                return t("div", [t("el-upload", {
                    ref: "upload",
                    staticClass: "upload",
                    attrs: {
                        action: "",
                        "show-file-list": !1,
                        multiple: "",
                        "http-request": this.readyUpload
                    }
                }, [this._t("default")], 2)], 1)
            },
            staticRenderFns: []
        };
        var Re = a("VU/8")(Ae, Pe, !1, function(e) {
            a("svWs")
        }, "data-v-cc1e77a4", null).exports
          , Oe = {
            name: "Repository",
            components: {
                OperateRepository: Ve,
                Upload: Re
            },
            data: function() {
                return {
                    tableLoading: !1,
                    repositories: [],
                    totalSize: 0,
                    selectedItems: [],
                    operateRepoModalVisible: !1,
                    action: "create",
                    repository: {},
                    params: {
                        pageSize: 15,
                        pageNum: 1,
                        prop: "updateTime",
                        order: "descending"
                    }
                }
            },
            created: function() {
                this.fetchData()
            },
            computed: {
                repoType: function() {
                    return this.$route.matched[0].meta.repoType
                },
                createPermissions: function() {
                    return "cooperative" === this.repoType ? ["XFXB_DEPART_REPO_CREATE"] : "public" === this.repoType ? ["XFXB_PUBLIC_REPO_CREATE"] : []
                },
                colConfigs: function() {
                    return "private" === this.repoType ? [{
                        type: "selection",
                        width: 50,
                        align: "center",
                        headerAlign: "center"
                    }, {
                        slot: "name"
                    }, {
                        slot: "useSize"
                    }, {
                        prop: "updateTime",
                        label: "更新时间",
                        sortable: "custom",
                        minWidth: 120
                    }, {
                        slot: "opt"
                    }] : [{
                        type: "selection",
                        width: 50,
                        align: "center",
                        headerAlign: "center"
                    }, {
                        slot: "name"
                    }, {
                        slot: "useSize"
                    }, {
                        prop: "principalName",
                        label: "管理员",
                        minWidth: 120
                    }, {
                        prop: "updateName",
                        label: "更新人",
                        minWidth: 120
                    }, {
                        prop: "updateTime",
                        label: "更新时间",
                        sortable: "custom",
                        minWidth: 120
                    }, {
                        slot: "opt"
                    }]
                }
            },
            filters: {
                repoIconFilter: function(e) {
                    var t = e.type
                      , a = e.isBackups;
                    return "private" === t ? "Y" === a ? "backup-repo" : "private-repo-menu" : t + "-repo-menu"
                }
            },
            watch: {
                repoType: function() {
                    re()(this.$data, this.$options.data()),
                    this.fetchData()
                }
            },
            methods: {
                fetchData: function() {
                    var e = this;
                    this.tableLoading = !0,
                    this.selectedItems = [],
                    Me(T()({}, this.params, {
                        repoType: this.repoType
                    })).then(function(t) {
                        e.tableLoading = !1,
                        e.repositories = t.data.data.items || [],
                        e.totalSize = t.data.data.totalSize || 0
                    }).catch(function() {
                        e.tableLoading = !1
                    })
                },
                isPrincipal: function(e) {
                    return this.$store.state.login.userInfo.id === e
                },
                select: function(e) {
                    this.selectedItems = e
                },
                selectAll: function(e) {
                    this.selectedItems = e
                },
                enterFile: function(e) {
                    this.$router.push({
                        name: this.repoType + "File",
                        params: {
                            repoId: e.id
                        },
                        query: {
                            bucketName: e.bucketName,
                            isBackups: e.isBackups
                        }
                    })
                },
                createRepository: function() {
                    this.action = "create",
                    this.operateRepoModalVisible = !0,
                    this.repository = {
                        type: this.repoType,
                        name: "",
                        principalId: this.$store.state.login.userInfo.id,
                        permissions: []
                    }
                },
                rename: function(e) {
                    this.action = "rename",
                    this.operateRepoModalVisible = !0,
                    this.repository = {
                        id: e.id,
                        name: e.name,
                        type: e.type
                    }
                },
                setPrincipal: function(e) {
                    this.action = "setPrincipal",
                    this.operateRepoModalVisible = !0,
                    this.repository = {
                        id: e.id,
                        principalId: e.principalId,
                        type: e.type
                    }
                },
                setPermission: function(e) {
                    this.action = "setPermission",
                    this.operateRepoModalVisible = !0,
                    this.repository = {
                        id: e.id,
                        type: e.type
                    }
                },
                deleteOneRepository: function(e) {
                    var t = this
                      , a = e.id;
                    this.$confirm("此操作将永久删除此空间及此空间下的所有文件, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        cancelButtonClass: "btn-custom-cancel",
                        type: "warning"
                    }).then(function() {
                        xe({
                            ids: [a]
                        }).then(function(e) {
                            t.$message.success(e.data.message),
                            t.selectedItems = t.selectedItems.filter(function(e) {
                                return e.id !== a
                            }),
                            t.fetchData()
                        })
                    }).catch(function() {
                        t.$message.info("已取消删除")
                    })
                },
                deleteRepositories: function() {
                    var e = this;
                    this.$confirm("此操作将永久删除所选空间及空间下的所有文件, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        cancelButtonClass: "btn-custom-cancel",
                        type: "warning"
                    }).then(function() {
                        e.selectedItems.forEach(function(t) {
                            if (!e.isPrincipal(t.principalId)) {
                                var a = e.repositories[e.repositories.findIndex(function(e) {
                                    return e.id === t.id
                                })];
                                e.$refs["repo-table"].$children[0].toggleRowSelection(a, !1)
                            }
                        }),
                        0 !== e.selectedItems.length ? xe({
                            ids: e.selectedItems.map(function(e) {
                                return e.id
                            })
                        }).then(function(t) {
                            e.$message.success(t.data.message),
                            e.selectedItems = [],
                            e.fetchData()
                        }) : e.$message.error("暂无删除空间的权限")
                    }).catch(function() {
                        e.$message.info("已取消删除")
                    })
                }
            }
        }
          , Ue = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("div", {
                    staticClass: "repo-container"
                }, [a("div", {
                    key: e.repoType,
                    staticClass: "operation-header"
                }, [a("div", {
                    staticClass: "btn-left"
                }, [a("span", {
                    staticClass: "header-repo-name"
                }, [e._v(e._s(e.$repoTypeMapping[e.repoType]))])]), e._v(" "), a("div", [a("el-button", {
                    directives: [{
                        name: "permissions",
                        rawName: "v-permissions",
                        value: e.createPermissions,
                        expression: "createPermissions"
                    }],
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: e.createRepository
                    }
                }, [e._v("新建空间")]), e._v(" "), a("el-button", {
                    attrs: {
                        type: "danger",
                        disabled: 0 === e.selectedItems.length
                    },
                    on: {
                        click: e.deleteRepositories
                    }
                }, [e._v("批量删除")])], 1)]), e._v(" "), a("table-custom", {
                    ref: "repo-table",
                    staticClass: "repo-table",
                    attrs: {
                        data: e.repositories,
                        "col-configs": e.colConfigs,
                        "table-loading": e.tableLoading,
                        "page-size": e.params.pageSize,
                        "current-page": e.params.pageNum,
                        "sort-prop": e.params.prop,
                        "sort-order": e.params.order,
                        total: e.totalSize,
                        "row-class-name": "repo-row"
                    },
                    on: {
                        "update:pageSize": function(t) {
                            return e.$set(e.params, "pageSize", t)
                        },
                        "update:page-size": function(t) {
                            return e.$set(e.params, "pageSize", t)
                        },
                        "update:currentPage": function(t) {
                            return e.$set(e.params, "pageNum", t)
                        },
                        "update:current-page": function(t) {
                            return e.$set(e.params, "pageNum", t)
                        },
                        "update:sortProp": function(t) {
                            return e.$set(e.params, "prop", t)
                        },
                        "update:sort-prop": function(t) {
                            return e.$set(e.params, "prop", t)
                        },
                        "update:sortOrder": function(t) {
                            return e.$set(e.params, "order", t)
                        },
                        "update:sort-order": function(t) {
                            return e.$set(e.params, "order", t)
                        },
                        "size-change": e.fetchData,
                        "current-change": e.fetchData,
                        "sort-change": e.fetchData,
                        select: e.select,
                        "select-all": e.selectAll,
                        "row-click": e.enterFile
                    }
                }, [a("el-table-column", {
                    attrs: {
                        slot: "name",
                        label: "空间名",
                        "min-width": "260",
                        sortable: "custom",
                        prop: "name"
                    },
                    slot: "name",
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [a("div", {
                                staticClass: "repo-header"
                            }, [a("i-icon", {
                                staticClass: "repo-icon",
                                attrs: {
                                    name: e._f("repoIconFilter")(t.row)
                                }
                            }), e._v(" "), a("span", {
                                staticClass: "repo-name",
                                attrs: {
                                    title: t.row.name
                                }
                            }, [e._v(e._s(t.row.name))])], 1)]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {
                        slot: "useSize",
                        prop: "useSize",
                        label: "大小",
                        width: "160",
                        sortable: "custom"
                    },
                    slot: "useSize",
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [a("span", [e._v(e._s(e.$byteFmt(t.row.useSize)))])]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {
                        slot: "opt",
                        label: "操作",
                        width: "160",
                        "class-name": "table-opt"
                    },
                    slot: "opt",
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e.isPrincipal(t.row.principalId) ? a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-edit-outline",
                                    title: "编辑"
                                },
                                on: {
                                    click: function(a) {
                                        return a.stopPropagation(),
                                        e.rename(t.row)
                                    }
                                }
                            }) : e._e(), e._v(" "), "private" !== e.repoType && e.isPrincipal(t.row.principalId) ? a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-s-custom",
                                    title: "设置管理员"
                                },
                                on: {
                                    click: function(a) {
                                        return a.stopPropagation(),
                                        e.setPrincipal(t.row)
                                    }
                                }
                            }) : e._e(), e._v(" "), "private" !== e.repoType && e.isPrincipal(t.row.principalId) ? a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-key",
                                    title: "设置权限"
                                },
                                on: {
                                    click: function(a) {
                                        return a.stopPropagation(),
                                        e.setPermission(t.row)
                                    }
                                }
                            }) : e._e(), e._v(" "), e.isPrincipal(t.row.principalId) ? a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-delete-solid",
                                    title: "删除"
                                },
                                on: {
                                    click: function(a) {
                                        return a.stopPropagation(),
                                        e.deleteOneRepository(t.row)
                                    }
                                }
                            }) : e._e()]
                        }
                    }])
                })], 1), e._v(" "), a("operate-repository", {
                    attrs: {
                        visible: e.operateRepoModalVisible,
                        action: e.action,
                        repository: e.repository
                    },
                    on: {
                        "update:visible": function(t) {
                            e.operateRepoModalVisible = t
                        },
                        confirm: e.fetchData
                    }
                })], 1)
            },
            staticRenderFns: []
        };
        var He = a("VU/8")(Oe, Ue, !1, function(e) {
            a("IX+u")
        }, "data-v-5ea21fcc", null).exports
          , je = {
            name: "CreateFileModal",
            mixins: [De],
            props: {
                file: {
                    type: Object,
                    required: !0,
                    default: function() {}
                }
            },
            data: function() {
                return {
                    rules: {
                        originFileName: [this.$validator.validateRule()],
                        fileName: [this.$validator.validateRule()]
                    }
                }
            },
            computed: {
                title: function() {
                    return "create" === this.action ? "新建文件夹" : "文件（夹）重命名"
                }
            },
            methods: {
                modalOpen: function() {
                    this.originFormData = re()({}, this.file),
                    this.formData = re()({}, this.originFormData)
                },
                modalClose: function() {
                    this.$refs.form.resetFields()
                },
                confirm: function() {
                    var e = this;
                    this.$refs.form.validate(function(t) {
                        var a;
                        t && (e.btnLoading = !0,
                        ("create" === e.action ? (a = e.formData,
                        he.request({
                            method: "post",
                            url: "/files",
                            data: a
                        })) : function(e) {
                            return he.request({
                                method: "post",
                                url: "/files/" + e.id + "/rename",
                                data: e
                            })
                        }(e.formData)).then(function(t) {
                            e.$message.success(t.data.message),
                            e.btnLoading = !1,
                            e.$emit("confirm"),
                            e.modalVisible = !1
                        }).catch(function() {
                            e.btnLoading = !1
                        }))
                    })
                }
            }
        }
          , Ye = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("el-dialog", {
                    attrs: {
                        visible: e.modalVisible,
                        "before-close": e.beforeModalClose,
                        title: e.title,
                        "append-to-body": !0
                    },
                    on: {
                        "update:visible": function(t) {
                            e.modalVisible = t
                        },
                        open: e.modalOpen,
                        close: e.modalClose
                    }
                }, [a("el-form", {
                    ref: "form",
                    attrs: {
                        model: e.formData,
                        "label-width": "100px",
                        rules: e.rules,
                        size: "small",
                        "status-icon": ""
                    },
                    nativeOn: {
                        submit: function(e) {
                            e.preventDefault()
                        }
                    }
                }, ["create" === e.action ? a("el-form-item", {
                    attrs: {
                        label: "文件名称",
                        prop: "originFileName"
                    }
                }, [a("el-input", {
                    attrs: {
                        placeholder: "请输入文件（夹）名称"
                    },
                    model: {
                        value: e.formData.originFileName,
                        callback: function(t) {
                            e.$set(e.formData, "originFileName", t)
                        },
                        expression: "formData.originFileName"
                    }
                })], 1) : e._e(), e._v(" "), "modify" === e.action ? a("el-form-item", {
                    attrs: {
                        label: "文件名称",
                        prop: "fileName"
                    }
                }, [a("el-input", {
                    attrs: {
                        placeholder: "请输入文件（夹）新名称"
                    },
                    model: {
                        value: e.formData.fileName,
                        callback: function(t) {
                            e.$set(e.formData, "fileName", t)
                        },
                        expression: "formData.fileName"
                    }
                })], 1) : e._e()], 1), e._v(" "), a("span", {
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [a("el-button", {
                    attrs: {
                        loading: e.btnLoading,
                        type: "primary"
                    },
                    on: {
                        click: e.confirm
                    }
                }, [e._v("确定")]), e._v(" "), a("el-button", {
                    on: {
                        click: e.cancelButtonClick
                    }
                }, [e._v("取消")])], 1)], 1)
            },
            staticRenderFns: []
        }
          , Xe = a("VU/8")(je, Ye, !1, null, null, null).exports
          , We = a("fZjL")
          , Ze = a.n(We)
          , Ke = {
            name: "FileTree",
            props: {
                repoType: {
                    type: String,
                    required: !0,
                    default: ""
                }
            },
            data: function() {
                return {
                    treeData: [],
                    loading: !1
                }
            },
            mounted: function() {
                this.fetchRepositories()
            },
            methods: {
                fetchRepositories: function() {
                    var e = this;
                    this.loading = !0,
                    Me({
                        repoType: this.repoType,
                        isBackups: "N"
                    }).then(function(t) {
                        e.treeData = t.data.data.items.map(function(t) {
                            return T()({
                                icon: e.repoType + "-repo-menu"
                            }, t)
                        }),
                        e.loading = !1
                    }).catch(function() {
                        e.loading = !1
                    })
                },
                loadNode: function(e, t) {
                    var a = {
                        repoId: e.data.repoId,
                        parentId: e.data.id,
                        fileType: "folder"
                    };
                    1 === e.level && (a = {
                        repoId: e.data.id,
                        parentId: null,
                        fileType: "folder"
                    }),
                    ve(a).then(function(e) {
                        t(e.data.data.items || [])
                    }).catch(function() {
                        t([])
                    })
                },
                nodeClick: function(e, t) {
                    var a = this
                      , i = {
                        repoId: e.repoId,
                        parentId: e.id
                    };
                    1 === t.level && (i = {
                        repoId: e.id,
                        parentId: null
                    }),
                    this.$emit("select-change", i, function e(t, i) {
                        var n = t.parent
                          , o = t.level
                          , s = t.data;
                        return o > 1 ? e(n, [{
                            name: s.originalFileName,
                            id: s.id
                        }].concat(y()(i))) : [{
                            name: a.$repoTypeMapping[a.repoType]
                        }, {
                            name: s.name,
                            id: s.id
                        }].concat(y()(i))
                    }(t, []))
                }
            }
        }
          , Ge = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading,
                        expression: "loading"
                    }],
                    staticClass: "file-tree-container"
                }, [a("el-tree", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 !== e.treeData.length,
                        expression: "treeData.length !== 0"
                    }],
                    ref: "fileTree",
                    attrs: {
                        data: e.treeData,
                        lazy: "",
                        load: e.loadNode,
                        "highlight-current": "",
                        "check-on-click-node": "",
                        "expand-on-click-node": !1,
                        "node-key": "id"
                    },
                    on: {
                        "node-click": e.nodeClick
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            var i = t.data
                              , n = t.node;
                            return a("div", {
                                staticClass: "tree-item"
                            }, [a("i-icon", {
                                class: [1 === n.level ? "repo-icon" : "file-icon"],
                                attrs: {
                                    name: 1 === n.level ? i.icon : n.expanded ? "folder-expand" : "folder"
                                }
                            }), e._v(" "), a("span", {
                                staticClass: "file-name"
                            }, [e._v(e._s(1 === n.level ? i.name : i.originalFileName))])], 1)
                        }
                    }])
                }), e._v(" "), a("el-empty", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 === e.treeData.length,
                        expression: "treeData.length === 0"
                    }],
                    staticClass: "is-empty",
                    attrs: {
                        description: "暂无空间"
                    }
                })], 1)
            },
            staticRenderFns: []
        };
        var Je = {
            copy: ge,
            move: function(e, t) {
                return he.request({
                    method: "post",
                    url: "/files/" + e + "/move",
                    data: t
                })
            },
            save: ge
        }
          , Qe = {
            name: "FileTreeModal",
            mixins: [De],
            components: {
                FileTree: a("VU/8")(Ke, Ge, !1, function(e) {
                    a("ljW0")
                }, "data-v-f647fd2a", null).exports
            },
            props: {
                file: {
                    type: Object,
                    required: !0,
                    default: function() {}
                }
            },
            data: function() {
                return {
                    selectedRepo: "private",
                    loading: !1,
                    ancestorFiles: [],
                    requestData: {},
                    actionLabel: {
                        move: "移动",
                        copy: "复制",
                        save: "保存"
                    }
                }
            },
            computed: {
                isSelected: function() {
                    return Ze()(this.ancestorFiles).length > 0
                },
                ancestorFileNames: function() {
                    return this.ancestorFiles.map(function(e) {
                        return e.name
                    }) || []
                },
                ancestorFileIds: function() {
                    return this.ancestorFiles.map(function(e) {
                        return e.id
                    }) || []
                }
            },
            methods: {
                selectChange: function(e) {
                    var t = this
                      , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                      , i = Ze()(this.$repoTypeMapping);
                    i.splice(i.indexOf(this.selectedRepo), 1),
                    i.forEach(function(e) {
                        t.$refs[e + "FileTree"] && t.$refs[e + "FileTree"][0] && t.$refs[e + "FileTree"][0].$refs.fileTree.setCurrentKey()
                    }),
                    this.ancestorFiles = a,
                    this.requestData = e
                },
                modalClose: function() {
                    var e = this;
                    re()(this.$data, this.$options.data()),
                    Ze()(this.$repoTypeMapping).forEach(function(t) {
                        e.$refs[t + "FileTree"] && e.$refs[t + "FileTree"][0].$refs.fileTree.setCurrentKey()
                    })
                },
                confirm: function() {
                    var e = this;
                    if (this.ancestorFileIds.includes(this.file.id))
                        return this.$message.error("不能将文件" + this.actionLabel[this.action] + "到自身或其子目录下"),
                        !1;
                    this.btnLoading = !0,
                    Je[this.action](this.file.id, this.requestData).then(function(t) {
                        e.btnLoading = !1,
                        e.modalVisible = !1,
                        e.$message.success(t.data.message),
                        e.$emit("confirm")
                    }).catch(function() {
                        e.btnLoading = !1
                    })
                }
            }
        }
          , et = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("el-dialog", {
                    attrs: {
                        visible: e.modalVisible,
                        "before-close": e.beforeModalClose,
                        "append-to-body": !0
                    },
                    on: {
                        "update:visible": function(t) {
                            e.modalVisible = t
                        },
                        close: e.modalClose
                    }
                }, [a("div", {
                    staticClass: "dialog-title",
                    attrs: {
                        slot: "title"
                    },
                    slot: "title"
                }, [a("span", {
                    staticClass: "action-title"
                }, [e._v(e._s(e.actionLabel[e.action]) + "“" + e._s(e.file.originalFileName) + "”")]), e._v(" "), a("div", {
                    staticClass: "target-folder",
                    attrs: {
                        title: "" + e.ancestorFileNames.join("  /  ")
                    }
                }, [e._v("\n      " + e._s(e.actionLabel[e.action]) + "到：" + e._s(e.ancestorFileNames.join("  /  ") || "-") + "\n    ")])]), e._v(" "), e.modalVisible ? a("el-tabs", {
                    staticClass: "repo-tabs",
                    attrs: {
                        type: "border-card"
                    },
                    model: {
                        value: e.selectedRepo,
                        callback: function(t) {
                            e.selectedRepo = t
                        },
                        expression: "selectedRepo"
                    }
                }, e._l(e.$repoTypeMapping, function(t, i) {
                    return a("el-tab-pane", {
                        key: i,
                        attrs: {
                            label: t,
                            name: i,
                            lazy: ""
                        }
                    }, [a("file-tree", {
                        attrs: {
                            "repo-type": i
                        },
                        on: {
                            "select-change": e.selectChange
                        }
                    })], 1)
                }), 1) : e._e(), e._v(" "), a("span", {
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [a("el-button", {
                    attrs: {
                        loading: e.btnLoading,
                        type: "primary",
                        disabled: !e.isSelected
                    },
                    on: {
                        click: e.confirm
                    }
                }, [e._v("确定")]), e._v(" "), a("el-button", {
                    on: {
                        click: e.cancelButtonClick
                    }
                }, [e._v("取消")])], 1)], 1)
            },
            staticRenderFns: []
        };
        var tt = a("VU/8")(Qe, et, !1, function(e) {
            a("OfIG")
        }, "data-v-2e6689f5", null).exports
          , at = a("FPCM")
          , it = a.n(at)
          , nt = function(e) {
            return he.request({
                method: "delete",
                url: "/share-files",
                data: e
            })
        }
          , ot = {
            name: "ShareFileModal",
            mixins: [De],
            props: {
                file: {
                    type: Object,
                    required: !0,
                    default: function() {}
                }
            },
            data: function() {
                return {
                    shareId: null,
                    complete: !1,
                    rules: {
                        expireTime: [this.$validator.validateRule()],
                        password: [this.$validator.validateRule()]
                    },
                    pickerOptions: {
                        disabledDate: function(e) {
                            return it()(e).isBefore(it()())
                        },
                        shortcuts: [{
                            text: "明天",
                            onClick: function(e) {
                                e.$emit("pick", it()().add(1, "day").format("YYYY-MM-DD"))
                            }
                        }, {
                            text: "一周后",
                            onClick: function(e) {
                                e.$emit("pick", it()().add(7, "day").format("YYYY-MM-DD"))
                            }
                        }, {
                            text: "一月后",
                            onClick: function(e) {
                                e.$emit("pick", it()().add(30, "day").format("YYYY-MM-DD"))
                            }
                        }]
                    }
                }
            },
            computed: {
                shareLink: function() {
                    return window.location.origin + "/share/" + this.shareId
                }
            },
            filters: {
                expireTimeFilter: function(e) {
                    return it()(e).format("YYYY-MM-DD")
                }
            },
            methods: {
                modalOpen: function() {
                    "shareCreate" === this.action ? this.originFormData = re()({}, {
                        fileId: this.file.id,
                        password: "",
                        expireTime: ""
                    }) : this.originFormData = re()({}, {
                        id: this.file.id,
                        password: this.file.password,
                        expireTime: this.file.expireTime || ""
                    }),
                    this.formData = re()({}, this.originFormData),
                    this.complete = !1
                },
                modalClose: function() {
                    this.$refs.form.resetFields()
                },
                confirm: function() {
                    var e = this;
                    this.$refs.form.validate(function(t) {
                        var a;
                        t && (e.btnLoading = !0,
                        e.formData.expireTime = it()(e.formData.expireTime).format("YYYY-MM-DD HH:mm:ss"),
                        ("shareCreate" === e.action ? (a = e.formData,
                        he.request({
                            method: "post",
                            url: "/share-files",
                            data: a
                        })) : function(e) {
                            return he.request({
                                method: "patch",
                                url: "/share-files/" + e.id,
                                data: e
                            })
                        }(e.formData)).then(function(t) {
                            e.$message.success(t.data.message),
                            e.shareId = "shareCreate" === e.action ? t.data.data : e.file.id,
                            e.complete = !0,
                            e.btnLoading = !1,
                            e.$emit("confirm")
                        }).catch(function() {
                            e.btnLoading = !1
                        }))
                    })
                },
                copy: function() {
                    var e = document.createElement("input");
                    e.value = "链接：" + window.location.origin + "/share/" + this.shareId + "  提取码：" + this.formData.password,
                    document.body.appendChild(e),
                    e.select(),
                    document.execCommand("Copy"),
                    this.$message.success("复制成功"),
                    e.remove(),
                    this.modalVisible = !1
                }
            }
        }
          , st = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("el-dialog", {
                    attrs: {
                        visible: e.modalVisible,
                        "before-close": e.beforeModalClose,
                        title: "分享'" + e.file.originalFileName + "'",
                        "append-to-body": !0
                    },
                    on: {
                        "update:visible": function(t) {
                            e.modalVisible = t
                        },
                        open: e.modalOpen,
                        close: e.modalClose
                    }
                }, [a("el-row", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.complete,
                        expression: "complete"
                    }],
                    attrs: {
                        type: "flex",
                        align: "middle"
                    }
                }, [a("el-col", {
                    attrs: {
                        span: 6,
                        offset: 1
                    }
                }, [a("i", {
                    staticClass: "el-icon-success success-icon"
                })]), e._v(" "), a("el-col", {
                    attrs: {
                        span: 15
                    }
                }, [a("el-descriptions", {
                    attrs: {
                        column: 1
                    }
                }, [a("el-descriptions-item", {
                    attrs: {
                        label: "过期时间"
                    }
                }, [e._v(e._s(e._f("expireTimeFilter")(e.formData.expireTime)))]), e._v(" "), a("el-descriptions-item", {
                    attrs: {
                        label: "分享链接"
                    }
                }, [e._v(e._s(e.shareLink))]), e._v(" "), a("el-descriptions-item", {
                    attrs: {
                        label: "分享密令"
                    }
                }, [e._v(e._s(e.formData.password))])], 1)], 1)], 1), e._v(" "), a("el-form", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.complete,
                        expression: "!complete"
                    }],
                    ref: "form",
                    attrs: {
                        model: e.formData,
                        "label-width": "100px",
                        rules: e.rules,
                        size: "small",
                        "status-icon": ""
                    }
                }, [a("el-form-item", {
                    attrs: {
                        label: "过期时间",
                        prop: "expireTime"
                    }
                }, [a("el-date-picker", {
                    attrs: {
                        align: "left",
                        type: "date",
                        placeholder: "请选择过期时间",
                        "value-format": "yyyy-MM-dd",
                        "picker-options": e.pickerOptions
                    },
                    model: {
                        value: e.formData.expireTime,
                        callback: function(t) {
                            e.$set(e.formData, "expireTime", t)
                        },
                        expression: "formData.expireTime"
                    }
                })], 1), e._v(" "), a("el-form-item", {
                    attrs: {
                        label: "分享密令",
                        prop: "password"
                    }
                }, [a("el-input", {
                    attrs: {
                        placeholder: "请输入分享密令",
                        "show-password": ""
                    },
                    model: {
                        value: e.formData.password,
                        callback: function(t) {
                            e.$set(e.formData, "password", t)
                        },
                        expression: "formData.password"
                    }
                })], 1)], 1), e._v(" "), a("span", {
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [e.complete ? a("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: e.copy
                    }
                }, [e._v("复制链接")]) : a("el-button", {
                    attrs: {
                        loading: e.btnLoading,
                        type: "primary"
                    },
                    on: {
                        click: e.confirm
                    }
                }, [e._v(e._s("shareCreate" === e.action ? "创建链接" : "修改链接"))]), e._v(" "), a("el-button", {
                    on: {
                        click: e.cancelButtonClick
                    }
                }, [e._v("取消")])], 1)], 1)
            },
            staticRenderFns: []
        };
        var rt = a("VU/8")(ot, st, !1, function(e) {
            a("IXeD")
        }, "data-v-16bc1ec7", null).exports
          , lt = {
            name: "File",
            components: {
                OperateFileModal: Xe,
                FileTreeModal: tt,
                Upload: Re,
                ShareFileModal: rt
            },
            data: function() {
                return {
                    action: "create",
                    files: [],
                    selectFile: {},
                    totalSize: 0,
                    tableLoading: !1,
                    ancestorFolders: [],
                    selectedItems: [],
                    operateFileModalVisible: !1,
                    fileTreeModalVisible: !1,
                    shareFileModalVisible: !1,
                    repository: {},
                    params: {
                        repoId: null,
                        searchContent: null,
                        parentId: null,
                        searchName: null,
                        isBackups: "",
                        order: "descending",
                        prop: "updateTime",
                        pageSize: 15,
                        pageNum: 1
                    }
                }
            },
            created: function() {
                this.params.repoId = Number(this.$route.params.repoId),
                this.params.parentId = this.$route.query.parentId || null,
                this.params.isBackups = this.$route.query.isBackups || "",
                this.$bus.on("upload-complete", this.fetchFiles),
                this.fetchData(),
                ("N" === this.params.isBackups || "" === this.params.isBackups) && this.$nextTick(function() {
                    document.querySelector(".folder-upload-btn") && (document.querySelector(".folder-upload-btn").getElementsByClassName("el-upload__input")[0].webkitdirectory = !0)
                })
            },
            beforeDestroy: function() {
                this.$bus.off("upload-complete")
            },
            beforeUpdate: function() {
                ("N" === this.params.isBackups || "" === this.params.isBackups) && this.$nextTick(function() {
                    document.querySelector(".folder-upload-btn") && (document.querySelector(".folder-upload-btn").getElementsByClassName("el-upload__input")[0].webkitdirectory = !0)
                })
            },
            computed: {
                repoType: function() {
                    return this.$route.matched[0].meta.repoType
                },
                resourceCodes: function() {
                    return this.repository.resourceCodes || []
                },
                colConfigs: function() {
                    return "private" === this.repoType ? [{
                        type: "selection",
                        width: 50,
                        align: "center",
                        headerAlign: "center"
                    }, {
                        slot: "originalFileName"
                    }, {
                        slot: "size"
                    }, {
                        prop: "updateTime",
                        label: "更新时间",
                        sortable: "custom",
                        minWidth: 120
                    }, {
                        slot: "opt"
                    }] : [{
                        type: "selection",
                        width: 50,
                        align: "center",
                        headerAlign: "center"
                    }, {
                        slot: "originalFileName"
                    }, {
                        slot: "size"
                    }, {
                        prop: "updateName",
                        label: "更新人",
                        minWidth: 120
                    }, {
                        prop: "updateTime",
                        label: "更新时间",
                        sortable: "custom",
                        minWidth: 120
                    }, {
                        slot: "opt"
                    }]
                }
            },
            methods: {
                fetchData: function() {
                    var e, t, a = this;
                    A.a.all([this.fetchFiles(), (t = {
                        repoId: this.params.repoId,
                        parentId: this.params.parentId
                    },
                    he.request({
                        method: "get",
                        url: "/files/ancestor-virtual-paths",
                        params: t
                    })), (e = this.params.repoId,
                    he.request({
                        method: "get",
                        url: "/repositories/" + e
                    }))]).then(function(e) {
                        a.ancestorFolders = e[1].data.data || [],
                        a.repository = e[2].data.data || {}
                    })
                },
                fetchFiles: function() {
                    var e = this;
                    return this.tableLoading = !0,
                    this.selectedItems = [],
                    ve(this.params).then(function(t) {
                        e.tableLoading = !1,
                        e.files = t.data.data.items || [],
                        e.totalSize = t.data.data.totalSize || 0
                    }).catch(function() {
                        e.tableLoading = !1
                    })
                },
                select: function(e) {
                    this.selectedItems = e
                },
                selectAll: function(e) {
                    this.selectedItems = e
                },
                deleteFiles: function() {
                    var e = this;
                    this.$confirm("此操作将批量删除所选文件, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        cancelButtonClass: "btn-custom-cancel",
                        type: "warning"
                    }).then(function() {
                        be({
                            ids: e.selectedItems.map(function(e) {
                                return e.id
                            })
                        }).then(function(t) {
                            e.$message.success(t.data.message),
                            e.selectedItems = [],
                            e.params.searchContent = null,
                            e.params.searchName = null,
                            e.fetchFiles()
                        })
                    }).catch(function() {
                        e.$message.info("已取消删除")
                    })
                },
                deleteOneFile: function(e) {
                    var t = this
                      , a = e.id;
                    this.$confirm("此操作将删除此文件, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        cancelButtonClass: "btn-custom-cancel",
                        type: "warning"
                    }).then(function() {
                        be({
                            ids: [a]
                        }).then(function(e) {
                            t.$message.success(e.data.message),
                            t.selectedItems = t.selectedItems.filter(function(e) {
                                return e.id !== a
                            }),
                            t.params.searchContent = null,
                            t.params.searchName = null,
                            t.fetchFiles()
                        })
                    }).catch(function() {
                        t.$message.info("已取消删除")
                    })
                },
                downloadFile: function(e, t) {
                    var a = this;
                    return j()(U.a.mark(function i() {
                        var n, o, s;
                        return U.a.wrap(function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.prev = 0,
                                    a.next = 3,
                                    ye(e);
                                case 3:
                                    if (n = a.sent,
                                    o = (n.data.data || {}).fileUrl) {
                                        a.next = 7;
                                        break
                                    }
                                    return a.abrupt("return", !1);
                                case 7:
                                    (s = document.createElement("a")).style.display = "none",
                                    s.href = "/download-proxy" + o,
                                    s.download = t,
                                    document.body.appendChild(s),
                                    s.click(),
                                    document.body.removeChild(s),
                                    a.next = 19;
                                    break;
                                case 16:
                                    a.prev = 16,
                                    a.t0 = a.catch(0),
                                    console.error(a.t0);
                                case 19:
                                case "end":
                                    return a.stop()
                                }
                        }, i, a, [[0, 16]])
                    }))()
                },
                rowClick: function(e) {
                    "folder" === e.fileType && this.$router.push({
                        name: this.repoType + "File",
                        params: {
                            repoId: e.repoId,
                            isBackups: this.params.isBackups
                        },
                        query: {
                            parentId: e.id,
                            bucketName: this.$route.query.bucketName,
                            isBackups: this.$route.query.isBackups
                        }
                    })
                },
                enterRepo: function() {
                    this.$router.push({
                        name: this.repoType + "Repo"
                    })
                },
                enterAncestorFolder: function(e, t) {
                    this.$router.push({
                        name: this.repoType + "File",
                        params: {
                            repoId: e.repoId,
                            isBackups: this.params.isBackups || ""
                        },
                        query: 0 === t ? {
                            bucketName: this.$route.query.bucketName,
                            isBackups: this.$route.query.isBackups
                        } : {
                            parentId: e.id,
                            bucketName: this.$route.query.bucketName,
                            isBackups: this.$route.query.isBackups
                        }
                    })
                },
                createFile: function() {
                    this.action = "create",
                    this.selectFile = {
                        originFileName: "",
                        parentId: this.params.parentId,
                        repoId: this.params.repoId
                    },
                    this.operateFileModalVisible = !0
                },
                modifyFile: function(e) {
                    this.action = "modify",
                    this.selectFile = {
                        fileName: e.originalFileName,
                        id: e.id
                    },
                    this.operateFileModalVisible = !0
                },
                copyFile: function(e) {
                    this.selectFile = e,
                    this.action = "copy",
                    this.fileTreeModalVisible = !0
                },
                moveFile: function(e) {
                    this.selectFile = e,
                    this.action = "move",
                    this.fileTreeModalVisible = !0
                },
                shareFile: function(e) {
                    this.selectFile = e,
                    this.action = "shareCreate",
                    this.shareFileModalVisible = !0
                }
            },
            beforeRouteUpdate: function(e, t, a) {
                re()(this.$data, this.$options.data()),
                this.params.parentId = e.query.parentId || null,
                this.params.isBackups = e.query.isBackups || "",
                this.params.repoId = Number(e.params.repoId) || null,
                this.fetchData(),
                a()
            }
        }
          , ct = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("div", {
                    staticClass: "file-container"
                }, [a("div", {
                    staticClass: "operation-header"
                }, [a("div", {
                    staticClass: "btn-left",
                    attrs: {
                        title: "" + [e.$repoTypeMapping[e.repoType]].concat(e.ancestorFolders.map(function(e) {
                            return e.name
                        })).join(" / ")
                    }
                }, [a("span", {
                    staticClass: "header-repo-name",
                    on: {
                        click: e.enterRepo
                    }
                }, [e._v(e._s(e.$repoTypeMapping[e.repoType]))]), e._v(" "), e._l(e.ancestorFolders, function(t, i) {
                    return a("span", {
                        key: t.id,
                        staticClass: "ancestor-folder",
                        on: {
                            click: function(a) {
                                return e.enterAncestorFolder(t, i)
                            }
                        }
                    }, [e._v(e._s(t.name))])
                })], 2), e._v(" "), a("div", {
                    staticClass: "btn-right"
                }, [a("el-input", {
                    staticClass: "search-input",
                    attrs: {
                        placeholder: "请输入文件名称",
                        "prefix-icon": "el-icon-search"
                    },
                    nativeOn: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.fetchFiles.apply(null, arguments)
                        }
                    },
                    model: {
                        value: e.params.searchName,
                        callback: function(t) {
                            e.$set(e.params, "searchName", t)
                        },
                        expression: "params.searchName"
                    }
                }), e._v(" "), a("el-input", {
                    staticClass: "search-input",
                    attrs: {
                        placeholder: "请输入文件内容",
                        "prefix-icon": "el-icon-search"
                    },
                    nativeOn: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.fetchFiles.apply(null, arguments)
                        }
                    },
                    model: {
                        value: e.params.searchContent,
                        callback: function(t) {
                            e.$set(e.params, "searchContent", t)
                        },
                        expression: "params.searchContent"
                    }
                }), e._v(" "), "private" !== e.repoType && !e.resourceCodes.includes("XFXB_MKDIR") || "Y" === e.params.isBackups ? e._e() : a("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: e.createFile
                    }
                }, [e._v("新建文件夹")]), e._v(" "), "private" !== e.repoType && !e.resourceCodes.includes("XFXB_UPLOAD") || "Y" === e.params.isBackups ? e._e() : a("el-dropdown", {
                    attrs: {
                        placement: "bottom-start"
                    }
                }, [a("el-button", {
                    attrs: {
                        type: "warning"
                    }
                }, [e._v("\n          上传"), a("i", {
                    staticClass: "el-icon-arrow-down el-icon--right"
                })]), e._v(" "), a("el-dropdown-menu", {
                    attrs: {
                        slot: "dropdown"
                    },
                    slot: "dropdown"
                }, [a("upload", {
                    ref: "upload"
                }, [a("el-dropdown-item", [e._v("上传文件")])], 1), e._v(" "), a("upload", {
                    staticClass: "folder-upload-btn"
                }, [a("el-dropdown-item", [e._v("上传文件夹")])], 1)], 1)], 1), e._v(" "), "private" !== e.repoType && !e.resourceCodes.includes("XFXB_DELETE") || "Y" === e.params.isBackups ? e._e() : a("el-button", {
                    attrs: {
                        type: "danger",
                        disabled: 0 === e.selectedItems.length
                    },
                    on: {
                        click: e.deleteFiles
                    }
                }, [e._v("批量删除")])], 1)]), e._v(" "), a("table-custom", {
                    staticClass: "file-table",
                    attrs: {
                        data: e.files,
                        "col-configs": e.colConfigs,
                        "table-loading": e.tableLoading,
                        "page-size": e.params.pageSize,
                        "current-page": e.params.pageNum,
                        "sort-prop": e.params.prop,
                        "sort-order": e.params.order,
                        total: e.totalSize,
                        "row-class-name": "file-row"
                    },
                    on: {
                        "update:pageSize": function(t) {
                            return e.$set(e.params, "pageSize", t)
                        },
                        "update:page-size": function(t) {
                            return e.$set(e.params, "pageSize", t)
                        },
                        "update:currentPage": function(t) {
                            return e.$set(e.params, "pageNum", t)
                        },
                        "update:current-page": function(t) {
                            return e.$set(e.params, "pageNum", t)
                        },
                        "update:sortProp": function(t) {
                            return e.$set(e.params, "prop", t)
                        },
                        "update:sort-prop": function(t) {
                            return e.$set(e.params, "prop", t)
                        },
                        "update:sortOrder": function(t) {
                            return e.$set(e.params, "order", t)
                        },
                        "update:sort-order": function(t) {
                            return e.$set(e.params, "order", t)
                        },
                        "size-change": e.fetchFiles,
                        "current-change": e.fetchFiles,
                        "sort-change": e.fetchFiles,
                        select: e.select,
                        "select-all": e.selectAll,
                        "row-click": e.rowClick
                    }
                }, [a("el-table-column", {
                    attrs: {
                        slot: "originalFileName",
                        prop: "originalFileName",
                        label: "文件名",
                        "min-width": "260",
                        sortable: "custom"
                    },
                    slot: "originalFileName",
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [a("div", {
                                staticClass: "file-header"
                            }, [a("i-icon", {
                                staticClass: "file-icon",
                                attrs: {
                                    name: e.$convertToIcon(t.row)
                                }
                            }), e._v(" "), a("span", {
                                staticClass: "file-name",
                                attrs: {
                                    title: t.row.originalFileName
                                }
                            }, [e._v(e._s(t.row.originalFileName))])], 1), e._v(" "), t.row.content ? a("div", {
                                staticClass: "overflow-ellipsis width-fill",
                                domProps: {
                                    innerHTML: e._s(t.row.content)
                                }
                            }) : e._e()]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {
                        slot: "size",
                        prop: "size",
                        label: "大小",
                        "min-width": "160",
                        sortable: "custom"
                    },
                    slot: "size",
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e._v("\n        " + e._s("file" === t.row.fileType ? e.$byteFmt(t.row.size) : "-") + "\n      ")]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {
                        slot: "opt",
                        label: "操作",
                        width: "240"
                    },
                    slot: "opt",
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return ["private" !== e.repoType && !e.resourceCodes.includes("XFXB_RENAME") || "Y" === e.params.isBackups ? e._e() : a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-edit-outline",
                                    title: "重命名"
                                },
                                on: {
                                    click: function(a) {
                                        return a.stopPropagation(),
                                        e.modifyFile(t.row)
                                    }
                                }
                            }), e._v(" "), "private" === e.repoType || e.resourceCodes.includes("XFXB_COPY") ? a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-document-copy",
                                    title: "复制"
                                },
                                on: {
                                    click: function(a) {
                                        return a.stopPropagation(),
                                        e.copyFile(t.row)
                                    }
                                }
                            }) : e._e(), e._v(" "), "private" !== e.repoType && !e.resourceCodes.includes("XFXB_MOVE") || "Y" === e.params.isBackups ? e._e() : a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    title: "移动"
                                },
                                on: {
                                    click: function(a) {
                                        return a.stopPropagation(),
                                        e.moveFile(t.row)
                                    }
                                }
                            }, [a("i", {
                                staticClass: "el-icon-download move-icon"
                            })]), e._v(" "), "private" === e.repoType || e.resourceCodes.includes("XFXB_SHARE") ? a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-share",
                                    title: "分享"
                                },
                                on: {
                                    click: function(a) {
                                        return a.stopPropagation(),
                                        e.shareFile(t.row)
                                    }
                                }
                            }) : e._e(), e._v(" "), "private" !== e.repoType && !e.resourceCodes.includes("XFXB_DELETE") || "Y" === e.params.isBackups ? e._e() : a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-delete-solid",
                                    title: "删除"
                                },
                                on: {
                                    click: function(a) {
                                        return a.stopPropagation(),
                                        e.deleteOneFile(t.row)
                                    }
                                }
                            }), e._v(" "), "file" !== t.row.fileType || "private" !== e.repoType && !e.resourceCodes.includes("XFXB_DOWNLOAD") ? e._e() : a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-download",
                                    title: "下载"
                                },
                                on: {
                                    click: function(a) {
                                        return a.stopPropagation(),
                                        e.downloadFile(t.row.id, t.row.originalFileName)
                                    }
                                }
                            })]
                        }
                    }])
                })], 1), e._v(" "), a("operate-file-modal", {
                    attrs: {
                        visible: e.operateFileModalVisible,
                        action: e.action,
                        file: e.selectFile
                    },
                    on: {
                        "update:visible": function(t) {
                            e.operateFileModalVisible = t
                        },
                        confirm: e.fetchFiles
                    }
                }), e._v(" "), a("file-tree-modal", {
                    attrs: {
                        visible: e.fileTreeModalVisible,
                        action: e.action,
                        file: e.selectFile
                    },
                    on: {
                        "update:visible": function(t) {
                            e.fileTreeModalVisible = t
                        },
                        confirm: e.fetchFiles
                    }
                }), e._v(" "), a("share-file-modal", {
                    attrs: {
                        visible: e.shareFileModalVisible,
                        action: e.action,
                        file: e.selectFile
                    },
                    on: {
                        "update:visible": function(t) {
                            e.shareFileModalVisible = t
                        },
                        confirm: e.fetchFiles
                    }
                })], 1)
            },
            staticRenderFns: []
        };
        var ut = a("VU/8")(lt, ct, !1, function(e) {
            a("TIaA")
        }, "data-v-2319c6e8", null).exports
          , pt = {
            name: "Share",
            components: {
                ShareFileModal: rt
            },
            data: function() {
                return {
                    shareFiles: [],
                    tableLoading: !1,
                    shareFileModalVisible: !1,
                    totalSize: 0,
                    selectedItems: [],
                    action: "",
                    selectFile: {},
                    statusMapping: {
                        expired: "已失效",
                        "next-expire": "即将失效",
                        normal: "未失效"
                    },
                    params: {
                        pageSize: 15,
                        pageNum: 1,
                        prop: "shareTime",
                        order: "descending"
                    }
                }
            },
            created: function() {
                this.fetchData(),
                this.colConfigs = [{
                    type: "selection",
                    width: 50,
                    align: "center",
                    headerAlign: "center"
                }, {
                    slot: "originalFileName"
                }, {
                    slot: "size"
                }, {
                    prop: "createTime",
                    label: "分享时间",
                    sortable: "custom",
                    minWidth: 120
                }, {
                    prop: "expireTime",
                    label: "过期时间",
                    sortable: "custom",
                    minWidth: 120
                }, {
                    slot: "status"
                }, {
                    slot: "opt"
                }]
            },
            filters: {
                statusFilter: function(e) {
                    var t = e.status
                      , a = e.diff;
                    return "next-expire" === t ? a + "天后失效" : "normal" === t ? "30天后失效" : "已失效"
                }
            },
            methods: {
                fetchData: function() {
                    var e, t = this;
                    this.tableLoading = !0,
                    this.selectedItems = [],
                    (e = this.params,
                    he.request({
                        method: "get",
                        url: "/share-files",
                        params: e
                    })).then(function(e) {
                        t.tableLoading = !1,
                        t.shareFiles = (e.data.data.items || []).map(function(e) {
                            if (e.expireTime = it()(e.expireTime).format("YYYY-MM-DD"),
                            it()(e.expireTime).isBefore(it()()))
                                return T()({}, e, {
                                    status: "expired"
                                });
                            var t = it()(e.expireTime).diff(it()(), "days") + 1;
                            return t <= 30 ? T()({}, e, {
                                status: "next-expire",
                                diff: t
                            }) : T()({}, e, {
                                status: "normal"
                            })
                        }),
                        t.totalSize = e.data.data.totalSize || 0
                    }).catch(function() {
                        t.tableLoading = !1
                    })
                },
                select: function(e) {
                    this.selectedItems = e
                },
                selectAll: function(e) {
                    this.selectedItems = e
                },
                modifyShareFile: function(e) {
                    this.action = "shareModify",
                    this.selectFile = e,
                    this.shareFileModalVisible = !0
                },
                copyLink: function(e) {
                    var t = e.id
                      , a = e.password
                      , i = document.createElement("input");
                    i.value = "链接：" + window.location.origin + "/share/" + t + "  提取码：" + a,
                    document.body.appendChild(i),
                    i.select(),
                    document.execCommand("Copy"),
                    this.$message.success("复制成功"),
                    i.remove()
                },
                downloadFile: function(e, t) {
                    var a = this;
                    return j()(U.a.mark(function i() {
                        var n, o, s;
                        return U.a.wrap(function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.prev = 0,
                                    a.next = 3,
                                    ye(e);
                                case 3:
                                    if (n = a.sent,
                                    o = (n.data.data || {}).fileUrl) {
                                        a.next = 7;
                                        break
                                    }
                                    return a.abrupt("return", !1);
                                case 7:
                                    (s = document.createElement("a")).style.display = "none",
                                    s.href = "/download-proxy/" + o,
                                    s.download = t,
                                    document.body.appendChild(s),
                                    s.click(),
                                    document.body.removeChild(s),
                                    a.next = 19;
                                    break;
                                case 16:
                                    a.prev = 16,
                                    a.t0 = a.catch(0),
                                    console.error(a.t0);
                                case 19:
                                case "end":
                                    return a.stop()
                                }
                        }, i, a, [[0, 16]])
                    }))()
                },
                jumpFilePos: function(e) {
                    var t = e.repoType
                      , a = e.repoId
                      , i = e.parentId
                      , n = e.bucketName;
                    this.$router.push({
                        name: t + "File",
                        params: {
                            repoId: a
                        },
                        query: i && "0" !== i ? {
                            parentId: i,
                            bucketName: n
                        } : {
                            bucketName: n
                        }
                    })
                },
                cancelOne: function(e) {
                    var t = this
                      , a = e.id;
                    this.$confirm("此操作将取消此文件分享, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        cancelButtonClass: "btn-custom-cancel",
                        type: "warning"
                    }).then(function() {
                        nt({
                            ids: [a]
                        }).then(function(e) {
                            t.$message.success(e.data.message),
                            t.selectedItems = t.selectedItems.filter(function(e) {
                                return e.id !== a
                            }),
                            t.fetchData()
                        })
                    }).catch(function() {
                        t.$message.info("已取消删除")
                    })
                },
                cancelShareFiles: function() {
                    var e = this;
                    this.$confirm("此操作将批量取消文件分享, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        cancelButtonClass: "btn-custom-cancel",
                        type: "warning"
                    }).then(function() {
                        nt({
                            ids: e.selectedItems.map(function(e) {
                                return e.id
                            })
                        }).then(function(t) {
                            e.$message.success(t.data.message),
                            e.selectedItems = [],
                            e.fetchData()
                        })
                    }).catch(function() {
                        e.$message.info("已取消删除")
                    })
                }
            }
        }
          , dt = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("div", {
                    staticClass: "share-container"
                }, [a("el-form", {
                    staticClass: "share-btn-form"
                }, [a("el-form-item", [a("el-button", {
                    attrs: {
                        type: "danger",
                        disabled: 0 === e.selectedItems.length
                    },
                    on: {
                        click: e.cancelShareFiles
                    }
                }, [e._v("批量取消")])], 1)], 1), e._v(" "), a("table-custom", {
                    attrs: {
                        data: e.shareFiles,
                        "col-configs": e.colConfigs,
                        "table-loading": e.tableLoading,
                        "page-size": e.params.pageSize,
                        "current-page": e.params.pageNum,
                        "sort-prop": e.params.prop,
                        "sort-order": e.params.order,
                        total: e.totalSize
                    },
                    on: {
                        "update:pageSize": function(t) {
                            return e.$set(e.params, "pageSize", t)
                        },
                        "update:page-size": function(t) {
                            return e.$set(e.params, "pageSize", t)
                        },
                        "update:currentPage": function(t) {
                            return e.$set(e.params, "pageNum", t)
                        },
                        "update:current-page": function(t) {
                            return e.$set(e.params, "pageNum", t)
                        },
                        "update:sortProp": function(t) {
                            return e.$set(e.params, "prop", t)
                        },
                        "update:sort-prop": function(t) {
                            return e.$set(e.params, "prop", t)
                        },
                        "update:sortOrder": function(t) {
                            return e.$set(e.params, "order", t)
                        },
                        "update:sort-order": function(t) {
                            return e.$set(e.params, "order", t)
                        },
                        "size-change": e.fetchData,
                        "current-change": e.fetchData,
                        "sort-change": e.fetchData,
                        select: e.select,
                        "select-all": e.selectAll
                    }
                }, [a("el-table-column", {
                    attrs: {
                        slot: "originalFileName",
                        label: "文件名",
                        "min-width": "260",
                        sortable: "custom"
                    },
                    slot: "originalFileName",
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [a("div", {
                                staticClass: "file-header"
                            }, [a("i-icon", {
                                staticClass: "file-icon",
                                attrs: {
                                    name: e.$convertToIcon(t.row)
                                }
                            }), e._v(" "), a("span", {
                                staticClass: "file-name",
                                attrs: {
                                    title: t.row.originalFileName
                                }
                            }, [e._v(e._s(t.row.originalFileName))])], 1)]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {
                        slot: "size",
                        prop: "size",
                        label: "大小",
                        width: "160",
                        sortable: "custom"
                    },
                    slot: "size",
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [a("span", [e._v(e._s("file" === t.row.fileType ? e.$byteFmt(t.row.size) : "-"))])]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {
                        slot: "status",
                        label: "状态"
                    },
                    slot: "status",
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [a("span", {
                                class: t.row.status + "-color"
                            }, [e._v(e._s(e._f("statusFilter")(t.row)))])]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {
                        slot: "opt",
                        width: "200",
                        label: "操作"
                    },
                    slot: "opt",
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-edit-outline",
                                    title: "编辑"
                                },
                                on: {
                                    click: function(a) {
                                        return e.modifyShareFile(t.row)
                                    }
                                }
                            }), e._v(" "), a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-link",
                                    title: "复制链接"
                                },
                                on: {
                                    click: function(a) {
                                        return e.copyLink(t.row)
                                    }
                                }
                            }), e._v(" "), a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-folder-opened",
                                    title: "打开文件位置"
                                },
                                on: {
                                    click: function(a) {
                                        return e.jumpFilePos(t.row)
                                    }
                                }
                            }), e._v(" "), a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-close",
                                    title: "取消分享"
                                },
                                on: {
                                    click: function(a) {
                                        return e.cancelOne(t.row)
                                    }
                                }
                            }), e._v(" "), "file" === t.row.fileType ? a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-download",
                                    title: "下载"
                                },
                                on: {
                                    click: function(a) {
                                        return e.downloadFile(t.row.fileId, t.row.originalFileName)
                                    }
                                }
                            }) : e._e()]
                        }
                    }])
                })], 1), e._v(" "), a("share-file-modal", {
                    attrs: {
                        visible: e.shareFileModalVisible,
                        action: e.action,
                        file: e.selectFile
                    },
                    on: {
                        "update:visible": function(t) {
                            e.shareFileModalVisible = t
                        },
                        confirm: e.fetchData
                    }
                })], 1)
            },
            staticRenderFns: []
        };
        var ft = a("VU/8")(pt, dt, !1, function(e) {
            a("sA4d")
        }, "data-v-ef694f34", null).exports
          , mt = {
            name: "ShareFileDetail",
            components: {
                FileTreeModal: tt
            },
            data: function() {
                return {
                    loading: !1,
                    identity: !1,
                    password: null,
                    btnLoading: !1,
                    saveFileModalVisible: !1,
                    selectFile: {},
                    detail: {}
                }
            },
            created: function() {
                this.fetchData()
            },
            computed: {
                invalid: function() {
                    return it()(this.detail.expireTime).isBefore(it()())
                },
                userInfo: function() {
                    return this.$store.state.login.userInfo || {}
                }
            },
            filters: {
                expireTimeFilter: function(e) {
                    return it()(e).format("YYYY-MM-DD")
                }
            },
            methods: {
                fetchData: function() {
                    var e, t = this;
                    this.loading = !0,
                    (e = this.$route.params.id,
                    he.request({
                        method: "get",
                        url: "/share-files/" + e
                    })).then(function(e) {
                        t.loading = !1,
                        t.detail = e.data.data || {},
                        t.detail.shareRealId === t.userInfo.id && (t.identity = !0)
                    }).catch(function() {
                        t.loading = !1
                    })
                },
                validate: function() {
                    var e, t, a = this;
                    this.btnLoading = !0,
                    (e = this.$route.params.id,
                    t = {
                        password: this.password
                    },
                    he.request({
                        method: "get",
                        url: "/share-files/" + e + "/validate",
                        params: t
                    })).then(function() {
                        a.identity = !0,
                        a.btnLoading = !1
                    }).catch(function() {
                        a.btnLoading = !1
                    })
                },
                saveFile: function() {
                    this.saveFileModalVisible = !0,
                    this.selectFile = {
                        id: this.detail.fileId,
                        originalFileName: this.detail.originalFileName
                    }
                },
                saveComplete: function() {
                    this.$message.success("文件保存成功")
                },
                downloadFile: function() {
                    var e = this;
                    return j()(U.a.mark(function t() {
                        var a, i, n;
                        return U.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    ye(e.detail.fileId);
                                case 3:
                                    if (a = t.sent,
                                    i = (a.data.data || {}).fileUrl) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return", !1);
                                case 7:
                                    (n = document.createElement("a")).style.display = "none",
                                    n.href = "/download-proxy/" + i,
                                    n.download = e.detail.originalFileName,
                                    document.body.appendChild(n),
                                    n.click(),
                                    document.body.removeChild(n),
                                    t.next = 19;
                                    break;
                                case 16:
                                    t.prev = 16,
                                    t.t0 = t.catch(0),
                                    console.error(t.t0);
                                case 19:
                                case "end":
                                    return t.stop()
                                }
                        }, t, e, [[0, 16]])
                    }))()
                }
            }
        }
          , ht = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("div", {
                    staticClass: "share-detail-container"
                }, [a("div", {
                    staticClass: "share-detail-header"
                }, [a("div", {
                    staticClass: "header-left",
                    on: {
                        click: function(t) {
                            return e.$router.push({
                                path: "/"
                            })
                        }
                    }
                }, [a("i-icon", {
                    staticClass: "logo-icon",
                    attrs: {
                        name: "logo"
                    }
                }), e._v(" "), a("h1", {
                    staticClass: "tagline"
                }, [e._v("信服小贝")])], 1), e._v(" "), a("div", {
                    staticClass: "header-right"
                }, [a("span", [e._v("HI! " + e._s(e.userInfo.realName))])])]), e._v(" "), a("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading,
                        expression: "loading"
                    }],
                    staticClass: "share-detail-body"
                }, [e.detail.id ? e.invalid ? a("div", {
                    staticClass: "invalid"
                }, [a("i-icon", {
                    staticClass: "invalid-icon",
                    attrs: {
                        name: "link-invalid"
                    }
                }), e._v(" "), a("h4", {
                    staticClass: "invalid-hint"
                }, [e._v("链接已失效，请联系分享人~")])], 1) : a("div", {
                    staticClass: "share-detail-info"
                }, [a("i-icon", {
                    staticClass: "file-icon",
                    attrs: {
                        name: e.$convertToIcon(e.detail)
                    }
                }), e._v(" "), a("div", {
                    staticClass: "file-name"
                }, [e._v(e._s(e.detail.originalFileName))]), e._v(" "), "file" === e.detail.fileType ? a("div", {
                    staticClass: "file-size"
                }, [e._v(e._s(e.$byteFmt(e.detail.size)))]) : e._e(), e._v(" "), e.identity ? a("div", {
                    staticClass: "operation-btn"
                }, ["file" === e.detail.fileType ? a("el-button", {
                    on: {
                        click: e.downloadFile
                    }
                }, [e._v("下载")]) : e._e(), e._v(" "), a("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: e.saveFile
                    }
                }, [e._v("保存到网盘")])], 1) : a("div", {
                    staticClass: "identity-container"
                }, [a("el-input", {
                    staticClass: "identity-input",
                    attrs: {
                        placeholder: "请输入口令"
                    },
                    model: {
                        value: e.password,
                        callback: function(t) {
                            e.password = t
                        },
                        expression: "password"
                    }
                }), e._v(" "), a("el-button", {
                    staticClass: "identity-btn",
                    attrs: {
                        type: "primary",
                        disabled: !e.password,
                        loading: e.btnLoading
                    },
                    on: {
                        click: e.validate
                    }
                }, [e._v("提取文件")])], 1), e._v(" "), a("div", {
                    staticClass: "share-info"
                }, [e._v(e._s(e.detail.shareRealName) + " 在 " + e._s(e.detail.createTime) + " 分享了此文件，" + e._s(e._f("expireTimeFilter")(e.detail.expireTime)) + " 过期")])], 1) : a("el-empty", [a("h4", {
                    staticClass: "not-found",
                    attrs: {
                        slot: "description"
                    },
                    slot: "description"
                }, [e._v("未找到分享的文件~")])])], 1), e._v(" "), a("file-tree-modal", {
                    attrs: {
                        visible: e.saveFileModalVisible,
                        action: "save",
                        file: e.selectFile
                    },
                    on: {
                        "update:visible": function(t) {
                            e.saveFileModalVisible = t
                        },
                        confirm: e.saveComplete
                    }
                })], 1)
            },
            staticRenderFns: []
        };
        var vt = a("VU/8")(mt, ht, !1, function(e) {
            a("JUT5")
        }, "data-v-69a1f4a0", null).exports
          , gt = function(e) {
            return he.request({
                method: "delete",
                url: "/recycle-files",
                data: e
            })
        }
          , bt = function(e) {
            return he.request({
                method: "post",
                url: "/recycle-files/recovery",
                data: e
            })
        }
          , yt = {
            name: "Recycle",
            data: function() {
                return {
                    tableLoading: !1,
                    recycleFiles: [],
                    totalSize: 0,
                    selectedItems: [],
                    params: {
                        repoType: "all",
                        pageSize: 15,
                        pageNum: 1,
                        prop: "deleteTime",
                        order: "descending",
                        searchName: null
                    }
                }
            },
            created: function() {
                this.fetchData(),
                this.colConfigs = [{
                    type: "selection",
                    width: 50,
                    align: "center",
                    headerAlign: "center"
                }, {
                    slot: "originalFileName"
                }, {
                    slot: "size"
                }, {
                    prop: "deleteTime",
                    label: "删除时间",
                    sortable: "custom",
                    minWidth: 120
                }, {
                    slot: "opt"
                }]
            },
            methods: {
                fetchData: function() {
                    var e, t = this;
                    this.tableLoading = !0,
                    this.selectedItems = [],
                    (e = this.params,
                    he.request({
                        method: "get",
                        url: "/recycle-files",
                        params: e
                    })).then(function(e) {
                        t.tableLoading = !1,
                        t.recycleFiles = e.data.data.items || [],
                        t.totalSize = e.data.data.totalSize || 0
                    }).catch(function() {
                        t.tableLoading = !1
                    })
                },
                select: function(e) {
                    this.selectedItems = e
                },
                selectAll: function(e) {
                    this.selectedItems = e
                },
                deleteOneFile: function(e) {
                    var t = this
                      , a = e.fileUuid;
                    this.$confirm("此操作将永久删除此文件, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        cancelButtonClass: "btn-custom-cancel",
                        type: "warning",
                        beforeClose: function(e, i, n) {
                            "confirm" === e ? (i.confirmButtonText = "删除中",
                            i.confirmButtonLoading = !0,
                            gt({
                                ids: [a]
                            }).then(function(e) {
                                t.$message.success(e.data.message),
                                t.selectedItems = t.selectedItems.filter(function(e) {
                                    return e.fileUuid !== a
                                }),
                                i.confirmButtonLoading = !1,
                                n(),
                                t.fetchData()
                            }).catch(function() {
                                i.confirmButtonLoading = !1,
                                n()
                            })) : (n(),
                            t.$message.info("已取消删除"))
                        }
                    })
                },
                recoveryOneFile: function(e) {
                    var t = this
                      , a = e.fileUuid;
                    this.$confirm("此操作将恢复此文件, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        cancelButtonClass: "btn-custom-cancel",
                        type: "warning"
                    }).then(function() {
                        bt({
                            ids: [a]
                        }).then(function(e) {
                            t.$message.success(e.data.message),
                            t.selectedItems = t.selectedItems.filter(function(e) {
                                return e.fileUuid !== a
                            }),
                            t.fetchData()
                        })
                    }).catch(function() {
                        t.$message.info("已取消恢复")
                    })
                },
                deleteFiles: function() {
                    var e = this;
                    this.$confirm("此操作将永久删除所选文件, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        cancelButtonClass: "btn-custom-cancel",
                        type: "warning",
                        beforeClose: function(t, a, i) {
                            "confirm" === t ? (a.confirmButtonText = "删除中",
                            a.confirmButtonLoading = !0,
                            gt({
                                ids: e.selectedItems.map(function(e) {
                                    return e.fileUuid
                                })
                            }).then(function(t) {
                                e.$message.success(t.data.message),
                                e.selectedItems = [],
                                a.confirmButtonLoading = !1,
                                i(),
                                e.fetchData()
                            }).catch(function() {
                                a.confirmButtonLoading = !1,
                                i()
                            })) : (i(),
                            e.$message.info("已取消删除"))
                        }
                    })
                },
                recoveryFiles: function() {
                    var e = this;
                    this.$confirm("此操作将批量恢复所选文件, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        cancelButtonClass: "btn-custom-cancel",
                        type: "warning"
                    }).then(function() {
                        bt({
                            ids: e.selectedItems.map(function(e) {
                                return e.fileUuid
                            })
                        }).then(function(t) {
                            e.$message.success(t.data.message),
                            e.selectedItems = [],
                            e.fetchData()
                        })
                    }).catch(function() {
                        e.$message.info("已取消恢复")
                    })
                },
                emptyFiles: function() {
                    var e = this;
                    this.$confirm("此操作将永久清空所有文件, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        cancelButtonClass: "btn-custom-cancel",
                        type: "warning",
                        beforeClose: function(t, a, i) {
                            "confirm" === t ? (a.confirmButtonText = "删除中",
                            a.confirmButtonLoading = !0,
                            he.request({
                                method: "delete",
                                url: "/recycle-files/empty"
                            }).then(function(t) {
                                e.$message.success(t.data.message),
                                e.selectedItems = [],
                                a.confirmButtonLoading = !1,
                                i(),
                                e.fetchData()
                            }).catch(function() {
                                a.confirmButtonLoading = !1,
                                i()
                            })) : (i(),
                            e.$message.info("已取消删除"))
                        }
                    })
                }
            }
        }
          , Ft = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("div", {
                    staticClass: "recycle-bin-container"
                }, [a("el-tabs", {
                    staticClass: "repo-type-tab",
                    on: {
                        "tab-click": e.fetchData
                    },
                    model: {
                        value: e.params.repoType,
                        callback: function(t) {
                            e.$set(e.params, "repoType", t)
                        },
                        expression: "params.repoType"
                    }
                }, [a("el-tab-pane", {
                    attrs: {
                        label: "所有文件",
                        name: "all"
                    }
                }), e._v(" "), e._l(e.$repoTypeMapping, function(e, t) {
                    return a("el-tab-pane", {
                        key: e,
                        attrs: {
                            label: e,
                            name: t
                        }
                    })
                })], 2), e._v(" "), a("el-form", {
                    staticClass: "recycle-btn-form",
                    nativeOn: {
                        submit: function(e) {
                            e.preventDefault()
                        }
                    }
                }, [a("el-form-item", [a("el-input", {
                    staticClass: "search-input",
                    attrs: {
                        placeholder: "请输入文件名称",
                        "prefix-icon": "el-icon-search"
                    },
                    nativeOn: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.fetchData.apply(null, arguments)
                        }
                    },
                    model: {
                        value: e.params.searchName,
                        callback: function(t) {
                            e.$set(e.params, "searchName", t)
                        },
                        expression: "params.searchName"
                    }
                })], 1), e._v(" "), a("el-form-item", [a("el-button", {
                    attrs: {
                        type: "primary",
                        disabled: 0 === e.selectedItems.length
                    },
                    on: {
                        click: e.recoveryFiles
                    }
                }, [e._v("批量恢复")]), e._v(" "), a("el-button", {
                    attrs: {
                        type: "warning",
                        disabled: 0 === e.selectedItems.length
                    },
                    on: {
                        click: e.deleteFiles
                    }
                }, [e._v("批量删除")]), e._v(" "), a("el-button", {
                    attrs: {
                        type: "danger",
                        disabled: 0 === e.totalSize
                    },
                    on: {
                        click: e.emptyFiles
                    }
                }, [e._v("清空")])], 1)], 1), e._v(" "), a("table-custom", {
                    staticClass: "file-table",
                    attrs: {
                        data: e.recycleFiles,
                        "col-configs": e.colConfigs,
                        "table-loading": e.tableLoading,
                        "page-size": e.params.pageSize,
                        "current-page": e.params.pageNum,
                        "sort-prop": e.params.prop,
                        "sort-order": e.params.order,
                        total: e.totalSize
                    },
                    on: {
                        "update:pageSize": function(t) {
                            return e.$set(e.params, "pageSize", t)
                        },
                        "update:page-size": function(t) {
                            return e.$set(e.params, "pageSize", t)
                        },
                        "update:currentPage": function(t) {
                            return e.$set(e.params, "pageNum", t)
                        },
                        "update:current-page": function(t) {
                            return e.$set(e.params, "pageNum", t)
                        },
                        "update:sortProp": function(t) {
                            return e.$set(e.params, "prop", t)
                        },
                        "update:sort-prop": function(t) {
                            return e.$set(e.params, "prop", t)
                        },
                        "update:sortOrder": function(t) {
                            return e.$set(e.params, "order", t)
                        },
                        "update:sort-order": function(t) {
                            return e.$set(e.params, "order", t)
                        },
                        "size-change": e.fetchData,
                        "current-change": e.fetchData,
                        "sort-change": e.fetchData,
                        select: e.select,
                        "select-all": e.selectAll
                    }
                }, [a("el-table-column", {
                    attrs: {
                        slot: "originalFileName",
                        label: "文件名",
                        "min-width": "260",
                        sortable: "custom",
                        prop: "originalFileName",
                        "show-overflow-tooltip": ""
                    },
                    slot: "originalFileName",
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [a("i-icon", {
                                staticClass: "file-icon",
                                attrs: {
                                    name: e.$convertToIcon(t.row)
                                }
                            }), e._v(" "), a("span", {
                                staticClass: "file-name"
                            }, [e._v(e._s(t.row.originalFileName))])]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {
                        slot: "size",
                        prop: "size",
                        label: "大小",
                        "min-width": "160",
                        sortable: "custom"
                    },
                    slot: "size",
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [a("span", [e._v(e._s("file" === t.row.fileType ? e.$byteFmt(t.row.size) : "-"))])]
                        }
                    }])
                }), e._v(" "), a("el-table-column", {
                    attrs: {
                        slot: "opt",
                        label: "操作",
                        width: "120"
                    },
                    slot: "opt",
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-refresh-right",
                                    title: "恢复"
                                },
                                on: {
                                    click: function(a) {
                                        return e.recoveryOneFile(t.row)
                                    }
                                }
                            }), e._v(" "), a("el-button", {
                                staticClass: "icon-btn",
                                attrs: {
                                    type: "text",
                                    icon: "el-icon-delete-solid",
                                    title: "删除"
                                },
                                on: {
                                    click: function(a) {
                                        return e.deleteOneFile(t.row)
                                    }
                                }
                            })]
                        }
                    }])
                })], 1)], 1)
            },
            staticRenderFns: []
        };
        var Ct = a("VU/8")(yt, Ft, !1, function(e) {
            a("bcsM")
        }, "data-v-433ddcf2", null).exports
          , _t = {
            name: "Organize",
            data: function() {
                return {
                    departs: [],
                    users: [],
                    loading: !1,
                    deptId: 1,
                    filterDepartName: "",
                    selectedDepart: {},
                    params: {
                        prop: "userName",
                        order: "descending",
                        pageSize: 15,
                        pageNum: 1
                    }
                }
            },
            created: function() {
                this.fetchData(),
                this.colConfigs = [{
                    prop: "userName",
                    label: "用户名",
                    sortable: !0
                }, {
                    prop: "realName",
                    label: "中文名",
                    sortable: !0
                }, {
                    slot: "status"
                }, {
                    prop: "deptName",
                    label: "所属部门"
                }, {
                    prop: "wechat",
                    label: "微信号"
                }, {
                    prop: "phoneNumber",
                    label: "手机号"
                }, {
                    prop: "email",
                    label: "邮箱"
                }]
            },
            watch: {
                filterDepartName: function(e) {
                    this.$refs["depart-tree"].filter(e)
                }
            },
            computed: {
                usersForDepart: function() {
                    var e = [this.deptId].concat(y()(this.flattenGenerationIds(this.selectedDepart.children || [])));
                    return this.users.filter(function(t) {
                        var a = t.deptId;
                        return e.includes(a)
                    })
                }
            },
            methods: {
                fetchData: function() {
                    var e = this;
                    this.loading = !0,
                    A.a.all([Se(), Le()]).then(function(t) {
                        e.departs = e.$toTree(t[0].data.data || []),
                        e.users = t[1].data.data || [],
                        e.selectedDepart = e.$getTreeNode(e.departs, e.deptId) || {},
                        e.loading = !1,
                        e.$nextTick(function() {
                            e.$refs["depart-tree"] && e.$refs["depart-tree"].setCurrentKey(e.deptId)
                        })
                    }).catch(function(t) {
                        console.log(t),
                        e.loading = !1
                    })
                },
                flattenGenerationIds: function(e) {
                    var t = this;
                    return e.reduce(function(e, a) {
                        return [].concat(y()(e), [a.id], y()(Array.isArray(a.children) ? t.flattenGenerationIds(a.children) : []))
                    }, [])
                },
                nodeClick: function(e) {
                    this.deptId = e.id,
                    this.selectedDepart = this.$getTreeNode(this.departs, this.deptId) || {}
                },
                filterDepart: function(e, t) {
                    return !e || -1 !== t.deptName.indexOf(e)
                }
            }
        }
          , wt = {
            render: function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading,
                        expression: "loading"
                    }],
                    staticClass: "user-container"
                }, [a("div", {
                    staticClass: "tree-box"
                }, [a("el-input", {
                    attrs: {
                        "prefix-icon": "el-icon-search",
                        placeholder: "请输入部门名称过滤"
                    },
                    model: {
                        value: e.filterDepartName,
                        callback: function(t) {
                            e.filterDepartName = t
                        },
                        expression: "filterDepartName"
                    }
                }), e._v(" "), a("el-tree", {
                    ref: "depart-tree",
                    staticClass: "depart-tree",
                    attrs: {
                        data: e.departs,
                        "node-key": "id",
                        "default-expanded-keys": [e.deptId],
                        "current-node-key": e.deptId,
                        "highlight-current": !0,
                        "expand-on-click-node": !0,
                        "filter-node-method": e.filterDepart
                    },
                    on: {
                        "node-click": e.nodeClick
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            var i = t.data;
                            return a("span", {
                                staticClass: "overflow-ellipsis"
                            }, [e._v(e._s(i.deptName))])
                        }
                    }])
                })], 1), e._v(" "), a("div", {
                    staticClass: "table-box"
                }, [a("table-custom", {
                    staticClass: "user-table",
                    attrs: {
                        data: e.usersForDepart,
                        "col-configs": e.colConfigs,
                        "sort-prop": e.params.prop,
                        "sort-order": e.params.order,
                        "page-size": e.params.pageSize,
                        "current-page": e.params.pageNum,
                        total: e.usersForDepart.length,
                        paging: !0
                    },
                    on: {
                        "update:sortProp": function(t) {
                            return e.$set(e.params, "prop", t)
                        },
                        "update:sort-prop": function(t) {
                            return e.$set(e.params, "prop", t)
                        },
                        "update:sortOrder": function(t) {
                            return e.$set(e.params, "order", t)
                        },
                        "update:sort-order": function(t) {
                            return e.$set(e.params, "order", t)
                        },
                        "update:pageSize": function(t) {
                            return e.$set(e.params, "pageSize", t)
                        },
                        "update:page-size": function(t) {
                            return e.$set(e.params, "pageSize", t)
                        },
                        "update:currentPage": function(t) {
                            return e.$set(e.params, "pageNum", t)
                        },
                        "update:current-page": function(t) {
                            return e.$set(e.params, "pageNum", t)
                        }
                    }
                }, [a("el-table-column", {
                    attrs: {
                        slot: "status",
                        label: "状态",
                        prop: "status",
                        width: "80"
                    },
                    slot: "status",
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [a("span", {
                                class: ["enable" === t.row.status ? "success-color" : "error-color"]
                            }, [e._v("\n            " + e._s("enable" === t.row.status ? "启用" : "禁用") + "\n          ")])]
                        }
                    }])
                })], 1)], 1)])
            },
            staticRenderFns: []
        };
        var kt = a("VU/8")(_t, wt, !1, function(e) {
            a("RQnK")
        }, "data-v-5312ed76", null).exports;
        s.default.use(z.a);
        var zt = z.a.prototype.push;
        z.a.prototype.push = function(e) {
            return zt.call(this, e).catch(function(e) {
                return e
            })
        }
        ;
        var Mt = z.a.prototype.replace;
        z.a.prototype.replace = function(e) {
            return Mt.call(this, e).catch(function(e) {
                return e
            })
        }
        ;
        var xt = [{
            path: "/",
            redirect: "/private-repository"
        }, {
            path: "/login",
            name: "login",
            component: I
        }]
          , It = [{
            path: "/private-repository",
            component: ze,
            meta: {
                title: "个人空间",
                repoType: "private",
                icon: "private-repo-menu",
                resourceCodes: []
            },
            children: [{
                path: "/private-repository",
                name: "privateRepo",
                component: He
            }, {
                path: ":repoId/file",
                props: !0,
                name: "privateFile",
                component: ut,
                meta: {
                    activePath: "/private-repository"
                }
            }]
        }, {
            path: "/cooperative-repository",
            component: ze,
            meta: {
                title: "部门空间",
                repoType: "cooperative",
                icon: "cooperative-repo-menu",
                resourceCodes: ["XFXB_DEPART_REPO"]
            },
            children: [{
                path: "/cooperative-repository",
                name: "cooperativeRepo",
                component: He,
                meta: {
                    resourceCodes: ["XFXB_DEPART_REPO"]
                }
            }, {
                path: ":repoId/file",
                props: !0,
                name: "cooperativeFile",
                component: ut,
                meta: {
                    activePath: "/cooperative-repository",
                    resourceCodes: ["XFXB_DEPART_REPO"]
                }
            }]
        }, {
            path: "/public-repository",
            component: ze,
            meta: {
                title: "公共空间",
                repoType: "public",
                icon: "public-repo-menu",
                resourceCodes: ["XFXB_PUBLIC_REPO"]
            },
            children: [{
                path: "/public-repository",
                name: "publicRepo",
                component: He
            }, {
                path: ":repoId/file",
                props: !0,
                name: "publicFile",
                component: ut,
                meta: {
                    activePath: "/public-repository"
                }
            }]
        }, {
            path: "/share",
            component: ze,
            meta: {
                title: "文件共享",
                icon: "share-menu",
                resourceCodes: []
            },
            children: [{
                path: "/share",
                name: "share",
                component: ft
            }]
        }, {
            path: "/share/:id",
            props: !0,
            name: "shareDetail",
            component: vt,
            meta: {}
        }, {
            path: "/organize",
            component: ze,
            meta: {
                title: "组织架构",
                icon: "org-menu",
                resourceCodes: []
            },
            children: [{
                path: "/organize",
                name: "organize",
                component: kt
            }]
        }, {
            path: "/recycle",
            component: ze,
            meta: {
                title: "回收站",
                icon: "recycle-menu",
                resourceCodes: []
            },
            children: [{
                path: "/recycle",
                name: "recycle",
                component: Ct
            }]
        }, {
            path: "*",
            redirect: "/private-repository"
        }]
          , $t = [{}]
          , Tt = function() {
            return new z.a({
                mode: "history",
                base: "/",
                routes: xt
            })
        }
          , Nt = Tt();
        Nt.resetRouter = function(e) {
            Nt.matcher = Tt().matcher,
            Nt.addRoutes(e)
        }
        ;
        var Dt = Nt
          , St = (a("L+Pg"),
        a("4cf+"),
        a("iNcP"))
          , Lt = a.n(St)
          , Bt = a("Ze0O")
          , Et = a.n(Bt)
          , qt = a("3VUp")
          , Vt = a.n(qt)
          , At = function(e, t, a) {
            return {
                result: t instanceof RegExp ? t.test(e) : !!e,
                errorMessage: a
            }
        }
          , Pt = /^\S*$/
          , Rt = {
            validateRequest: function(e) {
                if (e) {
                    var t = String(e).replace(/\r\n/g, "").replace(/\n/g, "").replace(/\s/g, "");
                    if (t.length < 0)
                        return At(t, null, "必填项")
                }
                return {
                    result: !0,
                    errorMessage: ""
                }
            },
            validateTrim: function(e) {
                return At(e, Pt, "不能包含空格")
            },
            clearTrim: function(e) {
                var t = Lt()(e);
                return String(t) ? t.replace(/\s+/g, "") : ""
            },
            maxLength: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , a = Number(t)
                  , i = String(e)
                  , n = i.replace(/[\u4e00-\u9fa5]/g, "")
                  , o = 2 * (i.length - n.length) + n.length < a;
                return {
                    result: o,
                    errorMessage: o ? "" : "长度不允许超过" + a + "个字符，注：中文占两个字符"
                }
            }
        };
        function Ot() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
              , t = arguments[1]
              , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ["change", "blur"]
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "必填项"
              , n = {
                required: !!e,
                trigger: a
            }
              , o = "function"
              , s = [];
            if ("function" != typeof t)
                if (t) {
                    var r = /(\(=?)(.+)(?=\))/;
                    if ((t.match(r) || []).length > 2) {
                        s = t.match(r)[2].split(",");
                        var l = Vt()(t, "(" + t.match(r)[2] + ")", "");
                        o = Rt[l]
                    } else
                        o = Rt[t]
                } else
                    o = e ? Rt.validateRequest : null;
            return o ? n.validator = function(t, a, n) {
                var r = o.apply(void 0, [a].concat(y()(s)))
                  , l = r.result
                  , c = r.errorMessage;
                return !e || a && Rt.clearTrim(a) && !Et()(String(a)) ? l ? n() : n(new Error(c)) : n(i)
            }
            : n.message = i,
            n
        }
        var Ut = a("E4C3")
          , Ht = a.n(Ut);
        a("ve9D");
        Ht.a.configure({
            ease: "linear",
            speed: 1e3,
            showSpinner: !1,
            minimum: .1
        }),
        Dt.beforeEach(function(e, t, a) {
            Ht.a.start(),
            "/user-manual/index.html" === e.path ? a() : pe.state.login.token ? "/login" === e.path ? a("/") : a() : pe.dispatch("getToken").then(function(t) {
                pe.dispatch("loginByToken").then(function(i) {
                    pe.commit("SET_TOKEN", t),
                    Dt.resetRouter(i),
                    a(T()({}, e, {
                        replace: !0
                    }))
                }).catch(function() {
                    pe.commit("CLEAR_TOKEN"),
                    u(),
                    "/login" === e.path ? a() : a("/login")
                })
            }).catch(function() {
                "/login" === e.path ? a() : a("/login")
            })
        }),
        Dt.afterEach(function(e) {
            Ht.a.done()
        });
        a("epgO");
        var jt = a("BO1k")
          , Yt = a.n(jt)
          , Xt = a("ifoU")
          , Wt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            if (!e || e <= 0)
                return "0 B";
            var t = Math.floor(Math.log(e) / Math.log(1024));
            return (e / Math.pow(1024, t)).toFixed(2) + "" + ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][t]
        }
          , Zt = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "id"
              , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "parentId"
              , i = [];
            if (!Array.isArray(e))
                return i;
            e.forEach(function(e) {
                delete e.children
            });
            var n = {};
            return e.forEach(function(e) {
                n[e[t]] = e
            }),
            e.forEach(function(e) {
                var t = n[e[a]];
                t ? (t.children || (t.children = [])).push(e) : i.push(e)
            }),
            i
        }
          , Kt = new (a.n(Xt).a)([[/\.(jpeg|gif|jpg|png|webp|pic|svg|bmp)$/i, "image"], [/\.(doc|docx)$/i, "word"], [/\.(ppt|pptx|pot|pps|ppsx|ppa)$/i, "ppt"], [/\.(xlsx|xls)$/i, "excel"], [/\.(pdf)$/i, "pdf"], [/\.(md|markdown)$/i, "markdown"], [/\.(rar|zip)$/i, "rar"]])
          , Gt = function(e) {
            var t = e.fileType
              , a = e.suffix;
            if ("folder" === t)
                return "folder";
            var i = null
              , n = !0
              , o = !1
              , s = void 0;
            try {
                for (var r, l = Yt()(Kt.keys()); !(n = (r = l.next()).done); n = !0) {
                    var c = r.value;
                    if (c.test(a)) {
                        i = Kt.get(c);
                        break
                    }
                }
            } catch (e) {
                o = !0,
                s = e
            } finally {
                try {
                    !n && l.return && l.return()
                } finally {
                    if (o)
                        throw s
                }
            }
            return i || "file"
        }
          , Jt = function e(t, a) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "id"
              , n = t.find(function(e) {
                return e[i] === a
            });
            return n || (t.forEach(function(t) {
                var o = e(t.children || [], a, i);
                o && (n = o)
            }),
            n)
        }
          , Qt = {
            private: "个人空间",
            cooperative: "部门空间",
            public: "公共空间"
        };
        s.default.directive("permissions", {
            inserted: function(e, t) {
                s.default.prototype.$hasPermission(t.value) || e.parentNode.removeChild(e)
            }
        }),
        s.default.prototype.$hasPermission = function(e) {
            var t = pe.state.login.permissionCodes;
            return !!Array.isArray(t) && (!e || 0 === (e || []).length || t.some(function(t) {
                return e.includes(t)
            }))
        }
        ;
        var ea = function(e) {
            var t = new e({
                methods: {
                    emit: function(e) {
                        for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                            a[i - 1] = arguments[i];
                        this.$emit.apply(this, [e].concat(y()(a)))
                    },
                    on: function(e, t) {
                        this.$on(e, t)
                    },
                    off: function(e, t) {
                        this.$off(e, t)
                    }
                }
            });
            e.prototype.$bus = t
        };
        for (var ta in s.default.config.productionTip = !1,
        s.default.prototype.$validator = i,
        s.default.use(m.a, {
            size: "medium",
            zIndex: 3e3
        }),
        s.default.use(ea),
        s.default.component("IIcon", g),
        s.default.component("TableCustom", k),
        o)
            s.default.prototype["$" + ta] = o[ta];
        for (var aa in n)
            s.default.prototype["$" + aa] = n[aa];
        new s.default({
            el: "#app",
            router: Dt,
            store: pe,
            components: {
                App: d
            },
            template: "<App/>"
        })
    },
    OfIG: function(e, t) {},
    PGIu: function(e, t) {},
    RQnK: function(e, t) {},
    TIaA: function(e, t) {},
    UbPP: function(e, t) {},
    WWTk: function(e, t) {
        e.exports = {
            primaryColor: "#7c4eef",
            successColor: "#67C23A",
            errorColor: "#F56C6C",
            warningColor: "#E6A23C"
        }
    },
    WheY: function(e, t) {},
    X4aY: function(e, t) {},
    a33D: function(e, t) {},
    ajWB: function(e, t) {},
    bcsM: function(e, t) {},
    epgO: function(e, t) {
        !function(e) {
            var t, a, i, n, o, s = '<svg><symbol id="icon-download-apk" viewBox="0 0 1024 1024"><path d="M465.36021333 254.40571093v221.906576l-42.23291093-42.23291093c-20.5052064-20.50940693-53.75212267-20.5052064-74.2615296 0s-20.50940693 53.75632427-0.0042016 74.26153067l131.87859733 131.88699946a52.51702187 52.51702187 0 0 0 74.2657312 0l138.45320214-138.45320213c20.50940693-20.5052064 20.50940693-53.75632427 0-74.2657312-20.50940693-20.5010048-53.75632427-20.5052064-74.2657312 0l-48.8075168 48.80751573V254.40571093" fill="#B0A7F7" ></path><path d="M915.11507657 537.84615406c25.488 0 46.15384594-20.66584594 46.15384688-46.15384594V187.32430813c0-55.99015406-45.552-101.53846125-101.5384622-101.53846219H164.26953875c-55.99015406 0-101.53846125 45.54830812-101.53846218 101.53846219v512.15999999c0 55.98646125 45.54830812 101.53846125 101.53846218 101.53846125h301.58030719v67.03753875H292.88369188c-25.488 0-46.15384594 20.66584594-46.15384594 46.15384594s20.66584594 46.15384594 46.15384594 46.15384594h438.24c25.488 0 46.15384594-20.66584594 46.15384687-46.15384594s-20.66584594-46.15384594-46.15384687-46.15384594h-172.96615313v-67.03753875h301.5729225c55.98646125 0 101.53846125-45.552 101.5384622-101.53846125v-74.19323157c0-25.488-20.66584594-46.15384594-46.15384688-46.15384593s-46.15384594 20.66584594-46.15384594 46.15384593v74.19323157c0 5.00307657-4.22769187 9.23076937-9.23076938 9.23076843H164.26953875c-5.00307657 0-9.23076937-4.22769187-9.23076937-9.23076843V187.32430813c0-5.00307657 4.22769187-9.23076937 9.23076937-9.23076938h695.4609225c5.00307657 0 9.23076937 4.22769187 9.23076937 9.23076937V491.69230813c0 25.488 20.66215406 46.15384594 46.15384595 46.15384593z" fill="#7c4eef" ></path></symbol><symbol id="icon-upload-list" viewBox="0 0 1024 1024"><path d="M989.86666667 533.33333333c0 263.89333333-213.97333333 477.86666667-477.86666667 477.86666667-36.37333333 0-71.68-4.05333333-105.70666667-11.73333334l-2.88-0.64C191.78666667 949.65333333 34.13333333 759.89333333 34.13333333 533.33333333 34.13333333 269.44 248.10666667 55.46666666 512 55.46666666c223.89333333 0 411.94666667 154.02666667 463.68 361.92 9.28 37.12 14.18666667 75.94666667 14.18666667 115.94666667z" fill="#885AEF" ></path><path d="M989.86666667 533.33333333c0 263.89333333-213.97333333 477.86666667-477.86666667 477.86666667-36.37333333 0-71.68-4.05333333-105.70666667-11.73333334l-2.88-0.64-192.53333333-192.85333333 608.21333333-545.17333333 156.58666667 156.58666666c9.28 37.12 14.18666667 75.94666667 14.18666667 115.94666667z" fill="#3F2867" ></path><path d="M770.56 801.38666667H253.97333333c-35.2 0-64-28.8-64-64V281.06666667c0-35.2 28.8-64 64-64h516.58666667c35.2 0 64 28.8 64 64v456.32c0 35.2-28.8 64-64 64z" fill="#F8A000" ></path><path d="M572.58666667 772.37333333H317.01333333c-35.30666667 0-64-28.69333333-64-64V146.02666666c0-35.30666667 28.69333333-64 64-64h389.86666667c35.30666667 0 64 28.69333333 64 64V541.86666666L572.58666667 772.37333333z" fill="#B9FCF3" ></path><path d="M572.37333333 772.37333333H512V82.02666666h194.88c35.30666667 0 64 28.69333333 64 64V541.86666666L572.37333333 772.37333333z" fill="#96F5E6" ></path><path d="M560.85333333 175.89333333c0-10.45333333 8.53333333-18.98666667 18.98666667-18.98666667H678.4c10.45333333 0 18.98666667 8.53333333 18.98666667 18.98666667s-8.53333333 18.98666667-18.98666667 18.98666667h-98.56c-10.45333333 0-18.98666667-8.53333333-18.98666667-18.98666667zM430.50666667 263.68H678.4c5.22666667 0 10.02666667 2.13333333 13.44 5.54666666 3.41333333 3.52 5.54666667 8.21333333 5.54666667 13.44 0 10.45333333-8.53333333 18.98666667-18.98666667 18.98666667H430.50666667c-5.22666667 0-10.02666667-2.13333333-13.44-5.54666667s-5.54666667-8.21333333-5.54666667-13.44c0-10.45333333 8.53333333-18.98666667 18.98666667-18.98666666z" fill="#3F2867" ></path><path d="M417.06666667 274.77333333c-3.41333333-3.41333333-5.54666667-8.21333333-5.54666667-13.44 0-10.45333333 8.53333333-18.98666667 18.98666667-18.98666666h81.06666666v37.97333333h-81.06666666c-5.22666667 0-10.02666667-2.13333333-13.44-5.54666667z" fill="#8363D4" ></path><path d="M834.56 409.06666666v349.65333334c0 35.2-28.8 64-64 64H253.97333333c-35.2 0-64-28.8-64-64V302.4c0-35.2 28.8-64 64-64h145.70666667l112.32 106.66666666h258.56c35.2 0 64 28.8 64 64z" fill="#FFD96E" ></path><path d="M814.4 416.83333333v327.8c0 33-27 60-60 60H512V356.83333333h242.4c33 0 60 27 60 60z" fill="#F7C800" ></path><path d="M619.30666667 626.13333333h-54.08v96.32c0 11.73333333-9.6 21.33333333-21.33333334 21.33333333h-63.78666666c-11.73333333 0-21.33333333-9.6-21.33333334-21.33333333V626.13333333h-54.08c-17.49333333 0-27.52-19.94666667-17.17333333-34.02666667l107.30666667-145.6c4.26666667-5.86666667 10.88-8.74666667 17.38666666-8.64 6.4 0.10666667 12.69333333 2.98666667 16.85333334 8.64l107.30666666 145.6c10.56 14.08 0.42666667 34.02666667-17.06666666 34.02666667z" fill="#E95C94" ></path><path d="M619.30666667 626.13333333h-54.08v96.32c0 11.73333333-9.6 21.33333333-21.33333334 21.33333333h-31.57333333V437.86666666c6.4 0.10666667 12.69333333 2.98666667 16.85333333 8.64l107.30666667 145.6c10.45333333 14.08 0.32 34.02666667-17.17333333 34.02666667z" fill="#E02B6C" ></path></symbol><symbol id="icon-user-manual" viewBox="0 0 1024 1024"><path d="M727.108297 0.751339c43.352264-6.16098 78.514931 26.897938 78.439797 73.781495l-1.652946 735.260401c0 46.883557-35.38807 90.160687-78.740333 95.945998L150.756107 986.433047 152.709588 81.445154z" fill="#7c4eef" ></path><path d="M790.671581 71.001541l-1.878348 872.980849-569.515005 80.01761 1.878348-872.98085 569.515005-80.017609z" fill="#DF0000" ></path><path d="M221.156576 151.01915L152.634454 113.752733 722.224593 33.735124l68.446988 37.266417L221.156576 151.01915z" fill="#FFFFFF" ></path><path d="M794.803946 38.017756c43.352264-6.16098 78.514931 26.897938 78.439797 73.781496l-1.652946 735.2604c0 46.883557-35.38807 90.160687-78.815467 95.945998L218.376622 1023.699464 220.405237 118.711571z" fill="#9f7df3" ></path><path d="M212.666445 114.65434l-4.958838-3.005356 520.903368-74.457701 5.409641 3.005357-521.354171 74.4577z" fill="#E6E6E6" ></path><path d="M218.376622 1024l-67.620515-38.393426 1.878347-904.311688 67.770783 37.416685L218.376622 1024z" fill="#7c4eef" ></path><path d="M799.612516 39.896104l-0.450804 233.666446-49.362976-26.296867-49.513244 40.19664 0.450804-233.666447 98.87622-13.899772z" fill="#F79B8B" ></path><path d="M433.560127 465.078876l-0.300535 136.893976-35.463204 5.033972 0.075134-51.842395-45.681414 6.386382-0.075134 51.842395-35.914007 5.033971 0.300535-136.893976 35.838873-5.033971-0.075134 51.992662 45.681415-6.386382 0.075134-52.067796 35.538337-4.958838zM558.207277 447.347274v32.457847l-63.638418 8.940935-0.075134 19.534816 60.03199-8.414998-0.075133 31.481107-59.956857 8.490131-0.075134 20.736958 66.117837-9.316604v32.683249l-101.505907 14.200308 0.225402-136.893976 98.951354-13.899773zM616.886857 439.082545l-0.150268 104.060459 60.708196-8.490131-0.075134 32.833516-96.547069 13.599237 0.225402-136.96911 35.838873-5.033971zM755.05811 419.697997c34.336195-4.80857 50.865654 16.078656 50.79052 42.751192s-17.13053 52.067797-51.015922 57.176902l-25.545528 3.681562v36.890747l-35.914007 5.109106V428.338396z m0 67.620515a17.957003 17.957003 0 0 0 15.026781-18.933744c0-9.016069-5.259373-16.454325-15.026781-15.026781l-25.77093 3.230758v34.035659l25.77093-3.681562" fill="#FFFFFF" ></path></symbol><symbol id="icon-backup-repo" viewBox="0 0 1024 1024"><path d="M499.89013333 501.01333333a18.39253333 18.39253333 0 0 1 18.0448 0l165.52533334 93.18293334a18.39146667 18.39146667 0 0 1 9.3696 16.0256V801.49333333c0 6.64213333-3.5808 12.768-9.36853335 16.02666667l-165.52533332 93.18293333a18.39253333 18.39253333 0 0 1-18.04586667 0l-165.52533333-93.184a18.39146667 18.39146667 0 0 1-9.3696-16.0256V610.22186667c0-6.64213333 3.58186667-12.768 9.3696-16.0256z m9.02293334 37.1296l-147.13386667 82.82986667v169.7664l147.13386667 82.82986667 147.13386666-82.82986667V620.9728l-147.13386666-82.82986667z m111.8272 86.2368c7.0048-3.5744 15.6416-1.00053333 19.5168 5.92l0.27306665 0.51093334c3.5744 7.00373333 0.99946667 15.64053333-5.92106666 19.51573333l-109.75893333 61.4624V839.136l-0.01066666 0.55253333c-0.29013333 7.86986667-6.76266667 14.16106667-14.70293334 14.16106667-0.2048 0-0.40853333-0.00426667-0.6112-0.0128-0.20266667 0.00853333-0.40746667 0.0128-0.61226666 0.0128-7.94133333 0-14.41386667-6.2912-14.70400001-14.16106667l-0.01066667-0.55253333V711.7888l-109.75893332-61.46133333c-6.92053333-3.87626667-9.49546667-12.512-5.92000001-19.5168l0.27200001-0.50986667c3.8752-6.9216 12.512-9.49546667 19.5168-5.92106667l0.50986666 0.272 110.70613334 61.9936 110.7072-61.9936zM529.30559999 117.33333333c143.856 0 262.10986667 109.62026667 275.78240001 249.88373334l0.35626667 4 1.56373333 0.16533333c106.4064 12.10986667 189.32586667 101.6064 191.09653333 210.8288l0.0288 3.568c0 117.9872-94.69226667 213.85813333-212.22826667 215.7632l-3.56799999 0.0288h-31.08053334c-17.6064 0-31.87946667-14.272-31.87946667-31.8784 0-17.35466667 13.86773333-31.46986667 31.12640001-31.8688l0.75306665-0.0096h31.08053335c83.968 0 152.0384-68.06826667 152.0384-152.0352 0-83.1264-66.71573333-150.672-149.52533334-152.01493333l-2.51306666-0.02026667h-7.85173334c-17.4336 0-31.584-13.98933333-31.87413333-31.328l-0.00426667-0.75626667 0.03733334-5.8528c0.0032-0.45866667 0.00533333-0.91733333 0.00533333-1.376 0-116.64746667-93.61706667-211.42826667-209.81653333-213.312l-3.52853334-0.0288h-20.0864c-116.64853333 0-211.43253333 93.61493333-213.31626667 209.81226667l-0.0288 3.52746667v7.43573333c0 17.35466667-13.86666667 31.46986667-31.12533333 31.86986667l-0.75306666 0.00853333h-1.53173334c-83.968 0-152.0384 68.06826667-152.0384 152.0352 0 83.12746667 66.71573333 150.67306667 149.52533333 152.01493333l2.51306667 0.02133334h5.6224c17.6064 0 31.87946667 14.272 31.87946667 31.87733333 0 17.35466667-13.86773333 31.46986667-31.12640001 31.86986667l-0.75306666 0.00853333h-5.62133334C143.28106666 801.5712 46.66666666 704.95786667 46.66666666 585.7792c0-108.45226667 80.00746667-198.21866667 184.21973334-213.4976l2.12586666-0.29653333 0.02133334-0.2816c11.43893333-140.90666667 128.29866667-252.0096 271.60213333-254.3328l4.5824-0.03733334h20.08639999z"  ></path></symbol><symbol id="icon-markdown" viewBox="0 0 1024 1024"><path d="M898.71874973 888.17187473c0 24.60937527-21.09375 45.70312527-49.21874973 45.70312527H174.5c-28.12499973 0-49.21874973-21.09375-49.21874973-45.70312527V135.82812527C125.28125027 111.21875 146.37500027 90.125 174.5 90.125H722.9375V174.5L800.28125027 265.90624973H898.71874973v622.265625z" fill="#50C28B" ></path><path d="M301.0625 828.40625h421.875V406.53125H301.0625z" fill="#FEFEFE" ></path><path d="M722.9375 90.125V163.953125c0 7.03124973 17.57812473 94.921875 28.12499973 101.95312473L898.71874973 371.37499973V265.90624973l-175.78124973-175.78124973z" fill="#318459" ></path><path d="M722.9375 90.125v140.62500027c0 21.09375 17.57812473 35.15625027 35.15625027 35.15624946h140.62499946l-175.78124973-175.78124973z" fill="#91DBB1" ></path><path d="M371.37499973 722.9375h38.67187554v-175.78124973l77.34374946 105.46875h45.70312527l84.375-105.46875v175.78124973h35.15625027v-210.9375h-52.734375L512 620.98437527 424.10937473 512H371.37499973z" fill="#50C28B" ></path></symbol><symbol id="icon-org-menu" viewBox="0 0 1024 1024"><path d="M193.24707031 517.24707031h300.00585938v93.73535157h37.49414062V517.24707031h300.00585938v112.47363282h37.50292968V479.74414062h-337.49999999v-74.99707031h-37.50292969v74.99707032h-337.5v149.98535156h37.50292968V517.24707031z m75.00585938 149.98535157H80.74707031A18.74707031 18.74707031 0 0 0 62 685.97070313v150.00292968c0 10.34912109 8.38828125 18.74707031 18.74707031 18.74707032h187.50585938c10.35 0 18.74707031-8.39794922 18.74707031-18.74707032V685.97949219c0-10.35087891-8.40585938-18.74707031-18.74707031-18.74707032z m337.5-1e-8H418.24707031A18.74707031 18.74707031 0 0 0 399.49999999 685.97070313v150.00292968c0 10.34912109 8.38828125 18.74707031 18.74707032 18.74707032h187.50585938c10.35 0 18.74707031-8.39794922 18.7470703-18.74707032V685.97949219c0-10.35087891-8.40585938-18.74707031-18.7470703-18.74707032z m337.5 0H755.74707031A18.74707031 18.74707031 0 0 0 737 685.97070313v150.00292968c0 10.34912109 8.38828125 18.74707031 18.74707031 18.74707032h187.50585938c10.35 0 18.74707031-8.39794922 18.74707031-18.74707032V685.97949219c0-10.35087891-8.40585938-18.74707031-18.74707031-18.74707032zM361.99707031 348.50585937h300.00585938c10.35 0 18.74707031-8.39707031 18.74707031-18.75585937V179.75585938a18.75585938 18.75585938 0 0 0-18.74707031-18.75585938H361.99707031A18.74707031 18.74707031 0 0 0 343.25 179.75585938v149.99414062c0 10.35 8.38828125 18.75585938 18.74707031 18.75585938z"  ></path></symbol><symbol id="icon-link-invalid" viewBox="0 0 1029 1024"><path d="M198.988609 312.768642a3.318646 3.318646 0 0 1-2.733003-1.366501l-62.924128-91.555583a3.253574 3.253574 0 1 1 5.335862-3.709075l62.9892 91.555583a3.253574 3.253574 0 0 1-0.84593 4.489933 3.318646 3.318646 0 0 1-1.822001 0.585643zM152.072066 393.782644h-0.650715L43.923254 372.374125a3.188503 3.188503 0 0 1-2.537788-3.839218 3.123431 3.123431 0 0 1 3.774146-2.537788l107.498098 21.343448a3.188503 3.188503 0 0 1 2.602859 3.774146 3.318646 3.318646 0 0 1-3.188503 2.667931zM173.740871 352.91775a3.05836 3.05836 0 0 1-2.277502-0.976072l-43.532825-43.207468a3.188503 3.188503 0 0 1 0-4.555004 3.253574 3.253574 0 0 1 4.620076 0l43.532825 43.207468a3.253574 3.253574 0 0 1 0 4.620075 3.05836 3.05836 0 0 1-2.342574 0.911001zM1026.177357 1024H483.806509a3.253574 3.253574 0 0 1-3.253574-3.253574 3.253574 3.253574 0 0 1 3.253574-3.253575h542.370848a3.253574 3.253574 0 0 1 3.253574 3.253575 3.253574 3.253574 0 0 1-3.253574 3.253574z" fill="#7c4eef" ></path><path d="M773.114342 556.526434l68.65042-137.300838A206.107429 206.107429 0 0 0 473.069714 234.878072l-68.585348 137.300838" fill="#FFFFFF" ></path><path d="M319.826361 314.785858a42.947182 42.947182 0 0 0 76.13364-1.301429l68.715491-137.300839a163.082162 163.082162 0 0 1 291.715478 145.890275l-68.585348 137.300838a42.966703 42.966703 0 1 0 76.849427 38.45725l68.650419-137.300839a249.074133 249.074133 0 0 0-445.544474-222.804773l-68.65042 137.300838a42.88211 42.88211 0 0 0 0.715787 39.758679z" fill="#e4dafc" ></path><path d="M703.87828 562.578083a46.200756 46.200756 0 0 1-41.320395-66.89349l68.650419-137.300838a159.880645 159.880645 0 0 0-285.924115-143.157272L376.633769 352.657464a46.226785 46.226785 0 1 1-82.70586-41.320395l68.520276-137.300838a252.301678 252.301678 0 0 1 451.335837 225.667918 3.253574 3.253574 0 0 1-5.856434-2.863145 245.84008 245.84008 0 0 0-439.688041-219.941628l-68.520276 137.300839a39.758679 39.758679 0 0 0 71.058064 35.594104l68.715491-137.300839a166.322722 166.322722 0 0 1 297.506841 148.75342L668.284176 498.547739a39.758679 39.758679 0 1 0 71.058064 35.594103 3.253574 3.253574 0 1 1 5.856434 2.863146 46.461042 46.461042 0 0 1-41.385466 25.573095z" fill="#7c4eef" ></path><path d="M168.990653 520.672045L69.951849 637.800722a206.081401 206.081401 0 0 0 314.815856 265.947169l99.038804-117.128677" fill="#FFFFFF" ></path><path d="M227.164563 998.166619A227.750206 227.750206 0 0 1 53.488763 623.875424l99.103875-117.128678a21.473591 21.473591 0 1 1 32.535744 27.785525l-99.038804 117.128678a184.60781 184.60781 0 0 0 282.019826 238.226715l99.038804-117.128677a21.473591 21.473591 0 1 1 32.535744 27.720454L401.491078 917.608118a227.099491 227.099491 0 0 1-174.326515 80.558501z" fill="#7c4eef" ></path><path d="M534.887627 406.666799L280.262896 708.077928z" fill="#FFC102" ></path><path d="M238.812359 719.205153a42.88211 42.88211 0 0 0 74.311639 16.593229l254.62473-301.41113a43.012253 43.012253 0 0 0-65.657131-55.505979l-254.689802 301.476202a42.817039 42.817039 0 0 0-8.589436 38.847678z" fill="#FFC60A" ></path><path d="M731.924091 1012.61249a3.188503 3.188503 0 0 1-3.05836-2.798074c-34.943389-234.90807-170.552369-372.27398-171.91887-373.640481a3.253574 3.253574 0 0 1 0-4.555004 3.253574 3.253574 0 0 1 4.620076 0c1.366501 1.30143 132.680763 134.30755 171.333226 362.318042 8.133936-26.809453 28.826669-81.599645 63.965272-91.490512a3.253574 3.253574 0 0 1 4.034432 2.277503 3.253574 3.253574 0 0 1-2.277502 3.96936c-42.231395 11.908082-63.184414 100.470377-63.379628 101.381378a3.253574 3.253574 0 0 1-3.318646 2.537788z" fill="#7c4eef" ></path><path d="M897.596098 634.156719a136.650124 136.650124 0 1 0 128.581259 144.328559 136.650124 136.650124 0 0 0-128.581259-144.328559z" fill="#F54A45" ></path><path d="M949.588216 841.14912a3.253574 3.253574 0 0 1-2.407645-1.106215l-119.926751-134.697979a3.318646 3.318646 0 0 1 0-4.620076 3.188503 3.188503 0 0 1 4.555004 0l119.926751 134.763051a3.188503 3.188503 0 0 1-0.325357 4.555004 2.993288 2.993288 0 0 1-1.822002 1.106215z" fill="#FFFFFF" ></path><path d="M822.308387 833.730971a3.253574 3.253574 0 0 1-2.212431-5.726291l134.502765-119.86168a3.273096 3.273096 0 0 1 4.35979 4.880361L824.455746 833.015184a3.123431 3.123431 0 0 1-2.147359 0.715787z" fill="#FFFFFF" ></path></symbol><symbol id="icon-logo" viewBox="0 0 1408 1024"><path d="M320 1024c-176.704 0-320-157.568-320-352 0-179.712 122.496-328 280.64-349.376C341.44 134.848 508.032 0 704 0c175.04 0 326.656 107.584 400.384 264.448A384 384 0 0 1 1024 1024H320z m70.72-446.656a320.064 320.064 0 0 0 560.448 137.92 64 64 0 1 0-98.816-81.28 192.064 192.064 0 0 1-336.32-82.56 64 64 0 0 0-125.312 25.92zM1012.16 576a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"  ></path></symbol><symbol id="icon-share-menu" viewBox="0 0 1024 1024"><path d="M749.3255266 625.88851394C701.51391811 625.88851394 660.44264261 652.90673331 639.21219652 692.21599138L360.57593993 550.95007209C367.53264349 535.34015893 371.57908315 518.15787588 371.57908315 499.96613871 371.57908315 480.63563875 366.85593812 462.54131237 359.05529273 446.18141984L650.00499831 326.27784156C672.99143345 355.83564439 708.49217453 375.18769488 748.83502197 375.18769488 818.21844768 375.18769488 874.46603078 318.9418375 874.46603078 249.55668839 874.46603078 180.17326346 818.21758637 123.92568268 748.83502197 123.92568268 679.44987364 123.92568268 623.2040178 180.17326346 623.2040178 249.55668839 623.2040178 256.07633651 624.16433703 262.33909303 625.12292902 268.59064478L316.27975167 395.86643231C296.20875525 382.28060068 272.00942513 374.33513143 245.94807744 374.33513143 176.56292756 374.33513143 120.31707095 430.5835743 120.31707095 499.96613793 120.31707095 569.35128703 176.56292909 625.59714288 245.94807744 625.59714288 273.80765161 625.59714288 299.30349729 616.23274843 320.13740354 600.88489628L624.04192736 754.95994403C625.90739249 822.71324025 681.1196551 877.15052693 749.3263879 877.15052693 818.70981362 877.15052693 874.95739671 820.90467108 874.95739671 751.51952275 874.9565354 682.13695835 818.7089523 625.88851394 749.3255266 625.88851394L749.3255266 625.88851394Z"  ></path></symbol><symbol id="icon-recycle-menu" viewBox="0 0 1024 1024"><path d="M195.81532336 854.99501086a78.43684324 78.43684324 0 0 0 78.43684324 78.43684324h473.27993646a78.43684324 78.43684324 0 0 0 78.43684406-78.43684324V326.32182232H195.81532336z m123.19459031-331.03006896l93.50380727-54.06381272a17.28269439 17.28269439 0 0 1 17.28269441 0 16.39640258 16.39640258 0 0 1 8.41977466 15.06696406v30.13392892h162.63458487a114.77481647 114.77481647 0 0 1 114.33166973 115.21796236 23.4867387 23.4867387 0 0 1-23.48673788 23.9298838h-2.21573035a23.4867387 23.4867387 0 0 1-23.4867387-23.9298838 65.58560952 65.58560952 0 0 0-65.58560871-65.14246362H437.32989736v28.36134448a16.39640258 16.39640258 0 0 1-8.41977382 14.62381816 15.06696405 15.06696405 0 0 1-8.41977466 2.21573034 14.18067224 14.18067224 0 0 1-8.41977384-2.21573035l-93.06066137-53.62066681a15.95325668 15.95325668 0 0 1-8.41977466-15.06696405 18.1689862 18.1689862 0 0 1 7.53348203-15.51011077z m10.63550417 81.9820121a23.4867387 23.4867387 0 0 1 23.4867379 23.92988462 65.58560952 65.58560952 0 0 0 65.58560952 65.1424628H582.23864194v-28.36134448a16.39640258 16.39640258 0 0 1 8.41977466-14.62381814 17.28269439 17.28269439 0 0 1 17.28269439 0l93.06066138 53.62066681a15.51010996 15.51010996 0 0 1 8.86292057 15.06696405 16.83954849 16.83954849 0 0 1-8.86292057 14.62381896l-93.06066138 53.62066682a15.06696405 15.06696405 0 0 1-8.41977466 2.21572952 14.18067224 14.18067224 0 0 1-8.41977383-2.21572952 15.95325668 15.95325668 0 0 1-8.41977383-14.62381816v-30.13392892H419.60405706a114.77481647 114.77481647 0 0 1-115.21796236-115.21796237 24.37303052 24.37303052 0 0 1 23.92988461-23.04359199z m476.82510452-437.38511076H670.86784426A77.10740552 77.10740552 0 0 0 593.31729284 91.45443772H428.02383173a77.10740552 77.10740552 0 0 0-77.55055143 77.10740552h-132.94380266a58.93841932 58.93841932 0 0 0-1e-8 117.87683862H808.24310682a58.93841932 58.93841932 0 0 0 0-117.87683862z m1e-8 0"  ></path></symbol><symbol id="icon-delete" viewBox="0 0 1024 1024"><path d="M751 157.4c45.2 6.4 92.2-1.8 129.1 4.5 59.7 10.2 90 61 83.5 135.8h-72.3c-2 132.7-1.1 264.1-1.1 397.3 0 67.2 5.6 137.8-1.1 198.1-6.3 56.9-48.1 91.6-99 100.1-50.3 8.4-117 2.2-172.5 2.2-116.4 0-234.3 2.3-348.3 0-55.5-1.1-96.5-18.7-121.3-52.3-24.8-33.6-22.3-84.4-22.3-144.7V297.7h-69c-11.2-68.8 18.6-118.3 69-134.6 37.1-12 86.5-2.3 139.1-5.6-4.3-74.1-0.2-130.3 63.4-138 28.5-3.4 66.5 0 101.3 0H632c38.6 0 78.1-3.7 97.9 13.4 27.3 23.5 20.2 78 21.1 124.5zM333.7 92.8v66.8H682V89.5H334.8c-1.3 0.2-1.2 1.7-1.1 3.3z m-67.9 212.6v424c0 36.2-8.3 113.4 13.4 129.1 8.6 6.2 30.9 7.2 41.2 0 22.4-15.6 14.5-90.6 14.5-128V302.1H267c-1.4 0.1-1.3 1.7-1.2 3.3z m207 0V716c0 32.4-7.5 109.1 5.6 131.3 8.6 14.7 37.8 21.3 52.3 10 19.7-15.4 11.1-96.6 11.1-130.2V302h-67.9c-1.3 0.2-1.2 1.8-1.1 3.4z m209.2 0v429.5c0 44-8.6 111.5 20 123.5 12.5 5.3 34.6 1.2 40.1-3.3 18.7-15.4 10-97.8 10-130.2V302.1h-69c-1.3 0.1-1.2 1.7-1.1 3.3z" fill="" ></path></symbol><symbol id="icon-upload" viewBox="0 0 1024 1024"><path d="M1024 693.248q0 25.6-8.704 48.128t-24.576 40.448-36.864 30.208-45.568 16.384l1.024 1.024-17.408 0-4.096 0-4.096 0-675.84 0q-5.12 1.024-16.384 1.024-39.936 0-74.752-15.36t-60.928-41.472-40.96-60.928-14.848-74.752 14.848-74.752 40.96-60.928 60.928-41.472 74.752-15.36l1.024 0q-1.024-8.192-1.024-15.36l0-16.384q0-72.704 27.648-137.216t75.776-112.128 112.128-75.264 136.704-27.648 137.216 27.648 112.64 75.264 75.776 112.128 27.648 137.216q0 37.888-8.192 74.24t-22.528 69.12q5.12-1.024 10.752-1.536t10.752-0.512q27.648 0 52.736 10.752t43.52 29.696 29.184 44.032 10.752 53.76zM665.6 571.392q20.48 0 26.624-4.608t-8.192-22.016q-14.336-18.432-31.744-48.128t-36.352-60.416-38.4-57.344-37.888-38.912q-18.432-13.312-27.136-14.336t-25.088 12.288q-18.432 15.36-35.84 38.912t-35.328 50.176-35.84 52.224-36.352 45.056q-18.432 18.432-13.312 32.768t25.6 14.336l16.384 0q9.216 0 19.968 0.512t20.992 0.512l17.408 0q14.336 1.024 18.432 9.728t4.096 24.064q0 17.408-0.512 30.72t-0.512 25.6-0.512 25.6-0.512 30.72q0 7.168 1.536 15.36t5.632 15.36 12.288 11.776 21.504 4.608l23.552 0q9.216 0 27.648 1.024 24.576 0 28.16-12.288t3.584-38.912q0-23.552 0.512-42.496t0.512-51.712q0-23.552 4.608-36.352t19.968-12.8q11.264 0 32.256-0.512t32.256-0.512z"  ></path></symbol><symbol id="icon-download" viewBox="0 0 1024 1024"><path d="M1024 748.544q0 25.6-8.704 48.128t-24.064 40.96-36.352 30.208-45.568 15.872l0 2.048-21.504 0-1.024 0-664.576 0q-2.048 0-2.56 0.512t-2.56 0.512-3.072-0.512-3.072-0.512l-6.144 0 0-1.024q-43.008-2.048-80.384-19.456t-65.024-46.592-43.52-67.584-15.872-81.408 15.872-80.896 43.008-66.56 63.488-47.104 78.336-21.504q7.168-66.56 36.864-124.416t76.288-100.864 107.008-67.584 129.024-24.576q72.704 0 137.216 27.648t112.128 75.776 75.264 112.128 27.648 136.704q0 32.768-6.144 64t-17.408 59.904q2.048 0 4.608-0.512t4.608-0.512q28.672 0 53.248 10.752t43.008 29.184 29.184 43.52 10.752 53.76zM687.104 596.992q12.288-20.48 7.168-23.552t-25.6-3.072q-12.288 0-34.304-0.512t-33.28-0.512q-16.384 0-20.992-13.312t-4.608-36.864q0-32.768-0.512-52.736t-0.512-43.52q0-26.624-3.584-38.912t-29.184-12.288q-18.432 0-27.648 0.512t-25.6 0.512q-27.648 0-34.304 15.872t-6.656 31.232l0 32.768q0 13.312 0.512 25.6t0.512 25.6l0 29.696q0 16.384-4.096 25.088t-19.456 8.704q-6.144 1.024-16.896 1.536t-22.016 1.024-21.504 0.512l-16.384 0q-21.504 0-25.6 13.312t13.312 33.792q17.408 21.504 37.376 46.592t39.424 50.688 37.376 49.664 33.28 41.472q27.648 30.72 53.248-1.024 15.36-17.408 35.84-45.056t41.984-57.856 40.96-58.368 31.744-46.592z"  ></path></symbol><symbol id="icon-data-recovery" viewBox="0 0 1024 1024"><path d="M515.69874 788.508591"  ></path><path d="M511.999488 794.807041"  ></path><path d="M855.022982 736.598314c11.862165 12.56313 3.614317 33.222659-13.622252 34.184567l-229.986021 12.631692c-0.384763 0.014326-0.7552 0.014326-1.139963 0.014326-0.632403 0-1.237177-0.138146-1.86958-0.192382-0.63138-0.067538-1.319042-0.096191-1.951445-0.205685-0.797156-0.164752-1.539053-0.412392-2.309602-0.660032-0.604774-0.192382-1.222851-0.358157-1.801019-0.591471-0.728594-0.316202-1.387603-0.728594-2.074242-1.113357-0.536212-0.316202-1.100054-0.590448-1.595334-0.934279-0.660032-0.467651-1.209548-1.017166-1.814322-1.540076-0.440022-0.398066-0.934279-0.769526-1.333368-1.209548-0.563842-0.604774-1.00284-1.263783-1.483794-1.89721-0.343831-0.494257-0.756223-0.935302-1.058099-1.429559-0.441045-0.741897-0.756223-1.512447-1.100054-2.308579-0.220011-0.522909-0.522909-0.99056-0.700965-1.52575-0.317225-0.86674-0.467651-1.801019-0.660032-2.735297-0.097214-0.494257-0.261966-0.948605-0.330528-1.457188-0.178055-1.429559-0.192382-2.942005-0.055259-4.454452l22.776749-232.129848c1.690502-17.312294 22.954805-24.590048 34.885532-11.95938l43.214221 45.771463c2.26867-6.522554 4.261047-13.18837 5.856381-19.98517 14.926968-36.501332 23.298636-76.341712 23.298636-118.133537 0-102.696963-49.854455-193.753819-126.359896-250.975055 152.324244 37.125549 265.530562 174.165692 265.530562 338.037946 0 64.946174-17.868973 125.637442-48.850591 177.62242L855.022982 736.598314 855.022982 736.598314zM684.581102 409.377738c-32.549324-72.993454-105.563244-123.955126-190.591803-123.955126-24.769127 0-48.411593 4.542456-70.431096 12.453636l6.185886-40.273239c2.28095-14.83794-2.006703-29.910217-11.792581-41.304731-9.759271-11.387351-23.985274-17.929348-39.009456-17.929348l-18.033725 0c43.490513-20.914332 91.819219-33.374108 143.047973-34.452673C605.120352 201.721281 678.409542 296.624744 684.581102 409.377738L684.581102 409.377738zM395.352815 252.311493l-9.81453 63.742766-19.188015 124.903731c-2.14485 14.075577-19.862373 19.085684-29.057803 8.213056l-33.675984-39.841404c-11.669784 25.985838-18.418488 54.679343-18.418488 85.055165 0 101.30322 72.025407 185.719842 167.609369 204.881251-14.941294 2.473331-30.184463 4.068665-45.826721 4.068665-101.426017 0-190.08322-54.720276-238.754732-136.072095-2.90005-18.108426-4.824889-36.534078-4.824889-55.461149 0-72.932056 22.583344-140.42217 60.960397-196.228173l-46.540989-55.064107c-9.126868-10.789741-1.484817-27.318182 12.631692-27.318182l113.02724 0 75.461669 0C389.112694 233.191016 396.892891 242.256486 395.352815 252.311493L395.352815 252.311493zM561.465087 679.55411l-5.950526 78.211293c-1.512447 15.449877 3.601015 30.898731 13.992689 42.390459 10.419304 11.519358 25.291013 18.102287 40.768519 18.102287 1.017166 0 2.033309-0.014326 3.050476-0.096191l122.745578-3.835352c-50.747801 28.961612-162.084539 45.75816-224.680179 45.75816-141.658324 0-263.304871-84.84948-317.598428-206.398814 55.969733 52.232618 130.798998 84.492346 213.18845 84.492346C463.200062 738.178299 515.830747 728.873376 561.465087 679.55411L561.465087 679.55411zM561.465087 679.55411"  ></path></symbol><symbol id="icon-data-backup" viewBox="0 0 1024 1024"><path d="M42.666667 768c0 46.933333 38.4 85.333333 85.333333 85.333333h768c46.933333 0 85.333333-38.4 85.333333-85.333333v-170.666667H42.666667v170.666667z m672-64h106.666666c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32h-106.666666c-17.066667 0-32-14.933333-32-32s14.933333-32 32-32zM829.866667 230.4C819.2 194.133333 785.066667 170.666667 748.8 170.666667H275.2c-36.266667 0-70.4 23.466667-81.066667 59.733333L42.666667 533.333333h938.666666l-151.466666-302.933333zM746.666667 473.6v17.066667c-2.133333-21.333333-10.666667-40.533333-23.466667-57.6-12.8-17.066667-27.733333-34.133333-46.933333-46.933334-19.2-12.8-40.533333-23.466667-66.133334-32-23.466667-8.533333-49.066667-12.8-76.8-12.8h-17.066666c-6.4 0-10.666667 0-17.066667 2.133334-6.4 0-10.666667 2.133333-14.933333 2.133333-4.266667 0-10.666667 2.133333-14.933334 4.266667v74.666666l-170.666666-115.2 170.666666-113.066666v64c38.4 0 74.666667 6.4 106.666667 17.066666 34.133333 10.666667 64 25.6 87.466667 44.8 25.6 19.2 44.8 42.666667 59.733333 68.266667 17.066667 25.6 23.466667 53.333333 23.466667 83.2z"  ></path></symbol><symbol id="icon-folder-expand" viewBox="0 0 1194 1024"><path d="M199.458205 0h796.29695q121.056929 0 121.056929 108.77208201v590.26983099q0 108.601459-121.056929 108.68677h-796.041016q-121.14223999 0-121.14224-108.68677v-590.26983099q0-108.77208201 121.14224-108.77208201z m0 0" fill="#F3AE0C" ></path><path d="M991.574895 668.756353h-788.448298a59.206137 59.206137 0 0 1-59.718006-59.03551499v-454.62464601a59.71800599 59.71800599 0 0 1 59.718006-59.12082601h788.61892101a59.71800599 59.71800599 0 0 1 59.71800499 59.12082601v454.454023a59.71800599 59.71800599 0 0 1-59.71800499 59.206138z m0 0" fill="#4DA1FF" ></path><path d="M991.574895 668.756353h-788.448298a59.206137 59.206137 0 0 1-59.718006-59.03551499V218.823835a59.206137 59.206137 0 0 1 59.718006-59.035514h788.61892101a59.206137 59.206137 0 0 1 59.71800499 59.035514v390.89700299a59.71800599 59.71800599 0 0 1-59.71800499 59.20613701z m0 0" fill="#71B4FF" ></path><path d="M971.014839 254.484016h-214.131707a18.51258199 18.51258199 0 1 1 0-36.769229h214.472952a19.451008 19.451008 0 0 1 20.474745 18.42727 19.792253 19.792253 0 0 1-20.560056 18.341959z m0 91.368549h-214.131707a18.51258199 18.51258199 0 1 1 0-36.854541h214.472952a18.51258199 18.51258199 0 1 1 0 36.854541z m0 91.368548h-214.131707a18.51258199 18.51258199 0 1 1 0-36.769229h214.472952a18.51258199 18.51258199 0 1 1 0 36.769229z m0 0" fill="#FFFFFF" ></path><path d="M0.256 411.286436a109.539885 109.539885 0 0 1 33.100837-78.230587 114.317325 114.317325 0 0 1 80.022128-32.503657h323.245034a112.867031 112.867031 0 0 1 108.772082 80.27806201l30.456183 104.25057499h505.640885a114.317325 114.317325 0 0 1 80.022128 32.50365801 109.28395001 109.28395001 0 0 1 33.10083699 78.31589898l-84.62894499 317.18792101a111.928605 111.928605 0 0 1-113.122965 110.904868h-798.429736a111.928605 111.928605 0 0 1-113.12296601-110.904868l-85.311436-501.716559z" fill="#F6CE56" ></path><path d="M143.749837 689.487032m31.30929699 0l360.86737701 0q31.309297 0 31.309298 31.309297l0 0q0 31.309297-31.309298 31.30929701l-360.86737701 0q-31.309297 0-31.30929699-31.30929701l0 0q0-31.309297 31.30929699-31.309297Z" fill="#FFF2C9" ></path><path d="M143.749837 828.118116m31.30929699 0l653.31498201 0q31.309297 0 31.30929799 31.30929799l0 0q0 31.309297-31.30929799 31.30929701l-653.31498201 0q-31.309297 0-31.30929699-31.30929701l0 0q0-31.309297 31.30929699-31.30929799Z" fill="#FFF2C9" ></path><path d="M143.749837 446.77599399m54.002139 0l33.186149 0q54.002139 0 54.002139 54.00214l0 32.67428q0 54.002139-54.002139 54.00213902l-33.186149 0q-54.002139 0-54.002139-54.00213902l0-32.67428q0-54.002139 54.002139-54.00214Z" fill="#F3AE0C" ></path></symbol><symbol id="icon-file" viewBox="0 0 1024 1024"><path d="M675.93950791 118.87073984l128.85924727 131.55404326s29.48273965 27.88986445 28.9226874 76.84714073v607.6310124H193.40375644V91.37000234h414.88946455s39.06908526-0.55641533 67.64628692 27.5007375z" fill="#FFFFFF" ></path><path d="M594.09803243 130.8756263h0.20136832H233.83443943a14.3834388 14.3834388 0 0 0-14.3834388 14.38343879v733.48186982a14.3834388 14.3834388 0 0 0 14.3834388 14.38343879h556.32904318a14.3834388 14.3834388 0 0 0 14.3834388-14.38343879V350.38288555l0.00958952-1.36482793c0-45.32061762-26.01804268-72.3391089-29.27828928-75.55141023l-111.9223326-114.35153617c-28.97783467-28.48560202-67.62453681-28.2618597-69.25785662-28.23948492z" fill="#F5F5F5" ></path><path d="M605.80571768 62H195.5057706a32.73031406 32.73031406 0 0 0-32.73031493 32.73031406v834.53937188c0 18.08168028 14.64863378 32.73031406 32.73031493 32.73031406h632.97882159c18.08168028 0 32.73031406-14.64863378 32.73031494-32.73031406V328.11563867l-0.00363692 0.37458106c0.29457247-25.49691474-6.00419443-50.55742529-18.22351201-72.48309962-8.4262377-15.12504229-17.17977832-24.32589697-19.98003867-27.09342685l-127.10635664-129.86661445-0.45095097-0.45458701c-15.21595987-14.94684316-34.91960888-25.97695928-56.97984112-31.8866001C622.16723779 62.33821367 609.34786455 62 605.80571768 62zM195.5057706 94.73031406h410.29631016c2.76025693 0 39.53094609 0.50913808 66.70801758 27.20616505l127.37910937 130.15027616s28.69721191 27.16616074 28.5990214 74.89786992l-0.01090987 1.13101348v601.15404727H195.5057706V94.73031406z" fill="#B2B2B2" ></path><path d="M669.96077011 115.87773448c-27.1770706-22.70029131-36.25427812-12.67390547-36.25427812-12.67390547s18.9399419 2.34930938 18.93994189 98.60189062c0 88.80825322 13.56126065 80.82569268 13.56125977 80.82569267h107.87911612s54.69235489 0.38185401 57.3580582 62.82402012c0 0 0.02909355-37.15254316-5.389592-51.33204317-15.0886749-39.48366885-104.16967998-134.8634417-156.09450586-178.24565477z" fill="#FFFFFF" ></path><path d="M844.51881026 423.72088701a16.36515703 16.36515703 0 0 1-16.36515792-16.36515703c0-91.31757714-64.99149433-99.32923037-74.22144257-100.00201992h-104.8170129a16.36515703 16.36515703 0 0 1-16.36515791-16.36515791c0-95.04883301-12.87392344-143.43514717-23.67129023-167.28827256-11.03011612-24.36226435-21.50017998-27.40254609-21.60200742-27.42800362 0.86553458 0.23274932 1.37467354 0.18547207 1.37830957 0.1854712l2.37112998-32.64666944c12.07021289 0.87644531 71.01023555 15.29232979 74.12688808 210.81231738H754.46680537c0.27275273 0 0.54186855 0.00727383 0.81462041 0.0181837 1.05828047 0.0545502 105.60254062 6.72426123 105.60254151 132.71415117a16.36515703 16.36515703 0 0 1-16.36515703 16.36515703z" fill="#B2B2B2" ></path></symbol><symbol id="icon-image" viewBox="0 0 1024 1024"><path d="M102.4 102.4m136.533333 0l546.133334 0q136.533333 0 136.533333 136.533333l0 546.133334q0 136.533333-136.533333 136.533333l-546.133334 0q-136.533333 0-136.533333-136.533333l0-546.133334q0-136.533333 136.533333-136.533333Z" fill="#8053FF" ></path><path d="M512 102.4h273.066667a136.533333 136.533333 0 0 1 136.533333 136.533333v546.133334a136.533333 136.533333 0 0 1-136.533333 136.533333H238.933333a136.533333 136.533333 0 0 1-136.533333-136.533333v-273.066667C102.4 285.7984 285.7984 102.4 512 102.4z" fill="#A784FF" ></path><path d="M699.733333 324.266667m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z" fill="#FFFFFF" ></path><path d="M620.168533 475.921067l-113.4592 200.328533a34.133333 34.133333 0 0 0 29.696 50.926933h176.366934a68.266667 68.266667 0 0 0 58.026666-104.2432l-91.921066-148.138666a34.133333 34.133333 0 0 0-58.709334 1.1264z" fill="#CCBCFB" ></path><path d="M398.7456 407.313067l-130.730667 214.766933a68.266667 68.266667 0 0 0 58.2656 103.765333h320.4096l-189.44-318.225066a34.133333 34.133333 0 0 0-58.504533-0.341334z" fill="#FFFFFF" ></path></symbol><symbol id="icon-rar" viewBox="0 0 1024 1024"><path d="M90.125 90.125m38.3522731 0l767.0454538 0q38.3522731 0 38.3522731 38.3522731l0 767.0454538q0 38.3522731-38.3522731 38.3522731l-767.0454538 0q-38.3522731 0-38.3522731-38.3522731l0-767.0454538q0-38.3522731 38.3522731-38.3522731Z" fill="#F75C65" ></path><path d="M128.4772731 90.125h767.0454538a38.3522731 38.3522731 0 0 1 38.3522731 38.3522731v230.11363615H90.125V128.4772731a38.3522731 38.3522731 0 0 1 38.3522731-38.3522731z" fill="#4CC8FD" ></path><path d="M90.125 665.40909075h843.75v230.11363615a38.3522731 38.3522731 0 0 1-38.3522731 38.3522731H128.4772731a38.3522731 38.3522731 0 0 1-38.3522731-38.3522731V665.40909075z" fill="#83CC39" ></path><path d="M396.94318151 90.125h230.11363698v843.75H396.94318151z" fill="#FEAB41" ></path><path d="M636.64488613 607.88068151h-249.28977226a28.76420462 28.76420462 0 0 1-28.76420463-28.76420461v-134.2329538a28.76420462 28.76420462 0 0 1 28.76420463-28.76420463h249.28977226a28.76420462 28.76420462 0 0 1 28.76420462 28.76420463v134.2329538a28.76420462 28.76420462 0 0 1-28.76420462 28.76420461zM396.94318151 569.52840924h230.11363698v-115.05681849H396.94318151z" fill="#FFFFFF" ></path></symbol><symbol id="icon-wenjianjiayigongxiang" viewBox="0 0 1024 1024"><path d="M889.7 197.6H477.3l-82.5-83.5H119.9c-30.4 0-55 24.9-55 55.7v667.9c0 30.8 24.6 55.7 55 55.7h769.8c30.4 0 55-24.9 55-55.7V253.3c0-30.8-24.6-55.7-55-55.7z" fill="#F5A623" ></path><path d="M147.4 420.2h714.8v389.6H147.4zM862.2 336.7H147.4V197.6h213.3l82.4 83.5h419.1z" fill="#F6AF39" ></path><path d="M819 767.7m-176 0a176 176 0 1 0 352 0 176 176 0 1 0-352 0Z" fill="#F17033" ></path><path d="M800.8 802.7c-9.2 17.8-28.5 30.1-50.9 30.1-31.2 0-56.6-23.8-56.6-53.2s25.3-53.2 56.6-53.2c17.1 0 32.5 7.2 42.9 18.5l32.3-22.8c-3.9-5.6-6.1-12.2-6.1-19.4 0-19.6 16.9-35.5 37.7-35.5s37.7 15.9 37.7 35.5-16.9 35.5-37.7 35.5c-8.7 0-16.7-2.8-23-7.4l-33.8 23.9c4.2 7.4 6.6 15.9 6.6 24.9 0 4.1-0.5 8.2-1.4 12l33.7 12.7c7.9-11.3 21.4-18.8 36.9-18.8 24.3 0 44 18.5 44 41.4s-19.7 41.4-44 41.4-44-18.5-44-41.4c0-4.1 0.6-8.1 1.8-11.9l-32.7-12.3z" fill="#FFFFFF" ></path></symbol><symbol id="icon-excel" viewBox="0 0 1024 1024"><path d="M916.53125 200.46875H635v52.125h82.96875v82.40625h-82.96875v26.25h82.96875v82.5h-82.96875V470.75h82.96875v78h-82.96875v31.3125h82.96875V658.25h-82.96875v31.3125h82.96875v78.65625h-82.96875v57.375h281.53125c4.40625-1.3125 8.15625-6.5625 11.15625-15.65625 3-9.1875 4.5-16.59375 4.5-22.3125V209.9375c0-4.5-1.5-7.21875-4.5-8.15625-3.65625-0.9375-7.40625-1.40625-11.15625-1.3125z m-36.5625 567.65625h-135v-78.5625h135.09375l-0.09375 78.5625z m0-109.875h-135v-78.28125h135.09375l-0.09375 78.28125z m0-109.5h-135v-77.71875h135.09375l-0.09375 77.71875z m0-105h-135v-82.40625h135.09375l-0.09375 82.40625z m0-109.21875h-135v-81.9375h135.09375v82.5l-0.09375-0.5625zM91.8125 187.4375v651.28125L587.65625 924.5V99.5L91.8125 187.71875v-0.28125z m293.90625 492.65625c-1.875-5.15625-10.78125-26.8125-26.53125-65.25-9.09375-22.40625-18.46875-44.8125-27.9375-67.125h-0.84375l-53.15625 126.5625-71.0625-4.78125 84.1875-157.5-77.25-157.5 72.46875-3.84375 47.90625 123.28125h0.9375l54.09375-128.90625 74.90625-4.6875-89.15625 170.53125 91.875 173.90625-80.4375-4.6875z" fill="#107B0F" ></path></symbol><symbol id="icon-pdf" viewBox="0 0 1024 1024"><path d="M533.35625001 102.003125h54.10312499v85.884375c102.009375 0.571875 204.121875-1.05 306.028125 0.478125 21.946875-2.1 39.13125001 15 36.928125 36.92812501 1.621875 178.265625-0.384375 356.615625 0.9375 534.975-0.9375 19.275 1.875 40.65-9.15937501 57.73124999-13.93125001 10.10625001-32.0625 8.775-48.375 9.54375001-95.428125-0.478125-190.85625001-0.290625-286.37812499-0.29062501v95.4375h-59.34375C382.625 896.159375 236.946875 871.925 91.41874999 846.35q-0.140625-333.95625001 2e-8-667.809375c147.253125-25.48125001 294.496875-51.440625 441.93749998-76.5375z" fill="#DC2E1B" ></path><path d="M135.603125 549.125V432.490625h34.9875q19.89375001 0 25.921875 1.75312499 9.28125001 2.625 15.534375 11.41875001t6.2625 22.715625q0 10.734375-3.609375 18.046875A31.36875001 31.36875001 0 0 1 205.53124999 497.9375a30.384375 30.384375 0 0 1-11.34374999 5.5125q-7.81875001 1.678125-22.6125 1.678125h-14.175v43.996875z m21.796875-96.909375v33.10312499h11.934375q12.890625 0 17.23125-1.82812499a14.559375 14.559375 0 0 0 6.81562501-5.728125 16.63125001 16.63125001 0 0 0 2.46562499-9.065625 15.7875 15.7875 0 0 0-3.46875-10.5 14.784375 14.784375 0 0 0-8.75625-5.175q-3.91875001-0.796875-15.684375-0.796875zM236.13124999 432.490625h39.85312501q13.471875 0 20.55 2.23125A35.859375 35.859375 0 0 1 312.8 445.4375a51.80625001 51.80625001 0 0 1 10.3125 18.890625q3.534375 11.184375 3.54375001 27.571875 0 14.4-3.31875001 24.815625-4.05 12.73125001-11.56875001 20.625-5.625 5.971875-15.30937499 9.309375-7.228125 2.475-19.30312499 2.465625h-41.025z m21.80625001 19.6875v77.259375h16.275q9.13125001 0 13.190625-1.10625001a19.6875 19.6875 0 0 0 8.79375-4.85624999q3.496875-3.421875 5.7-11.25t2.22187501-21.35625001q0-13.528125-2.22187501-20.77499998t-6.17812499-11.25000002a20.259375 20.259375 0 0 0-10.09687501-5.48437499q-4.575-1.115625-17.896875-1.11562499zM345.275 549.125V432.490625h74.015625v19.6875h-52.21875v27.609375h45.075v19.6875h-45.075v49.65z" fill="#FFFFFF" ></path><path d="M815.32 596.59a22.61 22.61 0 0 0-3.14-2.81c-4.66-3.52-14.15-8.66-32.86-13.11q-2.79-0.67-5.77-1.29c12.42 9.27 23 15 31.7 17 5.21 1.3 8.38 0.8 10.07 0.21zM708.86 409c2.43-8.52 4.09-23.81 0.57-26.88l-0.06 0.07c-4.7 6.5-10.64 33.19-8.67 49.29 3.73-6.64 4.91-11.08 8.16-22.48zM709.47 552.2A211.78 211.78 0 0 1 683 499.62a541.34 541.34 0 0 1-45.11 54.52c16.99-1.68 43.93-2.64 71.58-1.94z" fill="#FFFFFF" ></path><path d="M584.28125001 216.51874999v339.29062501c8.821875-2.521875 14.90625001-3.796875 14.90624999-3.796875 5.2875-5.5125 4.6875-4.996875 11.034375-11.8125a711.50625001 711.50625001 0 0 0 56.19375-68.94374999c-0.16875001-2.2125-6.234375-85.425 20.1-96.49687501a17.503125 17.503125 0 0 1 10.9125-0.796875c4.809375 1.14375001 9.375 4.25624999 11.71875 7.921875 5.94375001 9.440625 5.83125001 23.221875 0.9375 42.515625-7.7625 30.534375-19.59375001 47.540625-19.59375 47.540625s3.75 37.66875001 39.375 79.49062501c16.359375 1.3875 30.43125001 3.459375 41.85 6.17812499 19.63125001 4.6875 31.303125 11.175 35.68125 19.865625 2.475 4.9125 2.8125 10.96875001-0.15 18.1125s-5.971875 10.6875-11.4375 12.7875c-4.575 1.7625-10.3125 1.875-16.996875 0.24375001-19.9875-4.7625-46.490625-23.784375-63.75-39.10312501-27.91875001-2.19375001-61.8-2.4375-100.7625-0.75q-17.371875 18.665625-30.065625 29.859375v200.015625H899.1875V216.51874999z" fill="#FFFFFF" ></path></symbol><symbol id="icon-word" viewBox="0 0 1024 1024"><path d="M531.04985874 90.125h57.34801318v78.48144992C690.98929929 169.49941181 793.48150857 167.51505188 895.87450061 169.49941181a33.33725299 33.33725299 0 0 1 37.00831943 37.50440982c1.68670652 193.27669355 0 386.95025857 0.99217996 579.92929788-0.99217996 19.84360337 1.88514267 41.77078474-9.32649363 59.53080927-13.98974002 9.92180127-32.04741879 8.92962131-48.41839104 9.92180126h-287.73224341V933.47812768h-59.53080927C382.61970871 906.59004568 236.37235393 881.58710635 90.125 855.39355008V168.80488608C237.06688049 142.51211173 384.10797824 116.91386392 531.04985874 90.125z" fill="#2A5699" ></path><path d="M588.39787192 198.07420032H904.70490384v627.85159936H588.39787192v-78.48144992h249.23565362v-39.68720591H588.39787192v-48.6168272h249.23565362v-39.68720673H588.39787192v-48.61682721h249.23565362v-39.6872059H588.39787192v-49.60900718h249.23565362V443.34113327H588.39787192v-49.60900717h249.23565362v-38.69502595H588.39787192v-49.1129176h249.23565362V266.73306704H588.39787192zM288.56103034 371.40807241c18.25611492-1.09139804 36.41301177-1.88514267 54.66912588-2.8773218 12.7991239 66.27763367 25.79668396 132.356832 39.6872059 198.43602951 10.81476398-68.16277634 22.82014325-136.02789844 34.42865186-203.99223861 19.14907681-0.69452572 38.29815362-1.78592459 57.44723043-2.97654072-21.72874522 95.05085834-40.67938586 190.99467938-64.39249182 285.45022926-15.97410077 8.532749-39.6872059 0-58.93550078 0.99217996C338.17003751 581.35339245 323.38655368 516.76246448 311.97648206 451.57622885c-11.21163547 63.40031186-25.79668396 126.20531525-38.59580787 189.10953671-18.45455108-0.99217996-36.90910134-2.083578-55.46287051-3.37341219-15.87488269-86.31967319-34.62708719-172.14325598-49.609008-258.66136533 16.37097226-0.79374381 32.8411626-1.48827036 49.609008-2.08357883 9.92180127 62.50734915 21.13343755 124.71704489 29.76540463 187.32361294 13.2952143-64.19405567 27.08651816-128.28889326 40.87782202-192.48294974z" fill="#FFFFFF" ></path></symbol><symbol id="icon-ppt" viewBox="0 0 1024 1024"><path d="M534.02639944 90.125h54.37147248v88.30403311c102.49220929 0.59530847 205.08363748-1.09139804 307.57584595 0a33.53568914 33.53568914 0 0 1 37.10753832 38.00050022c1.68670652 183.25567419 0 366.61056564 0.99217996 549.96545708-0.99217996 19.84360337 1.88514267 41.77078474-9.22727553 59.53080927-13.98974002 9.92180127-32.14663687 9.02883938-48.61682722 9.92180128-95.84460215-0.4960904-191.68920511 0-287.73224341 0V933.47812768h-59.53080925C382.71892678 906.59004568 236.37235393 881.68632444 90.125 855.39355008V168.80488608C238.05906045 142.61132981 385.99312092 115.92168396 534.02639944 90.125z" fill="#D24625" ></path><path d="M588.39787192 207.89678352H904.70490384v598.38384896H588.39787192v-78.48144993h230.08657681v-39.19111551H588.39787192v-49.60900799h230.08657681v-38.69502594H588.49708999v-57.6456666c38.00049939 12.0053801 81.25955447 11.70772586 115.19211512-11.60850777 36.71066519-22.32405368 55.85974282-64.78936414 59.03471886-107.1554557H636.51860874c0-42.66374661 0.4960904-85.32749322-0.79374382-127.89202176-15.77566462 3.07575879-31.45211115 6.449171-47.12855767 9.92180127z" fill="#FFFFFF" ></path><path d="M655.66768555 275.26581604a136.52398883 136.52398883 0 0 1 126.20531524 128.9834198c-42.06843814 0.4960904-84.1368771 0-126.30453332 0 0.09921807-43.15983618 0.09921807-85.92280087 0.09921808-128.9834198z" fill="#D24625" ></path><path d="M243.91292297 349.28245572c52.08945831 2.5796684 115.09289785-21.03421948 158.74882444 18.85142258 41.27469434 51.39493177 30.36071228 145.75126437-30.85680268 176.40963088-21.72874522 11.41007163-46.73168537 9.92180127-70.34557241 9.02883939v115.09289703l-57.05035895-4.86168255c-1.48827036-104.77422427-1.68670652-209.6476658-0.4960904-314.52110733z" fill="#FFFFFF" ></path><path d="M300.86406385 402.36409317c18.85142258-0.79374381 42.2668743-4.36559299 54.96678012 13.79130468a72.42915125 72.42915125 0 0 1 1.28983418 64.392491c-10.91398206 19.84360337-35.61926715 18.15689685-54.76834395 20.53812909-1.98435992-32.8411626-1.78592459-65.68232602-1.48827035-98.72192477z" fill="#D24625" ></path></symbol><symbol id="icon-folder" viewBox="0 0 1024 1024"><path d="M926.952727 910.615273H95.813818a39.68 39.68 0 0 1-39.959273-39.330909V225.792c0-21.969455 18.152727-39.330909 39.959273-39.330909H926.952727c22.318545 0 39.959273 17.873455 39.959273 39.330909v645.492364c0 21.946182-18.152727 39.330909-39.959273 39.330909z" fill="#FFA000" ></path><path d="M499.712 373.294545H55.854545V158.394182c-0.069818-23.109818 17.338182-41.890909 38.935273-42.007273h303.802182c17.221818 0 32.349091 12.008727 37.422545 29.998546l63.697455 226.955636z" fill="#FFA000" ></path><path d="M858.763636 863.883636H187.345455c-21.248 0-38.074182-17.664-38.074182-38.865454V295.400727c0-21.713455 17.291636-38.865455 38.074182-38.865454H858.763636c21.271273 0 38.074182 17.687273 38.074182 38.865454V825.018182c0.465455 21.201455-16.802909 38.865455-38.074182 38.865454z" fill="#FFFFFF" ></path><path d="M926.952727 910.615273H95.813818c-22.318545 0-39.959273-17.710545-39.959273-38.958546V365.568c0-21.76 18.152727-38.958545 39.959273-38.958545H926.952727c22.318545 0 39.959273 17.710545 39.959273 38.958545v506.088727c0 21.76-18.152727 38.958545-39.959273 38.958546z" fill="#FFCA28" ></path><path d="M363.496727 486.260364H145.873455c-10.752 0-19.944727-9.332364-19.944728-21.410909 0-11.543273 8.704-21.434182 19.944728-21.434182h217.111272c10.705455 0 19.921455 9.332364 19.921455 21.434182 0 11.543273-8.704 21.434182-19.409455 21.434181z m0 144.034909H145.873455c-10.752 0-19.944727-9.355636-19.944728-21.434182 0-12.101818 8.704-21.457455 19.944728-21.457455h217.111272c10.705455 0 19.921455 9.355636 19.921455 21.457455s-8.704 21.434182-19.409455 21.434182z" fill="#FFF8E1" ></path></symbol><symbol id="icon-logout" viewBox="0 0 1024 1024"><path d="M563.2 986.763636H93.090909c-51.2 0-93.090909-41.890909-93.090909-93.090909V130.327273c0-51.2 41.890909-93.090909 93.090909-93.090909h470.109091c27.927273 0 46.545455 18.618182 46.545455 46.545454s-18.618182 46.545455-46.545455 46.545455H93.090909v768h470.109091c27.927273 0 46.545455 18.618182 46.545455 46.545454 0 23.272727-18.618182 41.890909-46.545455 41.890909zM730.763636 758.690909c-18.618182-18.618182-18.618182-46.545455 0-65.163636l176.872728-176.872728L698.181818 297.890909l32.581818-32.581818c18.618182-18.618182 46.545455-18.618182 65.163637 0l214.109091 214.109091c18.618182 18.618182 18.618182 46.545455 0 65.163636l-214.109091 214.109091c-13.963636 18.618182-46.545455 18.618182-65.163637 0z"  ></path><path d="M935.563636 558.545455H404.945455c-27.927273 0-46.545455-18.618182-46.545455-46.545455s18.618182-46.545455 46.545455-46.545455h530.618181v93.09091z"  ></path></symbol><symbol id="icon-avatar" viewBox="0 0 1024 1024"><path d="M1008.829848 511.99578c0-274.387743-222.425226-496.829848-496.829848-496.829848-274.387743 0-496.829848 222.442106-496.829848 496.829848 0 181.948983 97.865412 340.967618 243.768933 427.523988 48.114066-59.80289 121.80851-98.152358 204.533309-98.152358h46.898766c91.383811 0 171.787725 46.721535 218.821525 117.546521 165.533993-80.606463 279.637164-250.410886 279.637163-446.918151z" fill="#13227a" ></path><path d="M510.37116 841.36741h-46.898766c-82.733238 0-156.419243 38.349468-204.533309 98.152358a494.36549 494.36549 0 0 0 253.060915 69.305861 494.728392 494.728392 0 0 0 217.192685-49.911698C682.158885 888.088945 601.754972 841.36741 510.37116 841.36741z" fill="#96529A" ></path><path d="M557.261487 731.804736h-135.615669v125.648521l-0.016879 0.270066c8.397386 29.555422 31.690637 50.004533 65.432091 50.004533 33.783653 0 62.123775-24.103451 70.478963-52.241022l-0.278506-123.682098z" fill="#FFC6A2" ></path><path d="M557.261487 731.804736h-135.615669v125.648521l-0.016879 0.067516c8.397386 29.572301 31.690637 50.207083 65.432091 50.207083 33.783653 0 62.123775-24.103451 70.478963-52.241022l-0.278506-123.682098z" fill="#FFC6A2" ></path><path d="M296.005736 547.036931a44.341572 44.341572 0 0 1-88.691584 0v-22.179225a44.341572 44.341572 0 0 1 88.691584 0v22.179225z" fill="#FFC6A2" ></path><path d="M296.005736 547.036931a44.341572 44.341572 0 0 1-88.691584 0v-22.179225a44.341572 44.341572 0 0 1 88.691584 0v22.179225z" fill="#FFC6A2" ></path><path d="M769.01908 547.036931a44.341572 44.341572 0 0 1-88.683145 0v-22.179225a44.341572 44.341572 0 0 1 88.683145 0v22.179225z" fill="#FFC6A2" ></path><path d="M769.01908 547.036931a44.341572 44.341572 0 0 1-88.683145 0v-22.179225a44.341572 44.341572 0 0 1 88.683145 0v22.179225z" fill="#FFC6A2" ></path><path d="M739.455218 549.805115c0 137.261388-111.27591 248.520419-248.528858 248.520419h-5.511048c-137.252948 0-248.528859-111.267471-248.528859-248.520419V440.791013c0-137.252948 111.27591-248.511979 248.528859-248.511979h5.511048c137.252948 0 248.528859 111.267471 248.528858 248.511979v109.014102z" fill="#FFC6A2" ></path><path d="M699.69634 356.918431l-29.631378 5.139707s42.56082 241.777192 8.422704 284.042626c-58.798579 72.75765-308.036363 66.141017-374.16894 0-38.425424-38.425424-5.215663-285.325443-5.215663-285.325443l-61.912785 68.006165c-0.177231 3.983483-0.303825 7.983846-0.303825 12.009527v109.005662c0 137.261388 111.27591 248.520419 248.528859 248.520419h5.511048c137.252948 0 248.528859-111.267471 248.528858-248.520419V440.791013c0-4.017242-39.573208-79.889099-39.758878-83.872582" fill="#442A1C" ></path><path d="M731.564208 371.088492c-27.656516-107.089877-124.905838-186.202534-240.637848-186.202534h-5.511048c-115.723571 0-212.981332 79.112657-240.637848 186.202534H731.564208z" fill="#442A1C" ></path><path d="M256.40721 456.134176c21.023003-35.969505 35.657241-73.3653 43.894274-111.908879v-76.589221a247.6849 247.6849 0 0 0-63.415031 165.787181v48.84831a150.081116 150.081116 0 0 0 19.520757-26.137391M720.862816 456.134176c-21.023003-35.969505-35.657241-73.3653-43.902714-111.908879v-76.589221a247.651142 247.651142 0 0 1 63.42347 165.787181v48.84831a149.650697 149.650697 0 0 1-19.520756-26.137391" fill="#442A1C" ></path><path d="M763.457394 139.734186s-165.356762 45.151772-285.139772 45.151772c-119.79145 0-68.765727 163.103393 135.100854 181.180982 176.378858 17.689367 151.81123-218.332028 150.038918-226.332754M599.028986 681.226311c0 20.719178-21.942917 35.800714-48.215341 35.800714h-125.294058c-26.272424 0-48.215341-15.081536-48.215342-35.800714v-22.753117c0-20.727617 21.942917-37.522389 48.215342-37.522389h125.294058c26.272424 0 48.215341 16.794771 48.215341 37.522389v22.753117z" fill="#442A1C" ></path><path d="M429.756258 671.613625a55.388987 55.388987 0 1 0 110.786414 0h-110.786414z" fill="#FCFCFC" ></path><path d="M639.792175 498.146423c-0.945233-24.795497-21.301509-44.620079-46.324874-44.620078s-45.379641 19.833022-46.324875 44.620078h0.312265c-0.109715 0.523254-0.312265 1.00431-0.312265 1.561323a7.578746 7.578746 0 0 0 15.140613 0c0-0.548573-0.19411-1.038069-0.312264-1.561323h0.379781a31.20958 31.20958 0 0 1 31.125184-29.504784c16.676617 0 30.163072 13.072915 31.116745 29.504784h0.438858c-0.151913 0.582331-0.362902 1.156223-0.362902 1.789192a7.578746 7.578746 0 0 0 15.140613 0c0-0.632969-0.21099-1.20686-0.362902-1.789192h0.346023zM426.726447 498.146423c-0.945233-24.795497-21.301509-44.620079-46.324874-44.620078s-45.379641 19.833022-46.324875 44.620078h0.312265c-0.109715 0.523254-0.312265 1.00431-0.312265 1.561323a7.578746 7.578746 0 0 0 15.140613 0c0-0.548573-0.19411-1.038069-0.312265-1.561323h0.379782a31.20958 31.20958 0 0 1 31.125184-29.504784c16.676617 0 30.163072 13.072915 31.116745 29.504784h0.438858c-0.151913 0.582331-0.362902 1.156223-0.362902 1.789192a7.578746 7.578746 0 0 0 15.140613 0c0-0.632969-0.21099-1.20686-0.362902-1.789192h0.346023z" fill="#4C362A" ></path><path d="M468.991882 572.170011a33.44607 25.074003 90 1 0 50.148006 0 33.44607 25.074003 90 1 0-50.148006 0Z" fill="#FF9A67" ></path><path d="M334.068258 586.897085m-39.033074 0a39.033074 39.033074 0 1 0 78.066149 0 39.033074 39.033074 0 1 0-78.066149 0Z" fill="#FDB18F" ></path></symbol><symbol id="icon-cooperative-repo-menu" viewBox="0 0 1024 1024"><path d="M242.73828125 313.22656277l262.828125 151.73437473 269.08593777-155.35546875L512 164.86718723l-269.26171875 148.35937554zM547.15625027 522.19531223v317.60156277l281.24999973-154.96875027V359.77343723l-281.24999973 162.38671929z m-70.31250054 7.41796902L195.59375 367.19140625v317.60156277l281.24999973 154.96874946V529.57812473zM145.1796875 286.71875l348.046875-191.77734402a38.95312527 38.95312527 0 0 1 37.546875 0l348.046875 191.77734402c12.30468723 6.75 19.89843723 19.58203098 19.89843723 33.50390598v383.55468804c0 13.921875-7.62890652 26.71875027-19.89843723 33.50390598l-348.046875 191.77734402a38.95312527 38.95312527 0 0 1-37.546875 0l-348.046875-191.77734402A38.32031277 38.32031277 0 0 1 125.28125027 703.77734402V320.22265598c0-13.921875 7.62890652-26.71875027 19.89843723-33.50390598z"  ></path></symbol><symbol id="icon-public-repo-menu" viewBox="0 0 1024 1024"><path d="M904.41 315.63c-0.07-19.39-10.58-37.43-27.43-47.08L537.71 74.31c-16.81-9.65-37.71-9.56-54.52 0.2l0.01-0.01-337.77 196.71c-16.78 9.76-27.16 27.88-27.09 47.31l1.47 390.96c0.07 19.45 10.6 37.5 27.42 47.08l337.76 193.39c8.35 4.79 17.7 7.18 27.06 7.18 9.42 0 18.85-2.43 27.25-7.28l339.24-195.88c16.92-9.72 27.39-27.9 27.31-47.43l-1.44-390.91zM510.66 131.6l286.03 163.76-133.05 84.19-124.53-71.31c-17.16-9.8-38.46-9.75-55.57 0.23v-0.01l-124.96 72.78-132.54-83.87L510.66 131.6z m1.38 527.41l-112-64.11 106.03-65.53 104.32 72.86-98.35 56.78zM384.49 439.24l97.88-57.01v98.18c0 0.86 0.41 1.59 0.49 2.42-1.34 0.55-2.76 0.71-4.02 1.49l-93.96 58.07-0.39-103.15zM535 480.41V378.68l104.17 59.64 0.44 120.11-105.48-73.67c0.25-1.47 0.87-2.81 0.87-4.35zM181.6 343.99l140.04 88.61c-0.04 0.85-0.33 1.65-0.33 2.5l0.59 155.8c0.07 19.8 10.79 38.2 27.97 48.03l130.65 74.8v160.89L182.95 704.24l-1.35-360.25zM543.68 874.4V713.66l131.4-75.85c17.23-9.93 27.88-28.46 27.81-48.36l-0.58-155.74c0-1.22-0.4-2.36-0.49-3.57l139.52-88.29 1.33 359.9L543.68 874.4z"  ></path></symbol><symbol id="icon-private-repo-menu" viewBox="0 0 1024 1024"><path d="M513.1521875 917.695625H142.2078125c-48 0-69.888-17.472-82.944-34.944-30.528-39.36-17.472-96-13.056-100.415625 43.584-126.5278125 187.584375-161.4721875 257.4721875-170.1121875-65.472-56.64-122.1121875-130.944375-122.1121875-266.1121875s113.28-253.2478125 244.224375-253.2478125 244.415625 117.8878125 244.415625 253.055625-61.056 209.4721875-122.1121875 266.1121875l-13.056 13.056c4.416 4.416 4.416 8.64 4.416 17.472 0 17.472-13.056 30.528-30.528 30.528-13.056 0-34.944-8.64-43.584-26.112-13.056-30.528 13.056-61.056 39.36-82.944 61.056-56.64 100.415625-113.4721875 100.415625-218.1121875 0-100.415625-82.944-187.584375-178.944375-187.584375s-178.944375 87.36-178.944375 187.584375c0 104.64 39.36 161.4721875 100.415625 218.1121875 26.112 26.112 52.416 52.416 39.36 82.944-8.64 21.888-26.112 26.112-43.584 26.112 0 0-196.415625 8.64-240 130.944375 0 8.64-4.416 30.528 4.416 39.36 4.416 8.64 17.472 8.64 30.528 8.64h375.36c17.472 0 34.944 13.056 34.944 34.944-0.768 21.888-18.048 30.72-35.52 30.72Z"  ></path><path d="M770.624375 983.16875c-4.416 0-13.056 0-17.472-4.416l-178.944375-100.415625c-8.64-4.416-17.472-17.472-17.472-30.528V642.7521875c0-13.056 4.416-21.888 17.472-26.112 8.64-4.416 21.888-4.416 30.528 0l183.36 100.415625c8.64 4.416 17.472 17.472 17.472 30.528v205.055625c0 13.056-4.416 21.888-17.472 26.112-4.416 4.416-8.832 4.416-17.472 4.416Zm-148.415625-152.8321875l117.8878125 65.472v-130.944375l-117.8878125-61.056v126.5278125Z"  ></path><path d="M770.624375 983.16875c-4.416 0-13.056 0-17.472-4.416-8.64-4.416-17.472-17.472-17.472-26.112V747.3921875c0-13.056 4.416-21.888 17.472-30.528l183.36-100.415625c8.64-4.416 21.888-4.416 30.528 0s17.472 17.472 17.472 26.112v205.055625c0 13.056-4.416 21.888-17.472 30.528L783.68 978.55625c0 4.608-4.416 4.608-13.056 4.608ZM805.375625 769.28v130.944375l117.8878125-65.472v-130.944375L805.375625 769.28Z"  ></path><path d="M770.624375 782.335625c-4.416 0-13.056 0-17.472-4.416l-183.36-100.415625c-8.64-4.416-17.472-17.472-17.472-30.528 0-13.056 4.416-21.888 17.472-30.528l183.36-104.64c8.64-4.416 21.888-4.416 30.528 0l183.36 104.64c8.64 4.416 17.472 17.472 17.472 30.528 0 13.056-4.416 21.888-17.472 30.528l-183.36 100.415625s-4.416 4.416-13.056 4.416Zm-113.4721875-135.1678125l113.4721875 65.472 117.8878125-65.472-117.8878125-65.472-113.4721875 65.472Z"  ></path></symbol></svg>', r = (r = document.getElementsByTagName("script"))[r.length - 1].getAttribute("data-injectcss");
            if (r && !e.__iconfont__svg__cssinject__) {
                e.__iconfont__svg__cssinject__ = !0;
                try {
                    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
                } catch (e) {
                    console && console.log(e)
                }
            }
            function l() {
                o || (o = !0,
                i())
            }
            t = function() {
                var e, t = document.createElement("div");
                t.innerHTML = s,
                s = null,
                (t = t.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"),
                t.style.position = "absolute",
                t.style.width = 0,
                t.style.height = 0,
                t.style.overflow = "hidden",
                t = t,
                (e = document.body).firstChild ? function(e, t) {
                    t.parentNode.insertBefore(e, t)
                }(t, e.firstChild) : e.appendChild(t))
            }
            ,
            document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(t, 0) : (a = function() {
                document.removeEventListener("DOMContentLoaded", a, !1),
                t()
            }
            ,
            document.addEventListener("DOMContentLoaded", a, !1)) : document.attachEvent && (i = t,
            n = e.document,
            o = !1,
            function e() {
                try {
                    n.documentElement.doScroll("left")
                } catch (t) {
                    return void setTimeout(e, 50)
                }
                l()
            }(),
            n.onreadystatechange = function() {
                "complete" == n.readyState && (n.onreadystatechange = null,
                l())
            }
            )
        }(window)
    },
    ljW0: function(e, t) {},
    "ox+E": function(e, t) {},
    sA4d: function(e, t) {},
    svWs: function(e, t) {},
    ve9D: function(e, t) {},
    xduj: function(e, t) {}
}, ["NHnr"]);
