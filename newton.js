!function(a) {
    function b(a) {
        return this instanceof b ? (this.particles = [], this.edges = [], this.material = a, 
        void 0) : new b(a);
    }
    b.prototype.addParticle = function(a) {
        this.particles.push(a);
    }, b.prototype.addEdge = function(a) {
        this.edges.push(a);
    }, b.prototype.each = function(a, b) {
        for (var c, d = this.particles.length; d--; ) c = this.particles[d], c[a].apply(c, b);
    }, b.prototype.callback = function(a) {
        for (var b = this.particles.length; b--; ) a(this.particles[b]);
    }, a.Body = b;
}("undefined" == typeof exports ? this.Newton = this.Newton || {} : exports), function(a) {
    function b(c, d, e) {
        return this instanceof b ? (this.p1 = c, this.p2 = d, this.material = e || Material.simple, 
        this.compute(), this._rect = new a.Rectangle(0, 0, 0, 0), void 0) : new b(c, d, e);
    }
    b.COLLISION_TOLERANCE = .5, b.getAbc = function(a, b, c, d) {
        var e = d - b, f = a - c, g = e * a + f * b;
        return {
            a: e,
            b: f,
            c: g
        };
    }, b.prototype.compute = function() {
        this.anchor = this.p1.position.clone(), this.vector = this.p2.position.clone().sub(this.p1.position), 
        this.length = this.vector.getLength(), this.angle = this.vector.getAngle(), this.normal = this.vector.clone().turnLeft().unit(), 
        this.unit = this.vector.clone().unit(), this.bounds = a.Rectangle.fromVectors(this.p1.position, this.p2.position).expand(b.COLLISION_TOLERANCE);
    }, b.prototype.getCoords = function() {
        return {
            x1: this.p1.position.x,
            y1: this.p1.position.y,
            x2: this.p2.position.x,
            y2: this.p2.position.y
        };
    }, b.prototype.getRepelled = function(b, c) {
        return new a.Vector(b, c).add(this.normal);
    }, b.prototype.getProjection = function(a) {
        var b = this.vector.getDot(a);
        return this.unit.clone().scale(b);
    }, b.prototype.getAngleDelta = function(a) {
        return this.angle - a.getAngle();
    }, b.prototype.getAbc = function() {
        return b.getAbc(this.p1.position.x, this.p1.position.y, this.p2.position.x, this.p2.position.y);
    }, b.prototype.findIntersection = function(a, c, d, e) {
        var f = this.bounds, g = this._rect.set(a, c, d, e).expand(b.COLLISION_TOLERANCE);
        if (!f.overlaps(g)) return !1;
        var h = this.getAbc(), i = b.getAbc(a, c, d, e), j = h.a * i.b - i.a * h.b;
        if (0 === j) return !1;
        var k = (i.b * h.c - h.b * i.c) / j, l = (h.a * i.c - i.a * h.c) / j;
        return f.contains(k, l) && g.contains(k, l) ? {
            x: k,
            y: l
        } : !1;
    }, b.prototype.getReflection = function(a, b) {
        var c = this.normal.clone(), d = this.material.friction, e = c.multScalar(a.getDot(c)).multScalar(b), f = a.clone().sub(e).multScalar(1 - d), g = f.sub(e);
        return g;
    }, a.Edge = b;
}("undefined" == typeof exports ? this.Newton = this.Newton || {} : exports), function() {
    var a = 0, b = [ "ms", "moz", "webkit", "o" ], c = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
    Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, !!window.chrome && !c;
    for (var d = 0; d < b.length && !window.requestAnimationFrame; ++d) window.requestAnimationFrame = window[b[d] + "RequestAnimationFrame"], 
    window.cancelAnimationFrame = window[b[d] + "CancelAnimationFrame"] || window[b[d] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
        var c = new Date().getTime(), d = Math.max(0, 16 - (c - a)), e = window.setTimeout(function() {
            b(c + d);
        }, d);
        return a = c + d, e;
    }, window.cancelAnimationFrame = function(a) {
        clearTimeout(a);
    });
}("undefined" == typeof exports ? this.Newton = this.Newton || {} : exports), function(a) {
    function b() {
        return this instanceof b ? (this.bodies = [], this.forces = [], this.watchedLayers = [ this ], 
        this.wrapper = void 0, void 0) : new b();
    }
    b.prototype.respondTo = function(a) {
        return this.watchedLayers = a || [], this;
    }, b.prototype.addForce = function(a) {
        return this.forces.push(a), this;
    }, b.prototype.wrapIn = function(a) {
        return this.wrapper = a, this;
    }, b.prototype.addBody = function(a) {
        return this.bodies.push(a), this;
    }, b.prototype.integrate = function(a) {
        var b, c, d, e, f, g, h, i;
        for (f = [], g = [], i = [], b = 0, c = this.bodies.length; c > b; b++) g = g.concat(this.bodies[b].particles);
        for (b = 0, c = this.watchedLayers.length; c > b; b++) {
            f = f.concat(this.watchedLayers[b].forces);
            for (var d = 0, e = this.watchedLayers[b].bodies.length; e > d; d++) i = i.concat(this.watchedLayers[b].bodies[d].edges);
        }
        for (b = 0, c = g.length; c > b; b++) {
            for (h = g[b], d = 0, e = f.length; e > d; d++) f[d].applyTo(h);
            h.integrate(a), this.wrapper && h.wrap(this.wrapper), h.collide(i);
        }
    }, a.Layer = b;
}("undefined" == typeof exports ? this.Newton = this.Newton || {} : exports), function(a) {
    function b(c, d, e) {
        return this instanceof b ? (this.angle = c, this.strength = d, this.vector = new a.Vector(0, d).rotate(c), 
        void 0) : new b(c, d, e);
    }
    b.prototype.setAngle = function(a) {
        this.angle = a, this.vector.set(0, this.strength).rotate(this.angle);
    }, b.prototype.setStrength = function(a) {
        this.strength = a, this.vector.set(0, this.strength).rotate(this.angle);
    }, b.prototype.applyTo = function(a) {
        a.accelerateVector(this.vector);
    }, a.LinearGravity = b;
}("undefined" == typeof exports ? this.Newton = this.Newton || {} : exports), function(a) {
    function b(a) {
        return this instanceof b ? (a = a || {}, this.weight = a.weight || 1, this.restitution = a.restitution || 1, 
        this.friction = a.friction || 0, this.maxVelocity = a.maxVelocity || 100, this.maxVelocitySquared = this.maxVelocity * this.maxVelocity, 
        void 0) : new b(a);
    }
    b.prototype.setMaxVelocity = function(a) {
        return this.maxVelocity = a, this.maxVelocitySquared = a * a, this;
    }, b.simple = new b(), a.Material = b;
}("undefined" == typeof exports ? this.Newton = this.Newton || {} : exports), function(a) {
    function b(a, b) {
        return (a % b + b) % b;
    }
    function c(b, d, e, f) {
        return this instanceof c ? (this.position = new a.Vector(b, d), this.lastPosition = this.position.clone(), 
        this.lastValidPosition = this.position.clone(), this.velocity = new a.Vector(0, 0), 
        this.acceleration = new a.Vector(0, 0), this.material = f || a.Material.simple, 
        this.size = e || 1, this.randomDrag = Math.random() * c.randomness + 1e-10, void 0) : new c(b, d, e, f);
    }
    c.randomness = 25, c.prototype.integrate = function(a) {
        this.velocity.copy(this.position).sub(this.lastPosition);
        var b = Math.min(1, this.velocity.getSquaredLength() / (this.material.maxVelocitySquared + this.randomDrag));
        this.velocity.scale(1 - b), this.acceleration.scale(1 - b).scale(a * a), this.lastPosition.copy(this.position), 
        this.position.add(this.velocity).add(this.acceleration), this.acceleration.zero(), 
        this.lastValidPosition.copy(this.lastPosition);
    }, c.prototype.placeAt = function(a, b) {
        return this.position.set(a, b), this.lastPosition.copy(this.position), this.lastValidPosition.copy(this.lastPosition), 
        this;
    }, c.prototype.moveBy = function(a, b) {
        return this.lastPosition = this.position.clone(), this.position.add(a, b), this;
    }, c.prototype.setVelocity = function(a, b) {
        return this.lastPosition.copy(this.position).subXY(a, b), this;
    }, c.prototype.contain = function(a) {
        this.position.x > a.right ? this.position.x = this.lastPosition.x = this.lastValidPosition.x = a.right : this.position.x < a.left && (this.position.x = this.lastPosition.x = this.lastValidPosition.x = a.left), 
        this.position.y > a.bottom ? this.position.y = this.lastPosition.y = this.lastValidPosition.y = a.bottom : this.position.y < a.top && (this.position.y = this.lastPosition.y = this.lastValidPosition.y = a.top);
    }, c.prototype.wrap = function(a) {
        var c = this.position.clone().sub(this.lastPosition), d = b(this.position.x, a.width) + a.left, e = b(this.position.y, a.height) + a.top;
        this.lastPosition.x = this.lastValidPosition.x = d - c.x, this.lastPosition.y = this.lastValidPosition.y = e - c.y, 
        this.position.x = d, this.position.y = e;
    }, c.prototype.accelerateVector = function(a) {
        this.acceleration.add(a);
    }, c.prototype.force = function(a, b, c) {
        c = c || this.getMass(), this.acceleration.add({
            x: a / c,
            y: b / c
        });
    }, c.prototype.getMass = function() {
        return this.size * this.material.weight;
    }, c.prototype.getSquaredSpeed = function() {
        return this.velocity.getSquaredLength();
    }, c.prototype.attractSquare = function(b, c, d, e) {
        var f = this.getMass(), g = new a.Vector(b, c).sub(this.position), h = Math.max(g.getLength(), e || 1), i = d * f / (h * h), j = d / (d + f);
        this.acceleration.add({
            x: -i * (g.x / h) * j,
            y: -i * (g.y / h) * j
        });
    }, c.prototype.collide = function(a) {
        for (var b, c, d, e, f, g, h, i = a.length; i--; ) h = this === a[i].p1 || this === a[i].p2, 
        c = !h && a[i].findIntersection(this.lastPosition.x, this.lastPosition.y, this.position.x, this.position.y), 
        c && (d = c.x - this.lastPosition.x, e = c.y - this.lastPosition.y, b ? (f = b.dx * b.dx + b.dy * b.dy, 
        g = d * d + e * e, f > g && (b = {
            dx: d,
            dy: e,
            x: c.x,
            y: c.y,
            wall: a[i]
        })) : b = {
            dx: d,
            dy: e,
            x: c.x,
            y: c.y,
            wall: a[i]
        });
        if (b) {
            var j = this.position.clone().sub(this.lastPosition), k = b.wall.getRepelled(b.x, b.y), l = b.wall.getReflection(j, this.material.restitution);
            return this.position.copy(k), this.setVelocity(l.x, l.y), this.lastValidPosition = k, 
            b;
        }
    }, a.Particle = c;
}("undefined" == typeof exports ? this.Newton = this.Newton || {} : exports), function(a) {
    function b(a, b, c) {
        return (1 << 24) + (a << 16) + (b << 8) + c;
    }
    function c(a, b, d) {
        return this instanceof c ? (this.stage = new PIXI.Stage(0, !0), this.stage.setInteractive(!0), 
        this.width = b, this.height = d, this.renderer = PIXI.autoDetectRenderer(this.width, this.height, null, !1, !0), 
        this.renderer.view.style.display = "block", a.appendChild(this.renderer.view), this.infoText = new PIXI.Text("FPS: ??", {
            fill: "#ffffff",
            font: "10pt Helvetica"
        }), this.stage.addChild(this.infoText), this.graphics = new PIXI.Graphics(), this.stage.addChild(this.graphics), 
        this.callback = this.callback.bind(this), void 0) : new c(a);
    }
    c.prototype = {
        callback: function(a, b) {
            var c = 0, d = 0;
            this.graphics.clear();
            for (var e = 0, f = b.layers.length; f > e; e++) {
                for (var g = 0, h = b.layers[e].bodies.length; h > g; g++) c += this.drawParticles(b.layers[e].bodies[g].particles), 
                d += this.drawEdges(b.layers[e].bodies[g].edges);
                this.drawForces(b.layers[e].forces);
            }
            this.infoText.setText("FPS: " + b.fps + "\nparticles: " + c + "\nedges: " + d), 
            this.renderer.render(this.stage);
        },
        drawForces: function(b) {
            this.graphics.lineStyle(2, 16777215, .3);
            for (var c = 0, d = b.length; d > c; c++) {
                var e = b[c];
                e instanceof a.RadialGravity && (this.graphics.beginFill(16777215, .2), this.graphics.drawCircle(e.x, e.y, .5 * e.strength * e.strength), 
                this.graphics.endFill());
            }
        },
        drawParticles: function(a) {
            for (var c, d, e, f, g, h = 0, i = a.length; i > h; h++) c = a[h], d = c.position, 
            e = c.lastValidPosition, f = c.getMass(), g = ~~(128 * ((f - 1) / 5)), this.graphics.lineStyle(f, b(255, 28 + g, 108 + g), 1), 
            this.graphics.moveTo(e.x - 1, e.y), this.graphics.lineTo(d.x + 1, d.y);
            return a.length;
        },
        drawEdges: function(a) {
            this.graphics.lineStyle(1, 16777215, .5);
            for (var b, c = a.length; c--; ) b = a[c].getCoords(), this.graphics.moveTo(b.x1, b.y1), 
            this.graphics.lineTo(b.x2, b.y2);
            return a.length;
        }
    }, a.PixiRenderer = c;
}("undefined" == typeof exports ? this.Newton = this.Newton || {} : exports), function(a) {
    function b(a, c, d, e) {
        return this instanceof b ? (this.x = a, this.y = c, this.strength = d, void 0) : new b(a, c, d, e);
    }
    b.prototype.setLocation = function(a, b) {
        this.x = a, this.y = b;
    }, b.prototype.setStrength = function(a) {
        this.strength = a;
    }, b.prototype.applyTo = function(a) {
        a.attractSquare(this.x, this.y, this.strength, 20);
    }, a.RadialGravity = b;
}("undefined" == typeof exports ? this.Newton = this.Newton || {} : exports), function(a) {
    function b(a, c, d, e) {
        return this instanceof b ? (this.set.apply(this, arguments), void 0) : new b(a, c, d, e);
    }
    b.fromVectors = function(a, c) {
        return new b(a.x, a.y, c.x, c.y);
    }, b.prototype = {
        set: function(a, b, c, d) {
            return this.left = Math.min(a, c), this.top = Math.min(b, d), this.right = Math.max(c, a), 
            this.bottom = Math.max(d, b), this.width = this.right - this.left, this.height = this.bottom - this.top, 
            this;
        },
        contains: function(a, b) {
            return a >= this.left && a <= this.right && b >= this.top && b <= this.bottom;
        },
        overlaps: function(a) {
            return !(a.left > this.right || a.right < this.left || a.top > this.bottom || a.bottom < this.top);
        },
        expand: function(a) {
            return this.left -= a, this.right += a, this.top -= a, this.bottom += a, this;
        }
    }, a.Rectangle = b;
}("undefined" == typeof exports ? this.Newton = this.Newton || {} : exports), function(a) {
    function b(a) {
        return this instanceof b ? (this.ctx = a.getContext("2d"), this.width = a.width, 
        this.height = a.height, this.callback = this.callback.bind(this), void 0) : new b(a);
    }
    b.prototype = {
        callback: function(a, b) {
            var c = this.ctx, d = 0, e = 0;
            this.clear(c, a);
            for (var f = 0, g = b.layers.length; g > f; f++) {
                for (var h = 0, i = b.layers[f].bodies.length; i > h; h++) d += this.drawParticles(c, b.layers[f].bodies[h].particles), 
                e += this.drawEdges(c, b.layers[f].bodies[h].edges);
                this.drawForces(c, b.layers[f].forces);
            }
            this.drawCounts(c, d, e), this.drawFPS(c, b);
        },
        clear: function(a) {
            a.save(), a.fillStyle = "#000000", a.fillRect(0, 0, this.width, this.height), a.restore();
        },
        drawForces: function(b, c) {
            b.save(), b.lineWidth = 2, b.strokeStyle = "rgba(255, 255, 255, 0.25)", b.fillStyle = "rgba(255, 255, 255, 0.15)";
            for (var d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                f instanceof a.RadialGravity && (b.beginPath(), b.arc(f.x, f.y, .5 * f.strength * f.strength, 0, 2 * Math.PI, !1), 
                b.fill());
            }
            b.restore();
        },
        drawParticles: function(a, b) {
            var c, d, e, f, g;
            a.save(), a.lineCap = "butt";
            for (var h = 0, i = b.length; i > h; h++) c = b[h], d = c.position, e = c.lastValidPosition, 
            f = c.getMass(), g = ~~(128 * ((f - 1) / 5)), a.beginPath(), a.lineWidth = f, a.strokeStyle = "rgba(" + [ 255, 28 + g, 108 + g ].join(",") + ", 1)", 
            a.moveTo(e.x, e.y), a.lineTo(d.x, d.y + 2), a.stroke();
            return a.restore(), b.length;
        },
        drawEdges: function(a, b) {
            a.save(), a.strokeStyle = "rgba(255, 255, 255, 0.2)", a.lineWidth = 1;
            for (var c, d = b.length; d--; ) c = b[d].getCoords(), a.beginPath(), a.moveTo(c.x1, c.y1), 
            a.lineTo(c.x2, c.y2), a.closePath(), a.stroke();
            return a.restore(), b.length;
        },
        drawCounts: function(a, b, c) {
            a.save(), a.fillStyle = "#fff", a.font = "10pt Helvetica", a.fillText("Particles: " + b, 10, 20), 
            a.fillText("Edges: " + c, 10, 40), a.restore();
        },
        drawFPS: function(a, b) {
            var c = "FPS: " + b.fps;
            a.save(), a.fillStyle = "#fff", a.font = "10pt Helvetica", a.fillText(c, 10, 60), 
            a.restore();
        }
    }, a.Renderer = b;
}("undefined" == typeof exports ? this.Newton = this.Newton || {} : exports), function(a) {
    function b(a, c, d) {
        return this instanceof b ? (this.simulator = a, this.renderer = c, this.step = this.getStep(), 
        this.lastTime = 0, this.running = !1, this.fps = 0, this.frames = 0, this.countTime = 0, 
        this.countInterval = 250, this.accumulator = 0, this.integrationStep = 1e3 / (d || 60), 
        this.layers = [], void 0) : new b(a, c, d);
    }
    b.prototype.start = function() {
        this.running = !0, this.countTime = Date.now() + 1e3, requestAnimationFrame(this.step);
    }, b.prototype.stop = function() {
        this.running = !1;
    }, b.prototype.integrate = function(a) {
        for (var b = 0, c = this.layers.length; c > b; b++) this.layers[b].integrate(a);
    }, b.prototype.Layer = function() {
        var b = a.Layer();
        return this.layers.push(b), b;
    }, b.prototype.getStep = function() {
        var a = this;
        return function() {
            if (a.running) {
                var b = Date.now(), c = b - a.lastTime;
                for (c > 100 && (c = 0), a.accumulator += c; a.accumulator >= a.integrationStep; ) a.simulator(a.integrationStep, a), 
                a.integrate(a.integrationStep), a.accumulator -= a.integrationStep;
                a.renderer(c, a), a.frames++, b >= a.countTime && (a.fps = (1e3 * (a.frames / (a.countInterval + b - a.countTime))).toFixed(0), 
                a.frames = 0, a.countTime = b + a.countInterval), a.lastTime = b, requestAnimationFrame(a.step);
            }
        };
    }, a.Simulator = b;
}("undefined" == typeof exports ? this.Newton = this.Newton || {} : exports), function(a) {
    function b(a, c) {
        return this instanceof b ? (this.x = a, this.y = c, void 0) : new b(a, c);
    }
    b.prototype.clone = function() {
        return new a.Vector(this.x, this.y);
    }, b.prototype.copy = function(a) {
        return this.x = a.x, this.y = a.y, this;
    }, b.prototype.zero = function() {
        return this.x = 0, this.y = 0, this;
    }, b.prototype.set = function(a, b) {
        return this.x = a, this.y = b, this;
    }, b.prototype.add = function(a) {
        return this.x += a.x, this.y += a.y, this;
    }, b.prototype.sub = function(a) {
        return this.x -= a.x, this.y -= a.y, this;
    }, b.prototype.subXY = function(a, b) {
        return this.x -= a, this.y -= b, this;
    }, b.prototype.mult = b.prototype.multVector = function(a) {
        return this.x *= a.x, this.y *= a.y, this;
    }, b.prototype.reverse = function() {
        return this.x = -this.x, this.y = -this.y, this;
    }, b.prototype.div = function(a) {
        return this.x /= a.x, this.y /= a.y, this;
    }, b.prototype.multScalar = b.prototype.scale = function(a) {
        return this.x *= a, this.y *= a, this;
    }, b.prototype.unit = function() {
        return this.scale(1 / this.getLength()), this;
    }, b.prototype.turnRight = function() {
        var a = this.x, b = this.y;
        return this.x = -b, this.y = a, this;
    }, b.prototype.turnLeft = function() {
        var a = this.x, b = this.y;
        return this.x = b, this.y = -a, this;
    }, b.prototype.rotate = function(a) {
        var b = this.x, c = this.y, d = Math.sin(a), e = Math.cos(a);
        return this.x = b * e - c * d, this.y = b * d + c * e, this;
    }, b.prototype.getDot = function(a) {
        return this.x * a.x + this.y * a.y;
    }, b.prototype.getCross = function(a) {
        return this.x * a.y + this.y * a.x;
    }, b.prototype.getLength = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }, b.prototype.getSquaredLength = function() {
        return this.x * this.x + this.y * this.y;
    }, b.prototype.getAngle = function() {
        return Math.atan2(this.y, this.x);
    }, a.Vector = b;
}("undefined" == typeof exports ? this.Newton = this.Newton || {} : exports);