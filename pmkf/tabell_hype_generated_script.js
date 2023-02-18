//	HYPE.documents["tabell"]

(function() {
    (function m() {
        function k(a, b, c, d) {
            var e = !1;
            null == window[a] && (null == window[b] ? (window[b] = [], window[b].push(m), a = document.getElementsByTagName("head")[0], b = document.createElement("script"), e = l, false == !0 && (e = ""), b.type = "text/javascript", "" != d && (b.integrity = d, b.setAttribute("crossorigin", "anonymous")), b.src = e + "/" + c, a.appendChild(b)) : window[b].push(m), e = !0);
            return e
        }
        var l = "tabell.hyperesources",
            f = "tabell",
            g = "tabell_hype_container";
        if (false ==
            !1) try {
            for (var c = document.getElementsByTagName("script"), a = 0; a < c.length; a++) {
                var d = c[a].src,
                    b = null != d ? d.indexOf("/tabell_hype_generated_script.js") : -1;
                if (-1 != b) {
                    l = d.substr(0, b);
                    break
                }
            }
        } catch (p) {}
        c = null == navigator.userAgentData && navigator.userAgent.match(/MSIE (\d+\.\d+)/);
        c = parseFloat(c && c[1]) || null;
        d = !0 == (null != window.HYPE_740F || null != window.HYPE_dtl_740F) || false == !0 || null != c && 10 > c;
        a = !0 == d ? "HYPE-740.full.min.js" : "HYPE-740.thin.min.js";
        c = !0 == d ? "F" : "T";
        d = d ? "" : "";
        if (false == !1 && (a = k("HYPE_740" + c, "HYPE_dtl_740" + c, a, d), false == !0 && (a = a || k("HYPE_w_740", "HYPE_wdtl_740", "HYPE-740.waypoints.min.js", "")), false == !0 && (a = a || k("Matter", "HYPE_pdtl_740", "HYPE-740.physics.min.js", "")), a)) return;
        d = window.HYPE.documents;
        if (null != d[f]) {
            b = 1;
            a = f;
            do f = "" + a + "-" + b++; while (null != d[f]);
            for (var e =
                    document.getElementsByTagName("div"), b = !1, a = 0; a < e.length; a++)
                if (e[a].id == g && null == e[a].getAttribute("HYP_dn")) {
                    var b = 1,
                        h = g;
                    do g = "" + h + "-" + b++; while (null != document.getElementById(g));
                    e[a].id = g;
                    b = !0;
                    break
                }
            if (!1 == b) return
        }
        b = [];
        b = [];
        e = {};
        h = {};
        for (a = 0; a < b.length; a++) try {
            h[b[a].identifier] = b[a].name, e[b[a].name] = eval("(function(){return " + b[a].source + "})();")
        } catch (n) {
            window.console && window.console.log(n), e[b[a].name] = function() {}
        }
        c = new window["HYPE_740" + c](f, g, {
                "-1": {
                    n: "PIE.htc"
                },
                "-2": {
                    n: "blank.gif"
                }
            },
            l, ["<link href='https://fonts.googleapis.com/css?family=Lato:300&subset=latin' rel='stylesheet' type='text/css'>", "<link href='https://fonts.googleapis.com/css?family=Lato:700&subset=latin' rel='stylesheet' type='text/css'>"], e, [{
                n: "Untitled Scene",
                o: "1",
                X: [0]
            }], [{
                o: "3",
                p: "600px",
                cA: false,
                Y: 628,
                Z: 349,
                L: [],
                c: "#FFF",
                bY: 1,
                d: 628,
                U: {},
                T: {
                    "32_hover": {
                        q: false,
                        z: 1,
                        i: "32_hover",
                        n: "32_hover",
                        a: [{
                            f: "c",
                            y: 0,
                            z: 1,
                            i: "w",
                            e: "<font>Beh\u00f6ver du g\u00f6ra en analys av dina fonder f\u00f6r att se om du kan g\u00f6ra f\u00f6r\u00e4ndringar som skapar b\u00e4ttre f\u00f6ruts\u00e4ttningar till h\u00f6gre avkastning h\u00f6r av dig till oss p\u00e5 <u>info@pmkf.se</u></font>",
                            s: "<font>Beh\u00f6ver du g\u00f6ra en analys av dina fonder f\u00f6r att se om du kan g\u00f6ra f\u00f6r\u00e4ndringar som skapar b\u00e4ttre f\u00f6ruts\u00e4ttningar till h\u00f6gre avkastning h\u00f6r av dig till oss p\u00e5 info@pmkf.se</font>",
                            o: "40"
                        }, {
                            y: 1,
                            i: "w",
                            s: "<font>Beh\u00f6ver du g\u00f6ra en analys av dina fonder f\u00f6r att se om du kan g\u00f6ra f\u00f6r\u00e4ndringar som skapar b\u00e4ttre f\u00f6ruts\u00e4ttningar till h\u00f6gre avkastning h\u00f6r av dig till oss p\u00e5 <u>info@pmkf.se</u></font>",
                            z: 0,
                            o: "40",
                            f: "c"
                        }],
                        f: 30,
                        b: []
                    },
                    kTimelineDefaultIdentifier: {
                        q: false,
                        z: 0,
                        i: "kTimelineDefaultIdentifier",
                        n: "Main Timeline",
                        a: [],
                        f: 30,
                        b: []
                    }
                },
                bZ: 180,
                O: ["46", "35", "37", "48", "45", "36", "39", "42", "38", "44", "41", "47", "43", "40"],
                n: "Untitled Layout",
                "_": 0,
                v: {
                    "42": {
                        b: 107,
                        z: 8,
                        K: "None",
                        c: 221,
                        L: "None",
                        d: 290,
                        aS: 15,
                        M: 0,
                        N: 0,
                        aT: 0,
                        bS: 36,
                        O: 0,
                        aU: 25,
                        P: 0,
                        bF: "35",
                        aV: 3,
                        j: "absolute",
                        k: "div",
                        Y: 51,
                        B: "#999",
                        Z: "break-word",
                        r: "inline",
                        s: "Lato",
                        t: 20,
                        F: "right",
                        v: "300",
                        G: "#000",
                        w: "<div>30 \u00e5r</div><div>1 000 000 SEK</div><div>7%<br></div><div><div>V\u00e4rde 7 612 255 SEK</div><div>V\u00e4rde 9 386 817 SEK</div><div><span style=\"font-weight: 700;\">+1 774 562 SEK<br></span></div></div><div><br></div><div><br></div>",
                        x: "visible",
                        I: "None",
                        a: 695,
                        y: "preserve",
                        J: "None"
                    },
                    "36": {
                        b: 107,
                        z: 6,
                        K: "None",
                        c: 222,
                        L: "None",
                        d: 290,
                        aS: 15,
                        M: 0,
                        N: 0,
                        aT: 0,
                        bS: 36,
                        O: 0,
                        aU: 25,
                        P: 0,
                        bF: "35",
                        aV: 3,
                        j: "absolute",
                        k: "div",
                        Y: 51,
                        B: "#999",
                        Z: "break-word",
                        r: "inline",
                        s: "Lato",
                        t: 20,
                        F: "right",
                        v: "300",
                        G: "#000",
                        w: "<div>10 \u00e5r</div><div>1 000 000 SEK</div><div>7%<br></div><div><div>V\u00e4rde 1 967 151 SEK</div></div><div><div>V\u00e4rde 2 109 467 SEK&nbsp;</div><div><span style=\"font-weight: 700;\">+142 316 SEK</span></div><div>&nbsp;&nbsp;</div></div><div><br></div><div><br></div>",
                        x: "visible",
                        I: "None",
                        a: 200,
                        y: "preserve",
                        J: "None"
                    },
                    "47": {
                        c: 942,
                        d: 51,
                        I: "Solid",
                        J: "None",
                        K: "None",
                        L: "Solid",
                        M: 1,
                        bF: "35",
                        N: 0,
                        A: "#999",
                        x: "visible",
                        j: "absolute",
                        B: "#D8DDE4",
                        k: "div",
                        O: 0,
                        C: "#D8DDE4",
                        z: 10,
                        P: 1,
                        D: "#999",
                        a: 0,
                        b: 312
                    },
                    "37": {
                        aU: 0,
                        bB: 0,
                        G: "#BBA268",
                        c: 904,
                        aV: 8,
                        r: "inline",
                        d: 76,
                        bC: 0,
                        s: "Lato",
                        t: 24,
                        Y: 32,
                        Z: "break-word",
                        v: "700",
                        w: "Avgifter har stor betydelse f\u00f6r hur v\u00e4rdet p\u00e5 ett sparkapital utvecklas. I tabellen redovisas hur stor skillnaden faktiskt blir \u00f6ver en l\u00e4ngre tid.",
                        bF: "35",
                        j: "absolute",
                        x: "visible",
                        aZ: 0,
                        k: "div",
                        y: "preserve",
                        z: 12,
                        aS: 8,
                        aT: 8,
                        a: 20,
                        bA: "#000",
                        b: 14
                    },
                    "43": {
                        c: 942,
                        d: 51,
                        I: "Solid",
                        e: 0.5,
                        J: "None",
                        K: "None",
                        g: "#E8EBED",
                        L: "None",
                        M: 2,
                        bF: "35",
                        N: 0,
                        A: "#666",
                        x: "visible",
                        j: "absolute",
                        B: "#D8DDE4",
                        P: 0,
                        O: 0,
                        C: "#D8DDE4",
                        z: 4,
                        k: "div",
                        D: "#999",
                        a: 0,
                        b: 364
                    },
                    "48": {
                        c: 942,
                        bS: 36,
                        d: 424,
                        I: "Solid",
                        e: 0.8,
                        J: "Solid",
                        gg: "0",
                        K: "Solid",
                        g: "#FFF",
                        L: "Solid",
                        M: 0,
                        bF: "35",
                        N: 0,
                        j: "absolute",
                        x: "visible",
                        O: 0,
                        B: "#999",
                        P: 0,
                        A: "#999",
                        C: "#999",
                        z: 1,
                        Q: 0,
                        D: "#999",
                        R: "#000",
                        k: "div",
                        S: 0,
                        a: 0,
                        T: 0,
                        b: 104
                    },
                    "38": {
                        c: 942,
                        d: 53,
                        I: "None",
                        e: 0.5,
                        J: "None",
                        K: "None",
                        g: "#E8EBED",
                        L: "Solid",
                        M: 0,
                        bF: "35",
                        N: 0,
                        A: "#999",
                        x: "visible",
                        j: "absolute",
                        B: "#D8DDE4",
                        P: 2,
                        O: 0,
                        C: "#D8DDE4",
                        z: 2,
                        k: "div",
                        D: "#333",
                        a: 0,
                        b: 155
                    },
                    "44": {
                        c: 942,
                        d: 52,
                        I: "Solid",
                        J: "None",
                        K: "None",
                        L: "Solid",
                        M: 1,
                        bF: "35",
                        N: 0,
                        A: "#999",
                        x: "visible",
                        j: "absolute",
                        B: "#D8DDE4",
                        k: "div",
                        O: 0,
                        C: "#D8DDE4",
                        z: 9,
                        P: 1,
                        D: "#999",
                        a: 0,
                        b: 209
                    },
                    "40": {
                        aU: 0,
                        aM: "32_hover",
                        bB: 0,
                        G: "#000",
                        c: 912,
                        aV: 8,
                        r: "inline",
                        d: 75,
                        bC: 0,
                        s: "Lato",
                        t: 20,
                        Y: 32,
                        Z: "break-word",
                        aP: "pointer",
                        v: "300",
                        w: "<font>Beh\u00f6ver du g\u00f6ra en analys av dina fonder f\u00f6r att se om du kan g\u00f6ra f\u00f6r\u00e4ndringar som skapar b\u00e4ttre f\u00f6ruts\u00e4ttningar till h\u00f6gre avkastning h\u00f6r av dig till oss p\u00e5 info@pmkf.se</font>",
                        bF: "35",
                        j: "absolute",
                        x: "visible",
                        aZ: 0,
                        k: "div",
                        y: "preserve",
                        dB: "button",
                        z: 13,
                        aS: 8,
                        aT: 0,
                        a: 22,
                        bA: "#000",
                        b: 426
                    },
                    "39": {
                        b: 107,
                        z: 7,
                        K: "None",
                        c: 221,
                        L: "None",
                        d: 290,
                        aS: 15,
                        M: 0,
                        N: 0,
                        aT: 0,
                        bS: 36,
                        O: 0,
                        aU: 25,
                        P: 0,
                        bF: "35",
                        aV: 3,
                        j: "absolute",
                        k: "div",
                        Y: 51,
                        B: "#999",
                        Z: "break-word",
                        r: "inline",
                        s: "Lato",
                        t: 20,
                        F: "right",
                        v: "300",
                        G: "#000",
                        w: "<div>20 \u00e5r</div><div>1 000 000 SEK</div><div>7%<br></div><div><div>V\u00e4rde 3 869 684 SEK</div><div>V\u00e4rde 4 449 852 SEK</div><div><span style=\"font-weight: 700;\">+580 168 SEK</span></div></div>",
                        x: "visible",
                        I: "None",
                        a: 448,
                        y: "preserve",
                        J: "None"
                    },
                    "45": {
                        aU: 0,
                        G: "#000",
                        c: 173,
                        bS: 36,
                        aV: 3,
                        r: "inline",
                        d: 290,
                        I: "None",
                        J: "None",
                        s: "Lato",
                        t: 20,
                        Y: 51,
                        K: "None",
                        L: "None",
                        Z: "break-word",
                        M: 0,
                        v: "300",
                        w: "<div>Tid</div><div>Startkapital<br></div><div>\u00c5rlig avkastning&nbsp;<br></div><div>Avgift 1,5%<br></div><div>Avgift 0,75%<br></div><div><span style=\"font-weight: 700;\">Skillnad I v\u00e4rde</span></div>",
                        bF: "35",
                        j: "absolute",
                        x: "visible",
                        N: 0,
                        O: 0,
                        P: 0,
                        y: "preserve",
                        k: "div",
                        z: 5,
                        aS: 15,
                        aT: 25,
                        a: 1,
                        b: 107
                    },
                    "35": {
                        Q: 0,
                        x: "visible",
                        bS: 5,
                        R: "#000",
                        b: -90,
                        j: "absolute",
                        a: -160,
                        z: 1,
                        T: 0,
                        S: 0,
                        d: 528,
                        k: "div",
                        cQ: 0.66,
                        c: 942,
                        cR: 0.66,
                        gg: "0"
                    },
                    "41": {
                        c: 942,
                        d: 53,
                        I: "None",
                        e: 0.5,
                        J: "None",
                        K: "None",
                        g: "#E8EBED",
                        L: "None",
                        M: 0,
                        bF: "35",
                        N: 0,
                        A: "#999",
                        x: "visible",
                        j: "absolute",
                        B: "#D8DDE4",
                        P: 0,
                        O: 0,
                        C: "#D8DDE4",
                        z: 3,
                        k: "div",
                        D: "#999",
                        a: 0,
                        b: 261
                    },
                    "46": {
                        c: 942,
                        d: 107,
                        I: "Solid",
                        e: 0.8,
                        J: "Solid",
                        gg: "0",
                        K: "Solid",
                        g: "#000",
                        L: "Solid",
                        M: 0,
                        bF: "35",
                        N: 0,
                        A: "#999",
                        j: "absolute",
                        x: "visible",
                        B: "#999",
                        P: 0,
                        O: 0,
                        C: "#999",
                        z: 11,
                        Q: 0,
                        D: "#999",
                        R: "#000",
                        k: "div",
                        S: 0,
                        a: 0,
                        T: 0,
                        b: 0
                    }
                }
            }], {}, h, {}, null, false, true, -1, true, false, false, true, true);
        d[f] = c.API;
        document.getElementById(g).setAttribute("HYP_dn", f);
        c.z_o(this.body)
    })();
})();