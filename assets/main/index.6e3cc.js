window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  all_modules: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c9feaxsVM1PLKsqJQNZxXwa", "all_modules");
    "use strict";
    var _module$exports;
    module.exports = (_module$exports = {
      imgBank: {},
      utils: require("utils"),
      utilsFB: require("utils_facebook"),
      fx: require("fx"),
      sound: require("sound"),
      uiLayout: require("ui_layout"),
      gamePlay: require("game_play"),
      gameManager: require("game_manager"),
      configs: require("configs"),
      social: require("social"),
      rewards: require("rewards")
    }, _module$exports["sound"] = require("sound"), _module$exports.setModules = function setModules() {
      window._G = require("all_modules");
      _G.imgBank = {};
      _G.prefabList = cc.find("Canvas").getComponent("prefab_list");
      _G.utils = require("utils");
      _G.utilsFB = require("utils_facebook");
      _G.fx = require("fx");
      _G.sound = require("sound");
      _G.uiLayout = require("ui_layout");
      _G.gamePlay = require("game_play");
      _G.gameManager = require("game_manager");
      _G.configs = require("configs");
      _G.social = require("social");
      _G.rewards = require("rewards");
      _G.sound = require("sound");
    }, _module$exports.initModules = function initModules() {
      require("utils_instant").init();
      _G.utils.init();
      _G.uiLayout.init();
      _G.gamePlay.init();
      _G.gameManager.init();
      _G.social.init();
      _G.rewards.init();
      _G.fx.init();
    }, _module$exports);
    cc._RF.pop();
  }, {
    all_modules: "all_modules",
    configs: "configs",
    fx: "fx",
    game_manager: "game_manager",
    game_play: "game_play",
    rewards: "rewards",
    social: "social",
    sound: "sound",
    ui_layout: "ui_layout",
    utils: "utils",
    utils_facebook: "utils_facebook",
    utils_instant: "utils_instant"
  } ],
  bot_subscribe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "069a19pCi9JWIA8XvJG8KLb", "bot_subscribe");
    "use strict";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        if (!window.FBInstant) return;
        var logFBEvent = function logFBEvent(eventName) {
          FBInstant.logEvent(eventName, 1);
        };
        var subscribeFunc = function subscribeFunc(callback, isShowToolTip, isSession2) {
          void 0 === isShowToolTip && (isShowToolTip = true);
          void 0 === isSession2 && (isSession2 = false);
          FBInstant.player.canSubscribeBotAsync().then(function(can_subscribe) {
            console.log(" can_subscribe = " + can_subscribe + " ");
            if (!can_subscribe) {
              logFBEvent("event_bot_session1_cannot_subscribe");
              callback && callback("can_subscribe_false");
              return;
            }
            window._isCancelledSubscribeBot && logFBEvent("event_bot_session2_subscribe_twice");
            var platform = FBInstant.getPlatform();
            console.log(" platform = '" + platform + "' ");
            var pos = {
              IOS: {
                x: -5,
                y: -300
              },
              ANDROID: {
                x: 28,
                y: -403
              },
              WEB: {
                x: 0,
                y: -300
              }
            }[platform];
            pos = pos || {
              x: 28,
              y: -350
            };
            chatBox.setPosition(pos);
            chatBox.stopAllActions();
            chatBox.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.4, cc.v2(0, -20)).easing(cc.easeOut(1.5)), cc.moveBy(.4, cc.v2(0, 20)).easing(cc.easeOut(1.5)))));
            chatBox.active = isShowToolTip;
            FBInstant.player.subscribeBotAsync().then(function() {
              cc.find("suggest_subscribe").active = false;
              callback && callback("accepted_subscribe");
              logFBEvent(isSession2 ? "event_bot_session2_accepted" : "event_bot_session1_accepted");
              FBInstant.player.setDataAsync({
                isSubscribedToBot: true
              }).then(function() {
                console.log("saved to FB isSubscribedToBot = true");
              });
            })["catch"](function(e) {
              cc.find("suggest_subscribe").active = false;
              FBInstant.player.setDataAsync({
                isCancelledSubscribeBot: true
              }).then(function() {
                console.log("saved to FB isCancelledSubscribeBot = true");
              });
              callback && callback("cancelled_subscribe");
              console.log("subscribe error", e);
              logFBEvent(isSession2 ? "event_bot_session2_cancelled" : "event_bot_session1_cancelled");
            });
          }, function(e) {
            callback && callback("cancelled_subscribe");
            console.log(" can not subscribe. error ");
            console.log(e);
          })["catch"](function(e) {
            callback && callback("cancelled_subscribe");
          });
        };
        window._fbSubscribeBot = subscribeFunc;
        window._askSubscribeSession2 = function() {
          setTimeout(function() {
            _fbSubscribeBot(null, true, true);
          }, 1e3);
        };
      }
    });
    cc._RF.pop();
  }, {} ],
  configs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6eddddEcdI3oAyhpYqnS9x", "configs");
    "use strict";
    module.exports = {
      continueGameWaitTime: 5,
      knifeFlyTime: .4,
      timeScaleEachLevelRepeat: .1,
      minTimeScaleLevelRepeat: .2,
      interAdId: "1118063555013168_1252989038187285",
      videoRewardId: "1118063555013168_1155699211249602",
      dailyReward: [ {
        gold: 100
      }, {
        diamond: 25
      }, {
        gold: 200
      }, {
        diamond: 50
      }, {
        gold: 500
      }, {
        diamond: 100
      }, {
        gold: 1e3,
        diamond: 200
      } ],
      suggestTripleKnivesRatios: {
        case_1: [ .2, .5, .6, .8 ],
        case_2: [ .5, .6, .7, .8 ],
        case_3: [ .1, .2, .5, .6 ],
        case_3_1: [ .2, .3, .5, .7 ],
        case_3_2: [ .1, .1, .3, .5 ],
        case_3_2_2: [ .2, .3, .4, .5 ]
      },
      frameTypes: [ "square_9", "triangle_6", "rectangle_6", "circle_8" ],
      fruitSwingTypes: [ [ {
        deltaAngle: 180,
        deltaTime: 2
      }, {
        deltaAngle: 720,
        deltaTime: 6
      }, {
        deltaAngle: -360,
        deltaTime: 2
      }, {
        deltaAngle: 1080,
        deltaTime: 8
      }, {
        deltaAngle: -180,
        deltaTime: 2
      } ] ],
      frameSwingTypes: [ [ {
        deltaAngle: 360,
        deltaTime: 6
      }, {
        deltaAngle: 720,
        deltaTime: 6
      }, {
        deltaAngle: 1080,
        deltaTime: 6
      } ], [ {
        deltaAngle: -360,
        deltaTime: 6
      }, {
        deltaAngle: -720,
        deltaTime: 6
      }, {
        deltaAngle: -1080,
        deltaTime: 6
      } ], [ {
        deltaAngle: 45,
        deltaTime: 0
      }, {
        deltaAngle: 405,
        deltaTime: 5
      }, {
        deltaAngle: 765,
        deltaTime: 5
      } ], [ {
        deltaAngle: 360,
        deltaTime: 4
      }, {
        deltaAngle: -360,
        deltaTime: 3
      }, {
        deltaAngle: -360,
        deltaTime: 5
      } ], [ {
        deltaAngle: 45,
        deltaTime: 0
      }, {
        deltaAngle: 585,
        deltaTime: 5
      }, {
        deltaAngle: 45,
        deltaTime: 4
      } ], [ {
        deltaAngle: 45,
        deltaTime: 1
      }, {
        deltaAngle: 585,
        deltaTime: 5
      }, {
        deltaAngle: 50,
        deltaTime: 1
      } ], [ {
        deltaAngle: 360,
        deltaTime: 6
      }, {
        deltaAngle: -25,
        deltaTime: 4
      }, {
        deltaAngle: 155,
        deltaTime: 2
      }, {
        deltaAngle: 305,
        deltaTime: 3
      }, {
        deltaAngle: 360,
        deltaTime: 5
      } ], [ {
        deltaAngle: 360,
        deltaTime: 6
      }, {
        deltaAngle: -25,
        deltaTime: 4
      }, {
        deltaAngle: 155,
        deltaTime: 2
      }, {
        deltaAngle: 305,
        deltaTime: 3
      }, {
        deltaAngle: 360,
        deltaTime: 5
      } ], [ {
        deltaAngle: 20,
        deltaTime: .5
      }, {
        deltaAngle: -180,
        deltaTime: 2
      }, {
        deltaAngle: 20,
        deltaTime: 1
      }, {
        deltaAngle: 180,
        deltaTime: 2
      }, {
        deltaAngle: 20,
        deltaTime: 1
      } ], [ {
        deltaAngle: 360,
        deltaTime: 6
      }, {
        deltaAngle: -720,
        deltaTime: 4
      }, {
        deltaAngle: -360,
        deltaTime: 6
      }, {
        deltaAngle: 360,
        deltaTime: 4
      } ], [ {
        deltaAngle: 180,
        deltaTime: 5
      }, {
        deltaAngle: -720,
        deltaTime: 5
      }, {
        deltaAngle: 180,
        deltaTime: 5
      }, {
        deltaAngle: -180,
        deltaTime: 5
      } ], [ {
        deltaAngle: 5,
        deltaTime: .1
      }, {
        deltaAngle: -1445,
        deltaTime: 11
      }, {
        deltaAngle: 1400,
        deltaTime: 11
      }, {
        deltaAngle: 5,
        deltaTime: .1
      } ], [ {
        deltaAngle: 45,
        deltaTime: .1
      }, {
        deltaAngle: 0,
        deltaTime: .01
      }, {
        deltaAngle: 360,
        deltaTime: 5
      }, {
        deltaAngle: 330,
        deltaTime: 2
      }, {
        deltaAngle: 375,
        deltaTime: 1
      } ], [ {
        deltaAngle: 45,
        deltaTime: 1
      }, {
        deltaAngle: 90,
        deltaTime: 1
      }, {
        deltaAngle: -105,
        deltaTime: 2
      }, {
        deltaAngle: -50,
        deltaTime: 2
      }, {
        deltaAngle: 130,
        deltaTime: 2
      } ], [ {
        deltaAngle: 10,
        deltaTime: .01
      }, {
        deltaAngle: -350,
        deltaTime: 5
      }, {
        deltaAngle: 350,
        deltaTime: 5
      } ], [ {
        deltaAngle: -360,
        deltaTime: 1
      }, {
        deltaAngle: -720,
        deltaTime: 5
      }, {
        deltaAngle: -360,
        deltaTime: 5
      }, {
        deltaAngle: 360,
        deltaTime: 1
      } ], [ {
        deltaAngle: 25,
        deltaTime: 1
      }, {
        deltaAngle: 105,
        deltaTime: 2
      }, {
        deltaAngle: 75,
        deltaTime: 1
      }, {
        deltaAngle: -100,
        deltaTime: 2
      }, {
        deltaAngle: 100,
        deltaTime: 2
      } ], [ {
        deltaAngle: -360,
        deltaTime: 3.5
      }, {
        deltaAngle: 360,
        deltaTime: 3.5
      }, {
        deltaAngle: 360,
        deltaTime: 3.5
      }, {
        deltaAngle: -360,
        deltaTime: 3
      }, {
        deltaAngle: 720,
        deltaTime: 2.5
      } ], [ {
        deltaAngle: -720,
        deltaTime: 3
      }, {
        deltaAngle: 720,
        deltaTime: 2
      }, {
        deltaAngle: 180,
        deltaTime: 3
      }, {
        deltaAngle: 360,
        deltaTime: 3
      }, {
        deltaAngle: -360,
        deltaTime: 4
      } ], [ {
        deltaAngle: -720,
        deltaTime: 4
      }, {
        deltaAngle: -760,
        deltaTime: 4
      }, {
        deltaAngle: -700,
        deltaTime: 4
      }, {
        deltaAngle: -1036,
        deltaTime: 4
      } ], [ {
        deltaAngle: -180,
        deltaTime: 3
      }, {
        deltaAngle: 180,
        deltaTime: 2
      }, {
        deltaAngle: 180,
        deltaTime: 3
      }, {
        deltaAngle: -180,
        deltaTime: 2
      }, {
        deltaAngle: 360,
        deltaTime: 4
      } ], [ {
        deltaAngle: 30,
        deltaTime: 0
      }, {
        deltaAngle: 3600,
        deltaTime: 10
      } ], [ {
        deltaAngle: 180,
        deltaTime: 2
      }, {
        deltaAngle: -20,
        deltaTime: 1
      }, {
        deltaAngle: 160,
        deltaTime: 1.5
      }, {
        deltaAngle: -40,
        deltaTime: 1
      } ], [ {
        deltaAngle: 180,
        deltaTime: 2
      }, {
        deltaAngle: -540,
        deltaTime: 3
      }, {
        deltaAngle: -360,
        deltaTime: 2.5
      }, {
        deltaAngle: -720,
        deltaTime: 2.5
      } ], [ {
        deltaAngle: 15,
        deltaTime: 1
      }, {
        deltaAngle: -360,
        deltaTime: 3
      }, {
        deltaAngle: -180,
        deltaTime: 2
      }, {
        deltaAngle: 180,
        deltaTime: 3
      }, {
        deltaAngle: 360,
        deltaTime: 3
      } ], [ {
        deltaAngle: 0,
        deltaTime: 0
      }, {
        deltaAngle: -720,
        deltaTime: 4.5
      }, {
        deltaAngle: 0,
        deltaTime: 0
      } ], [ {
        deltaAngle: 540,
        deltaTime: 3.4
      }, {
        deltaAngle: 180,
        deltaTime: 1
      }, {
        deltaAngle: -180,
        deltaTime: 2.5
      }, {
        deltaAngle: -40,
        deltaTime: 1
      }, {
        deltaAngle: -500,
        deltaTime: 3.4
      } ], [ {
        deltaAngle: -180,
        deltaTime: 2.5
      }, {
        deltaAngle: 540,
        deltaTime: 3
      }, {
        deltaAngle: 40,
        deltaTime: 1
      }, {
        deltaAngle: -40,
        deltaTime: 1
      }, {
        deltaAngle: 180,
        deltaTime: 3.5
      } ], [ {
        deltaAngle: 1800,
        deltaTime: 6
      } ], [ {
        deltaAngle: -30,
        deltaTime: 1
      }, {
        deltaAngle: 360,
        deltaTime: 5
      }, {
        deltaAngle: -360,
        deltaTime: 5
      }, {
        deltaAngle: 30,
        deltaTime: 1
      }, {
        deltaAngle: 350,
        deltaTime: 5
      } ], [ {
        deltaAngle: 350,
        deltaTime: 4
      }, {
        deltaAngle: 360,
        deltaTime: 2
      }, {
        deltaAngle: -360,
        deltaTime: 3
      }, {
        deltaAngle: 710,
        deltaTime: 4
      }, {
        deltaAngle: 720,
        deltaTime: 1.5
      } ], [ {
        deltaAngle: 5,
        deltaTime: 0
      }, {
        deltaAngle: -1445,
        deltaTime: 7
      }, {
        deltaAngle: 1400,
        deltaTime: 7
      }, {
        deltaAngle: 5,
        deltaTime: 5
      } ], [ {
        deltaAngle: 270,
        deltaTime: 8
      }, {
        deltaAngle: -230,
        deltaTime: 3
      }, {
        deltaAngle: 0,
        deltaTime: 5
      }, {
        deltaAngle: 30,
        deltaTime: 1
      }, {
        deltaAngle: 720,
        deltaTime: 5
      } ], [ {
        deltaAngle: -30,
        deltaTime: 0
      }, {
        deltaAngle: -3600,
        deltaTime: 11
      } ], [ {
        deltaAngle: -30,
        deltaTime: .5
      }, {
        deltaAngle: 210,
        deltaTime: 2
      }, {
        deltaAngle: -210,
        deltaTime: 1.5
      }, {
        deltaAngle: 180,
        deltaTime: 2
      }, {
        deltaAngle: -180,
        deltaTime: .8
      } ], [ {
        deltaAngle: 400,
        deltaTime: 4
      }, {
        deltaAngle: 5,
        deltaTime: .01
      }, {
        deltaAngle: -400,
        deltaTime: 4
      }, {
        deltaAngle: 400,
        deltaTime: 4
      }, {
        deltaAngle: 5,
        deltaTime: 2
      } ], [ {
        deltaAngle: 60,
        deltaTime: 0
      }, {
        deltaAngle: -60,
        deltaTime: 3
      }, {
        deltaAngle: 375,
        deltaTime: 4
      }, {
        deltaAngle: -60,
        deltaTime: 2
      }, {
        deltaAngle: 50,
        deltaTime: 1
      } ] ],
      levels: [ [ {
        frameType: "square_9",
        fruitList: [ 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        frameSwingType: 1
      }, {
        frameType: "rectangle_6",
        fruitList: [ 2, 3, 2, 3, 2, 3 ],
        frameSwingType: 2
      } ], [ {
        frameType: "triangle_6",
        fruitList: [ 1, 3, 3, 1, 3, 1 ],
        frameSwingType: 3
      }, {
        frameType: "circle_8",
        fruitList: [ 5, 5, 5, 5, 5, 5, 5, 5 ],
        frameSwingType: 4
      } ], [ {
        frameType: "square_9",
        fruitList: [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ],
        frameSwingType: 5
      }, {
        frameType: "rectangle_6",
        fruitList: [ 5, 5, 6, 6, 7, 7 ],
        frameSwingType: 6
      } ], [ {
        frameType: "triangle_6",
        fruitList: [ 7, 7, 7, 4, 4, 4 ],
        frameSwingType: 7
      }, {
        frameType: "rectangle_6",
        fruitList: [ 5, 2, 5, 2, 5, 2 ],
        frameSwingType: 8
      }, {
        frameType: "square_9",
        fruitList: [ 4, 5, 7, 4, 5, 7, 4, 5, 7 ],
        frameSwingType: 9
      } ], [ {
        frameType: "triangle_6",
        fruitList: [ 4, 4, 4, 5, 5, 5 ],
        frameSwingType: 10
      }, {
        frameType: "square_9",
        fruitList: [ 6, 1, 6, 1, 1, 1, 6, 1, 6 ],
        frameSwingType: 11
      }, {
        frameType: "circle_8",
        fruitList: [ 5, 6, 5, 6, 5, 6, 5, 6 ],
        frameSwingType: 12
      }, {
        frameType: "rectangle_6",
        fruitList: [ 2, 7, 2, 7, 2, 7 ],
        frameSwingType: 13
      } ], [ {
        frameType: "triangle_6",
        fruitList: [ 4, 4, 4, 5, 5, 5 ],
        frameSwingType: 14
      }, {
        frameType: "square_9",
        fruitList: [ 6, 1, 6, 1, 1, 1, 6, 1, 6 ],
        frameSwingType: 15
      }, {
        frameType: "circle_8",
        fruitList: [ 5, 6, 5, 6, 5, 6, 5, 6 ],
        frameSwingType: 16
      } ], [ {
        frameType: "square_9",
        fruitList: [ 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        frameSwingType: 17
      }, {
        frameType: "rectangle_6",
        fruitList: [ 3, 3, 6, 6, 7, 7 ],
        frameSwingType: 18
      }, {
        frameType: "triangle_6",
        fruitList: [ 1, 1, 1, 4, 4, 4 ],
        frameSwingType: 19
      }, {
        frameType: "circle_8",
        fruitList: [ 1, 7, 1, 7, 1, 7, 1, 7 ],
        frameSwingType: 20
      } ], [ {
        frameType: "rectangle_6",
        fruitList: [ 5, 5, 5, 5, 5, 5 ],
        frameSwingType: 13
      }, {
        frameType: "triangle_6",
        fruitList: [ 2, 2, 2, 3, 3, 3 ],
        frameSwingType: 2
      }, {
        frameType: "rectangle_6",
        fruitList: [ 6, 6, 6, 6, 6, 6 ],
        frameSwingType: 21
      } ], [ {
        frameType: "triangle_6",
        fruitList: [ 7, 7, 7, 7, 3, 7 ],
        frameSwingType: 22
      }, {
        frameType: "circle_8",
        fruitList: [ 1, 7, 1, 7, 1, 7, 1, 7 ],
        frameSwingType: 23
      }, {
        frameType: "square_9",
        fruitList: [ 4, 7, 4, 7, 7, 7, 4, 7, 4 ],
        frameSwingType: 24
      }, {
        frameType: "triangle_6",
        fruitList: [ 5, 5, 5, 5, 2, 5 ],
        frameSwingType: 25
      } ], [ {
        frameType: "rectangle_6",
        fruitList: [ 5, 6, 5, 6, 5, 6 ],
        frameSwingType: 26
      }, {
        frameType: "circle_8",
        fruitList: [ 3, 3, 3, 3, 3, 3, 3, 3 ],
        frameSwingType: 27
      }, {
        frameType: "square_9",
        fruitList: [ 6, 1, 6, 1, 1, 1, 6, 1, 6 ],
        frameSwingType: 28
      } ], [ {
        frameType: "rectangle_6",
        fruitList: [ 7, 7, 6, 6, 5, 5 ],
        frameSwingType: 29
      }, {
        frameType: "square_9",
        fruitList: [ 2, 2, 2, 1, 1, 1, 5, 5, 5 ],
        frameSwingType: 30
      }, {
        frameType: "square_9",
        fruitList: [ 2, 3, 7, 2, 3, 7, 2, 3, 7 ],
        frameSwingType: 24
      } ], [ {
        frameType: "triangle_6",
        fruitList: [ 4, 4, 4, 5, 5, 5 ],
        frameSwingType: 31
      }, {
        frameType: "square_9",
        fruitList: [ 6, 1, 6, 1, 1, 1, 5, 5, 5 ],
        frameSwingType: 11
      }, {
        frameType: "circle_8",
        fruitList: [ 5, 6, 5, 6, 5, 6, 5, 6 ],
        frameSwingType: 32
      }, {
        frameType: "rectangle_6",
        fruitList: [ 2, 7, 2, 7, 2, 7 ],
        frameSwingType: 13
      } ], [ {
        frameType: "square_9",
        fruitList: [ 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        frameSwingType: 14
      }, {
        frameType: "rectangle_6",
        fruitList: [ 3, 3, 6, 6, 7, 7 ],
        frameSwingType: 15
      }, {
        frameType: "triangle_6",
        fruitList: [ 4, 4, 4, 1, 1, 1 ],
        frameSwingType: 16
      }, {
        frameType: "circle_8",
        fruitList: [ 1, 7, 1, 7, 1, 7, 1, 7 ],
        frameSwingType: 20
      } ], [ {
        frameType: "rectangle_6",
        fruitList: [ 5, 5, 5, 5, 5, 5 ],
        frameSwingType: 13
      }, {
        frameType: "circle_8",
        fruitList: [ 2, 6, 2, 6, 2, 6, 2, 6 ],
        frameSwingType: 12
      }, {
        frameType: "square_9",
        fruitList: [ 1, 1, 1, 3, 3, 3, 5, 5, 5 ],
        frameSwingType: 33
      } ], [ {
        frameType: "triangle_6",
        fruitList: [ 7, 7, 7, 7, 3, 7 ],
        frameSwingType: 34
      }, {
        frameType: "circle_8",
        fruitList: [ 1, 7, 1, 7, 1, 7, 1, 7 ],
        frameSwingType: 23
      }, {
        frameType: "square_9",
        fruitList: [ 4, 7, 4, 7, 7, 7, 4, 7, 4 ],
        frameSwingType: 24
      }, {
        frameType: "triangle_6",
        fruitList: [ 5, 5, 5, 5, 2, 5 ],
        frameSwingType: 25
      } ], [ {
        frameType: "rectangle_6",
        fruitList: [ 2, 7, 2, 7, 2, 7 ],
        frameSwingType: 35
      }, {
        frameType: "triangle_6",
        fruitList: [ 1, 1, 1, 7, 7, 7 ],
        frameSwingType: 7
      }, {
        frameType: "circle_8",
        fruitList: [ 3, 3, 3, 3, 3, 3, 3, 3 ],
        frameSwingType: 27
      }, {
        frameType: "square_9",
        fruitList: [ 6, 1, 6, 1, 1, 1, 6, 1, 6 ],
        frameSwingType: 28
      } ], [ {
        frameType: "rectangle_6",
        fruitList: [ 6, 7, 6, 7, 6, 7 ],
        frameSwingType: 29
      }, {
        frameType: "square_9",
        fruitList: [ 1, 4, 4, 4, 1, 4, 4, 4, 1 ],
        frameSwingType: 36
      }, {
        frameType: "triangle_6",
        fruitList: [ 1, 1, 1, 4, 4, 4 ],
        frameSwingType: 3
      }, {
        frameType: "rectangle_6",
        fruitList: [ 5, 5, 5, 5, 5, 5 ],
        frameSwingType: 13
      } ], [ {
        frameType: "circle_8",
        fruitList: [ 5, 6, 5, 6, 5, 6, 5, 6 ],
        frameSwingType: 32
      }, {
        frameType: "rectangle_6",
        fruitList: [ 2, 7, 2, 7, 2, 7 ],
        frameSwingType: 13
      }, {
        frameType: "triangle_6",
        fruitList: [ 5, 5, 5, 5, 2, 5 ],
        frameSwingType: 25
      }, {
        frameType: "circle_8",
        fruitList: [ 4, 6, 4, 6, 4, 6, 4, 6 ],
        frameSwingType: 32
      }, {
        frameType: "square_9",
        fruitList: [ 2, 3, 6, 2, 3, 6, 2, 3, 6 ],
        frameSwingType: 24
      } ], [ {
        frameType: "rectangle_6",
        fruitList: [ 4, 4, 3, 3, 7, 7 ],
        frameSwingType: 6
      }, {
        frameType: "triangle_6",
        fruitList: [ 2, 2, 2, 2, 4, 2 ],
        frameSwingType: 2
      }, {
        frameType: "rectangle_6",
        fruitList: [ 3, 3, 6, 6, 7, 7 ],
        frameSwingType: 15
      }, {
        frameType: "square_9",
        fruitList: [ 4, 5, 7, 4, 5, 7, 4, 5, 7 ],
        frameSwingType: 9
      } ], [ {
        frameType: "circle_8",
        fruitList: [ 6, 6, 6, 6, 6, 6, 6, 6 ],
        frameSwingType: 27
      }, {
        frameType: "triangle_6",
        fruitList: [ 1, 1, 1, 7, 7, 7 ],
        frameSwingType: 7
      }, {
        frameType: "rectangle_6",
        fruitList: [ 2, 6, 2, 6, 2, 6 ],
        frameSwingType: 37
      } ] ]
    };
    cc._RF.pop();
  }, {} ],
  data: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3fcderaSytBabENuiGAnZcr", "data");
    "use strict";
    var _G = require("all_modules");
    setTimeout(function() {
      _G = require("all_modules");
    }, 0);
    module.exports = {
      init: function init() {}
    };
    cc._RF.pop();
  }, {
    all_modules: "all_modules"
  } ],
  fx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed673O+biJO4YQ1PR5r7MwE", "fx");
    "use strict";
    var _G = require("all_modules");
    setTimeout(function() {
      _G = require("all_modules");
    }, 0);
    module.exports = {
      init: function init() {
        _G.fx.blenderNode = cc.find("Canvas/gameplay/blender");
        _G.fx.fxContainer = cc.find("Canvas/gameplay/fx_container");
        _G.fx.sliceTem = {};
        [ 1, 2, 3, 4, 5, 6, 7 ].map(function(i) {
          _G.fx.sliceTem["QUA" + i] = cc.find("nodeCaches/fx/slice/QUA" + i);
        });
        _G.fx.setRotateForever(cc.find("Canvas/level_complete/highlight"));
        _G.fx.setRotateForever(cc.find("Canvas/continue/highlight"));
        _G.fx.setRotateForever(cc.find("Canvas/new_knife/hightlight 2"));
        _G.fx.setKnifeFxUpDown();
        _G.fx.bubbleForever(cc.find("Canvas/continue/but_continue"));
        _G.fx.bubbleForever(cc.find("Canvas/home/label_tap_to_play"), .5, .75);
        _G.fx.collectedGlassArr = [];
        _G.fx.glassSampleArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].map(function(i) {
          return cc.find("nodeCaches/juice_glasses/NUOC" + i);
        });
        _G.fx.resetGlassCells();
      },
      bubbleScaleIn: function bubbleScaleIn(node, scaleFactor, delay, callback) {
        void 0 === scaleFactor && (scaleFactor = 1.2);
        void 0 === delay && (delay = 0);
        node.active = true;
        var orgScale = node.orgScale || node.scale;
        node.orgScale || (node.orgScale = orgScale);
        node.scale = 0;
        node.runAction(cc.sequence(cc.delayTime(delay), cc.scaleTo(.4, orgScale * scaleFactor).easing(cc.easeOut(2)), cc.scaleTo(.3, 1 * orgScale).easing(cc.easeOut(2)), cc.callFunc(function() {
          callback && callback();
        })));
      },
      bubbleForever: function bubbleForever(node, timespan, delay) {
        void 0 === timespan && (timespan = .5);
        void 0 === delay && (delay = 0);
        var orgScale = node.orgScale || node.scale;
        node.orgScale || (node.orgScale = orgScale);
        setTimeout(function() {
          node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(timespan, 1.3 * orgScale).easing(cc.easeOut(1)), cc.scaleTo(timespan, 1 * orgScale).easing(cc.easeOut(1)))));
        }, 1e3 * delay);
      },
      setNewKnife: function setNewKnife() {
        var knife = cc.find("Canvas/new_knife/knife").children[0];
        var knifeContainer = cc.find("Canvas/gameplay/knives");
        knifeContainer.removeAllChildren();
        [ 1, 2, 3 ].map(function(i) {
          var newKnife = _G.utils.copyNodeTo(knife, knifeContainer);
          newKnife.x = 150 * (2 - i);
          newKnife.scale = 1;
        });
        _G.fx.setKnifeFxUpDown();
      },
      setKnife: function setKnife() {},
      setKnifeFxUpDown: function setKnifeFxUpDown(knife) {
        cc.find("Canvas/gameplay/knives").children.map(function(knife) {
          knife.stopAllActions();
          knife.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.25, cc.v2(0, 15)), cc.moveBy(.5, cc.v2(0, -30)), cc.moveBy(.25, cc.v2(0, 15)))));
        });
      },
      getRandomGlass: function getRandomGlass() {
        var glassArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].filter(function(i) {
          return !_G.fx.collectedGlassArr.includes(i);
        });
        var glassIndex = glassArr[_G.utils.random0ToX(glassArr.length - 1)];
        if (4 == _G.fx.collectedGlassArr.length) {
          _G.fx.collectedGlassArr = [];
          _G.fx.resetGlassCells();
        }
        _G.fx.collectedGlassArr.unshift(glassIndex);
        return _G.fx.glassSampleArr[glassIndex - 1];
      },
      resetGlassCells: function resetGlassCells() {
        var pinkCellIndex = _G.utils.random0ToX(3);
        cc.find("Canvas/level_complete/juice_glasses").children.map(function(cell, index) {
          var realBG = cell.getChildByName("real_bg");
          realBG.active = false;
          realBG.color = cc.color(pinkCellIndex == index ? "#F25C8C" : "#F1D847");
          realBG.getChildByName("bg").removeAllChildren();
        });
      },
      addGlassToCell: function addGlassToCell(glassNode) {
        var nextCell = cc.find("Canvas/level_complete/juice_glasses").children.find(function(cell) {
          return !cell.getChildByName("real_bg").active;
        });
        _log(" nextCell = " + nextCell.name + " ");
        if (!nextCell) return;
        var realBG = nextCell.getChildByName("real_bg");
        var glassNodeCopied = _G.utils.copyNodeTo(glassNode, realBG.getChildByName("bg"));
        glassNodeCopied.scale = .5;
        glassNodeCopied.stopAllActions();
        glassNodeCopied.setPosition(0, 0);
        realBG.active = true;
        realBG.scale = 1.15;
        _G.fx.bubbleScaleIn(realBG, 1.3);
        var statNode = cc.find("Canvas/gameplay/juice_glass_stats");
        _G.utils.setLabelText(statNode.getChildByName("label_glass_stat"), _G.fx.collectedGlassArr.length + "/4");
        statNode.active = true;
        statNode.opacity = 0;
        statNode.runAction(cc.sequence(cc.delayTime(.5), cc.fadeIn(.6).easing(cc.easeOut(2))));
        var butName = 4 == _G.fx.collectedGlassArr.length ? "but_claim" : "but_next_level";
        _G.fx.bubbleScaleIn(cc.find("Canvas/level_complete/but_next_level"), 1.2, 1, null);
      },
      coinFlyUp: function coinFlyUp(sourceNode, sampleNum, targetNode, targetCoin) {
        void 0 === sampleNum && (sampleNum = 1);
        var canvas = cc.find("Canvas");
        targetNode = targetNode || cc.find("Canvas/gameplay/coin");
        var sample = cc.find("nodeCaches/sample_coin");
        var from = canvas.convertToNodeSpaceAR(sourceNode.convertToWorldSpaceAR(cc.v2(0, 0)));
        var to = canvas.convertToNodeSpaceAR(targetNode.convertToWorldSpaceAR(cc.v2(0, 0)));
        var dis = from.sub(to).mag();
        var delay = 0;
        _G.rewards.currentCoinFake = _G.rewards.currentCoin;
        _G.rewards.currentCoin = targetCoin;
        for (var i = 0; i < sampleNum; i++) {
          var n = _G.utils.copyNodeTo(sample, canvas);
          n.setPosition(from);
          n.runAction(cc.sequence(cc.delayTime(delay), cc.moveBy(.3, _G.utils.random0ToX(150) - 75, _G.utils.random0ToX(150) - 75).easing(cc.easeOut(5)), cc.moveTo(dis / 600, to).easing(cc.easeIn(3)), cc.callFunc(function() {
            _G.rewards.currentCoinFake += 5;
            _G.rewards.currentCoinFake > _G.rewards.currentCoin && (_G.rewards.currentCoinFake = _G.rewards.currentCoin);
            _G.rewards.updateCoin(_G.rewards.currentCoinFake);
          }), cc.removeSelf(true)));
          delay += .02 * _random() + .02;
        }
      },
      juiceGlassJumpOut: function juiceGlassJumpOut(isEndLevel) {
        void 0 === isEndLevel && (isEndLevel = false);
        _G.sound.playSFX("cocktail_bat_ra_blender");
        _G.fx.resetBlenderLayer();
        var juiceGlass = cc.find("Canvas/gameplay/blender/juice_glass");
        var sampleNode = isEndLevel ? _G.fx.getRandomGlass() : cc.find("nodeCaches/juice_glasses/juice_cup");
        _G.utils.setNodeImg(juiceGlass, sampleNode);
        juiceGlass.orgPos ? juiceGlass.setPosition(juiceGlass.orgPos) : juiceGlass.orgPos = juiceGlass.getPosition();
        juiceGlass.stopAllActions();
        juiceGlass.active = true;
        var jumpTime1 = .8;
        var jumpTime2 = .4;
        juiceGlass.runAction(cc.sequence(cc.spawn(cc.sequence(cc.moveBy(jumpTime1 / 2, cc.v2(0, 250)).easing(cc.easeOut(3)), cc.moveBy(jumpTime1 / 2, cc.v2(0, -356)).easing(cc.easeIn(3))), cc.moveBy(jumpTime1, cc.v2(350, 0)), cc.rotateBy(jumpTime1, 360)), cc.spawn(cc.sequence(cc.moveBy(jumpTime2 / 2, cc.v2(0, 50)).easing(cc.easeOut(3)), cc.moveBy(jumpTime2 / 2, cc.v2(0, -50)).easing(cc.easeIn(3))), cc.moveBy(jumpTime2, cc.v2(90, 0))), cc.callFunc(function() {
          _G.rewards.getCoinWhenCupJumpOut(isEndLevel, juiceGlass);
        }), cc.delayTime(.2), cc.spawn(cc.moveBy(.8, cc.v2(500, 0)), cc.callFunc(function() {
          _G.sound.playSFX("cocktail_truot");
        })), cc.callFunc(function() {
          isEndLevel && _G.fx.addGlassToCell(juiceGlass);
        })));
      },
      setRotateForever: function setRotateForever(node, timeFor360) {
        void 0 === timeFor360 && (timeFor360 = 6);
        var orgActive = node.active;
        node.active = true;
        node.runAction(cc.repeatForever(cc.rotateBy(timeFor360, 360)));
        node.active = orgActive;
      },
      showLevelComplete: function showLevelComplete() {
        cc.find("Canvas/level_complete/lucky_spin").active = false;
        cc.find("Canvas/level_complete/vet nuoc 2").opacity = 0;
        cc.find("Canvas/level_complete/vet nuoc 2").runAction(cc.fadeIn(.5).easing(cc.easeIn(2)));
        cc.find("Canvas/level_complete/highlight").scale = 0;
        cc.find("Canvas/level_complete/highlight").runAction(cc.scaleTo(.5, 1.8).easing(cc.easeOut(2)));
        cc.find("Canvas/level_complete/but_next_level").active = false;
        cc.find("Canvas/level_complete/but_claim").active = false;
        cc.find("Canvas/level_complete/juice_glasses").children.map(function(cell, index) {
          cell.scale = 0;
          cell.runAction(cc.sequence(cc.delayTime(.5 * index), cc.scaleTo(.6, 1.2).easing(cc.easeOut(2)), cc.scaleTo(.2, 1).easing(cc.easeOut(2))));
        });
      },
      resetKnifeReward: function resetKnifeReward() {
        var knifeRewardContainer = cc.find("Canvas/level_complete/lucky_spin/spin/spin_quarter_3");
        var oldPos = knifeRewardContainer.getChildByName("knife").getPosition();
        knifeRewardContainer.getChildByName("knife").removeFromParent(true);
        var sampleKnivesArr = cc.find("nodeCaches/knives").children;
        var randomKnife = sampleKnivesArr[_G.utils.random0ToX(sampleKnivesArr.length - 1)];
        var newKnife = _G.utils.copyNodeTo(randomKnife, knifeRewardContainer);
        newKnife.scale = .5;
        newKnife.setPosition(oldPos);
        newKnife.name = "knife";
        newKnife.zIndex = -1;
      },
      showSpin: function showSpin() {
        [ "label_score", "stage_progress", "juice_glass_stats", "knives" ].map(function(nodeName) {
          cc.find("Canvas/gameplay/" + nodeName).opacity = 0;
        });
        cc.find("Canvas/gameplay/blender").opacity = 120;
        cc.find("Canvas/level_complete/but_claim").active = false;
        cc.find("Canvas/level_complete/vet nuoc 2").runAction(cc.fadeOut(.5).easing(cc.easeIn(2)));
        cc.find("Canvas/level_complete/highlight").runAction(cc.scaleTo(.5, 0).easing(cc.easeOut(2)));
        cc.find("Canvas/level_complete/lucky_spin/but_spin_again").active = false;
        cc.find("Canvas/level_complete/lucky_spin/but_next_level_after_spin").active = false;
        _G.fx.resetKnifeReward();
        _G.fx.spinCount = 0;
        var spinContainer = cc.find("Canvas/level_complete/lucky_spin");
        var spin = spinContainer.getChildByName("spin");
        spin.active = false;
        spin.children.map(function(quarter) {
          quarter.getChildByName("spin_gray") && (quarter.getChildByName("spin_gray").active = true);
        });
        var butSpin = spinContainer.getChildByName("but_spin");
        butSpin.active = false;
        var cellContainer = cc.find("Canvas/level_complete/juice_glasses");
        cellContainer.children.map(function(cell) {
          cell.cellOrgScale && (cell.scale = cell.cellOrgScale);
          cell.rotation = 0;
        });
        var glassFlyToSpin = function glassFlyToSpin() {
          cellContainer.getComponent(cc.Layout).enabled = false;
          cellContainer.children.map(function(cell, index) {
            var targetQuarter = spin.getChildByName("spin_quarter_" + (index + 1));
            targetQuarter.active = true;
            var gPos = _G.utils.getGlobalPosition(targetQuarter);
            var angle = (spin.rotation + targetQuarter.rotation) % 360;
            var halfSize = targetQuarter.width / 2;
            var diffPosByAngle = {
              45: cc.v2(0, -halfSize),
              135: cc.v2(-halfSize, 0),
              225: cc.v2(0, halfSize),
              315: cc.v2(halfSize, 0)
            };
            gPos.addSelf(diffPosByAngle[angle + ""] || cc.v2());
            var gPosDiff = _G.utils.global2LocalPosDiff(cell, gPos.x, gPos.y);
            cell.cellOrgScale = cell.scale;
            cell.runAction(cc.sequence(cc.delayTime(.2 * index), cc.spawn(cc.moveBy(.4, gPosDiff), cc.scaleTo(.4, .3), cc.rotateBy(.4, 360)), cc.callFunc(function() {
              cell.setPosition(0, 0);
              cell.scale = 0;
              targetQuarter.getChildByName("spin_gray").active = false;
              3 == index && _G.fx.bubbleScaleIn(butSpin, 1.2, .4);
            })));
          });
        };
        var glassesDelay = .5;
        cellContainer.children.map(function(cell, index) {
          cell.runAction(cc.sequence(cc.delayTime(.3 * index + glassesDelay), cc.moveBy(.6, cc.v2(0, 550)).easing(cc.easeOut(1)), cc.moveBy(.6, cc.v2(0, -60)).easing(cc.easeOut(2)), cc.callFunc(function() {
            if (3 == index) {
              spinContainer.active = true;
              _G.fx.bubbleScaleIn(spin, 1.2, 0, glassFlyToSpin);
            }
          })));
        });
      },
      butSpinClick: function butSpinClick() {
        [ "Canvas/level_complete/lucky_spin/but_spin", "Canvas/level_complete/lucky_spin/but_spin_again", "Canvas/level_complete/lucky_spin/but_next_level_after_spin" ].map(function(path) {
          cc.find(path).stopAllActions();
          cc.find(path).active = false;
        });
        _G.fx.spinCount++;
        var spin = cc.find("Canvas/level_complete/lucky_spin/spin");
        spin.orgAngle || (spin.orgAngle = spin.rotation);
        var randomAngle = 5580;
        var getReward = function getReward() {
          var realAngle = (spin.rotation - spin.orgAngle + 45) % 360;
          var index = _floor(realAngle / 90) + 1;
          var resultNode = spin.getChildByName("spin_quarter_" + index);
          var rewardNode = resultNode.getChildByName("label_coin") || resultNode.getChildByName("knife");
          var isCoin = "label_coin" == rewardNode.name;
          var rewardName = isCoin ? rewardNode.getComponent(cc.Label).string : rewardNode.getComponent(cc.Sprite).spriteFrame.name;
          _G.rewards.spinReward(isCoin, rewardName);
          isCoin || _G.fx.resetKnifeReward();
          _G.fx.spinCount < 2 && _G.fx.bubbleScaleIn(cc.find("Canvas/level_complete/lucky_spin/but_spin_again"));
          _G.fx.bubbleScaleIn(cc.find("Canvas/level_complete/lucky_spin/but_next_level_after_spin"), 1.2, 1);
        };
        spin.runAction(cc.sequence(cc.rotateBy(6, randomAngle).easing(cc.easeInOut(4)), cc.callFunc(getReward)));
      },
      resetBlenderLayer: function resetBlenderLayer() {
        cc.find("Canvas/gameplay/blender/juice_layers").children.map(function(layer) {
          return layer.active = false;
        });
      },
      addBlenderLayer: function addBlenderLayer(fruitNode, callback) {
        var colorName = {
          QUA1: "#f2f6d6",
          QUA2: "#40de64",
          QUA3: "#FAEA52",
          QUA4: "#F4D34E",
          QUA5: "#ee8e3e",
          QUA6: "#ffedae",
          QUA7: "#DE4656"
        }[fruitNode.name];
        var layerContainer = cc.find("Canvas/gameplay/blender/juice_layers");
        var lastEmptyLayerNum = 0;
        for (var i = 1; i < 10; i++) if (!layerContainer.getChildByName(i + "").active) {
          lastEmptyLayerNum = i;
          break;
        }
        if (lastEmptyLayerNum) {
          var layer = layerContainer.getChildByName(lastEmptyLayerNum + "");
          layer.active = true;
          layer.color = cc.color(colorName);
        }
        var bubbleUp = cc.find("Canvas/gameplay/blender/bubble_up");
        if (!bubbleUp.active) {
          bubbleUp.active = true;
          bubbleUp.getComponent(cc.ParticleSystem).resetSystem();
          setTimeout(function() {
            bubbleUp.active = false;
          }, 1e3);
        }
        var blender = _G.fx.blenderNode;
        if (!blender.isRunningAction) {
          blender.isRunningAction = true;
          blender.runAction(cc.sequence(cc.scaleTo(.25, 1, .86).easing(cc.easeOut(2)), cc.scaleTo(.2, 1, 1).easing(cc.easeOut(2)), cc.callFunc(function() {
            blender.isRunningAction = false;
          })));
        }
        callback && setTimeout(callback, 1500);
      },
      slice: function slice(fruitNode) {
        if (!fruitNode || !fruitNode.name.includes("QUA")) return;
        _G.sound.playSFX(fruitNode.name);
        var slice = _G.utils.copyNodeTo(_G.fx.sliceTem[fruitNode.name], _G.fx.fxContainer);
        _G.utils.clonePosition(slice, fruitNode);
        var blender = _G.fx.blenderNode;
        var left = slice.getChildByName("left");
        var targetPos = _G.utils.clonePosition(left, blender, true);
        targetPos.y += 180;
        left.runAction(cc.rotateBy(1, 360));
        left.runAction(cc.sequence(cc.moveBy(.15, cc.v2(-150, 50)).easing(cc.easeOut(1.5)), cc.moveTo(.5, targetPos).easing(cc.easeIn(2)), cc.callFunc(function() {
          _G.fx.addBlenderLayer(fruitNode);
          slice.removeFromParent();
          if (!_G.sound.isPlayingSoundFruit2Blender) {
            _G.sound.isPlayingSoundFruit2Blender = true;
            setTimeout(function() {
              _G.sound.isPlayingSoundFruit2Blender = false;
            }, 1e3);
            _G.gamePlay.fruitCount ? _G.sound.playSFX("qua_roi_vao_blender_normal") : _G.sound.playSFX("qua_roi_vao_blender_ket_thuc");
          }
        })));
        var right = slice.getChildByName("right");
        right.runAction(cc.rotateBy(1, -360));
        right.runAction(cc.sequence(cc.moveBy(.15, cc.v2(150, -50)).easing(cc.easeOut(1.5)), cc.moveTo(.5, targetPos).easing(cc.easeIn(2)), cc.callFunc(function() {})));
      },
      scoreFlyUp: function scoreFlyUp(fruitNode, num) {
        void 0 === num && (num = 1);
        var scoreNode = _G.utils.copyNodeTo(cc.find("nodeCaches/fx/scoreFlyUp"), _G.fx.fxContainer);
        scoreNode.getComponent(cc.Sprite).enabled = false;
        _G.utils.setLabelText(scoreNode.getChildByName("label"), "+" + num);
        _G.utils.setPosToOtherNode(scoreNode, fruitNode);
        scoreNode.setPosition(cc.find("Canvas").convertToNodeSpaceAR(fruitNode.convertToWorldSpaceAR(cc.v2())));
        scoreNode.runAction(cc.sequence(cc.moveBy(1, cc.v2(0, 120)), cc.spawn(cc.moveBy(.7, cc.v2(0, 50)), cc.fadeOut(.7)), cc.callFunc(function() {
          scoreNode.removeFromParent();
        })));
      },
      missed: function missed() {
        var label = cc.find("Canvas/gameplay/missed_alert/missed_label");
        var bg = cc.find("Canvas/gameplay/missed_alert/red_bg");
        label.runAction(cc.sequence(cc.fadeIn(.5), cc.fadeIn(1), cc.fadeOut(.5)));
        bg.runAction(cc.sequence(cc.fadeTo(.2, 180), cc.fadeOut(.2)));
      },
      juiceSpread: function juiceSpread(fruitNode) {
        var fx = _G.utils.copyNodeTo(cc.find("nodeCaches/fx/juice_spread"), _G.fx.fxContainer);
        fx.setPosition(cc.find("Canvas").convertToNodeSpaceAR(fruitNode.convertToWorldSpaceAR(cc.v2())));
        var scaleFactor = 1.5;
        var fxTime = .35;
        var spread1 = fx.getChildByName("juice_spread_1");
        spread1.runAction(cc.spawn(cc.rotateBy(fxTime, -15).easing(cc.easeOut(3)), cc.scaleTo(fxTime, spread1.scale * scaleFactor).easing(cc.easeOut(3)), cc.fadeOut(fxTime).easing(cc.easeIn(2))));
        var spread2 = fx.getChildByName("juice_spread_2");
        spread2.runAction(cc.spawn(cc.delayTime(.3), cc.rotateBy(fxTime, -15).easing(cc.easeOut(3)), cc.scaleTo(fxTime, spread2.scale * scaleFactor).easing(cc.easeOut(3)), cc.fadeOut(fxTime).easing(cc.easeIn(2)), cc.sequence(cc.delayTime(fxTime + .3), cc.callFunc(function() {
          fx.removeFromParent(true);
        }))));
      },
      bubbleSpread: function bubbleSpread(fruitNode) {
        var frColor = {
          QUA1: "#cc0000",
          QUA2: "#331a00",
          QUA3: "#e6e600",
          QUA4: "#cc0000",
          QUA5: "#ff9900",
          QUA6: "#cc7a00",
          QUA7: "#009900"
        }[fruitNode.name] || "#ffffff";
        return;
        var fx;
        var partComp;
      }
    };
    cc._RF.pop();
  }, {
    all_modules: "all_modules"
  } ],
  game_manager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0fd6aLfBwpLFr04Vx5QHbKq", "game_manager");
    "use strict";
    var _G = require("all_modules");
    setTimeout(function() {
      _G = require("all_modules");
    }, 0);
    var _isLevelCompleted = false;
    module.exports = {
      init: function init() {
        _G.gameManager.playerLevel = 0;
        _G.gameManager.playerStage = 0;
        _G.gameManager.playerScore = 0;
        _G.gameManager.playerHighestScore = 0;
        _G.gameManager.tripleKnivesCount = 0;
        _G.gameManager.comboScore = 0;
      },
      playNextStage: function playNextStage() {
        _isLevelCompleted = false;
        var absoluteLevel = _G.gameManager.playerLevel;
        var configLevelCount = _G.configs.levels.length;
        var relativeLevel = 1 + absoluteLevel % configLevelCount;
        var stage = _G.gameManager.playerStage;
        var stageArr = _G.configs.levels[relativeLevel - 1];
        var stageInfo = stageArr[stage];
        var timeScale = 1 - _G.configs.timeScaleEachLevelRepeat * _floor(absoluteLevel / configLevelCount);
        timeScale = _max(timeScale, _G.configs.minTimeScaleLevelRepeat);
        _G.uiLayout.home2GamePlay();
        _G.gamePlay.newStage(stageInfo, timeScale);
        _G.gameManager.firstKnifeThrown = false;
        _G.gameManager.stageMeta = {
          level: absoluteLevel + 1,
          stage: stage + 1,
          stageCount: stageArr.length
        };
        _G.gameManager.updateLevelAndStage();
        _G.uiLayout.hideAll();
        _G.uiLayout.hideNagScreen();
        _G.gameManager.missedOnce = false;
      },
      levelComplete: function levelComplete() {
        _G.uiLayout.showNagScreen();
        setTimeout(function() {
          _G.sound.playSFX("hoan thanh man choi");
          _G.uiLayout.showLevelComplete();
          _G.gameManager.updateLabelLevelComplete();
          _G.uiLayout.hideNagScreen();
        }, 1e3);
      },
      winStage: function winStage() {
        var absoluteLevel = _G.gameManager.playerLevel;
        var configLevelCount = _G.configs.levels.length;
        var relativeLevel = 1 + absoluteLevel % configLevelCount;
        var stageArr = _G.configs.levels[relativeLevel - 1];
        var stage = _G.gameManager.playerStage;
        _G.uiLayout.showNagScreen();
        if (stage < stageArr.length - 1) {
          stage++;
          setTimeout(function() {
            _G.uiLayout.hideNagScreen();
            _G.fx.juiceGlassJumpOut();
            _G.gameManager.playNextStage();
          }, 1e3);
        } else {
          _isLevelCompleted = true;
          setTimeout(function() {
            _G.uiLayout.hideNagScreen();
            _G.fx.juiceGlassJumpOut(true);
          }, 1e3);
          _G.gameManager.levelComplete();
          stage = 0;
          absoluteLevel++;
        }
        _G.gameManager.playerStage = stage;
        _G.gameManager.playerLevel = absoluteLevel;
      },
      updateScoreLabel: function updateScoreLabel() {
        _G.utils.setLabelText(cc.find("Canvas/gameplay/label_score"), _G.gameManager.playerScore);
      },
      updateLevelAndStage: function updateLevelAndStage() {
        var _G$gameManager$stageM = _G.gameManager.stageMeta, level = _G$gameManager$stageM.level, stage = _G$gameManager$stageM.stage, stageCount = _G$gameManager$stageM.stageCount;
        _G.utils.setLabelText(cc.find("Canvas/gameplay/stage_progress/label_level"), "Level " + level);
        var stageProgress = cc.find("Canvas/gameplay/stage_progress");
        var stageCompleteRatio = 0;
        var frame = cc.find("Canvas/gameplay/frame").children[0];
        if (frame) {
          var fruitCount = frame.children.length;
          var slicedCount = frame.children.filter(function(dot) {
            return 0 == dot.children.length;
          }).length;
          stageCompleteRatio = slicedCount / fruitCount;
        }
        var targetWidth = stageProgress.width * (stageCompleteRatio + stage - 1) / stageCount;
        var stageIndicator = stageProgress.getChildByName("stage_done");
        var stageIndicatorTimerVar = setInterval(function() {
          stageIndicator.width += 50;
          if (stageIndicator.width >= targetWidth) {
            stageIndicator.width = targetWidth;
            clearInterval(stageIndicatorTimerVar);
          }
        }, 40);
      },
      updateTripleKnivesCount: function updateTripleKnivesCount() {
        var xCount = _G.gameManager.tripleKnivesCount;
        var label = cc.find("Canvas/gameplay/label_triple_count");
        label.active = !!xCount;
        _G.utils.setLabelText(label, xCount + " time" + (xCount > 1 ? "s" : "") + " left");
      },
      updateLabelLevelComplete: function updateLabelLevelComplete() {
        _G.utils.setLabelText(cc.find("Canvas/level_complete/vet nuoc 2/label_level"), "LEVEL " + _G.gameManager.playerLevel);
      },
      knifeThrowHandler: function knifeThrowHandler() {
        if (_G.gameManager.tripleKnivesCount) {
          _G.gameManager.tripleKnivesCount--;
          _G.gameManager.updateTripleKnivesCount();
          _G.gameManager.tripleKnivesCount || _G.gamePlay.turn3Knives(false);
        }
        _G.gameManager.updateLevelAndStage();
        if (!_G.gameManager.firstKnifeThrown) {
          _G.gameManager.firstKnifeThrown = true;
          _G.rewards.checkShowSuggestTripleKnives();
        }
        _G.gamePlay.fruitCount || _G.gameManager.winStage();
      },
      missed: function missed() {
        _G.sound.playSFX("knife_missed");
        _G.uiLayout.showNagScreen();
        setTimeout(function() {
          _G.uiLayout.hideNagScreen();
          if (_G.gameManager.missedOnce || true) _G.gameManager.gameOver(); else {
            _G.sound.continueSFXId = _G.sound.playSFX("count_down_continue", true);
            _G.uiLayout.show("continue");
            var juiceSprComp = cc.find("Canvas/continue/continue juice 3/continue juice 2").getComponent(cc.Sprite);
            juiceSprComp.fillRange = 1;
            var totalTime = _G.configs.continueGameWaitTime;
            var intervalTime = .04;
            var deltaFillRange = intervalTime / totalTime;
            var intervalVar = setInterval(function() {
              juiceSprComp.fillRange -= deltaFillRange;
              juiceSprComp.fillRange < deltaFillRange && clearInterval(intervalVar);
            }, 1e3 * intervalTime);
            _G.gameManager.timerGameOver = setTimeout(function() {
              _G.sound.stopSFX(_G.sound.continueSFXId);
              _G.gameManager.gameOver();
            }, 1e3 * totalTime);
          }
        }, 1e3);
      },
      continue: function _continue() {
        _G.sound.stopSFX(_G.sound.continueSFXId);
        clearTimeout(_G.gameManager.timerGameOver);
        _G.gameManager.missedOnce = true;
        _G.rewards.videoContinue();
      },
      refuseContinue: function refuseContinue() {
        _G.sound.stopSFX(_G.sound.continueSFXId);
        clearTimeout(_G.gameManager.timerGameOver);
        _G.gameManager.gameOver();
      },
      gameOver: function gameOver() {
        _G.utils.setLabelText(cc.find("Canvas/game_over/label_score"), _G.gameManager.playerScore);
        _G.utils.setLabelText(cc.find("Canvas/game_over/label_level"), "LEVEL " + (_G.gameManager.playerLevel + 1));
        if (_G.gameManager.playerScore > _G.gameManager.playerHighestScore) {
          _G.gameManager.playerHighestScore = _G.gameManager.playerScore;
          setTimeout(function() {
            _G.sound.playSFX("highest_score");
          }, 500);
        }
        _G.gameManager.playerScore = 0;
        _G.gameManager.updateScoreLabel();
        _G.gameManager.playerLevel = 0;
        _G.gameManager.playerStage = 0;
        _G.uiLayout.hideAll();
        _G.uiLayout.showGameOver();
      },
      isLevelCompleted: function isLevelCompleted() {
        return _isLevelCompleted;
      }
    };
    cc._RF.pop();
  }, {
    all_modules: "all_modules"
  } ],
  game_play: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "edcc3zqdmlDCIAwstKCNFej", "game_play");
    "use strict";
    var _G = require("all_modules");
    setTimeout(function() {
      _G = require("all_modules");
    }, 0);
    module.exports = {
      init: function init() {
        _G.gamePlay.frame = cc.find("Canvas/gameplay/frame");
      },
      turn3Knives: function turn3Knives(isOn) {
        void 0 === isOn && (isOn = false);
        cc.find("Canvas/gameplay/knives").children.map(function(knife) {
          knife.active = 0 == knife.x || isOn;
          knife.y = 0;
          knife.rotation = 0;
        });
        _G.fx.setKnifeFxUpDown();
      },
      newStage: function newStage(stageInfo, timeScale) {
        void 0 === timeScale && (timeScale = 1);
        var frameSwingType = stageInfo.frameSwingType, frameType = stageInfo.frameType, fruitList = stageInfo.fruitList;
        var frameSwingParams = _G.configs.frameSwingTypes[frameSwingType - 1];
        var fruitSwingParam = _G.configs.fruitSwingTypes[0];
        var frameContainer = _G.gamePlay.frame;
        _G.fx.resetBlenderLayer();
        _G.uiLayout.resetUIGamePlay();
        frameContainer.removeAllChildren();
        var frame = _G.utils.copyNodeTo(cc.find("nodeCaches/frame/" + frameType), frameContainer);
        frame.setPosition(0, 0);
        _G.gamePlay.fruitCount = 0;
        fruitList.map(function(fruitType, index) {
          var dot = frame.getChildByName("dot_" + (index + 1));
          if (!dot) return;
          dot.opacity = 255;
          _G.utils.copyNodeTo(cc.find("nodeCaches/fruits/QUA" + fruitType), dot);
          _G.gamePlay.fruitCount++;
        });
        var actArr = frameSwingParams.map(function(item) {
          return cc.rotateBy(item.deltaTime * timeScale, item.deltaAngle).easing(cc.easeIn(2));
        });
        1 == actArr.length && actArr.push(cc.delayTime(.001));
        frameContainer.stopAllActions();
        var sequence = cc.repeatForever(cc.sequence(actArr));
        frameContainer.runAction(sequence);
        var setFruitSwing = function setFruitSwing(fruit) {
          var fruitActArr = fruitSwingParam.map(function(item) {
            return cc.rotateBy(item.deltaTime * (Math.random() + .5), item.deltaAngle).easing(cc.easeIn(2));
          });
          var fruitSequence = cc.repeatForever(cc.sequence(fruitActArr));
          setTimeout(function() {
            fruit.stopAllActions();
            fruit.runAction(fruitSequence);
          }, 1e3 * _random());
        };
        frame.children.map(function(dot) {
          return setFruitSwing(dot.children[0]);
        });
        _G.uiLayout.hideAll();
      }
    };
    cc._RF.pop();
  }, {
    all_modules: "all_modules"
  } ],
  home: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3780epeUQlDfLa3ybHeOq4f", "home");
    "use strict";
    var _G = require("all_modules");
    setTimeout(function() {
      _G = require("all_modules");
    }, 0);
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        require("all_modules").setModules();
        require("all_modules").initModules();
        _G.sound.load();
        cc.director.getCollisionManager().enabled = true;
        _G.uiLayout.showHome();
      }
    });
    cc._RF.pop();
  }, {
    all_modules: "all_modules"
  } ],
  knife_collision: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72a41FOABBF94SoGLwSFPSQ", "knife_collision");
    "use strict";
    var _G = require("all_modules");
    setTimeout(function() {
      _G = require("all_modules");
    }, 0);
    cc.Class({
      extends: cc.Component,
      onCollisionEnter: function onCollisionEnter(other) {
        var fruitNode = other.node;
        if (fruitNode.isDeleted || !fruitNode.name.includes("QUA")) return;
        _G.fx.slice(fruitNode);
        _G.fx.juiceSpread(fruitNode);
        _G.fx.bubbleSpread(fruitNode);
        _G.gamePlay.fruitCount--;
        _G.gameManager.comboScore++;
        _G.fx.scoreFlyUp(fruitNode, _G.gameManager.comboScore);
        _G.gameManager.playerScore += _G.gameManager.comboScore;
        _G.gameManager.updateScoreLabel();
        fruitNode.isDeleted = true;
        fruitNode.removeFromParent(true);
      },
      onCollisionStay: function onCollisionStay() {},
      onCollisionExit: function onCollisionExit() {}
    });
    cc._RF.pop();
  }, {
    all_modules: "all_modules"
  } ],
  prefab_list: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95d4dDVVXNHLaAJ+hxeSBWN", "prefab_list");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {}
    });
    cc._RF.pop();
  }, {} ],
  rewards: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f17e8ZPCHxCMZZRjdkf1JuE", "rewards");
    "use strict";
    var _G = require("all_modules");
    setTimeout(function() {
      _G = require("all_modules");
    }, 0);
    module.exports = {
      init: function init() {
        _G.rewards.currentCoin = 0;
        _G.rewards.updateCoin();
        _G.rewards.tripleKnivesState = "case_1";
        _G.rewards.tripleKnivesCancelCount_3_2_2 = 0;
      },
      cancelTripleKnivesHandler: function cancelTripleKnivesHandler() {
        switch (_G.rewards.tripleKnivesState) {
         case "case_1":
          _G.rewards.tripleKnivesState = "case_2";
          break;

         case "case_3":
          _G.rewards.tripleKnivesState = "case_3_1";
          break;

         case "case_3_2":
          _G.rewards.tripleKnivesState = "case_3_2_2";
          break;

         case "case_3_2_2":
          _G.rewards.tripleKnivesCancelCount_3_2_2++;
        }
      },
      acceptTripleKnivesHandler: function acceptTripleKnivesHandler() {
        _log(" _G.rewards.tripleKnivesState = " + _G.rewards.tripleKnivesState + " // _G.rewards.tripleKnivesState == 'case_3 => " + ("case_3" == _G.rewards.tripleKnivesState) + " ");
        _G.rewards.tripleKnivesState = "case_3" != _G.rewards.tripleKnivesState ? "case_3" : "case_3_2";
        _G.rewards.tripleKnivesCancelCount_3_2_2 = 0;
      },
      checkShowSuggestTripleKnives: function checkShowSuggestTripleKnives() {
        var showRatioArr = _G.configs.suggestTripleKnivesRatios[_G.rewards.tripleKnivesState];
        var showRatio = showRatioArr[_G.gameManager.playerStage];
        var extraRatio = "case_3_2_2" == _G.rewards.tripleKnivesState ? _G.rewards.tripleKnivesCancelCount_3_2_2 / 100 : 0;
        _random() < showRatio + extraRatio && setTimeout(function() {
          !_G.gameManager.isLevelCompleted();
        }, 500);
      },
      videoTripleKnives: function videoTripleKnives() {
        _G.uiLayout.hide("suggest_triple_knives");
        _G.gameManager.tripleKnivesCount += 5;
        _G.gameManager.updateTripleKnivesCount();
        _G.gamePlay.turn3Knives(true);
        _G.rewards.acceptTripleKnivesHandler();
        _log(" videoTripleKnives() called ! ");
      },
      videoSpecialKnife: function videoSpecialKnife() {
        _G.uiLayout.hide("suggest_special_knife");
        _G.gameManager.specialKnifeCount += 5;
        _G.gameManager.updateSpecialKnifeCount();
        _G.gamePlay.turnSpecialKnife(true);
        _G.rewards.acceptSpecialKnifeHandler();
        _log(" videoSpecialKnife() called ! ");
      },
      videoContinue: function videoContinue() {
        _log(" videoContinue() called ! ");
        _G.uiLayout.hide("continue");
      },
      getCoinWhenCupJumpOut: function getCoinWhenCupJumpOut(isEndLevel, juiceGlass) {
        var targetCoin = _G.rewards.currentCoin + (isEndLevel ? 10 : 5);
        _G.fx.coinFlyUp(juiceGlass, isEndLevel ? 2 : 1, null, targetCoin);
      },
      spinReward: function spinReward(isCoin, rewardName) {
        if (isCoin) {
          var coinNum = parseInt(rewardName) || 10;
          var targetCoin = _G.rewards.currentCoin + coinNum;
          _G.fx.coinFlyUp(cc.find("Canvas/level_complete/lucky_spin/spin"), _ceil(coinNum / 5), null, targetCoin);
        } else {
          _G.sound.playSFX("unlock_knife");
          _G.uiLayout.show("new_knife");
          cc.find("Canvas/new_knife/knife").removeAllChildren(true);
          var newKnife = _G.utils.copyNodeTo(cc.find("nodeCaches/knives/" + rewardName), cc.find("Canvas/new_knife/knife"));
          newKnife.scale = 1.7;
        }
      },
      updateCoin: function updateCoin(fakeCoin) {
        void 0 === fakeCoin && (fakeCoin = 0);
        _G.sound.playSFX("coin_add");
        _G.utils.setLabelText(cc.find("Canvas/gameplay/coin/label_coin"), fakeCoin || _G.rewards.currentCoin);
      }
    };
    cc._RF.pop();
  }, {
    all_modules: "all_modules"
  } ],
  social: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd848R7JyhK77bvajdL8i17", "social");
    "use strict";
    var _G = require("all_modules");
    setTimeout(function() {
      _G = require("all_modules");
    }, 0);
    module.exports = {
      init: function init() {
        return;
      },
      shareDailyReward: function shareDailyReward(loginStreak) {
        var doSendMsg = function doSendMsg() {
          try {
            _log(" shareDailyReward sendMsg called ! ");
            var msgContainer = cc.find("message_share_daily_reward");
            var desc = loginStreak + (loginStreak > 1 ? " DAYS" : " DAY");
            _G.utils.setLabelText(msgContainer.getChildByName("detail"), desc);
            var b64Img = _G.social.getImgBase64(msgContainer);
            _G.social.sendMsg(_thisPlayerInfo.name + " just played. Now it's your turn!", "Try Now!", b64Img);
          } catch (e) {
            _log(e);
          }
        };
        _waitToRun(doSendMsg, "avatarLoaded", _thisPlayerInfo, 1);
      },
      shareNewAchievement: function shareNewAchievement(title, desc, imgNode) {
        var doSendMsg = function doSendMsg() {
          try {
            _log(" shareNewAchievement sendMsg called ! ");
            var msgContainer = cc.find("message_share_achievement");
            var imgMask = msgContainer.getChildByName("img_mask");
            imgMask.removeAllChildren();
            var newNode = _G.utils.copyNodeTo(imgNode, imgMask);
            newNode.width = imgNode.width;
            newNode.height = imgNode.height;
            newNode.scale = .35 * imgNode.scale;
            title.includes("TRUCK") && (newNode.scale *= .22 / .35);
            _G.utils.setLabelText(msgContainer.getChildByName("title"), title);
            _G.utils.setLabelText(msgContainer.getChildByName("desc"), desc);
            var b64Img = _G.social.getImgBase64(msgContainer);
            _G.social.sendMsg(_thisPlayerInfo.name + ' gained achievement "' + title + '". Can you?', "Try Now!", b64Img);
          } catch (e) {
            _log(e);
          }
        };
        _waitToRun(doSendMsg, "avatarLoaded", _thisPlayerInfo, 1);
      },
      sendInvitationVictim: function sendInvitationVictim() {
        _log(" sendInvitationVictim called ! ");
        try {
          var b64Img = _G.social.getImgBase64(cc.find("message_victim_invite"));
          _G.social.sendMsg("Let's play farm battle with me!", "Play Now!", b64Img);
        } catch (e) {
          _log(e);
        }
      },
      sendMsgInviteGift: function sendMsgInviteGift() {
        _log(" sendMsgInviteGift called ! ");
        try {
          var b64Img = _G.social.getImgBase64(cc.find("message_invite_gift"));
          _G.social.sendMsg("Hello! Please be my neighbor!", "Let's go!", b64Img);
        } catch (e) {
          _log(e);
        }
      },
      sendStolenNotiMessage: function sendStolenNotiMessage(victimId, victimName) {
        _log(" fb_player_id = " + FBInstant.player.getID() + " ");
        _log(" sendStolenNotiMessage called ! ");
        try {
          _G.utils.setLabelText(cc.find("message_you_been_stolen/caption"), victimName + " has been stolen!");
          _log(" Start creating context at " + performance.now() + " ");
          FBInstant.context.createAsync(victimId).then(function() {
            _log("Successfully created new context with victimId_" + victimId + " :: id = " + FBInstant.context.getID() + " ! - time: " + performance.now() + " ");
            var b64Img = _G.social.getImgBase64(cc.find("message_you_been_stolen"));
            _G.social.sendMsg("Check out the culprit and go revenge!", "Check out now!", b64Img);
          })["catch"](function(e) {
            _log("Failed to create new context with victimId_" + victimId + " ");
            _log(e);
          });
        } catch (e) {
          _log(e);
        }
      },
      sendMsg: function sendMsg(content, playButtonCaption, imgBase64, payloadData) {
        _log(" sendMsg called ! ");
        FBInstant.updateAsync({
          action: "CUSTOM",
          cta: playButtonCaption,
          template: "play_turn",
          image: imgBase64,
          text: content,
          data: payloadData,
          strategy: "LAST"
        }).then(function() {}, function(err) {
          _log(" sendMsg updateAsync failed : ");
          _log(err);
        });
      },
      getImgBase64: function getImgBase64(target) {
        _log(" getImgBase64 called ! ");
        var width = target.width, height = target.height;
        target.setPosition(width / 2, height / 2);
        target.active = true;
        target.zIndex = -100;
        var renderTexture = new cc.RenderTexture(width, height);
        renderTexture.begin();
        target._sgNode.visit();
        renderTexture.end();
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        if (cc._renderType === cc.gamePlay.RENDER_TYPE_CANVAS) {
          var texture = renderTexture.getSprite().getTexture();
          var image = texture.getHtmlElementObj();
          ctx.drawImage(image, 0, 0);
        } else if (cc._renderType === cc.gamePlay.RENDER_TYPE_WEBGL) {
          var buffer = gl.createFramebuffer();
          gl.bindFramebuffer(gl.FRAMEBUFFER, buffer);
          var _texture = renderTexture.getSprite().getTexture()._glID;
          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, _texture, 0);
          var data = new Uint8Array(width * height * 4);
          gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, data);
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
          var rowBytes = 4 * width;
          for (var row = 0; row < height; row++) {
            var srow = height - 1 - row;
            var data2 = new Uint8ClampedArray(data.buffer, srow * width * 4, rowBytes);
            var imageData = new ImageData(data2, width, 1);
            ctx.putImageData(imageData, 0, row);
          }
        }
        return canvas.toDataURL("image/png");
      },
      getConnectedPlayers: function getConnectedPlayers(callBack) {
        if (!window.FBInstant) {
          callBack && callBack([ {
            id: "a",
            name: "Kaka",
            photo: "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-1/p320x320/37953466_2094688614193019_7880878797585645568_n.jpg?_nc_cat=111&_nc_ht=scontent.fhan2-2.fna&oh=cd8b33a4b2bfc68c1ebe9fe73c734d6b&oe=5C884499"
          }, {
            id: "d",
            name: "Baba",
            photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=2019450361427398&height=256&width=256&ext=1553222787&hash=AeT8rxeDmUaofcV3"
          }, {
            id: "c",
            name: "Lala",
            photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1749802191808270&height=256&width=256&ext=1553162364&hash=AeRKp0gtzcYw83zs"
          }, {
            id: "Dung",
            name: "name1",
            photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1882129891874794&height=256&width=256&ext=1553222578&hash=AeReSpLXx9pM1PZE"
          }, {
            id: "x",
            name: "name2",
            photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1657173417648231&height=256&width=256&ext=1553162074&hash=AeTKb1rxhRs2-EUy"
          }, {
            id: "dung",
            name: "dung",
            photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1657173417648231&height=256&width=256&ext=1553162074&hash=AeTKb1rxhRs2-EUy"
          } ]);
          return;
        }
        FBInstant.player.getConnectedPlayersAsync().then(function(players) {
          var playerArr = [];
          players && players.length && (playerArr = players.map(function(player) {
            return {
              id: player.getID(),
              name: player.getName(),
              photo: player.getPhoto()
            };
          }));
          callBack && callBack(playerArr);
        });
      }
    };
    cc._RF.pop();
  }, {
    all_modules: "all_modules"
  } ],
  sound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bba64AgDwRKzr8NlwCpdh3s", "sound");
    "use strict";
    var _G = require("all_modules");
    setTimeout(function() {
      _G = require("all_modules");
    }, 0);
    module.exports = {
      load: function load(callBackFunc, progressUpdate) {
        window._sfxIDList = [];
        window._startLoadTime = _time();
        var soundPath = "/sounds/";
        var soundList = [ "button", "cocktail_bat_ra_blender", "cocktail_truot", "coin_add", "count_down_continue", "highest_score", "hoan thanh man choi", "knife_missed", "knife_throw", "more_life", "qua_roi_vao_blender_ket_thuc", "qua_roi_vao_blender_normal", "unlock_knife", "QUA1", "QUA2", "QUA3", "QUA4", "QUA5", "QUA6", "QUA7" ];
        soundList.map(function(item, i, arr) {
          return arr[i] = soundPath + item;
        });
        var soundBank = {};
        window._soundBank = soundBank;
        var dynamicRatio = window._dynamicResources_Ratio || 100;
        var itemCount = soundList.length;
        var staticLoadPercent = 100 - dynamicRatio;
        var percentUnit = dynamicRatio / itemCount;
        var itemLoaded = 0, singleItemLoaded = function singleItemLoaded() {
          ++itemLoaded;
          var percent = staticLoadPercent + itemLoaded * percentUnit;
          progressUpdate && progressUpdate(percent);
          itemLoaded == itemCount && callBackFunc && _timer0(callBackFunc);
        };
        var loadSoundCallBack = function loadSoundCallBack(err, sound) {
          singleItemLoaded();
          if (err) {
            console.warn("?? resource load sound error : " + err + " !");
            return;
          }
          soundBank[sound.name] = sound;
        };
        soundList.map(function(sName) {
          return cc.loader.loadRes(sName, cc.AudioClip, loadSoundCallBack);
        });
      },
      setSoundOff: function setSoundOff(soundOff) {
        soundOff = !!soundOff;
        window._soundOff = soundOff;
        soundOff ? module.exports.stopBGSound() : module.exports.playBGSound(window._lastSoundName);
      },
      getSound: function getSound() {
        return !window._soundOff;
      },
      setSFXOff: function setSFXOff(sfxOff) {
        sfxOff = !!sfxOff;
        window._sfxOff = sfxOff;
      },
      getSFX: function getSFX() {
        return !window._sfxOff;
      },
      playSound: function playSound(soundName, repeat, volume) {
        void 0 === repeat && (repeat = false);
        if (!window._soundBank) return;
        var soundPath = window._soundBank[soundName];
        if (!soundPath) return;
        return cc.audioEngine.play(soundPath, repeat, null == volume ? window._soundVolume : volume);
      },
      playSFX: function playSFX(soundName, repeat) {
        void 0 === repeat && (repeat = false);
        if (repeat) {
          var sfxID = module.exports.playSound(soundName, true, window._sfxOff ? 0 : null);
          window._sfxIDList.push(sfxID);
          return sfxID;
        }
        window._sfxOff || module.exports.playSound(soundName, false, .75 * window._soundVolume);
      },
      stopSFX: function stopSFX(sfxID) {
        if (!_sfxIDList.includes(sfxID)) return;
        cc.audioEngine.stop(sfxID);
        _removeArrItem(_sfxIDList, sfxID);
      },
      resetSFX: function resetSFX() {
        window._sfxIDList.map(function(sfxID) {
          return cc.audioEngine.stop(sfxID);
        });
        window._sfxIDList = [];
      },
      pauseSFX: function pauseSFX() {
        window._sfxIDList.map(function(sfxID) {
          return cc.audioEngine.pause(sfxID);
        });
      },
      resumeSFX: function resumeSFX() {
        window._sfxIDList.map(function(sfxID) {
          return cc.audioEngine.resume(sfxID);
        });
      },
      immediatelyMuteAllSFX: function immediatelyMuteAllSFX() {
        window._sfxIDList.map(function(sfxID) {
          return cc.audioEngine.setVolume(sfxID, 0);
        });
      },
      immediatelyUnMuteAllSFX: function immediatelyUnMuteAllSFX() {
        _log(" _sfxIDList = " + _sfxIDList + " // window._soundVolume = " + window._soundVolume + " ");
        window._sfxIDList.map(function(sfxID) {
          return cc.audioEngine.setVolume(sfxID, window._soundVolume);
        });
      },
      playBGSound: function playBGSound(soundName) {
        window._lastSoundName = soundName;
        if (!window._soundOff) {
          var playFunc = function playFunc() {
            return module.exports.playSound(soundName, true);
          };
          window._bgSound = playFunc();
        }
      },
      stopBGSound: function stopBGSound() {
        cc.audioEngine.stop(window._bgSound);
      },
      adjustVolume: function adjustVolume(vol) {
        window._soundVolume = vol;
        cc.audioEngine.setVolume(window._bgSound, vol);
      }
    };
    cc._RF.pop();
  }, {
    all_modules: "all_modules"
  } ],
  touch_pad: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71616/HRFxJeq4jBR3f7gvR", "touch_pad");
    "use strict";
    var _G = require("all_modules");
    setTimeout(function() {
      _G = require("all_modules");
    }, 0);
    var orgPosY = "undefined";
    cc.Class({
      extends: cc.Component,
      onLoad: function onLoad() {
        this.node.on("touchstart", function() {
          setTimeout(function() {
            _G.sound.playSFX("knife_throw");
          }, 200);
          var knives = cc.find("Canvas/gameplay/knives");
          if (knives.isFlying) return;
          "undefined" == orgPosY && (orgPosY = knives.children[0].y);
          knives.isFlying = true;
          var flyTime = _G.configs.knifeFlyTime || .5;
          knives.children.map(function(knife, index) {
            return knife.runAction(cc.sequence(cc.spawn(cc.moveBy(flyTime, cc.v2(0, 1500)), cc.rotateBy(flyTime, 1440)), cc.delayTime(.4), cc.callFunc(function() {
              knives.isFlying = false;
              knife.y = orgPosY;
              knife.stopAllActions();
              knife.rotation = 0;
              if (!index) {
                if (0 == _G.gameManager.comboScore) {
                  _G.fx.missed();
                  _G.gameManager.missed();
                }
                _G.gameManager.knifeThrowHandler();
                _timer0(_G.fx.setKnifeFxUpDown);
              }
              _G.gameManager.comboScore = 0;
            })));
          });
        });
      }
    });
    cc._RF.pop();
  }, {
    all_modules: "all_modules"
  } ],
  ui_button: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fbc649FEhJMEJ9NO9Yfmubu", "ui_button");
    "use strict";
    var _G = require("all_modules");
    setTimeout(function() {
      _G = require("all_modules");
    }, 0);
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      click: function click(event, customData) {
        var but = event.target;
        _G.sound.playSFX("button");
        switch (customData) {
         case "show_home":
          _G.uiLayout.showHome();
          break;

         case "next_level":
          _G.gameManager.playNextStage();
          break;

         case "get_triple_knives":
          _G.rewards.videoTripleKnives();
          break;

         case "get_special_knife":
          _G.rewards.videoSpecialKnife();
          break;

         case "cancel_triple_knives":
          _G.uiLayout.hide("suggest_triple_knives");
          _G.rewards.cancelTripleKnivesHandler();
          break;

         case "tap_to_play":
          _G.gameManager.playNextStage();
          break;

         case "missed_continue":
          _G.gameManager["continue"]();
          break;

         case "continue_no_thanks":
          _G.gameManager.refuseContinue();
          break;

         case "lucky_spin":
          _G.fx.showSpin();
          break;

         case "but_spin_click":
          _G.fx.butSpinClick();
          break;

         case "equip_new_knife":
          _G.fx.setNewKnife();
          _G.uiLayout.hide("new_knife");
          break;

         case "leaderboard":
          _G.uiLayout.show("leaderboard");
          break;

         case "shop":
          _G.uiLayout.show("shop");
        }
      }
    });
    cc._RF.pop();
  }, {
    all_modules: "all_modules"
  } ],
  ui_layout: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6967d9VbqlIL4yfefYWmPKf", "ui_layout");
    "use strict";
    var _G = require("all_modules");
    setTimeout(function() {
      _G = require("all_modules");
    }, 0);
    module.exports = {
      currentLayouts: {},
      allLayoutList: {
        gameplay: 1,
        win: 2,
        home: 2,
        suggest_triple_knives: 2,
        suggest_special_knife: 2,
        continue: 2,
        game_over: 2,
        daily_rewards: 2,
        leaderboard: 2,
        level_complete: 2,
        new_knife: 3,
        popup_not_enough_gold: 3,
        popup_load_video: 3,
        popup_video_failed: 3,
        popup_received_gold: 3,
        popup_congratulations: 3,
        popup_bot_gift: 3,
        popup_gift_list: 3
      },
      init: function init() {
        cc.find("Canvas").children.map(function(layout) {
          var closeBut = layout.getChildByName("but_close_popup");
          if (!closeBut) return;
          closeBut.on("touchend", function() {
            _G.uiLayout.hide(layout.name);
          });
        });
      },
      show: function show(layoutName) {
        var layout = cc.find("Canvas/" + layoutName);
        if (!layout) return false;
        layout.x = 0;
        layout.active = true;
        var layoutZOrder = _G.uiLayout.allLayoutList[layoutName];
        if (layoutZOrder > 1) {
          var bgName = "layer_bg_" + layoutZOrder;
          if (!layout.getChildByName(bgName)) {
            var bg = _G.utils.copyNodeTo(cc.find("nodeCaches/" + bgName), layout);
            bg.setPosition(0, 0);
            bg.zIndex = -10;
          }
        }
        var oldLayout = _G.uiLayout.currentLayouts[layoutZOrder];
        oldLayout || 1 != layoutZOrder || (oldLayout = cc.find("Canvas/gameplay"));
        oldLayout && oldLayout != layout && oldLayout.name && 1 == layoutZOrder && (oldLayout.x = 9999);
        _G.uiLayout.currentLayouts[layoutZOrder] = layout;
        _G.sound.playSFX("pop_up");
        return true;
      },
      hide: function hide(layoutName) {
        var layout = cc.find("Canvas/" + layoutName);
        if (!layout) return;
        var isShowing = 0 == layout.x;
        layout.x = 9999;
        layout.active = false;
        var layoutZOrder = _G.uiLayout.allLayoutList[layoutName];
        _G.uiLayout.currentLayouts[layoutZOrder] == layout && (_G.uiLayout.currentLayouts[layoutZOrder] = null);
        isShowing;
      },
      hideAll: function hideAll() {
        for (var layoutName in _G.uiLayout.allLayoutList) {
          var layout = cc.find("Canvas/" + layoutName);
          if (!layout || "gameplay" == layoutName || "suggest_triple_knives" == layoutName) continue;
          _G.uiLayout.hide(layoutName);
        }
      },
      showNagScreen: function showNagScreen() {
        cc.find("Canvas/gameplay/nag_screen").active = true;
      },
      hideNagScreen: function hideNagScreen() {
        cc.find("Canvas/gameplay/nag_screen").active = false;
      },
      showHome: function showHome() {
        _G.uiLayout.hideAll();
        _G.uiLayout.show("home");
        cc.find("Canvas/gameplay/juice_glass_stats").y = 521;
        cc.find("Canvas/gameplay/juice_glass_stats").active = true;
        cc.find("Canvas/gameplay/frame").active = false;
        _G.gameManager.updateTripleKnivesCount();
      },
      showGameOver: function showGameOver() {
        _G.uiLayout.hideAll();
        _G.uiLayout.show("game_over");
        cc.find("Canvas/gameplay/label_score").active = false;
        cc.find("Canvas/gameplay/juice_glass_stats").y = 300;
      },
      home2GamePlay: function home2GamePlay() {
        cc.find("Canvas/gameplay/frame").active = true;
        cc.find("Canvas/level_complete").active = false;
        cc.find("Canvas/gameplay/label_score").active = true;
        cc.find("Canvas/gameplay/juice_glass_stats").active = false;
      },
      showLevelComplete: function showLevelComplete() {
        _G.uiLayout.hideAll();
        _G.uiLayout.show("level_complete");
        _G.fx.showLevelComplete();
        cc.find("Canvas/gameplay/pseudo_black_bg").active = true;
        cc.find("Canvas/gameplay/label_score").active = true;
        cc.find("Canvas/gameplay/juice_glass_stats").y = -175;
        cc.find("Canvas/gameplay/juice_glass_stats").active = false;
        cc.find("Canvas/gameplay/frame").active = false;
      },
      resetUIGamePlay: function resetUIGamePlay() {
        [ "label_score", "stage_progress", "juice_glass_stats", "blender", "knives" ].map(function(nodeName) {
          cc.find("Canvas/gameplay/" + nodeName).opacity = 255;
        });
        cc.find("Canvas/gameplay/pseudo_black_bg").active = false;
        cc.find("Canvas/gameplay/knives").active = true;
        cc.find("Canvas/level_complete/juice_glasses").getComponent(cc.Layout).enabled = true;
        _G.gamePlay.frame.active = true;
      }
    };
    cc._RF.pop();
  }, {
    all_modules: "all_modules"
  } ],
  "use_v2.0.x_cc.Toggle_event": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6f913vzkxJPibOaz6bdt+ll", "use_v2.0.x_cc.Toggle_event");
    "use strict";
    cc.Toggle && (cc.Toggle._triggerEventInScript_check = true);
    cc._RF.pop();
  }, {} ],
  utils_facebook: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93239W3gi1E+JwHVlhksoRu", "utils_facebook");
    "use strict";
    var _G = require("all_modules");
    setTimeout(function() {
      _G = require("all_modules");
    }, 0);
    module.exports = {
      log: function log(eventName, quantity, dataObj) {
        if (!window.FBInstant) return;
        FBInstant.logEvent(eventName, quantity, dataObj);
      }
    };
    cc._RF.pop();
  }, {
    all_modules: "all_modules"
  } ],
  utils_instant: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58cfcCQKvtA6pJE/dSzyRsx", "utils_instant");
    "use strict";
    module.exports = {
      init: function init() {
        window._soundVolume = 1;
        window._isANDROID = cc.sys.os == cc.sys.OS_ANDROID;
        window._isIOS = cc.sys.os == cc.sys.OS_IOS;
        window._screenWidth = cc.winSize.width;
        window._screenHeight = cc.winSize.height;
        window._max = Math.max;
        window._min = Math.min;
        window._round = Math.round;
        window._floor = Math.floor;
        window._ceil = Math.ceil;
        window._abs = Math.abs;
        window._random = Math.random;
        window._sqrt = Math.sqrt;
        window._atan2 = Math.atan2;
        window._PI = Math.PI;
        window._isNumber = function(n) {
          return !isNaN(parseFloat(n)) && isFinite(n);
        };
        window._cloneObj = function(obj) {
          return Object.assign({}, obj);
        };
        window._removeArrItem = function(Arr, item) {
          var index = Arr.indexOf(item);
          if (-1 == index) return;
          Arr.splice(index, 1);
        };
        window._time = function() {
          return new Date().getTime();
        };
        window._isString = function(x) {
          return "string" === typeof x;
        };
        window._parseRatio = function(r, val) {
          return _isString(r) ? val * parseInt(r.replace("%", "")) / 100 : r;
        };
        window._directionArr = [ "top", "left", "bottom", "right" ];
        window._timer0 = function(f) {
          return setTimeout(f, 0);
        };
        window._log = function() {
          if (!window._NO_CONSOLE_LOG) try {
            var _console;
            (_console = console).log.apply(_console, arguments);
          } catch (e) {}
        };
        window._processTimeTickList = {};
        window._processTimeTick = function(name) {
          void 0 === name && (name = "anonymous");
          var currentTime = _time();
          _processTimeTickList[name] || (_processTimeTickList[name] = currentTime);
          var lastTime = _processTimeTickList[name];
          var result = " " + (currentTime % 1e6).toLocaleString() + " ";
          lastTime != currentTime && (result += "// ( " + ((currentTime - lastTime) / 1e3).toFixed(2) + " secs later) ");
          return result;
        };
        var actionManager = cc.director.getActionManager();
        window._removeAllCCActions = function(N) {
          actionManager.removeAllActionsFromTarget(N);
        };
        window._scheduleNodes = {};
        window._scheduler = cc.director.getScheduler();
        window._pauseSchedule = function(name) {
          var N = _scheduleNodes[name];
          N && _scheduler.pauseTarget(N);
        };
        window._schedule = function(name, callback, interval, repeat) {
          _scheduleNodes[name] && _pauseSchedule(name);
          var N = _scheduleNodes[name] = new cc.Node();
          _scheduler.scheduleCallbackForTarget(N, callback, interval, repeat - 1);
        };
        window._resumeSchedule = function(name) {
          var N = _scheduleNodes[name];
          N && _scheduler.resumeTarget(N);
        };
        window._stopSchedule = function(name) {
          _pauseSchedule(name);
          delete _scheduleNodes[name];
        };
        window._scheduleOnce = function(name, callback, interval) {
          _schedule(name, function() {
            _stopSchedule(name);
            callback();
          }, interval, 1);
        };
        window._waitToRun = function(callback, propertyName, mainObject, interval) {
          void 0 === mainObject && (mainObject = window);
          void 0 === interval && (interval = .1);
          var waitInterval = setInterval(function() {
            if (!mainObject[propertyName]) return;
            clearInterval(waitInterval);
            callback();
          }, 1e3 * interval);
        };
      }
    };
    cc._RF.pop();
  }, {} ],
  utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "680ab69UxNA1JDavURxh4lp", "utils");
    "use strict";
    var _G = require("all_modules");
    setTimeout(function() {
      _G = require("all_modules");
    }, 0);
    module.exports = {
      init: function init() {
        _G.utils.canvasNode = cc.find("Canvas");
      },
      deviceLog: function deviceLog(x, append) {
        void 0 === append && (append = true);
        _log(" deviceLog calllled -- x = " + x + " ");
        if (window._NO_DEVICELOG) return;
        var N = cc.find("debugTest/deviceLog");
        N.active = true;
        N.zIndex = 5e4;
        N.parent.zIndex = 9999;
        var S = N.getComponent(cc.Label);
        append || (S.string = "");
        S.string += x + (append ? "\n" : "");
      },
      highLightNode: function highLightNode(target) {
        var N = cc.instantiate(cc.find("Canvas/debugTest/highLightRect"));
        N.active = true;
        N.zIndex = 99999;
        N.opacity = 150;
        _Canvas.addChild(N);
        _G.utils.expandObj(target, N, [ "width", "height", "anchorX", "anchorY" ]);
        var x = target.x, y = target.y, scaleX = target.scaleX, scaleY = target.scaleY, parentNode = target, safeCount = 0;
        while (safeCount++ < 100 && !(parentNode instanceof cc.Scene)) {
          parentNode = parentNode.parent;
          if (!parentNode) break;
          x += parentNode.x;
          y += parentNode.y;
          scaleX *= parentNode.scaleX;
          scaleY *= parentNode.scaleY;
        }
        var debugNode = N.parent;
        N.setPosition(x - debugNode.x, y - debugNode.y);
        N.setScale(scaleX / debugNode.scaleX, scaleY / debugNode.scaleY);
        return N;
      },
      singleTouchSet: function singleTouchSet(N, touchStartFunc, touchMoveFunc, touchEndFunc) {
        N.on("touchstart", function(event) {
          if (N.touchingID) return;
          N.touchingID = event.touch.__instanceId;
          touchStartFunc && touchStartFunc(event);
        });
        touchMoveFunc && N.on("touchmove", function(event) {
          var tID = event.touch.__instanceId;
          tID == N.touchingID && touchMoveFunc && touchMoveFunc(event);
        });
        var touchDestroy = function touchDestroy(event) {
          var tID = event.touch.__instanceId;
          if (tID == N.touchingID) {
            N.touchingID = null;
            touchEndFunc && touchEndFunc(event);
          }
        };
        N.on("touchend", touchDestroy);
        N.on("touchcancel", touchDestroy);
      },
      getGlobalPosition: function getGlobalPosition(node) {
        var parent = node.parent, x = node.x, y = node.y, safeCount = 0;
        parent || _log(" parent=null // node = " + node + " ");
        while (parent && "Canvas" != parent.name && safeCount++ < 100) {
          x = x * parent.scaleX + parent.x;
          y = y * parent.scaleY + parent.y;
          parent = parent.parent;
        }
        return cc.v2(x, y);
      },
      global2LocalPosDiff: function global2LocalPosDiff(node, gPosX, gPosY) {
        var parent = node.parent, parentArr = [], safeCount = 0;
        while ("Canvas" != parent.name && safeCount++ < 100) {
          parentArr.push(parent);
          parent = parent.parent;
        }
        var x = gPosX, y = gPosY;
        parentArr.reverse().map(function(parent) {
          x = (x - parent.x) / parent.scaleX;
          y = (y - parent.y) / parent.scaleY;
        });
        return cc.v2(x - node.x, y - node.y);
      },
      getGlobalScale: function getGlobalScale(node) {
        var parent = node.parent, scaleX = node.scaleX, scaleY = node.scaleY, safeCount = 0;
        while ("Canvas" != parent.name && safeCount++ < 100) {
          scaleX *= parent.scaleX;
          scaleY *= parent.scaleY;
          parent = parent.parent;
        }
        return {
          X: scaleX,
          Y: scaleY
        };
      },
      setPosToOtherNode: function setPosToOtherNode(sourceNode, destNode) {
        var destGlobalPos = _G.utils.getGlobalPosition(destNode);
        var gPosDiff = _G.utils.global2LocalPosDiff(sourceNode, destGlobalPos.x, destGlobalPos.y);
        var x = sourceNode.x + gPosDiff.x;
        var y = sourceNode.y + gPosDiff.y;
        sourceNode.setPosition(x, y);
        return {
          x: x,
          y: y
        };
      },
      clonePosition: function clonePosition(sourceNode, destNode, getPosOnly) {
        void 0 === getPosOnly && (getPosOnly = false);
        var from = _G.utils.canvasNode.convertToNodeSpaceAR(sourceNode.convertToWorldSpaceAR(cc.v2(0, 0)));
        var to = _G.utils.canvasNode.convertToNodeSpaceAR(destNode.convertToWorldSpaceAR(cc.v2(0, 0)));
        var posDiff = to.sub(from);
        if (!getPosOnly) {
          sourceNode.x += posDiff.x;
          sourceNode.y += posDiff.y;
        }
        return cc.v2(sourceNode.x + posDiff.x, sourceNode.y + posDiff.y);
      },
      getValueInScale: function getValueInScale(scaleObj, keyNode) {
        var lastKey = 0, valueFound = null;
        for (var nodeIndex in scaleObj) {
          if (keyNode < nodeIndex) {
            valueFound = scaleObj[lastKey];
            break;
          }
          lastKey = nodeIndex;
        }
        null == valueFound && (valueFound = scaleObj[lastKey]);
        return valueFound;
      },
      random0ToX: function random0ToX(x) {
        return _floor(_random() * (x + 1));
      },
      randomArrItem: function randomArrItem(Arr, removeItem) {
        void 0 === removeItem && (removeItem = false);
        var iRandom = _floor(_random() * Arr.length);
        return removeItem ? Arr.splice(iRandom, 1)[0] : Arr[iRandom];
      },
      randomObjectProp: function randomObjectProp(obj, removeItem) {
        void 0 === removeItem && (removeItem = false);
        var arr = Array.from(Object.keys(obj)), prop = _G.utils.randomArrItem(arr);
        var val = obj[prop];
        removeItem && delete obj[prop];
        return val;
      },
      randomSetInList: function randomSetInList(count, myList) {
        void 0 === count && (count = 1);
        var result = [];
        if (Array.isArray(myList)) {
          var clone = myList.slice(0);
          while (count--) result.push(_G.utils.randomArrItem(clone, true));
        } else {
          var _clone = Object.assign({}, myList);
          while (count--) result.push(_G.utils.randomObjectProp(_clone, true));
        }
        return result;
      },
      expandObj: function expandObj(sourceObj, destObj, propArr) {
        propArr.map(function(propName) {
          return destObj[propName] = sourceObj[propName];
        });
      },
      getImgArr: function getImgArr(imgName, range1, range2) {
        var arr = [];
        for (var i = range1; i <= range2; i++) arr.push(_G.imgBank[imgName + (i < 10 ? "0" : "") + i]);
        return arr;
      },
      secondsToTime2: function secondsToTime2(secs) {
        var days = _floor(secs / 86400);
        var hrs = _floor(secs / 3600);
        var mins = _floor(secs % 3600 / 60);
        var secs = secs % 60;
        if (days > 0) return days + " day" + (days > 1 ? "s" : "");
        if (hrs > 0) return hrs + " hr" + (hrs > 1 ? "s" : "");
        if (mins > 0) return mins + " min" + (mins > 1 ? "s" : "");
        return (secs || 0) + " sec" + (secs > 1 ? "s" : "");
      },
      secondsToTime: function secondsToTime(secs) {
        var hrs = _floor(secs / 3600);
        var mins = _floor(secs % 3600 / 60);
        var secs = secs % 60;
        var ret = "";
        hrs > 0 && (ret += hrs + ":" + (mins < 10 ? "0" : ""));
        ret += mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
      },
      secondsToTimeCountdown: function secondsToTimeCountdown(secs) {
        if (secs <= 0) return "00:00";
        var days = _floor(secs / 86400);
        var hours = _floor(secs % 86400 / 3600);
        var minutes = _floor(secs % 3600 / 60);
        var seconds = secs % 60;
        if (days > 2) return days + " days";
        if (1 == days) return "1 day";
        var ret = "";
        hours >= 10 ? ret = hours + ":" : hours > 0 && (ret = "0" + hours + ":");
        ret += minutes >= 10 ? minutes + ":" : "0" + minutes + ":";
        ret += seconds >= 10 ? seconds : "0" + seconds;
        return ret;
      },
      setLabelCountDownTimer: function setLabelCountDownTimer(node, targetUTC, timeoutCallback) {
        var N = node;
        _isString(N) && (N = cc.find(N));
        N.countDownTimerVar && clearInterval(N.countDownTimerVar);
        var timerFunc = function timerFunc() {
          if (!N.parent) {
            clearInterval(N.countDownTimerVar);
            return;
          }
          var currentTime = _time();
          var timeDiff = targetUTC - currentTime;
          var timeDiffStr = _G.utils.secondsToTimeCountdown(_floor(timeDiff / 1e3));
          _G.utils.setLabelText(N, timeDiffStr);
          if (timeDiff <= 0) {
            clearInterval(N.countDownTimerVar);
            timeoutCallback && timeoutCallback();
          }
        };
        N.countDownTimerVar = setInterval(timerFunc, 500);
        timerFunc();
      },
      lineBreak: function lineBreak(str, chunkLength) {
        var wordArr = str.split(" "), ret = "", lineLength = 0;
        wordArr.map(function(word) {
          ret += word + " ";
          lineLength += word.length + 1;
          if (lineLength >= chunkLength) {
            ret += " \n";
            lineLength = 0;
          }
        });
        return ret;
      },
      trimStr: function trimStr(str, charCount, etcSign) {
        return str.substring(0, charCount) + (str.length > charCount && etcSign || "");
      },
      extendObj: function extendObj(orgObj, newObj, propArr) {
        propArr.map(function(prop) {
          newObj[prop] = orgObj[prop];
        });
      },
      setNodeProps: function setNodeProps(N, width, height, x, y, scale) {
        width && (N.width = width);
        height && (N.height = height);
        x && (N.x = x);
        y && (N.y = y);
        scale && (N.scale = scale);
      },
      setNodeImg: function setNodeImg(N, img, keepOldSize) {
        void 0 === keepOldSize && (keepOldSize = true);
        var orgW = N.width, orgH = N.height;
        N.getComponent(cc.Sprite) || N.addComponent(cc.Sprite);
        N.getComponent(cc.Sprite).spriteFrame = _isString(img) ? _G.imgBank[img] : img.getComponent ? img.getComponent(cc.Sprite).spriteFrame : img;
        if (keepOldSize) {
          N.width = orgW;
          N.height = orgH;
        }
      },
      setLabelText: function setLabelText(label, str) {
        if (!label) return;
        label.getComponent(cc.Label).string = str;
      },
      setLabelTextPrice: function setLabelTextPrice(label, number) {
        if (!label) return;
        var isStartedWPlus = _isString(number) && number.startsWith("+");
        var num = isStartedWPlus ? parseInt(number.replace("+", "")) : number;
        var str = _G.utils.shortNumber(num);
        label.getComponent(cc.Label).string = (isStartedWPlus ? "+" : "") + str;
      },
      parsePaddings: function parsePaddings(paddings) {
        var paddingObj = null;
        paddings = paddings || 0;
        if ("number" === typeof paddings) {
          paddingObj = {};
          _directionArr.map(function(item) {
            return paddingObj[item] = paddings;
          });
        }
        return paddingObj || paddings;
      },
      moveNodeTo: function moveNodeTo(node, newParent, copy) {
        void 0 === copy && (copy = false);
        var N = copy ? cc.instantiate(node) : node;
        if (newParent && N.parent != newParent) {
          N.removeFromParent(false);
          newParent.addChild(N);
        }
        return N;
      },
      copyNodeTo: function copyNodeTo(node, newParent) {
        var N = _G.utils.moveNodeTo(node, newParent, true);
        var originalSComps = node.getComponentsInChildren(cc.Sprite);
        var newSComps = N.getComponentsInChildren(cc.Sprite);
        originalSComps.map(function(comp, i) {
          var orgNode = comp.node, newNode = newSComps[i].node;
          _G.utils.extendObj(orgNode, newNode, [ "width", "height" ]);
          orgNode.onTouchEnd && newNode.on("touchend", orgNode.onTouchEnd);
        });
        return N;
      },
      sortGrid: function sortGrid(grid, sortFunc) {
        var childArr = grid.children.slice(0);
        childArr.sort(sortFunc);
        childArr.map(function(child, indexNum) {
          return child.setLocalZOrder(indexNum);
        });
      },
      prefabToNode: function prefabToNode(name) {
        var N = cc.instantiate(_G.prefabList[name]);
        return N;
      },
      preloadPrefabToNode: function preloadPrefabToNode(prefabName, nodeName, parent) {
        var node = _G.utils.prefabToNode(prefabName);
        node.name = nodeName;
        node.parent = parent;
        node.setPosition(0, 0);
        node.active = false;
      },
      prefabToAnimation: function prefabToAnimation(name, scale) {
        var N = cc.instantiate(_G.prefabList[name]);
        var animComp = N.getComponent(cc.Animation);
        var clip = animComp.defaultClip;
        var duration = animComp.play(clip.name).duration / clip.speed;
        N.animDuration = duration;
        var isLoop = clip.wrapMode == cc.WrapMode["Loop"];
        var removeScheduleName = "anim_stop_" + N.__instanceId;
        N.show = function(x, y) {
          N.active = true;
          isNaN(x) || isNaN(y) || N.setPosition(x, y);
          animComp.stop();
          animComp.play(clip.name);
          isLoop || _scheduleOnce(removeScheduleName, function() {
            N.active = false;
          }, duration);
        };
        N.pauseAnim = function() {
          animComp.pause();
          isLoop || _pauseSchedule(removeScheduleName);
        };
        N.resumeAnim = function() {
          animComp.resume();
          isLoop || _resumeSchedule(removeScheduleName);
        };
        N.scale = scale || 1;
        N.active = false;
        return N;
      },
      img2Animation: function img2Animation(imgArr, speed, isLoop, scale) {
        var fps = 60, clip = cc.AnimationClip.createWithSpriteFrames(imgArr, fps);
        clip.name = "default";
        clip.wrapMode = cc.WrapMode[isLoop ? "Loop" : "Normal"];
        clip.speed = speed || .3;
        var N = new cc.Node();
        N.addComponent(cc.Animation);
        N.addComponent(cc.Sprite);
        var animComp = N.getComponent(cc.Animation);
        animComp.addClip(clip);
        var duration = animComp.play("default").duration / clip.speed;
        N.animDuration = duration;
        var removeScheduleName = "anim_stop_" + N.__instanceId;
        N.show = function(x, y) {
          N.active = true;
          isNaN(x) || isNaN(y) || N.setPosition(x, y);
          animComp.stop();
          animComp.play("default");
          isLoop || _scheduleOnce(removeScheduleName, function() {
            N.active = false;
          }, duration);
        };
        N.pauseAnim = function() {
          animComp.pause();
          isLoop || _pauseSchedule(removeScheduleName);
        };
        N.resumeAnim = function() {
          animComp.resume();
          isLoop || _resumeSchedule(removeScheduleName);
        };
        N.scale = scale || 1;
        N.active = false;
        return N;
      },
      template2Animation: function template2Animation(temName, speed, isLoop, scale) {
        var imgArr = [];
        _nodeTemplates.getChildByName(temName).children.map(function(node) {
          imgArr.push(node.getComponent(cc.Sprite).spriteFrame);
        });
        var result = _G.utils.img2Animation(imgArr, speed, isLoop, scale);
        result.active = true;
        return result;
      },
      img2Node: function img2Node(parentNode, img, width, height, x, y, scale) {
        var N = new cc.Node();
        N.addComponent(cc.Sprite);
        parentNode = parentNode || _nodeCaches;
        parentNode.addChild(N);
        N.getComponent(cc.Sprite).spriteFrame = _isString(img) ? _G.imgBank[img] : img || new cc.SpriteFrame();
        _G.utils.setNodeProps(N, width, height, x, y, scale);
        return N;
      },
      template2Node: function template2Node(parentNode, temName, width, height) {
        var temNode = _nodeTemplates.getChildByName(temName);
        temNode || cc.log(' _G.utils.template2Node error : no template node with name "' + temName + '" !');
        var N = cc.instantiate(temNode);
        parentNode = parentNode || _nodeCaches;
        parentNode.addChild(N);
        width && (N.width = width);
        height && (N.height = height);
        N.setPosition(0, 0);
        return N;
      },
      newLabel: function newLabel(parentNode, textStr, color, fontSize, font, align) {
        void 0 === align && (align = "center");
        var N = new cc.Node();
        parentNode = parentNode || _nodeCaches;
        parentNode.addChild(N);
        N.addComponent(cc.Label);
        var LBComp = N.getComponent(cc.Label);
        N.color = new cc.color(color || "#000000");
        LBComp.fontSize = fontSize || 30;
        LBComp.lineHeight = _floor(1.5 * (fontSize || 30));
        LBComp.font = _fontBank[font || _DEFAULT_FONT];
        LBComp.string = textStr;
        LBComp.horizontalAlign = cc.Label.HorizontalAlign[align.toUpperCase()];
        return N;
      },
      newRichText: function newRichText(parentNode, atlas, HTML, textAlign, fontSize, font) {
        var N = new cc.Node();
        parentNode = parentNode || _nodeCaches;
        parentNode.addChild(N);
        N.addComponent(cc.RichText);
        var RTComp = N.getComponent(cc.RichText);
        RTComp.fontSize = fontSize || 20;
        RTComp.lineHeight = _floor(1.2 * (fontSize || 20));
        font = font || _DEFAULT_FONT;
        RTComp.font = _isString(font) ? _fontBank[font] : font;
        RTComp.imageAtlas = _isString(atlas) ? _atlasBank[atlas] : atlas;
        RTComp.string = HTML;
        RTComp.horizontalAlign = cc.TextAlignment[textAlign.toUpperCase()];
        return N;
      },
      img2Button: function img2Button(parentNode, img, handlerFunc, width, height, x, y, scale) {
        var N = _G.utils.img2Node(parentNode, img, width, height, x, y, scale);
        N.on("touchstart", handlerFunc);
        return N;
      },
      newGrid: function newGrid(parentNode, gridType, background, width, height, paddings, spacingX, spacingY) {
        gridType = gridType || "horizontal";
        var N = _G.utils.template2Node(parentNode, "grid_" + gridType, width, height);
        if (!N) return;
        background && _G.utils.setNodeImg(N, background);
        N.gridType = gridType;
        var layoutComp = N.getComponent(cc.Layout);
        paddings = _G.utils.parsePaddings(paddings);
        N.paddings = paddings;
        layoutComp.paddingLeft = paddings.left;
        layoutComp.paddingRight = paddings.right;
        layoutComp.paddingTop = paddings.top;
        layoutComp.paddingBottom = paddings.bottom;
        layoutComp.spacingX = spacingX || 0;
        layoutComp.spacingY = spacingY || 0;
        return N;
      },
      shortNumber: function shortNumber(value) {
        if (value < 1e5) return _G.utils.formatNumber(value);
        var suffixes = [ "", "K", "M", "B", "T" ];
        var suffixNum = Math.floor((("" + value).length - 3) / 3);
        var shortValue = Math.floor(value / Math.pow(1e3, suffixNum));
        return _G.utils.formatNumber(shortValue) + suffixes[suffixNum];
      },
      formatNumber: function formatNumber(value) {
        return value.toLocaleString("en");
      }
    };
    cc._RF.pop();
  }, {
    all_modules: "all_modules"
  } ]
}, {}, [ "use_v2.0.x_cc.Toggle_event", "all_modules", "bot_subscribe", "configs", "touch_pad", "home", "data", "game_manager", "game_play", "knife_collision", "rewards", "social", "prefab_list", "fx", "sound", "ui_button", "ui_layout", "utils", "utils_facebook", "utils_instant" ]);