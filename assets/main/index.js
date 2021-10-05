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
  Api: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cffd1wdHiNPIaFpHSP+5t/F", "Api");
    "use strict";
    var __assign = this && this.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Config_1 = require("./Config");
    var image_1 = require("./image");
    var UI_1 = require("./UI");
    var Api = function() {
      function Api() {}
      Object.defineProperty(Api, "coin", {
        get: function() {
          return Api._coin;
        },
        set: function(coin) {
          Api._coin = coin;
          cc.systemEvent.emit("updateProfile");
        },
        enumerable: false,
        configurable: true
      });
      Api.initAsync = function(callback, leaderboard) {
        if (Api.initialized) {
          Api.loadLeaderboard(leaderboard);
          return callback(false, Api.dailyBonusDay);
        }
        if (!Api.initialized && window.hasOwnProperty("FBInstant")) {
          Api.initialized = true;
          Api.photo = FBInstant.player.getPhoto();
          Api.username = FBInstant.player.getName();
          Api.playerId = FBInstant.player.getID();
          Api.locale = FBInstant.getLocale();
          Api.getPlayerData(callback);
          Api.loadLeaderboard(leaderboard);
          Api.subscribeBot();
          Api.createShortcut();
        } else {
          Api.ticket = 0;
          Api.dailyBonusDay = 1;
          Api.locale = "vi_VN";
          Api.loadLeaderboard(leaderboard);
        }
      };
      Api.getPlayerData = function(callback) {
        FBInstant.player.getDataAsync([ "coin", "ticket", "daily_bonus_claimed_at", "daily_bonus_day", "vip", "vip-expire", "startAt" ]).then(function(data) {
          Api.coin = data["coin"];
          if (void 0 == Api.coin || null == Api.coin) {
            Api.coin = Config_1.default.defaultCoin;
            Api.isDirty = true;
          }
          if (data["startAt"]) Api.canShowInterAd = true; else {
            cc.systemEvent.emit("firstTut");
            FBInstant.player.setDataAsync({
              startAt: Date.now()
            }).then(function() {
              cc.log("data is set");
            });
          }
          Api.countTimeShowInterAd();
          Api.vipExpire = data["vip-expire"] || 0;
          cc.systemEvent.emit("reloadVip");
          Api.ticket = data["ticket"] || 10;
          Api.dailyBonusDay = data["daily_bonus_day"] || 1;
          Api.dailyBonusClaimed = !Api.dailyBonusClaimable(data["daily_bonus_claimed_at"]);
          callback(!Api.dailyBonusClaimed, Api.dailyBonusDay);
          Api.isDirty && Api.flush();
        });
      };
      Api.countTimeShowInterAd = function() {
        setTimeout(function() {
          Api.canShowInterAd = true;
        }, 12e4);
        var count = 0;
        var itv = setInterval(function() {
          count++;
          var remainTime = 120 - 10 * count;
          console.log("remainTime show ad = " + remainTime + "s");
          !remainTime && clearInterval(itv);
        }, 1e4);
      };
      Api.setVIP = function() {
        this.vipExpire = Date.now() + 864e5;
        window.hasOwnProperty("FBInstant") && FBInstant.player.setDataAsync({
          "vip-expire": this.vipExpire
        }).then(function() {
          cc.log("vip is set");
        });
      };
      Api.isVIP = function() {
        return this.vipExpire > Date.now();
      };
      Api.subscribeBot = function() {
        FBInstant.player.canSubscribeBotAsync().then(function(can_subscribe) {
          cc.log("subscribeBotAsync", can_subscribe);
          Api.canSubscribeBot = can_subscribe.valueOf();
          Api.canSubscribeBot && FBInstant.player.subscribeBotAsync().then().catch(function(e) {
            cc.log("subscribeBotAsync");
          });
        }).catch(function(e) {
          cc.log("subscribeBotAsync", e);
        });
      };
      Api.createShortcut = function() {
        FBInstant.canCreateShortcutAsync().then(function(canCreateShortcut) {
          canCreateShortcut && FBInstant.createShortcutAsync().then(function() {}).catch(function() {});
        });
      };
      Api.loadLeaderboard = function(leaderboard) {
        var _a;
        return __awaiter(this, void 0, void 0, function() {
          var friendIds, _b, res, _c, error_1;
          return __generator(this, function(_d) {
            switch (_d.label) {
             case 0:
              if (!window.hasOwnProperty("FBInstant")) return [ 3, 2 ];
              return [ 4, FBInstant.player.getConnectedPlayersAsync().then(function(players) {
                var friendIds = [];
                var friend = players.map(function(el) {
                  var friendId = el.getID();
                  friendIds.push(friendId);
                  return {
                    id: friendId,
                    photo: el.getPhoto(),
                    name: el.getName(),
                    score: 0,
                    rank: 0
                  };
                });
                return friendIds;
              }) ];

             case 1:
              _b = _d.sent();
              return [ 3, 3 ];

             case 2:
              _b = [ "3996898737068113", "5606111449462125", "4023061614414474", "6151676114861029", "3719288714858330" ];
              _d.label = 3;

             case 3:
              friendIds = _b;
              _d.label = 4;

             case 4:
              _d.trys.push([ 4, 7, , 8 ]);
              _c = Config_1.default.cacheLB;
              if (_c) return [ 3, 6 ];
              return [ 4, fetch(Api.lb_api + "/" + Api.lb_id + "?friendList=" + friendIds).then(function(rs) {
                return rs.json();
              }) ];

             case 5:
              _c = _d.sent();
              _d.label = 6;

             case 6:
              res = _c;
              res.global = Api.prepareLBglobal((null === (_a = null === res || void 0 === res ? void 0 : res.entries) || void 0 === _a ? void 0 : _a.global) || []);
              Config_1.default.cacheLB = res;
              Api.renderLeaderBoard(null === res || void 0 === res ? void 0 : res.entries, "global", leaderboard);
              Api.renderLeaderBoard(null === res || void 0 === res ? void 0 : res.entries, "friend", leaderboard);
              return [ 3, 8 ];

             case 7:
              error_1 = _d.sent();
              return [ 3, 8 ];

             case 8:
              return [ 2 ];
            }
          });
        });
      };
      Api.prepareLBglobal = function(listGlobal) {
        void 0 === listGlobal && (listGlobal = []);
        return listGlobal.map(function(user) {
          if ((null === user || void 0 === user ? void 0 : user.user_id) == Api.playerId) return __assign(__assign({}, user), {
            score: +Api.coin
          });
          return user;
        });
      };
      Api.renderLeaderBoard = function(res, typeOfLeaderBoard, leaderboard) {
        var _a;
        var players = (null === (_a = res[typeOfLeaderBoard]) || void 0 === _a ? void 0 : _a.filter(function(e) {
          return e.user_id;
        })) || [];
        var lengthOfLeaderBoad = players.length;
        if (!lengthOfLeaderBoad) return;
        var lastIndex = lengthOfLeaderBoad - 1;
        players.map(function(e, i) {
          leaderboard.render(i, e.username, e.score, e.photo, e.user_id, typeOfLeaderBoard);
          i === lastIndex && leaderboard.onLoadComplete();
        });
      };
      Api.preloadRewardedVideo = function(callback) {
        void 0 === callback && (callback = null);
        if (!window.hasOwnProperty("FBInstant") || Api.preloadedRewardedVideo || !Config_1.default.reward_video) {
          callback && callback();
          return;
        }
        FBInstant.getRewardedVideoAsync(Config_1.default.reward_video).then(function(rewarded) {
          Api.preloadedRewardedVideo = rewarded;
          return Api.preloadedRewardedVideo.loadAsync();
        }).then(function() {
          cc.log("Rewarded video preloaded");
          callback && callback();
        }).catch(function(e) {
          Api.preloadedRewardedVideo = null;
          console.error(e.message);
          callback && callback();
        });
      };
      Api.rewardConfirmed = function() {};
      Api.showRewardedVideo = function(success, error) {
        window.hasOwnProperty("FBInstant") && Config_1.default.reward_video || success();
        if (!Api.preloadedRewardedVideo) {
          UI_1.default.showAdNotLoad();
          console.error("ad not load yet");
          return error("ad not load yet");
        }
        Api.rewardConfirmed = function() {
          Api.preloadedRewardedVideo.showAsync().then(function() {
            success();
            Api.preloadedRewardedVideo = null;
            setTimeout(function() {
              Api.preloadRewardedVideo();
            }, 0);
            cc.log("Rewarded video watched successfully");
          }).catch(function(e) {
            error(e.message);
            Api.preloadedRewardedVideo = null;
            console.error(e.message);
          });
        };
      };
      Api.preloadInterstitialAd = function(callback) {
        void 0 === callback && (callback = null);
        window.hasOwnProperty("FBInstant") && !Api.preloadedInterstitial && FBInstant.getInterstitialAdAsync(Config_1.default.intertital_ads).then(function(interstitial) {
          Api.preloadedInterstitial = interstitial;
          return Api.preloadedInterstitial.loadAsync();
        }).then(function() {
          cc.log("Interstitial preloaded");
          callback && callback();
        }).catch(function(err) {
          cc.error("Interstitial failed to preload");
          cc.error(err);
        });
      };
      Api.showInterstitialAd = function() {
        if (!Api.canShowInterAd) return;
        window.hasOwnProperty("FBInstant") && Api.preloadedInterstitial && Api.preloadedInterstitial.showAsync().then(function() {
          cc.log("Interstitial ad finished successfully");
          Api.preloadedInterstitial = null;
          setTimeout(function() {
            Api.preloadInterstitialAd();
          }, 0);
        }).catch(function(e) {
          cc.error(e.message);
          Api.preloadedInterstitial = null;
        });
      };
      Api.isInterstitialAdLoaded = function() {
        if (!window.hasOwnProperty("FBInstant")) return false;
        return !!Api.preloadedInterstitial;
      };
      Api.challenge = function(playerId) {
        return __awaiter(this, void 0, Promise, function() {
          var rs;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!window.hasOwnProperty("FBInstant")) return [ 3, 2 ];
              return [ 4, FBInstant.context.createAsync(playerId) ];

             case 1:
              rs = _a.sent();
              console.log("====================================");
              console.log("rs1", rs);
              console.log("====================================");
              return [ 2, FBInstant.updateAsync({
                action: "CUSTOM",
                template: "play_turn",
                cta: "Ch\u01a1i ngay",
                image: image_1.default,
                text: Api.username + " \u0111ang th\xe1ch \u0111\u1ea5u b\u1ea1n. Nh\u1ea5n ch\u01a1i ngay!",
                strategy: "IMMEDIATE"
              }) ];

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      Api.shareAsync = function() {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            if (window.hasOwnProperty("FBInstant")) return [ 2, FBInstant.shareAsync({
              intent: "SHARE",
              image: image_1.default,
              text: "Black Jack AG Tour 2021!"
            }) ];
            return [ 2, Promise.resolve() ];
          });
        });
      };
      Api.invite = function(success, error) {
        window.hasOwnProperty("FBInstant") ? FBInstant.context.chooseAsync().then(function() {
          success(FBInstant.context.getID());
          FBInstant.updateAsync({
            action: "CUSTOM",
            template: "play_turn",
            cta: "Ch\u01a1i ngay",
            image: image_1.default,
            text: Api.username + " m\u1eddi b\u1ea1n c\xf9ng ch\u01a1i game ti\u1ebfn li\xean mi\u1ec1n nam",
            strategy: "IMMEDIATE"
          });
        }).catch(error) : success("");
      };
      Api.coinIncrement = function(val) {
        Api.updateCoin(Api.coin + val);
      };
      Api.updateCoin = function(coin) {
        Api.coin = coin;
        window.hasOwnProperty("FBInstant") && FBInstant.player.setDataAsync({
          coin: Api.coin
        }).then(function() {
          cc.log("data is set");
        });
        Api.setScoreAsync(Api.coin).then(function() {
          return cc.log("Score saved");
        }).catch(function(err) {
          return console.error(err);
        });
      };
      Api.updateTicket = function() {
        window.hasOwnProperty("FBInstant") && FBInstant.player.setDataAsync({
          ticket: Api.ticket
        }).then(function() {
          cc.log("ticket is set");
        });
      };
      Api.claimDailyBonus = function(day) {
        Api.dailyBonusClaimed = true;
        var nextDay = 7 == day ? 1 : day + 1;
        if (window.hasOwnProperty("FBInstant")) {
          var claimed_at = new Date();
          FBInstant.player.setDataAsync({
            coin: Api.coin,
            ticket: Api.ticket,
            daily_bonus_claimed_at: claimed_at.toString(),
            daily_bonus_day: nextDay
          }).then(function() {
            cc.log("data is set");
          }, function(reason) {
            cc.log("data is not set", reason);
          });
        }
        Api.dailyBonusDay = nextDay;
      };
      Api.dailyBonusClaimable = function(claimedAt) {
        if (!claimedAt) return true;
        "string" == typeof claimedAt && (claimedAt = new Date(claimedAt));
        var now = new Date();
        if (now.getFullYear() != claimedAt.getFullYear()) return true;
        if (now.getMonth() != claimedAt.getMonth()) return true;
        if (now.getDate() != claimedAt.getDate()) return true;
        return false;
      };
      Api.flush = function() {
        window.hasOwnProperty("FBInstant") && FBInstant.player.setDataAsync({
          coin: Api.coin,
          ticket: Api.ticket
        }).then(function() {
          cc.log("data is set");
        });
        Api.setScoreAsync(Api.coin).then(function(res) {
          return res.json();
        }).then(function(res) {
          return cc.log(res);
        }).catch(function(err) {
          return console.error(err);
        });
      };
      Api.logEvent = function(eventName, valueToSum, parameters) {
        if (!eventName) return;
        if (window.hasOwnProperty("FBInstant")) try {
          window.firebase.analytics().logEvent(eventName, parameters);
          console.log("====================================");
          console.log(eventName, parameters);
          console.log("====================================");
        } catch (error) {
          console.log("====================================");
          console.log("analytic error", error);
          console.log("====================================");
        }
      };
      Api.setScoreAsync = function(score) {
        if (!window.hasOwnProperty("FBInstant")) return;
        var data = {
          score: score,
          userId: Api.playerId,
          name: Api.username,
          photo: Api.photo
        };
        return fetch(Api.lb_api + "/" + Api.lb_id, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
      };
      Api.randomBonus = function() {
        var r = Math.random();
        if (r < .05) return 4e5;
        if (r < .2) return 3e5;
        if (r < .5) return 2e5;
        return 1e5;
      };
      Api.vipExpire = 0;
      Api.contentConfirmLangKey = "";
      Api.initialized = false;
      Api._coin = 1e4;
      Api.ticket = 0;
      Api.username = "D";
      Api.playerId = "DM";
      Api.locale = "vi_VN";
      Api.photo = "https://i.imgur.com/FUOxs43.jpg";
      Api.isDirty = false;
      Api.preloadedRewardedVideo = null;
      Api.preloadedInterstitial = null;
      Api.canSubscribeBot = false;
      Api.dailyBonusDay = 1;
      Api.dailyBonusClaimed = false;
      Api.lb_api = "https://leaderboard.adpia.com.vn/instant";
      Api.lb_id = "a330e5054804f7fb73bd1f99";
      Api.ID_APP = "440201687124598";
      Api.canShowInterAd = false;
      return Api;
    }();
    exports.default = Api;
    cc._RF.pop();
  }, {
    "./Config": "Config",
    "./UI": "UI",
    "./image": "image"
  } ],
  AudioPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a8fc4W4Bk5LCI1G39gq+6eK", "AudioPlayer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AudioPlayer = function(_super) {
      __extends(AudioPlayer, _super);
      function AudioPlayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.audioClip = null;
        return _this;
      }
      AudioPlayer.prototype.start = function() {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "AudioPlayer";
        clickEventHandler.handler = "play";
        var button = this.node.getComponent(cc.Button);
        button.clickEvents.push(clickEventHandler);
      };
      AudioPlayer.prototype.play = function() {};
      __decorate([ property({
        type: cc.AudioClip
      }) ], AudioPlayer.prototype, "audioClip", void 0);
      AudioPlayer = __decorate([ ccclass ], AudioPlayer);
      return AudioPlayer;
    }(cc.Component);
    exports.default = AudioPlayer;
    cc._RF.pop();
  }, {} ],
  AutoHide: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ab56S/omxH+qPXcysDsNwA", "AutoHide");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AutoHide = function(_super) {
      __extends(AutoHide, _super);
      function AutoHide() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
      }
      AutoHide.prototype.start = function() {};
      AutoHide.prototype.show = function(sender) {
        this.label.string = "T\xcdnh n\u0103ng s\u1eafp ra m\u1eaft...";
        this.node.active = true;
      };
      AutoHide.prototype.hide = function() {
        this.node.active = false;
      };
      AutoHide.prototype.queuhide = function() {
        this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(this.hide, this)));
      };
      AutoHide.prototype.openWithText = function(sender, string) {
        this.label.string = string;
        this.node.active = true;
        this.queuhide();
      };
      __decorate([ property(cc.Label) ], AutoHide.prototype, "label", void 0);
      AutoHide = __decorate([ ccclass ], AutoHide);
      return AutoHide;
    }(cc.Component);
    exports.default = AutoHide;
    cc._RF.pop();
  }, {} ],
  Bot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2fab9HUN9BE+7ULtb/jaU1f", "Bot");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CardGroup_1 = require("./CardGroup");
    var Helper_1 = require("./Helper");
    var Bot = function() {
      function Bot() {}
      Bot.random = function(handCards) {
        var cards = null;
        var firstCard = Helper_1.default.findCard(handCards, 3, 1);
        if (firstCard) {
          var straight = Bot.findAllCardByRank(handCards, 3);
          if (straight.length >= 3) return new CardGroup_1.default(straight, CardGroup_1.default.House);
          return new CardGroup_1.default([ firstCard ], CardGroup_1.default.Single);
        }
        cards = Bot.findStraightCard(handCards);
        if (cards) return new CardGroup_1.default(cards, CardGroup_1.default.Straight);
        cards = Bot.findHouseCard(handCards);
        if (cards && !(15 == cards[0].rank && cards.length < handCards.length)) return new CardGroup_1.default(cards, CardGroup_1.default.House);
        var card = Helper_1.default.findMinCard(handCards);
        return new CardGroup_1.default([ card ], CardGroup_1.default.Single);
      };
      Bot.suggest = function(commonCards, handCards) {
        var common = commonCards.peek();
        if (15 == common.highest.rank && 3 == common.count()) return null;
        if (15 == common.highest.rank && 2 == common.count()) {
          var cards = Helper_1.default.findMultiPairCard(handCards, null, 8);
          if (cards) return new CardGroup_1.default(cards, CardGroup_1.default.MultiPair);
          var four = Helper_1.default.findHouseCard(handCards, null, 4);
          if (four) return new CardGroup_1.default(four, CardGroup_1.default.House);
          var pair = Helper_1.default.findHouseCard(handCards, common.highest, 2);
          if (pair) return new CardGroup_1.default(pair, CardGroup_1.default.House);
          return null;
        }
        if (15 == common.highest.rank && 1 == common.count()) {
          var cards = Helper_1.default.findMultiPairCard(handCards, null, 6);
          if (cards) return new CardGroup_1.default(cards, CardGroup_1.default.MultiPair);
          var four = Helper_1.default.findHouseCard(handCards, null, 4);
          if (four) return new CardGroup_1.default(four, CardGroup_1.default.House);
          var card = Helper_1.default.findMinCard(handCards, common.highest);
          if (card) return new CardGroup_1.default([ card ], CardGroup_1.default.Single);
          return null;
        }
        if (common.kind == CardGroup_1.default.Single) {
          var cards = Helper_1.default.findMinCard(handCards, common.highest);
          return null == cards ? null : new CardGroup_1.default([ cards ], CardGroup_1.default.Single);
        }
        if (common.kind == CardGroup_1.default.House) {
          var cards = Helper_1.default.findHouseCard(handCards, common.highest, common.count());
          return null == cards ? null : new CardGroup_1.default(cards, CardGroup_1.default.House);
        }
        if (common.kind == CardGroup_1.default.Straight) {
          var cards = Helper_1.default.findStraightCard(handCards, common);
          return null == cards ? null : new CardGroup_1.default(cards, CardGroup_1.default.Straight);
        }
        if (common.kind == CardGroup_1.default.MultiPair) {
          var cards = Helper_1.default.findMultiPairCard(handCards, common.highest, common.count() / 2);
          return null == cards ? null : new CardGroup_1.default(cards, CardGroup_1.default.MultiPair);
        }
        return null;
      };
      Bot.findStraightCard = function(cards) {
        Helper_1.default.sort(cards);
        for (var i = 0; i < cards.length; i++) {
          var cardStarted = cards[i];
          if (cardStarted.rank < 13) {
            var straight = Bot._findStraightCard(cards, cardStarted);
            if (straight.length >= 3) return straight;
          }
        }
        return null;
      };
      Bot._findStraightCard = function(cards, started) {
        var straight = [ started ];
        for (var c = started.rank + 1; c < 15; c++) {
          var card = Helper_1.default.findCardByRank(cards, c);
          if (null == card) break;
          straight.push(card);
        }
        return straight;
      };
      Bot.findHouseCard = function(cards) {
        Helper_1.default.sort(cards);
        for (var i = 0; i < cards.length; i++) {
          var cardStarted = cards[i];
          var straight = Bot.findAllCardByRank(cards, cardStarted.rank);
          if (straight.length >= 2) return straight;
        }
        return null;
      };
      Bot.findAllCardByRank = function(cards, rank) {
        var setCards = [];
        for (var i = cards.length - 1; i >= 0; --i) cards[i].rank == rank && setCards.push(cards[i]);
        return setCards;
      };
      return Bot;
    }();
    exports.default = Bot;
    cc._RF.pop();
  }, {
    "./CardGroup": "CardGroup",
    "./Helper": "Helper"
  } ],
  CardGroup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bece1QhfllOVa5CfNF0TmNb", "CardGroup");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Helper_1 = require("./Helper");
    var CardGroup = function() {
      function CardGroup(cards, kind) {
        this.cards = cards;
        this.kind = CardGroup.Single;
        this.kind = kind;
        0 != kind && (this.highest = Helper_1.default.findMaxCard(cards));
      }
      CardGroup.prototype.getPosition = function() {
        if (this.cards.length % 2 != 0) {
          var idx = (this.cards.length - 1) / 2;
          return this.cards[idx].node.getPosition();
        }
        var middle = this.cards.length / 2;
        var c1 = this.cards[middle].node.getPosition();
        var c2 = this.cards[middle - 1].node.getPosition();
        return cc.v2((c1.x + c2.x) / 2, (c1.y + c2.y) / 2);
      };
      CardGroup.prototype.gt = function(o) {
        if (this.kind == o.kind && this.count() == o.count()) return this.highest.gt(o.highest);
        if (15 == o.highest.rank && 1 == o.count()) {
          if (this.kind == CardGroup.MultiPair) return true;
          if (this.kind == CardGroup.House && 4 == this.count()) return true;
          return false;
        }
        if (15 == o.highest.rank && 2 == o.count()) {
          if (this.kind == CardGroup.MultiPair && 8 == this.count()) return true;
          if (this.kind == CardGroup.House && 4 == this.count()) return true;
          return false;
        }
        if (o.kind == CardGroup.MultiPair && 6 == o.count()) {
          if (this.kind == CardGroup.House && 4 == this.count()) return true;
          if (this.kind == CardGroup.MultiPair && 8 == this.count()) return true;
        }
        if (o.kind == CardGroup.House && 4 == o.count()) return this.kind == CardGroup.MultiPair && 8 == this.count();
        return false;
      };
      CardGroup.prototype.at = function(i) {
        return this.cards[i];
      };
      CardGroup.prototype.count = function() {
        return this.cards.length;
      };
      CardGroup.prototype.push = function(card) {
        this.cards.push(card);
      };
      CardGroup.prototype.remove = function(card) {
        var index = this.cards.indexOf(card, 0);
        this.cards.splice(index, 1);
      };
      CardGroup.prototype.contains = function(card) {
        for (var i = this.cards.length - 1; i >= 0; --i) if (this.cards[i] == card) return true;
        return false;
      };
      CardGroup.prototype.calculate = function() {
        if (1 == this.cards.length) {
          this.kind = CardGroup.Single;
          this.highest = Helper_1.default.findMaxCard(this.cards);
        } else if (Helper_1.default.isHouse(this.cards)) {
          this.kind = CardGroup.House;
          this.highest = Helper_1.default.findMaxCard(this.cards);
        } else if (Helper_1.default.isStraight(this.cards)) {
          this.kind = CardGroup.Straight;
          this.highest = Helper_1.default.findMaxCard(this.cards);
        } else if (Helper_1.default.isMultiPair(this.cards)) {
          this.kind = CardGroup.MultiPair;
          this.highest = Helper_1.default.findMaxCard(this.cards);
        } else this.kind = CardGroup.Ungrouped;
      };
      CardGroup.prototype.sort = function() {
        Helper_1.default.sort(this.cards);
      };
      CardGroup.prototype.isInvalid = function() {
        return this.kind == CardGroup.Ungrouped;
      };
      CardGroup.prototype.dump = function() {
        for (var i = this.cards.length - 1; i >= 0; --i) console.log(this.cards[i].toString());
      };
      CardGroup.Ungrouped = 0;
      CardGroup.Single = 1;
      CardGroup.House = 2;
      CardGroup.Straight = 3;
      CardGroup.Boss = 4;
      CardGroup.MultiPair = 5;
      return CardGroup;
    }();
    exports.default = CardGroup;
    cc._RF.pop();
  }, {
    "./Helper": "Helper"
  } ],
  Card: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5e609fdf41BH6QiJ7pgTFU1", "Card");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Card = function(_super) {
      __extends(Card, _super);
      function Card() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.back = null;
        _this.front = null;
        _this.rank = 1;
        _this.suit = 1;
        _this.overlayer = null;
        return _this;
      }
      Card.prototype.onLoad = function() {
        this.front = this.getComponent(cc.Sprite).spriteFrame;
        this.getComponent(cc.Sprite).spriteFrame = this.back;
        this.overlayer = this.node.children[this.node.children.length - 1];
      };
      Card.prototype.start = function() {
        this.overlayer.active = false;
      };
      Card.prototype.reset = function() {
        this.node.active = true;
        this.node.setScale(1);
        this.overlayer.active = false;
        this.node.setPosition(cc.Vec2.ZERO);
        this.hide();
      };
      Card.prototype.show = function() {
        this.getComponent(cc.Sprite).spriteFrame = this.front;
        this.setChildrenActive(true);
      };
      Card.prototype.hide = function() {
        this.getComponent(cc.Sprite).spriteFrame = this.back;
        this.setChildrenActive(false);
      };
      Card.prototype.setChildrenActive = function(active) {
        for (var i = 0; i < this.node.children.length - 1; i++) this.node.children[i].active = active;
      };
      Card.prototype.overlap = function() {
        this.overlayer.active = true;
      };
      Card.prototype.setPositionY = function(newPosY) {
        this.node.setPosition(this.node.position.x, newPosY);
      };
      Card.prototype.compare = function(o) {
        if (null == o) return 1;
        if (this.rank > o.rank) return 1;
        if (this.rank < o.rank) return -1;
        if (this.suit > o.suit) return 1;
        if (this.suit < o.suit) return -1;
        return 0;
      };
      Card.prototype.gt = function(o) {
        return this.compare(o) > 0;
      };
      Card.prototype.lt = function(o) {
        return this.compare(o) < 0;
      };
      Card.prototype.toString = function() {
        return "Rank: " + this.rank + " Suit: " + this.suit;
      };
      __decorate([ property(cc.SpriteFrame) ], Card.prototype, "back", void 0);
      __decorate([ property(cc.SpriteFrame) ], Card.prototype, "front", void 0);
      Card = __decorate([ ccclass ], Card);
      return Card;
    }(cc.Component);
    exports.default = Card;
    cc._RF.pop();
  }, {} ],
  CommonCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1351esCO5tMRYPcn390B3zj", "CommonCard");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CommonCard = function() {
      function CommonCard() {
        this.totalCards = 0;
        this.cards = [];
        this.combat = [];
        this.latest = null;
      }
      CommonCard.prototype.getPosition = function() {
        if (0 == this.cards.length) return cc.Vec2.ZERO;
        var sx = 100 * Math.random() - 50;
        var sy = 100 * Math.random() - 50;
        return cc.v2(sx, sy + 50);
      };
      CommonCard.prototype.reset = function() {
        this.totalCards = 0;
        this.cards = [];
        this.latest = null;
        this.combat.length > 0 && (this.combat = []);
      };
      CommonCard.prototype.push = function(cards) {
        this.totalCards += cards.count();
        this.cards.push(cards);
        this.latest && this.overlapCard(this.latest);
        this.latest = cards;
      };
      CommonCard.prototype.isCombatOpen = function() {
        return this.combat.length > 0;
      };
      CommonCard.prototype.pushCombat = function(player, cards) {
        this.combat.push({
          player: player,
          cards: cards
        });
      };
      CommonCard.prototype.hasCombat = function() {
        if (this.combat.length < 2) return false;
        var peek = this.combat[this.combat.length - 1];
        if (15 == peek.cards.highest.rank) return false;
        return true;
      };
      CommonCard.prototype.getCombat = function() {
        return this.combat[0].cards;
      };
      CommonCard.prototype.getCombatLength = function() {
        return this.combat.length;
      };
      CommonCard.prototype.getCombatWinner = function() {
        return this.combat[this.combat.length - 1].player;
      };
      CommonCard.prototype.getCombatVictim = function() {
        return this.combat[this.combat.length - 2].player;
      };
      CommonCard.prototype.resetCombat = function() {
        this.combat = [];
      };
      CommonCard.prototype.peek = function() {
        return this.cards[this.cards.length - 1];
      };
      CommonCard.prototype.length = function() {
        return this.cards.length;
      };
      CommonCard.prototype.isEmpty = function() {
        return 0 == this.cards.length;
      };
      CommonCard.prototype.nextRound = function() {
        for (var i = this.cards.length - 1; i >= 0; --i) for (var j = this.cards[i].count() - 1; j >= 0; --j) {
          var card = this.cards[i].at(j);
          card.hide();
          card.node.setScale(.5);
        }
        this.latest && this.overlapCard(this.latest);
        this.combat.length > 0 && (this.combat = []);
        this.cards = [];
        this.latest = null;
      };
      CommonCard.prototype.overlapCard = function(cards) {
        for (var i = 0; i < cards.count(); i++) cards.at(i).overlap();
      };
      return CommonCard;
    }();
    exports.default = CommonCard;
    cc._RF.pop();
  }, {} ],
  Config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4c56iZ0yNPbYQ1DV9FQmk8", "Config");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Config = function() {
      function Config() {}
      Config.language = "vi";
      Config.defaultCoin = 1e5;
      Config.botCoin = 1e5;
      Config.bankrupt = 100;
      Config.bankrupt_bonus = 5e7;
      Config.minBet = 3e3;
      Config.maxBet = 1e5;
      Config.betValue = 3e3;
      Config.totalPlayer = 6;
      Config.userphoto = null;
      Config.battle = null;
      Config.intertital_ads = "3373596089413454_3712746745498385";
      Config.reward_video = "3373596089413454_3712745372165189";
      Config.gift_reward_video = "3373596089413454_3712745372165189";
      Config.bannerAdID = "3373596089413454_3932054720234252";
      Config.soundEnable = true;
      Config.dailyBonus = [ {
        coin: 5e4
      }, {
        ticket: 3
      }, {
        coin: 1e6
      }, {
        ticket: 3
      }, {
        coin: 5e6
      }, {
        coin: 1e7
      }, {
        coin: 2e7
      } ];
      Config.stepOfCountTime = 3e4;
      Config.slotMachineEnum = {
        2: 0,
        3: 1,
        4: 2,
        5: 3,
        6: 4,
        7: 5,
        8: 6
      };
      Config.vipBonusAd = 2;
      Config.vipBonusWin = 3;
      Config.timeBlinkActionUser = 2e3;
      Config.cacheLB = null;
      return Config;
    }();
    exports.default = Config;
    cc._RF.pop();
  }, {} ],
  ConfirmViewAd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99aede4KbhBR75yeXSWbPes", "ConfirmViewAd");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Media_1 = require("./Media");
    var Language_1 = require("./Language");
    var UI_1 = require("./UI");
    var Api_1 = require("./Api");
    var ConfirmViewAd = function(_super) {
      __extends(ConfirmViewAd, _super);
      function ConfirmViewAd() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.popup = null;
        _this.header = null;
        _this.content = null;
        return _this;
      }
      ConfirmViewAd.prototype.start = function() {
        this.showNoAd = this.showNoAd.bind(this);
        this.hide = this.hide.bind(this);
        cc.systemEvent.on(UI_1.UItype.confirmViewAd, this.showNoAd);
      };
      ConfirmViewAd.prototype.showNoAd = function() {
        this.popup.active = true;
        this.content.string = Language_1.default.getInstance().get(UI_1.default.contentViewAd);
      };
      ConfirmViewAd.prototype.hide = function() {
        Media_1.default.playAudio("click");
        this.popup.active = false;
      };
      ConfirmViewAd.prototype.viewAd = function() {
        this.hide();
        Media_1.default.playAudio("click");
        Api_1.default.rewardConfirmed();
      };
      __decorate([ property(cc.Node) ], ConfirmViewAd.prototype, "popup", void 0);
      __decorate([ property(cc.Label) ], ConfirmViewAd.prototype, "header", void 0);
      __decorate([ property(cc.Label) ], ConfirmViewAd.prototype, "content", void 0);
      ConfirmViewAd = __decorate([ ccclass ], ConfirmViewAd);
      return ConfirmViewAd;
    }(cc.Component);
    exports.default = ConfirmViewAd;
    cc._RF.pop();
  }, {
    "./Api": "Api",
    "./Language": "Language",
    "./Media": "Media",
    "./UI": "UI"
  } ],
  DailyBonusItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd2a0cL565MMb3PI2MSL01H", "DailyBonusItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DailyBonusItem = function(_super) {
      __extends(DailyBonusItem, _super);
      function DailyBonusItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.claimed = null;
        return _this;
      }
      DailyBonusItem.prototype.start = function() {};
      DailyBonusItem.prototype.setClaimable = function(claimable, isClaimed) {
        this.claimed.active = isClaimed;
        this.getComponent(cc.Button).interactable = claimable;
        this.getComponentInChildren(cc.Button).interactable = claimable;
        var color = isClaimed ? cc.Color.GRAY : cc.Color.WHITE;
        this.node.children[4].color = color;
        this.node.children[4].children.map(function(el) {
          el.color = color;
        });
      };
      __decorate([ property(cc.Label) ], DailyBonusItem.prototype, "value", void 0);
      __decorate([ property(cc.Node) ], DailyBonusItem.prototype, "claimed", void 0);
      DailyBonusItem = __decorate([ ccclass ], DailyBonusItem);
      return DailyBonusItem;
    }(cc.Component);
    exports.default = DailyBonusItem;
    cc._RF.pop();
  }, {} ],
  DailyBonus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f9e8XOO6BHzap8qYPJCMDb", "DailyBonus");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Popup_1 = require("../../Popup");
    var Config_1 = require("../../Config");
    var DailyBonusItem_1 = require("./DailyBonusItem");
    var Api_1 = require("../../Api");
    var AutoHide_1 = require("../../AutoHide");
    var util_1 = require("../../util");
    var EventKeys_1 = require("../../EventKeys");
    var Language_1 = require("../../Language");
    var Media_1 = require("../../Media");
    var UI_1 = require("../../UI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DailyBonus = function(_super) {
      __extends(DailyBonus, _super);
      function DailyBonus() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.popup = null;
        _this.toast = null;
        _this.days = [];
        _this.effect = null;
        _this.current = 0;
        return _this;
      }
      DailyBonus.prototype.show = function(day, claimed) {
        void 0 === claimed && (claimed = false);
        day = +day;
        claimed && day--;
        day || (day = 7);
        day > Config_1.default.dailyBonus.length && (day = 1);
        this.current = day;
        this.popup.open(this.node, 2);
        for (var i = 0; i < this.days.length; i++) {
          var d = i + 1;
          var claimable = d == day && !claimed;
          d < day ? this.days[i].setClaimable(false, true) : d == day ? this.days[i].setClaimable(claimable, claimed) : this.days[i].setClaimable(true, false);
        }
      };
      DailyBonus.prototype.onClaim = function(sender, day) {
        Media_1.default.playAudio("click");
        if (Api_1.default.dailyBonusClaimed || +day != Api_1.default.dailyBonusDay) return this.showMsgClaimed();
        var date = day ? parseInt(day) : this.current;
        this.popup.close(this.node, 2);
        this.onClaimCompl(sender, date, false);
        cc.systemEvent.emit("claim_daily_bonus", date, Config_1.default.dailyBonus[date - 1], false);
      };
      DailyBonus.prototype.showMsgClaimed = function() {
        var msg = Language_1.default.getInstance().get("backTomorrow");
        this.toast.openWithText(null, msg);
      };
      DailyBonus.prototype.onClaimExtra = function(sender, day) {
        var _this = this;
        Media_1.default.playAudio("click");
        if (Api_1.default.dailyBonusClaimed || +day != Api_1.default.dailyBonusDay) return this.showMsgClaimed();
        var date = day ? parseInt(day) : this.current;
        Api_1.default.logEvent(EventKeys_1.default.POPUP_DAILY_REWARD_AD);
        UI_1.default.contentViewAd = "dailyConfirm";
        Api_1.default.showRewardedVideo(function() {
          _this.popup.close(_this.node, 2);
          _this.onClaimCompl(sender, date, true);
          cc.systemEvent.emit("claim_daily_bonus", date, Config_1.default.dailyBonus[date - 1], true);
        }, function() {
          cc.systemEvent.emit("claim_daily_bonus_fail", date, Config_1.default.dailyBonus[date - 1], true);
          Api_1.default.logEvent(EventKeys_1.default.POPUP_DAILY_REWARD_AD_ERROR);
          _this.popup.close(_this.node, 2);
        });
      };
      DailyBonus.prototype.onClaimCompl = function(sender, day, double) {
        var _this = this;
        var gift = Config_1.default.dailyBonus[day - 1];
        var msg = "";
        if (gift.coin) {
          var coinBonus = double ? 2 * gift.coin : gift.coin;
          msg = Language_1.default.getInstance().get("addCoin").replace(/\$value/, util_1.default.numberFormat(coinBonus));
        } else {
          if (!gift.ticket) return;
          var ticket = gift.ticket * (double ? 2 : 1);
          msg = Language_1.default.getInstance().get("addSpin").replace(/\$value/, ticket.toString());
        }
        setTimeout(function() {
          _this.popup.open(null, 8, 200, {
            type: gift.coin ? "coin" : "slotmachine",
            text: msg
          });
        }, 300);
      };
      __decorate([ property(Popup_1.default) ], DailyBonus.prototype, "popup", void 0);
      __decorate([ property(AutoHide_1.default) ], DailyBonus.prototype, "toast", void 0);
      __decorate([ property(DailyBonusItem_1.default) ], DailyBonus.prototype, "days", void 0);
      __decorate([ property(cc.Node) ], DailyBonus.prototype, "effect", void 0);
      DailyBonus = __decorate([ ccclass ], DailyBonus);
      return DailyBonus;
    }(cc.Component);
    exports.default = DailyBonus;
    cc._RF.pop();
  }, {
    "../../Api": "Api",
    "../../AutoHide": "AutoHide",
    "../../Config": "Config",
    "../../EventKeys": "EventKeys",
    "../../Language": "Language",
    "../../Media": "Media",
    "../../Popup": "Popup",
    "../../UI": "UI",
    "../../util": "util",
    "./DailyBonusItem": "DailyBonusItem"
  } ],
  Deck: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cce96i6QBJMl7PTDBXefIeo", "Deck");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Card_1 = require("./Card");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Deck = function(_super) {
      __extends(Deck, _super);
      function Deck() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cards = Array();
        _this.offset = 0;
        return _this;
      }
      Deck.prototype.onLoad = function() {
        for (var i = 0; i < 52; i++) {
          var card = this.node.children[i].getComponent(Card_1.default);
          var cardName = card.node.name;
          card.rank = this.getRankFromName(cardName);
          card.suit = this.getSuitFromName(cardName);
          this.cards.push(card);
        }
      };
      Deck.prototype.shuffle = function() {
        var length = this.cards.length;
        var lastIndex = length - 1;
        var index = -1;
        while (++index < length) {
          var rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
          var value = this.cards[rand];
          this.cards[rand] = this.cards[index];
          this.cards[index] = value;
        }
        for (var i = this.cards.length - 1; i >= 0; --i) {
          var card = this.cards[i];
          card.reset();
        }
        this.offset = 0;
      };
      Deck.prototype.pick = function() {
        var card = this.cards[this.offset];
        ++this.offset;
        return card;
        var card;
        var rs;
      };
      Deck.prototype.hide = function() {
        for (var i = this.offset; i < this.cards.length; i++) this.cards[i].node.active = false;
      };
      Deck.prototype.getRankFromName = function(cardName) {
        if (3 == cardName.length) return 10;
        switch (cardName[0]) {
         case "J":
          return 11;

         case "Q":
          return 12;

         case "K":
          return 13;

         case "A":
          return 1;

         default:
          return parseInt(cardName[0]);
        }
      };
      Deck.prototype.getSuitFromName = function(cardName) {
        switch (cardName[cardName.length - 1]) {
         case "S":
          return 1;

         case "C":
          return 2;

         case "D":
          return 3;

         case "H":
          return 4;

         default:
          throw new Error(cardName);
        }
      };
      Deck = __decorate([ ccclass ], Deck);
      return Deck;
    }(cc.Component);
    exports.default = Deck;
    cc._RF.pop();
  }, {
    "./Card": "Card"
  } ],
  EventKeys: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fef6cR3M0xAfLpe1NdULNzR", "EventKeys");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventKeys = {};
    exports.default = EventKeys;
    cc._RF.pop();
  }, {} ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8251pV8NZGpa2LG0Z5yRed", "Game");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = this && this.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Player_1 = require("./Player");
    var Deck_1 = require("./Deck");
    var CommonCard_1 = require("./CommonCard");
    var Toast_1 = require("./Toast");
    var Api_1 = require("./Api");
    var Notice_1 = require("./Notice");
    var Config_1 = require("./Config");
    var util_1 = require("./util");
    var SpinWheel_1 = require("./SpinWheel");
    var Popup_1 = require("./Popup");
    var Modal_1 = require("./popop/Modal");
    var EventKeys_1 = require("./EventKeys");
    var Language_1 = require("./Language");
    var SlotMachine_1 = require("./SlotMachine");
    var footer_1 = require("./footer");
    var Media_1 = require("./Media");
    var UI_1 = require("./UI");
    var suiteAsset = {
      H: "co",
      D: "ro",
      C: "chuon",
      S: "b\xedch"
    };
    var ACTIONS_ALL = {
      stand: {
        name: "stand",
        clickable: false,
        handle: "onStandClicked",
        type: "normal"
      },
      hit: {
        name: "hit",
        clickable: false,
        handle: "onHitClicked",
        type: "blink"
      },
      double: {
        name: "double",
        clickable: false,
        handle: "onDoubleClicked",
        type: "normal"
      },
      insurr: {
        name: "insurr",
        clickable: false,
        handle: "onInsurrClicked",
        type: "normal"
      },
      split: {
        name: "split",
        clickable: false,
        handle: "onSplitClicked",
        type: "normal"
      }
    };
    var init_actions = [ ACTIONS_ALL.hit, ACTIONS_ALL.stand, ACTIONS_ALL.insurr, ACTIONS_ALL.double ];
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Profile = function() {
      function Profile() {
        this.avatar = null;
        this.username = "";
      }
      __decorate([ property(cc.SpriteFrame) ], Profile.prototype, "avatar", void 0);
      __decorate([ property(cc.String) ], Profile.prototype, "username", void 0);
      Profile = __decorate([ ccclass("Profile") ], Profile);
      return Profile;
    }();
    var Game = function(_super) {
      __extends(Game, _super);
      function Game() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.deck = null;
        _this.play = null;
        _this.seats = [];
        _this.fire = null;
        _this.fold = null;
        _this.sort = null;
        _this.resultEffects = [];
        _this.bigWin = null;
        _this.toast = null;
        _this.notice = null;
        _this.betText = null;
        _this.spin = null;
        _this.popup = null;
        _this.profileBots = [];
        _this.soundToggle = null;
        _this.audioFold = null;
        _this.audioShowCard = null;
        _this.audioGarbageCard = null;
        _this.audioFire = null;
        _this.audioLose = null;
        _this.audioWin = null;
        _this.audioSortCard = null;
        _this.audioQuitGame = null;
        _this.audioDealCard = null;
        _this.audioFireSingle = null;
        _this.modal = null;
        _this.actionButotns = [];
        _this.footer = null;
        _this.players = [];
        _this.commonCards = new CommonCard_1.default();
        _this.state = 0;
        _this.turn = 0;
        _this.leaveGame = false;
        _this.owner = null;
        _this.myself = null;
        _this.betValue = 1e3;
        _this.totalPlayer = 6;
        _this.startTime = 0;
        _this.playTime = 0;
        _this.isReady = false;
        _this.isSecondTimePlay = false;
        _this.addSeat = function(seat) {
          var profile = _this.getProfileBot();
          seat.setAvatar(profile.avatar);
          seat.setUsername(profile.username);
          var rate = .5 + .5 * Math.random() + 1;
          seat.setCoin(Math.floor(Config_1.default.betValue * rate));
          _this.players.push(seat);
        };
        _this.showAllPlayerCard = function() {
          _this.players.map(function(player) {
            player.showAllCard();
          });
        };
        _this.showResult = function() {
          _this.isSecondTimePlay = true;
          var dealer = _this.players[0];
          var dealerAddCoin = 0;
          _this.players.map(function(player, index) {
            if (!index) return;
            try {
              player.showHideActionUser();
            } catch (error) {}
            var playerCoin = _this.calCoinEndGame(player);
            var subPlayerCoin = player.subUser ? _this.calCoinEndGame(player.subUser) : 0;
            playerCoin ? player.changeCoin(playerCoin) : setTimeout(function() {
              player.showHideActionUser(true, "push");
            }, 1e3);
            if (player.isUser()) {
              if (player.isSplit && playerCoin) playerCoin > 0 ? _this.seats[0].winEffect.node.active = true : _this.seats[0].loseEffect.node.active = true; else if (playerCoin) {
                playerCoin > 0 ? player.winEffect.node.active = true : player.loseEffect.node.active = true;
                Media_1.default.playAudio(playerCoin > 0 ? "win" : "lose");
              }
              if (player.subUser) if (subPlayerCoin) {
                player.subUser.changeCoin(subPlayerCoin);
                player.setCoin(player.coinVal + subPlayerCoin);
              } else player.subUser.showHideActionUser(true, "push");
              (playerCoin > 0 || subPlayerCoin > 0) && _this.onWin();
              Api_1.default.updateCoin(_this.myself.coinVal);
            }
            dealerAddCoin -= playerCoin;
          });
          dealer.changeCoin(dealerAddCoin);
          _this.showAllPlayerCard();
          setTimeout(function() {
            _this.play.node.active = true;
          }, 3e3);
          _this.play.getComponentInChildren(cc.Label).string = Language_1.default.getInstance().get("again").toUpperCase();
          _this.state = Game_1.LATE;
          _this.applyButton();
        };
        _this.calCoinEndGame = function(player) {
          var dealer = _this.players[0];
          var playerCoin = 0;
          if (2 == player.bonusType) playerCoin -= Config_1.default.betValue / 2; else if (player.point > 21) playerCoin -= Config_1.default.betValue; else if (player.checkBlackJack()) playerCoin += 1.5 * Config_1.default.betValue; else if (player.point > dealer.point) playerCoin += Config_1.default.betValue; else {
            if (player.point === dealer.point) return 0;
            dealer.point > 21 ? playerCoin += Config_1.default.betValue : playerCoin -= Config_1.default.betValue;
          }
          /1/.test(player.bonusType.toString()) && (playerCoin *= 2);
          return playerCoin;
        };
        _this.showHetTien = function() {
          UI_1.default.contentViewAd = "hettienConfirm";
          Api_1.default.showRewardedVideo(function() {
            Api_1.default.logEvent(EventKeys_1.default.POPUP_ADREWARD_COIN_CLICK);
            var coin = Config_1.default.bankrupt_bonus;
            Api_1.default.isVIP() && (coin *= Config_1.default.vipBonusAd);
            _this.claimBankruptcyMoney(coin);
          }, function() {
            var coin = Api_1.default.randomBonus();
            Api_1.default.isVIP() && (coin *= Config_1.default.vipBonusAd);
            _this.claimBankruptcyMoney(coin);
            Api_1.default.logEvent(EventKeys_1.default.POPUP_ADREWARD_COIN_ERROR);
          });
        };
        _this.calculateShowActionUser = function() {
          var actions = [];
          var canDouble = _this.myself.point <= 10 && _this.myself.coinVal >= 2 * Config_1.default.betValue;
          var canInsurr = !_this.myself.isSplit && 1 === _this.players[0].cards[0].rank;
          var canSplit = 2 === _this.myself.cards.length && !_this.myself.isSplit && _this.myself.cards[0].rank === _this.myself.cards[1].rank;
          if (canSplit) actions = [ __assign(__assign({}, ACTIONS_ALL.split), {
            clickable: true
          }), __assign(__assign({}, ACTIONS_ALL.hit), {
            clickable: true
          }), __assign(__assign({}, ACTIONS_ALL.stand), {
            clickable: true
          }), !canInsurr && canDouble ? __assign(__assign({}, ACTIONS_ALL.double), {
            clickable: canDouble
          }) : __assign(__assign({}, ACTIONS_ALL.insurr), {
            clickable: canInsurr
          }) ]; else {
            actions = [].concat(init_actions);
            actions[0].clickable = true;
            actions[1].clickable = true;
            actions[2].clickable = canInsurr;
            actions[3].clickable = canDouble;
          }
          _this.applyButton(actions);
        };
        _this.toogleBtn = function(idBtn, isToogle) {
          _this.actionButotns[idBtn].interactable = isToogle;
          var btnColor = isToogle ? cc.Color.WHITE : cc.color(48, 46, 56, 255);
          var btnTitle = isToogle ? cc.Color.WHITE : cc.color(70, 70, 70, 255);
          _this.actionButotns[idBtn].getComponentInChildren(cc.Sprite).node.color = btnColor;
          _this.actionButotns[idBtn].getComponentInChildren(cc.Label).node.color = btnTitle;
        };
        _this.disableToggleActionUser = function() {
          init_actions.map(function(btn) {
            btn.clickable = false;
          });
          _this.actionButotns.map(function(btn, i) {
            _this.toogleBtn(i, false);
          });
        };
        return _this;
      }
      Game_1 = Game;
      Game.prototype.onLoad = function() {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        var As = cc.find("Canvas/cards/AS");
        this.disableToggleActionUser();
        cc.systemEvent.on("SlotMachineBonus", this.onSlotMachineBonus, this);
        var atlas = util_1.default.assetCard;
        var initCardsResouces = new Promise(function(resolve) {
          new Array(13).fill("").map(function(el, rank) {
            [ "S", "C", "D", "H" ].map(function(suite, idSuite) {
              if (!rank && !idSuite) return;
              var r = rank + 1;
              var newNode = cc.instantiate(As);
              switch (r) {
               case 1:
                r = "A";
                break;

               case 11:
                r = "J";
                break;

               case 12:
                r = "Q";
                break;

               case 13:
                r = "K";
              }
              var assetSuiteName = suiteAsset[suite];
              var rankAssetname = r;
              idSuite < 2 && (rankAssetname += "-1");
              newNode.name = r + suite;
              var suiteSprite = atlas.getSpriteFrame(assetSuiteName);
              10 == rank && (newNode.x -= 15);
              newNode.children[0].getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(rankAssetname);
              newNode.children[0].getComponentInChildren(cc.Sprite).spriteFrame = suiteSprite;
              newNode.children[1].getComponent(cc.Sprite).spriteFrame = suiteSprite;
              newNode.children[2].getComponent(cc.Widget).target = newNode;
              newNode.active = false;
              As.parent.addChild(newNode);
              12 === rank && "H" === suite && setTimeout(function() {
                resolve(1);
              }, 500);
            });
          });
        });
        Promise.all([ initCardsResouces ]).then(function(rs) {
          _this.isReady = true;
        }).catch(function(err) {
          console.log("====================================");
          console.log(err);
          console.log("====================================");
        });
        this.onPlay();
      };
      Game.prototype.start = function() {
        var _this = this;
        this.toogleVip();
        try {
          util_1.default.profileBot.getSpriteFrames().map(function(playerProfile, i) {
            _this.profileBots[i] = {
              username: playerProfile.name,
              avatar: playerProfile
            };
          });
        } catch (error) {}
      };
      Game.prototype.toogleVip = function() {
        this.footer.vip.node.active = Api_1.default.isVIP();
      };
      Game.prototype.onPlay = function() {
        Media_1.default.playAudio("click");
        if (!Api_1.default.coin) return this.showBankruptPopup();
        this.popup.open(null, 4, this.isSecondTimePlay ? 170 : 255);
        this.resetPlayer();
      };
      Game.prototype.calculateFriendSeat = function() {
        var friendSeat = 1;
        if (Config_1.default.battle) {
          var rnd = Math.random();
          friendSeat = rnd < .25 ? 1 : rnd < .5 ? 2 : rnd < .75 ? 4 : 5;
        }
        return friendSeat;
      };
      Game.prototype.initGame = function() {
        var _this = this;
        Media_1.default.playAudio("click");
        if (!this.isReady) return;
        this.popup.close(null, 4);
        this.betText.string = Language_1.default.getInstance().get("betAmount") + ": " + util_1.default.numberFormat(Config_1.default.betValue);
        if (this.startTime) {
          this.startTime = 0;
          return this.deal();
        }
        this.state = Game_1.WAIT;
        this.totalPlayer = Config_1.default.totalPlayer;
        this.deck.node.active = false;
        this.play.node.active = false;
        this.notice.hide();
        this.spin.onSpinHide = this.onSpinHide.bind(this);
        this.spin.onSpinCompleted = this.onSpinCompleted.bind(this);
        Config_1.default.battle && (this.totalPlayer = 6);
        var arr = /0|3/;
        var friendSeat = this.calculateFriendSeat();
        4 === this.totalPlayer ? arr = /0|1|3|5/ : 6 === this.totalPlayer && (arr = /0|1|2|3|4|5/);
        this.seats.map(function(seat, i) {
          seat.seat = _this.players.length;
          arr.test(i.toString()) ? _this.addSeat(seat, friendSeat) : seat.hide();
          seat.isBot() && seat.setCoin(i ? Config_1.default.botCoin : 1e10);
        });
        if (Config_1.default.battle) {
          var friend = this.seats[friendSeat];
          friend.setRemoteAvatar(Config_1.default.battle.photo);
          friend.setUsername(Config_1.default.battle.username);
          friend.setCoin(Config_1.default.battle.coin);
        }
        this.myself = this.players[this.totalPlayer / 2];
        this.myself.setUsername(Api_1.default.username);
        this.myself.setCoin(Api_1.default.coin);
        this.myself.setTimeCallback(this.onPlayerTimeout, this, this.node);
        this.node.runAction(cc.sequence(cc.delayTime(.7), cc.callFunc(this.deal, this)));
        this.toggleSound();
        Api_1.default.preloadInterstitialAd();
      };
      Game.prototype.toggleSound = function() {
        Config_1.default.soundEnable ? this.soundToggle.uncheck() : this.soundToggle.check();
      };
      Game.prototype.onDestroy = function() {};
      Game.prototype.onTouchStart = function(evt) {
        if (this.state != Game_1.PLAY) return;
        var selected = this.myself.touch(evt.getLocation());
        if (!selected) return;
        var prepareCards = this.myself.prepareCards;
        if (prepareCards.contains(selected)) {
          this.myself.unselectCard(selected);
          this.onCardSelected(selected, false);
        } else {
          this.myself.selectCard(selected);
          this.onCardSelected(selected, true);
        }
        if (this.turn != this.myself.seat) return;
      };
      Game.prototype.onPlayerTimeout = function() {
        this.onStandClicked();
      };
      Game.prototype.onQuitClicked = function() {
        Media_1.default.playAudio("click");
        Api_1.default.logEvent(EventKeys_1.default.QUIT_GAME);
        if (this.state == Game_1.PLAY || this.state == Game_1.DEAL) this.popup.open(this.node, 1); else {
          util_1.default.playAudio(this.audioQuitGame);
          cc.director.loadScene("home");
          Api_1.default.showInterstitialAd();
        }
      };
      Game.prototype.onBackClicked = function() {
        if (this.state == Game_1.PLAY || this.state == Game_1.DEAL) {
          var coin = Math.max(0, Api_1.default.coin - 10 * Config_1.default.betValue);
          Api_1.default.updateCoin(coin);
        }
        util_1.default.playAudio(this.audioQuitGame);
        cc.director.loadScene("home");
        Api_1.default.showInterstitialAd();
      };
      Game.prototype.showHandCards = function() {
        util_1.default.playAudio(this.audioShowCard);
        this.state = Game_1.PLAY;
        this.players.map(function(player, index) {
          player.isBot() ? player.showCardCounter() : player.showAllCard();
        });
        var firstPlayer = this.findPlayerHasFirstCard();
        this.setCurrentTurn(firstPlayer, true);
      };
      Game.prototype.findPlayerHasFirstCard = function() {
        var userInRound = this.players.find(function(player) {
          return player.isInRound() && !player.isCai() && player;
        });
        return userInRound;
      };
      Game.prototype.setColor = function(btn, color) {
        btn.target.color = color;
        btn.target.children.forEach(function(child) {
          child.color = color;
        });
      };
      Game.prototype.logUserCoin = function() {
        var _this = this;
        setInterval(function() {
          console.log("====================================");
          console.log("user coin", Api_1.default.coin, _this.myself.coinVal);
          console.log("====================================");
        }, 3e3);
      };
      Game.prototype.showBankruptPopup = function() {
        this.popup.open(null, 3);
        Api_1.default.showInterstitialAd();
        Api_1.default.logEvent(EventKeys_1.default.POPUP_ADREWARD_COIN_OPEN);
      };
      Game.prototype.deal = function() {
        var _this = this;
        this.state = Game_1.DEAL;
        this.disableToggleActionUser();
        if (this.startTime) return this.popup.open(null, 4);
        this.startTime = Date.now();
        Api_1.default.preloadRewardedVideo();
        if (Api_1.default.coin < Config_1.default.betValue) return this.showBankruptPopup();
        this.play.node.active = false;
        this.deck.node.active = true;
        this.commonCards.reset();
        for (var i = 1; i < this.players.length; i++) {
          var bot = this.players[i];
          if (bot.isUser() || bot.isSubUser) continue;
          if (bot.getCoin() < Config_1.default.betValue) {
            var profile = this.getProfileBot();
            var rate = .5 + .5 * Math.random() + 1;
            bot.setCoin(Math.floor(this.myself.getCoin() * rate));
            bot.setAvatar(profile.avatar);
            bot.setUsername(profile.username);
          }
        }
        this.seats[6].hide();
        this.resetPlayer();
        var action = [];
        for (var i = 0; i < 2; i++) {
          var _loop_1 = function(j) {
            var player = this_1.players[j];
            var card = this_1.deck.pick();
            action = action.concat([ cc.callFunc(function() {
              player.push(card, 0);
            }), cc.delayTime(Game_1.DEAL_SPEED) ]);
          };
          var this_1 = this;
          for (var j = 0; j < this.getTotalPlayer(); j++) _loop_1(j);
        }
        action = action.concat([ cc.callFunc(this.showHandCards, this), cc.delayTime(.4), cc.callFunc(function() {
          return util_1.default.playAudio(_this.audioDealCard);
        }), cc.callFunc(function() {
          Media_1.default.playAudio("deal_complete");
        }) ]);
        this.node.runAction(cc.sequence(action));
        Api_1.default.preloadInterstitialAd();
      };
      Game.prototype.resetPlayer = function() {
        var _this = this;
        this.deck.shuffle();
        this.seats[6].resetWinLoseEffect();
        this.seats[6].hide();
        this.players.map(function(p) {
          _this.resetSeat(p);
        });
      };
      Game.prototype.resetSeat = function(player) {
        player.resetWinLoseEffect();
        player.reset();
        player.showHideActionUser();
        player.updatePoint("0");
        player.setBonusType(0);
        player.setBetLabel(Config_1.default.betValue);
      };
      Game.prototype.onWin = function() {
        var _this = this;
        Api_1.default.logEvent(EventKeys_1.default.WIN);
        Api_1.default.logEvent(EventKeys_1.default.POPUP_ADREWARD_SPIN_OPEN);
        util_1.default.playAudio(this.audioWin);
        var rnd = Math.random();
        setTimeout(function() {
          if (rnd <= .6 && Api_1.default.isInterstitialAdLoaded()) {
            Api_1.default.showInterstitialAd();
            _this.delayReset(3);
          } else _this.toogleSlotMachine();
        }, 1500);
      };
      Game.prototype.onSpinHide = function() {
        this.delayReset(3);
      };
      Game.prototype.onSpinCompleted = function(result, won) {
        var bonus = this.spin.compute(result.id, won);
        if (bonus > 0) {
          this.myself.addCoin(bonus);
          Api_1.default.updateCoin(this.myself.coinVal);
        }
      };
      Game.prototype.delayReset = function(dt) {
        this.node.runAction(cc.sequence(cc.delayTime(dt), cc.callFunc(this.reset, this)));
      };
      Game.prototype.reset = function() {
        for (var i = this.resultEffects.length - 1; i >= 0; --i) this.resultEffects[i].active = false;
        for (var i = this.getTotalPlayer() - 1; i >= 0; --i) this.players[i].reset();
        this.bigWin.active && (this.bigWin.active = false);
      };
      Game.prototype.onCardSelected = function(card, selected) {};
      Game.prototype.nextTurn = function() {
        var next = this.getNextInRoundPlayer();
        this.setCurrentTurn(next, false);
      };
      Game.prototype.nextRound = function(lead) {
        this.commonCards.nextRound();
        for (var i = this.getTotalPlayer() - 1; i >= 0; --i) this.players[i].setInRound(true);
        this.setCurrentTurn(lead, true);
      };
      Game.prototype.setCurrentTurn = function(player, lead) {
        var _a;
        return __awaiter(this, void 0, void 0, function() {
          var canHit;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              this.players.map(function(p) {
                return p.setActive(false);
              });
              if (!player) return [ 2, setTimeout(this.showResult, 2e3) ];
              this.turn = player.seat;
              player.setActive(true);
              if (player.isUser()) return [ 2, Game_1.sleep(Game_1.WAIT_RE_SHOW_USER_ACTION).then(this.calculateShowActionUser) ];
              this.disableToggleActionUser();
              canHit = player.point > this.players[0].point;
              player.point < 18 && (canHit = true);
              canHit || (canHit = void 0 != this.players.find(function(p) {
                return player.point > p.point;
              }));
              player.point >= 18 && (canHit = false);
              5 === (null === (_a = player.cards) || void 0 === _a ? void 0 : _a.length) && (canHit = false);
              return [ 4, Game_1.sleep(Game_1.WAIT_BOT) ];

             case 1:
              _b.sent();
              player.setInRound(false);
              if (canHit) {
                player.blinkShowHideActionUser("hit");
                this.takeCard(player);
              } else {
                player.showHideActionUser(true, "stand");
                this.nextTurn();
              }
              return [ 2 ];
            }
          });
        });
      };
      Game.prototype.getInRoundPlayers = function() {
        var players = [];
        for (var i = this.getTotalPlayer() - 1; i >= 0; --i) this.players[i].isInRound() && players.push(this.players[i]);
        return players;
      };
      Game.prototype.getNextInRoundPlayer = function() {
        var _this = this;
        var nextTurn = this.players.find(function(player) {
          var _a;
          return player.seat === _this.turn && (null === (_a = null === player || void 0 === player ? void 0 : player.subUser) || void 0 === _a ? void 0 : _a.inRound) || player.seat > _this.turn && player.isInRound();
        });
        if (!nextTurn) {
          if (this.players[0].inRound) return this.players[0];
          if (2 === this.players[0].cards.length && 21 == this.players[0].point) {
            this.players[0].showHideActionUser(true, "black jack");
            return;
          }
        }
        return nextTurn;
      };
      Game.prototype.takeCard = function(player, needNext) {
        void 0 === needNext && (needNext = true);
        return __awaiter(this, void 0, void 0, function() {
          var card, _player, typeOfStand;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              card = this.deck.pick();
              if (!(null === card || void 0 === card ? void 0 : card.node)) return [ 2, this.state = Game_1.LATE ];
              player.push(card, 0);
              if (!needNext) return [ 2 ];
              return [ 4, Game_1.sleep(0) ];

             case 1:
              _a.sent();
              player.isBot() || player.cards.map(function(el) {
                return el.show();
              });
              player.setActive(false);
              _player = player;
              !player.inRound && player.subUser && (_player = player.subUser);
              if (_player.point >= 21 || 5 === _player.cards.length) {
                typeOfStand = "stand";
                _player.point > 21 ? typeOfStand = "bust" : player.bonusType && (typeOfStand = "");
                player.showHideActionUser(true, typeOfStand);
                _player.setInRound(false);
                _player.setActive(false);
                return [ 2, this.nextTurn() ];
              }
              if (player.bonusType) {
                player.setInRound(false);
                this.nextTurn();
              } else this.setCurrentTurn(player, false);
              return [ 2 ];
            }
          });
        });
      };
      Game.prototype.getTotalPlayer = function() {
        return this.players.length;
      };
      Game.prototype.getProfileBot = function() {
        for (var i = 0; i < 10; i++) {
          var rnd = Math.floor(Math.random() * this.profileBots.length);
          if (!this.isUsage(this.profileBots[rnd])) return this.profileBots[rnd];
        }
        return this.profileBots[0];
      };
      Game.prototype.isUsage = function(user) {
        for (var i = 0; i < this.players.length; i++) if (this.players[i].username.string == user.username) return true;
        return false;
      };
      Game.prototype.onSoundToggle = function(sender, isOn) {
        Media_1.default.toggleSound();
      };
      Game.prototype.claimBankruptcyMoney = function(bonus) {
        var msg = cc.js.formatStr(Language_1.default.getInstance().get("MONEY1"), util_1.default.numberFormat(bonus));
        this.toast.show(msg);
        Api_1.default.coinIncrement(bonus);
        this.myself.setCoin(Api_1.default.coin);
        this.popup.close(null, 3);
      };
      Game.prototype.inviteFirend = function() {
        var _this = this;
        Api_1.default.logEvent(EventKeys_1.default.INVITE_FRIEND);
        Api_1.default.invite(function() {
          _this.claimBankruptcyMoney(Config_1.default.bankrupt_bonus);
        }, function() {
          _this.popup.close(null, 3);
          _this.toast.show("M\u1eddi b\u1ea1n ch\u01a1i kh\xf4ng th\xe0nh c\xf4ng");
        });
      };
      Game.prototype.adReward = function() {
        this.showHetTien();
      };
      Game.prototype.applyButton = function(btns) {
        var _this = this;
        void 0 === btns && (btns = init_actions);
        btns.map(function(btn, index) {
          var _btn = _this.actionButotns[index];
          _btn.getComponentInChildren(cc.Label).string = btn.name.toUpperCase();
          _btn.clickEvents[0].handler = btn.handle;
          _this.toogleBtn(index, btn.clickable);
        });
      };
      Game.prototype.onStandClicked = function(isPressed) {
        void 0 === isPressed && (isPressed = true);
        Media_1.default.playAudio("click");
        var player = this.myself;
        player.setActive(false);
        isPressed && player.showHideActionUser(true, "stand");
        !player.inRound && player.subUser && (player = player.subUser);
        this.disableToggleActionUser();
        player.setInRound(false);
        this.nextTurn();
      };
      Game.prototype.onHitClicked = function(isPressed) {
        void 0 === isPressed && (isPressed = true);
        Media_1.default.playAudio("click");
        var player = this.myself;
        this.takeCard(player);
        player.setActive(true);
        this.disableToggleActionUser();
        isPressed && this.myself.blinkShowHideActionUser("hit");
      };
      Game.prototype.onDoubleClicked = function() {
        Media_1.default.playAudio("click");
        this.myself.showHideActionUser(true, "double");
        this.myself.setBonusType(1);
        this.onHitClicked(false);
        this.disableToggleActionUser();
      };
      Game.prototype.onInsurrClicked = function() {
        Media_1.default.playAudio("click");
        this.myself.setBonusType(2);
        this.onStandClicked();
        this.myself.showHideActionUser(true, "insurr");
        this.disableToggleActionUser();
      };
      Game.prototype.onSplitClicked = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Media_1.default.playAudio("click");
              this.disableToggleActionUser();
              this.myself.split(this.seats[6]);
              this.seats[6].show();
              return [ 4, Game_1.sleep(Game_1.DEAL_SPEED) ];

             case 1:
              _a.sent();
              this.takeCard(this.myself, false);
              return [ 4, Game_1.sleep(500) ];

             case 2:
              _a.sent();
              this.takeCard(this.myself.subUser, false);
              return [ 4, Game_1.sleep(1e3) ];

             case 3:
              _a.sent();
              this.nextTurn();
              return [ 2 ];
            }
          });
        });
      };
      Game.prototype.toogleSlotMachine = function() {
        this.popup.getComponentInChildren(SlotMachine_1.default).showHideSpin(true);
      };
      Game.prototype.onSlotMachineBonus = function(bonus) {
        var bonusCoin = bonus * Config_1.default.betValue;
        try {
          this.myself.changeCoin(bonusCoin);
          Api_1.default.updateCoin(this.myself.coinVal);
        } catch (error) {}
      };
      var Game_1;
      Game.sleep = function(wait) {
        return __awaiter(void 0, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              setTimeout(function() {
                resolve(1);
              }, wait);
            }) ];
          });
        });
      };
      Game.WAIT = 0;
      Game.DEAL = 1;
      Game.PLAY = 2;
      Game.LATE = 3;
      Game.DEAL_SPEED = 1.2;
      Game.CARD_SPACE = 45;
      Game.WAIT_BOT = 2e3;
      Game.WAIT_RE_SHOW_USER_ACTION = 1e3;
      __decorate([ property(Deck_1.default) ], Game.prototype, "deck", void 0);
      __decorate([ property(cc.Button) ], Game.prototype, "play", void 0);
      __decorate([ property(Player_1.default) ], Game.prototype, "seats", void 0);
      __decorate([ property(cc.Button) ], Game.prototype, "fire", void 0);
      __decorate([ property(cc.Button) ], Game.prototype, "fold", void 0);
      __decorate([ property(cc.Button) ], Game.prototype, "sort", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "resultEffects", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "bigWin", void 0);
      __decorate([ property(Toast_1.default) ], Game.prototype, "toast", void 0);
      __decorate([ property(Notice_1.default) ], Game.prototype, "notice", void 0);
      __decorate([ property(cc.Label) ], Game.prototype, "betText", void 0);
      __decorate([ property(SpinWheel_1.default) ], Game.prototype, "spin", void 0);
      __decorate([ property(Popup_1.default) ], Game.prototype, "popup", void 0);
      __decorate([ property(Profile) ], Game.prototype, "profileBots", void 0);
      __decorate([ property(cc.Toggle) ], Game.prototype, "soundToggle", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Game.prototype, "audioFold", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Game.prototype, "audioShowCard", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Game.prototype, "audioGarbageCard", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Game.prototype, "audioFire", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Game.prototype, "audioLose", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Game.prototype, "audioWin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Game.prototype, "audioSortCard", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Game.prototype, "audioQuitGame", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Game.prototype, "audioDealCard", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Game.prototype, "audioFireSingle", void 0);
      __decorate([ property(Modal_1.default) ], Game.prototype, "modal", void 0);
      __decorate([ property(cc.Button) ], Game.prototype, "actionButotns", void 0);
      __decorate([ property(footer_1.default) ], Game.prototype, "footer", void 0);
      Game = Game_1 = __decorate([ ccclass ], Game);
      return Game;
    }(cc.Component);
    exports.default = Game;
    cc._RF.pop();
  }, {
    "./Api": "Api",
    "./CommonCard": "CommonCard",
    "./Config": "Config",
    "./Deck": "Deck",
    "./EventKeys": "EventKeys",
    "./Language": "Language",
    "./Media": "Media",
    "./Notice": "Notice",
    "./Player": "Player",
    "./Popup": "Popup",
    "./SlotMachine": "SlotMachine",
    "./SpinWheel": "SpinWheel",
    "./Toast": "Toast",
    "./UI": "UI",
    "./footer": "footer",
    "./popop/Modal": "Modal",
    "./util": "util"
  } ],
  HandCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f5f4vN8GVIHYlDzS8EcLN6", "HandCard");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Card_1 = require("./Card");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HandCard = function(_super) {
      __extends(HandCard, _super);
      function HandCard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cards = null;
        return _this;
      }
      HandCard.prototype.start = function() {};
      __decorate([ property(Card_1.default) ], HandCard.prototype, "cards", void 0);
      HandCard = __decorate([ ccclass ], HandCard);
      return HandCard;
    }(cc.Component);
    exports.default = HandCard;
    cc._RF.pop();
  }, {
    "./Card": "Card"
  } ],
  Helper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1879dJgJEVIpqZTqzYVoVpF", "Helper");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Helper = function() {
      function Helper() {}
      Helper.isHouse = function(cards, amount) {
        void 0 === amount && (amount = 0);
        if (0 != amount && cards.length != amount) return false;
        if (0 == amount && (cards.length < 2 || cards.length > 4)) return false;
        var cardMin = Helper.findMinCard(cards);
        var cardMax = Helper.findMaxCard(cards);
        return cardMin.rank == cardMax.rank;
      };
      Helper.isStraight = function(cards, amount) {
        void 0 === amount && (amount = 0);
        if (0 != amount && cards.length != amount) return false;
        if (0 == amount && cards.length < 3) return false;
        var cardMin = Helper.findMinCard(cards);
        for (var i = cards.length - 1; i > 0; --i) {
          if (cardMin.rank + i > 14) return false;
          var card = Helper.findCardByRank(cards, cardMin.rank + i);
          if (!card) return false;
        }
        return true;
      };
      Helper.isMultiPair = function(cards, amount) {
        void 0 === amount && (amount = 0);
        if (cards.length < 6 || cards.length % 2 == 1) return false;
        if (0 != amount && cards.length != 2 * amount) return false;
        for (var i = cards.length - 1; i >= 0; --i) {
          if (15 == cards[i].rank) return false;
          var matched = Helper.findCardByRank(cards, cards[i].rank, cards[i]);
          if (!matched) return false;
        }
        return true;
      };
      Helper.isBigWin = function(cards) {
        var reduce = cards.reduce(function(accumulator, currentValue) {
          accumulator[currentValue.rank] || (accumulator[currentValue.rank] = []);
          accumulator[currentValue.rank].push(currentValue);
          return accumulator;
        }, {});
        if (!!reduce[15] && 4 == reduce[15].length) return 1;
        if (Helper.isDragon(reduce)) return 2;
        if (6 == Helper.pairCount(reduce)) return 3;
        return 0;
      };
      Helper.isDragon = function(reduce) {
        for (var i = 3; i <= 14; i++) if (!reduce[i]) return false;
        return true;
      };
      Helper.pairCount = function(reduce) {
        var count = 0;
        for (var v in reduce) reduce[v].length >= 2 && count++;
        return count;
      };
      Helper.sort = function(cards) {
        cards.sort(function(a, b) {
          return a.gt(b) ? 1 : -1;
        });
      };
      Helper.findCard = function(cards, rank, suit) {
        for (var i = cards.length - 1; i >= 0; --i) {
          var card = cards[i];
          if (card.rank == rank && card.suit == suit) return card;
        }
        return null;
      };
      Helper.findMaxCard = function(cards, filter) {
        void 0 === filter && (filter = null);
        var card = null;
        for (var i = cards.length - 1; i >= 0; --i) {
          var c = cards[i];
          (null == filter || c.lt(filter)) && (null == card ? card = c : c.gt(card) && (card = c));
        }
        return card;
      };
      Helper.findMinCard = function(cards, filter) {
        void 0 === filter && (filter = null);
        var card = null;
        for (var i = cards.length - 1; i >= 0; --i) {
          var c = cards[i];
          (null == filter || c.gt(filter)) && (null == card ? card = c : c.lt(card) && (card = c));
        }
        return card;
      };
      Helper.findAllCardByRange = function(cards, max, min) {
        var setCards = [];
        for (var i = cards.length - 1; i >= 0; --i) cards[i].rank > min && cards[i].rank <= max && (Helper.findCardByRank(setCards, cards[i].rank) || setCards.push(cards[i]));
        return setCards;
      };
      Helper.findAllCardByRank = function(cards, rank, limit) {
        var setCards = [];
        for (var i = cards.length - 1; i >= 0; --i) if (cards[i].rank == rank) {
          setCards.push(cards[i]);
          if (setCards.length == limit) return setCards;
        }
        return setCards;
      };
      Helper.findCardByRank = function(cards, rank, filter) {
        void 0 === filter && (filter = null);
        for (var i = cards.length - 1; i >= 0; --i) if (cards[i].rank == rank && cards[i] != filter) return cards[i];
        return null;
      };
      Helper.findIndex = function(arr, target) {
        for (var i = arr.length - 1; i >= 0; --i) if (target == arr[i]) return i;
        return -1;
      };
      Helper.removeBy = function(arr, target) {
        var idx = Helper.findIndex(arr, target);
        Helper.removeAt(arr, idx);
      };
      Helper.removeAt = function(arr, idx) {
        arr.splice(idx, 1);
      };
      Helper.highlight = function(cards, handCards) {
        return [];
      };
      Helper.findStraightCard = function(cards, filter) {
        for (var i = cards.length - 1; i >= 0; --i) {
          var cardStarted = cards[i];
          if (cardStarted.rank < 15 && cardStarted.gt(filter.highest)) {
            var straight = Helper.findAllCardByRange(cards, cardStarted.rank, cardStarted.rank - filter.count());
            if (straight.length == filter.count()) return straight;
          }
        }
        return null;
      };
      Helper.findHouseCard = function(cards, filter, limit) {
        for (var i = cards.length - 1; i >= 0; --i) {
          var cardStarted = cards[i];
          if (cardStarted.gt(filter)) {
            var straight = Helper.findAllCardByRank(cards, cardStarted.rank, limit);
            if (straight.length == limit) return straight;
          }
        }
        return null;
      };
      Helper.findMultiPairCard = function(cards, filter, limit) {
        return null;
      };
      Helper.calculate = function(cards) {
        var pigs = Helper.findAllCardByRank(cards, 15, 4);
        var spotWin = Helper.calculateSpotWin(pigs);
        return cards.length + spotWin;
      };
      Helper.calculateSpotWin = function(pigs) {
        var total = 0;
        for (var i = pigs.length - 1; i >= 0; --i) total += pigs[i].suit + 2;
        return total;
      };
      Helper.renderDot = function(value) {
        void 0 === value && (value = 0);
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
      return Helper;
    }();
    exports.default = Helper;
    cc._RF.pop();
  }, {} ],
  Home: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2c5ff9R/FJPip0TZkafs6WJ", "Home");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Api_1 = require("./Api");
    var Config_1 = require("./Config");
    var Leaderboard_1 = require("./Leaderboard");
    var util_1 = require("./util");
    var Popup_1 = require("./Popup");
    var DailyBonus_1 = require("./popop/bonus/DailyBonus");
    var AutoHide_1 = require("./AutoHide");
    var Modal_1 = require("./popop/Modal");
    var EventKeys_1 = require("./EventKeys");
    var Language_1 = require("./Language");
    var footer_1 = require("./footer");
    var Media_1 = require("./Media");
    var UI_1 = require("./UI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Home = function(_super) {
      __extends(Home, _super);
      function Home() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.avatar = null;
        _this.playerName = null;
        _this.coin = null;
        _this.leaderboard = null;
        _this.music = null;
        _this.dailyBonus = null;
        _this.popup = null;
        _this.toast = null;
        _this.modal = null;
        _this.footer = null;
        _this.playTime = 0;
        _this.countTime = 0;
        _this.itvCountTime = null;
        _this.preloadSceneGame = function() {
          cc.director.preloadScene("game", function(completedCount, totalCount, item) {}, function(error) {
            console.log("====================================");
            console.log("loaded game");
            console.log("====================================");
          });
        };
        _this.onChallenge = function(playerId, photo, username, coin) {
          return __awaiter(_this, void 0, void 0, function() {
            var error_1, minCoin;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                Media_1.default.playAudio("click");
                if (Api_1.default.coin <= Config_1.default.bankrupt) {
                  Api_1.default.preloadRewardedVideo();
                  this.popup.open(this.node, 4);
                  Api_1.default.showInterstitialAd();
                  return [ 2 ];
                }
                _a.label = 1;

               case 1:
                _a.trys.push([ 1, 3, , 4 ]);
                return [ 4, Api_1.default.challenge(playerId) ];

               case 2:
                _a.sent();
                return [ 3, 4 ];

               case 3:
                error_1 = _a.sent();
                console.log(error_1);
                return [ 2 ];

               case 4:
                Math.random() < .7 && Api_1.default.showInterstitialAd();
                cc.audioEngine.stopMusic();
                Config_1.default.battle = {
                  photo: photo,
                  username: username,
                  coin: coin
                };
                minCoin = Math.min(Math.max(coin, 1e5), Api_1.default.coin);
                cc.director.loadScene("game");
                Api_1.default.logEvent(EventKeys_1.default.PLAY_WITH_FRIEND);
                return [ 2 ];
              }
            });
          });
        };
        return _this;
      }
      Home.prototype.initCountTime = function() {
        var _this = this;
        this.itvCountTime = setInterval(function() {
          _this.countTime += Config_1.default.stepOfCountTime / 1e3;
          util_1.default.logTimeInGame(_this.countTime);
        }, Config_1.default.stepOfCountTime);
      };
      Home.prototype.clearLogTime = function() {
        this.itvCountTime && clearInterval(this.itvCountTime);
        this.itvCountTime = null;
        this.countTime = 0;
      };
      Home.prototype.start = function() {
        var _this = this;
        this.onDailyBonusClick = this.onDailyBonusClick.bind(this);
        this.toogleVip = this.toogleVip.bind(this);
        Config_1.default.betValue = 3e3;
        Media_1.default.init();
        var loadingBg = document.getElementById("htmlLoadingBackground");
        loadingBg && (loadingBg.style.display = "none");
        Config_1.default.totalPlayer = 6;
        util_1.default.logTimeInGame(0);
        this.initCountTime();
        setTimeout(this.toogleVip, 600);
        cc.systemEvent.on("reloadVip", this.toogleVip, this);
        Api_1.default.preloadRewardedVideo(function() {});
        Api_1.default.initAsync(function(bonus, day) {
          Language_1.default.getInstance().load(Api_1.default.locale);
          cc.systemEvent.emit("LANG_CHAN");
          _this.coin.string = util_1.default.numberFormat(Api_1.default.coin);
          _this.playerName.string = Api_1.default.username;
          cc.assetManager.loadRemote(Api_1.default.photo, function(err, tex) {
            if (err) return;
            _this.avatar.spriteFrame = new cc.SpriteFrame(tex);
            Config_1.default.userphoto = tex;
          });
          util_1.default.updateProfile();
          bonus && Api_1.default.canShowInterAd && Api_1.default.preloadRewardedVideo(function() {
            Api_1.default.logEvent(EventKeys_1.default.POPUP_DAILY_REWARD_SHOW);
            _this.dailyBonus.show(day, Api_1.default.dailyBonusClaimed);
          });
        }, this.leaderboard);
        cc.systemEvent.on("claim_daily_bonus", this.onClaimDailyBonus, this);
        cc.systemEvent.on("claim_daily_bonus_fail", this.onClaimDailyBonusFail, this);
        cc.systemEvent.on(UI_1.UItype.dailybonus, this.onDailyBonusClick);
        cc.systemEvent.on("lb_battle", this.onChallenge, this);
        cc.systemEvent.on("lb_share", this.onShare, this);
        cc.audioEngine.setMusicVolume(.3);
        Config_1.default.soundEnable;
        setTimeout(function() {
          _this.preloadSceneGame();
          util_1.default.preloadAssetCard();
          util_1.default.preloadBotAsset();
        }, 1);
        Api_1.default.preloadInterstitialAd();
      };
      Home.prototype.onShare = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Api_1.default.shareAsync() ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      Home.prototype.onClaimDailyBonus = function(day, bonus, extra) {
        if (bonus.coin) {
          Api_1.default.coinIncrement(bonus.coin * (extra ? 2 : 1));
          this.coin.string = util_1.default.numberFormat(Api_1.default.coin);
        }
        bonus.ticket && (Api_1.default.ticket += bonus.ticket * (extra ? 2 : 1));
        Api_1.default.claimDailyBonus(day);
      };
      Home.prototype.onClaimDailyBonusFail = function(day, bonus, extra) {
        this.modal.show(Language_1.default.getInstance().get("NOVIDEO"));
        this.onClaimDailyBonus(day, bonus, false);
      };
      Home.prototype.openPlayPopupClick = function() {
        Media_1.default.playAudio("click");
        this.popup.open(null, 7);
        cc.systemEvent.emit("hideModalTut");
      };
      Home.prototype.onPlayClick = function() {
        Api_1.default.logEvent(EventKeys_1.default.PLAY_ACCEPT);
        Config_1.default.battle = null;
        cc.audioEngine.stopMusic();
        cc.director.loadScene("game");
      };
      Home.prototype.onShopClick = function() {
        Api_1.default.logEvent(EventKeys_1.default.SHOP_GO);
        cc.director.loadScene("shop");
      };
      Home.prototype.onDailyBonusClick = function() {
        Media_1.default.playAudio("click");
        Api_1.default.logEvent(EventKeys_1.default.DAILY_GIFT_CLICK);
        this.dailyBonus.show(Api_1.default.dailyBonusDay, Api_1.default.dailyBonusClaimed);
        Api_1.default.showInterstitialAd();
      };
      Home.prototype.onBetChange = function(value) {
        Config_1.default.betValue = value;
      };
      Home.prototype.onBotChange = function(sender, params) {
        Media_1.default.playAudio("click");
        Api_1.default.logEvent(EventKeys_1.default.PLAY_MODE + "-" + params);
        sender.isChecked && (Config_1.default.totalPlayer = parseInt(params));
      };
      Home.prototype.onSoundToggle = function(sender, isOn) {
        Media_1.default.toggleSound();
      };
      Home.prototype.claimBankruptcyMoney = function(bonus) {
        var msg = cc.js.formatStr(Language_1.default.getInstance().get("MONEY1"), util_1.default.numberFormat(bonus));
        this.toast.openWithText(null, msg);
        Api_1.default.coinIncrement(bonus);
        this.coin.string = util_1.default.numberFormat(Api_1.default.coin);
        this.popup.close(null, 4);
      };
      Home.prototype.inviteFirend = function() {
        var _this = this;
        Api_1.default.logEvent(EventKeys_1.default.INVITE_FRIEND);
        Api_1.default.invite(function() {
          _this.claimBankruptcyMoney(Config_1.default.bankrupt_bonus);
        }, function() {
          _this.popup.close(null, 2);
          _this.toast.openWithText(null, "M\u1eddi b\u1ea1n ch\u01a1i kh\xf4ng th\xe0nh c\xf4ng");
        });
      };
      Home.prototype.showHetTien = function() {
        var _this = this;
        UI_1.default.contentViewAd = "hettienConfirm";
        Api_1.default.showRewardedVideo(function() {
          Api_1.default.logEvent(EventKeys_1.default.POPUP_ADREWARD_COIN_CLICK);
          var coin = Config_1.default.bankrupt_bonus;
          Api_1.default.isVIP() && (coin *= Config_1.default.vipBonusAd);
          _this.claimBankruptcyMoney(coin);
        }, function() {
          _this.claimBankruptcyMoney(Api_1.default.randomBonus());
          Api_1.default.logEvent(EventKeys_1.default.POPUP_ADREWARD_COIN_ERROR);
        });
      };
      Home.prototype.adReward = function() {
        this.showHetTien();
      };
      Home.prototype.toogleVip = function() {
        try {
          this.footer.vip.node.active = Api_1.default.isVIP();
          var btnPopup = cc.find("Canvas/popup/vip/btn_vip");
          var btnPlay = cc.find("Canvas/popup/vip/btn_vip/bg");
          var color = Api_1.default.isVIP() ? cc.Color.GRAY : cc.Color.WHITE;
          btnPopup.color = color;
          btnPlay.color = color;
        } catch (error) {
          console.log("====================================");
          console.log("loi", error);
          console.log("====================================");
        }
      };
      Home.prototype.vipSuccess = function() {
        Api_1.default.setVIP();
        this.toogleVip();
        this.toast.openWithText(null, Language_1.default.getInstance().get("vipSuc"));
      };
      Home.prototype.onVipPress = function() {
        var _this = this;
        Media_1.default.playAudio("click");
        this.popup.close(this.node, 5);
        if (Api_1.default.isVIP()) this.toast.openWithText(null, Language_1.default.getInstance().get("urvip")); else if (window.hasOwnProperty("FBInstant")) {
          UI_1.default.contentViewAd = "vipConfirm";
          Api_1.default.showRewardedVideo(function() {
            _this.vipSuccess();
          }, function(err) {});
        } else this.vipSuccess();
      };
      Home.prototype.openVip = function() {
        Media_1.default.playAudio("click");
        this.popup.open(null, 6);
      };
      __decorate([ property(cc.Sprite) ], Home.prototype, "avatar", void 0);
      __decorate([ property(cc.Label) ], Home.prototype, "playerName", void 0);
      __decorate([ property(cc.Label) ], Home.prototype, "coin", void 0);
      __decorate([ property(Leaderboard_1.default) ], Home.prototype, "leaderboard", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], Home.prototype, "music", void 0);
      __decorate([ property(DailyBonus_1.default) ], Home.prototype, "dailyBonus", void 0);
      __decorate([ property(Popup_1.default) ], Home.prototype, "popup", void 0);
      __decorate([ property(AutoHide_1.default) ], Home.prototype, "toast", void 0);
      __decorate([ property(Modal_1.default) ], Home.prototype, "modal", void 0);
      __decorate([ property(footer_1.default) ], Home.prototype, "footer", void 0);
      Home = __decorate([ ccclass ], Home);
      return Home;
    }(cc.Component);
    exports.default = Home;
    cc._RF.pop();
  }, {
    "./Api": "Api",
    "./AutoHide": "AutoHide",
    "./Config": "Config",
    "./EventKeys": "EventKeys",
    "./Language": "Language",
    "./Leaderboard": "Leaderboard",
    "./Media": "Media",
    "./Popup": "Popup",
    "./UI": "UI",
    "./footer": "footer",
    "./popop/Modal": "Modal",
    "./popop/bonus/DailyBonus": "DailyBonus",
    "./util": "util"
  } ],
  LBEntry: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48e8adoRHBEI57tbH867RGK", "LBEntry");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var util_1 = require("./util");
    var Api_1 = require("./Api");
    var Media_1 = require("./Media");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LBEntry = function(_super) {
      __extends(LBEntry, _super);
      function LBEntry() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.rank = null;
        _this.avatar = null;
        _this.playerName = null;
        _this.playerCoin = null;
        _this.spriteMedals = [];
        _this.playerId = null;
        _this.photo = null;
        _this.coin = 0;
        _this.click_key = "lb_battle";
        return _this;
      }
      LBEntry.prototype.start = function() {};
      LBEntry.prototype.render = function(rank, name, coin, avatar, playerId, type) {
        var _this = this;
        this.playerId = playerId;
        this.playerName.string = name;
        this.playerCoin.string = util_1.default.numberFormat(coin);
        this.coin = coin;
        var btnPlayWith = this.getComponentInChildren(cc.Button);
        "global" === type && (btnPlayWith.node.active = false);
        cc.assetManager.loadRemote(avatar, function(err, tex) {
          if (err) return;
          _this.photo = tex;
          _this.avatar.spriteFrame = new cc.SpriteFrame(tex);
        });
        this.rank.string = "" + (rank + 1);
        Api_1.default.playerId == playerId && (this.click_key = "lb_share");
      };
      LBEntry.prototype.onClick = function() {
        Media_1.default.playAudio("click");
        cc.systemEvent.emit(this.click_key, this.playerId, this.photo, this.playerName.string, this.coin);
      };
      __decorate([ property(cc.Label) ], LBEntry.prototype, "rank", void 0);
      __decorate([ property(cc.Sprite) ], LBEntry.prototype, "avatar", void 0);
      __decorate([ property(cc.Label) ], LBEntry.prototype, "playerName", void 0);
      __decorate([ property(cc.Label) ], LBEntry.prototype, "playerCoin", void 0);
      __decorate([ property(cc.SpriteFrame) ], LBEntry.prototype, "spriteMedals", void 0);
      LBEntry = __decorate([ ccclass ], LBEntry);
      return LBEntry;
    }(cc.Component);
    exports.default = LBEntry;
    cc._RF.pop();
  }, {
    "./Api": "Api",
    "./Media": "Media",
    "./util": "util"
  } ],
  Language: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d3c6mK5nNMjYk5tCjZK4el", "Language");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var en_US_1 = require("../lang/en_US");
    var Language = function() {
      function Language() {
        this.lang = en_US_1.default;
      }
      Language.getInstance = function() {
        Language._instance || (Language._instance = new Language());
        return Language._instance;
      };
      Language.prototype.load = function(lang) {
        this.lang = en_US_1.default;
      };
      Language.prototype.get = function(key) {
        return this.lang[key];
      };
      Language._instance = null;
      return Language;
    }();
    exports.default = Language;
    cc._RF.pop();
  }, {
    "../lang/en_US": "en_US"
  } ],
  Leaderboard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "baa5a1+8bxE/rfm6Qsnw+yf", "Leaderboard");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LBEntry_1 = require("./LBEntry");
    var Media_1 = require("./Media");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Leaderboard = function(_super) {
      __extends(Leaderboard, _super);
      function Leaderboard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.template = null;
        _this.viewFriend = null;
        _this.viewGlobal = null;
        _this.friendTabBtn = null;
        _this.globalTabBtn = null;
        _this.containerFriend = null;
        _this.containerGlobal = null;
        return _this;
      }
      Leaderboard.prototype.toggleTab = function(sender, arg) {
        Media_1.default.playAudio("click");
        var friendActive = "friend" == arg;
        this.viewFriend.active = friendActive;
        this.friendTabBtn.interactable = !friendActive;
        this.viewGlobal.active = !friendActive;
        this.globalTabBtn.interactable = friendActive;
        var getContentScrollView = function(node) {
          return node.getChildByName("content");
        };
        this.node.getComponent(cc.ScrollView).content = getContentScrollView(friendActive ? this.viewFriend : this.viewGlobal);
        this.setColor(this.friendTabBtn.node, friendActive);
        this.setColor(this.globalTabBtn.node, !friendActive);
      };
      Leaderboard.prototype.setColor = function(target, isActive) {
        var color = isActive ? cc.Color.WHITE : cc.Color.GRAY;
        target.color = color;
      };
      Leaderboard.prototype.start = function() {
        this.setColor(this.globalTabBtn.node, false);
      };
      Leaderboard.prototype.render = function(rank, name, coin, avatar, playerId, type) {
        var entry = cc.instantiate(this.template);
        entry.getComponent(LBEntry_1.default).render(rank, name, coin, avatar, playerId, type);
        "friend" == type ? this.containerFriend.addChild(entry) : this.containerGlobal.addChild(entry);
        entry.active = true;
      };
      Leaderboard.prototype.onLoadComplete = function() {};
      __decorate([ property(cc.Node) ], Leaderboard.prototype, "template", void 0);
      __decorate([ property(cc.Node) ], Leaderboard.prototype, "viewFriend", void 0);
      __decorate([ property(cc.Node) ], Leaderboard.prototype, "viewGlobal", void 0);
      __decorate([ property(cc.Button) ], Leaderboard.prototype, "friendTabBtn", void 0);
      __decorate([ property(cc.Button) ], Leaderboard.prototype, "globalTabBtn", void 0);
      __decorate([ property(cc.Node) ], Leaderboard.prototype, "containerFriend", void 0);
      __decorate([ property(cc.Node) ], Leaderboard.prototype, "containerGlobal", void 0);
      Leaderboard = __decorate([ ccclass ], Leaderboard);
      return Leaderboard;
    }(cc.Component);
    exports.default = Leaderboard;
    cc._RF.pop();
  }, {
    "./LBEntry": "LBEntry",
    "./Media": "Media"
  } ],
  Media: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d9922FNaw9M/4ffVqhjWYis", "Media");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var audioName;
    (function(audioName) {
      audioName[audioName["background"] = 0] = "background";
      audioName[audioName["changeBet"] = 1] = "changeBet";
      audioName[audioName["chiabai"] = 2] = "chiabai";
      audioName[audioName["click"] = 3] = "click";
      audioName[audioName["deal_complete"] = 4] = "deal_complete";
      audioName[audioName["lose"] = 5] = "lose";
      audioName[audioName["slotting"] = 6] = "slotting";
      audioName[audioName["win"] = 7] = "win";
      audioName[audioName["slotWin"] = 8] = "slotWin";
    })(audioName || (audioName = {}));
    var Config_1 = require("./Config");
    var Media = function() {
      function Media() {}
      Media.init = function() {
        if (Object.keys(Media.audio).length > 0) return;
        var initAudioPromise = Object.keys(audioName).map(function(audio) {
          return new Promise(function(resolve) {
            cc.loader.loadRes("audio/" + audio + ".mp3", cc.AudioClip, function(err, rs) {
              err || (Media.audio[audio] = rs);
              resolve(1);
            });
          });
        });
        Promise.all(initAudioPromise).then(function(rs) {
          cc.audioEngine.play(Media.audio["background"], true, .3);
        });
      };
      Media.pauseAllMedia = function() {
        cc.audioEngine.pauseAll();
      };
      Media.resumeAllmedia = function() {
        cc.audioEngine.resumeAll();
      };
      Media.toggleSound = function() {
        Media.playAudio("click");
        setTimeout(function() {
          Config_1.default.soundEnable = !Config_1.default.soundEnable;
          Config_1.default.soundEnable ? Media.resumeAllmedia() : Media.pauseAllMedia();
        }, 300);
      };
      Media.playAudio = function(audio) {
        Config_1.default.soundEnable && cc.audioEngine.play(Media.audio[audio], false, 1);
      };
      Media.audio = {};
      return Media;
    }();
    exports.default = Media;
    cc._RF.pop();
  }, {
    "./Config": "Config"
  } ],
  Modal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a10e5sRCWFPIIokEQkdNm2n", "Modal");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Modal = function(_super) {
      __extends(Modal, _super);
      function Modal() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.popup = null;
        _this.title = null;
        _this.content = null;
        return _this;
      }
      Modal_1 = Modal;
      Modal.prototype.onLoad = function() {
        Modal_1.instance = this;
      };
      Modal.prototype.start = function() {};
      Modal.prototype.show = function(text) {
        this.content.string = text;
        this.title.string = "Notice";
        this.node.active = true;
        this.popup.active = true;
      };
      Modal.prototype.onClose = function() {
        this.node.active = false;
        this.popup.active = false;
      };
      var Modal_1;
      Modal.instance = null;
      __decorate([ property(cc.Node) ], Modal.prototype, "popup", void 0);
      __decorate([ property(cc.Label) ], Modal.prototype, "title", void 0);
      __decorate([ property(cc.Label) ], Modal.prototype, "content", void 0);
      Modal = Modal_1 = __decorate([ ccclass ], Modal);
      return Modal;
    }(cc.Component);
    exports.default = Modal;
    cc._RF.pop();
  }, {} ],
  NoAd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1c5eezLtoBI46inxOcBKzJd", "NoAd");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Media_1 = require("./Media");
    var Language_1 = require("./Language");
    var ConfirmViewAd = function(_super) {
      __extends(ConfirmViewAd, _super);
      function ConfirmViewAd() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.popup = null;
        _this.header = null;
        _this.content = null;
        return _this;
      }
      ConfirmViewAd.prototype.start = function() {
        this.showNoAd = this.showNoAd.bind(this);
        this.hide = this.hide.bind(this);
        cc.systemEvent.on("noAd", this.showNoAd);
      };
      ConfirmViewAd.prototype.showNoAd = function() {
        this.popup.active = true;
        this.header.string = Language_1.default.getInstance().get("notice");
      };
      ConfirmViewAd.prototype.hide = function() {
        Media_1.default.playAudio("click");
        this.popup.active = false;
      };
      __decorate([ property(cc.Node) ], ConfirmViewAd.prototype, "popup", void 0);
      __decorate([ property(cc.Label) ], ConfirmViewAd.prototype, "header", void 0);
      __decorate([ property(cc.Label) ], ConfirmViewAd.prototype, "content", void 0);
      ConfirmViewAd = __decorate([ ccclass ], ConfirmViewAd);
      return ConfirmViewAd;
    }(cc.Component);
    exports.default = ConfirmViewAd;
    cc._RF.pop();
  }, {
    "./Language": "Language",
    "./Media": "Media"
  } ],
  Notice: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6cfdf+Ec8NOfKCqLqWb3Un0", "Notice");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Language_1 = require("./Language");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Alert = function(_super) {
      __extends(Alert, _super);
      function Alert() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
      }
      Alert_1 = Alert;
      Alert.prototype.onLoad = function() {
        this.label = this.getComponent(cc.Label);
      };
      Alert.prototype.start = function() {};
      Alert.prototype.showBigPig = function(num, duration) {
        2 == num ? this.show(Alert_1.TWO_PIG, duration) : 3 == num ? this.show(Alert_1.THREE_PIG, duration) : this.show(Alert_1.ONE_PIG, duration);
      };
      Alert.prototype.show = function(type, duration) {
        this.node.active = true;
        this.label.string = Language_1.default.getInstance().get(type);
        var action = cc.sequence(cc.delayTime(duration), cc.callFunc(this.hide, this));
        this.node.runAction(action);
      };
      Alert.prototype.hide = function() {
        this.node.active = false;
      };
      var Alert_1;
      Alert.ONE_PIG = "1BEST";
      Alert.TWO_PIG = "2BEST";
      Alert.THREE_PIG = "3BEST";
      Alert.THREE_PAIR = "3PAIRS";
      Alert.FOUR_CARD = "FOURKIND";
      Alert.FOUR_PAIR = "4PAIRS";
      Alert = Alert_1 = __decorate([ ccclass ], Alert);
      return Alert;
    }(cc.Component);
    exports.default = Alert;
    cc._RF.pop();
  }, {
    "./Language": "Language"
  } ],
  PlayBtn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "02e82bU0yFN46prcJE/AtYW", "PlayBtn");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.effect = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var bound = this.node.width / 2;
        cc.tween(this.effect.node).repeatForever(cc.tween().to(2, {
          position: cc.v2(this.node.x + bound + 20, this.node.y)
        }).delay(2).to(2, {
          position: cc.v2(this.node.x - bound, this.node.y)
        }).delay(2)).start();
      };
      NewClass.prototype.toggle = function() {
        this.node.active = !this.node.active;
      };
      NewClass.prototype.update = function(dt) {};
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "effect", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4cea4WuKU1GD7EAlqpK5ThR", "Player");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Helper_1 = require("./Helper");
    var CardGroup_1 = require("./CardGroup");
    var Timer_1 = require("./Timer");
    var TweenMove_1 = require("./tween/TweenMove");
    var util_1 = require("./util");
    var Config_1 = require("./Config");
    var Media_1 = require("./Media");
    var actionType;
    (function(actionType) {
      actionType[actionType["double"] = 0] = "double";
      actionType[actionType["insurr"] = 1] = "insurr";
      actionType[actionType["stand"] = 2] = "stand";
      actionType[actionType["hit"] = 3] = "hit";
      actionType[actionType["split"] = 4] = "split";
      actionType[actionType["push"] = 5] = "push";
      actionType[actionType["bust"] = 6] = "bust";
      actionType[actionType["black jack"] = 7] = "black jack";
    })(actionType || (actionType = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Player = function(_super) {
      __extends(Player, _super);
      function Player() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.timer = null;
        _this.coin = null;
        _this.username = null;
        _this.marker = null;
        _this.avatar = null;
        _this.effect = null;
        _this.pointLbl = null;
        _this.winEffect = null;
        _this.loseEffect = null;
        _this.seat = 0;
        _this.cards = [];
        _this.prepareCards = new CardGroup_1.default([], CardGroup_1.default.Ungrouped);
        _this.inRound = true;
        _this.coinVal = 1;
        _this.cardMargin = 0;
        _this.cardRootPosition = null;
        _this.cardDirection = null;
        _this.labelCardCounter = null;
        _this.numOfAce = 0;
        _this.point = 0;
        _this.bonusType = 0;
        _this.isSplit = 0;
        _this.subUser = null;
        _this.isSubUser = false;
        _this.timeout = null;
        _this.userActionEffect = null;
        _this.betLbl = null;
        _this.isBonusAce = false;
        _this.blackjack = null;
        _this.prevAction = "";
        _this.setBonusType = function(bonusType) {
          try {
            var self = _this;
            var txtBonusUser = "Canvas/user/bonus";
            if (!_this.inRound) {
              self = _this.subUser;
              txtBonusUser = "Canvas/subUser/bonus";
            }
            self.bonusType = bonusType;
            var bonusLbl = cc.find(txtBonusUser);
            bonusLbl.active = !!bonusType;
          } catch (error) {}
        };
        _this.showAllCard = function() {
          _this.cards.map(function(card) {
            null === card || void 0 === card ? void 0 : card.show();
          });
        };
        _this.changeCoin = function(coin) {
          var color = cc.color(249, 210, 30, 255), addString = "+";
          if (!_this.isCai()) if (coin < 0) {
            color = cc.color(255, 0, 0, 255), addString = "-";
            !_this.isSplit && (_this.loseEffect.node.active = true);
          } else !_this.isSplit && (_this.winEffect.node.active = true);
          _this.effect.getComponent(cc.Label).string = addString + util_1.default.numberFormat(Math.abs(coin));
          _this.effect.node.color = color;
          _this.effect.play();
          _this.setCoin(_this.coinVal + coin);
        };
        _this.split = function(subUser) {
          _this.subUser = subUser;
          _this.subUser.isSubUser = true;
          _this.blinkShowHideActionUser("split");
          _this.subUser.blinkShowHideActionUser("split");
          if (_this.isSplit) return;
          _this.isSplit = 1;
          _this.moveUserPosition();
          1 === _this.cards[1].rank && _this.numOfAce--;
          _this.cards.map(function(card, index) {
            if (1 === index) return _this.subUser.push(card, 0);
            card.node.zIndex = 1 === index ? -1 : index;
            var pos = _this.getCardRootPosition();
            pos.x += index < 2 ? 0 : index * _this.cardMargin;
            var move = cc.sequence(cc.delayTime(0), cc.moveTo(.2, pos));
            card.node.runAction(move);
          });
          setTimeout(function() {
            _this.cards = _this.cards.filter(function(card, index) {
              return 1 !== index;
            });
          }, 0);
          _this.updateCardCounter();
          var point = _this.getPoint();
          _this.updatePoint(point);
        };
        _this.showCard2 = function() {};
        _this.getPoint = function() {
          var point = _this.cards.reduce(function(point, current) {
            return 1 === current.rank ? point : current.rank > 10 ? point + 10 : point + current.rank;
          }, 0);
          _this.isBonusAce = point < 12;
          _this.numOfAce > 0 && (point += 1 * _this.numOfAce + (_this.isBonusAce ? 10 : 0));
          _this.point = point;
          return point;
        };
        _this.checkBlackJack = function() {
          var _a, _b;
          var rank1 = null === (_a = _this.cards[0]) || void 0 === _a ? void 0 : _a.rank;
          var rank2 = null === (_b = _this.cards[1]) || void 0 === _b ? void 0 : _b.rank;
          if ((1 === rank1 || 1 === rank2) && (rank1 > 9 || rank2 > 9)) {
            _this.setInRound(false);
            _this.updatePoint(21);
            !_this.isCai() && _this.showHideActionUser(true, "black jack");
            return true;
          }
          return false;
        };
        return _this;
      }
      Player_1 = Player;
      Player.prototype.start = function() {
        this.timer.hide();
        this.marker.active = false;
        this.cardMargin = .5 * Player_1.CARD_MARGIN;
        this.cardDirection = 1 == this.seat ? -1 : 1;
        this.labelCardCounter = this.marker.getComponentInChildren(cc.Label);
      };
      Player.prototype.showHideActionUser = function(needShow, actionType) {
        void 0 === needShow && (needShow = false);
        var target = this;
        !this.inRound && this.subUser && (target = this.subUser);
        if ("black jack" == actionType) {
          this.blackjack.node.active = true;
          this.setInRound(false);
        } else try {
          "push" != this.prevAction && (target.userActionEffect.node.active = needShow);
          if (needShow) {
            target.userActionEffect.getComponentInChildren(cc.Label).string = actionType.toUpperCase();
            this.prevAction = actionType;
          }
        } catch (error) {}
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = null;
        }
        needShow && setTimeout(function() {
          target.updatePoint();
        }, 700);
      };
      Player.prototype.blinkShowHideActionUser = function(actionType) {
        this.showHideActionUser(true, actionType);
        this.timeout = setTimeout(this.showHideActionUser.bind(this), Config_1.default.timeBlinkActionUser);
      };
      Player.prototype.show = function() {
        this.node.active = true;
      };
      Player.prototype.hide = function() {
        this.node.active = false;
      };
      Player.prototype.isBot = function() {
        return this.seat !== Config_1.default.totalPlayer / 2;
      };
      Player.prototype.isUser = function() {
        return this.isSubUser || this.seat === Config_1.default.totalPlayer / 2;
      };
      Player.prototype.isCai = function() {
        return 0 === this.seat;
      };
      Player.prototype.setInRound = function(inRound) {
        this.inRound = inRound;
      };
      Player.prototype.isInRound = function() {
        return this.inRound;
      };
      Player.prototype.addCoin = function(val) {
        this.effect.getComponent(cc.Label).string = "+" + util_1.default.numberFormat(val);
        this.effect.node.color = cc.color(249, 210, 30, 255);
        this.effect.play();
        this.setCoin(this.coinVal + val);
      };
      Player.prototype.subCoin = function(val) {
        this.effect.getComponent(cc.Label).string = "-" + util_1.default.numberFormat(val);
        this.effect.node.color = cc.color(255, 0, 0, 255);
        this.effect.play();
        this.setCoin(this.coinVal - val);
      };
      Player.prototype.setCoin = function(val) {
        this.coinVal = val;
        this.coin.string = util_1.default.numberFormat(val);
      };
      Player.prototype.getCoin = function() {
        return this.coinVal;
      };
      Player.prototype.setUsername = function(val) {
        this.isBot() && (null === val || void 0 === val ? void 0 : val.length) > 12 && (val = val.substr(0, 9) + "...");
        this.username.string = val;
      };
      Player.prototype.setAvatar = function(sprite) {
        this.avatar.spriteFrame = sprite;
      };
      Player.prototype.setRemoteAvatar = function(photo) {
        var _this = this;
        cc.assetManager.loadRemote(photo, function(err, tex) {
          if (err) return;
          _this.avatar.spriteFrame = new cc.SpriteFrame(tex);
        });
      };
      Player.prototype.reset = function() {
        this.marker.active = false;
        this.cards = [];
        this.isSubUser = false;
        this.inRound = true;
        this.prepareCards = new CardGroup_1.default([], CardGroup_1.default.Ungrouped);
        this.timer.hide();
        this.numOfAce = 0;
        this.point = 0;
        this.bonusType = 0;
        this.moveUserPosition(true);
        this.showHideActionUser();
        this.isBonusAce = false;
        this.isSplit = 0;
        if (this.subUser) {
          this.subUser.reset();
          this.subUser = null;
        }
      };
      Player.prototype.resetWinLoseEffect = function() {
        try {
          this.winEffect.node.active = false;
          this.loseEffect.node.active = false;
          this.blackjack.node.active = false;
          this.prevAction = "";
          this.showHideActionUser();
        } catch (error) {}
      };
      Player.prototype.setBetLabel = function(betNum) {
        try {
          this.betLbl.string = util_1.default.numberFormat(betNum);
        } catch (error) {}
      };
      Player.prototype.moveUserPosition = function(isReset) {
        void 0 === isReset && (isReset = false);
        if (!this.isSplit) return;
        this.node.x += 170 * (isReset ? -1 : 1);
        this.node.y += 10 * (isReset ? -1 : 1);
        this.cardRootPosition = null;
      };
      Player.prototype.push = function(card, delay) {
        var _this = this;
        this.cardMargin || (this.cardMargin = .5 * Player_1.CARD_MARGIN);
        if (!this.inRound && this.subUser) return this.subUser.push(card, delay);
        card.node.zIndex = this.cards.length;
        this.cards.push(card);
        1 === card.rank && (this.numOfAce += 1);
        var point = this.getPoint();
        var fun = function() {
          var _a, _b;
          21 == point && 2 === _this.cards.length ? !_this.isCai() && _this.showHideActionUser(true, "black jack") : _this.updatePoint(point);
          point > 20 && (_this.inRound = false);
          null === (_a = _this.cards[0]) || void 0 === _a ? void 0 : _a.show();
          if (_this.isCai() && _this.cards.length > 2) {
            null === (_b = _this.cards[1]) || void 0 === _b ? void 0 : _b.show();
            null === card || void 0 === card ? void 0 : card.show();
          }
          if (_this.isUser()) {
            null === card || void 0 === card ? void 0 : card.show();
            _this.reOrderCard(delay);
          } else _this.updateCardCounter();
        };
        this.isBot() && !this.isCai() && 2 === this.cards.length && (fun = function() {
          var _a;
          null === (_a = _this.cards[1]) || void 0 === _a ? void 0 : _a.show();
          _this.updatePoint();
          if (21 == point && 2 === _this.cards.length) {
            _this.setInRound(false);
            _this.showHideActionUser(true, "black jack");
          }
        });
        var pos = this.getCardRootPosition();
        var scale = cc.sequence(cc.delayTime(delay), cc.scaleTo(.2, this.isUser() ? .7 : .55));
        card.node.runAction(scale);
        pos.x += (this.cards.length - 1) * this.cardMargin * (this.isUser() ? 1.7 : 1.3);
        var move = cc.sequence(cc.delayTime(delay), cc.moveTo(.2, pos), cc.callFunc(fun), cc.callFunc(function() {
          _this.isBot() && !_this.isCai() && card.show();
        }));
        card.node.runAction(move);
        Media_1.default.playAudio("chiabai");
      };
      Player.prototype.reOrderCard = function(delay) {
        var _this = this;
        if (this.cards.length < 3) return;
        var posRoot = this.getCardRootPosition();
        posRoot.x -= (this.cards.length - 1) * this.cardMargin / 2;
        this.cards.map(function(card, index) {
          var pos = posRoot.clone();
          pos.x += index * _this.cardMargin * (_this.isUser() ? 1.7 : 1);
          var move = cc.sequence(cc.delayTime(delay), cc.moveTo(.2, pos));
          card.node.runAction(move);
        });
      };
      Player.prototype.touch = function(pos) {
        for (var i = this.cards.length - 1; i >= 0; --i) {
          var card = this.cards[i];
          if (card.node.getBoundingBoxToWorld().contains(pos)) return card;
        }
        return null;
      };
      Player.prototype.selectCard = function(card) {};
      Player.prototype.unselectCard = function(card) {};
      Player.prototype.removeCards = function(cards) {
        for (var i = cards.count() - 1; i >= 0; --i) Helper_1.default.removeBy(this.cards, cards.at(i));
        this.prepareCards = new CardGroup_1.default([], CardGroup_1.default.Ungrouped);
      };
      Player.prototype.setActive = function(on) {
        var _a;
        on ? null === (_a = this.timer) || void 0 === _a ? void 0 : _a.show(Player_1.TIME) : this.timer.hide();
      };
      Player.prototype.setTimeCallback = function(selector, selectorTarget, data) {
        this.timer.onCompleted(selector, selectorTarget, data);
      };
      Player.prototype.showHandCards = function() {
        var _a;
        for (var i = 0; i < this.cards.length; i++) null === (_a = this.cards[i]) || void 0 === _a ? void 0 : _a.show();
      };
      Player.prototype.reorder = function() {
        for (var i = this.cards.length - 1; i >= 0; --i) {
          var pos = this.getCardRootPosition();
          pos.x += i * this.cardMargin * this.cardDirection;
          var card = this.cards[i];
          card.node.setPosition(pos);
          card.node.zIndex = 1 == this.seat ? this.cards.length - i : i;
        }
      };
      Player.prototype.sortHandCards = function() {
        Helper_1.default.sort(this.cards);
        this.reorder();
      };
      Player.prototype.showCardCounter = function() {
        this.marker.active = false;
        this.updateCardCounter();
      };
      Player.prototype.hideCardCounter = function() {
        this.marker.active = false;
      };
      Player.prototype.updateCardCounter = function() {
        try {
          this.labelCardCounter.node.active = false;
          this.labelCardCounter.string = this.cards.length.toString();
        } catch (error) {}
      };
      Player.prototype.updatePoint = function(label) {
        this.point = this.getPoint();
        var showPoint = this.point;
        this.inRound && this.numOfAce && this.isBonusAce && this.point < 21 && (showPoint = showPoint - 10 + "/" + showPoint);
        try {
          this.pointLbl.string = showPoint;
        } catch (error) {}
      };
      Player.prototype.getCardRootPosition = function() {
        this.cardRootPosition || (this.cardRootPosition = cc.v2(this.marker.position.x * this.node.scaleX + this.node.position.x, this.marker.position.y * this.node.scaleY + this.node.position.y + (this.isUser() ? 0 : 10)));
        return cc.v2(this.cardRootPosition);
      };
      var Player_1;
      Player.CARD_MARGIN = 30;
      Player.TIME = 30;
      __decorate([ property(Timer_1.default) ], Player.prototype, "timer", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "coin", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "username", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "marker", void 0);
      __decorate([ property(cc.Sprite) ], Player.prototype, "avatar", void 0);
      __decorate([ property(TweenMove_1.default) ], Player.prototype, "effect", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "pointLbl", void 0);
      __decorate([ property(sp.Skeleton) ], Player.prototype, "winEffect", void 0);
      __decorate([ property(sp.Skeleton) ], Player.prototype, "loseEffect", void 0);
      __decorate([ property(cc.Sprite) ], Player.prototype, "userActionEffect", void 0);
      __decorate([ property(cc.Label) ], Player.prototype, "betLbl", void 0);
      __decorate([ property(cc.Sprite) ], Player.prototype, "blackjack", void 0);
      Player = Player_1 = __decorate([ ccclass ], Player);
      return Player;
    }(cc.Component);
    exports.default = Player;
    cc._RF.pop();
  }, {
    "./CardGroup": "CardGroup",
    "./Config": "Config",
    "./Helper": "Helper",
    "./Media": "Media",
    "./Timer": "Timer",
    "./tween/TweenMove": "TweenMove",
    "./util": "util"
  } ],
  Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "756eeJpotFA972j694PfnLH", "Popup");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Api_1 = require("./Api");
    var Config_1 = require("./Config");
    var Helper_1 = require("./Helper");
    var Media_1 = require("./Media");
    var util_1 = require("./util");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Popup = function(_super) {
      __extends(Popup, _super);
      function Popup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.popups = [];
        _this.addCoin = null;
        _this.betLabel = null;
        return _this;
      }
      Popup_1 = Popup;
      Popup.prototype.onLoad = function() {};
      Popup.prototype.start = function() {
        Popup_1.instance = this;
      };
      Popup.prototype.changeOpacityBg = function(opacity) {
        void 0 === opacity && (opacity = 255);
        var bg = this.node.children[0];
        bg.opacity = opacity;
      };
      Popup.prototype.closePopup = function() {
        Media_1.default.playAudio("click");
        this.node.active = false;
        this.popups.forEach(function(p) {
          p.active = false;
        });
      };
      Popup.prototype.close = function(sender, id) {
        Media_1.default.playAudio("click");
        this.changeOpacityBg();
        this.node.active = false;
        this.popups.forEach(function(p) {
          p.active = false;
        });
      };
      Popup.prototype.open = function(sender, id, opacity, data) {
        void 0 === opacity && (opacity = 255);
        this.changeOpacityBg(opacity);
        this.node.active = true;
        id && (this.popups[id - 1].active = true);
        try {
          var betting_lbl = cc.find("Canvas/popup/bet/betting_value/Title");
          betting_lbl.getComponent(cc.Label).string = Helper_1.default.renderDot(Config_1.default.betValue);
        } catch (error) {}
        3 == id && Media_1.default.playAudio("click");
        if (8 == id) {
          var popup7 = this.popups[7];
          popup7.getComponentInChildren(cc.Label).string = data.text;
          var isCoin = "coin" == data.type;
          popup7.children[1].children[0].active = isCoin;
          popup7.children[1].children[1].active = !isCoin;
        }
      };
      Popup.prototype.onChangeBetValue = function(object, value) {
        var betValue = "0" === value ? 3e3 : Config_1.default.betValue + +value;
        if (betValue == Config_1.default.betValue) return;
        Media_1.default.playAudio("changeBet");
        betValue > Api_1.default.coin && (betValue = Api_1.default.coin);
        this.addCoin.node.stopAllActions();
        this.addCoin.node.opacity = 0;
        var changeValue = value;
        "0" == value && (changeValue = 3e3 - Config_1.default.betValue);
        if (Config_1.default.betValue == betValue) return;
        Config_1.default.betValue = betValue;
        this.betLabel.string = Helper_1.default.renderDot(betValue);
        this.addCoin.string = (changeValue < 0 ? "-" : "+") + util_1.default.numberFormat(Math.abs(changeValue));
        var action = [ cc.moveTo(0, cc.v2(this.betLabel.node.x, this.betLabel.node.y + 20)), cc.moveTo(1, cc.v2(this.betLabel.node.x, this.betLabel.node.y + 120)) ];
        this.addCoin.node.opacity = 255;
        cc.tween(this.addCoin.node).to(1.5, {
          opacity: 0
        }).start();
        this.addCoin.node.runAction(cc.sequence(action));
      };
      var Popup_1;
      Popup.instance = null;
      __decorate([ property(cc.Node) ], Popup.prototype, "popups", void 0);
      __decorate([ property(cc.Label) ], Popup.prototype, "addCoin", void 0);
      __decorate([ property(cc.Label) ], Popup.prototype, "betLabel", void 0);
      Popup = Popup_1 = __decorate([ ccclass ], Popup);
      return Popup;
    }(cc.Component);
    exports.default = Popup;
    cc._RF.pop();
  }, {
    "./Api": "Api",
    "./Config": "Config",
    "./Helper": "Helper",
    "./Media": "Media",
    "./util": "util"
  } ],
  Shop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "22b59b5sv5O3KRVI8Z7dJWa", "Shop");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Shop = function(_super) {
      __extends(Shop, _super);
      function Shop() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Shop.prototype.start = function() {};
      Shop.prototype.backClick = function() {
        cc.director.loadScene("home");
      };
      Shop.prototype.buyClick = function(value) {};
      Shop = __decorate([ ccclass ], Shop);
      return Shop;
    }(cc.Component);
    exports.default = Shop;
    cc._RF.pop();
  }, {} ],
  Slider2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "60e38Bi/OJDvpmRhqGFGQN+", "Slider2");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Config_1 = require("./Config");
    var util_1 = require("./util");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Slider2 = function(_super) {
      __extends(Slider2, _super);
      function Slider2() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.maxValue = null;
        _this.minValue = null;
        _this.value = null;
        _this.fill = null;
        _this.slider = null;
        return _this;
      }
      Slider2.prototype.onLoad = function() {
        var sliderEventHandler = new cc.Component.EventHandler();
        sliderEventHandler.target = this.node;
        sliderEventHandler.component = "Slider2";
        sliderEventHandler.handler = "_onValueChange";
        this.slider = this.getComponent(cc.Slider);
        this.slider.slideEvents.push(sliderEventHandler);
      };
      Slider2.prototype.start = function() {
        this.minValue.string = util_1.default.numberFormat(Config_1.default.minBet);
        this.maxValue.string = util_1.default.numberFormat(Config_1.default.maxBet);
        this._onValueChange(this.slider, null);
      };
      Slider2.prototype._onValueChange = function(sender, params) {
        var val = this.getValue();
        this.onValueChange(val);
        this.value.string = util_1.default.numberFormat(val);
        var size = this.fill.node.getContentSize();
        size.width = this.node.getContentSize().width * this.slider.progress;
        this.fill.node.setContentSize(size);
      };
      Slider2.prototype.getValue = function() {
        var val = Config_1.default.minBet + (Config_1.default.maxBet - Config_1.default.minBet) * this.slider.progress;
        return 1e3 * Math.round(val / 1e3);
      };
      __decorate([ property(cc.Label) ], Slider2.prototype, "maxValue", void 0);
      __decorate([ property(cc.Label) ], Slider2.prototype, "minValue", void 0);
      __decorate([ property(cc.Label) ], Slider2.prototype, "value", void 0);
      __decorate([ property(cc.Sprite) ], Slider2.prototype, "fill", void 0);
      Slider2 = __decorate([ ccclass ], Slider2);
      return Slider2;
    }(cc.Component);
    exports.default = Slider2;
    cc._RF.pop();
  }, {
    "./Config": "Config",
    "./util": "util"
  } ],
  SlotMachine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89f08IMndlCG78WiEkfLyIL", "SlotMachine");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Roller = require("slot.Roller");
    var Api_1 = require("./Api");
    var Config_1 = require("./Config");
    var Media_1 = require("./Media");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Modal_1 = require("./popop/Modal");
    var UI_1 = require("./UI");
    var initBienSlotMachine = {
      8: .05,
      7: .05,
      6: .05,
      5: .15,
      3: .2,
      2: .5
    };
    var listOfKey = Object.keys(initBienSlotMachine).reverse();
    var SlotMachine = function(_super) {
      __extends(SlotMachine, _super);
      function SlotMachine() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.audioSpinRun = null;
        _this.audioSpinFail = null;
        _this.audioSpinOK = null;
        _this.spinBtn = null;
        _this.spinBtnAd = null;
        _this.lbNumOfSpin = null;
        _this.modal = null;
        _this.spining = false;
        _this.rollers = [];
        _this.fly_chip = null;
        _this.bienSlotMachine = {};
        _this.tempBienSlotMachine = initBienSlotMachine;
        _this.cangat = null;
        return _this;
      }
      SlotMachine.prototype.onLoad = function() {
        this.rollers = this.node.getComponentsInChildren(Roller);
        this.resetValue();
      };
      SlotMachine.prototype.resetValue = function() {
        this.spining = false;
        setTimeout(function() {
          cc.systemEvent.emit("resetSlotSymbolIndex");
        }, 0);
      };
      SlotMachine.prototype.showHideSpin = function(needShow) {
        this.resetValue();
        this.toggleCanGat();
        this.toggleBtnSpin();
        this.node.parent.active = needShow;
        this.node.active = needShow;
        this.fly_chip.active = false;
      };
      SlotMachine.prototype.toggleBtnSpin = function() {
        this.lbNumOfSpin.string = Api_1.default.ticket.toString();
        var showBtnAd = !Api_1.default.ticket;
        this.spinBtn.active = !showBtnAd;
        this.spinBtnAd.active = showBtnAd;
      };
      SlotMachine.prototype.toggleCanGat = function() {
        this.cangat.children[1].active = !this.spining;
        this.cangat.children[2].active = !this.spining;
        this.cangat.children[3].active = this.spining;
        this.cangat.children[4].active = this.spining;
      };
      SlotMachine.prototype.spin = function() {
        var _this = this;
        if (this.spining) return;
        Media_1.default.playAudio("slotting");
        var rs = this.makeRandomResult();
        Api_1.default.ticket--;
        Api_1.default.updateTicket();
        this.spining = true;
        this.toggleCanGat();
        this.rollers.map(function(roller, index) {
          roller.toggleSpin();
        });
        setTimeout(function() {
          _this.rollers.map(function(roller, index) {
            var resultIndex = Config_1.default.slotMachineEnum[rs[index]];
            roller.toggleSpin(resultIndex);
          });
          var bonusType = _this.calulateResult(rs);
          setTimeout(function() {
            _this.showHideSpin(false);
          }, 2e3);
        }, 3500);
      };
      SlotMachine.prototype.spinAd = function() {
        var _this = this;
        UI_1.default.contentViewAd = "endgameConfirm";
        Api_1.default.showRewardedVideo(function() {
          Api_1.default.ticket++;
          _this.spin();
        }, function() {});
      };
      SlotMachine.prototype.makeRandomResult = function() {
        var rs = [];
        this.changeSlotLogic(null);
        rs.push(this.slotMachineLogic());
        this.changeSlotLogic(rs[0]);
        rs.push(this.slotMachineLogic());
        this.changeSlotLogic(rs[1]);
        rs.push(this.slotMachineLogic());
        this.bienSlotMachine = initBienSlotMachine;
        return rs;
      };
      SlotMachine.prototype.changeSlotLogic = function(prevKey) {
        var _this = this;
        var lastMoc = 0;
        listOfKey.map(function(key, index) {
          prevKey ? _this.tempBienSlotMachine[key] += key == prevKey ? .1 : -.02 : _this.tempBienSlotMachine = initBienSlotMachine;
          _this.bienSlotMachine[key] = lastMoc += _this.tempBienSlotMachine[key];
        });
      };
      SlotMachine.prototype.slotMachineLogic = function() {
        var random = Math.random();
        for (var _i = 0, listOfKey_1 = listOfKey; _i < listOfKey_1.length; _i++) {
          var key = listOfKey_1[_i];
          if (random <= this.bienSlotMachine[key]) return key;
        }
      };
      SlotMachine.prototype.calulateResult = function(restult) {
        void 0 === restult && (restult = []);
        var bonus = 1;
        restult[0] === restult[1] && restult[0] === restult[2] ? bonus *= 7 === restult[0] ? 10 : restult[0] : restult[0] != restult[1] && restult[0] != restult[2] && restult[2] != restult[1] || (bonus = 1.5);
        if (1 != bonus) {
          cc.systemEvent.emit("SlotMachineBonus", bonus);
          this.fly_chip.active = true;
          Media_1.default.playAudio("slotWin");
        }
        return bonus;
      };
      SlotMachine.prototype.hideSlotMachine = function() {
        this.node.parent.active = false;
        this.node.active = false;
        this.fly_chip.active = false;
      };
      __decorate([ property({
        type: cc.AudioClip
      }) ], SlotMachine.prototype, "audioSpinRun", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], SlotMachine.prototype, "audioSpinFail", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], SlotMachine.prototype, "audioSpinOK", void 0);
      __decorate([ property({
        type: cc.Node
      }) ], SlotMachine.prototype, "spinBtn", void 0);
      __decorate([ property({
        type: cc.Node
      }) ], SlotMachine.prototype, "spinBtnAd", void 0);
      __decorate([ property({
        type: cc.Label
      }) ], SlotMachine.prototype, "lbNumOfSpin", void 0);
      __decorate([ property(Modal_1.default) ], SlotMachine.prototype, "modal", void 0);
      __decorate([ property(cc.Node) ], SlotMachine.prototype, "fly_chip", void 0);
      __decorate([ property(cc.Node) ], SlotMachine.prototype, "cangat", void 0);
      SlotMachine = __decorate([ ccclass ], SlotMachine);
      return SlotMachine;
    }(cc.Component);
    exports.default = SlotMachine;
    cc._RF.pop();
  }, {
    "./Api": "Api",
    "./Config": "Config",
    "./Media": "Media",
    "./UI": "UI",
    "./popop/Modal": "Modal",
    "slot.Roller": "slot.Roller"
  } ],
  SpinWheel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "daacdf5d5lMhrNHqrN6niHA", "SpinWheel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var util_1 = require("./util");
    var Api_1 = require("./Api");
    var Popup_1 = require("./Popup");
    var Toast_1 = require("./Toast");
    var Modal_1 = require("./popop/Modal");
    var EventKeys_1 = require("./EventKeys");
    var Language_1 = require("./Language");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SpinWheel = function(_super) {
      __extends(SpinWheel, _super);
      function SpinWheel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.wheel = null;
        _this.ticket = null;
        _this.popup = null;
        _this.toast = null;
        _this.btnRun = null;
        _this.btnAd = null;
        _this.audioSpinWin = null;
        _this.audioSpinLose = null;
        _this.audioSpinRun = null;
        _this.modal = null;
        _this.won = 0;
        _this.isRunning = false;
        return _this;
      }
      SpinWheel_1 = SpinWheel;
      SpinWheel.prototype.start = function() {};
      SpinWheel.prototype.show = function(won) {
        var playNow = Api_1.default.ticket > 0;
        this.popup.open(this.node, 2);
        this.ticket.string = util_1.default.numberFormat(Api_1.default.ticket);
        this.node.active = true;
        this.isRunning = false;
        this.btnAd.node.active = !playNow;
        this.btnRun.node.active = playNow;
        this.won = won;
      };
      SpinWheel.prototype.hide = function() {
        this.popup.close(this.node, 2);
      };
      SpinWheel.prototype.play = function() {
        if (this.isRunning || Api_1.default.ticket <= 0) return;
        Api_1.default.ticket--;
        this.updateTicket();
        this.spin();
        Api_1.default.logEvent(EventKeys_1.default.SPIN);
      };
      SpinWheel.prototype.spin = function() {
        util_1.default.playAudio(this.audioSpinRun);
        this.isRunning = true;
        var result = this.randomPrize();
        var action = cc.rotateBy(5, 3600 + result.angle - 30 - this.wheel.node.angle % 360);
        this.wheel.node.runAction(cc.sequence(action.easing(cc.easeCubicActionOut()), cc.callFunc(this.onCompleted, this, result)));
      };
      SpinWheel.prototype.showVideoAd = function() {
        var _this = this;
        if (this.isRunning) return;
        Api_1.default.logEvent(EventKeys_1.default.POPUP_ADREWARD_SPIN_CLICK);
        Api_1.default.showRewardedVideo(function() {
          _this.spin();
        }, function(msg) {
          Api_1.default.logEvent(EventKeys_1.default.POPUP_ADREWARD_SPIN_ERROR);
          _this.modal.show(Language_1.default.getInstance().get("NOVIDEO"));
        });
      };
      SpinWheel.prototype.onCompleted = function(sender, data) {
        var msg = Language_1.default.getInstance().get(data.msg);
        this.toast.show(msg);
        this.onSpinCompleted(data, this.won);
        if (1 == data.id) this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(this.spin, this))); else {
          this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(this.hide, this)));
          util_1.default.playAudio(0 == data.id ? this.audioSpinLose : this.audioSpinWin);
        }
      };
      SpinWheel.prototype.onDisable = function() {
        this.onSpinHide();
      };
      SpinWheel.prototype.compute = function(id, val) {
        switch (id) {
         case 2:
          return val;

         case 3:
          return 2 * val;

         case 4:
          return 4 * val;

         case 5:
          return 9 * val;

         default:
          return 0;
        }
      };
      SpinWheel.prototype.onClose = function() {
        if (this.isRunning) return;
        Popup_1.default.instance.close(null, 2);
      };
      SpinWheel.prototype.randomPrize = function() {
        var rate = 100 * Math.random();
        var sample = SpinWheel_1.result_rate;
        for (var i = 0; i < sample.length; i++) if (sample[i].rate > rate) return sample[i];
        return sample[0];
      };
      SpinWheel.prototype.updateTicket = function() {
        Api_1.default.updateTicket();
        this.ticket.string = util_1.default.numberFormat(Api_1.default.ticket);
      };
      var SpinWheel_1;
      SpinWheel.result_rate = [ {
        id: 0,
        angle: 240,
        rate: 15,
        msg: "LUCK"
      }, {
        id: 1,
        angle: 300,
        rate: 30,
        msg: "TURN"
      }, {
        id: 2,
        angle: 0,
        rate: 65,
        msg: "X2"
      }, {
        id: 3,
        angle: 60,
        rate: 85,
        msg: "X3"
      }, {
        id: 4,
        angle: 120,
        rate: 90,
        msg: "X5"
      }, {
        id: 5,
        angle: 180,
        rate: 100,
        msg: "X10"
      } ];
      __decorate([ property(cc.Sprite) ], SpinWheel.prototype, "wheel", void 0);
      __decorate([ property(cc.Label) ], SpinWheel.prototype, "ticket", void 0);
      __decorate([ property(Popup_1.default) ], SpinWheel.prototype, "popup", void 0);
      __decorate([ property(Toast_1.default) ], SpinWheel.prototype, "toast", void 0);
      __decorate([ property(cc.Button) ], SpinWheel.prototype, "btnRun", void 0);
      __decorate([ property(cc.Button) ], SpinWheel.prototype, "btnAd", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], SpinWheel.prototype, "audioSpinWin", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], SpinWheel.prototype, "audioSpinLose", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], SpinWheel.prototype, "audioSpinRun", void 0);
      __decorate([ property(Modal_1.default) ], SpinWheel.prototype, "modal", void 0);
      SpinWheel = SpinWheel_1 = __decorate([ ccclass ], SpinWheel);
      return SpinWheel;
    }(cc.Component);
    exports.default = SpinWheel;
    cc._RF.pop();
  }, {
    "./Api": "Api",
    "./EventKeys": "EventKeys",
    "./Language": "Language",
    "./Popup": "Popup",
    "./Toast": "Toast",
    "./popop/Modal": "Modal",
    "./util": "util"
  } ],
  Text2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "33666ScFZtOSIs1HT5qmapm", "Text2");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Language_1 = require("./Language");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Text2 = function(_super) {
      __extends(Text2, _super);
      function Text2() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.key = "";
        _this.label = null;
        return _this;
      }
      Text2.prototype.start = function() {
        this.label = this.getComponent(cc.Label);
        this.label || (this.label = this.getComponent(cc.RichText));
        this.label && (this.label.string = Language_1.default.getInstance().get(this.key));
        cc.systemEvent.on("LANG_CHAN", this.onLanguageChange, this);
      };
      Text2.prototype.onLanguageChange = function() {
        console.log("onLanguageChange", this, this.label);
        this.label && (this.label.string = Language_1.default.getInstance().get(this.key));
      };
      Text2.prototype.onDestroy = function() {
        cc.systemEvent.off("LANG_CHAN");
      };
      __decorate([ property() ], Text2.prototype, "key", void 0);
      Text2 = __decorate([ ccclass ], Text2);
      return Text2;
    }(cc.Component);
    exports.default = Text2;
    cc._RF.pop();
  }, {
    "./Language": "Language"
  } ],
  Timer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1e7cbJml9KPo0i8Y/KcUS7", "Timer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Timer = function(_super) {
      __extends(Timer, _super);
      function Timer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.timer = 0;
        _this.duration = 0;
        _this.completed = null;
        _this._selectorTarget = null;
        _this.target = null;
        return _this;
      }
      Timer.prototype.onLoad = function() {
        this.sprite = this.getComponent(cc.Sprite);
      };
      Timer.prototype.start = function() {};
      Timer.prototype.update = function(dt) {
        this.timer += dt;
        if (this.timer < this.duration) {
          this.sprite.fillRange = this.timer / this.duration;
          return;
        }
        this.node.active = false;
        null != this.completed && this.completed.call(this._selectorTarget, this.target);
      };
      Timer.prototype.onCompleted = function(selector, selectorTarget, target) {
        this.completed = selector;
        this.target = target;
        this._selectorTarget = selectorTarget;
      };
      Timer.prototype.show = function(time) {
        this.duration = time;
        this.timer = 0;
        this.node.active = true;
      };
      Timer.prototype.hide = function() {
        this.node.active = false;
      };
      Timer = __decorate([ ccclass ], Timer);
      return Timer;
    }(cc.Component);
    exports.default = Timer;
    cc._RF.pop();
  }, {} ],
  Toast: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f74bKQm+BNarPR7bnDfejb", "Toast");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Toast = function(_super) {
      __extends(Toast, _super);
      function Toast() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
      }
      Toast.prototype.start = function() {};
      Toast.prototype.show = function(text) {
        this.node.stopAllActions();
        this.label.string = text;
        this.node.active = true;
        var widget = this.getComponent(cc.Widget);
        widget.top = -this.node.height;
        widget.updateAlignment();
        this.node.runAction(cc.sequence(cc.moveBy(.5, 0, -this.node.height), cc.delayTime(.7), cc.moveBy(.5, 0, this.node.height), cc.callFunc(this.hide, this)));
      };
      Toast.prototype.hide = function() {
        this.node.active = false;
      };
      __decorate([ property(cc.Label) ], Toast.prototype, "label", void 0);
      Toast = __decorate([ ccclass ], Toast);
      return Toast;
    }(cc.Component);
    exports.default = Toast;
    cc._RF.pop();
  }, {} ],
  Tut: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1c08F4R7BBVoZ9HJK/EaH5", "Tut");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Language_1 = require("./Language");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TUT = function(_super) {
      __extends(TUT, _super);
      function TUT() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.img = [];
        _this.playbtn = null;
        return _this;
      }
      TUT.prototype.start = function() {
        var _this = this;
        var txtTut = Language_1.default.getInstance().get("TUT").split("$img");
        txtTut.map(function(txt, id) {
          _this.node.addChild(_this.getTextNode(txt));
          _this.node.addChild(_this.getSpriteNode(_this.img[id]));
        });
        if (this.playbtn) {
          var newNode = cc.instantiate(this.playbtn);
          newNode.active = true;
          this.node.addChild(newNode);
        }
        this.node.children[0].active = false;
        this.node.children[1].active = false;
      };
      TUT.prototype.getTextNode = function(txt) {
        var newNode = cc.instantiate(this.node.children[0]);
        newNode.getComponent(cc.RichText).string = txt;
        newNode.active = true;
        return newNode;
      };
      TUT.prototype.getSpriteNode = function(img) {
        var newNode = cc.instantiate(this.node.children[1]);
        newNode.getComponent(cc.Sprite).spriteFrame = img;
        newNode.active = true;
        return newNode;
      };
      __decorate([ property(cc.SpriteFrame) ], TUT.prototype, "img", void 0);
      __decorate([ property(cc.Node) ], TUT.prototype, "playbtn", void 0);
      TUT = __decorate([ ccclass ], TUT);
      return TUT;
    }(cc.Component);
    exports.default = TUT;
    cc._RF.pop();
  }, {
    "./Language": "Language"
  } ],
  TweenMove: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "21238R/+BlIzaVSvLlZw08P", "TweenMove");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TweenMove = function(_super) {
      __extends(TweenMove, _super);
      function TweenMove() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.duration = 2;
        _this.delayHide = 1;
        _this.distance = 180;
        _this.from = cc.Vec2.ZERO;
        _this.time = 0;
        return _this;
      }
      TweenMove.prototype.onLoad = function() {
        this.from = this.node.getPosition();
      };
      TweenMove.prototype.start = function() {};
      TweenMove.prototype.update = function(dt) {
        this.time += dt;
        if (this.time < this.duration) {
          var y = this.from.y + this.distance * (this.time / this.duration);
          this.node.setPosition(this.from.x, y);
        }
        this.time >= this.duration + this.delayHide && (this.node.active = false);
      };
      TweenMove.prototype.play = function() {
        this.time = 0;
        this.node.active = true;
      };
      TweenMove = __decorate([ ccclass ], TweenMove);
      return TweenMove;
    }(cc.Component);
    exports.default = TweenMove;
    cc._RF.pop();
  }, {} ],
  UI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94fe68PZlxGDKvAzHXsvmgs", "UI");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UItype = void 0;
    exports.UItype = {
      noAd: "noAd",
      confirmViewAd: "confirmViewAd",
      dailybonus: "dailybonus"
    };
    var UI = function() {
      function UI() {}
      Object.defineProperty(UI, "contentViewAd", {
        get: function() {
          return UI._contentViewAd;
        },
        set: function(key) {
          UI._contentViewAd = key;
          UI.showConfirmViewAd();
        },
        enumerable: false,
        configurable: true
      });
      UI.showAdNotLoad = function() {
        cc.systemEvent.emit(exports.UItype.noAd);
      };
      UI.showConfirmViewAd = function() {
        cc.systemEvent.emit(exports.UItype.confirmViewAd);
      };
      UI.showDailybonus = function() {
        cc.systemEvent.emit(exports.UItype.dailybonus);
      };
      UI._contentViewAd = "";
      return UI;
    }();
    exports.default = UI;
    cc._RF.pop();
  }, {} ],
  User: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd7257UJPhLW5D9IAG3yHKZ", "User");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Api_1 = require("./Api");
    var Config_1 = require("./Config");
    var util_1 = require("./util");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.coin = null;
        _this.userName = null;
        _this.avatar = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        cc.systemEvent.on("updateProfile", this.updateProfile, this);
        this.updateProfile();
      };
      NewClass.prototype.updateProfile = function() {
        var _this = this;
        try {
          this.coin.string = util_1.default.numberFormat(Api_1.default.coin);
          this.userName.string = Api_1.default.username;
          cc.assetManager.loadRemote(Api_1.default.photo, function(err, tex) {
            if (err) return;
            _this.avatar.spriteFrame = new cc.SpriteFrame(tex);
            Config_1.default.userphoto = tex;
          });
        } catch (error) {
          console.log("====================================");
          console.log("update profile error", error);
          console.log("====================================");
        }
      };
      NewClass.prototype.onDestroy = function() {
        try {
          cc.systemEvent.clear();
        } catch (error) {}
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "coin", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "userName", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "avatar", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./Api": "Api",
    "./Config": "Config",
    "./util": "util"
  } ],
  customHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24ead6+UNFHZL77LBGt1di/", "customHelper");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Config_1 = require("./Config");
    var customHelper = {
      loadBannerAd: function() {
        var sp = FBInstant.getSupportedAPIs();
        console.log("====================================");
        console.log(sp);
        console.log("====================================");
        FBInstant.loadBannerAdAsync(Config_1.default.bannerAdID).then(function(rs) {
          console.log("====================================");
          console.log(rs);
          console.log("====================================");
        }).catch(function(err) {
          console.log("====================================");
          console.log("err banner ad", err);
          console.log("====================================");
        });
      },
      hideBannerAd: function() {
        FBInstant.hideBannerAdAsync();
      }
    };
    exports.default = customHelper;
    cc._RF.pop();
  }, {
    "./Config": "Config"
  } ],
  en_US_tut: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b99d6dWx5hBq5cWjzQLp+PI", "en_US_tut");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tutor = "The\u200c \u200cPlayer\u2019s\u200c \u200cgoal\u200c \u200cis\u200c \u200cto\u200c \u200cassemble\u200c \u200ca\u200c \u200chand\u200c \u200cworth\u200c \u200ca\u200c \u200cnumber\u200c \u200cof\u200c \u200cpoints\u200c \u200cthat\u200c \u200cexceeds\u200c \u200cthe\u200c \u200cvalue\u200c \u200cof\u200c \u200c\nthe\u200c \u200cdealer\u2019s\u200c \u200chand.\u200c \u200cYou\u200c \u200cneed\u200c \u200cto\u200c \u200ccollect\u200c \u200cno\u200c \u200cmore\u200c \u200cthan\u200c \u200cmaximum\u200c \u200cof\u200c \u200c21\u200c \u200cpoints,\u200c \u200cor\u200c \u200cyou\u200c \u200close\u200c \u200c\n(bust)\u200c \u200c\n\xa0\u200c\n<size=30><b>Blackjack</b></size> \nIf the first two cards in a hand are worth a total of 21 points, this hand is called \u201cBlackjack\u201d\n$img\nIf the dealer gets blackjack, all players lose other than those with blackjack. If bot the dealer and a player have blackjack, this is considered a draw, and the player gets their bet back.\nIf a player has blackjack and the dealer does not, the player wins and gets a 3:2 payout on their bet.\nIf the dealer\u2019s face-up card is worth 10 points, they look at their face-down card. If the dealer has blackjack, they turn their cards over, and the round ends.\n\n<size=30><b>Player Action:</b></size> \n\nIf neither the player nor the dealer have blackjack, the player can choose one of several actions once the cards have been dealt.\n\u201cSplit\u201d \u2013 this action is only available if the player\u2019s hand contains two cards of the same value. The player doubles their bet, splits their hand in two, and takes two additional cards. The two hands are then played independently.\n$img\n\u201cHit\u201d \u2013 the player takes another card. This action can be repeated until the value of the hand exceeds 21 points.\n$img\n\u201cDouble\u201d \u2013 the player doubles their bet, takes another card, and stands.\n$img\n\u201cStand\u201d \u2013 the player takes no more cards and keeps their current hand.\n$img\n<size=30><b>Dealer</b></size> \nOnce all players have stood, the dealer turns their face-down card over.\nIf necessary, the dealer can take additional cards until they have 17 or more points. If the dealer\u2019s score exceeds 21, all players who have not gone burst automatically win regardless of their score.\n\n<size=30><b>Insurance</b></size> \n\nSpecial Case: if the dealer has a face-up ace, the players have the option to place an additional \u201cinsurance\u201d bet equal to half of their original bet. Once all players have made a decision, the dealer looks at their face-down card. If the dealer has blackjack, a payout of 2:1 is paid on all \u201cinsurance\u201d bets. If the dealer does not have blackjack, all insurance bets go to the pot and the game continues as usual.\n$img\n<size=30><b>Payout</b></size> \n\nBet: 1:1\nBlackjack: 3:2\nDraw: The bet is returned.\nBust: the bet is lost\nInsurance: 2:1\n<size=30><b>Counting Points:</b></size> \n\nThe following card values are used when counting points: the cards from 2 to 10 are worth a number of points equal to the card\u2019s face value.\n$img\nThe cards J, Q, and K worth 10 points.\n$img\nAce is worth 1 or 11 points depending on which point value presents the hand from exceeding 21\n$img";
    exports.default = tutor;
    cc._RF.pop();
  }, {} ],
  en_US: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0d583jnHB5GtZrm4qYwUeQu", "en_US");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var en_US_tut_1 = require("./en_US_tut");
    exports.default = {
      PLAYNOW: "Play now",
      WIN: "1st",
      LOSE2: "2nd",
      LOSE3: "3rd",
      LOSE4: "4th",
      PLAYER: "Number of players",
      BETNO: "BETTING",
      DAILY: "Daily Reward",
      D1: "Day 1",
      D2: "Day 2",
      D3: "Day 3",
      D4: "Day 4",
      D5: "Day 5",
      D6: "Day 6",
      D7: "Day 7",
      "3TURNS": "3 turns",
      "5TURNS": "5 turns",
      TURNS: "turns",
      RECEIVED: "Received",
      LEADER: "Leaderboard",
      NOVIDEO: "Video cannot be played now",
      BET: "Bet",
      NO: "No",
      PASS: "Pass",
      HIT: "Hit",
      ARRANGE: "Arrange",
      QUITGAME: "Quit game",
      QUITGAMEP: "Do you want to quit game? If you quit game you'll lose ten times as bet level",
      QUIT: "Quit",
      "3PAIRS": "3 consecutive pairs",
      "4PAIRS": "4 consecutive pairs",
      FOURKIND: "Four of a kind",
      FLUSH: "Straight Flush",
      "1BEST": "best",
      "2BEST": "2 best",
      "3BEST": "3 best",
      INSTRUCT: "Instruction",
      NOMONEY: "You've run out of money, click to receive more money",
      RECEI2: "Claim",
      SPINNOW: "Spin",
      SPIN: "Spin",
      "1TURN": "1 more turn",
      LUCKYSPIN: "Lucky Spin",
      LUCK: "Have a luck later",
      TURN: "One more turn",
      X2: "X2 money",
      X3: "X3 money",
      X5: "X5 money",
      X10: "X10 money",
      MISS: "Miss",
      MONEY1: "Congratulation! You've got %s",
      TUT: en_US_tut_1.default,
      vipSuc: "Congratulation! You're VIP now",
      addSpin: "You've got $value spin turns!",
      addCoin: "You've got $value!",
      urvip: "You're VIP, please turn back tomorrow",
      confirmVidHeader: "Notice",
      confirmVidContent: "Watch video to get x2 rewards",
      dailyConfirm: "Watch video to get x2 rewards",
      hettienConfirm: "You've run out of money \n. Watch video to get money",
      endgameConfirm: "Watch video to get 01 free spin",
      vipConfirm: "Watch video to get VIP",
      "\bviewAd": "Watch",
      again: "Again ?",
      backTomorrow: "Please turn back tomorrow",
      getReward: "Get Reward",
      getBonusGold: "Get bonus Gold",
      getDailyBonus: "Get Daily Bonus",
      betAmount: "Bet Amount",
      confirmPlay: "Do you want to challenge with our AI System. The default bet amount is 3.000?",
      notice: "Notice",
      turn: "Turn",
      spinNow: "SPIN\nNOW",
      spin: "SPIN"
    };
    cc._RF.pop();
  }, {
    "./en_US_tut": "en_US_tut"
  } ],
  firstTut: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ffc4Ykb5ZBYKb5kA/NgBbn", "firstTut");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Api_1 = require("./Scripts/Api");
    var Popup_1 = require("./Scripts/Popup");
    var Config_1 = require("./Scripts/Config");
    var Media_1 = require("./Scripts/Media");
    var UI_1 = require("./Scripts/UI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FirstTut = function(_super) {
      __extends(FirstTut, _super);
      function FirstTut() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.popup = null;
        _this.hand = null;
        _this.target = null;
        _this.blinkAction = null;
        _this.scrollAction = null;
        _this.guide = null;
        _this.btnGotit = null;
        _this.mask = null;
        _this.btnPlay = null;
        return _this;
      }
      FirstTut.prototype.onLoad = function() {
        var _this = this;
        this.blinkAction = cc.blink(5e3, 1e4);
        var scroll = this.guide.getComponentInChildren(cc.ScrollView);
        scroll.node.on("touch-up", function() {
          if (!_this.hand.active) return;
          _this.hand.active = false;
        });
        cc.tween(this.btnPlay).repeatForever(cc.tween().to(.5, {
          scale: 1.05
        }).to(.5, {
          scale: .95
        })).start();
      };
      FirstTut.prototype.scrollHand = function() {
        this.hand.active = true;
        cc.tween(this.hand).repeatForever(cc.tween().to(0, {
          position: cc.v2(this.target.x, -150)
        }).to(1.5, {
          position: cc.v2(this.target.x, 150)
        }).delay(.5)).start();
      };
      FirstTut.prototype.openFirstTut = function() {
        this.guide.active = true;
        this.scrollHand();
      };
      FirstTut.prototype.blinkHand = function() {
        this.hand.active = true;
        this.hand.x = this.target.x;
        this.hand.y = this.target.y;
        var action = cc.sequence([ cc.moveTo(0, cc.v2(this.target.x, this.target.y)), this.blinkAction ]);
        this.hand.runAction(action);
      };
      FirstTut.prototype.closeFirstTut = function() {
        Media_1.default.playAudio("click");
        this.guide.active = false;
        this.hand.active = false;
        this.hand.stopAllActions();
        UI_1.default.showDailybonus();
      };
      FirstTut.prototype.start = function() {
        this.openFirstTut = this.openFirstTut.bind(this);
        this.hideModalTut = this.hideModalTut.bind(this);
        this.btnPlay.active = false;
        cc.systemEvent.on("firstTut", this.openFirstTut);
        cc.systemEvent.on("hideModalTut", this.hideModalTut);
      };
      FirstTut.prototype.hideModalTut = function() {
        this.mask.active = false;
        this.hand.active = false;
      };
      FirstTut.prototype.gotIt = function() {
        Media_1.default.playAudio("click");
        this.guide.active = false;
        this.hand.stopAllActions();
        this.blinkHand();
        this.mask.active = true;
        this.btnPlay.active = true;
      };
      FirstTut.prototype.onPlay = function() {
        Media_1.default.playAudio("click");
        this.hand.active = false;
        this.mask.active = false;
        this.btnPlay.active = false;
        this.hand.stopAllActions();
        this.popup.open(null, 7);
      };
      FirstTut.prototype.acceptPlay = function() {
        this.popup.closePopup();
        if (Api_1.default.coin > Config_1.default.bankrupt) this.popup.open(this.node, 1); else {
          Api_1.default.preloadRewardedVideo();
          Api_1.default.showInterstitialAd();
          this.popup.open(this.node, 4);
        }
      };
      FirstTut.prototype.closePopup = function() {
        this.popup.closePopup();
        Api_1.default.dailyBonusClaimed || UI_1.default.showDailybonus();
      };
      __decorate([ property(Popup_1.default) ], FirstTut.prototype, "popup", void 0);
      __decorate([ property(cc.Node) ], FirstTut.prototype, "hand", void 0);
      __decorate([ property(cc.Node) ], FirstTut.prototype, "target", void 0);
      __decorate([ property(cc.Node) ], FirstTut.prototype, "guide", void 0);
      __decorate([ property(cc.Button) ], FirstTut.prototype, "btnGotit", void 0);
      __decorate([ property(cc.Node) ], FirstTut.prototype, "mask", void 0);
      __decorate([ property(cc.Node) ], FirstTut.prototype, "btnPlay", void 0);
      FirstTut = __decorate([ ccclass ], FirstTut);
      return FirstTut;
    }(cc.Component);
    exports.default = FirstTut;
    cc._RF.pop();
  }, {
    "./Scripts/Api": "Api",
    "./Scripts/Config": "Config",
    "./Scripts/Media": "Media",
    "./Scripts/Popup": "Popup",
    "./Scripts/UI": "UI"
  } ],
  footer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8156cu1nIZCO7QX8negmDLE", "footer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var footer = function(_super) {
      __extends(footer, _super);
      function footer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.coin = null;
        _this.username = null;
        _this.avatar = null;
        _this.vip = null;
        return _this;
      }
      footer.prototype.start = function() {};
      __decorate([ property(cc.Label) ], footer.prototype, "coin", void 0);
      __decorate([ property(cc.Label) ], footer.prototype, "username", void 0);
      __decorate([ property(cc.Sprite) ], footer.prototype, "avatar", void 0);
      __decorate([ property(cc.Sprite) ], footer.prototype, "vip", void 0);
      footer = __decorate([ ccclass ], footer);
      return footer;
    }(cc.Component);
    exports.default = footer;
    cc._RF.pop();
  }, {} ],
  image: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "52ca30fTzNLN67UCDz74xRK", "image");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var image_base64 = "data:image/png;base64,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";
    exports.default = image_base64;
    cc._RF.pop();
  }, {} ],
  "slot.Roller": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6dec3JbzbtEYKHs5mCVQKs1", "slot.Roller");
    "use strict";
    var Symbol = require("slot.Symbol");
    var Roller = cc.Class({
      extends: cc.Component,
      editor: {
        disallowMultiple: false,
        executeInEditMode: true
      },
      properties: {
        _rollerRows: 0,
        rollerRows: {
          get: function get() {
            return this._rollerRows;
          },
          set: function set(value) {
            this._rollerRows = value;
            this._createSymbols();
          },
          min: 0,
          step: 1
        },
        _rollerWidth: 180,
        rollerWidth: {
          get: function get() {
            return this._rollerWidth;
          },
          set: function set(value) {
            this._rollerWidth = value;
            this._updateScroller();
          },
          min: 0,
          step: 1
        },
        _rollerHeight: 540,
        rollerHeight: {
          get: function get() {
            return this._rollerHeight;
          },
          set: function set(value) {
            this._rollerHeight = value;
            this._updateScroller();
          },
          min: 0,
          step: 1
        },
        rollerScrollRate: {
          default: 1,
          min: .1,
          max: 2,
          step: .05,
          slide: true
        },
        _rollerSymbolResult: [],
        rollerSymbolResult: {
          get: function get() {
            return this._rollerSymbolResult;
          },
          set: function set(value) {
            this._rollerSymbolResult = value;
            var symbols = this._scroller.getComponentsInChildren(Symbol);
            for (var symbolIndex, symbol, i = 0; i < symbols.length - 1; i++) {
              symbol = symbols[i + 1];
              symbolIndex = parseInt(this._rollerSymbolResult[i]);
              isNaN(symbolIndex) || symbolIndex < 0 ? symbol.randomSymbol() : symbol.symbolIndex = symbolIndex;
            }
          }
        },
        _symbolWidth: 180,
        symbolWidth: {
          get: function get() {
            return this._symbolWidth;
          },
          set: function set(value) {
            this._symbolWidth = value;
            this.rollerWidth = this._symbolWidth;
            this._updateSymbolSize();
          },
          min: 0,
          step: 1
        },
        _symbolHeight: 180,
        symbolHeight: {
          get: function get() {
            return this._symbolHeight;
          },
          set: function set(value) {
            this._symbolHeight = value;
            this._updateSymbolSize();
          },
          min: 0,
          step: 1
        },
        symbolEmptySF: {
          default: null,
          type: cc.SpriteFrame,
          notify: function notify() {
            this._updateSymbolSpriteFrame();
          }
        },
        symbolRollSF: [ cc.SpriteFrame ],
        symbolBlurSF: [ cc.SpriteFrame ],
        _doScrollling: false,
        _isScrolling: false,
        isSpinning: {
          readonly: true,
          get: function get() {
            return true == this._doScrollling || true == this._isScrolling;
          }
        }
      },
      onLoad: function onLoad() {
        this._scroller = this.node.getChildByName("scroller") || new cc.Node();
        this._scroller.name = "scroller";
        this._scroller.removeFromParent(false);
        this.node.addChild(this._scroller);
        var mask = this._scroller.getComponent(cc.Mask) || this._scroller.addComponent(cc.Mask);
        this._updateScroller();
        this._updateSymbolSize();
        this._updateSymbolSpriteFrame();
        this.rollerSymbolResult = [];
        this._customRollerResult = [];
      },
      setRollerSize: function setRollerSize(width, height) {
        this._rollerWidth = width;
        this._rollerHeight = height;
        this._updateScroller();
      },
      _updateScroller: function _updateScroller() {
        this.node.width = this._scroller.width = this.rollerWidth;
        this.node.height = this._scroller.height = this.rollerHeight;
      },
      _createSymbols: function _createSymbols() {
        this._scroller.removeAllChildren();
        if (this.rollerRows > 0) {
          for (var symbol, i = 0; i < this.rollerRows + 1; i++) {
            symbol = new cc.Node();
            symbol.name = "symbol_" + i;
            symbol.addComponent(Symbol);
            this._scroller.addChild(symbol);
          }
          this._updateSymbolSize();
          this._updateSymbolSpriteFrame();
        }
      },
      _updateSymbolSize: function _updateSymbolSize() {
        var symbols = this._scroller.getComponentsInChildren(Symbol);
        this._rollerTopBound = this.symbolHeight * (this.rollerRows + 1) / 2;
        this._rollerBottomBound = -this.symbolHeight * (this.rollerRows + 1) / 2;
        symbols.forEach(function(symbol, index, array) {
          symbol.symbolWidth = this.symbolWidth;
          symbol.symbolHeight = this.symbolHeight;
          symbol.node.y = this._rollerTopBound - symbol.symbolHeight * index;
        }, this);
        this.rollerHeight = this.symbolHeight * this.rollerRows;
      },
      _updateSymbolSpriteFrame: function _updateSymbolSpriteFrame() {
        var symbols = this._scroller.getComponentsInChildren(Symbol);
        symbols.forEach(function(symbol, index, array) {
          symbol.isBlur = false;
          symbol.symbolEmptySF = this.symbolEmptySF;
          symbol.symbolRollSF = this.symbolRollSF;
          symbol.symbolBlurSF = this.symbolBlurSF;
        }, this);
      },
      setSymbolSize: function setSymbolSize(width, height) {
        this._symbolWidth = width;
        this._symbolHeight = height;
        this._updateSymbolSize();
      },
      update: function update(dt) {
        var step = Math.ceil(.15 * this.symbolHeight * this.rollerScrollRate);
        if (this._isScrolling) {
          var symbols = this._scroller.getComponentsInChildren(Symbol);
          symbols.forEach(function(symbol, index, array) {
            var nextPosition = symbol.node.y - step;
            if (nextPosition < this._rollerBottomBound) {
              if (this._doScrollling || this._rollerSymbolResult.length < this.rollerRows) {
                symbol.randomSymbol();
                this._rollerSymbolResult.unshift(symbol.symbolIndex);
              } else if (this._customRollerResult.length > 0) {
                symbol.symbolIndex = this._customRollerResult.pop();
                this._rollerSymbolResult.unshift(symbol.symbolIndex);
              } else this._isScrolling = false;
              nextPosition = this._rollerTopBound - (this._rollerBottomBound - nextPosition);
            }
            symbol.node.y = nextPosition;
          }, this);
          if (false == this._isScrolling) {
            this._rollerSymbolResult = this._rollerSymbolResult.slice(0, this.rollerRows);
            this._readyStopSpin();
          }
        }
      },
      _readyStartSpin: function _readyStartSpin() {
        var symbols = this._scroller.getComponentsInChildren(Symbol);
        symbols.forEach(function(symbol, index, array) {
          var shakeStep = Math.ceil(.2 * this.symbolHeight * this.rollerScrollRate);
          var action = cc.sequence(cc.moveBy(.1, 0, shakeStep), cc.callFunc(function() {
            symbol.isBlur = true;
            symbol.node.y = Math.ceil(symbol.node.y);
            index == array.length - 1 && (this._isScrolling = true);
          }, this));
          symbol.node.runAction(action);
        }, this);
      },
      _readyStopSpin: function _readyStopSpin() {
        var symbols = this._scroller.getComponentsInChildren(Symbol);
        symbols.forEach(function(symbol, index, array) {
          var remain = this._rollerBottomBound - symbol.node.y;
          var adjustment = symbol.symbolHeight - Math.abs(Math.ceil(remain % symbol.symbolHeight));
          var action = cc.sequence(cc.moveBy(.05, 0, adjustment), cc.callFunc(function() {
            symbol.isBlur = false;
            symbol.node.y = Math.ceil(symbol.node.y);
            if (index == array.length - 1) {
              cc.log("Final Result:", this._rollerSymbolResult);
              this._doScrollling = false;
            }
          }, this));
          symbol.node.runAction(action);
        }, this);
      },
      _startSpin: function _startSpin() {
        this._doScrollling = true;
        this._rollerSymbolResult = [];
        this._readyStartSpin();
      },
      _stopSpin: function _stopSpin() {
        this._doScrollling = false;
      },
      spin: function spin() {
        this._doScrollling || this._isScrolling || this._startSpin();
      },
      stop: function stop(customResult) {
        if (this._doScrollling && this._isScrolling) {
          this._customRollerResult = [ customResult ] || [];
          this._stopSpin();
        }
      },
      toggleSpin: function toggleSpin(customResult) {
        this.isSpinning ? this.stop(customResult) : this.spin();
      }
    });
    cc._RF.pop();
  }, {
    "slot.Symbol": "slot.Symbol"
  } ],
  "slot.Symbol": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26f65S90H9KtYMdipUy38Ht", "slot.Symbol");
    "use strict";
    var _properties;
    var Symbol = cc.Class({
      extends: cc.Component,
      editor: {
        disallowMultiple: false,
        executeInEditMode: true
      },
      properties: (_properties = {
        _symbolIndex: 0,
        symbolIndex: {
          get: function get() {
            return this._symbolIndex;
          },
          set: function set(value) {
            var index = value % this.symbolRollSF.length;
            this._symbolIndex = isNaN(index) ? value : index;
            this.isBlur = this.isBlur;
          },
          min: 0,
          step: 1
        },
        _isBlur: false,
        isBlur: {
          get: function get() {
            return this._isBlur;
          },
          set: function set(value) {
            this._isBlur = value;
            this._isBlur && this.symbolBlurSF[this._symbolIndex] ? this._sprite.spriteFrame = this.symbolBlurSF[this._symbolIndex] : this.symbolRollSF[this._symbolIndex] ? this._sprite.spriteFrame = this.symbolRollSF[this._symbolIndex] : this._sprite.spriteFrame = this.symbolEmptySF;
          }
        },
        _symbolWidth: 120,
        symbolWidth: {
          get: function get() {
            return this.node.width;
          },
          set: function set(value) {
            this.node.width = value;
          },
          min: 0,
          step: 1
        },
        _symbolHeight: 120,
        symbolHeight: {
          get: function get() {
            return this.node.height;
          },
          set: function set(value) {
            this.node.height = value;
          },
          min: 0,
          step: 1
        }
      }, _properties["_isBlur"] = false, _properties.symbolEmptySF = {
        default: null,
        type: cc.SpriteFrame,
        notify: function notify() {
          this.emptySymbol();
        }
      }, _properties.symbolRollSF = [ cc.SpriteFrame ], _properties.symbolBlurSF = [ cc.SpriteFrame ], 
      _properties),
      onLoad: function onLoad() {
        var _this = this;
        this.node.anchorX = .5;
        this.node.anchorY = .5;
        var spriteNode = this.node.getChildByName("symbolSprite") || new cc.Node();
        spriteNode.name = "symbolSprite";
        spriteNode.removeFromParent(false);
        this.node.addChild(spriteNode);
        this._sprite = spriteNode.getComponent(cc.Sprite) || spriteNode.addComponent(cc.Sprite);
        this._sprite.type = 0;
        this._sprite.sizeMode = cc.Sprite.SizeMode.RAW;
        this._sprite.trim = false;
        cc.systemEvent.on("resetSlotSymbolIndex", function(index) {
          _this.symbolIndex = void 0 !== index ? index : 5;
        });
      },
      randomSymbol: function randomSymbol(index) {
        var randomIndex = void 0 !== index ? index : Math.floor(this.symbolRollSF.length * Math.random());
        this.symbolIndex = randomIndex;
      },
      emptySymbol: function emptySymbol() {
        this._sprite.spriteFrame = this.symbolEmptySF;
      }
    });
    cc._RF.pop();
  }, {} ],
  th_TH_tut: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c9f3eJaDlJCYblINDTqM1DA", "th_TH_tut");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tutor = '\u0e40\u0e01\u0e21\u0e19\u0e35\u0e49\u0e21\u0e35\u0e44\u0e27\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e2a\u0e35\u0e48\u0e04\u0e19 \u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e23\u0e31\u0e1a\u0e44\u0e1e\u0e48\u0e21\u0e32\u0e15\u0e23\u0e10\u0e32\u0e19 52 \u0e43\u0e1a \u0e44\u0e21\u0e48\u0e21\u0e35\u0e42\u0e08\u0e4a\u0e01\u0e40\u0e01\u0e2d\u0e23\u0e4c\u0e41\u0e25\u0e30\u0e44\u0e21\u0e48\u0e21\u0e35\u0e44\u0e27\u0e25\u0e14\u0e4c\u0e01\u0e32\u0e23\u0e4c\u0e14 \u0e40\u0e1b\u0e47\u0e19\u0e44\u0e1b\u0e44\u0e14\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e40\u0e25\u0e48\u0e19\u0e2a\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e32\u0e21\u0e04\u0e23\u0e31\u0e49\u0e07 \u0e19\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e19\u0e35\u0e49\u0e22\u0e31\u0e07\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e25\u0e48\u0e19\u0e44\u0e14\u0e49\u0e42\u0e14\u0e22\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e2a\u0e35\u0e48\u0e04\u0e19\u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e0b\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e4c\u0e14 52 \u0e43\u0e1a\u0e2a\u0e2d\u0e07\u0e0a\u0e38\u0e14\u0e2a\u0e31\u0e1a\u0e01\u0e31\u0e19\n\n\u0e42\u0e14\u0e22\u0e1b\u0e01\u0e15\u0e34\u0e40\u0e01\u0e21\u0e08\u0e30\u0e41\u0e08\u0e01\u0e44\u0e1e\u0e48\u0e41\u0e25\u0e30\u0e40\u0e25\u0e48\u0e19\u0e15\u0e32\u0e21\u0e40\u0e02\u0e47\u0e21\u0e19\u0e32\u0e2c\u0e34\u0e01\u0e32 \u0e41\u0e15\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e25\u0e48\u0e19\u0e17\u0e27\u0e19\u0e40\u0e02\u0e47\u0e21\u0e19\u0e32\u0e2c\u0e34\u0e01\u0e32\u0e41\u0e17\u0e19\u0e44\u0e14\u0e49\u0e2b\u0e32\u0e01\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e15\u0e01\u0e25\u0e07\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e08\u0e30\u0e17\u0e33\u0e40\u0e0a\u0e48\u0e19\u0e19\u0e31\u0e49\u0e19\n\n\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2d\u0e31\u0e19\u0e14\u0e31\u0e1a\u0e44\u0e1e\u0e48\u0e04\u0e37\u0e2d\u0e2a\u0e2d\u0e07 (\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14), \u0e40\u0e2d\u0e0b, \u0e04\u0e34\u0e07, \u0e04\u0e27\u0e35\u0e19, \u0e41\u0e08\u0e47\u0e04, \u0e2a\u0e34\u0e1a, \u0e40\u0e01\u0e49\u0e32, \u0e41\u0e1b\u0e14, \u0e40\u0e08\u0e47\u0e14, \u0e2b\u0e01, \u0e2b\u0e49\u0e32, \u0e2a\u0e35\u0e48, \u0e2a\u0e32\u0e21 (\u0e15\u0e48\u0e33\u0e2a\u0e38\u0e14)\n\n\u0e20\u0e32\u0e22\u0e43\u0e19\u0e41\u0e15\u0e48\u0e25\u0e30\u0e2d\u0e31\u0e19\u0e14\u0e31\u0e1a\u0e22\u0e31\u0e07\u0e21\u0e35\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e02\u0e2d\u0e07\u0e0a\u0e38\u0e14: Hearts (\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14), Diamonds, Clubs, Spades (\u0e15\u0e48\u0e33\u0e2a\u0e38\u0e14)\n\n\u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19\u0e44\u0e1e\u0e48 3 \u0e42\u0e1e\u0e14\u0e33\u0e08\u0e36\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e1e\u0e48\u0e17\u0e35\u0e48\u0e15\u0e48\u0e33\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e43\u0e19\u0e41\u0e1e\u0e47\u0e04\u0e41\u0e25\u0e30\u0e44\u0e1e\u0e48 2 \u0e43\u0e1a\u0e02\u0e2d\u0e07 Hearts \u0e19\u0e31\u0e49\u0e19\u0e2a\u0e39\u0e07\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14 \u0e2d\u0e31\u0e19\u0e14\u0e31\u0e1a\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e04\u0e27\u0e32\u0e21\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e0a\u0e48\u0e19 8 \u0e0a\u0e19\u0e30 7\n\n\u0e02\u0e49\u0e2d\u0e15\u0e01\u0e25\u0e07\n\n\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e01\u0e21\u0e41\u0e23\u0e01\u0e40\u0e08\u0e49\u0e32\u0e21\u0e37\u0e2d\u0e08\u0e30\u0e16\u0e39\u0e01\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e41\u0e1a\u0e1a\u0e2a\u0e38\u0e48\u0e21 \u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19\u0e1c\u0e39\u0e49\u0e41\u0e1e\u0e49\u0e02\u0e2d\u0e07\u0e41\u0e15\u0e48\u0e25\u0e30\u0e40\u0e01\u0e21\u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e15\u0e48\u0e2d\u0e44\u0e1b \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e21\u0e35\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e2a\u0e35\u0e48\u0e04\u0e19\u0e44\u0e1e\u0e48 13 \u0e43\u0e1a\u0e08\u0e30\u0e16\u0e39\u0e01\u0e41\u0e08\u0e01\u0e43\u0e2b\u0e49\u0e01\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e41\u0e15\u0e48\u0e25\u0e30\u0e04\u0e19\n\n\u0e2b\u0e32\u0e01\u0e21\u0e35\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e19\u0e49\u0e2d\u0e22\u0e01\u0e27\u0e48\u0e32\u0e2a\u0e35\u0e48\u0e04\u0e19\u0e08\u0e30\u0e22\u0e31\u0e07\u0e04\u0e07\u0e41\u0e08\u0e01\u0e44\u0e1e\u0e48 13 \u0e43\u0e1a\u0e43\u0e2b\u0e49\u0e01\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e41\u0e15\u0e48\u0e25\u0e30\u0e04\u0e19\u0e41\u0e25\u0e30\u0e08\u0e30\u0e21\u0e35\u0e44\u0e1e\u0e48\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e2d\u0e22\u0e39\u0e48\u0e0b\u0e36\u0e48\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e40\u0e01\u0e21 \u0e2d\u0e35\u0e01\u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e2a\u0e32\u0e21\u0e04\u0e19\u0e04\u0e37\u0e2d\u0e15\u0e32\u0e21\u0e02\u0e49\u0e2d\u0e15\u0e01\u0e25\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e08\u0e30\u0e41\u0e08\u0e01\u0e44\u0e1e\u0e48 17 \u0e43\u0e1a\u0e15\u0e48\u0e2d\u0e04\u0e19 \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e21\u0e35\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e2a\u0e2d\u0e07\u0e04\u0e19\u0e04\u0e27\u0e23\u0e41\u0e08\u0e01\u0e44\u0e1e\u0e48\u0e43\u0e2b\u0e49\u0e04\u0e19\u0e25\u0e30 13 \u0e43\u0e1a\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19 - \u0e2b\u0e32\u0e01\u0e44\u0e1e\u0e48\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e41\u0e08\u0e01\u0e41\u0e08\u0e07\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e08\u0e30\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e0a\u0e49\u0e21\u0e37\u0e2d\u0e02\u0e2d\u0e07\u0e01\u0e31\u0e19\u0e41\u0e25\u0e30\u0e01\u0e31\u0e19\u0e44\u0e14\u0e49\u0e0b\u0e36\u0e48\u0e07\u0e08\u0e30\u0e17\u0e33\u0e43\u0e2b\u0e49\u0e40\u0e01\u0e21\u0e40\u0e2a\u0e35\u0e22 \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e21\u0e35\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e2a\u0e35\u0e48\u0e04\u0e19\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e15\u0e01\u0e25\u0e07\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e44\u0e14\u0e49\u0e27\u0e48\u0e32\u0e08\u0e30\u0e41\u0e08\u0e01\u0e44\u0e1e\u0e48 13 \u0e43\u0e1a\u0e08\u0e32\u0e01\u0e44\u0e1e\u0e48\u0e2a\u0e2d\u0e07\u0e2a\u0e33\u0e23\u0e31\u0e1a\u0e2b\u0e23\u0e37\u0e2d\u0e41\u0e08\u0e01\u0e44\u0e1e\u0e48\u0e43\u0e2b\u0e49\u0e21\u0e32\u0e01\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e40\u0e17\u0e48\u0e32\u0e17\u0e35\u0e48\u0e08\u0e30\u0e17\u0e33\u0e44\u0e14\u0e49\u0e43\u0e2b\u0e49\u0e01\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\n\n\u0e01\u0e32\u0e23\u0e40\u0e25\u0e48\u0e19\n\n\u0e43\u0e19\u0e40\u0e01\u0e21\u0e41\u0e23\u0e01\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e17\u0e35\u0e48\u0e21\u0e35 3 Spades \u0e08\u0e30\u0e40\u0e23\u0e34\u0e48\u0e21\u0e40\u0e25\u0e48\u0e19 \u0e2b\u0e32\u0e01\u0e44\u0e21\u0e48\u0e21\u0e35\u0e43\u0e04\u0e23\u0e21\u0e35\u0e44\u0e1e\u0e48 3 \u0e43\u0e1a (\u0e43\u0e19\u0e40\u0e01\u0e21\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e2a\u0e32\u0e21\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e2d\u0e07\u0e04\u0e19) \u0e43\u0e04\u0e23\u0e01\u0e47\u0e15\u0e32\u0e21\u0e17\u0e35\u0e48\u0e16\u0e37\u0e2d\u0e44\u0e1e\u0e48\u0e15\u0e48\u0e33\u0e2a\u0e38\u0e14\u0e08\u0e30\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19 \u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e14\u0e49\u0e27\u0e22\u0e01\u0e32\u0e23\u0e40\u0e25\u0e48\u0e19\u0e44\u0e1e\u0e48\u0e43\u0e1a\u0e17\u0e35\u0e48\u0e15\u0e48\u0e33\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e19\u0e35\u0e49\u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e08\u0e30\u0e14\u0e49\u0e27\u0e22\u0e15\u0e31\u0e27\u0e40\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e23\u0e27\u0e21\u0e01\u0e31\u0e19\n\n\u0e43\u0e19\u0e40\u0e01\u0e21\u0e15\u0e48\u0e2d \u0e46 \u0e44\u0e1b\u0e1c\u0e39\u0e49\u0e0a\u0e19\u0e30\u0e02\u0e2d\u0e07\u0e40\u0e01\u0e21\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e08\u0e30\u0e44\u0e14\u0e49\u0e40\u0e25\u0e48\u0e19\u0e01\u0e48\u0e2d\u0e19\u0e41\u0e25\u0e30\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e14\u0e49\u0e27\u0e22\u0e0a\u0e38\u0e14\u0e04\u0e48\u0e32\u0e1c\u0e2a\u0e21\u0e43\u0e14\u0e01\u0e47\u0e44\u0e14\u0e49\n\n\u0e43\u0e19\u0e17\u0e32\u0e07\u0e01\u0e25\u0e31\u0e1a\u0e01\u0e31\u0e19\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e41\u0e15\u0e48\u0e25\u0e30\u0e04\u0e19\u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e44\u0e1e\u0e48\u0e17\u0e35\u0e48\u0e40\u0e25\u0e48\u0e19\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e19\u0e35\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e1e\u0e48\u0e1c\u0e2a\u0e21\u0e01\u0e31\u0e19\u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e40\u0e25\u0e48\u0e19\u0e44\u0e1e\u0e48\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e1e\u0e48\u0e23\u0e27\u0e21\u0e01\u0e31\u0e19\u0e17\u0e35\u0e48\u0e0a\u0e19\u0e30\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e48\u0e07\u0e1c\u0e48\u0e32\u0e19\u0e41\u0e25\u0e30\u0e44\u0e21\u0e48\u0e40\u0e25\u0e48\u0e19\u0e44\u0e1e\u0e48\u0e43\u0e14 \u0e46 \u0e01\u0e32\u0e23\u0e4c\u0e14\u0e17\u0e35\u0e48\u0e40\u0e25\u0e48\u0e19\u0e08\u0e30\u0e16\u0e39\u0e01\u0e27\u0e32\u0e07\u0e43\u0e19\u0e01\u0e2d\u0e07\u0e42\u0e14\u0e22\u0e2b\u0e07\u0e32\u0e22\u0e2b\u0e19\u0e49\u0e32\u0e02\u0e36\u0e49\u0e19\u0e15\u0e23\u0e07\u0e01\u0e25\u0e32\u0e07\u0e42\u0e15\u0e4a\u0e30 \u0e01\u0e32\u0e23\u0e40\u0e25\u0e48\u0e19\u0e08\u0e30\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e44\u0e1b\u0e23\u0e2d\u0e1a \u0e46 \u0e42\u0e15\u0e4a\u0e30\u0e2b\u0e25\u0e32\u0e22 \u0e46 \u0e04\u0e23\u0e31\u0e49\u0e07\u0e40\u0e17\u0e48\u0e32\u0e17\u0e35\u0e48\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e08\u0e19\u0e01\u0e27\u0e48\u0e32\u0e08\u0e30\u0e21\u0e35\u0e04\u0e19\u0e40\u0e25\u0e48\u0e19\u0e44\u0e1e\u0e48\u0e2b\u0e23\u0e37\u0e2d\u0e0a\u0e38\u0e14\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e21\u0e35\u0e43\u0e04\u0e23\u0e0a\u0e19\u0e30 \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e40\u0e01\u0e34\u0e14\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e40\u0e0a\u0e48\u0e19\u0e19\u0e35\u0e49\u0e44\u0e1e\u0e48\u0e17\u0e35\u0e48\u0e40\u0e25\u0e48\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e08\u0e30\u0e16\u0e39\u0e01\u0e27\u0e32\u0e07\u0e17\u0e34\u0e49\u0e07\u0e44\u0e27\u0e49\u0e41\u0e25\u0e30\u0e1c\u0e39\u0e49\u0e17\u0e35\u0e48\u0e40\u0e25\u0e48\u0e19\u0e44\u0e14\u0e49\u0e44\u0e21\u0e48\u0e41\u0e1e\u0e49\u0e43\u0e04\u0e23\u0e08\u0e30\u0e40\u0e23\u0e34\u0e48\u0e21\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e40\u0e25\u0e48\u0e19\u0e44\u0e1e\u0e48\u0e15\u0e32\u0e21\u0e01\u0e0e\u0e2b\u0e21\u0e32\u0e22\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e1e\u0e48\u0e1c\u0e2a\u0e21\u0e43\u0e14 \u0e46 \u0e42\u0e14\u0e22\u0e2b\u0e31\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e40\u0e02\u0e49\u0e32\u0e2b\u0e32\u0e01\u0e25\u0e32\u0e07\u0e42\u0e15\u0e4a\u0e30\n\n\u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e1c\u0e48\u0e32\u0e19\u0e44\u0e1b\u0e04\u0e38\u0e13\u0e08\u0e30\u0e16\u0e39\u0e01\u0e25\u0e47\u0e2d\u0e01\u0e44\u0e21\u0e48\u0e43\u0e2b\u0e49\u0e40\u0e25\u0e48\u0e19\u0e08\u0e19\u0e01\u0e27\u0e48\u0e32\u0e08\u0e30\u0e21\u0e35\u0e04\u0e19\u0e40\u0e25\u0e48\u0e19\u0e42\u0e14\u0e22\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e21\u0e35\u0e43\u0e04\u0e23\u0e0a\u0e19\u0e30 \u0e04\u0e38\u0e13\u0e21\u0e35\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e40\u0e25\u0e48\u0e19\u0e44\u0e1e\u0e48\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19\n\n\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07 (\u0e21\u0e35\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e2a\u0e32\u0e21\u0e04\u0e19): \u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e17\u0e32\u0e07\u0e02\u0e27\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e40\u0e25\u0e48\u0e19\u0e2a\u0e32\u0e21\u0e04\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27\u0e04\u0e38\u0e13\u0e16\u0e37\u0e2d\u0e40\u0e2d\u0e0b \u0e41\u0e15\u0e48\u0e15\u0e31\u0e14\u0e2a\u0e34\u0e19\u0e43\u0e08\u0e17\u0e35\u0e48\u0e08\u0e30\u0e2a\u0e48\u0e07\u0e1c\u0e48\u0e32\u0e19\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e17\u0e32\u0e07\u0e0b\u0e49\u0e32\u0e22\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e40\u0e25\u0e48\u0e19\u0e40\u0e01\u0e49\u0e32\u0e04\u0e19\u0e41\u0e25\u0e30\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e17\u0e32\u0e07\u0e02\u0e27\u0e32\u0e40\u0e25\u0e48\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e23\u0e32\u0e0a\u0e32 \u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49\u0e04\u0e38\u0e13\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e23\u0e32\u0e0a\u0e32\u0e14\u0e49\u0e27\u0e22\u0e40\u0e2d\u0e0b\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e40\u0e1e\u0e23\u0e32\u0e30\u0e04\u0e38\u0e13\u0e1c\u0e48\u0e32\u0e19\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27 \u0e2b\u0e32\u0e01\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e04\u0e19\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e1c\u0e48\u0e32\u0e19\u0e44\u0e1b\u0e14\u0e49\u0e27\u0e22\u0e41\u0e25\u0e30\u0e1d\u0e48\u0e32\u0e22\u0e15\u0e23\u0e07\u0e02\u0e49\u0e32\u0e21\u0e21\u0e37\u0e2d\u0e02\u0e27\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e23\u0e32\u0e0a\u0e34\u0e19\u0e35\u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e25\u0e48\u0e19\u0e40\u0e2d\u0e0b\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e2b\u0e32\u0e01\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\n\n\u0e01\u0e32\u0e23\u0e40\u0e25\u0e48\u0e19\u0e15\u0e32\u0e21\u0e01\u0e0e\u0e2b\u0e21\u0e32\u0e22\u0e43\u0e19\u0e40\u0e01\u0e21\u0e21\u0e35\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49:\n\u0e44\u0e1e\u0e48\u0e43\u0e1a\u0e40\u0e14\u0e35\u0e22\u0e27\u0e44\u0e1e\u0e48\u0e43\u0e1a\u0e40\u0e14\u0e35\u0e22\u0e27\u0e17\u0e35\u0e48\u0e15\u0e48\u0e33\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e04\u0e37\u0e2d\u0e44\u0e1e\u0e48 3 \u0e43\u0e1a\u0e41\u0e25\u0e30\u0e43\u0e1a\u0e17\u0e35\u0e48\u0e2a\u0e39\u0e07\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e04\u0e37\u0e2d\u0e44\u0e1e\u0e48 2 \u0e43\u0e1a\n\u0e08\u0e31\u0e1a\u0e04\u0e39\u0e48\u0e44\u0e1e\u0e48\u0e2a\u0e2d\u0e07\u0e43\u0e1a\u0e17\u0e35\u0e48\u0e21\u0e35\u0e2d\u0e31\u0e19\u0e14\u0e31\u0e1a\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19\u0e40\u0e0a\u0e48\u0e19 7-7 \u0e2b\u0e23\u0e37\u0e2d Q-Q\n\u0e44\u0e1e\u0e48\u0e2a\u0e32\u0e21\u0e43\u0e1a\u0e43\u0e19\u0e2d\u0e31\u0e19\u0e14\u0e31\u0e1a\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19 - \u0e40\u0e0a\u0e48\u0e19 5-5-5\n\u0e44\u0e1e\u0e48\u0e2a\u0e35\u0e48\u0e43\u0e1a\u0e17\u0e35\u0e48\u0e21\u0e35\u0e2d\u0e31\u0e19\u0e14\u0e31\u0e1a\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19 - \u0e40\u0e0a\u0e48\u0e19 9-9-9-9\n\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e44\u0e1e\u0e48\u0e2a\u0e32\u0e21\u0e43\u0e1a\u0e02\u0e36\u0e49\u0e19\u0e44\u0e1b\u0e17\u0e35\u0e48\u0e21\u0e35\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e15\u0e48\u0e2d\u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e31\u0e19 (\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e1c\u0e2a\u0e21\u0e0a\u0e38\u0e14\u0e44\u0e14\u0e49) \u0e40\u0e0a\u0e48\u0e19 4-5-6 \u0e2b\u0e23\u0e37\u0e2d J-Q-K-A \u0e25\u0e33\u0e14\u0e31\u0e1a\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16 "\u0e1e\u0e25\u0e34\u0e01\u0e21\u0e38\u0e21" \u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e2a\u0e2d\u0e07\u0e16\u0e36\u0e07\u0e2a\u0e32\u0e21 - A-2-3 \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e32\u0e01 2 \u0e2a\u0e39\u0e07\u0e41\u0e25\u0e30 3 \u0e15\u0e48\u0e33\n\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e04\u0e39\u0e48 3 \u0e04\u0e39\u0e48\u0e02\u0e36\u0e49\u0e19\u0e44\u0e1b\u0e02\u0e2d\u0e07\u0e2d\u0e31\u0e19\u0e14\u0e31\u0e1a\u0e17\u0e35\u0e48\u0e15\u0e48\u0e2d\u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e31\u0e19\u0e40\u0e0a\u0e48\u0e19 3-3-4-4-5-5 \u0e2b\u0e23\u0e37\u0e2d 6-6-7-7-8-8-9-9\n\n\u0e42\u0e14\u0e22\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b\u0e01\u0e32\u0e23\u0e1c\u0e2a\u0e21\u0e08\u0e30\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e44\u0e14\u0e49\u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e1c\u0e2a\u0e21\u0e17\u0e35\u0e48\u0e2a\u0e39\u0e07\u0e01\u0e27\u0e48\u0e32\u0e02\u0e2d\u0e07\u0e44\u0e1e\u0e48\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19\u0e41\u0e25\u0e30\u0e08\u0e33\u0e19\u0e27\u0e19\u0e44\u0e1e\u0e48\u0e40\u0e17\u0e48\u0e32\u0e01\u0e31\u0e19 \u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19\u0e2b\u0e32\u0e01\u0e19\u0e33\u0e44\u0e1e\u0e48\u0e43\u0e1a\u0e40\u0e14\u0e35\u0e22\u0e27\u0e08\u0e30\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e25\u0e48\u0e19\u0e44\u0e1e\u0e48\u0e43\u0e1a\u0e40\u0e14\u0e35\u0e22\u0e27\u0e44\u0e14\u0e49\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19 \u0e16\u0e49\u0e32\u0e04\u0e39\u0e48\u0e19\u0e33\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e25\u0e48\u0e19\u0e44\u0e14\u0e49; \u0e25\u0e33\u0e14\u0e31\u0e1a\u0e44\u0e1e\u0e48\u0e2a\u0e32\u0e21\u0e43\u0e1a\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e44\u0e14\u0e49\u0e42\u0e14\u0e22\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e44\u0e1e\u0e48\u0e2a\u0e32\u0e21\u0e43\u0e1a\u0e17\u0e35\u0e48\u0e2a\u0e39\u0e07\u0e01\u0e27\u0e48\u0e32\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19 \u0e41\u0e25\u0e30\u0e2d\u0e37\u0e48\u0e19 \u0e46 \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e0a\u0e48\u0e19\u0e04\u0e38\u0e13\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e04\u0e39\u0e48\u0e14\u0e49\u0e27\u0e22\u0e44\u0e1e\u0e48\u0e2a\u0e32\u0e21\u0e43\u0e1a\u0e2b\u0e23\u0e37\u0e2d\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e44\u0e1e\u0e48\u0e2a\u0e35\u0e48\u0e43\u0e1a\u0e17\u0e35\u0e48\u0e21\u0e35\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e44\u0e1e\u0e48\u0e2b\u0e49\u0e32\u0e43\u0e1a\n\n\u0e43\u0e19\u0e01\u0e32\u0e23\u0e15\u0e31\u0e14\u0e2a\u0e34\u0e19\u0e43\u0e08\u0e27\u0e48\u0e32\u0e0a\u0e38\u0e14\u0e04\u0e48\u0e32\u0e1c\u0e2a\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19\u0e43\u0e14\u0e2a\u0e39\u0e07\u0e01\u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e41\u0e04\u0e48\u0e14\u0e39\u0e44\u0e1e\u0e48\u0e17\u0e35\u0e48\u0e2a\u0e39\u0e07\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e43\u0e19\u0e0a\u0e38\u0e14\u0e04\u0e48\u0e32\u0e1c\u0e2a\u0e21 \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e0a\u0e48\u0e19 7-7 \u0e40\u0e15\u0e49\u0e19 7-7 \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e2b\u0e31\u0e27\u0e43\u0e08\u0e40\u0e15\u0e49\u0e19\u0e40\u0e1e\u0e0a\u0e23 \u0e43\u0e19\u0e17\u0e33\u0e19\u0e2d\u0e07\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19 8-9-10 \u0e40\u0e15\u0e49\u0e19 8-9-10 \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e1e\u0e48\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14 (\u0e2b\u0e25\u0e31\u0e01\u0e2a\u0e34\u0e1a) \u0e17\u0e35\u0e48\u0e19\u0e33\u0e21\u0e32\u0e40\u0e1b\u0e23\u0e35\u0e22\u0e1a\u0e40\u0e17\u0e35\u0e22\u0e1a\u0e01\u0e31\u0e19\n\n\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e22\u0e01\u0e40\u0e27\u0e49\u0e19\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e2a\u0e35\u0e48\u0e02\u0e49\u0e2d\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e0e\u0e17\u0e35\u0e48\u0e27\u0e48\u0e32\u0e0a\u0e38\u0e14\u0e04\u0e48\u0e32\u0e1c\u0e2a\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e44\u0e14\u0e49\u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e23\u0e27\u0e21\u0e01\u0e31\u0e19\u0e02\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19:\n\n\u0e44\u0e1e\u0e48\u0e2a\u0e35\u0e48\u0e43\u0e1a\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e44\u0e1e\u0e48\u0e2a\u0e2d\u0e07\u0e43\u0e1a\u0e43\u0e14\u0e01\u0e47\u0e44\u0e14\u0e49 (\u0e41\u0e15\u0e48\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e44\u0e1e\u0e48\u0e43\u0e1a\u0e40\u0e14\u0e35\u0e22\u0e27\u0e2d\u0e37\u0e48\u0e19 \u0e46 \u0e40\u0e0a\u0e48\u0e19\u0e40\u0e2d\u0e0b\u0e2b\u0e23\u0e37\u0e2d\u0e23\u0e32\u0e0a\u0e32) \u0e2a\u0e35\u0e48\u0e0a\u0e19\u0e34\u0e14\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e44\u0e14\u0e49\u0e14\u0e49\u0e27\u0e22\u0e2a\u0e35\u0e48\u0e0a\u0e19\u0e34\u0e14\u0e17\u0e35\u0e48\u0e2a\u0e39\u0e07\u0e01\u0e27\u0e48\u0e32\n\n\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e02\u0e2d\u0e07\u0e2a\u0e32\u0e21\u0e04\u0e39\u0e48 (\u0e40\u0e0a\u0e48\u0e19 7-7-8-8-9-9) \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e44\u0e1e\u0e48\u0e2a\u0e2d\u0e07\u0e43\u0e1a\u0e43\u0e14\u0e01\u0e47\u0e44\u0e14\u0e49 (\u0e41\u0e15\u0e48\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e44\u0e1e\u0e48\u0e43\u0e1a\u0e40\u0e14\u0e35\u0e22\u0e27\u0e2d\u0e37\u0e48\u0e19 \u0e46 ) \u0e25\u0e33\u0e14\u0e31\u0e1a\u0e02\u0e2d\u0e07\u0e2a\u0e32\u0e21\u0e04\u0e39\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e42\u0e14\u0e22\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e17\u0e35\u0e48\u0e2a\u0e39\u0e07\u0e01\u0e27\u0e48\u0e32\u0e02\u0e2d\u0e07\u0e2a\u0e32\u0e21\u0e04\u0e39\u0e48\n\n\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e02\u0e2d\u0e07\u0e2a\u0e35\u0e48\u0e04\u0e39\u0e48 (\u0e40\u0e0a\u0e48\u0e19 5-5-6-6-7-7-8-8) \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e04\u0e39\u0e48\u0e02\u0e2d\u0e07\u0e2a\u0e2d\u0e07\u0e04\u0e39\u0e48\u0e44\u0e14\u0e49 (\u0e41\u0e15\u0e48\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e04\u0e39\u0e48\u0e2d\u0e37\u0e48\u0e19 \u0e46 ) \u0e25\u0e33\u0e14\u0e31\u0e1a\u0e02\u0e2d\u0e07\u0e2a\u0e35\u0e48\u0e04\u0e39\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e42\u0e14\u0e22\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e17\u0e35\u0e48\u0e2a\u0e39\u0e07\u0e01\u0e27\u0e48\u0e32\u0e02\u0e2d\u0e07\u0e2a\u0e35\u0e48\u0e04\u0e39\u0e48\n\n\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e02\u0e2d\u0e07\u0e2b\u0e49\u0e32\u0e04\u0e39\u0e48 (\u0e40\u0e0a\u0e48\u0e19 8-8-9-9-10-10-J-J-Q-Q) \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e40\u0e0b\u0e15\u0e02\u0e2d\u0e07\u0e2a\u0e32\u0e21\u0e04\u0e39\u0e48\u0e44\u0e14\u0e49 (\u0e41\u0e15\u0e48\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e2d\u0e35\u0e01\u0e2a\u0e32\u0e21\u0e04\u0e39\u0e48) \u0e25\u0e33\u0e14\u0e31\u0e1a\u0e02\u0e2d\u0e07\u0e2b\u0e49\u0e32\u0e04\u0e39\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e42\u0e14\u0e22\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e17\u0e35\u0e48\u0e2a\u0e39\u0e07\u0e01\u0e27\u0e48\u0e32\u0e02\u0e2d\u0e07\u0e2b\u0e49\u0e32\u0e04\u0e39\u0e48\n\n\u0e0a\u0e38\u0e14\u0e04\u0e48\u0e32\u0e1c\u0e2a\u0e21\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e04\u0e39\u0e48\u0e40\u0e14\u0e35\u0e48\u0e22\u0e27\u0e2b\u0e23\u0e37\u0e2d\u0e0a\u0e38\u0e14\u0e2a\u0e2d\u0e07\u0e0a\u0e38\u0e14\u0e1a\u0e32\u0e07\u0e04\u0e23\u0e31\u0e49\u0e07\u0e40\u0e23\u0e35\u0e22\u0e01\u0e27\u0e48\u0e32\u0e23\u0e30\u0e40\u0e1a\u0e34\u0e14\u0e2b\u0e23\u0e37\u0e2d\u0e23\u0e30\u0e40\u0e1a\u0e34\u0e14\u0e2a\u0e2d\u0e07\u0e25\u0e39\u0e01\u0e41\u0e25\u0e30\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e25\u0e48\u0e19\u0e44\u0e14\u0e49\u0e41\u0e21\u0e49\u0e01\u0e23\u0e30\u0e17\u0e31\u0e48\u0e07\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e17\u0e35\u0e48\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e19\u0e35\u0e49\n\n\u0e42\u0e1b\u0e23\u0e14\u0e17\u0e23\u0e32\u0e1a\u0e27\u0e48\u0e32\u0e02\u0e49\u0e2d\u0e22\u0e01\u0e40\u0e27\u0e49\u0e19\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e43\u0e0a\u0e49\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e15\u0e35\u0e2a\u0e2d\u0e07\u0e43\u0e1a\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e44\u0e1e\u0e48\u0e2d\u0e37\u0e48\u0e19 \u0e46 \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e0a\u0e48\u0e19\u0e16\u0e49\u0e32\u0e21\u0e35\u0e04\u0e19\u0e40\u0e25\u0e48\u0e19\u0e40\u0e2d\u0e0b\u0e04\u0e38\u0e13\u0e08\u0e30\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e21\u0e31\u0e19\u0e14\u0e49\u0e27\u0e22\u0e40\u0e2d\u0e0b\u0e17\u0e31\u0e49\u0e07\u0e2a\u0e35\u0e48\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49 \u0e41\u0e15\u0e48\u0e16\u0e49\u0e32\u0e40\u0e2d\u0e0b\u0e16\u0e39\u0e01\u0e2a\u0e2d\u0e07\u0e04\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e04\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2a\u0e35\u0e48\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e01\u0e47\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e0a\u0e49\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e2d\u0e32\u0e0a\u0e19\u0e30\u0e17\u0e31\u0e49\u0e07\u0e2a\u0e2d\u0e07\u0e44\u0e14\u0e49';
    exports.default = tutor;
    cc._RF.pop();
  }, {} ],
  th_TH: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b07by6DGRJu75lIR9EK7nZ", "th_TH");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var th_TH_tut_1 = require("./th_TH_tut");
    exports.default = {
      PLAYNOW: "\u0e40\u0e25\u0e48\u0e19\u0e40\u0e25\u0e22",
      WIN: "\u0e17\u0e35\u0e48 1",
      LOSE2: "\u0e04\u0e23\u0e31\u0e49\u0e07\u0e17\u0e35\u0e48 2",
      LOSE3: "\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 3",
      LOSE4: "\u0e2d\u0e31\u0e19\u0e14\u0e31\u0e1a 4",
      PLAYER: "\u0e08\u0e33\u0e19\u0e27\u0e19\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19",
      BETNO: "\u0e40\u0e14\u0e34\u0e21\u0e1e\u0e31\u0e19",
      DAILY: "\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e23\u0e32\u0e22\u0e27\u0e31\u0e19",
      D1: "\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 1",
      D2: "\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 2",
      D3: "\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 3",
      D4: "\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 4",
      D5: "\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 5",
      D6: "\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 6",
      D7: "\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 7",
      "3TURNS": "3 \u0e23\u0e2d\u0e1a",
      "5TURNS": "5 \u0e23\u0e2d\u0e1a",
      TURNS: "\u0e23\u0e2d\u0e1a",
      RECEIVED: "\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a",
      LEADER: "\u0e25\u0e35\u0e14\u0e40\u0e14\u0e2d\u0e23\u0e4c\u0e1a\u0e2d\u0e23\u0e4c\u0e14",
      NOVIDEO: "\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e25\u0e48\u0e19\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e44\u0e14\u0e49\u0e43\u0e19\u0e02\u0e13\u0e30\u0e19\u0e35\u0e49",
      BET: "\u0e40\u0e14\u0e34\u0e21\u0e1e\u0e31\u0e19",
      NO: "\u0e08\u0e33\u0e19\u0e27\u0e19",
      PASS: "\u0e1c\u0e48\u0e32\u0e19",
      HIT: "\u0e15\u0e35",
      ARRANGE: "\u0e08\u0e31\u0e14",
      QUITGAME: "\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e40\u0e01\u0e21",
      QUITGAMEP: "\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e40\u0e01\u0e21\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48? \u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e40\u0e01\u0e21\u0e04\u0e38\u0e13\u0e08\u0e30\u0e40\u0e2a\u0e35\u0e22\u0e2a\u0e34\u0e1a\u0e40\u0e17\u0e48\u0e32\u0e02\u0e2d\u0e07\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e21\u0e1e\u0e31\u0e19",
      QUIT: "\u0e40\u0e25\u0e34\u0e01",
      "3PAIRS": "3 \u0e04\u0e39\u0e48\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e01\u0e31\u0e19",
      "4PAIRS": "4 \u0e04\u0e39\u0e48\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e01\u0e31\u0e19",
      FOURKIND: "\u0e2a\u0e35\u0e48\u0e0a\u0e19\u0e34\u0e14",
      FLUSH: "\u0e2a\u0e40\u0e15\u0e23\u0e17\u0e1f\u0e25\u0e31\u0e0a",
      "1BEST": "\u0e14\u0e35\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14",
      "2BEST": "2 \u0e14\u0e35\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14",
      "3BEST": "3 \u0e14\u0e35\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14",
      INSTRUCT: "\u0e04\u0e33\u0e41\u0e19\u0e30\u0e19\u0e33",
      NOMONEY: "\u0e04\u0e38\u0e13\u0e2b\u0e21\u0e14\u0e40\u0e07\u0e34\u0e19\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e1a\u0e40\u0e07\u0e34\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e21",
      RECEI2: "\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a",
      SPINNOW: "\u0e2b\u0e21\u0e38\u0e19",
      SPIN: "\u0e2b\u0e21\u0e38\u0e19",
      "1TURN": "\u0e2d\u0e35\u0e01 1 \u0e40\u0e17\u0e34\u0e23\u0e4c\u0e19",
      LUCKYSPIN: "\u0e2b\u0e21\u0e38\u0e19\u0e42\u0e0a\u0e04\u0e14\u0e35",
      LUCK: "\u0e21\u0e35\u0e42\u0e0a\u0e04\u0e43\u0e19\u0e20\u0e32\u0e22\u0e2b\u0e25\u0e31\u0e07",
      TURN: "\u0e2d\u0e35\u0e01\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e40\u0e17\u0e34\u0e23\u0e4c\u0e19",
      X2: "X2 \u0e40\u0e07\u0e34\u0e19",
      X3: "X3 \u0e40\u0e07\u0e34\u0e19",
      X5: "X5 \u0e40\u0e07\u0e34\u0e19",
      X10: "X10 \u0e40\u0e07\u0e34\u0e19",
      MISS: "\u0e19\u0e32\u0e07\u0e2a\u0e32\u0e27",
      MONEY1: "\u0e22\u0e34\u0e19\u0e14\u0e35\u0e14\u0e49\u0e27\u0e22! \u0e04\u0e38\u0e13\u0e21\u0e35\u0e40\u0e07\u0e34\u0e19 %s",
      TUT: th_TH_tut_1.default,
      addSpin: "B\u1ea1n nh\u1eadn \u0111\u01b0\u1ee3c $lq l\u01b0\u1ee3t quay!",
      urvip: "You're VIP, please turn back tomorrow",
      confirmVidHeader: "Notice",
      confirmVidContent: "Watch video to get x2 rewards",
      dailyConfirm: "Watch video to get x2 rewards",
      hettienConfirm: "You've run out of money \n. Watch video to get money",
      endgameConfirm: "Watch video to get 01 free spin",
      vipConfirm: "Watch video to get VIP",
      "\bviewAd": "Watch",
      again: "Again ?"
    };
    cc._RF.pop();
  }, {
    "./th_TH_tut": "th_TH_tut"
  } ],
  tl_PH_tut: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "659f1eXcpxLYqcIXEkkIEA6", "tl_PH_tut");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tutor = "Para sa unang laro, ang dealer ay napili nang sapalaran; pagkatapos ay ang natalo ng bawat laro ay kailangang harapin ang susunod. Kapag mayroong apat na manlalaro, 13 cards ang ibabahagi sa bawat manlalaro.\n\nKung may mas kaunti sa apat na manlalaro, 13 cards pa rin ang nakikitungo sa bawat manlalaro, at magkakaroon ng ilang mga kard na natitira na hindi na ginagamit - hindi ito ginagamit sa laro. Ang isang kahalili sa tatlong mga manlalaro ay, sa pamamagitan ng naunang kasunduan, upang makitungo sa bawat 17 card. Kapag mayroong dalawang manlalaro lamang, 13 card lamang ang bawat isa ay dapat na harapin - kung ang lahat ng mga kard ay naaksyunan ang mga manlalaro ay maaaring mag-ehersisyo ang mga kamay ng bawat isa, na makakasira sa laro. Kapag mayroong higit sa apat na manlalaro, maaari kang sumang-ayon nang maaga alinman sa pakikitungo sa 13 mga kard bawat isa mula sa dobleng deck, o pakikitungo sa maraming mga card hangga't maaari pantay sa mga manlalaro.\n\nAng laro\n\nSa unang laro lamang, ang manlalaro na may 3 ng Spades ay nagsisimulang maglaro. Kung walang sinuman ang mayroong 3 (sa tatlo o dalawang laro ng manlalaro) sinumang may hawak ng pinakamababang card ay nagsisimula. Dapat magsimula ang manlalaro sa pamamagitan ng paglalaro ng pinakamababang card na ito, alinman sa sarili o bilang bahagi ng isang kumbinasyon.\n\nSa kasunod na mga laro, ang nagwagi ng nakaraang laro ay naglalaro muna, at maaaring magsimula sa anumang kumbinasyon.\n\nAng bawat manlalaro naman ay dapat na talunin ang dati nang nilalaro na card o kombinasyon, sa pamamagitan ng paglalaro ng isang card o kombinasyon na pumapalo dito, o pumasa at hindi naglalaro ng anumang mga card. Ang (mga) tinugtog na kard ay inilalagay sa isang magbunton ng mukha sa gitna ng mesa. Ang paglalaro ay paikot-ikot sa talahanayan nang maraming beses hangga't kinakailangan hanggang sa ang isang tao ay maglaro ng isang kard o kumbinasyon na walang ibang natalo. Kapag nangyari ito, ang lahat ng mga pinatugtog na kard ay itinabi, at ang taong ang walang patalo na laro ay nagsisimula muli sa pamamagitan ng paglalaro ng anumang ligal na kard o kombinasyon na nakaharap sa gitna ng mesa.\n\nKung pumasa ka ay naka-lock sa labas ng laro hanggang sa may gumawa ng isang dula na walang nakakatalo. Kapag ang mga kard ay itinabi at ang isang bagong kard o kombinasyon ay pinangungunahan may karapatan kang maglaro muli.\n\nHalimbawa (na may tatlong mga manlalaro): ang manlalaro sa kanan ay gumaganap ng solong tatlo, may hawak kang alas ngunit nagpasya na pumasa, ang manlalaro sa kaliwa ay gumaganap ng siyam at ang manlalaro sa kanan ay gumaganap ng isang hari. Hindi mo matalo ngayon ang hari sa iyong ace, dahil nakapasa ka na. Kung ang pangatlong manlalaro ay pumasa din, at ang iyong kalaban sa kanang kamay ngayon ay humantong sa isang reyna, maaari mo na ngayong i-play ang iyong ace kung nais mo.\n\nAng mga ligal na dula sa laro ay ang mga sumusunod:\nSingle card Ang pinakamababang solong card ay ang 3 at ang pinakamataas ay ang 2.\nIpares ang Dalawang kard ng parehong ranggo - tulad ng 7-7 o Q-Q.\nTatlong Tatlong kard ng magkaparehong ranggo - tulad ng 5-5-5\nApat ng isang uri Apat na kard ng parehong ranggo - tulad ng 9-9-9-9.\nPagkakasunud-sunod Tatlo o higit pang mga kard ng magkakasunod na ranggo (ang mga suit ay maaaring ihalo) - tulad ng 4-5-6 o J-Q-K-A. Ang mga pagkakasunud-sunod ay hindi maaaring \"i-on ang sulok\" sa pagitan ng dalawa at tatlo - Ang A-2-3 ay hindi isang wastong pagkakasunud-sunod dahil ang 2 ay mataas at 3 ay mababa.\nDouble Sequence Tatlo o higit pang mga pares ng magkakasunod na ranggo - tulad ng 3-3-4-4-5-5 o 6-6-7-7-8-8-9-9.\n\nSa pangkalahatan, ang isang kumbinasyon ay maaari lamang matalo ng isang mas mataas na kumbinasyon ng parehong uri at parehong bilang ng mga kard. Kaya't kung ang isang solong card ay hahantong, iisang card lamang ang maaaring i-play; kung ang isang pares ay pinangunahan pares lamang ang maaaring i-play; ang isang pagkakasunud-sunod ng tatlong card ay maaari lamang matalo ng isang mas mataas na pagkakasunud-sunod ng tatlong card; at iba pa. Hindi mo maaaring halimbawa talunin ang isang pares gamit ang isang triple, o isang pagkakasunud-sunod ng apat na card na may isang pagkakasunud-sunod ng limang card.\n\nUpang magpasya kung alin sa dalawang mga kumbinasyon ng parehong uri ang mas mataas ay titingnan mo lamang ang pinakamataas na card na pinagsama. Halimbawa 7-7 beats 7-7 dahil pinapalo ng puso ang brilyante. Sa parehong paraan 8-9-10 beats 8-9-10 sapagkat ito ang pinakamataas na card (ang sampu) na inihambing.\n\nMayroong apat na mga pagbubukod sa panuntunan na ang isang kumbinasyon ay maaari lamang matalo ng isang kumbinasyon ng parehong uri:\n\nAng isang apat na uri ay maaaring matalo ang anumang solong dalawa (ngunit hindi sa anumang iba pang solong card, tulad ng isang alas o hari). Ang isang apat na uri ay maaaring matalo ng mas mataas na apat na uri.\n\nAng isang pagkakasunud-sunod ng tatlong pares (tulad ng 7-7-8-8-9-9) ay maaaring matalo ang anumang solong dalawa (ngunit hindi anumang iba pang solong card). Ang isang pagkakasunud-sunod ng tatlong mga pares ay maaaring matalo ng isang mas mataas na pagkakasunud-sunod ng tatlong mga pares.\n\nAng isang pagkakasunud-sunod ng apat na pares (tulad ng 5-5-6-6-7-7-8-8) ay maaaring matalo ang isang pares ng dalawa (ngunit hindi sa anumang iba pang pares). Ang isang pagkakasunud-sunod ng apat na mga pares ay maaaring matalo ng isang mas mataas na pagkakasunud-sunod ng apat na mga pares.\n\nAng isang pagkakasunud-sunod ng limang pares (tulad ng 8-8-9-9-10-10-J-J-Q-Q) ay maaaring matalo ang isang hanay ng tatlong dalawa (ngunit hindi sa anumang iba pang tatlong uri). Ang isang pagkakasunud-sunod ng limang mga pares ay maaaring matalo ng isang mas mataas na pagkakasunud-sunod ng limang mga pares.\n\nAng mga kumbinasyong ito na maaaring matalo ang mga nag-iisang twos o mga hanay ng dalawa ay paminsan-minsang kilala bilang mga bomba o dalawang-bomba, at maaaring i-play kahit ng isang manlalaro na dati nang lumipas.\n\nTandaan na nalalapat lamang ang mga pagbubukod na ito sa pagkatalo sa dalawa, hindi sa iba pang mga kard. Halimbawa, kung ang isang tao ay naglalaro ng alas ay hindi mo ito matatalo sa iyong apat na uri, ngunit kung ang alas ay pinalo ng dalawa, kung gayon ang iyong apat na uri ay maaaring magamit upang talunin ang dalawa";
    exports.default = tutor;
    cc._RF.pop();
  }, {} ],
  tl_PH: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95e70d0JFBKabdpj8E+Dcll", "tl_PH");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var th_TH_tut_1 = require("./th_TH_tut");
    exports.default = {
      PLAYNOW: "Maglaro",
      WIN: "Ika-1",
      LOSE2: "Ika-2",
      LOSE3: "Ika-3",
      LOSE4: "Ika-4",
      PLAYER: "bilang ng mga manlalaro",
      BETNO: "Taya",
      DAILY: "Daily reward",
      D1: "Araw 1",
      D2: "Araw 2",
      D3: "Araw 3",
      D4: "Araw 4",
      D5: "Araw 5",
      D6: "Araw 6",
      D7: "Araw 7",
      "3TURNS": "3 liko",
      "5TURNS": "5 liko",
      TURNS: "liko",
      RECEIVED: "Habol",
      LEADER: "Leaderboard",
      NOVIDEO: "Hindi maaaring i-play ang video ngayon",
      BET: "Taya",
      NO: "Numero",
      PASS: "Pumasa",
      HIT: "Hit",
      ARRANGE: "Ayusin",
      QUITGAME: "Tumigil sa laro",
      QUITGAMEP: "Kung huminto ka sa laro mawawala sa iyo ng sampung beses bilang antas ng pusta",
      QUIT: "Umalis na",
      "3PAIRS": "3 magkasunod na pares",
      "4PAIRS": "4 magkasunod na pares",
      FOURKIND: "Apat ng isang uri",
      FLUSH: "Straight Flush",
      "1BEST": "pinakamahusay",
      "2BEST": "2 pinakamahusay",
      "3BEST": "3 pinakamahusay",
      INSTRUCT: "Panuto",
      NOMONEY: "Naubusan ka ng pera, mag-click upang makatanggap ng mas maraming pera",
      RECEI2: "Habol",
      SPINNOW: "Paikutin",
      SPIN: "Paikutin",
      "1TURN": "1 pa naman",
      LUCKYSPIN: "masuwerteng paikutin",
      LUCK: "Mag swerte ka mamaya",
      TURN: "Isa pa",
      X2: "X2 pera",
      X3: "X3 pera",
      X5: "X5 pera",
      X10: "X10 pera",
      MISS: "Miss",
      MONEY1: "Pagbati! Mayroon kang %s",
      TUT: th_TH_tut_1.default,
      addSpin: "B\u1ea1n nh\u1eadn \u0111\u01b0\u1ee3c $lq l\u01b0\u1ee3t quay!",
      urvip: "You're VIP, please turn back tomorrow",
      confirmVidHeader: "Notice",
      confirmVidContent: "Watch video to get x2 rewards",
      dailyConfirm: "Watch video to get x2 rewards",
      hettienConfirm: "You've run out of money \n. Watch video to get money",
      endgameConfirm: "Watch video to get 01 free spin",
      vipConfirm: "Watch video to get VIP",
      "\bviewAd": "Watch",
      again: "Again ?"
    };
    cc._RF.pop();
  }, {
    "./th_TH_tut": "th_TH_tut"
  } ],
  use_reversed_rotateBy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd02fL4CqJITr6/oDI+73WZ", "use_reversed_rotateBy");
    "use strict";
    cc.RotateBy._reverse = true;
    cc._RF.pop();
  }, {} ],
  util: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5164dU8pUhEeacqN2jObHLU", "util");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Api_1 = require("./Api");
    var util = function() {
      function util() {}
      util.preloadAssetCard = function() {
        if (util.assetCard) return;
        cc.resources.load("cards", cc.SpriteAtlas, function(err, atlas) {
          util.assetCard = atlas;
        });
      };
      util.preloadBotAsset = function() {
        if (util.profileBot) return;
        cc.resources.load("profileBot", cc.SpriteAtlas, function(err, atlas) {
          util.profileBot = atlas;
        });
      };
      util.numberFormat = function(n) {
        var ii = 0;
        while ((n /= 1e3) >= 1) ii++;
        return Math.round(10 * n * 1e3) / 10 + util.prefix[ii];
      };
      util.playAudio = function(audioClip) {};
      util.updateProfile = function() {
        cc.systemEvent.emit("updateProfile");
      };
      util.prefix = [ "", "k", "M", "G", "T", "P", "E", "Z", "Y", "x10^27", "x10^30", "x10^33" ];
      util.assetCard = null;
      util.profileBot = null;
      util.logTimeInGame = function(time) {
        ([ 30, 60, 90, 120, 180, 270, 510 ].indexOf(time) > -1 || 0 === time) && Api_1.default.logEvent(time + "s_sstime");
      };
      return util;
    }();
    exports.default = util;
    cc._RF.pop();
  }, {
    "./Api": "Api"
  } ],
  vi_VN_tut: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "77101c4onlIip2iwXQKzaFb", "vi_VN_tut");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var tutor = 'Ti\u1ebfn L\xean Mi\u1ec1n Nam s\u1eed d\u1ee5ng b\u1ed9 b\xe0i T\xe2y 52 l\xe1.\n\nGi\xe1 tr\u1ecb qu\xe2n b\xe0i s\u1ebd ph\u1ee5 thu\u1ed9c v\xe0o s\u1ed1: 2(heo) > A(x\xec) > K(gi\xe0) > Q(\u0111\u1ea7m) > J(b\u1ed3i) > 10 > 9 > .... > 3.\n\nN\u1ebfu hai qu\xe2n b\xe0i c\xf3 c\xf9ng s\u1ed1 th\xec s\u1ebd so s\xe1nh theo ch\u1ea5t : \u2665 > \u2666 > \u2663 > \u2660.\nV\xed d\u1ee5 : 10 \u2665 > 10 \u2666\n\nChia b\xe0i: M\u1ed7i ng\u01b0\u1eddi \u0111\u01b0\u1ee3c chia 13 l\xe1 b\xe0i.\n\nC\xe1ch x\u1ebfp b\xe0i: \nB\xe0i r\xe1c 1 l\xe1 b\xe0i l\u1ebb: b\xe0i l\u1ebb c\xf3 th\u1ec3 b\u1ecb \u0111\xe8 b\u1edfi 1 l\xe1 b\xe0i l\u1ebb c\xf3 gi\xe1 tr\u1ecb l\u1edbn h\u01a1n\nVd : 4 \u2666 > 3 \u2660\n\nB\u1ed9 \u0111\xf4i 2 l\xe1 b\xe0i gi\u1ed1ng nhau: 1 \u0111\xf4i c\xf3 th\u1ec3 \u0111\xe8 \u0111\u01b0\u1ee3c 1 \u0111\xf4i b\xe9 h\u01a1n \nVd : J \u2665 + J \u2660 > J \u2666 + J \u2663\n\nT\u01b0\u01a1ng t\u1ef1 v\u1edbi b\u1ed9 3 l\xe1 b\xe0i gi\u1ed1ng nhau ( s\xe1m c\xf4 )\n\nS\u1ea3nh : c\xf3 \xedt nh\u1ea5t 3 l\xe1 b\xe0i c\xf3 gi\xe1 tr\u1ecb t\u0103ng d\u1ea7n: 3 + 4 + 5 + 6 + 7 + 8 ......\n1 S\u1ea3nh c\xf3 th\u1ec3 b\u1ecb \u0111\xe8 b\u1edfi 1 s\u1ea3nh c\xf3 c\xf9ng s\u1ed1 l\xe1, nh\u01b0ng gi\xe1 tr\u1ecb c\u1ee7a s\u1ed1 \u0111\xf3 l\u1edbn h\u01a1n\nVd : S\u1ea3nh 3 4 5 < 4 5 6 , ho\u1eb7c 7 8 9 < J Q K \n\nN\u1ebfu 2 s\u1ea3nh c\xf3 c\xf9ng s\u1ed1 l\xe1 v\xe0 gi\xe1 tr\u1ecb , x\xe9t ch\u1ea5t c\u1ee7a qu\xe2n l\u1edbn nh\u1ea5t c\u1ee7a s\u1ea3nh \u0111\xf3 \u0111\u1ec3 t\xecm ra s\u1ea3nh l\u1edbn h\u01a1n \nVd: J Q K(\u2663) < J Q K(\u2666)\n\n3 \u0111\xf4i th\xf4ng: 3 \u0111\xf4i b\xe0i c\xf3 gi\xe1 tr\u1ecb t\u0103ng d\u1ea7n 4 4 + 5 5 + 6 6 \n\nT\u1ee9 qu\xfd: 4 l\xe1 b\xe0i c\xf3 gi\xe1 tr\u1ecb gi\u1ed1ng nhau 5 5 5 5, J J J J, Q Q Q Q \n              4 \u0111\xf4i th\xf4ng: 4 \u0111\xf4i b\xe0i c\xf3 gi\xe1 tr\u1ecb t\u0103ng d\u1ea7n 4 4 + 5 5 + 6 6 + 7 7 \n              5 \u0111\xf4i th\xf4ng: 5 \u0111\xf4i b\xe0i c\xf3 gi\xe1 tr\u1ecb t\u0103ng d\u1ea7n 4 4 + 5 5 + 6 6 + 7 7 + 8 8\n             6 \u0111\xf4i th\xf4ng: 6 \u0111\xf4i b\xe0i c\xf3 gi\xe1 tr\u1ecb t\u0103ng d\u1ea7n 4 4 + 5 5 + 6 6 + 7 7 + 8 8 + 9 9\n\n\u0110\u1ed9 m\u1ea1nh c\u1ee7a h\xe0ng \u0111\u01b0\u1ee3c t\xednh nh\u01b0 sau: 6 \u0111\xf4i th\xf4ng > 5 \u0111\xf4i th\xf4ng > 4 \u0111\xf4i th\xf4ng > 4 \u0111\xf4i th\xf4ng nh\u1ecf h\u01a1n > t\u1ee9 qu\xfd > 3 \u0111\xf4i th\xf4ng\n\n\u0110\xe1nh b\xe0i:\n\nQuy\u1ec1n \u0111\xe1nh tr\u01b0\u1edbc: V\xe1n \u0111\u1ea7u ti\xean, quy\u1ec1n \u0111\xe1nh tr\u01b0\u1edbc s\u1ebd thu\u1ed9c v\u1ec1 ng\u01b0\u1eddi s\u1edf h\u1eefu 3 \u2660.\n\nT\u1eeb v\xe1n ti\u1ebfp theo ng\u01b0\u1eddi nh\u1ea5t \u1edf v\xe1n tr\u01b0\u1edbc \u0111\xf3 s\u1ebd \u0111\u01b0\u1ee3c quy\u1ec1n \u0111\xe1nh tr\u01b0\u1edbc .\n\nV\xf2ng \u0111\xe1nh: Theo ng\u01b0\u1ee3c chi\u1ec1u kim \u0111\u1ed3ng h\u1ed3, m\u1ed7i ng\u01b0\u1eddi \u0111\u01b0\u1ee3c ra 1 l\xe1 b\xe0i ho\u1eb7c 1 b\u1ed9 nhi\u1ec1u l\xe1. Ng\u01b0\u1eddi ra sau ph\u1ea3i \u0111\xe1nh b\xe0i c\xf3 c\xf9ng lo\u1ea1i v\xe0 cao h\u01a1n ng\u01b0\u1eddi \u0111\xe1nh tr\u01b0\u1edbc, tr\u1eeb tr\u01b0\u1eddng h\u1ee3p ch\u1eb7t b\xe0i. Lo\u1ea1i l\xe0 c\xf9ng b\xe0i l\u1ebb, \u0111\xf4i, b\u1ed9 ba,s\u1ea3nh.\n\nH\u1ebft v\xf2ng \u0111\xe1nh: trong v\xf2ng \u0111\xe1nh, n\u1ebfu c\xf3  1 ng\u01b0\u1eddi b\u1ecf l\u01b0\u1ee3t th\xec coi nh\u01b0 b\u1ecf c\u1ea3 v\xf2ng. N\u1ebfu kh\xf4ng c\xf2n ai ch\u1eb7n \u0111\u01b0\u1ee3c ti\u1ebfp th\xec ng\u01b0\u1eddi \u0111\xe1nh cu\u1ed1i c\xf9ng \u0111\u01b0\u1ee3c ra b\xe0i b\u1eaft \u0111\u1ea7u v\xf2ng m\u1edbi .\n\nK\u1ebft th\xfac: \n\nKhi ng\u01b0\u1eddi \u0111\u1ea7u ti\xean \u0111\xe1nh h\u1ebft b\xe0i, ng\u01b0\u1eddi \u0111\xf3 s\u1ebd \u0111\u01b0\u1ee3c t\xednh Nh\u1ea5t\n\nNh\u1eefng ng\u01b0\u1eddi c\xf2n l\u1ea1i ti\u1ebfp t\u1ee5c \u0111\xe1nh b\xe0i \u0111\u1ec3 ch\u1ecdn ra th\u1ee9 t\u1ef1 v\u1ec1 Nh\xec , Ba , B\xe9t\n\nCh\u1eb7t 2 (Heo) :\n3 \u0111\xf4i th\xf4ng ch\u1eb7t \u0111\u01b0\u1ee3c 2(heo) v\xe0 3 \u0111\xf4i th\xf4ng nh\u1ecf h\u01a1n ( theo v\xf2ng ch\u01a1i ) \n\nT\u1ee9 qu\xfd ch\u1eb7t \u0111\u01b0\u1ee3c heo, \u0111\xf4i heo, 3 \u0111\xf4i th\xf4ng v\xe0 t\u1ee9 qu\xfd nh\u1ecf h\u01a1n ( theo v\xf2ng ch\u01a1i ) \n\n4 \u0111\xf4i th\xf4ng ch\u1eb7t \u0111\u01b0\u1ee3c heo, \u0111\xf4i heo, 3 \u0111\xf4i th\xf4ng , t\u1ee9 qu\xfd v\xe0 4 \u0111\xf4i th\xf4ng nh\u1ecf h\u01a1n ( kh\xf4ng c\u1ea7n theo v\xf2ng ch\u01a1i ) \n\n" Ch\u1eb7t ch\u1ed3ng " cu\u1ed1i c\xf9ng l\xe0 t\u1ed5ng k\u1ebft t\u1ea5t c\u1ea3 c\xe1c h\xe0nh vi "ch\u1eb7t" tr\u01b0\u1edbc \u0111\xf3 . Ng\u01b0\u1eddi b\u1ecb ch\u1eb7t sau c\xf9ng s\u1ebd ch\u1ecbu thi\u1ec7t h\u1ea1i ti\u1ec1n ch\u1eb7t .\n\nT\u1edbi tr\u1eafng: ki\u1ec3u th\u1eafng ngay l\u1eadp t\u1ee9c kh\xf4ng c\u1ea7n \u0111\xe1nh khi ng\u01b0\u1eddi ch\u01a1i th\u1ecfa m\xe3n b\u1ed9 b\xe0i sau :\n\nT\u1ea1i v\xe1n \u0111\u1ea7u: T\u1ee9 qu\xfd 3 ho\u1eb7c 3 \u0111\xf4i th\xf4ng c\xf3 3 \u2660\n\nC\xe1c v\xe1n sau: T\u1ee9 qu\xfd 2 , 5 \u0111\xf4i th\xf4ng , 6 \u0111\xf4i th\xf4ng , 6 \u0111\xf4i b\u1ea5t k\u1ef3 , S\u1ea3nh R\u1ed3ng ( s\u1ea3nh n\u1ed1i t\u1eeb 3 -> A ) , 12 / 13 l\xe1 b\xe0i c\xf9ng m\xe0u ( \u2663\u2660 ho\u1eb7c \u2665\u2666 ) \n\nTh\u1ed1i b\xe0i: \n\nNg\u01b0\u1eddi ch\u01a1i b\u1ecb t\xednh Th\u1ed1i khi ng\u01b0\u1eddi \u0111\xf3 v\u1ec1 B\xe9t v\xe0 tr\xean tay h\u1ecd c\xf2n c\xe1c l\xe1 b\xe0i sau\nTh\u1ed1i c\xf3 2(heo)\nTh\u1ed1i 3 \u0111\xf4i th\xf4ng\nTh\u1ed1i 4 \u0111\xf4i th\xf4ng\nTh\u1ed1i t\u1ee9 qu\xfd\n\nNg\u01b0\u1eddi ch\u01a1i b\u1ecb Ch\xe1y b\xe0i khi trong v\xe1n ch\u01a1i c\xf3 ng\u01b0\u1eddi v\u1ec1 Nh\u1ea5t h\u1ebft b\xe0i , nh\u01b0ng ng\u01b0\u1eddi ch\u01a1i \u0111\xf3 v\u1eabn ch\u01b0a \u0111\xe1nh l\xe1 b\xe0i n\xe0o (c\xf2n \u0111\u1ee7 13 l\xe1).';
    exports.default = tutor;
    cc._RF.pop();
  }, {} ],
  vi_VN: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92027qqs+hEwbWfts3Mohj3", "vi_VN");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var vi_VN_tut_1 = require("./vi_VN_tut");
    exports.default = {
      PLAYNOW: "Ch\u01a1i ngay",
      WIN: "Nh\u1ea5t",
      LOSE2: "Nh\xec",
      LOSE3: "Ba",
      LOSE4: "B\xe9t",
      PLAYER: "S\u1ed1 ng\u01b0\u1eddi ch\u01a1i",
      BETNO: "M\u1ee9c c\u01b0\u1ee3c",
      DAILY: "Th\u01b0\u1edfng h\xe0ng ng\xe0y",
      D1: "Ng\xe0y 1",
      D2: "Ng\xe0y 2",
      D3: "Ng\xe0y 3",
      D4: "Ng\xe0y 4",
      D5: "Ng\xe0y 5",
      D6: "Ng\xe0y 6",
      D7: "Ng\xe0y 7",
      "3TURNS": "3 l\u01b0\u1ee3t",
      "5TURNS": "5 l\u01b0\u1ee3t",
      TURNS: "5 l\u01b0\u1ee3t",
      RECEIVED: "\u0110\xe3 nh\u1eadn",
      LEADER: "B\u1ea3ng x\u1ebfp h\u1ea1ng",
      NOVIDEO: "Video hi\u1ec7n kh\xf4ng kh\u1ea3 d\u1ee5ng",
      BET: "C\u01b0\u1ee3c",
      NO: "B\xe0n",
      PASS: "B\u1ecf l\u01b0\u1ee3t",
      HIT: "\u0110\xe1nh",
      ARRANGE: "X\u1ebfp b\xe0i",
      QUITGAME: "Tho\xe1t game",
      QUITGAMEP: "B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n tho\xe1t game? N\u1ebfu tho\xe1t game b\u1ea1n s\u1ebd b\u1ecb tr\u1eeb 10 l\u1ea7n m\u1ee9c c\u01b0\u1ee3c",
      QUIT: "Tho\xe1t",
      "3PAIRS": "3 \u0111\xf4i th\xf4ng",
      "4PAIRS": "4 \u0111\xf4i th\xf4ng",
      FOURKIND: "T\u1ee9 qu\xfd",
      FLUSH: "T\u1edbi tr\u1eafng",
      "1BEST": "Heo",
      "2BEST": "\u0110\xf4i heo",
      "3BEST": "3 heo",
      INSTRUCT: "H\u01b0\u1edbng d\u1eabn",
      NOMONEY: "B\u1ea1n \u0111\xe3 h\u1ebft ti\u1ec1n, nh\u1eadn t\xe0i tr\u1ee3 t\u1eeb nh\xe0 c\xe1i",
      RECEI2: "Nh\u1eadn",
      SPINNOW: "Quay ngay",
      SPIN: "Quay ",
      "1TURN": "Th\xeam l\u01b0\u1ee3t",
      LUCKYSPIN: "V\xf2ng quay may m\u1eafn",
      LUCK: "Ch\xfac b\u1ea1n may m\u1eafn l\u1ea7n sau",
      TURN: "B\u1ea1n \u0111\u01b0\u1ee3c c\u1ed9ng th\xeam l\u01b0\u1ee3t",
      X2: "Nh\xe2n \u0111\xf4i ti\u1ec1n th\u01b0\u1edfng",
      X3: "Nh\xe2n ba ti\u1ec1n th\u01b0\u1edfng",
      X5: "Nh\xe2n n\u0103m ti\u1ec1n th\u01b0\u1edfng",
      X10: "Nh\xe2n m\u01b0\u1eddi ti\u1ec1n th\u01b0\u1edfng",
      MISS: "M\u1ea5t l\u01b0\u1ee3t",
      MONEY1: "Ch\xfac m\u1eebng b\u1ea1n \u0111\xe3 nh\u1eadn \u0111\u01b0\u1ee3c %s t\u1eeb nh\xe0 c\xe1i",
      TUT: vi_VN_tut_1.default,
      addSpin: "B\u1ea1n nh\u1eadn \u0111\u01b0\u1ee3c $lq l\u01b0\u1ee3t quay!",
      urvip: "B\u1ea1n \u0111ang l\xe0 VIP, quay l\u1ea1i v\xe0o ngay mai nh\xe9",
      confirmVidHeader: "Th\xf4ng b\xe1o",
      confirmVidContent: "B\u1ea1n ph\u1ea3i xem video tr\u01b0\u1edbc \u0111\xe3",
      dailyConfirm: "Xem video \u0111\u1ec3 nh\u1eadn x2 ph\u1ea7n th\u01b0\u1edfng",
      hettienConfirm: "B\u1ea1n \u0111\xe3 h\u1ebft ti\u1ec1n.\n Xem video \u0111\u1ec3 nh\u1eadn t\xe0i tr\u1ee3 t\u1eeb nh\xe0 c\xe1i",
      endgameConfirm: "Xem video \u0111\u1ec3 nh\u1eadn ngay 01 l\u01b0\u1ee3t quay\nmi\u1ec5n ph\xed",
      vipConfirm: "Xem video \u0111\u1ec3 nh\u1eadn ngay VIP",
      "\bviewAd": "Xem",
      again: "Ch\u01a1i l\u1ea1i ?"
    };
    cc._RF.pop();
  }, {
    "./vi_VN_tut": "vi_VN_tut"
  } ]
}, {}, [ "Api", "AudioPlayer", "AutoHide", "Bot", "Card", "CardGroup", "CommonCard", "Config", "ConfirmViewAd", "Deck", "EventKeys", "Game", "HandCard", "Helper", "Home", "LBEntry", "Language", "Leaderboard", "Media", "NoAd", "Notice", "PlayBtn", "Player", "Popup", "Shop", "Slider2", "SlotMachine", "SpinWheel", "Text2", "Timer", "Toast", "Tut", "UI", "User", "customHelper", "footer", "image", "slot.Roller", "slot.Symbol", "Modal", "DailyBonus", "DailyBonusItem", "TweenMove", "util", "firstTut", "en_US", "en_US_tut", "th_TH", "th_TH_tut", "tl_PH", "tl_PH_tut", "vi_VN", "vi_VN_tut", "use_reversed_rotateBy" ]);