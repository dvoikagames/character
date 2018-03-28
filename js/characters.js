function Characters() {
    PIXI.loader.add([
        "img/back/eyebrows/0.png",
        "img/back/eyes/blush/0.png",
        "img/back/eyes/normal/0.png",
        "img/back/mouth/0.png",
        "img/front/eyebrows/0.png",
        "img/front/eyes/blush/0.png",
        "img/front/eyes/normal/0.png",
        "img/front/mouth/0.png",
        "img/left/eyebrows/0.png",
        "img/left/eyes/blush/0.png",
        "img/left/eyes/normal/0.png",
        "img/left/mouth/0.png",
        "img/right/eyebrows/0.png",
        "img/right/eyes/blush/0.png",
        "img/right/eyes/normal/0.png",
        "img/right/mouth/0.png",
        "img/back/eyebrows/1.png",
        "img/back/eyes/blush/1.png",
        "img/back/eyes/normal/1.png",
        "img/back/mouth/1.png",
        "img/front/eyebrows/1.png",
        "img/front/eyes/blush/1.png",
        "img/front/eyes/normal/1.png",
        "img/front/mouth/1.png",
        "img/left/eyebrows/1.png",
        "img/left/eyes/blush/1.png",
        "img/left/eyes/normal/1.png",
        "img/left/mouth/1.png",
        "img/right/eyebrows/1.png",
        "img/right/eyes/blush/1.png",
        "img/right/eyes/normal/1.png",
        "img/right/mouth/1.png",
        "img/back/eyebrows/2.png",
        "img/back/eyes/blush/2.png",
        "img/back/eyes/normal/2.png",
        "img/back/mouth/2.png",
        "img/front/eyebrows/2.png",
        "img/front/eyes/blush/2.png",
        "img/front/eyes/normal/2.png",
        "img/front/mouth/2.png",
        "img/left/eyebrows/2.png",
        "img/left/eyes/blush/2.png",
        "img/left/eyes/normal/2.png",
        "img/left/mouth/2.png",
        "img/right/eyes/blush/2.png",
        "img/right/eyes/normal/2.png",
        "img/right/mouth/2.png",
        "img/back/eyes/blush/3.png",
        "img/back/eyes/normal/3.png",
        "img/back/mouth/3.png",
        "img/front/eyebrows/3.png",
        "img/front/eyes/blush/3.png",
        "img/front/eyes/normal/3.png",
        "img/left/eyebrows/3.png",
        "img/left/eyes/blush/3.png",
        "img/left/eyes/normal/3.png",
        "img/left/mouth/3.png",
        "img/right/eyes/blush/3.png",
        "img/right/eyes/normal/3.png",
        "img/right/mouth/3.png",
        "img/back/eyes/blush/4.png",
        "img/back/eyes/normal/4.png",
        "img/front/eyes/blush/4.png",
        "img/front/eyes/normal/4.png",
        "img/left/eyebrows/4.png",
        "img/left/eyes/blush/4.png",
        "img/left/eyes/normal/4.png",
        "img/left/mouth/4.png",
        "img/right/eyes/blush/4.png",
        "img/right/eyes/normal/4.png",
        "img/back/eyes/blush/5.png",
        "img/back/eyes/normal/5.png",
        "img/left/eyebrows/5.png",
        "img/left/eyes/blush/5.png",
        "img/left/eyes/normal/5.png",
        "img/left/mouth/5.png",
        "img/right/eyes/blush/5.png",
        "img/right/eyes/normal/5.png",
        "img/left/mouth/6.png",
        "img/left/mouth/7.png",
        "img/left/mouth/8.png",
        "img/left/mouth/9.png",
        "img/left/mouth/10.png",
        "img/left/mouth/11.png",
        "img/fg.png",
        "img/buttons/lEyebrows.png",
        "img/buttons/lEyes.png",
        "img/buttons/lHead.png",
        "img/buttons/lMouth.png",
        "img/buttons/radio.png",
        "img/buttons/rEyebrows.png",
        "img/buttons/rEyes.png",
        "img/buttons/rHead.png",
        "img/buttons/rMouth.png",
        "audio/ui_pipboy_mode.ogg"
    ]);
    PIXI.loader.load(this.setup.bind(this));
    // this.init();
}

Characters.prototype = {
    constructor: Characters,

    setup: function (loader, resources) {
        this.res = resources;

        this.heads = ["back", "left", "front", "right"];
        this.current = {
            head: "back",
            mouth: 0,
            eyes: 0,
            estyle: "normal",
            eyebrows: 0
        };

        this.createApp();
        this.createSprites();
        this.createButtons();
        this.refresh();
    },

    createButtons: function () {
        this.buttons = {};
        this.buttons.lHead = new PIXI.Sprite(this.res["img/buttons/lHead.png"].texture);
        this.buttons.lHead.position.set(598, 97);
        this.buttons.lHead.on('click', this.prevHead.bind(this));

        this.buttons.rHead = new PIXI.Sprite(this.res["img/buttons/rHead.png"].texture);
        this.buttons.rHead.position.set(631, 97);
        this.buttons.rHead.on('click', this.nextHead.bind(this));

        this.buttons.lMouth = new PIXI.Sprite(this.res["img/buttons/lMouth.png"].texture);
        this.buttons.lMouth.position.set(598, 142);
        this.buttons.lMouth.on('click', this.prev.bind(this, "mouth"));

        this.buttons.rMouth = new PIXI.Sprite(this.res["img/buttons/rMouth.png"].texture);
        this.buttons.rMouth.position.set(631, 142);
        this.buttons.rMouth.on('click', this.next.bind(this, "mouth"));

        this.buttons.lEyes = new PIXI.Sprite(this.res["img/buttons/lEyes.png"].texture);
        this.buttons.lEyes.position.set(598, 183);
        this.buttons.lEyes.on('click', this.prev.bind(this, "eyes"));

        this.buttons.rEyes = new PIXI.Sprite(this.res["img/buttons/rEyes.png"].texture);
        this.buttons.rEyes.position.set(631, 183);
        this.buttons.rEyes.on('click', this.next.bind(this, "eyes"));

        this.buttons.lEyebrows = new PIXI.Sprite(this.res["img/buttons/lEyebrows.png"].texture);
        this.buttons.lEyebrows.position.set(598, 228);
        this.buttons.lEyebrows.on('click', this.prev.bind(this, "eyebrows"));

        this.buttons.rEyebrows = new PIXI.Sprite(this.res["img/buttons/rEyebrows.png"].texture);
        this.buttons.rEyebrows.position.set(631, 228);
        this.buttons.rEyebrows.on('click', this.next.bind(this, "eyebrows"));

        this.buttons.radio = new PIXI.Sprite(this.res["img/buttons/radio.png"].texture);
        this.buttons.radio.position.set(617, 269);
        this.buttons.radio.on('click', this.radio.bind(this));

        var keys = Object.keys(this.buttons);

        for (var i = 0; i < keys.length; i++) {
            var button = this.buttons[keys[i]];

            button.alpha = 1;
            button.interactive = true;
            button.buttonMode = true;
            if (button !== this.buttons.radio) {
                button.on("mouseover", function () {
                    this.alpha = 0;
                });

                button.on("mouseout", function () {
                    this.alpha = 1;
                });
            }
            this.app.stage.addChild(button)
        }

    },

    createApp: function () {
        this.app = new PIXI.Application({width: 734, height: 400});
        document.body.appendChild(this.app.view);

    },

    createSprites: function () {
        this.mouth = new PIXI.Sprite();
        this.eyes = new PIXI.Sprite();
        this.eyebrows = new PIXI.Sprite();
        this.fg = new PIXI.Sprite(this.res["img/fg.png"].texture);
        this.app.stage.addChild(this.mouth, this.eyes, this.eyebrows, this.fg)
    },

    clickSE: function () {
        this.res["audio/ui_pipboy_mode.ogg"].sound.play();
    },

    radio: function () {
        if (this.current.estyle === "normal") {
            this.current.estyle = "blush";
            this.buttons.radio.alpha = 0;
        } else {
            this.current.estyle = "normal";
            this.buttons.radio.alpha = 1;
        }
        this.clickSE();
        this.refresh()
    },

    defaults: function () {
        this.current.mouth = 0;
        this.current.eyes = 0;
        this.current.estyle = "normal";
        this.current.eyebrows = 0;

        this.buttons.radio.alpha = 1;
    },

    getBasePath: function (type) {
        var basePath = "img/" + this.current.head + "/" + type + "/";

        if (type === "eyes") {
            basePath += this.current.estyle + "/"
        }

        return basePath;
    },

    nextHead: function () {
        var index = this.heads.indexOf(this.current.head);
        if (index < this.heads.length - 1) {
            this.current.head = this.heads[index + 1]
        } else {
            this.current.head = this.heads[0];
        }

        this.defaults();
        this.clickSE();
        this.refresh();
    },

    prevHead: function () {
        var index = this.heads.indexOf(this.current.head);
        if (index === 0) {
            this.current.head = this.heads[this.heads.length - 1]
        } else {
            this.current.head = this.heads[index - 1];
        }

        this.defaults();
        this.clickSE();
        this.refresh();
    },

    next: function (type) {
        //Check if next resource exist
        if (this.res[this.getBasePath(type) + (this.current[type] + 1) + ".png"]) {
            this.current[type] += 1
        } else {
            this.current[type] = 0
        }

        this.clickSE();
        this.refresh()
    },

    prev: function (type) {
        //Get last file index
        var max = 20;
        while (max > 0 && !this.res[this.getBasePath(type) + max + ".png"]) {
            max--
        }

        if (this.current[type] === 0) {
            this.current[type] = max;
        } else {
            this.current[type] -= 1;
        }

        this.clickSE();
        this.refresh()
    },

    refresh: function () {
        var mouthTexturePath = "img/" + this.current.head + "/mouth/" + String(this.current.mouth) + ".png";
        var eyesTexturePath = "img/" + this.current.head + "/eyes/" + String(this.current.estyle) + "/" + this.current.eyes + ".png";
        var eyebrowsTexturePath = "img/" + this.current.head + "/eyebrows/" + String(this.current.eyebrows) + ".png";

        // console.log(mouthTexturePath);
        // console.log(eyesTexturePath);
        // console.log(eyebrowsTexturePath);

        this.mouth.texture = this.res[mouthTexturePath].texture;
        this.eyes.texture = this.res[eyesTexturePath].texture;
        this.eyebrows.texture = this.res[eyebrowsTexturePath].texture;
    }

};

var characters = new Characters();
