{"version":3,"file":"newton.js","sources":["src/body.js","src/boxconstraint.js","src/distanceconstraint.js","src/edge.js","src/frame.js","src/layer.js","src/lineargravity.js","src/material.js","src/particle.js","src/pixirenderer.js","src/radialgravity.js","src/rectangle.js","src/renderer.js","src/rigidconstraint.js","src/simulator.js","src/vector.js","src/webglrenderer.js","src/wrapconstraint.js"],"names":["Newton","Body","material","this","particles","edges","constraints","simulator","undefined","layer","prototype","addTo","Error","addParticles","addEdges","addConstraints","addParticle","particle","push","Particle","apply","Array","slice","call","arguments","addEdge","edge","Edge","addConstraint","constraint","DistanceConstraint","RigidConstraint","exports","BoxConstraint","left","top","right","bottom","rect","Rectangle","category","priority","resolve","time","allParticles","i","len","length","contain","p1","p2","stiffness","distance","getDistance","isDestroyed","pos1","position","pos2","diff","clone","sub","getLength","delta","invmass1","getMass","invmass2","factor","correction1","scale","correction2","correct","getCoords","x1","x","y1","y","x2","y2","Material","simple","compute","_rect","COLLISION_TOLERANCE","getAbc","a","b","c","anchor","vector","angle","getAngle","normal","turnLeft","unit","bounds","fromVectors","expand","getRepelled","Vector","add","getProjection","dot","getDot","getAngleDelta","findIntersection","bounds1","bounds2","set","overlaps","l1","l2","det","contains","scratch","getReflection","velocity","restitution","dir","friction","velN","multScalar","velT","reflectedVel","timeoutFrame","currTime","Date","getTime","timeToCall","Math","max","lastTime","id","setTimeout","cancelTimeoutFrame","clearTimeout","window","vendors","isOpera","opera","navigator","userAgent","indexOf","Object","toString","HTMLElement","chrome","requestAnimationFrame","cancelAnimationFrame","frame","bind","cancelFrame","Layer","bodies","forces","watchedLayers","wrapper","container","cachedParticles","cachedForces","cachedEdges","respondTo","layers","addForce","force","wrapIn","containBy","addBody","body","collect","ilen","j","jlen","watched","integrate","applyTo","constrain","wrap","collide","LinearGravity","strength","falloff","rotate","setAngle","setStrength","pinned","accelerateVector","options","weight","maxVelocity","maxVelocitySquared","setMaxVelocity","v","size","lastPosition","lastValidPosition","acceleration","randomDrag","colliding","randomness","copy","drag","min","getSquaredLength","zero","placeAt","moveTo","shiftTo","deltaX","deltaY","addXY","destroy","moveBy","dx","dy","subXY","pin","Infinity","setVelocity","applyForce","mass","getSquaredSpeed","attractSquare","m","minDist","r","f","ratio","nearest","intersect","oldDistance","newDistance","partOfEdge","wall","bouncePoint","reflectedVelocity","rgbToHex","g","PixiRenderer","el","width","height","stage","PIXI","Stage","setInteractive","renderer","autoDetectRenderer","view","style","display","appendChild","infoText","Text","fill","font","addChild","graphics","Graphics","callback","sim","clear","drawParticles","drawEdges","drawForces","setText","fps","render","lineStyle","RadialGravity","beginFill","drawCircle","endFill","pos","last","brightness","lineTo","setLocation","v1","v2","amount","Renderer","ctx","getContext","drawConstraints","drawCounts","drawFPS","save","fillStyle","fillRect","restore","lineWidth","strokeStyle","beginPath","arc","PI","lineCap","lineJoin","stroke","coords","closePath","centerMass","counts","fillText","text","iterations","deltas","getDeltas","getCenterMass","center","getAngleAbout","angleDelta","getAngleFrom","cos","sin","q","correction","noop","prioritySort","Simulator","preSimulator","integrationFps","step","_step","running","frames","countTime","countInterval","accumulator","simulationStep","start","now","stop","simulate","cull","array","splice","entity","link","sort","findParticle","radius","found","newLayer","toFixed","mult","multVector","reverse","div","scalar","turnRight","getCross","sqrt","atan2","getGLContext","canvas","gl","names","e","createShaderProgram","vsText","fsText","vs","createShader","VERTEX_SHADER","fs","FRAGMENT_SHADER","shaderSource","compileShader","getShaderParameter","COMPILE_STATUS","console","error","getShaderInfoLog","program","createProgram","attachShader","linkProgram","log","getProgramParameter","LINK_STATUS","createCircleTexture","document","createElement","rad","createTexture","data","texture","bindTexture","TEXTURE_2D","texImage2D","RGBA","UNSIGNED_BYTE","texParameteri","TEXTURE_MIN_FILTER","LINEAR","TEXTURE_MAG_FILTER","TEXTURE_WRAP_S","CLAMP_TO_EDGE","TEXTURE_WRAP_T","generateMipmap","GLRenderer","vertices","sizes","vArray","Float32Array","sArray","viewport","viewportArray","initShaders","initBuffers","particleTexture","blendFunc","SRC_ALPHA","ONE","enable","BLEND","PARTICLE_VS","join","PARTICLE_FS","particleShader","uniforms","getUniformLocation","attributes","getAttribLocation","particlePositionBuffer","createBuffer","particleSizeBuffer","COLOR_BUFFER_BIT","DEPTH_BUFFER_BIT","activeTexture","TEXTURE0","useProgram","uniform2fv","bindBuffer","ARRAY_BUFFER","bufferData","STATIC_DRAW","vertexAttribPointer","FLOAT","enableVertexAttribArray","drawArrays","POINTS","mod","WrapConstraint","newX","newY"],"mappings":"CAAC,SAAUA;IAET;IAEA,SAASC,KAAKC;QACZ,OAAMC,gBAAgBF,QAEtBE,KAAKC,gBACLD,KAAKE,YACLF,KAAKG;QAELH,KAAKD,WAAWA,UAEhBC,KAAKI,YAAYC,QACjBL,KAAKM,QAAQD,QAPbL,UAFoC,IAAIF,KAAKC;;IAY/CD,KAAKS,UAAUC,QAAQ,SAASJ,WAAWE;QACzC,IAAIN,KAAKI,WAAW,MAAM,IAAIK,MAAM;QAGpCL,UAAUM,aAAaV,KAAKC,YAC5BG,UAAUO,SAASX,KAAKE,QACxBE,UAAUQ,eAAeZ,KAAKG;QAE9BH,KAAKI,YAAYA,WACjBJ,KAAKM,QAAQA;OAGfR,KAAKS,UAAUM,cAAc,SAASC;QACpCd,KAAKC,UAAUc,KAAKD,WACpBA,SAASR,QAAQN,KAAKM,OAClBN,KAAKI,aAAWJ,KAAKI,UAAUM,eAAcI;OAGnDhB,KAAKS,UAAUS,WAAW;QACxB,IAAIF,WAAWjB,OAAOmB,SAASC,MAC7BpB,OAAOmB,UAAUE,MAAMX,UAAUY,MAAMC,KAAKC;QAE9C,OADArB,KAAKa,YAAYC,WACVA;OAGThB,KAAKS,UAAUe,UAAU,SAASC;QAChCvB,KAAKE,MAAMa,KAAKQ,OACZvB,KAAKI,aAAWJ,KAAKI,UAAUO,WAAUY;OAG/CzB,KAAKS,UAAUiB,OAAO;QACpB,IAAID,OAAO1B,OAAO2B,KAAKP,MACrBpB,OAAO2B,MAAMN,MAAMX,UAAUY,MAAMC,KAAKC;QAE1C,OADArB,KAAKsB,QAAQC,OACNA;OAGTzB,KAAKS,UAAUkB,gBAAgB,SAASC;QACtC1B,KAAKG,YAAYY,KAAKW,aAClB1B,KAAKI,aAAWJ,KAAKI,UAAUQ,iBAAgBc;OAGrD5B,KAAKS,UAAUoB,qBAAqB;QAClC,IAAID,aAAa7B,OAAO8B,mBAAmBV,MACzCpB,OAAO8B,oBAAoBT,MAAMX,UAAUY,MAAMC,KAAKC;QAExD,OADArB,KAAKyB,cAAcC,aACZA;OAGT5B,KAAKS,UAAUqB,kBAAkB;QAC/B,IAAIF,aAAa7B,OAAO+B,gBAAgBX,MACtCpB,OAAO+B,iBAAiBV,MAAMX,UAAUY,MAAMC,KAAKC;QAErD,OADArB,KAAKyB,cAAcC,aACZA;OAGT7B,OAAOC,OAAOA;EAEM,sBAAZ+B,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UC3ExE,SAAUhC;IAET;IAEA,SAASiC,cAAcC,MAAMC,KAAKC,OAAOC,QAAQjC;QAC/C,OAAMD,gBAAgB8B,iBAEtB9B,KAAKmC,OAAOtC,OAAOuC,UAAUL,MAAMC,KAAKC,OAAOC;QAC/ClC,KAAKC,YAAYA,WADjBD,UAF6C,IAAI8B,cAAcC,MAAMC,KAAKC,OAAOC,QAAQjC;;IAM3F6B,cAAcvB,UAAU8B,WAAW,iBACnCP,cAAcvB,UAAU+B,WAAW;IAEnCR,cAAcvB,UAAUC,QAAQ,SAASJ;QACvCA,UAAUQ,iBAAgBZ;OAG5B8B,cAAcvB,UAAUgC,UAAU,SAASC,MAAMC;QAI/C,KAHA,IAAIxC,YAAYD,KAAKC,aAAawC,cAC9BC,IAAI,IAAIC,MAAM1C,UAAU2C,UAEnBF,IAAIC,OACX1C,UAAUyC,GAAGG,QAAQ7C,KAAKmC;OAI9BtC,OAAOiC,gBAAgBA;EAEH,sBAAZD,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UC7BxE,SAAUhC;IAET;IAEA,SAAS8B,mBAAmBmB,IAAIC,IAAIC,WAAWC;QAC7C,OAAMjD,gBAAgB2B,sBAEtB3B,KAAK8C,KAAKA,IACV9C,KAAK+C,KAAKA,IACV/C,KAAKgD,YAAYA,aAAa;QAC9BhD,KAAKiD,WAAgC,sBAAbA,WAA4BjD,KAAKkD,gBAAgBD;QAEzEjD,KAAKmD,eAAc,GALnBnD,UAFkD,IAAI2B,mBAAmBmB,IAAIC,IAAIC,WAAWC;;IAU9FtB,mBAAmBpB,UAAU8B,WAAW,UACxCV,mBAAmBpB,UAAU+B,WAAW;IAExCX,mBAAmBpB,UAAU2C,cAAc;QACzC,IAAIE,OAAOpD,KAAK8C,GAAGO,UACfC,OAAOtD,KAAK+C,GAAGM,UACfE,OAAOD,KAAKE,QAAQC,IAAIL;QAC5B,OAAOG,KAAKG;OAGd/B,mBAAmBpB,UAAUgC,UAAU;QACrC,IAAIvC,KAAK8C,GAAGK,eAAenD,KAAK+C,GAAGI,aAEjC,OADAnD,KAAKmD,eAAc,GACnB;QAGF,IAAIC,OAAOpD,KAAK8C,GAAGO,UACfC,OAAOtD,KAAK+C,GAAGM,UACfM,QAAQL,KAAKE,QAAQC,IAAIL,OACzBR,SAASe,MAAMD,aACfE,WAAW,IAAI5D,KAAK8C,GAAGe,WACvBC,WAAW,IAAI9D,KAAK+C,GAAGc,WACvBE,UAAUnB,SAAS5C,KAAKiD,aAAaL,UAAUgB,WAAWE,aAAa9D,KAAKgD,WAC5EgB,cAAcL,MAAMH,QAAQS,MAAMF,SAASH,WAC3CM,cAAcP,MAAMH,QAAQS,OAAOF,SAASD;QAEhD9D,KAAK8C,GAAGqB,QAAQH,cAChBhE,KAAK+C,GAAGoB,QAAQD;OAGlBvC,mBAAmBpB,UAAU6D,YAAY;QACvC;YACEC,IAAIrE,KAAK8C,GAAGO,SAASiB;YACrBC,IAAIvE,KAAK8C,GAAGO,SAASmB;YACrBC,IAAIzE,KAAK+C,GAAGM,SAASiB;YACrBI,IAAI1E,KAAK+C,GAAGM,SAASmB;;OAIzB3E,OAAO8B,qBAAqBA;EAER,sBAAZE,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UCxDxE,SAAUhC;IAET;IAEA,SAAS2B,KAAKsB,IAAIC,IAAIhD;QACpB,OAAMC,gBAAgBwB,QACtBxB,KAAK8C,KAAKA,IACV9C,KAAK+C,KAAKA,IACV/C,KAAKD,WAAWA,YAAY4E,SAASC;QAErC5E,KAAK6E,WAEL7E,KAAK8E,QAAQ,IAAIjF,OAAOuC,UAAU,GAAG,GAAG,GAAG,IAN3CpC,UADoC,IAAIwB,KAAKsB,IAAIC,IAAIhD;;IAUvDyB,KAAKuD,sBAAsB,IAE3BvD,KAAKwD,SAAS,SAASX,IAAIE,IAAIE,IAAIC;QACjC,IAAIO,IAAIP,KAAKH,IACTW,IAAIb,KAAKI,IACTU,IAAIF,IAAIZ,KAAKa,IAAIX;QAErB;YAASU,GAAGA;YAAGC,GAAGA;YAAGC,GAAGA;;OAI1B3D,KAAKjB,UAAUsE,UAAU;QACvB7E,KAAKoF,SAASpF,KAAK8C,GAAGO,SAASG,SAC/BxD,KAAKqF,SAASrF,KAAK+C,GAAGM,SAASG,QAAQC,IAAIzD,KAAK8C,GAAGO;QACnDrD,KAAK4C,SAAS5C,KAAKqF,OAAO3B,aAC1B1D,KAAKsF,QAAQtF,KAAKqF,OAAOE,YACzBvF,KAAKwF,SAASxF,KAAKqF,OAAO7B,QAAQiC,WAAWC;QAC7C1F,KAAK0F,OAAO1F,KAAKqF,OAAO7B,QAAQkC,QAChC1F,KAAK2F,SAAS9F,OAAOuC,UAClBwD,YAAY5F,KAAK8C,GAAGO,UAAUrD,KAAK+C,GAAGM,UACtCwC,OAAOrE,KAAKuD;OAGjBvD,KAAKjB,UAAU6D,YAAY;QACzB;YACEC,IAAIrE,KAAK8C,GAAGO,SAASiB;YACrBC,IAAIvE,KAAK8C,GAAGO,SAASmB;YACrBC,IAAIzE,KAAK+C,GAAGM,SAASiB;YACrBI,IAAI1E,KAAK+C,GAAGM,SAASmB;;OAIzBhD,KAAKjB,UAAUuF,cAAc,SAASxB,GAAGE;QACvC,OAAO,IAAI3E,OAAOkG,OAAOzB,GAAGE,GAAGwB,IAAIhG,KAAKwF;OAG1ChE,KAAKjB,UAAU0F,gBAAgB,SAASZ;QACtC,IAAIa,MAAMlG,KAAKqF,OAAOc,OAAOd;QAC7B,OAAOrF,KAAK0F,KAAKlC,QAAQS,MAAMiC;OAGjC1E,KAAKjB,UAAU6F,gBAAgB,SAASf;QACtC,OAAOrF,KAAKsF,QAAQD,OAAOE;OAG7B/D,KAAKjB,UAAUyE,SAAS;QACtB,OAAOxD,KAAKwD,OAAOhF,KAAK8C,GAAGO,SAASiB,GAAGtE,KAAK8C,GAAGO,SAASmB,GACtDxE,KAAK+C,GAAGM,SAASiB,GAAGtE,KAAK+C,GAAGM,SAASmB;OAGzChD,KAAKjB,UAAU8F,mBAAmB,SAAShC,IAAIE,IAAIE,IAAIC;QAGrD,IAAI4B,UAAUtG,KAAK2F,QACfY,UAAUvG,KAAK8E,MAAM0B,IAAInC,IAAIE,IAAIE,IAAIC,IAAImB,OAAOrE,KAAKuD;QAEzD,KAAKuB,QAAQG,SAASF,UAAU,QAAO;QAEvC,IAAIG,KAAK1G,KAAKgF,UACV2B,KAAKnF,KAAKwD,OAAOX,IAAIE,IAAIE,IAAIC,KAC7BkC,MAAMF,GAAGzB,IAAI0B,GAAGzB,IAAIyB,GAAG1B,IAAIyB,GAAGxB;QAElC,IAAY,MAAR0B,KAAW,QAAO;QAEtB,IAAItC,KAAKqC,GAAGzB,IAAIwB,GAAGvB,IAAKuB,GAAGxB,IAAIyB,GAAGxB,KAAKyB,KACnCpC,KAAKkC,GAAGzB,IAAI0B,GAAGxB,IAAIwB,GAAG1B,IAAIyB,GAAGvB,KAAKyB;QAEtC,KAAON,QAAQO,SAASvC,GAAGE,OAAM+B,QAAQM,SAASvC,GAAGE,IAAM,QAAO;QAGlE,IAAI0B,MAAMrG,OAAOkG,OAAOe,QAAQN,IAAI/B,KAAKJ,IAAIK,KAAKH,IAAI4B,OAAOnG,KAAKwF;QAElE,OAAIU,OAAO,KAAU;YAGnB5B,GAAGA;YACHE,GAAGA;;OAMPhD,KAAKjB,UAAUwG,gBAAgB,SAASC,UAAUC;QAChD,IAAIC,MAAMlH,KAAKwF,OAAOhC,SAClB2D,WAAWnH,KAAKD,SAASoH,UACzBC,OAAOF,IAAIG,WAAWL,SAASb,OAAOe,MAAMG,WAAWJ,cACvDK,OAAON,SAASxD,QAAQC,IAAI2D,MAAMC,WAAW,IAAIF,WACjDI,eAAeD,KAAK7D,IAAI2D;QAC5B,OAAOG;OAGT1H,OAAO2B,OAAOA;EAEM,sBAAZK,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UC5GxE,SAAUhC;IAET;IAkCA,SAAS2H,aAAapH;QACpB,IAAIqH,WAAW,IAAIC,OAAOC,WACtBC,aAAaC,KAAKC,IAAI,GAAG,MAAML,WAAWM,YAC1CC,KAAKC,WAAW;YAAa7H,UAAUqH,WAAWG;WAAgBA;QAEtE,OADAG,WAAWN,WAAWG,YACfI;;IAGT,SAASE,mBAAmBF;QAC1BG,aAAaH;;IAvCf,IAAID,WAAW;IAGf,IAAsB,sBAAXK,QAAwB;QACjC,IAAIC,YAAW,MAAM,OAAO,UAAU,OAClCC,YAAYF,OAAOG,SAASC,UAAUC,UAAUC,QAAQ,YAAY;QAEzDC,OAAOpI,UAAUqI,SAASxH,KAAKgH,OAAOS,aAAaH,QAAQ,iBAAiB,KAC1EN,OAAOU,WAAWR;QAEnC,KAAK,IAAIhE,IAAI,GAAGA,IAAI+D,QAAQzF,WAAWwF,OAAOW,yBAAyBzE,GACrE8D,OAAOW,wBAAwBX,OAAOC,QAAQ/D,KAAG;QACjD8D,OAAOY,uBAAuBZ,OAAOC,QAAQ/D,KAAG,2BAA2B8D,OAAOC,QAAQ/D,KAAG;QAG1F8D,OAAOW,0BACVX,OAAOW,wBAAwBvB,cAC/BY,OAAOY,uBAAuBd;QAGhCrI,OAAOoJ,QAAQb,OAAOW,sBAAsBG,KAAKd,SACjDvI,OAAOsJ,cAAcf,OAAOY,qBAAqBE,KAAKd;WAKtDvI,OAAOoJ,QAAQzB,cACf3H,OAAOsJ,cAAcjB;EAeH,sBAAZrG,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UChDxE,SAAUhC;IAET;IAIA,SAASuJ;QACP,OAAMpJ,gBAAgBoJ,SACtBpJ,KAAKqJ,aACLrJ,KAAKsJ,aACLtJ,KAAKuJ,kBAAiBvJ;QACtBA,KAAKwJ,UAAUnJ,QACfL,KAAKyJ,YAAYpJ,QAIjBL,KAAK0J,sBACL1J,KAAK2J;QACL3J,KAAK4J,kBAVL5J,UADqC,IAAIoJ;;IAc3CA,MAAM7I,UAAUsJ,YAAY,SAASC;QAEnC,OADA9J,KAAKuJ,gBAAgBO,cACd9J;OAGToJ,MAAM7I,UAAUwJ,WAAW,SAASC;QAElC,OADAhK,KAAKsJ,OAAOvI,KAAKiJ,QACVhK;OAIToJ,MAAM7I,UAAU0J,SAAS,SAAS9H;QAEhC,OADAnC,KAAKwJ,UAAUrH,MACRnC;OAGToJ,MAAM7I,UAAU2J,YAAY,SAAS/H;QAEnC,OADAnC,KAAKyJ,YAAYtH,MACVnC;OAGToJ,MAAM7I,UAAU4J,UAAU,SAASC;QAEjC,OADApK,KAAKqJ,OAAOtI,KAAKqJ,OACVpK;OAIToJ,MAAM7I,UAAU8J,UAAU;QACxB,IAKI3H,GAAG4H,MAAMC,GAAGC,MALZvK,YAAYD,KAAK0J,iBACjBJ,SAAStJ,KAAK2J,cACdzJ,QAAQF,KAAK4J,aACbP,SAASrJ,KAAKqJ,QACdoB,UAAUzK,KAAKuJ;QAOnB,KAJAtJ,UAAU2C,SAAS,GACnB0G,OAAO1G,SAAS,GAChB1C,MAAM0C,SAAS,GAEVF,IAAI,GAAG4H,OAAOjB,OAAOzG,QAAY0H,OAAJ5H,GAAUA,KAC1CzC,UAAUc,KAAKE,MAAMhB,WAAWoJ,OAAO3G,GAAGzC;QAG5C,KAAKyC,IAAI,GAAG4H,OAAOtK,KAAKuJ,cAAc3G,QAAY0H,OAAJ5H,GAAUA,KAEtD,KADA4G,OAAOvI,KAAKE,MAAMqI,QAAQmB,QAAQ/H,GAAG4G;QAChCiB,IAAI,GAAGC,OAAOC,QAAQ/H,GAAG2G,OAAOzG,QAAY4H,OAAJD,GAAUA,KACrDrK,MAAMa,KAAKE,MAAMf,OAAOuK,QAAQ/H,GAAG2G,OAAOkB,GAAGrK;OAKnDkJ,MAAM7I,UAAUmK,YAAY,SAASlI;QAKnC,KAAK,IAFD1B,UAFAb,YAAYD,KAAK0J,iBACjBJ,SAAStJ,KAAK2J,cAGTjH,IAAI,GAAG4H,OAAOrK,UAAU2C,QAAY0H,OAAJ5H,GAAUA,KAAK;YACtD5B,WAAWb,UAAUyC;YACrB,KAAK,IAAI6H,IAAI,GAAGC,OAAOlB,OAAO1G,QAAY4H,OAAJD,GAAUA,KAC9CjB,OAAOiB,GAAGI,QAAQ7J;YAEpBA,SAAS4J,UAAUlI;;OAIvB4G,MAAM7I,UAAUqK,YAAY;QAG1B,KAAK,IAFD3K,YAAYD,KAAK0J,iBAEZhH,IAAI,GAAG4H,OAAOrK,UAAU2C,QAAY0H,OAAJ5H,GAAUA,KAC7C1C,KAAKwJ,WAASvJ,UAAUyC,GAAGmI,KAAK7K,KAAKwJ;QACrCxJ,KAAKyJ,aAAWxJ,UAAUyC,GAAGG,QAAQ7C,KAAKyJ;OAKlDL,MAAM7I,UAAUuK,UAAU;QAIxB,KAAK,IAHD7K,YAAYD,KAAK0J,iBACjBxJ,QAAQF,KAAK4J,aAERlH,IAAI,GAAG4H,OAAOrK,UAAU2C,QAAY0H,OAAJ5H,GAAUA,KACjDzC,UAAUyC,GAAGoI,QAAQ5K;OAIzBL,OAAOuJ,QAAQA;EAEK,sBAAZvH,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UC3GxE,SAAUhC;IAET;IAEA,SAASkL,cAAczF,OAAO0F,UAAUC;QACtC,OAAMjL,gBAAgB+K,iBACtB/K,KAAKsF,QAAQA,OACbtF,KAAKgL,WAAWA;QAChBhL,KAAKqF,SAAS,IAAIxF,OAAOkG,OAAO,GAAGiF,UAAUE,OAAO5F,QAEpDtF,KAAKI,YAAYC;QACjBL,KAAKM,QAAQD,QALbL,UAD6C,IAAI+K,cAAczF,OAAO0F,UAAUC;;IASlFF,cAAcxK,UAAUC,QAAQ,SAASJ,WAAWE;QAClDF,UAAUkJ,OAAOvI,KAAKf,OACtBA,KAAKI,YAAYA,WACjBJ,KAAKM,QAAQA;OAGfyK,cAAcxK,UAAU4K,WAAW,SAAS7F;QAC1CtF,KAAKsF,QAAQA,OACbtF,KAAKqF,OAAOmB,IAAI,GAAGxG,KAAKgL,UAAUE,OAAOlL,KAAKsF;OAGhDyF,cAAcxK,UAAU6K,cAAc,SAASJ;QAC7ChL,KAAKgL,WAAWA,UAChBhL,KAAKqF,OAAOmB,IAAI,GAAGxG,KAAKgL,UAAUE,OAAOlL,KAAKsF;OAIhDyF,cAAcxK,UAAUoK,UAAU,SAAS7J;QACrCA,SAASuK,UACTvK,SAASR,UAAUN,KAAKM,SAC5BQ,SAASwK,iBAAiBtL,KAAKqF;OAGjCxF,OAAOkL,gBAAgBA;EAEH,sBAAZlJ,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UCvCxE,SAAUhC;IAET;IAIA,SAAS8E,SAAS4G;QAChB,OAAMvL,gBAAgB2E,YACtB4G,UAAUA,eACVvL,KAAKwL,SAASD,QAAQC,UAAU;QAChCxL,KAAKiH,cAAcsE,QAAQtE,eAAe,GAC1CjH,KAAKmH,WAAWoE,QAAQpE,YAAY;QACpCnH,KAAKyL,cAAcF,QAAQE,eAAe,KAC1CzL,KAAK0L,qBAAqB1L,KAAKyL,cAAczL,KAAKyL;QALlDF,UADwC,IAAI5G,SAAS4G;;IASvD5G,SAASpE,UAAUoL,iBAAiB,SAASC;QAG3C,OAFA5L,KAAKyL,cAAcG,GACnB5L,KAAK0L,qBAAqBE,IAAIA,GACvB5L;OAGT2E,SAASC,SAAS,IAAID,YAEtB9E,OAAO8E,WAAWA;EAEE,sBAAZ9C,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UC1BxE,SAAUhC;IAET;IAEA,SAASmB,SAASsD,GAAGE,GAAGqH,MAAM9L;QAC5B,OAAMC,gBAAgBgB,YACtBhB,KAAKqD,WAAW,IAAIxD,OAAOkG,OAAOzB,GAAGE,IACrCxE,KAAK8L,eAAe9L,KAAKqD,SAASG;QAClCxD,KAAK+L,oBAAoB/L,KAAKqD,SAASG,SACvCxD,KAAKgH,WAAW,IAAInH,OAAOkG,OAAO,GAAG;QACrC/F,KAAKgM,eAAe,IAAInM,OAAOkG,OAAO,GAAG,IACzC/F,KAAKD,WAAWA,YAAYF,OAAO8E,SAASC;QAC5C5E,KAAK6L,OAAOA,QAAQ,GACpB7L,KAAKiM,aAAa,GAElBjM,KAAKqL,UAAS,GACdrL,KAAKkM,aAAY;QACjBlM,KAAKmD,eAAc,GAEnBnD,KAAKM,QAAQD,QAbbL,UADwC,IAAIgB,SAASsD,GAAGE,GAAGqH,MAAM9L;;IAiBnEiB,SAASmL,aAAa,IAEtBnL,SAAST,UAAUmK,YAAY,SAASlI;QACtC,KAAIxC,KAAKqL,QAAT;YAGArL,KAAKgH,SACFoF,KAAKpM,KAAKqD,UACVI,IAAIzD,KAAK8L;YAEZ,IAAIO,OAAOxE,KAAKyE,IAAI,GAAGtM,KAAKgH,SAASuF,sBAAsBvM,KAAKD,SAAS2L,qBAAqB1L,KAAKiM;YAEnGjM,KAAKgH,SAAS/C,MAAM,IAAIoI,OAGxBrM,KAAKgM,aACF/H,MAAM,IAAIoI,MACVpI,MAAMzB,OAAOA;YAGhBxC,KAAK8L,aAAaM,KAAKpM,KAAKqD,WAG5BrD,KAAKqD,SACF2C,IAAIhG,KAAKgH,UACThB,IAAIhG,KAAKgM;YAGZhM,KAAKgM,aAAaQ,QAGlBxM,KAAK+L,kBAAkBK,KAAKpM,KAAK8L,eAEjC9L,KAAKkM,aAAY;;OAGnBlL,SAAST,UAAUkM,UAAU,SAASnI,GAAGE;QAIvC,OAHAxE,KAAKqD,SAASmD,IAAIlC,GAAGE,IACrBxE,KAAK8L,aAAaM,KAAKpM,KAAKqD,WAC5BrD,KAAK+L,kBAAkBK,KAAKpM,KAAK8L;QAC1B9L;OAITgB,SAAST,UAAU4D,UAAU,SAASyH;QAChC5L,KAAKqL,UACTrL,KAAKqD,SAAS2C,IAAI4F;OAIpB5K,SAAST,UAAUmM,SAAS,SAASpI,GAAGE;QAEtC,OADAxE,KAAKqD,SAASmD,IAAIlC,GAAGE,IACdxE;OAITgB,SAAST,UAAUoM,UAAU,SAASrI,GAAGE;QACvC,IAAIoI,SAAStI,IAAItE,KAAKqD,SAASiB,GAC3BuI,SAASrI,IAAIxE,KAAKqD,SAASmB;QAC/BxE,KAAKqD,SAASyJ,MAAMF,QAAQC,SAC5B7M,KAAK8L,aAAagB,MAAMF,QAAQC;OAGlC7L,SAAST,UAAUwM,UAAU;QAC3B/M,KAAKmD,eAAc;OAGrBnC,SAAST,UAAUyM,SAAS,SAASC,IAAIC;QAGvC,OAFAlN,KAAK8L,eAAe9L,KAAKqD,SAASG,SAClCxD,KAAKqD,SAAS2C,IAAIiH,IAAIC,KACflN;OAGTgB,SAAST,UAAU2C,cAAc,SAASoB,GAAGE;QAC3C,OAAOxE,KAAKqD,SAASG,QAAQ2J,MAAM7I,GAAGE,GAAGd;OAG3C1C,SAAST,UAAU6M,MAAM,SAAS9I,GAAGE;QACnCF,IAAkB,sBAANA,IAAqBA,IAAItE,KAAKqD,SAASiB,GACnDE,IAAkB,sBAANA,IAAqBA,IAAIxE,KAAKqD,SAASmB;QACnDxE,KAAKyM,QAAQnI,GAAGE,IAChBxE,KAAKqL,UAAS,GACdrL,KAAK6L,OAAOwB;OAGdrM,SAAST,UAAU+M,cAAc,SAAShJ,GAAGE;QAE3C,OADAxE,KAAK8L,aAAaM,KAAKpM,KAAKqD,UAAU8J,MAAM7I,GAAGE,IACxCxE;OAGTgB,SAAST,UAAUsC,UAAU,SAAS8C;QAChC3F,KAAKqD,SAASiB,IAAIqB,OAAO1D,QAC3BjC,KAAKqD,SAASiB,IAAItE,KAAK8L,aAAaxH,IAAItE,KAAK+L,kBAAkBzH,IAAIqB,OAAO1D,QAEnEjC,KAAKqD,SAASiB,IAAIqB,OAAO5D,SAChC/B,KAAKqD,SAASiB,IAAItE,KAAK8L,aAAaxH,IAAItE,KAAK+L,kBAAkBzH,IAAIqB,OAAO5D;QAExE/B,KAAKqD,SAASmB,IAAImB,OAAOzD,SAC3BlC,KAAKqD,SAASmB,IAAIxE,KAAK8L,aAAatH,IAAIxE,KAAK+L,kBAAkBvH,IAAImB,OAAOzD,SAEnElC,KAAKqD,SAASmB,IAAImB,OAAO3D,QAChChC,KAAKqD,SAASmB,IAAIxE,KAAK8L,aAAatH,IAAIxE,KAAK+L,kBAAkBvH,IAAImB,OAAO3D;OAI9EhB,SAAST,UAAUgN,aAAa,SAASvD;QAGvChK,KAAKsL,iBAAiBtB,MAAM3E;OAG9BrE,SAAST,UAAU+K,mBAAmB,SAASjG;QAC7CrF,KAAKgM,aAAahG,IAAIX;OAGxBrE,SAAST,UAAUyJ,QAAQ,SAAS1F,GAAGE,GAAGgJ;QACxCA,OAAOA,QAAQxN,KAAK6D,WACpB7D,KAAKgM,aAAahG;YAChB1B,GAAGA,IAAIkJ;YACPhJ,GAAGA,IAAIgJ;;OAIXxM,SAAST,UAAUsD,UAAU;QAC3B,OAAO7D,KAAK6L,OAAO7L,KAAKD,SAASyL;OAGnCxK,SAAST,UAAUkN,kBAAkB;QACnC,OAAOzN,KAAKgH,SAASuF;OAGvBvL,SAAST,UAAUmN,gBAAgB,SAASpJ,GAAGE,GAAGmJ,GAAGC;QACnD,IAAIJ,OAAOxN,KAAK6D,WACZF,QAAQ,IAAI9D,OAAOkG,OAAOzB,GAAGE,GAAGf,IAAIzD,KAAKqD,WACzCwK,IAAIhG,KAAKC,IAAInE,MAAMD,aAAakK,WAAW,IAC3CE,IAAKH,IAAIH,QAASK,IAAIA,IACtBE,QAAQJ,KAAKA,IAAIH;QAErBxN,KAAKgM,aAAahG;YAChB1B,IAAIwJ,KAAKnK,MAAMW,IAAIuJ,KAAKE;YACxBvJ,IAAIsJ,KAAKnK,MAAMa,IAAIqJ,KAAKE;;OAI5B/M,SAAST,UAAUuK,UAAU,SAAS5K;QAMpC,KALA,IAAI8N,SAASC,WACThB,IAAIC,IAAIgB,aAAaC,aACrBC,YACA1L,IAAIxC,MAAM0C,QAEPF,OAGL0L,aAAapO,SAASE,MAAMwC,GAAGI,MAAM9C,SAASE,MAAMwC,GAAGK;QACvDkL,aAAaG,cAAclO,MAAMwC,GAAG2D,iBAClCrG,KAAK8L,aAAaxH,GAAGtE,KAAK8L,aAAatH,GACvCxE,KAAKqD,SAASiB,GAAGtE,KAAKqD,SAASmB;QAE7ByJ,cAGFhB,KAAKgB,UAAU3J,IAAItE,KAAK8L,aAAaxH,GACrC4I,KAAKe,UAAUzJ,IAAIxE,KAAK8L,aAAatH;QACjCwJ,WACFE,cAAcF,QAAQf,KAAKe,QAAQf,KAAKe,QAAQd,KAAKc,QAAQd,IAC7DiB,cAAclB,KAAKA,KAAKC,KAAKA;QACXgB,cAAdC,gBACFH;YACEf,IAAIA;YACJC,IAAIA;YACJ5I,GAAG2J,UAAU3J;YACbE,GAAGyJ,UAAUzJ;YACb6J,MAAMnO,MAAMwC;cAKhBsL;YACEf,IAAIA;YACJC,IAAIA;YACJ5I,GAAG2J,UAAU3J;YACbE,GAAGyJ,UAAUzJ;YACb6J,MAAMnO,MAAMwC;;QAKpB,IAAIsL,SAAS;YAEX,IAAIhH,WAAWhH,KAAKqD,SAASG,QAAQC,IAAIzD,KAAK8L,eAC1CwC,cAAcN,QAAQK,KAAKvI,YAAYkI,QAAQ1J,GAAG0J,QAAQxJ,IAC1D+J,oBAAoBP,QAAQK,KAAKtH,cAAcC,UAAUhH,KAAKD,SAASkH;YAQ3E,OANAjH,KAAKqD,SAAS+I,KAAKkC,cACnBtO,KAAKsN,YAAYiB,kBAAkBjK,GAAGiK,kBAAkB/J;YACxDxE,KAAK+L,oBAAoBuC,aAEzBtO,KAAKkM,aAAY,GAEV8B;;OAIXnO,OAAOmB,WAAWA;EAEE,sBAAZa,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UCnOxE,SAAUhC;IAET;IAEA,SAAS2O,SAASX,GAAGY,GAAGvJ;QACtB,QAAS,KAAK,OAAO2I,KAAK,OAAOY,KAAK,KAAKvJ;;IAG7C,SAASwJ,aAAaC,IAAIC,OAAOC;QAC/B,OAAM7O,gBAAgB0O,gBAEtB1O,KAAK8O,QAAQ,IAAIC,KAAKC,MAAM,IAAU,IACtChP,KAAK8O,MAAMG,gBAAe;QAE1BjP,KAAK4O,QAAQA,OACb5O,KAAK6O,SAASA,QACd7O,KAAKkP,WAAWH,KAAKI,mBAAmBnP,KAAK4O,OAAO5O,KAAK6O,QAAQ,OAAM,IAAO;QAC9E7O,KAAKkP,SAASE,KAAKC,MAAMC,UAAU,SACnCX,GAAGY,YAAYvP,KAAKkP,SAASE;QAE7BpP,KAAKwP,WAAW,IAAIT,KAAKU,KAAK;YAAaC,MAAM;YAAWC,MAAK;YACjE3P,KAAK8O,MAAMc,SAAS5P,KAAKwP,WACzBxP,KAAK6P,WAAW,IAAId,KAAKe,YACzB9P,KAAK8O,MAAMc,SAAS5P,KAAK6P;QACzB7P,KAAK+P,WAAW/P,KAAK+P,SAAS7G,KAAKlJ,OAbnCA,UAF4C,IAAI0O,aAAaC,IAAIC,OAAOC;;IAkB1EH,aAAanO;QACXwP,UAAU,SAASvN,MAAMwN;YACvB,IAAI/P,YAAY,GACZC,QAAQ;YAEZF,KAAK6P,SAASI;YAEd,KAAK,IAAIvN,IAAI,GAAG4H,OAAO0F,IAAIlG,OAAOlH,QAAY0H,OAAJ5H,GAAUA,KAAK;gBACvD,KAAK,IAAI6H,IAAI,GAAGC,OAAOwF,IAAIlG,OAAOpH,GAAG2G,OAAOzG,QAAY4H,OAAJD,GAAUA,KAC5DtK,aAAaD,KAAKkQ,cAAcF,IAAIlG,OAAOpH,GAAG2G,OAAOkB,GAAGtK;gBACxDC,SAASF,KAAKmQ,UAAUH,IAAIlG,OAAOpH,GAAG2G,OAAOkB,GAAGrK;gBAElDF,KAAKoQ,WAAWJ,IAAIlG,OAAOpH,GAAG4G;;YAGhCtJ,KAAKwP,SAASa,QAAQ,UAAUL,IAAIM,MAAM,kBAAkBrQ,YAAY,cAAcC;YAEtFF,KAAKkP,SAASqB,OAAOvQ,KAAK8O;;QAE5BsB,YAAY,SAAS9G;YAEnBtJ,KAAK6P,SAASW,UAAU,GAAG,UAAU;YAErC,KAAK,IAAI9N,IAAI,GAAG4H,OAAOhB,OAAO1G,QAAY0H,OAAJ5H,GAAUA,KAAK;gBACnD,IAAIsH,QAAQV,OAAO5G;gBACfsH,iBAAiBnK,OAAO4Q,kBAC1BzQ,KAAK6P,SAASa,UAAU,UAAU;gBAClC1Q,KAAK6P,SAASc,WAAW3G,MAAM1F,GAAG0F,MAAMxF,GAAqC,KAAlCwF,MAAMgB,WAAWhB,MAAMgB;gBAClEhL,KAAK6P,SAASe;;;QAIpBV,eAAe,SAASjQ;YAGtB,KAAK,IAFDa,UAAU+P,KAAKC,MAAMtD,MAAMuD,YAEtBxG,IAAI,GAAGC,OAAOvK,UAAU2C,QAAY4H,OAAJD,GAAUA,KACjDzJ,WAAWb,UAAUsK;YACrBsG,MAAM/P,SAASuC,UACfyN,OAAOhQ,SAASiL,mBAChByB,OAAO1M,SAAS+C;YAChBkN,gBAAiC,QAAhBvD,OAAO,KAAK,KACzB1M,SAASoL,YACXlM,KAAK6P,SAASW,UAAUhD,MAAMgB,SAAS,KAAK,KAAK,MAAM,KAGvDxO,KAAK6P,SAASW,UAAUhD,MAAMgB,SAAS,KAAK,KAAKuC,YAAY,MAAMA,aAAa;YAElF/Q,KAAK6P,SAASnD,OAAOoE,KAAKxM,IAAI,GAAGwM,KAAKtM,IACtCxE,KAAK6P,SAASmB,OAAOH,IAAIvM,IAAI,GAAGuM,IAAIrM;YAGtC,OAAOvE,UAAU2C;;QAEnBuN,WAAW,SAASjQ;YAClBF,KAAK6P,SAASW,UAAU,GAAG,UAAU;YAErC,KADA,IAAIjP,MAAMmB,IAAIxC,MAAM0C,QACbF,OACLnB,OAAOrB,MAAMwC,GAAG0B,aAChBpE,KAAK6P,SAASnD,OAAOnL,KAAK8C,IAAI9C,KAAKgD;YACnCvE,KAAK6P,SAASmB,OAAOzP,KAAKkD,IAAIlD,KAAKmD;YAErC,OAAOxE,MAAM0C;;OAIjB/C,OAAO6O,eAAeA;EAEF,sBAAZ7M,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UC9FxE,SAAUhC;IAET;IAIA,SAAS4Q,cAAcnM,GAAGE,GAAGwG,UAAUC;QACrC,OAAMjL,gBAAgByQ,iBACtBzQ,KAAKsE,IAAIA,GACTtE,KAAKwE,IAAIA,GACTxE,KAAKgL,WAAWA;QAEhBhL,KAAKI,YAAYC,QACjBL,KAAKM,QAAQD,QALbL,UAD6C,IAAIyQ,cAAcnM,GAAGE,GAAGwG,UAAUC;;IASjFwF,cAAclQ,UAAUC,QAAQ,SAASJ,WAAWE;QAClDF,UAAUkJ,OAAOvI,KAAKf,OACtBA,KAAKI,YAAYA,WACjBJ,KAAKM,QAAQA;OAGfmQ,cAAclQ,UAAU0Q,cAAc,SAAS3M,GAAGE;QAChDxE,KAAKsE,IAAIA,GACTtE,KAAKwE,IAAIA;OAGXiM,cAAclQ,UAAU6K,cAAc,SAASJ;QAC7ChL,KAAKgL,WAAWA;OAIlByF,cAAclQ,UAAUoK,UAAU,SAAS7J;QACrCA,SAASuK,UACTvK,SAASR,UAAUN,KAAKM,SAC5BQ,SAAS4M,cAAc1N,KAAKsE,GAAGtE,KAAKwE,GAAGxE,KAAKgL,UAAU;OAGxDnL,OAAO4Q,gBAAgBA;EAEH,sBAAZ5O,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UCxCxE,SAAUhC;IAET;IAIA,SAASuC,UAAUL,MAAMC,KAAKC,OAAOC;QACnC,OAAMlC,gBAAgBoC,aACtBpC,KAAKwG,IAAIvF,MAAMjB,MAAMqB,YAArBrB,UADyC,IAAIoC,UAAUL,MAAMC,KAAKC,OAAOC;;IAI3EE,UAAUwD,cAAc,SAASsL,IAAIC;QACnC,OAAO,IAAI/O,UAAU8O,GAAG5M,GAAG4M,GAAG1M,GAAG2M,GAAG7M,GAAG6M,GAAG3M;OAG5CpC,UAAU7B;QACRiG,KAAK,SAASzE,MAAMC,KAAKC,OAAOC;YAO9B,OANAlC,KAAK+B,OAAO8F,KAAKyE,IAAIvK,MAAME,QAC3BjC,KAAKgC,MAAM6F,KAAKyE,IAAItK,KAAKE,SACzBlC,KAAKiC,QAAQ4F,KAAKC,IAAI7F,OAAOF;YAC7B/B,KAAKkC,SAAS2F,KAAKC,IAAI5F,QAAQF,MAC/BhC,KAAK4O,QAAQ5O,KAAKiC,QAAQjC,KAAK+B,MAC/B/B,KAAK6O,SAAS7O,KAAKkC,SAASlC,KAAKgC;YAC1BhC;;QAET6G,UAAU,SAASvC,GAAGE;YACpB,OAAQF,KAAKtE,KAAK+B,QAAQuC,KAAKtE,KAAKiC,SAASuC,KAAKxE,KAAKgC,OAAOwC,KAAKxE,KAAKkC;;QAE1EuE,UAAU,SAAStE;YACjB,SAASA,KAAKJ,OAAO/B,KAAKiC,SAASE,KAAKF,QAAQjC,KAAK+B,QACjDI,KAAKH,MAAMhC,KAAKkC,UAAUC,KAAKD,SAASlC,KAAKgC;;QAEnD6D,QAAQ,SAASuL;YAKf,OAJApR,KAAK+B,QAAQqP,QACbpR,KAAKiC,SAASmP,QACdpR,KAAKgC,OAAOoP,QACZpR,KAAKkC,UAAUkP;YACRpR;;OAIXH,OAAOuC,YAAYA;EAEC,sBAAZP,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UC3CxE,SAAUhC;IAET;IAEA,SAASwR,SAAS1C;QAChB,OAAM3O,gBAAgBqR,YAEtBrR,KAAKsR,MAAM3C,GAAG4C,WAAW,OACzBvR,KAAK4O,QAAQD,GAAGC;QAChB5O,KAAK6O,SAASF,GAAGE,QACjB7O,KAAK+P,WAAW/P,KAAK+P,SAAS7G,KAAKlJ,OAHnCA,UAFwC,IAAIqR,SAAS1C;;IAQvD0C,SAAS9Q;QACPwP,UAAU,SAASvN,MAAMwN;YACvB,IAAIsB,MAAMtR,KAAKsR;YAEftR,KAAKiQ,MAAMqB,KAAK9O,OAChBxC,KAAKwR,gBAAgBF,KAAKtB,IAAI7P,cAC9BH,KAAKmQ,UAAUmB,KAAKtB,IAAI9P;YACxBF,KAAKkQ,cAAcoB,KAAKtB,IAAI/P,YAC5BD,KAAKoQ,WAAWkB,KAAKtB,IAAI1G,SACzBtJ,KAAKyR,WAAWH;gBACdrR,WAAW+P,IAAI/P,UAAU2C;gBACzB1C,OAAO8P,IAAI9P,MAAM0C;gBACjB0G,QAAQ0G,IAAI1G,OAAO1G;gBACnBzC,aAAa6P,IAAI7P,YAAYyC;gBAE/B5C,KAAK0R,QAAQJ,KAAKtB;;QAEpBC,OAAO,SAASqB;YACdA,IAAIK,QACJL,IAAIM,YAAY,WAChBN,IAAIO,SAAS,GAAG,GAAG7R,KAAK4O,OAAO5O,KAAK6O;YACpCyC,IAAIQ;;QAEN1B,YAAY,SAASkB,KAAKhI;YACxBgI,IAAIK,QACJL,IAAIS,YAAY,GAChBT,IAAIU,cAAc,6BAClBV,IAAIM,YAAY;YAEhB,KAAK,IAAIlP,IAAI,GAAG4H,OAAOhB,OAAO1G,QAAY0H,OAAJ5H,GAAUA,KAAK;gBACnD,IAAIsH,QAAQV,OAAO5G;gBACfsH,iBAAiBnK,OAAO4Q,kBAC1Ba,IAAIW,aACJX,IAAIY,IAAIlI,MAAM1F,GAAG0F,MAAMxF,GAAqC,KAAlCwF,MAAMgB,WAAWhB,MAAMgB,UAAgB,GAAG,IAAInD,KAAKsK,KAAI;gBACjFb,IAAI5B;;YAIR4B,IAAIQ;;QAEN5B,eAAe,SAASoB,KAAKrR;YAC3B,IAAIa,UAAU+P,KAAKC,MAAMtD;YAEzB8D,IAAIK,QACJL,IAAIc,UAAU,SACdd,IAAIe,WAAW;YAEf,KAAK,IAAI9H,IAAI,GAAGC,OAAOvK,UAAU2C,QAAY4H,OAAJD,GAAUA,KACjDzJ,WAAWb,UAAUsK;YACrBsG,MAAM/P,SAASuC,UACfyN,OAAOhQ,SAASiL,mBAChByB,OAAO1M,SAAS+C;YAEhByN,IAAIW,aAEAnR,SAASuK,UACXiG,IAAIU,cAAc;YAClBV,IAAIS,YAAY,GAChBT,IAAI5E,OAAOoE,KAAKxM,IAAI,GAAGwM,KAAKtM,IAAI,IAChC8M,IAAIN,OAAOF,KAAKxM,IAAI,GAAGwM,KAAKtM,IAAI;YAChC8M,IAAI5E,OAAOoE,KAAKxM,IAAI,GAAGwM,KAAKtM,IAAI,IAChC8M,IAAIN,OAAOF,KAAKxM,IAAI,GAAGwM,KAAKtM,IAAI,OAGhC8M,IAAIS,eAAevE,OAAO,KAAK;YAC/B8D,IAAIU,cAAclR,SAASoL,YACzB,2BAA2B;YAC7BoF,IAAI5E,OAAOoE,KAAKxM,GAAGwM,KAAKtM,IACxB8M,IAAIN,OAAOH,IAAIvM,IAAI,GAAGuM,IAAIrM,KAE5B8M,IAAIgB;YAGNhB,IAAIQ;;QAENN,iBAAiB,SAASF,KAAKnR;YAC7B,IAAIoS,QACA7Q;YAEJ4P,IAAIK,QACJL,IAAIU,cAAc,0BAClBV,IAAIS,YAAY;YAEhB,KAAK,IAAIrP,IAAI,GAAG4H,OAAOnK,YAAYyC,QAAY0H,OAAJ5H,GAAUA,KACnDhB,aAAavB,YAAYuC;YAEG,aAAxBhB,WAAWW,YACbkQ,SAAS7Q,WAAW0C,aACpBkN,IAAIW;YACJX,IAAI5E,OAAO6F,OAAOlO,IAAIkO,OAAOhO,KAC7B+M,IAAIN,OAAOuB,OAAO9N,IAAI8N,OAAO7N,KAC7B4M,IAAIkB;YACJlB,IAAIgB,YAE2B,YAAxB5Q,WAAWW,aAClBkQ,SAAS7Q,WAAW+Q;YACpBnB,IAAIW,aACJX,IAAI5E,OAAO6F,OAAOjO,IAAI,GAAGiO,OAAO/N,IAAI,IACpC8M,IAAIN,OAAOuB,OAAOjO,IAAI,GAAGiO,OAAO/N,IAAI;YACpC8M,IAAIkB,aACJlB,IAAIgB;YAGRhB,IAAIQ;;QAEN3B,WAAW,SAASmB,KAAKpR;YACvBoR,IAAIK,QACJL,IAAIU,cAAc,4BAClBV,IAAIS,YAAY;YAEhB,KADA,IAAIxQ,MAAMmB,IAAIxC,MAAM0C,QACbF,OACLnB,OAAOrB,MAAMwC,GAAG0B,aAChBkN,IAAIW;YACJX,IAAI5E,OAAOnL,KAAK8C,IAAI9C,KAAKgD,KACzB+M,IAAIN,OAAOzP,KAAKkD,IAAIlD,KAAKmD,KACzB4M,IAAIkB,aACJlB,IAAIgB;YAIN,OAFAhB,IAAIQ,WAEG5R,MAAM0C;;QAEf6O,YAAY,SAASH,KAAKoB;YACxBpB,IAAIK,QACJL,IAAIM,YAAY,QAChBN,IAAI3B,OAAO,kBACX2B,IAAIqB,SAAS,gBAAgBD,OAAOzS,WAAW,IAAI;YACnDqR,IAAIqB,SAAS,YAAYD,OAAOxS,OAAO,IAAI,KAC3CoR,IAAIqB,SAAS,aAAaD,OAAOpJ,QAAQ,IAAI;YAC7CgI,IAAIqB,SAAS,kBAAkBD,OAAOvS,aAAa,IAAI,KACvDmR,IAAIQ;;QAENJ,SAAS,SAASJ,KAAKtB;YACrB,IAAI4C,OAAO,UAAU5C,IAAIM;YACzBgB,IAAIK,QACJL,IAAIM,YAAY,QAChBN,IAAI3B,OAAO,kBACX2B,IAAIqB,SAASC,MAAM,IAAI;YACvBtB,IAAIQ;;OAIRjS,OAAOwR,WAAWA;EAEE,sBAAZxP,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UC7JxE,SAAUhC;IAET;IAEA,SAAS+B,gBAAgB3B,WAAW4S;QAClC,OAAM7S,gBAAgB4B,mBAEtB5B,KAAKC,YAAYA,WACjBD,KAAK8S,SAAS9S,KAAK+S;QADnB/S,UAF+C,IAAI4B,gBAAgB3B,WAAW4S;;IAMhFjR,gBAAgBrB,UAAU8B,WAAW,IACrCT,gBAAgBrB,UAAU+B,WAAW;IAGrCV,gBAAgBrB,UAAUyS,gBAAgB;QAIxC,KAHA,IAAItQ,IAAI,IAAIC,MAAM3C,KAAKC,UAAU2C,QAC7BqQ,SAASpT,OAAOkG,OAAO,GAAG,MAErBrD,IAAIC,OACXsQ,OAAOjN,IAAIhG,KAAKC,UAAUyC,GAAGW;QAI/B,OADA4P,OAAOhP,MAAM,IAAItB,MACVsQ;OAGTrR,gBAAgBrB,UAAUwS,YAAY;QAKpC,KAJA,IAAIE,SAASjT,KAAKgT,iBACdtQ,IAAI,IAAIC,MAAM3C,KAAKC,UAAU2C,QAC7BkQ,SAAS5R,MAAMyB,QAEVD,IAAIC,OACXmQ,OAAOpQ,KAAK1C,KAAKC,UAAUyC,GAAGW,SAASG,QAAQC,IAAIwP;QAGrD,OAAOH;OAGTlR,gBAAgBrB,UAAU2S,gBAAgB,SAASD;QAIjD,KAHA,IAAIE,aAAa,GACbzQ,IAAI,IAAIC,MAAM3C,KAAKC,UAAU2C,UAExBF,IAAIC,OACXwQ,cAAcnT,KAAKC,UAAUyC,GAAGW,SAASG,QACtCC,IAAIwP,QACJG,aAAapT,KAAK8S,OAAOpQ;QAG9B,OAAOyQ,aAAaxQ;OAGtBf,gBAAgBrB,UAAUgC,UAAU;QASlC,KARA,IAAI0Q,SAASjT,KAAKgT,iBACdG,aAAa,GAEbE,MAAMxL,KAAKwL,IAAIF,aACfG,MAAMzL,KAAKyL,IAAIH,aAEfzQ,IAAI,IAAIC,MAAM3C,KAAKC,UAAU2C,UAExBF,IAAIC,OAAK;YAChB,IAAI4Q,IAAIvT,KAAK8S,OAAOpQ,IAChB8Q,aAAa3T,OAAOkG,OAAOsN,MAAME,EAAEjP,IAAIgP,MAAMC,EAAE/O,GAAG8O,MAAMC,EAAEjP,IAAI+O,MAAME,EAAE/O;YAC1EgP,WAAWxN,IAAIiN,QAAQxP,IAAIzD,KAAKC,UAAUyC,GAAGW,UAAUY,MAAM,IAC7DjE,KAAKC,UAAUyC,GAAGW,SAAS2C,IAAIwN;;OAInC3T,OAAO+B,kBAAkBA;EAEL,sBAAZC,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UCvExE,SAAUhC;IAET;IAEA,SAAS4T;IAET,SAASC,aAAazO,GAAGC;QACvB,OAAOA,EAAE5C,WAAW2C,EAAE3C;;IAGxB,SAASqR,UAAUC,cAAc1E,UAAU2E,gBAAgBhB;QACzD,OAAM7S,gBAAgB2T,aAEtB3T,KAAK4T,eAAeA,gBAAgBH,MACpCzT,KAAKkP,WAAWA,YAAYuE;QAC5BzT,KAAK8T,OAAO9T,KAAK+T,MAAM7K,KAAKlJ,OAC5BA,KAAK+H,WAAW,GAChB/H,KAAKgU,WAAU,GACfhU,KAAKsQ,MAAM;QACXtQ,KAAKiU,SAAS,GACdjU,KAAKkU,YAAY,GACjBlU,KAAKmU,gBAAgB,KACrBnU,KAAKoU,cAAc;QACnBpU,KAAKqU,iBAAiB,OAAQR,kBAAkB,KAChD7T,KAAK6S,aAAaA,cAAc;QAEhC7S,KAAK8J,aAGL9J,KAAKC,gBACLD,KAAKE,YACLF,KAAKsJ,aACLtJ,KAAKG;QAnBLH,UAFyC,IAAI2T,UAAUC,cAAc1E,UAAU2E,gBAAgBhB;;IAwBjGc,UAAUpT,UAAU+T,QAAQ;QAC1BtU,KAAKgU,WAAU,GACfhU,KAAKkU,YAAYxM,KAAK6M,QAAQ,KAC9B1U,OAAOoJ,MAAMjJ,KAAK8T;OAGpBH,UAAUpT,UAAUiU,OAAO;QACzBxU,KAAKgU,WAAU;OAGjBL,UAAUpT,UAAUkU,WAAW,SAASjS;QACtCxC,KAAK0U,KAAK1U,KAAKC,YACfD,KAAK0U,KAAK1U,KAAKG,cACfH,KAAK4T,aAAapR,MAAMxC;QACxBA,KAAK0K,UAAUlI,OACfxC,KAAK4K,UAAUpI,OACfxC,KAAK8K,QAAQtI;OAGfmR,UAAUpT,UAAUmU,OAAO,SAASC;QAElC,KADA,IAAIjS,IAAI,GACDA,IAAIiS,MAAM/R,UACX+R,MAAMjS,GAAGS,cAAawR,MAAMC,OAAOlS,GAAG,KACrCA;OAITiR,UAAUpT,UAAUmK,YAAY,SAASlI;QAKvC,KAAK,IAFD1B,UAFAb,YAAYD,KAAKC,WACjBqJ,SAAStJ,KAAKsJ,QAGT5G,IAAI,GAAG4H,OAAOrK,UAAU2C,QAAY0H,OAAJ5H,GAAUA,KAAK;YACtD5B,WAAWb,UAAUyC;YACrB,KAAK,IAAI6H,IAAI,GAAGC,OAAOlB,OAAO1G,QAAY4H,OAAJD,GAAUA,KAC9CjB,OAAOiB,GAAGI,QAAQ7J;YAEpBA,SAAS4J,UAAUlI;;OAIvBmR,UAAUpT,UAAUqK,YAAY,SAASpI;QAGvC,KAAK,IAFDrC,cAAcH,KAAKG,aAEdoK,IAAI,GAAGC,OAAOxK,KAAK6S,YAAgBrI,OAAJD,GAAUA,KAChD,KAAK,IAAI7H,IAAI,GAAG4H,OAAOnK,YAAYyC,QAAY0H,OAAJ5H,GAAUA,KACnDvC,YAAYuC,GAAGH,QAAQC,MAAMxC,KAAKC;OAKxC0T,UAAUpT,UAAUuK,UAAU;QAI5B,KAAK,IAHD7K,YAAYD,KAAKC,WACjBC,QAAQF,KAAKE,OAERwC,IAAI,GAAG4H,OAAOrK,UAAU2C,QAAY0H,OAAJ5H,GAAUA,KACjDzC,UAAUyC,GAAGoI,QAAQ5K;OAIzByT,UAAUpT,UAAUyF,MAAM,SAAS6O,QAAQvU;QAEzC,OADAuU,OAAOrU,MAAMR,MAAMM,QACZN;OAGT2T,UAAUpT,UAAUuU,OAAO;QACzB,OAAO9U;OAGT2T,UAAUpT,UAAUG,eAAe,SAAST;QAC1CD,KAAKC,UAAUc,KAAKE,MAAMjB,KAAKC,WAAWA;OAG5C0T,UAAUpT,UAAUI,WAAW,SAAST;QACtCF,KAAKE,MAAMa,KAAKE,MAAMjB,KAAKE,OAAOA;OAGpCyT,UAAUpT,UAAUK,iBAAiB,SAAST;QAC5CH,KAAKG,YAAYY,KAAKE,MAAMjB,KAAKG,aAAaA,cAC9CH,KAAKG,YAAY4U,KAAKrB;OAIxBC,UAAUpT,UAAUyU,eAAe,SAAS1Q,GAAGE,GAAGyQ;QAMhD,KAAK,IAFDhS,UAHAhD,YAAYD,KAAKC,WACjBiV,QAAQ7U,QACR2N,UAAUiH,QAGLvS,IAAI,GAAG4H,OAAOrK,UAAU2C,QAAY0H,OAAJ5H,GAAUA,KACjDO,WAAWhD,UAAUyC,GAAGQ,YAAYoB,GAAGE;QACvBwJ,WAAZ/K,aACFiS,QAAQjV,UAAUyC,IAClBsL,UAAU/K;QAId,OAAOiS;OAGTvB,UAAUpT,UAAU4J,UAAU,SAASC;QACrCpK,KAAKC,UAAUc,KAAKE,MAAMjB,KAAKC,WAAWmK,KAAKnK,YAC/CD,KAAKE,MAAMa,KAAKE,MAAMjB,KAAKE,OAAOkK,KAAKlK;QACvCF,KAAKqJ,OAAOtI,KAAKqJ;OAGnBuJ,UAAUpT,UAAU6I,QAAQ;QAC1B,IAAI+L,WAAWtV,OAAOuJ;QAEtB,OADApJ,KAAK8J,OAAO/I,KAAKoU,WACVA;OAGTxB,UAAUpT,UAAUwT,QAAQ;QAC1B,IAAK/T,KAAKgU,SAAV;YAEA,IAAIxR,OAAOkF,KAAK6M,OACZT,OAAOtR,OAAOxC,KAAK+H;YAKvB,KAJI+L,OAAO,QAAKA,OAAO,IAEvB9T,KAAKoU,eAAeN,MAEb9T,KAAKoU,eAAepU,KAAKqU,kBAC9BrU,KAAKyU,SAASzU,KAAKqU;YACnBrU,KAAKoU,eAAepU,KAAKqU;YAG3BrU,KAAKkP,SAAS4E,MAAM9T,OAEpBA,KAAKiU,UACDzR,QAAQxC,KAAKkU,cACflU,KAAKsQ,OAAoE,OAA7DtQ,KAAKiU,UAAUjU,KAAKmU,gBAAgB3R,OAAOxC,KAAKkU,aAAmBkB,QAAQ;YACvFpV,KAAKiU,SAAS,GACdjU,KAAKkU,YAAY1R,OAAOxC,KAAKmU,gBAG/BnU,KAAK+H,WAAWvF;YAChB3C,OAAOoJ,MAAMjJ,KAAK8T;;OAGpBjU,OAAO8T,YAAYA;EAEC,sBAAZ9R,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UChLxE,SAAUhC;IAET;IAIA,SAASkG,OAAOzB,GAAGE;QACjB,OAAMxE,gBAAgB+F,UACtB/F,KAAKsE,IAAIA,GACTtE,KAAKwE,IAAIA,GADTxE,UADsC,IAAI+F,OAAOzB,GAAGE;;IAKtDuB,OAAOe,UAAU,IAAIf,UAErBA,OAAOxF,UAAUiD,QAAQ;QACvB,OAAO,IAAI3D,OAAOkG,OAAO/F,KAAKsE,GAAGtE,KAAKwE;OAGxCuB,OAAOxF,UAAU6L,OAAO,SAASR;QAG/B,OAFA5L,KAAKsE,IAAIsH,EAAEtH,GACXtE,KAAKwE,IAAIoH,EAAEpH,GACJxE;OAGT+F,OAAOxF,UAAUiM,OAAO;QAGtB,OAFAxM,KAAKsE,IAAI,GACTtE,KAAKwE,IAAI,GACFxE;OAGT+F,OAAOxF,UAAUiG,MAAM,SAASlC,GAAGE;QAGjC,OAFAxE,KAAKsE,IAAIA,GACTtE,KAAKwE,IAAIA,GACFxE;OAGT+F,OAAOxF,UAAUyF,MAAM,SAAS4F;QAG9B,OAFA5L,KAAKsE,KAAKsH,EAAEtH,GACZtE,KAAKwE,KAAKoH,EAAEpH,GACLxE;OAGT+F,OAAOxF,UAAUuM,QAAQ,SAASxI,GAAGE;QAGnC,OAFAxE,KAAKsE,KAAKA,GACVtE,KAAKwE,KAAKA,GACHxE;OAGT+F,OAAOxF,UAAUkD,MAAM,SAASmI;QAG9B,OAFA5L,KAAKsE,KAAKsH,EAAEtH,GACZtE,KAAKwE,KAAKoH,EAAEpH,GACLxE;OAGT+F,OAAOxF,UAAU4M,QAAQ,SAAS7I,GAAGE;QAGnC,OAFAxE,KAAKsE,KAAKA,GACVtE,KAAKwE,KAAKA,GACHxE;OAGT+F,OAAOxF,UAAU8U,OAAOtP,OAAOxF,UAAU+U,aAAa,SAAS1J;QAG7D,OAFA5L,KAAKsE,KAAKsH,EAAEtH,GACZtE,KAAKwE,KAAKoH,EAAEpH,GACLxE;OAGT+F,OAAOxF,UAAUgV,UAAU;QAGzB,OAFAvV,KAAKsE,KAAKtE,KAAKsE,GACftE,KAAKwE,KAAKxE,KAAKwE,GACRxE;OAGT+F,OAAOxF,UAAUiV,MAAM,SAAS5J;QAG9B,OAFA5L,KAAKsE,KAAKsH,EAAEtH,GACZtE,KAAKwE,KAAKoH,EAAEpH,GACLxE;OAGT+F,OAAOxF,UAAU8G,aAAatB,OAAOxF,UAAU0D,QAAQ,SAASwR;QAG9D,OAFAzV,KAAKsE,KAAKmR,QACVzV,KAAKwE,KAAKiR,QACHzV;OAGT+F,OAAOxF,UAAUmF,OAAO;QAEtB,OADA1F,KAAKiE,MAAM,IAAIjE,KAAK0D,cACb1D;OAGT+F,OAAOxF,UAAUmV,YAAY;QAC3B,IAAIpR,IAAItE,KAAKsE,GACTE,IAAIxE,KAAKwE;QAGb,OAFAxE,KAAKsE,KAAKE,GACVxE,KAAKwE,IAAIF,GACFtE;OAGT+F,OAAOxF,UAAUkF,WAAW;QAC1B,IAAInB,IAAItE,KAAKsE,GACTE,IAAIxE,KAAKwE;QAGb,OAFAxE,KAAKsE,IAAIE,GACTxE,KAAKwE,KAAKF,GACHtE;OAIT+F,OAAOxF,UAAU2K,SAAS,SAAS5F;QACjC,IAAIhB,IAAItE,KAAKsE,GACTE,IAAIxE,KAAKwE,GACT8O,MAAMzL,KAAKyL,IAAIhO,QACf+N,MAAMxL,KAAKwL,IAAI/N;QAGnB,OAFAtF,KAAKsE,IAAIA,IAAI+O,MAAM7O,IAAI8O,KACvBtT,KAAKwE,IAAIF,IAAIgP,MAAM9O,IAAI6O,KAChBrT;OAGT+F,OAAOxF,UAAU4F,SAAS,SAASyF;QACjC,OAAO5L,KAAKsE,IAAIsH,EAAEtH,IAAItE,KAAKwE,IAAIoH,EAAEpH;OAGnCuB,OAAOxF,UAAUoV,WAAW,SAAS/J;QACnC,OAAO5L,KAAKsE,IAAIsH,EAAEpH,IAAIxE,KAAKwE,IAAIoH,EAAEtH;OAGnCyB,OAAOxF,UAAUmD,YAAY;QAC3B,OAAOmE,KAAK+N,KAAK5V,KAAKsE,IAAItE,KAAKsE,IAAItE,KAAKwE,IAAIxE,KAAKwE;OAGnDuB,OAAOxF,UAAUgM,mBAAmB;QAClC,OAAOvM,KAAKsE,IAAItE,KAAKsE,IAAItE,KAAKwE,IAAIxE,KAAKwE;OAGzCuB,OAAOxF,UAAUgF,WAAW;QAC1B,OAAOsC,KAAKgO,MAAM7V,KAAKwE,GAAGxE,KAAKsE;OAGjCyB,OAAOxF,UAAU6S,eAAe,SAASxH;QACvC,IAAIyH,MAAMrT,KAAKsE,IAAIsH,EAAEtH,IAAItE,KAAKwE,IAAIoH,EAAEpH,GAChC8O,MAAMtT,KAAKwE,IAAIoH,EAAEtH,IAAItE,KAAKsE,IAAIsH,EAAEpH;QAEpC,OAAOqD,KAAKgO,MAAMvC,KAAKD;OAGzBxT,OAAOkG,SAASA;EAEI,sBAAZlE,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UCjJxE,SAAUhC;IAET;IA0BA,SAASiW,aAAaC;QASpB,KARA,IAOWC,IAPPC,UACF,SACA,sBACA,aACA,eAGEvT,IAAI,IACAsT,MAAMtT,MAAMuT,MAAMrT,UACxB;YACEoT,KAAKD,OAAOxE,WAAW0E,MAAMvT;UAC7B,OAAMwT;QAGV,OAAOF;;IAGT,SAASG,oBAAoBH,IAAII,QAAQC;QACvC,IAAIC,KAAKN,GAAGO,aAAaP,GAAGQ,gBACxBC,KAAKT,GAAGO,aAAaP,GAAGU;QAQ5B,IANAV,GAAGW,aAAaL,IAAIF,SACpBJ,GAAGW,aAAaF,IAAIJ,SAEpBL,GAAGY,cAAcN;QACjBN,GAAGY,cAAcH,MAEZT,GAAGa,mBAAmBP,IAAIN,GAAGc,iBAEhC,MADAC,QAAQC,MAAM,+BAA+BhB,GAAGiB,iBAAiBX;QAC3D,IAAI7V,MAAM;QAGlB,KAAKuV,GAAGa,mBAAmBJ,IAAIT,GAAGc,iBAEhC,MADAC,QAAQC,MAAM,+BAA+BhB,GAAGiB,iBAAiBR;QAC3D,IAAIhW,MAAM;QAGlB,IAAIyW,UAAUlB,GAAGmB;QAQjB,OANAnB,GAAGoB,aAAaF,SAASZ,KACzBN,GAAGoB,aAAaF,SAAST,KACzBT,GAAGqB,YAAYH;QAEfH,QAAQO,IAAI,kBAAkBtB,GAAGuB,oBAAoBL,SAASlB,GAAGwB;QAE1DN;;IAGT,SAASO,oBAAoBzB,IAAInK;QAC/BA,OAAOA,QAAQ;QAEf,IAAIkK,SAAS2B,SAASC,cAAc;QACpC5B,OAAOnH,QAAQmH,OAAOlH,SAAShD;QAC/B,IAAIyF,MAAMyE,OAAOxE,WAAW,OACxBqG,MAAa,KAAP/L;QAQV,OANAyF,IAAIW,aACJX,IAAIY,IAAI0F,KAAKA,KAAKA,KAAK,GAAa,IAAV/P,KAAKsK,KAAQ,IACvCb,IAAIkB;QACJlB,IAAIM,YAAY,QAChBN,IAAI5B,QAEGmI,cAAc7B,IAAID;;IAG3B,SAAS8B,cAAc7B,IAAI8B;QACzB,IAAIC,UAAU/B,GAAG6B;QAWjB,OATA7B,GAAGgC,YAAYhC,GAAGiC,YAAYF,UAC9B/B,GAAGkC,WAAWlC,GAAGiC,YAAY,GAAGjC,GAAGmC,MAAMnC,GAAGmC,MAAMnC,GAAGoC,eAAeN;QACpE9B,GAAGqC,cAAcrC,GAAGiC,YAAYjC,GAAGsC,oBAAoBtC,GAAGuC,SAC1DvC,GAAGqC,cAAcrC,GAAGiC,YAAYjC,GAAGwC,oBAAoBxC,GAAGuC;QAC1DvC,GAAGqC,cAAcrC,GAAGiC,YAAYjC,GAAGyC,gBAAgBzC,GAAG0C,gBACtD1C,GAAGqC,cAAcrC,GAAGiC,YAAYjC,GAAG2C,gBAAgB3C,GAAG0C;QACtD1C,GAAG4C,eAAe5C,GAAGiC,aACrBjC,GAAGgC,YAAYhC,GAAGiC,YAAY,OAEvBF;;IAGT,SAASc,WAAWlK;QAClB,OAAM3O,gBAAgB6Y,cAEtB7Y,KAAK2O,KAAKA,IACV3O,KAAK4O,QAAQD,GAAGC,OAChB5O,KAAK6O,SAASF,GAAGE;QACjB7O,KAAKgW,KAAKF,aAAanH,KAEvB3O,KAAK8Y,eACL9Y,KAAK+Y,YACL/Y,KAAKgZ,SAAS,IAAIC,aAAa;QAC/BjZ,KAAKkZ,SAAS,IAAID,aAAa,MAE/BjZ,KAAK+P,WAAW/P,KAAK+P,SAAS7G,KAAKlJ,OAEnCA,KAAKgW,GAAGmD,SAAS,GAAG,GAAGnZ,KAAK4O,OAAO5O,KAAK6O;QACxC7O,KAAKoZ,gBAAgB,IAAIH,eAAcjZ,KAAK4O,OAAO5O,KAAK6O,WAExDkI,QAAQO,IAAI,kBAAkBtX,KAAK4O,OAAO5O,KAAK6O;QAE/C7O,KAAKqZ,eACLrZ,KAAKsZ,eAELtZ,KAAKuZ,kBAAkB9B,oBAAoBzX,KAAKgW;QAEhDhW,KAAKgW,GAAGwD,UAAUxZ,KAAKgW,GAAGyD,WAAWzZ,KAAKgW,GAAG0D,MAE7C1Z,KAAKgW,GAAG2D,OAAO3Z,KAAKgW,GAAG4D;QAxBvB5Z,UAF0C,IAAI6Y,WAAWlK;;IA1G3D,IAAIkL,gBAEF,0BACA,4BACA,yBAEA,iBACE,yDACA,6CAEA,sCACA,8BACF,MACAC,KAAK,OAEHC,gBACF,4BACA,8BAEA,qBACE,qDACF,MACAD,KAAK;IAiHPjB,WAAWtY;QACT8Y,aAAa;YACX,IAAIrD,KAAKhW,KAAKgW;YACdhW,KAAKga,iBAAiB7D,oBAAoBH,IAAI6D,aAAaE,cAC3D/Z,KAAKga,eAAeC;gBAClBd,UAAUnD,GAAGkE,mBAAmBla,KAAKga,gBAAgB;eAEvDha,KAAKga,eAAeG;gBAClB9W,UAAU2S,GAAGoE,kBAAkBpa,KAAKga,gBAAgB;gBACpDnO,MAAMmK,GAAGoE,kBAAkBpa,KAAKga,gBAAgB;eAElDjD,QAAQO,IAAI,mBAAmBtX,KAAKga;;QAEtCV,aAAa;YACX,IAAItD,KAAKhW,KAAKgW;YACdhW,KAAKqa,yBAAyBrE,GAAGsE,gBACjCta,KAAKua,qBAAqBvE,GAAGsE;;QAE/BvK,UAAU,SAASvN,MAAMwN;YACvBhQ,KAAKiQ,MAAMzN,OACXxC,KAAKkQ,cAAcF,IAAI/P;;QAgBzBgQ,OAAO;YACL,IAAI+F,KAAKhW,KAAKgW;YACdA,GAAG/F,MAAM+F,GAAGwE,mBAAmBxE,GAAGyE;;QAEpCrK,YAAY,SAASkB,KAAKhI;YACxBgI,IAAIK,QACJL,IAAIS,YAAY,GAChBT,IAAIU,cAAc,6BAClBV,IAAIM,YAAY;YAEhB,KAAK,IAAIlP,IAAI,GAAG4H,OAAOhB,OAAO1G,QAAY0H,OAAJ5H,GAAUA,KAAK;gBACnD,IAAIsH,QAAQV,OAAO5G;gBACfsH,iBAAiBnK,OAAO4Q,kBAC1Ba,IAAIW,aACJX,IAAIY,IAAIlI,MAAM1F,GAAG0F,MAAMxF,GAAqC,KAAlCwF,MAAMgB,WAAWhB,MAAMgB,UAAgB,GAAG,IAAInD,KAAKsK,KAAI;gBACjFb,IAAI5B;;YAIR4B,IAAIQ;;QAEN5B,eAAe;YACb,IAAI8F,KAAKhW,KAAKgW,IAEV8C,WAAW9Y,KAAK8Y,UAChBC,QAAQ/Y,KAAK+Y;YAEjBD,SAASlW,SAAS,GAClBmW,MAAMnW,SAAS;YAIf,KAAK,IAFD9B,UAEK4B,IAAI,GAAG4H,OAAO0F,IAAI/P,UAAU2C,QAAY0H,OAAJ5H,GAAUA,KACrD5B,WAAWkP,IAAI/P,UAAUyC;YACzBoW,SAAS/X,KAAKD,SAASuC,SAASiB,GAAGxD,SAASuC,SAASmB,GAAG,IACxDuU,MAAMhY,KAAK;YAGb,IAAI+X,SAASlW,SAAS5C,KAAKgZ,OAAOpW,QAAQ,MAAM,IAAInC,MAAM;YAE1D,IADAT,KAAKgZ,OAAOxS,IAAIsS,UAAU,IACtBC,MAAMnW,SAAS5C,KAAKkZ,OAAOtW,QAAQ,MAAM,IAAInC,MAAM;YACvDT,KAAKkZ,OAAO1S,IAAIuS,OAAO,IAEvB/C,GAAG0E,cAAc1E,GAAG2E,WACpB3E,GAAGgC,YAAYhC,GAAGiC,YAAYjY,KAAKuZ;YAEnCvD,GAAG4E,WAAW5a,KAAKga,iBACnBhE,GAAG6E,WAAW7a,KAAKga,eAAeC,SAASd,UAAUnZ,KAAKoZ;YAG1DpD,GAAG8E,WAAW9E,GAAG+E,cAAc/a,KAAKqa,yBACpCrE,GAAGgF,WAAWhF,GAAG+E,cAAc/a,KAAKgZ,QAAQhD,GAAGiF;YAC/CjF,GAAGkF,oBAAoBlb,KAAKga,eAAeG,WAAW9W,UAAU,GAAG2S,GAAGmF,QAAO,GAAO,GAAG;YACvFnF,GAAGoF,wBAAwBpb,KAAKga,eAAeG,WAAW9W,WAG1D2S,GAAG8E,WAAW9E,GAAG+E,cAAc/a,KAAKua;YACpCvE,GAAGgF,WAAWhF,GAAG+E,cAAc/a,KAAKkZ,QAAQlD,GAAGiF,cAC/CjF,GAAGkF,oBAAoBlb,KAAKga,eAAeG,WAAWtO,MAAM,GAAGmK,GAAGmF,QAAO,GAAO,GAAG;YACnFnF,GAAGoF,wBAAwBpb,KAAKga,eAAeG,WAAWtO,OAE1DmK,GAAGqF,WAAWrF,GAAGsF,QAAQ,GAAGxC,SAASlW,SAAS;;QAIhD4O,iBAAiB,SAASF,KAAKnR;YAC7B,IAAIoS,QACA7Q;YAEJ4P,IAAIK,QACJL,IAAIU,cAAc,0BAClBV,IAAIS,YAAY;YAEhB,KAAK,IAAIrP,IAAI,GAAG4H,OAAOnK,YAAYyC,QAAY0H,OAAJ5H,GAAUA,KACnDhB,aAAavB,YAAYuC;YAEG,aAAxBhB,WAAWW,YACbkQ,SAAS7Q,WAAW0C,aACpBkN,IAAIW;YACJX,IAAI5E,OAAO6F,OAAOlO,IAAIkO,OAAOhO,KAC7B+M,IAAIN,OAAOuB,OAAO9N,IAAI8N,OAAO7N,KAC7B4M,IAAIkB;YACJlB,IAAIgB,YAE2B,YAAxB5Q,WAAWW,aAClBkQ,SAAS7Q,WAAW+Q;YACpBnB,IAAIW,aACJX,IAAI5E,OAAO6F,OAAOjO,IAAI,GAAGiO,OAAO/N,IAAI,IACpC8M,IAAIN,OAAOuB,OAAOjO,IAAI,GAAGiO,OAAO/N,IAAI;YACpC8M,IAAIkB,aACJlB,IAAIgB;YAGRhB,IAAIQ;;QAEN3B,WAAW,SAASmB,KAAKpR;YACvBoR,IAAIK,QACJL,IAAIU,cAAc,4BAClBV,IAAIS,YAAY;YAEhB,KADA,IAAIxQ,MAAMmB,IAAIxC,MAAM0C,QACbF,OACLnB,OAAOrB,MAAMwC,GAAG0B,aAChBkN,IAAIW;YACJX,IAAI5E,OAAOnL,KAAK8C,IAAI9C,KAAKgD,KACzB+M,IAAIN,OAAOzP,KAAKkD,IAAIlD,KAAKmD,KACzB4M,IAAIkB,aACJlB,IAAIgB;YAIN,OAFAhB,IAAIQ,WAEG5R,MAAM0C;;QAEf6O,YAAY,SAASH,KAAKoB;YACxBpB,IAAIK,QACJL,IAAIM,YAAY,QAChBN,IAAI3B,OAAO,kBACX2B,IAAIqB,SAAS,gBAAgBD,OAAOzS,WAAW,IAAI;YACnDqR,IAAIqB,SAAS,YAAYD,OAAOxS,OAAO,IAAI,KAC3CoR,IAAIqB,SAAS,aAAaD,OAAOpJ,QAAQ,IAAI;YAC7CgI,IAAIqB,SAAS,kBAAkBD,OAAOvS,aAAa,IAAI,KACvDmR,IAAIQ;;QAENJ,SAAS,SAAS1B;YAChB,IAAI4C,OAAO,UAAU5C,IAAIM;YACzBgB,IAAIK,QACJL,IAAIM,YAAY,QAChBN,IAAI3B,OAAO,kBACX2B,IAAIqB,SAASC,MAAM,IAAI;YACvBtB,IAAIQ;;OAIRjS,OAAOgZ,aAAaA;EAEA,sBAAZhX,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B,UCrTxE,SAAUhC;IAET;IAGA,SAAS0b,IAAItW,GAAGC;QACd,QAASD,IAAIC,IAAKA,KAAKA;;IAGzB,SAASsW,eAAezZ,MAAMC,KAAKC,OAAOC,QAAQjC;QAChD,OAAMD,gBAAgBwb,kBAEtBxb,KAAKmC,OAAOtC,OAAOuC,UAAUL,MAAMC,KAAKC,OAAOC;QAC/ClC,KAAKC,YAAYA,WAEjBD,KAAKM,QAAQD,QAHbL,UAF8C,IAAIwb,eAAezZ,MAAMC,KAAKC,OAAOC,QAAQjC;;IAQ7Fub,eAAejb,UAAU8B,WAAW,kBACpCmZ,eAAejb,UAAU+B,WAAW;IAEpCkZ,eAAejb,UAAUC,QAAQ,SAASJ,WAAWE;QACnDF,UAAUQ,iBAAgBZ,SAC1BA,KAAKM,QAAQA;OAGfkb,eAAejb,UAAUgC,UAAU,SAASC,MAAMC;QAMhD,KALA,IAEI3B,UAAU+P,KAFV5Q,YAAYD,KAAKC,aAAawC,cAC9BC,IAAI,IAAIC,MAAM1C,UAAU2C,QAExBT,OAAOnC,KAAKmC,QAEPO,IAAIC,OAEX,IADAkO,MAAM5Q,UAAUyC,GAAGW;QACfwN,IAAIvM,IAAInC,KAAKJ,QAAQ8O,IAAIvM,IAAInC,KAAKF,SAAS4O,IAAIrM,IAAIrC,KAAKH,OAAO6O,IAAIrM,IAAIrC,KAAKD,QAAQ;YACtFpB,WAAWb,UAAUyC;YACrB,IAAI+Y,OAAOF,IAAIza,SAASuC,SAASiB,GAAGtE,KAAKmC,KAAKyM,SAAS5O,KAAKmC,KAAKJ,MAC7D2Z,OAAOH,IAAIza,SAASuC,SAASmB,GAAGxE,KAAKmC,KAAK0M,UAAU7O,KAAKmC,KAAKH;YAClElB,SAAS6L,QAAQ8O,MAAMC;;OAK7B7b,OAAO2b,iBAAiBA;EAEJ,sBAAZ3Z,UAAyB7B,KAAa,SAAEA,KAAa,eAAU6B"}