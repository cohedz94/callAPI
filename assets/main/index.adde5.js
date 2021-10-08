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
  Asset: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5bdfpNUbFB1oJhTOIQa2pw", "Asset");
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
    var Asset = function(_super) {
      __extends(Asset, _super);
      function Asset() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.arrayAssetDice = [];
        return _this;
      }
      Asset.prototype.onLoad = function() {};
      Asset.prototype.initAsset = function(sampleBlock) {
        var component = this.node.getComponent(cc.ParticleSystem);
        component.spriteFrame = this.arrayAssetDice[sampleBlock.valueBlock - 1];
      };
      __decorate([ property([ cc.SpriteFrame ]) ], Asset.prototype, "arrayAssetDice", void 0);
      Asset = __decorate([ ccclass ], Asset);
      return Asset;
    }(cc.Component);
    exports.default = Asset;
    cc._RF.pop();
  }, {} ],
  all_modules: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8a0f9gSdL1GurD0/DB0K5fN", "all_modules");
    "use strict";
    exports.__esModule = true;
    var _configs = require("./configs");
    Object.keys(_configs).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _configs[key]) return;
      exports[key] = _configs[key];
    });
    var _utils = require("./utils/utils");
    Object.keys(_utils).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _utils[key]) return;
      exports[key] = _utils[key];
    });
    var _utils_facebook = require("./utils/utils_facebook");
    Object.keys(_utils_facebook).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _utils_facebook[key]) return;
      exports[key] = _utils_facebook[key];
    });
    var _video = require("./utils/video");
    Object.keys(_video).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _video[key]) return;
      exports[key] = _video[key];
    });
    var _inter_ad = require("./utils/inter_ad");
    Object.keys(_inter_ad).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _inter_ad[key]) return;
      exports[key] = _inter_ad[key];
    });
    var _audio = require("./utils/audio");
    Object.keys(_audio).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _audio[key]) return;
      exports[key] = _audio[key];
    });
    var _ui = require("./ui-fx/ui");
    Object.keys(_ui).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _ui[key]) return;
      exports[key] = _ui[key];
    });
    var _fx = require("./ui-fx/fx");
    Object.keys(_fx).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _fx[key]) return;
      exports[key] = _fx[key];
    });
    var _tut = require("./tut/tut");
    Object.keys(_tut).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _tut[key]) return;
      exports[key] = _tut[key];
    });
    var _login = require("./logic/login");
    Object.keys(_login).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _login[key]) return;
      exports[key] = _login[key];
    });
    var _data = require("./logic/data");
    Object.keys(_data).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _data[key]) return;
      exports[key] = _data[key];
    });
    var _game = require("./logic/game");
    Object.keys(_game).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _game[key]) return;
      exports[key] = _game[key];
    });
    var _game_over = require("./logic/game_over");
    Object.keys(_game_over).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _game_over[key]) return;
      exports[key] = _game_over[key];
    });
    var _user = require("./logic/user");
    Object.keys(_user).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _user[key]) return;
      exports[key] = _user[key];
    });
    var _control = require("./core/control");
    Object.keys(_control).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _control[key]) return;
      exports[key] = _control[key];
    });
    var _map = require("./core/map");
    Object.keys(_map).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _map[key]) return;
      exports[key] = _map[key];
    });
    var _map_visual = require("./core/map_visual");
    Object.keys(_map_visual).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _map_visual[key]) return;
      exports[key] = _map_visual[key];
    });
    var _social = require("./social/social");
    Object.keys(_social).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _social[key]) return;
      exports[key] = _social[key];
    });
    var _promo = require("./social/promo");
    Object.keys(_promo).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _promo[key]) return;
      exports[key] = _promo[key];
    });
    var _challenge = require("./social/challenge");
    Object.keys(_challenge).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _challenge[key]) return;
      exports[key] = _challenge[key];
    });
    var _load_optimize = require("./logic/load_optimize");
    Object.keys(_load_optimize).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _load_optimize[key]) return;
      exports[key] = _load_optimize[key];
    });
    var _fx_power_item = require("./ui-fx/fx_power_item");
    Object.keys(_fx_power_item).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _fx_power_item[key]) return;
      exports[key] = _fx_power_item[key];
    });
    var _ui_power_item = require("./ui-fx/ui_power_item");
    Object.keys(_ui_power_item).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _ui_power_item[key]) return;
      exports[key] = _ui_power_item[key];
    });
    var _leaderboard = require("./social/leaderboard");
    Object.keys(_leaderboard).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _leaderboard[key]) return;
      exports[key] = _leaderboard[key];
    });
    cc._RF.pop();
  }, {
    "./configs": "configs",
    "./core/control": "control",
    "./core/map": "map",
    "./core/map_visual": "map_visual",
    "./logic/data": "data",
    "./logic/game": "game",
    "./logic/game_over": "game_over",
    "./logic/load_optimize": "load_optimize",
    "./logic/login": "login",
    "./logic/user": "user",
    "./social/challenge": "challenge",
    "./social/leaderboard": "leaderboard",
    "./social/promo": "promo",
    "./social/social": "social",
    "./tut/tut": "tut",
    "./ui-fx/fx": "fx",
    "./ui-fx/fx_power_item": "fx_power_item",
    "./ui-fx/ui": "ui",
    "./ui-fx/ui_power_item": "ui_power_item",
    "./utils/audio": "audio",
    "./utils/inter_ad": "inter_ad",
    "./utils/utils": "utils",
    "./utils/utils_facebook": "utils_facebook",
    "./utils/video": "video"
  } ],
  audio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0dbdefX+KJNw74ONUGHT3DL", "audio");
    "use strict";
    exports.__esModule = true;
    exports.audio = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it;
      if ("undefined" === typeof Symbol || null == o[Symbol.iterator]) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && "number" === typeof o.length) {
          it && (o = it);
          var i = 0;
          return function() {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      it = o[Symbol.iterator]();
      return it.next.bind(it);
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      "Object" === n && o.constructor && (n = o.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(o);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    var audio = {
      audioList: {},
      playingIdList: {},
      isSoundOff: true,
      init: function init() {
        var _this = this;
        _G.login.addLoginDataField("isSoundOff");
        _G.login.addCallback(function(data) {
          _this.isSoundOff = data.isSoundOff;
          _this.renderBtnSound();
          _this.loadAudios();
        });
        var btnSoundOff = cc.find("Canvas/layer_pause/content/btn_sound_off");
        _G.utils.addButtonComp(btnSoundOff, function() {
          _this.isSoundOff = false;
          _this.playMusic();
          _G.ui.showNagScreen();
          _G.data.saveData({
            isSoundOff: false
          }, function() {
            _this.renderBtnSound();
            _G.ui.hideNagScreen();
          });
        });
        var btnSoundOn = cc.find("Canvas/layer_pause/content/btn_sound_on");
        _G.utils.addButtonComp(btnSoundOn, function() {
          _this.isSoundOff = true;
          _this.stopMusic();
          _G.ui.showNagScreen();
          _G.data.saveData({
            isSoundOff: true
          }, function() {
            _this.renderBtnSound();
            _G.ui.hideNagScreen();
          });
        });
      },
      renderBtnSound: function renderBtnSound(isSoundOff) {
        cc.find("Canvas/layer_pause/content/bg_off").active = this.isSoundOff;
        cc.find("Canvas/layer_pause/content/bg_on").active = !this.isSoundOff;
        cc.find("Canvas/layer_pause/content/btn_sound_off").active = this.isSoundOff;
        cc.find("Canvas/layer_pause/content/btn_sound_on").active = !this.isSoundOff;
      },
      loadAudios: function loadAudios() {
        var _this2 = this;
        cc.resources.loadDir("audios", cc.AudioClip, function(err, res) {
          if (err) return _log(err);
          for (var _iterator = _createForOfIteratorHelperLoose(res), _step; !(_step = _iterator()).done; ) {
            var clip = _step.value;
            _this2.audioList[clip.name] = clip;
          }
          _this2.playMusic();
        });
      },
      playSound: function playSound(name, volume) {
        void 0 === volume && (volume = 1);
        if (this.isSoundOff) return;
        this.playingIdList[name] = cc.audioEngine.play(this.audioList[name], false, volume);
      },
      stopSound: function stopSound(name) {
        this.playingIdList[name] && cc.audioEngine.stopEffect(this.playingIdList[name]);
      },
      playMusic: function playMusic() {
        if (this.isSoundOff) return;
        if (cc.audioEngine.isMusicPlaying()) return;
        try {
          this.playingIdList["theme_music"] = cc.audioEngine.playMusic(this.audioList["theme_music"], true, 1);
        } catch (e) {
          _log("playMusic err ", e);
        }
      },
      stopMusic: function stopMusic() {
        cc.audioEngine.isMusicPlaying() && cc.audioEngine.stopMusic();
      },
      playSoundClickButton: function playSoundClickButton() {
        if (this.isSoundOff) return;
        this.playSound("tap_sound", .2);
      }
    };
    exports.audio = audio;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  block_collision_handler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72552nj131H3pkFdBpRiixi", "block_collision_handler");
    "use strict";
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        collidingCellArr: [],
        newItemPosDiff: cc.v2(0, 0),
        cellPosDiff: cc.v2(0, 0),
        highlightCellArr: []
      },
      onLoad: function onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
      },
      onCollisionEnter: function onCollisionEnter(other, self) {
        this.collidingCellArr.push(other.node);
      },
      onCollisionStay: function onCollisionStay(other, self) {
        return;
        var newItemPosDiff;
        var selectedCell;
        var nearestDistance;
        var cellNumber;
        var minorCellNumber;
        var minorCell;
      },
      onCollisionExit: function onCollisionExit(other, self) {
        _G.map.selectedCell && this.unfocusCell(_G.map.selectedCell);
        _G.map.minorCell && this.unfocusCell(_G.map.minorCell);
        _G.map.selectedCell = null;
        _G.map.minorCell = null;
        _removeArrItem(this.collidingCellArr, other.node);
      },
      highlightCell: function highlightCell(cellNode) {
        cellNode.getChildByName("bg").opacity = 52;
        this.highlightCellArr.push(cellNode);
      },
      unfocusCell: function unfocusCell(cellNode) {
        cellNode.getChildByName("bg").opacity = 200;
        _removeArrItem(this.highlightCellArr, cellNode);
      },
      unfocusAllCells: function unfocusAllCells() {
        var _this = this;
        this.highlightCellArr.map(function(cellNode) {
          return _this.unfocusCell(cellNode);
        });
      }
    });
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  canvas_init: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cdf12B+GYtGYYzejMxGB9Ru", "canvas_init");
    "use strict";
    var _G = _interopRequireWildcard(require("./all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        defaultFont: {
          default: null,
          type: cc.Font
        }
      },
      onLoad: function onLoad() {
        window._G = _G;
        Object.keys(_G).map(function(moduleName) {
          try {
            _G[moduleName].init && _G[moduleName].init();
          } catch (error) {
            console.log("====================================");
            console.log("err", moduleName, error);
            console.log("====================================");
          }
        });
        _G.utilsFB.log("ev_G_load_time", performance.now());
        _G.cocosLoadTime = (performance.now() / 1e3).toFixed(2);
        _G.utils.setLabelText(cc.find("Canvas/layer_pause/content/label_load_time"), _G.cocosLoadTime);
        _G.utils.setTimeout(function() {
          _G.social.askBotSubscribe(function() {
            _G.social.askShortcut(function() {
              _G.login.addCallback(function(data) {
                if (data.isNewUser) return;
                console.log("Calling to show inter-ad start game");
                _G.interAd.showInterAds("start_G", null, 5);
              });
            });
          });
        }, 1e3);
        var loadingBg = document.getElementById("htmlLoadingBackground");
        loadingBg && (loadingBg.style.display = "none");
        if (window.FBInstant) {
          var entryPointData = FBInstant.getEntryPointData();
          if (entryPointData && entryPointData.isFromSharedPos) {
            console.log(" Logged event user entered game from shared post. Position = " + entryPointData.shareCode);
            FBInstant.logEvent("ev_user_click_shared_post", 1, {
              shareCode: entryPointData.shareCode || "null"
            });
          }
        }
      },
      onBlockClick: function onBlockClick(e) {
        var target = e.target;
        var _target$name$split = target.name.split("_"), x = _target$name$split[0], y = _target$name$split[1];
        _G.mapVisual.bomb(x, y);
      }
    });
    cc._RF.pop();
  }, {
    "./all_modules": "all_modules"
  } ],
  cell_links: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd07fzjuC1EZIDG4knwd2Ec", "cell_links");
    "use strict";
    module.exports = {
      "17_11": "right_bias",
      "11_6": "right_bias",
      "24_18": "right_bias",
      "18_12": "right_bias",
      "12_7": "right_bias",
      "30_25": "right_bias",
      "25_19": "right_bias",
      "19_13": "right_bias",
      "13_8": "right_bias",
      "31_26": "right_bias",
      "26_20": "right_bias",
      "20_14": "right_bias",
      "32_27": "right_bias",
      "27_21": "right_bias",
      "17_24": "left_bias",
      "24_30": "left_bias",
      "11_18": "left_bias",
      "18_25": "left_bias",
      "25_31": "left_bias",
      "6_12": "left_bias",
      "12_19": "left_bias",
      "19_26": "left_bias",
      "26_32": "left_bias",
      "7_13": "left_bias",
      "13_20": "left_bias",
      "20_27": "left_bias",
      "8_14": "left_bias",
      "14_21": "left_bias",
      "6_7": "horizontal",
      "7_8": "horizontal",
      "11_12": "horizontal",
      "12_13": "horizontal",
      "13_14": "horizontal",
      "17_18": "horizontal",
      "18_19": "horizontal",
      "19_20": "horizontal",
      "20_21": "horizontal",
      "24_25": "horizontal",
      "25_26": "horizontal",
      "26_27": "horizontal",
      "30_31": "horizontal",
      "31_32": "horizontal"
    };
    cc._RF.pop();
  }, {} ],
  challenge: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91a906+OWtOG7cHD6oui68n", "challenge");
    "use strict";
    exports.__esModule = true;
    exports.challenge = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var challenge = {
      friendArr: [],
      selectedFriend: {
        id: 0,
        score: 0,
        name: 0,
        photo: 0
      },
      challengedFriendArr: [],
      lastTimeResetChallengedFriendArr: [],
      challengeCancelTimeArr: [],
      init: function init() {
        var _this = this;
        setTimeout(function() {
          return _this.renderUserNameAndAva();
        }, 1e3);
        _G.login.addLoginDataField("challengedFriendArr");
        _G.login.addLoginDataField("lastTimeResetChallengedFriendArr");
        _G.login.addLoginDataField("challengeCancelTimeArr");
        _G.login.addCallback(function(data) {
          _this.challengeCancelTimeArr = data.challengeCancelTimeArr || [];
          _log("init >> this.challengeCancelTimeArr = ", _this.challengeCancelTimeArr);
          _this.getFriendArr(function(friendArr) {
            _this.friendArr = friendArr;
            _this.challengedFriendArr = data.challengedFriendArr || [];
            _this.lastTimeResetChallengedFriendArr = data.lastTimeResetChallengedFriendArr;
            if (!_this.lastTimeResetChallengedFriendArr) {
              _this.lastTimeResetChallengedFriendArr = _time();
              _G.data.saveData({
                lastTimeResetChallengedFriendArr: _time()
              });
            }
            if (_time() - _this.lastTimeResetChallengedFriendArr > _G.configs.timeToResetChallengedFriendArr) {
              _this.lastTimeResetChallengedFriendArr = _time();
              _G.data.saveData({
                lastTimeResetChallengedFriendArr: _time()
              });
              _this.challengedFriendArr = [];
              _G.data.saveData({
                challengedFriendArr: []
              });
            }
          });
        });
        this.initUI();
      },
      initUI: function initUI() {
        var _this2 = this;
        _G.utils.addButtonComp(cc.find("Canvas/layer_challenge_friend/content/btn_play"), function() {
          return _this2.onbtnPlayChallenge();
        });
        _G.utils.addButtonComp(cc.find("Canvas/layer_challenge_friend/content/btn_another_friend"), function() {
          return _this2.onBtnPlayWithAnother();
        });
        _G.utils.addButtonComp(cc.find("Canvas/layer_challenge_friend/content/btn_cancel"), function() {
          return _this2.onBtnCancelClicked();
        });
      },
      getFriendArr: function getFriendArr(callback) {
        if (!window.FBInstant) return;
        FBInstant.player.getConnectedPlayersAsync().then(function(players) {
          var friendArr = players.map(function(player) {
            return {
              id: player.getID(),
              name: player.getName(),
              photo: player.getPhoto(),
              score: 0,
              rank: 0
            };
          });
          callback && callback(friendArr);
        });
      },
      check2GetFriendAndRender: function check2GetFriendAndRender() {
        var _this3 = this;
        var msCountOf1Day = 864e5;
        var isCancelledEnoughTime = this.challengeCancelTimeArr.length >= _G.configs.maxChallengeAskTimeIn1Day;
        var has1CancelOver1Day = this.challengeCancelTimeArr.some(function(time) {
          return _time() - time > msCountOf1Day;
        });
        if (isCancelledEnoughTime && !has1CancelOver1Day) return;
        var availableFriendArr = this.friendArr.filter(function(friend) {
          return friend.id != _G.user.id && !_this3.challengedFriendArr.find(function(fr) {
            return fr.id == friend.id;
          });
        });
        var newFriendInfo = _G.utils.randomArrItem(availableFriendArr);
        _log(" newFriendInfo = ", newFriendInfo, "availableFriendArr=", availableFriendArr);
        _log("this.friendArr=", this.friendArr);
        _log("this.challengedFriendArr=", this.challengedFriendArr);
        if (!newFriendInfo) return;
        this.selectedFriend = newFriendInfo;
        this.render();
        return true;
      },
      renderUserNameAndAva: function renderUserNameAndAva() {
        _G.utils.setLabelText(cc.find("Canvas/layer_challenge_friend/content/players/Image_ButtonBase_player1/label_user_name"), _G.user.name);
        _G.utils.waitToRun(function() {
          var nodeAvata = cc.find("Canvas/layer_challenge_friend/content/players/Image_ButtonBase_player1/avatar/real_avatar");
          nodeAvata.getComponent(cc.Sprite).spriteFrame = _G.user.avatarSpriteFrame;
        }, "avatarSpriteFrame", _G.user);
      },
      render: function render() {
        cc.assetManager.loadRemote(this.selectedFriend.photo, function(err, texture) {
          if (err) return;
          var nodeAvata = cc.find("Canvas/layer_challenge_friend/content/players/Image_ButtonBase_player2/avatar/real_avatar");
          nodeAvata.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        });
        _G.utils.setLabelText(cc.find("Canvas/layer_challenge_friend/content/players/Image_ButtonBase_player2/label_user_name"), this.selectedFriend.name);
      },
      onbtnPlayChallenge: function onbtnPlayChallenge() {
        var _this4 = this;
        _G.social.createContext(this.selectedFriend.id, function() {
          _G.social.playerIdSendMessage = _this4.selectedFriend.id;
          _G.ui.hideLayer("layer_challenge_friend");
          _G.gameOver.replay();
          _this4.challengedFriendArr.push(_this4.selectedFriend);
          _G.data.saveData({
            challengedFriendArr: _this4.challengedFriendArr
          });
          _log(" onbtnPlayChallenge >> _G.challenge.resetChallengCancelTimeArr(); ");
          _G.challenge.resetChallengCancelTimeArr();
        });
      },
      onBtnPlayWithAnother: function onBtnPlayWithAnother() {
        _G.social.invite(function(contextId) {
          _G.social.playerIdSendMessage = contextId;
          _G.ui.hideLayer("layer_challenge_friend");
          _G.gameOver.replay();
          _log(" onBtnPlayWithAnother >> _G.challenge.resetChallengCancelTimeArr(); ");
          _G.challenge.resetChallengCancelTimeArr();
        });
      },
      resetChallengCancelTimeArr: function resetChallengCancelTimeArr() {
        this.challengeCancelTimeArr = [];
        _G.data.saveData({
          challengeCancelTimeArr: this.challengeCancelTimeArr
        });
      },
      onBtnCancelClicked: function onBtnCancelClicked() {
        this.challengeCancelTimeArr.push(_time());
        this.challengeCancelTimeArr.length > _G.configs.maxChallengeAskTimeIn1Day && this.challengeCancelTimeArr.shift();
        _G.data.saveData({
          challengeCancelTimeArr: this.challengeCancelTimeArr
        });
        _log(" onBtnCancelClicked >> this.challengeCancelTimeArr = ", this.challengeCancelTimeArr);
        _G.utilsFB.log("ev_click_button_cancel_challenge");
        _G.ui.hideLayer("layer_challenge_friend");
        _G.gameOver.replay();
      }
    };
    exports.challenge = challenge;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  configs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ecd6Sd8JhIFoRLw0N8fok7", "configs");
    "use strict";
    exports.__esModule = true;
    exports.configs = void 0;
    var _G = _interopRequireWildcard(require("./all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var configs = {
      off_inter_ads: false,
      freeBlock7ForNewUser: 3,
      block7EachVideo: 1,
      freeRemoveNewItemForNewUser: 3,
      removeNewItemTimeEachVideo: 3,
      timeToResetChallengedFriendArr: 864e5,
      maxChallengeAskTimeIn1Day: 3,
      leaderboardName: "score_global",
      leaderboardPlayerCount: 15,
      isShowPromoGames: true,
      listIdPromoGame: [],
      interAdId: "912714502910631_918503755665039",
      interAdRatio: {
        gameOverReplay: 1
      },
      showInterAdAfterEveryReplayTime: 1,
      videoRewardId: "912714502910631_918503372331744",
      videoContinueTime: 1,
      blocks: {
        1: {
          labelColor: "#ffffff"
        },
        2: {
          labelColor: "#ffffff"
        },
        3: {
          labelColor: "#ffffff"
        },
        4: {
          labelColor: "#ffffff"
        },
        5: {
          labelColor: "#ffffff"
        },
        6: {
          labelColor: "#ffffff"
        },
        7: {
          labelColor: "#594e85"
        }
      },
      biasType: {
        1: [ "right_bias", "left_bias", "single_block" ],
        2: [ "right_bias", "horizontal", "single_block" ],
        3: [ "right_bias", "left_bias", "horizontal" ],
        4: [ "right_bias", "left_bias", "horizontal", "single_block" ]
      },
      stepCount2BiasTypeArr: function stepCount2BiasTypeArr(stepCount) {
        var lastStep = 0;
        for (var i in this.biasType) {
          if (i > stepCount) return this.biasType[lastStep];
          i <= stepCount && (lastStep = i);
        }
        return this.biasType[lastStep];
      },
      blockNumber: {
        1: [ 1, 2, 3, 4, 5, 6 ]
      },
      stepCount2BlockNumerArr: function stepCount2BlockNumerArr(stepCount) {
        var lastStep = 0;
        for (var i in this.blockNumber) {
          if (i > stepCount) return this.blockNumber[lastStep];
          i <= stepCount && (lastStep = i);
        }
        return this.blockNumber[lastStep];
      },
      singleBlockPoint: {
        1: 2,
        2: 4,
        3: 8,
        4: 16,
        5: 32,
        6: 64,
        7: 128
      },
      scoreFactor: {
        3: 3,
        4: 3.5,
        5: 5,
        6: 6.5,
        7: 8
      },
      calculateScore: function calculateScore(blockNumber, blockCount) {
        return parseInt(_G.configs.singleBlockPoint[blockNumber] * (_G.configs.scoreFactor[blockCount] || 1));
      }
    };
    exports.configs = configs;
    cc._RF.pop();
  }, {
    "./all_modules": "all_modules"
  } ],
  constants: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a59dYhsoJA7ZVJzBPZiwhx", "constants");
    "use strict";
    exports.__esModule = true;
    exports.blockScore = exports.mapState = exports.touchType = void 0;
    var touchType = {
      start: "touchstart",
      move: "touchmove",
      end: "touchend",
      cancel: "touchcancel"
    };
    exports.touchType = touchType;
    var mapState = {
      INITIALZING: "INITIALZING",
      BOMBING: "BOMBING",
      NEWING: "NEWING",
      PLAYING: "PLAYING",
      RELOCATING: "RELOCATING",
      SLIDING: "SLIDING",
      ENDED: "ENDED"
    };
    exports.mapState = mapState;
    var blockScore = {
      "1_1": 3,
      "1_3": 10,
      "1_4": 15,
      "1_5": 20,
      "1_6": 25,
      "1_7": 30,
      "1_8": 50,
      "1_": 80,
      "2_1": 6,
      "2_3": 20,
      "2_4": 30,
      "2_5": 40,
      "2_6": 50,
      "2_7": 60,
      "2_8": 100,
      "2_": 150,
      "3_1": 9,
      "3_3": 30,
      "3_4": 45,
      "3_5": 60,
      "3_6": 75,
      "3_7": 90,
      "3_8": 150,
      "3_": 255,
      "4_1": 12,
      "4_3": 40,
      "4_4": 60,
      "4_5": 80,
      "4_6": 100,
      "4_7": 120,
      "4_8": 200,
      "4_": 300,
      "5_1": 15,
      "5_3": 50,
      "5_4": 75,
      "5_5": 100,
      "5_6": 125,
      "5_7": 150,
      "5_8": 250,
      "5_": 275,
      "6_1": 18,
      "6_3": 60,
      "6_4": 90,
      "6_5": 120,
      "6_6": 150,
      "6_7": 180,
      "6_8": 300,
      "6_": 450,
      "7_1": 30,
      "7_3": 100,
      "7_4": 150,
      "7_5": 200,
      "7_6": 250,
      "7_7": 300,
      "7_8": 500,
      "7_": 750
    };
    exports.blockScore = blockScore;
    cc._RF.pop();
  }, {} ],
  control: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7db31WzvhlJ4aXe0Piepn1e", "control");
    "use strict";
    exports.__esModule = true;
    exports.control = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var EXTRA_POS = cc.v2(0, 150);
    var control = {
      newItemNode: null,
      init1: function init1() {
        var _this = this;
        var newItem = this.newItemNode = cc.find("Canvas/play_area/new_item_container/new_item");
        var posDiff = _G.utils.global2LocalPosDiff(newItem, 0, 0);
        var lastTouchStartPos;
        var lastTouchStartTime;
        var touchStartFunc = function touchStartFunc(pos, eventObj) {
          newItem.isBeingDragged = true;
          lastTouchStartPos = pos;
          lastTouchStartTime = _time();
        };
        var touchMoveFunc = function touchMoveFunc(pos, eventObj) {
          if (pos.sub(lastTouchStartPos).mag() < 20) return;
          _this.setArrowsActive(false);
          _G.tut.checkHideTutHand();
          newItem.isBeingDragged && (newItem.position = pos.add(posDiff).add(EXTRA_POS));
        };
        var touchEndFunc = function touchEndFunc(pos, eventObj) {
          newItem.isBeingDragged = false;
          newItem.position = cc.v2(0, 0);
          _G.tut.checkShowTutHand();
          _G.game.isNewItemRotated || _this.setArrowsActive(true);
          "single_block" != _G.game.currentItemBiasType && lastTouchStartPos.sub(pos).mag() < 10 && _time() - lastTouchStartTime < 400 && newItem.position.mag() < 10 && _G.game.swapNewItemBlocks();
          _G.map.selectedCell && _G.game.dropNewItemAtCell(_G.map.selectedCell.cellNumber, _G.map.minorCell ? _G.map.minorCell.cellNumber : null);
        };
        _G.utils.singleTouchSet(newItem, touchStartFunc, touchMoveFunc, touchEndFunc);
      },
      setArrowsActive: function setArrowsActive(isActive) {
        var arrows = cc.find("Canvas/play_area/new_item_container/new_item/arrows");
        arrows.active = isActive;
        return arrows;
      },
      setKeyBlock: function setKeyBlock(blockNode) {
        var isParentRotated = _abs(blockNode.parent.angle % 360) > 90;
        var posExtra = isParentRotated ? blockNode.position.mul(2) : cc.v2();
        var keyBlockCollider = cc.find("Canvas/play_area/new_item_container/new_item/key_block_collider");
        _G.utils.setGlobalPositionToNode(keyBlockCollider, blockNode);
        keyBlockCollider.x -= posExtra.x;
        keyBlockCollider.y -= posExtra.y;
      },
      setControlTouchArea: function setControlTouchArea(itemType) {
        var touchNode = cc.find("Canvas/play_area/new_item_container/new_item");
        switch (itemType) {
         case "single_block":
          touchNode.width = 280;
          touchNode.height = 300;
          break;

         case "left_bias":
         case "right_bias":
          touchNode.width = 240;
          touchNode.height = 380;
          break;

         case "horizontal":
          touchNode.width = 300;
          touchNode.height = 300;
        }
      }
    };
    exports.control = control;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  data: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "204a3QPv8tLJqFKCLPw5/rm", "data");
    "use strict";
    exports.__esModule = true;
    exports.data = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var data = {
      init: function init() {
        _G.data.isUserReady = true;
      },
      saveData: function saveData(dataObj, callbackSuccess, calbackFail) {
        window.FBInstant ? FBInstant.player.setDataAsync(dataObj).then(function() {
          callbackSuccess && callbackSuccess();
        }) : _G.utils.setTimeout(function() {
          for (var key in dataObj) try {
            localStorage.setItem(key, JSON.stringify(dataObj[key]));
          } catch (e) {
            _log(e);
          }
          callbackSuccess && callbackSuccess();
        }, 500);
      },
      loadData: function loadData(keyArr, callbackSuccess) {
        window.FBInstant ? FBInstant.player.getDataAsync(keyArr).then(function(data) {
          callbackSuccess && callbackSuccess(data);
        }) : _G.utils.setTimeout(function() {
          var data = {};
          keyArr.map(function(key) {
            var strData = localStorage.getItem(key);
            if (strData) try {
              data[key] = JSON.parse(strData);
            } catch (e) {
              "Field" == key;
            }
          });
          callbackSuccess && callbackSuccess(data);
        }, 500);
      },
      loadEntryPointData: function loadEntryPointData() {
        if (window.FBInstant) {
          var _data = FBInstant.getEntryPointData();
          _data && _data.player_sent_id && (_G.user.playerIdShare = _data.player_sent_id);
          _G.user.entryPointData = _data;
        }
      }
    };
    exports.data = data;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  dice_asset: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95712k+GXpFKrq9coEcX+RP", "dice_asset");
    "use strict";
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        listAsset: {
          default: [],
          type: [ cc.SpriteFrame ]
        }
      },
      onLoad: function onLoad() {},
      replaceAndSetAsset: function replaceAndSetAsset(idAsset) {},
      resetAsset: function resetAsset() {}
    });
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  free_button_comp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86a713+CeRB7KYdjV9121Vr", "free_button_comp");
    "use strict";
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    cc.Class({
      extends: cc.Component,
      freeHandler: function freeHandler(e) {
        if (e.target.freeButtonHandlerFunc) {
          e.target.freeButtonHandlerFunc(e.target);
          _G.audio.playSoundClickButton();
        }
      }
    });
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  fx_power_item: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec48ctu1bBOPqqP1tbfn6CH", "fx_power_item");
    "use strict";
    exports.__esModule = true;
    exports.fxPowerItem = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var Asset = require("Asset");
    var fxPowerItem = {
      init: function init() {
        this.layerPowerAnim = cc.find("Canvas/play_area/power_anim");
        this.aBg = this.layerPowerAnim.getChildByName("bg");
        this.aDoc = this.layerPowerAnim.getChildByName("doc");
        this.aCat = this.layerPowerAnim.getChildByName("cat");
        this.spineBoom = cc.find("Canvas/anim_boom");
      },
      showAnimCat: function showAnimCat(button, callback) {
        var _this = this;
        this.aBg.opcity = 0;
        this.aDoc.x = 600;
        this.aCat.opacity = 0;
        this.layerPowerAnim.active = true;
        var callActionCat = function callActionCat(button) {
          if (_this.aCat) {
            var nameActon = "";
            1 == button ? nameActon = "bom" : 2 == button ? nameActon = "doi_cho" : 3 == button && (nameActon = "x3");
            var compSkeleton = _this.aCat.getComponent(sp.Skeleton);
            compSkeleton.setAnimation(0, nameActon, false);
            compSkeleton.setCompleteListener(function(trackEntry) {
              setTimeout(function() {
                _this.animHideButton(button);
                _this.aBg.opcity = 0;
                _this.aDoc.x = 600;
                _this.aCat.opacity = 0;
                _this.layerPowerAnim.active = false;
                callback && callback();
              }, 1500);
            });
          }
        };
        var callbackShowButton = function callbackShowButton(button) {
          cc.tween(_this.aBg).to(.3, {
            opacity: 200
          }).call(function() {
            cc.tween(_this.aDoc).to(.2, {
              position: cc.v2(0, _this.aDoc.y)
            }, {
              easing: "sineOutIn"
            }).call(function() {
              callActionCat(button);
              cc.tween(_this.aCat).to(.3, {
                opacity: 255
              }).start();
            }).start();
          }).start();
        };
        this.animTouchButton(button, callbackShowButton);
      },
      hideAnimCat: function hideAnimCat() {},
      animTouchButton: function animTouchButton(button, callback) {
        var nodeButton = cc.find("Canvas/play_area/power_items/pw_" + button);
        if (nodeButton) {
          nodeButton.startPosition = nodeButton.position;
          cc.tween(nodeButton).to(.2, {
            position: cc.v2(nodeButton.startPosition.x, nodeButton.startPosition.y - 20)
          }).to(.5, {
            position: cc.v2(nodeButton.startPosition.x, nodeButton.startPosition.y + 100)
          }).call(function() {
            callback && callback(button);
          }).start();
        }
      },
      animHideButton: function animHideButton(button, callback) {
        var nodeButton = cc.find("Canvas/play_area/power_items/pw_" + button);
        nodeButton && cc.tween(nodeButton).to(.2, {
          position: cc.v2(nodeButton.startPosition.x, nodeButton.startPosition.y + 100 + 10)
        }).to(.5, {
          position: cc.v2(nodeButton.startPosition.x, nodeButton.startPosition.y)
        }).call(function() {
          callback && callback();
        }).start();
      },
      effectBoom: function effectBoom(node, callback) {
        if (node) {
          var cloneNodeBom = cc.instantiate(this.spineBoom);
          cloneNodeBom.parent = node;
          cloneNodeBom.position = cc.v2(0, 0);
          cloneNodeBom.active = true;
          var compSke = cloneNodeBom.getComponent(sp.Skeleton);
          var sampleBlock = node.getChildByName("sample_block");
          var nodeImage = sampleBlock.getChildByName("block_img");
          var topLeftParticle = cloneNodeBom.getChildByName("paticle_A");
          var topRightParticle = cloneNodeBom.getChildByName("paticle_B");
          var bottomRightParticle = cloneNodeBom.getChildByName("paticle_C");
          var compTopLeft = topLeftParticle.getComponent(cc.ParticleSystem);
          var compTopRight = topRightParticle.getComponent(cc.ParticleSystem);
          var compBottomRight = bottomRightParticle.getComponent(cc.ParticleSystem);
          var comptAssetTL = topLeftParticle.getComponent(Asset);
          var comptAssetTR = topRightParticle.getComponent(Asset);
          var comptAssetBR = bottomRightParticle.getComponent(Asset);
          comptAssetTL.initAsset(sampleBlock);
          comptAssetTR.initAsset(sampleBlock);
          comptAssetBR.initAsset(sampleBlock);
          nodeImage.opacity = 0;
          compTopLeft.resetSystem();
          compTopRight.resetSystem();
          compBottomRight.resetSystem();
          compSke.setAnimation(1, "No", false);
          compSke.setCompleteListener(function(trackEntry) {
            _G.utils.setTimeout(function() {
              node && node.destroy();
              callback && callback();
            }, 500);
          });
        }
      },
      showAnimRelocated: function showAnimRelocated(arrayAnim, arrayMainNode, callback) {
        var cloneNodeBom = cc.instantiate(this.spineTornaldo);
        false == cc.find("Canvas/layer_anim/content/anim_relocated").active && (cc.find("Canvas/layer_anim/content/anim_relocated").active = true);
        cloneNodeBom.parent = cc.find("Canvas/layer_anim/content/anim_relocated");
        cloneNodeBom.position = cc.v2(0, 0);
        cloneNodeBom.active = true;
        var compSke = cloneNodeBom.getComponent(sp.Skeleton);
        compSke.setAnimation(1, "animation", true);
        var nodeMap = cc.find("Canvas/play_area/map");
        0 != arrayAnim.length && arrayAnim.map(function(node, index) {
          var mainBlockNumber = _G.utils.randomArrItem(_G.configs.blockNumber[1]);
          var mainNode = arrayMainNode[index];
          var sampleBlock = mainNode.getChildByName("sample_block");
          _G.mapVisual.decorBlock(sampleBlock, mainBlockNumber);
          _G.map.currentState[mainNode.cellNumber] = mainBlockNumber;
          _G.mapVisual.decorBlock(node.getChildByName("sample_block"), mainBlockNumber);
          node.position.y += 10;
        });
        nodeMap.active = false;
        var compAnimation = cloneNodeBom.getComponent(cc.Animation);
        compAnimation.play(compAnimation._clips[0].name);
        compAnimation.on("finished", function() {
          cloneNodeBom.destroy();
          var timer = 0;
          arrayAnim.map(function(item, index) {
            var startPosition = cc.v2(item.x, item.y - 10);
            setTimeout(function() {
              item.getChildByName("sample_block").getChildByName("block_img").opacity = 255;
              cc.tween(item).to(.2, {
                position: startPosition
              }).call(function() {
                if (index == arrayAnim.length - 1) {
                  true == cc.find("Canvas/layer_anim/content/anim_relocated").active && (cc.find("Canvas/layer_anim/content/anim_relocated").active = false);
                  nodeMap.active = true;
                  callback && callback();
                }
              }).start();
            }, timer);
            timer += 100 * index;
          });
        });
      },
      effectTriple: function effectTriple(isStart, callback) {
        var _this2 = this;
        var cloneNodeBom = cc.instantiate(this.spineX3);
        false == cc.find("Canvas/layer_anim/content/anim_triple").active && (cc.find("Canvas/layer_anim/content/anim_triple").active = true);
        cloneNodeBom.parent = cc.find("Canvas/layer_anim/content/anim_triple");
        cloneNodeBom.position = cc.v2(0, 0);
        cloneNodeBom.active = true;
        var compSke = cloneNodeBom.getComponent(sp.Skeleton);
        compSke.setAnimation(1, "animation", false);
        compSke.setCompleteListener(function(trackEntry) {
          cloneNodeBom.destroy();
          _this2.anim();
          true == cc.find("Canvas/layer_anim/content/anim_triple").active && (cc.find("Canvas/layer_anim/content/anim_triple").active = false);
          callback && callback();
        });
      },
      anim: function anim() {
        var _this3 = this;
        cc.tween(this.iconX3).to(.1, {
          scale: 1.5
        }).to(.1, {
          angle: -10
        }).to(.1, {
          angle: 10
        }).to(.1, {
          angle: -10
        }).to(.1, {
          angle: 10
        }).to(.1, {
          angle: 0
        }).to(.1, {
          scale: 1
        }).delay(2).call(function() {
          _G.game.triplePoint && _this3.anim();
        }).start();
      },
      stopAnimTriple: function stopAnimTriple() {
        this.iconX3.stopAllActions();
      }
    };
    exports.fxPowerItem = fxPowerItem;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules",
    Asset: "Asset"
  } ],
  fx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "370c2Sb71pHBrzftBqzpjmc", "fx");
    "use strict";
    exports.__esModule = true;
    exports.fx = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var fx = {
      init: function init() {},
      openLayer: function openLayer(node) {
        if (node) {
          var nodeBg = node.getChildByName("bg");
          var nodeCat = node.getChildByName("cat");
          var nodeContent = node.getChildByName("content");
          var logo = node.getChildByName("logo");
          nodeBg.lastOpacity = nodeBg.opacity;
          nodeBg && (nodeBg.opacity = 0);
          nodeCat && (nodeCat.opacity = 0);
          nodeContent && (nodeContent.scale = 0);
          logo && (logo.scale = 0);
          node.active = true;
          var callbackAfterContent = function callbackAfterContent() {
            if (nodeCat) {
              var compCat = nodeCat.getComponent(sp.Skeleton);
              var layerName = node.name;
              "layer_video_continue" == layerName || "layer_game_over" == layerName ? compCat && compCat.setAnimation(0, "lose", true) : compCat && compCat.setAnimation(0, "idle", true);
              cc.tween(nodeCat).to(.2, {
                opacity: 255
              }).delay(1).start();
            }
          };
          var callbackAfterBg = function callbackAfterBg() {
            logo && cc.tween(logo).to(.15, {
              scale: .66
            }).to(.15, {
              scale: .46
            }).to(.15, {
              scale: .56
            }).start();
            nodeContent ? cc.tween(nodeContent).to(.15, {
              scale: 1.2
            }).to(.15, {
              scale: .9
            }).to(.15, {
              scale: 1
            }).call(function() {
              return callbackAfterContent();
            }).start() : callbackAfterContent();
          };
          nodeBg ? cc.tween(nodeBg).to(.2, {
            opacity: nodeBg.lastOpacity
          }).call(function() {
            return callbackAfterBg();
          }).start() : callbackAfterBg();
        }
      },
      closeLayer: function closeLayer(node) {
        if (node) {
          var nodeBg = node.getChildByName("bg");
          var nodeCat = node.getChildByName("cat");
          var nodeContent = node.getChildByName("content");
          var logo = node.getChildByName("logo");
          if (nodeCat) {
            var compCat = nodeCat.getComponent(sp.Skeleton);
            compCat && compCat.clearTracks();
          }
          var callbackAfterContent = function callbackAfterContent() {
            cc.tween(nodeBg).to(.15, {
              opacity: 0
            }).call(function() {
              node.active = false;
              nodeBg.opacity = nodeBg.lastOpacity;
            }).start();
          };
          var callbackAfterCat = function callbackAfterCat() {
            logo && cc.tween(logo).to(.15, {
              scale: .66
            }).to(.15, {
              scale: 0
            }).start();
            nodeContent ? cc.tween(nodeContent).to(.15, {
              scale: 1.1
            }).to(.15, {
              scale: 0
            }).call(function() {
              return callbackAfterContent();
            }).start() : callbackAfterContent();
          };
          nodeCat ? cc.tween(nodeCat).to(.15, {
            opacity: 0
          }).call(function() {
            return callbackAfterCat();
          }).start() : callbackAfterCat();
        }
      },
      bubblePromo: function bubblePromo(promoContainer) {
        promoContainer.children.forEach(function(element) {
          element.stopAllActions();
          element.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.1), cc.scaleTo(1, 1))));
        });
      },
      rotateForever: function rotateForever(node) {
        node.runAction(cc.repeatForever(cc.rotateBy(10, 360)));
      },
      bubbleForever: function bubbleForever(node, timespan, delay, saleFactor1, scaleFactor2) {
        void 0 === timespan && (timespan = .5);
        void 0 === delay && (delay = 0);
        void 0 === saleFactor1 && (saleFactor1 = 1);
        void 0 === scaleFactor2 && (scaleFactor2 = 1.2);
        var orgScale = node.orgScale || node.scale;
        node.orgScale || (node.orgScale = orgScale);
        node.stopAllActions();
        node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(delay), cc.scaleTo(timespan, orgScale * scaleFactor2), cc.scaleTo(timespan, orgScale * saleFactor1), cc.scaleTo(timespan, orgScale * scaleFactor2), cc.scaleTo(timespan, orgScale * saleFactor1))));
      },
      bubble: function bubble(node, callback, timespan, delay, saleFactor1, scaleFactor2) {
        void 0 === timespan && (timespan = .5);
        void 0 === delay && (delay = 0);
        void 0 === saleFactor1 && (saleFactor1 = 1);
        void 0 === scaleFactor2 && (scaleFactor2 = 1.2);
        var orgScale = node.orgScale || node.scale;
        node.orgScale || (node.orgScale = orgScale);
        node.stopAllActions();
        node.runAction(cc.sequence(cc.delayTime(delay), cc.scaleTo(timespan, orgScale * scaleFactor2), cc.scaleTo(timespan, orgScale * saleFactor1), cc.scaleTo(timespan, orgScale * scaleFactor2), cc.scaleTo(timespan, orgScale * saleFactor1), cc.callFunc(function() {
          callback && callback();
        })));
      },
      fxScoreNormal: function fxScoreNormal(keyCellNode, scoredCellArr, callback, fxTime) {
        void 0 === fxTime && (fxTime = .3);
        var globalPos = _G.utils.getGlobalPosition(keyCellNode);
        scoredCellArr.map(function(linkedCellNumber, index) {
          var orgCellNode = cc.find("Canvas/play_area/map/Image_HexBlock_" + linkedCellNumber);
          var fxContainer = cc.find("Canvas/play_area/fx_container");
          var cellNode = _G.utils.copyNodeTo(orgCellNode, fxContainer);
          var posDiff = _G.utils.global2LocalPosDiff(cellNode, globalPos.x, globalPos.y);
          cellNode.getChildByName("bg").active = false;
          cellNode.runAction(cc.sequence(cc.moveBy(fxTime, posDiff).easing(cc.easeIn(2)), cc.callFunc(function() {
            cellNode.removeFromParent(true);
            !index && callback && callback();
          })));
        });
      },
      fxFadeToWhiteAndFadeOut: function fxFadeToWhiteAndFadeOut(cellNode, callback, fxTime) {
        void 0 === fxTime && (fxTime = .3);
        cellNode.runAction(cc.sequence(cc.scaleTo(fxTime, 1.2), cc.scaleTo(fxTime, 1)));
        cellNode.runAction(cc.sequence(cc.delayTime(fxTime), cc.fadeOut(fxTime), cc.callFunc(function() {
          cellNode.removeFromParent(true);
          callback && callback();
        })));
        var blockNode = cellNode.getChildByName("sample_block");
        blockNode.getChildByName("Image_HexBlock").runAction(cc.tintTo(fxTime, 255, 255, 255));
        blockNode.getChildByName("label").runAction(cc.fadeOut(fxTime));
      },
      fxScore7: function fxScore7(keyCellNode, orgScoredCellArr, callback, fxTime) {
        var _this = this;
        void 0 === fxTime && (fxTime = .3);
        _G.audio.playSound("am_thanh_an_7");
        var fxContainer = cc.find("Canvas/play_area/fx_container");
        var keyFxNode;
        var scoredCellNodeArr = orgScoredCellArr.map(function(sCellNum) {
          var orgCellNode = cc.find("Canvas/play_area/map/Image_HexBlock_" + sCellNum);
          var cellNode = _G.utils.copyNodeTo(orgCellNode, fxContainer);
          cellNode.getChildByName("bg").active = false;
          orgCellNode == keyCellNode && (keyFxNode = cellNode);
          return cellNode;
        });
        var fxForSingleCell = function fxForSingleCell(cellNode, index) {
          _this.fxFadeToWhiteAndFadeOut(cellNode, function() {
            index && callback && callback();
          });
        };
        fxForSingleCell(keyFxNode, 1);
        _G.utils.setTimeout(function() {
          keyFxNode.stopAllActions();
          keyFxNode.getChildByName("sample_block").children.map(function(childNode) {
            return childNode.stopAllActions();
          });
          scoredCellNodeArr.map(function(cellNode, index) {
            return fxForSingleCell(cellNode, index);
          });
        }, parseInt(1e3 * fxTime / 2));
      },
      fxBombSelectedCellsRemove: function fxBombSelectedCellsRemove(orgCellNodeArr, callback) {
        var fxContainer = cc.find("Canvas/play_area/fx_container");
        var cellNodeArr = orgCellNodeArr.map(function(orgCellNode) {
          var cellNode = _G.utils.copyNodeTo(orgCellNode, fxContainer);
          cellNode.getChildByName("bg").active = false;
          return cellNode;
        });
        cellNodeArr.map(function(cell, index) {
          _G.fx.fxFadeToWhiteAndFadeOut(cell, function() {
            !index && callback && callback();
          });
        });
      },
      freeToolTipNodeArr: [],
      showScoreToolTip: function showScoreToolTip(text, targetNode, extraY, callback, rangeY, fxTime, fadeInTime, delayTime) {
        var _this2 = this;
        void 0 === extraY && (extraY = 60);
        void 0 === rangeY && (rangeY = 100);
        void 0 === fxTime && (fxTime = 1.6);
        void 0 === fadeInTime && (fadeInTime = .2);
        void 0 === delayTime && (delayTime = 0);
        var sampleNode = cc.find("Canvas/play_area/fx_container/sample_score_tool_tip");
        var labelNode = this.freeToolTipNodeArr.pop() || _G.utils.copyNodeTo(sampleNode, cc.find("Canvas/play_area/fx_container"));
        _G.utils.setLabelText(labelNode, text);
        _G.utils.setGlobalPositionToNode(labelNode, targetNode);
        labelNode.y += extraY;
        labelNode.active = true;
        labelNode.zIndex = 999;
        labelNode.opacity = 0;
        labelNode.runAction(cc.sequence(cc.fadeIn(fadeInTime), cc.delayTime(delayTime), cc.spawn(cc.moveBy(fxTime, cc.v2(0, rangeY)), cc.fadeOut(fxTime)), cc.callFunc(function() {
          labelNode.active = false;
          _this2.freeToolTipNodeArr.push(labelNode);
          callback && callback();
        })));
      },
      freeFlyScoreNodeArr: [],
      singleScoreLabelFly: function singleScoreLabelFly(sourceNode, scoreText, fxTime) {
        var _this3 = this;
        void 0 === fxTime && (fxTime = .3);
        var sampleNode = cc.find("Canvas/play_area/fx_container/sample_label_fly_score");
        var labelNode = this.freeFlyScoreNodeArr.pop() || _G.utils.copyNodeTo(sampleNode, cc.find("Canvas/play_area/fx_container"));
        _G.utils.setLabelText(labelNode, scoreText);
        _G.utils.setGlobalPositionToNode(labelNode, sourceNode);
        var targetNode = cc.find("Canvas/play_area/bg_header/label_score");
        var targetGPos = _G.utils.getGlobalPosition(targetNode);
        labelNode.active = true;
        labelNode.zIndex = 999;
        var posDiff = _G.utils.global2LocalPosDiff(labelNode, targetGPos.x, targetGPos.y);
        labelNode.runAction(cc.sequence(cc.moveBy(fxTime, posDiff).easing(cc.easeIn(1.4)), cc.callFunc(function() {
          labelNode.active = false;
          _this3.freeFlyScoreNodeArr.push(labelNode);
        })));
      },
      multiScoreLabelFly7: function multiScoreLabelFly7(scoredCellArr, totalScore, callback) {
        var _this4 = this;
        var timeStep = .07;
        var scoreText = "+" + _G.utils.localizeNumber(parseInt(totalScore / scoredCellArr.length));
        scoredCellArr.map(function(sCellNum, index) {
          var cellNode = cc.find("Canvas/play_area/map/Image_HexBlock_" + sCellNum);
          _G.utils.setTimeout(function() {
            _this4.singleScoreLabelFly(cellNode, scoreText);
          }, 1e3 * timeStep * index);
        });
        _G.utils.setTimeout(function() {
          return callback && callback();
        }, timeStep * scoredCellArr.length * 1e3);
      },
      multiScoreLabelFlyNormal: function multiScoreLabelFlyNormal(keyCellNode, scoredCellArr, totalScore, callback) {
        var _this5 = this;
        var timeStep = .07;
        var scoreText = "+" + _G.utils.localizeNumber(parseInt(totalScore / scoredCellArr.length));
        scoredCellArr.map(function(sCellNum, index) {
          _G.utils.setTimeout(function() {
            _this5.singleScoreLabelFly(keyCellNode, scoreText);
          }, 1e3 * timeStep * index);
        });
        _G.utils.setTimeout(function() {
          return callback && callback();
        }, timeStep * scoredCellArr.length * 1e3);
      },
      makeRndBlock: function makeRndBlock() {
        var rnd = Math.random();
        var rs = 0;
        Object.keys(rule).map(function(key) {
          if (rs) return;
          rule[key] >= rnd && (rs = key);
        });
        return rs;
      }
    };
    exports.fx = fx;
    var rule = {
      1: .2,
      2: .4,
      3: .55,
      4: .7,
      5: .85,
      6: 1
    };
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  game_over: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7f156snAVOmKQE3xaYn0Gg", "game_over");
    "use strict";
    exports.__esModule = true;
    exports.gameOver = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    var _data = require("./data");
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var gameOver = {
      videoContinueLeft: 0,
      gameStartTime: 0,
      init: function init() {
        var btnSaveMe = cc.find("Canvas/layer_video_continue/content/btn_save_me");
        _G.utils.addButtonComp(btnSaveMe, function() {
          _G.interAd.isUserWatchedVideoContinue = true;
          _G.ui.hideLayer("layer_video_continue");
          _G.utilsFB.log("ev_click_video_continue");
          1 == _G.game.videoContinueLeft && _G.utilsFB.log("ev_click_video_continue_3rd");
          _G.video.showVideo(_G.gameOver.onVideoContinueSuccess, _G.gameOver.onVideoContinueFail);
        });
        _G.utils.addButtonComp(cc.find("Canvas/layer_video_continue/content/btn_cancel"), function() {
          _G.interAd.replayCount2ShowAd++;
          _G.utilsFB.log("ev_cancel_video_continue");
          _G.ui.hideLayer("layer_video_continue");
          _G.data.saveData({
            isAskingVideoContinue: false
          });
          _G.gameOver.realGameOver();
        });
      },
      handleGameOver: function handleGameOver() {
        if (!_G.video.isAvailable) {
          _G.interAd.replayCount2ShowAd++;
          return this.realGameOver();
        }
        if (_G.game.videoContinueLeft <= 0) return this.realGameOver();
        this.check2LogTimeToGameOver(true);
        _G.ui.showLayer("layer_video_continue");
        _G.data.saveData({
          isAskingVideoContinue: true
        });
        _G.utils.setLabelText(cc.find("Canvas/layer_video_continue/btn_save_me/label_time_left"), "" + _G.game.videoContinueLeft);
      },
      onVideoContinueSuccess: function onVideoContinueSuccess() {
        _log(" onVideoContinueSuccess called !!! ");
        cc.find("Canvas/play_area/bomb_container/bomb").active = true;
        _G.tut.showTutBomb();
      },
      onVideoContinueDropBomb: function onVideoContinueDropBomb(selectedCellNodeArr) {
        cc.find("Canvas/play_area/bomb_container/bomb").active = false;
        _G.data.saveData({
          isTutBombShown: true
        });
        _G.tut.isTutBombShown = true;
        _G.fx.fxBombSelectedCellsRemove(selectedCellNodeArr, function() {});
        var selectedCellNumberArr = selectedCellNodeArr.map(function(cellNode) {
          return cellNode.name.replace("Image_HexBlock_", "");
        });
        _G.gameOver.removeLastKeyBlockGroup(selectedCellNumberArr);
        _G.data.saveData({
          currentMapState: _G.map.currentState
        });
        _G.data.saveData({
          isAskingVideoContinue: false
        });
      },
      removeLastKeyBlockGroup: function removeLastKeyBlockGroup(selectedCellArr) {
        _log(" gameover >> video continue >> removeLastKeyBlockGroup = " + selectedCellArr);
        _G.map.clearCellGroup(selectedCellArr);
        _G.game.genNewItem();
        _G.game.videoContinueLeft--;
        _G.data.saveData({
          videoContinueLeft: _G.game.videoContinueLeft
        });
      },
      onVideoContinueFail: function onVideoContinueFail(err) {
        _log(" onVideoContinueFail >> err = ", err);
        _G.gameOver.realGameOver(true);
        _G.ui.showAlert(_G.video.isErrRewardNotCompleted(err) ? "videoSkipped" : "somethingWrong", function() {
          return _G.gameOver.visualGameOver();
        });
        _G.data.saveData({
          isAskingVideoContinue: false
        });
      },
      realGameOver: function realGameOver(isNoVisual) {
        void 0 === isNoVisual && (isNoVisual = false);
        _G.gameOver.saveScore();
        _G.control.newItemNode.active = false;
        if (_G.user.bestScore < _G.user.score) {
          _G.user.bestScore = _G.user.score;
          _G.data.saveData({
            bestScore: _G.user.bestScore
          });
        }
        _G.data.saveData({
          currentMapState: {},
          stepCount: 0,
          lastScore: 0,
          videoContinueLeft: _G.configs.videoContinueTime
        });
        this.check2LogTimeToGameOver();
        _G.utils.setTimeout(function() {
          _G.social.askShortcut(function() {
            return _G.social.postSessionScore();
          });
        }, 500);
        isNoVisual || this.visualGameOver();
        _log("game over !");
      },
      saveScore: function saveScore() {
        _log("_G.user.bestScore = ", _G.user.bestScore, "_G.user.score = ", _G.user.score);
        if (_G.user.bestScore <= _G.user.score) {
          _log("_G.user.bestScore < _G.user.score ");
          _G.user.bestScore = _G.user.score;
          _G.data.saveData({
            bestScore: _G.user.bestScore
          });
        }
        _G.social.playerIdSendMessage && _G.social.sendMessageAfterQuit();
      },
      visualGameOver: function visualGameOver() {
        var isShowChallenge = _G.challenge.check2GetFriendAndRender();
        isShowChallenge ? _G.ui.showLayer("layer_challenge_friend") : _G.ui.showLayer("layer_game_over");
        _G.audio.playSound("game_over");
      },
      replay: function replay(callback) {
        _G.game.stepCount = 0;
        _G.map.resetMap();
        _G.user.score = 0;
        _G.ui.updateScore(0);
        _G.game.videoContinueLeft = _G.configs.videoContinueTime;
        _G.data.saveData({
          currentMapState: {},
          stepCount: 0,
          lastScore: 0
        });
        _G.game.genNewItem();
        _G.interAd.checkToShowReplayAd();
      },
      check2LogTimeToGameOver: function check2LogTimeToGameOver(isWatchingVideo) {
        void 0 === isWatchingVideo && (isWatchingVideo = false);
        if (!this.gameStartTime) return this.gameStartTime = _time();
        var timeRange = _time() - this.gameStartTime;
        _log(" timeRange gameover = " + timeRange + " ");
        var evName = isWatchingVideo ? "ev_game_over_show_video_time" : "ev_game_over_final_time";
        _G.utilsFB.log(evName, parseInt(timeRange / 1e3));
        this.gameStartTime = _time();
      }
    };
    exports.gameOver = gameOver;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules",
    "./data": "data"
  } ],
  game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b006P+TPhOeo6Ufy6Luxy2", "game");
    "use strict";
    exports.__esModule = true;
    exports.game = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var game = {
      cellLinks: require("cell_links"),
      isNewItemRotated: false,
      currentItemBiasType: null,
      currentItemNode: null,
      currentKeyBlockNumber: 0,
      currentMinorBlockNumber: 0,
      stepCount: 0,
      lastKeyCellNumber: 0,
      init: function init() {
        var _this = this;
        _G.login.addLoginDataField("isOldToMap3x3");
        _G.login.addLoginDataField("lastNewItem");
        _G.login.addLoginDataField("stepCount");
        _G.login.addLoginDataField("videoContinueLeft");
        _G.login.addLoginDataField("lastScore");
        _G.login.addLoginDataField("bestScore");
        _G.login.addLoginDataField("currentMapState");
        _G.login.addLoginDataField("isAskingVideoContinue");
        _G.login.addCallback(function(data) {
          _G.data.saveData({
            isOldToMap3x3: true
          });
          _G.user.score = data.lastScore || 0;
          _G.user.bestScore = data.bestScore || 0;
          _G.ui.updateScore(_G.user.score);
          _this.stepCount = data.stepCount || 0;
          _this.videoContinueLeft = data.videoContinueLeft || _G.configs.videoContinueTime;
          if (data.isAskingVideoContinue) {
            _G.data.saveData({
              isAskingVideoContinue: false
            });
            _G.gameOver.replay();
          } else {
            if (data.isTutDone) if (data.lastNewItem && data.isOldToMap3x3) {
              var _data$lastNewItem = data.lastNewItem, blockNumber = _data$lastNewItem.blockNumber, biasType = _data$lastNewItem.biasType, blockInfoArr = _data$lastNewItem.blockInfoArr;
              _this.newItem(blockNumber, biasType, blockInfoArr);
            } else _G.utils.waitToRun(function() {
              _this.genNewItem();
            }, "currentState", _G.map); else _this.newItem(1, "single_block", [ 1 ]);
            _G.map.currentState = data.isTutDone ? data.currentMapState || {} : _G.tut.tutMapState;
            for (var cellNum in _G.map.currentState) _G.map.cellLinkMap[cellNum] || (_G.map.currentState[cellNum] = null);
            _G.mapVisual.renderMap(_G.map.currentState);
          }
          _G.gameOver.check2LogTimeToGameOver();
        });
      },
      genNewItem: function genNewItem() {
        var blockNumberArr = _G.configs.stepCount2BlockNumerArr(this.stepCount + 1).slice(0);
        var biasTypeArrByStepCount = _G.configs.stepCount2BiasTypeArr(this.stepCount + 1);
        var _G$map$checkAvailable = _G.map.checkAvailableNewItemInfo(), blockCount = _G$map$checkAvailable.blockCount, biasTypeArr = _G$map$checkAvailable.biasTypeArr;
        biasTypeArr = biasTypeArr.filter(function(biasType) {
          return biasTypeArrByStepCount.includes(biasType);
        });
        var blockNumArr = [];
        blockNumArr.push(blockCount);
        biasTypeArrByStepCount.includes("single_block") && blockNumArr.push(1);
        var blockNumber = _G.utils.randomArrItem(blockNumArr);
        var biasType = _G.utils.randomArrItem(biasTypeArr);
        var blockInfoArr = [];
        for (var i = 0; i < blockNumber; i++) blockInfoArr.push(_G.utils.randomArrItem(blockNumberArr, true));
        this.newItem(blockNumber, biasType, blockInfoArr);
        this.isNewItemRotated = false;
        _G.data.saveData({
          lastNewItem: {
            blockNumber: blockNumber,
            biasType: biasType,
            blockInfoArr: blockInfoArr
          }
        });
      },
      genItemBlock7: function genItemBlock7() {
        this.newItem(1, "single_block", [ 7 ]);
        this.isNewItemRotated = false;
        _G.data.saveData({
          lastNewItem: {
            blockNumber: 1,
            biasType: "single_block",
            blockInfoArr: [ 7 ]
          }
        });
      },
      newItem: function newItem(blockNumber, biasType, blockInfoArr) {
        void 0 === blockNumber && (blockNumber = 1);
        void 0 === biasType && (biasType = "horizontal");
        return;
        var itemTypeName;
        var itemTypeContainer;
        var arrows;
        var itemTypeNode;
        var keyBlockContainer;
        var minorBlockContainer;
        var keyBlockPos;
      },
      swapNewItemBlocks: function swapNewItemBlocks() {
        var _this2 = this;
        _G.utilsFB.log("ev_click_swap_blocks");
        _G.ui.showNagScreen();
        this.currentItemBiasType = this.getNextSwapBiasType(this.currentItemBiasType);
        var nextKeyBlockPos = this.getBiasTypeKeyBlockPos(this.currentItemBiasType);
        var moveTime = .05;
        this.currentItemNode.runAction(cc.rotateBy(moveTime, 60));
        var blockArr = this.currentItemNode.children;
        blockArr[0].runAction(cc.rotateBy(moveTime, -60));
        blockArr[1].runAction(cc.rotateBy(moveTime, -60));
        _G.utils.setTimeout(function() {
          _this2.currentItemNode.angle = 0;
          blockArr[0].angle = 0;
          blockArr[1].angle = 0;
          blockArr[0].position = nextKeyBlockPos;
          blockArr[1].position = nextKeyBlockPos.mul(-1);
          _G.control.setKeyBlock(_this2.currentItemNode.getChildByName("key_block"));
          _G.ui.hideNagScreen();
        }, 1e3 * moveTime + 10);
        this.isNewItemRotated = true;
        _G.control.setArrowsActive(false);
      },
      getBiasTypeKeyBlockPos: function getBiasTypeKeyBlockPos(biasType) {
        var baseSize = 45;
        var x1 = baseSize * Math.cos(Math.PI / 180 * 60);
        var y1 = baseSize * Math.sin(Math.PI / 180 * 60);
        var biasTypeBlockPositions = {
          left_bias: cc.v2(-x1, y1),
          right_bias_dominated: cc.v2(x1, y1),
          horizontal_dominated: cc.v2(baseSize, 0),
          left_bias_dominated: cc.v2(x1, -y1),
          right_bias: cc.v2(-x1, -y1),
          horizontal: cc.v2(-baseSize, 0)
        };
        return biasTypeBlockPositions[biasType];
      },
      getNextSwapBiasType: function getNextSwapBiasType(currentBiasType) {
        return {
          horizontal: "left_bias",
          left_bias: "right_bias_dominated",
          right_bias_dominated: "horizontal_dominated",
          horizontal_dominated: "left_bias_dominated",
          left_bias_dominated: "right_bias",
          right_bias: "horizontal"
        }[currentBiasType];
      },
      dropNewItemAtCell: function dropNewItemAtCell(keyCellNumber, minorCellNumber) {
        var _this3 = this;
        _G.control.setArrowsActive(false);
        _G.tut.checkDoneTut();
        _G.game.currentItemNode.active = false;
        _G.map.dropNewItemAtCell(keyCellNumber, minorCellNumber);
        this.stepCount++;
        _G.data.saveData({
          stepCount: this.stepCount
        });
        var scoringThreadRemaining = 1;
        var scoringCallback = function scoringCallback(complimentCode) {
          void 0 === complimentCode && (complimentCode = 0);
          scoringThreadRemaining--;
          if (0 != scoringThreadRemaining) return;
          _G.ui.hideNagScreen();
          _G.data.saveData({
            currentMapState: _G.map.currentState
          });
          7 == complimentCode ? _G.ui.showCompliment("PERFECT!", 7) : 2 == complimentCode ? _G.ui.showCompliment("DOUBLE KILL") : complimentCode > 2 && complimentCode < 7 ? _G.ui.showCompliment("TRIPLE KILL!") : complimentCode > 10 && _G.ui.showCompliment("BRAVO");
          if (_G.map.isFulled()) {
            _this3.lastKeyCellNumber = keyCellNumber;
            _G.gameOver.handleGameOver();
          } else _this3.genNewItem();
        };
        _G.ui.showNagScreen();
        if (minorCellNumber && _G.map.currentState[keyCellNumber] != _G.map.currentState[minorCellNumber]) {
          scoringThreadRemaining = 2;
          this.handleBlockScoring(minorCellNumber, scoringCallback);
        }
        this.handleBlockScoring(keyCellNumber, scoringCallback);
      },
      handleBlockScoring: function handleBlockScoring(cellNumber, callback, callTimeCount, lastBlockCount) {
        var _this4 = this;
        callTimeCount || (callTimeCount = 0);
        callTimeCount++;
        var orgBlockNumber = parseInt(_G.map.currentState[cellNumber]);
        var scoredCellArr = _G.map.checkBlockScore(cellNumber);
        var callbackFunc = function callbackFunc(complimentCode) {
          var code = complimentCode || callTimeCount - 1;
          1 == code && (code = lastBlockCount > 3 ? 10 * lastBlockCount : 0);
          _G.utils.setTimeout(function() {
            callback && callback(code);
          }, 10);
        };
        if (!scoredCellArr) return callbackFunc();
        var keyCellNode = cc.find("Canvas/play_area/map/Image_HexBlock_" + cellNumber);
        var totalScore = _G.configs.calculateScore(orgBlockNumber, scoredCellArr.length);
        if (orgBlockNumber < 7) {
          var scoringCallback = function scoringCallback() {
            _G.fx.showScoreToolTip("+" + totalScore, keyCellNode);
            _G.map.setSingleCell(cellNumber, orgBlockNumber + 1);
            keyCellNode.runAction(cc.sequence(cc.scaleTo(.15, 1.24), cc.scaleTo(.15, 1.1), cc.callFunc(function() {
              return _this4.handleBlockScoring(cellNumber, callback, callTimeCount, scoredCellArr.length);
            })));
          };
          _G.fx.fxScoreNormal(keyCellNode, scoredCellArr, scoringCallback);
          _G.utils.setTimeout(function() {
            _G.fx.multiScoreLabelFlyNormal(keyCellNode, scoredCellArr, totalScore);
          }, 600);
          _G.utils.setTimeout(function() {
            return _this4.score(totalScore);
          }, 1e3);
        } else {
          _G.fx.multiScoreLabelFly7(scoredCellArr, totalScore);
          _G.fx.fxScore7(keyCellNode, scoredCellArr, function() {
            return callbackFunc(7);
          });
          _G.utils.setTimeout(function() {
            return _this4.score(totalScore);
          }, 350);
        }
        _G.map.clearCellGroup(scoredCellArr);
      },
      score: function score(scoreNumber) {
        _G.user.score += scoreNumber;
        _G.data.saveData({
          lastScore: _G.user.score
        });
        _G.ui.updateScore(_G.user.score);
      },
      actionPowerItemBom: function actionPowerItemBom(callback) {
        if (_G.map.currentState) {
          var object = _G.map.currentState;
          var nodeMap = cc.find("Canvas/play_area/map");
          var nodeAnimMap = cc.find("Canvas/layer_anim/content/anim_boom/map");
          false == nodeAnimMap.active && (nodeAnimMap.active = true);
          var size = 0;
          var arrayAnim = [];
          var _loop = function _loop(key) {
            var element = object[key];
            if (element && 0 != element) {
              var nodeToCloneAnim = nodeMap.children.find(function(item) {
                return item.name == "Image_HexBlock_" + key;
              });
              var cloneOb = cc.instantiate(nodeToCloneAnim);
              cloneOb.position = nodeToCloneAnim.position;
              nodeAnimMap.addChild(cloneOb);
              cloneOb.getChildByName("sample_block").valueBlock = nodeToCloneAnim.getChildByName("sample_block").valueBlock;
              arrayAnim.push(cloneOb);
              size++;
            }
          };
          for (var key in object) _loop(key);
          if (0 == size) {
            _G.ui.hideLayer("layer_anim");
            return;
          }
          _G.utils.setTimeout(function() {
            var finalCallBack = function finalCallBack() {
              true == nodeAnimMap.active && (nodeAnimMap.active = false);
              callback && callback();
            };
            _G.game.showAnim(arrayAnim, finalCallBack);
            _G.map.resetMap();
            _G.data.saveData({
              currentMapState: {},
              stepCount: 0,
              lastScore: 0
            });
          }, 200);
        }
      },
      showAnim: function showAnim(arrayAnim, mainCallBack) {
        var time = 0;
        var stepTime = 20;
        var callBack = function callBack() {
          var nodeAnimMap = cc.find("Canvas/layer_anim/content/anim_boom/map");
          nodeAnimMap.removeAllChildren();
          _G.ui.hideLayer("layer_anim");
          _G.uiPowerItem.validateBoomSuccess();
          mainCallBack && mainCallBack();
        };
        var _loop2 = function _loop2(index) {
          var itemShow = arrayAnim[index];
          time += 100 + index * stepTime;
          index == arrayAnim.length - 1 ? _G.utils.setTimeout(function() {
            _G.fxPowerItem.effectBoom(itemShow, function() {
              callBack();
            });
          }, time) : _G.utils.setTimeout(function() {
            _G.fxPowerItem.effectBoom(itemShow);
          }, time);
        };
        for (var index = 0; index < arrayAnim.length; index++) _loop2(index);
      },
      actionPowerItemTriple: function actionPowerItemTriple() {
        _G.game.triplePoint = true;
        _G.fxPowerItem.effectTriple(true, function() {
          _G.ui.hideLayer("layer_anim");
          _G.uiPowerItem.validateTripleSuccess();
        });
      },
      actionPowerItemRelocated: function actionPowerItemRelocated(callback) {
        if (_G.map.currentState) {
          var object = _G.map.currentState;
          var nodeMap = cc.find("Canvas/play_area/map");
          var nodeAnimMap = cc.find("Canvas/layer_anim/content/anim_relocated/map");
          var size = 0;
          var arrayAnim = [];
          var arrayMainNode = [];
          var _loop3 = function _loop3(key) {
            var element = object[key];
            if (element && 0 != element) {
              var nodeToCloneAnim = nodeMap.children.find(function(item) {
                return item.name == "Image_HexBlock_" + key;
              });
              var cloneOb = cc.instantiate(nodeToCloneAnim);
              cloneOb.position = nodeToCloneAnim.position;
              nodeAnimMap.addChild(cloneOb);
              arrayAnim.push(cloneOb);
              arrayMainNode.push(nodeToCloneAnim);
              cloneOb.getChildByName("sample_block").valueBlock = nodeToCloneAnim.getChildByName("sample_block").valueBlock;
              size++;
            }
          };
          for (var key in object) _loop3(key);
          if (0 == size) {
            _G.ui.hideLayer("layer_anim");
            return;
          }
          _G.map.resetMap();
          callback && callback();
          _G.fxPowerItem.showAnimRelocated(arrayAnim, arrayMainNode, function() {
            _G.utils.setTimeout(function() {
              var nodeMap = cc.find("Canvas/layer_anim/content/anim_relocated/map");
              nodeMap.removeAllChildren();
              _G.ui.hideLayer("layer_anim");
              _G.uiPowerItem.validateRelocatedSuccess();
              _G.data.saveData({
                currentMapState: _G.map.currentState
              });
              _G.game.searchMapItem();
            }, 500);
          });
        }
      },
      searchMapItem: function searchMapItem() {
        if (_G.map.currentState) {
          var obCheck = {};
          var object = _G.map.currentState;
          for (var key in object) {
            var element = object[key];
            if (element) if (obCheck[element]) obCheck[element].push(key); else {
              obCheck[element] = [];
              obCheck[element].push(key);
            }
          }
          _G.game.seachToAutoMerge(obCheck);
        }
      },
      seachToAutoMerge: function seachToAutoMerge(obCheck) {
        var resultCount = [];
        var totalArray = [];
        for (var key in obCheck) {
          var element = obCheck[key];
          if (element.length >= 3) {
            for (var index = 0; index < element.length; index++) {
              var id = element[index];
              var arr = _G.game.loopSearch(id, element);
              arr.sort(function(a, b) {
                if (a < b) return -1;
                return 1;
              });
              arr.length >= 3 && resultCount.push(arr);
            }
            if (0 != resultCount.length) {
              var arrResult = _G.game.compareArr(key, resultCount);
              arrResult.length >= 3 && totalArray.push(arrResult);
            }
          }
        }
        if (0 != totalArray.length) {
          var arrayShowAnim = _G.utils.randomArrItem(totalArray);
          _G.game.loopAnim(arrayShowAnim);
        }
      },
      loopAnim: function loopAnim(arrResult) {
        var arrFirst = arrResult;
        var keyCellNumber = _G.utils.randomArrItem(arrFirst);
        _G.utils.setTimeout(function() {
          _G.game.handleBlockScoring(keyCellNumber, null, null, null, function() {
            _G.data.saveData({
              currentMapState: _G.map.currentState
            });
            _G.game.searchMapItem();
          });
        }, 500);
      },
      loopSearch: function loopSearch(item, array) {
        var arr = [];
        arr.push(item);
        if (this.cellLinks) for (var key in this.cellLinks) if (-1 != key.indexOf(item)) {
          var nextPost = null;
          -1 != key.indexOf("_" + item) ? nextPost = key.replace("_" + item, "") : -1 != key.indexOf(item + "_") && (nextPost = key.replace(item + "_", ""));
          -1 != array.indexOf(nextPost) && arr.push(nextPost);
        }
        return arr;
      },
      compareArr: function compareArr(key, resultCount) {
        if (0 == resultCount.length) return null;
        var result = null;
        resultCount.map(function(array) {
          result ? array.map(function(id) {
            if (-1 == result.indexOf(id)) {
              var value = _G.map.currentState[id];
              value && 0 != value && value == key && result.push(id);
            }
          }) : result = array;
        });
        return result;
      }
    };
    exports.game = game;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules",
    cell_links: "cell_links"
  } ],
  inter_ad: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fcbfbljkFhMgZXyELxeCTA9", "inter_ad");
    "use strict";
    exports.__esModule = true;
    exports.interAd = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var interAd = {
      isUserWatchedVideoContinue: false,
      init: function init() {
        this.preloadInterAds();
      },
      interAdObj: null,
      preloadInterAds: function preloadInterAds() {
        var _this = this;
        if (!window.FBInstant) return;
        if (this.isLoading) return;
        console.log("interAd.preloadInterAds ...  ");
        this.interAdObj = null;
        this.isLoading = true;
        FBInstant.getInterstitialAdAsync(_G.configs.interAdId).then(function(interAdObj) {
          interAdObj.loadAsync().then(function() {
            console.log("interAd.preloadInterAds successfully ");
            _this.interAdObj = interAdObj;
            _this.isLoading = false;
          })["catch"](function(e) {
            console.warn(e);
            _this.isLoading = false;
          });
        })["catch"](function(e) {
          console.warn(e);
        });
      },
      showInterAds: function showInterAds(adPosition, callBack, maxLoadTimeWait) {
        var _this2 = this;
        void 0 === maxLoadTimeWait && (maxLoadTimeWait = 1);
        if (!window.FBInstant) return callBack && callBack();
        _G.utils.waitToRun(function() {
          _this2.interAdObj.showAsync().then(function() {
            console.log("interAd.showInterAds success ");
            _G.interAd.log(adPosition, 1);
            callBack && callBack();
            _this2.preloadInterAds();
          })["catch"](function(e) {
            console.log("interAd.showInterAds fail ");
            console.warn(e);
            _G.interAd.log(adPosition, 0, e.code);
            callBack && callBack();
            "RATE_LIMITED" != e.code && _this2.preloadInterAds();
          });
        }, "interAdObj", this, .1, maxLoadTimeWait, function() {
          console.log("interAd.showInterAds fail ");
          console.warn("interAd load wait timeout 5 secs");
          _this2.preloadInterAds();
          callBack && callBack();
        });
      },
      log: function log(adPosition, result, err_code) {
        void 0 === err_code && (err_code = "");
        _G.utilsFB.log("ev_inter_ad", 1, {
          position: adPosition,
          watched_success: result,
          err_code: err_code
        });
        if (result) {
          _G.utilsFB.log("Ads-Total-Inter");
          _G.utilsFB.log("Ads-Total");
        }
      },
      replayCount2ShowAd: 0,
      checkToShowReplayAd: function checkToShowReplayAd() {
        this.showInterAds("gameOverReplay");
      }
    };
    exports.interAd = interAd;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  language_message: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12a31WAXT5L/6jYvB16YtMM", "language_message");
    "use strict";
    exports.__esModule = true;
    exports.generateMsgTextObject = void 0;
    var generateMsgTextObject = function generateMsgTextObject(content) {
      return {
        default: content,
        localizations: {
          en_US: content,
          ca_ES: content,
          cs_CZ: content,
          cx_PH: content,
          cy_GB: content,
          da_DK: content,
          de_DE: content,
          eu_ES: content,
          en_UD: content,
          es_LA: content,
          es_ES: content,
          gn_PY: content,
          fi_FI: content,
          fr_FR: content,
          gl_ES: content,
          hu_HU: content,
          it_IT: content,
          ja_JP: content,
          ko_KR: content,
          nb_NO: content,
          nn_NO: content,
          nl_NL: content,
          fy_NL: content,
          pl_PL: content,
          pt_BR: content,
          pt_PT: content,
          ro_RO: content,
          ru_RU: content,
          sk_SK: content,
          sl_SI: content,
          sv_SE: content,
          th_TH: content,
          tr_TR: content,
          ku_TR: content,
          zh_CN: content,
          zh_HK: content,
          zh_TW: content,
          af_ZA: content,
          sq_AL: content,
          hy_AM: content,
          az_AZ: content,
          be_BY: content,
          bn_IN: content,
          bs_BA: content,
          bg_BG: content,
          hr_HR: content,
          nl_BE: content,
          en_GB: content,
          et_EE: content,
          fo_FO: content,
          fr_CA: content,
          ka_GE: content,
          el_GR: content,
          gu_IN: content,
          hi_IN: content,
          is_IS: content,
          id_ID: content,
          ga_IE: content,
          jv_ID: content,
          kn_IN: content,
          kk_KZ: content,
          lv_LV: content,
          lt_LT: content,
          mk_MK: content,
          mg_MG: content,
          ms_MY: content,
          mt_MT: content,
          mr_IN: content,
          mn_MN: content,
          ne_NP: content,
          pa_IN: content,
          sr_RS: content,
          so_SO: content,
          sw_KE: content,
          tl_PH: content,
          ta_IN: content,
          te_IN: content,
          ml_IN: content,
          uk_UA: content,
          uz_UZ: content,
          vi_VN: content,
          km_KH: content,
          tg_TJ: content,
          ar_AR: content,
          he_IL: content,
          ur_PK: content,
          fa_IR: content,
          ps_AF: content,
          my_MM: content,
          qz_MM: content,
          or_IN: content,
          si_LK: content,
          rw_RW: content,
          cb_IQ: content,
          ha_NG: content,
          ja_KS: content,
          br_FR: content,
          tz_MA: content,
          co_FR: content,
          as_IN: content,
          ff_NG: content,
          sc_IT: content,
          sz_PL: content
        }
      };
    };
    exports.generateMsgTextObject = generateMsgTextObject;
    cc._RF.pop();
  }, {} ],
  leaderboard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4c8f3VBHB1H7Zy20XR38AK/", "leaderboard");
    "use strict";
    exports.__esModule = true;
    exports.leaderBoard = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var leaderBoard = {
      init: function init() {
        this.bindButtons();
      },
      bindButtons: function bindButtons() {
        var _this = this;
        _G.utils.addButtonComp(cc.find("Canvas/layer_leaderboard/btn_brag"), function() {
          _G.social.share(_G.user.bestScore, "leaderboard");
        });
        _G.utils.addButtonComp(cc.find("Canvas/layer_leaderboard/btn_back"), function() {
          _G.ui.hideLayer("layer_leaderboard");
        });
        _G.utils.addButtonComp(cc.find("Canvas/layer_leaderboard/btn_continue"), function() {
          _G.ui.hideLayer("layer_leaderboard");
        });
        _G.utils.addButtonComp(cc.find("Canvas/layer_leaderboard/btn_invite"), function() {
          _G.social.invite();
        });
        _G.utils.addButtonComp(cc.find("Canvas/layer_leaderboard/btn_frienld"), function() {
          _this.updateUIHeader(0);
        });
        _G.utils.addButtonComp(cc.find("Canvas/layer_leaderboard/btn_global"), function() {
          _this.updateUIHeader(1);
        });
      },
      updateUIHeader: function updateUIHeader(value) {
        var friendDeActive = cc.find("Canvas/layer_leaderboard/btn_frienld/bg_leader_de");
        var friendActive = cc.find("Canvas/layer_leaderboard/btn_frienld/bg_leader_ac");
        var globalDeActive = cc.find("Canvas/layer_leaderboard/btn_global/bg_leader_de");
        var globalActive = cc.find("Canvas/layer_leaderboard/btn_global/bg_leader_ac");
        if (value) {
          friendActive.active = false;
          friendDeActive.active = true;
          globalActive.active = true;
          globalDeActive.active = false;
        } else {
          friendActive.active = true;
          friendDeActive.active = false;
          globalActive.active = false;
          globalDeActive.active = true;
        }
      }
    };
    exports.leaderBoard = leaderBoard;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  load_optimize: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92ffa13eQpNpY7rLxzNKOJI", "load_optimize");
    "use strict";
    exports.__esModule = true;
    exports.loadOptimize = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var loadOptimize = {
      init: function init() {
        var lateSpriteNodePathArr = [ "Canvas/messages", "Canvas/shares", "Canvas/bg/full_bg", "Canvas/play_area/power_items" ];
        lateSpriteNodePathArr.map(function(path) {
          var node = cc.find(path);
          -1 == path.indexOf("full_bg") && (node.opacity = 0);
          _G.utils.setTimeout(function() {
            node.active = true;
            -1 == path.indexOf("full_bg") && node.runAction(cc.fadeIn(.5));
          }, 3e3);
        });
      }
    };
    exports.loadOptimize = loadOptimize;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  localize_auto_tranform: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b4d48HOuihAR6QC6dKTLc8N", "localize_auto_tranform");
    "use strict";
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.nodeProxy = _GAME.localize.getProxyNode();
        this.nodeProxy.on("TRANFORM_TEXT", this.changeText, this);
      },
      onDestroy: function onDestroy() {
        this.nodeProxy.off("TRANFORM_TEXT", this.changeText, this);
      },
      onEnable: function onEnable() {
        this.nodeProxy.on("TRANFORM_TEXT", this.changeText, this);
        this.changeText();
      },
      changeText: function changeText() {
        if (-1 != _GAME.localize.pointerLang && _GAME.localize.currentLanguage && this.node.getComponent(cc.Label)) {
          2 != this.node.getComponent(cc.Label).overflow && (this.node.getComponent(cc.Label).overflow = 2);
          var cache = this.node.getComponent(cc.Label)._cache;
          if (!cache) {
            this.node.getComponent(cc.Label)._cache = this.node.getComponent(cc.Label).string;
            cache = this.node.getComponent(cc.Label)._cache;
          }
          var valueCompare = "";
          for (var index = 0; index < cache.length; index++) {
            var element = cache[index];
            valueCompare += " " != element ? element.toUpperCase() : "";
          }
          _GAME.utils.setLabelText(this.node, _GAME.localize.convertPosition(valueCompare));
        }
      }
    });
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  localize_config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3960dtV9+JEwL1XPTZlFSol", "localize_config");
    "use strict";
    exports.__esModule = true;
    exports.localizeConfig = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var localizeConfig = {
      init: function init() {
        console.log("LOAD module localizeConfig");
      },
      totalLocalLang: [ "en_US", "vi_VN", "th_TH", "fr_FR", "pt_PT", "es_ES", "ar_AR", "tr_TR", "de_DE", "zh_CN" ],
      meaningLocalLang: [ "English", "Ti\u1ebfng Vi\u1ec7t", "\u0e44\u0e17\u0e22", "fran\xe7ais", "Portugu\xeas", "Espa\xf1ol", "\u0639\u0631\u0628\u0649", "T\xfcrk", "Deutsche", "\u4e2d\u6587" ],
      localize: {
        PAUSE: {
          ar_AR: "\u0648\u0642\u0641\u0629",
          pl_PL: "Pauza",
          en_US: "Pause",
          tr_TR: "Duraklat",
          vi_VN: "T\u1ea1m d\u1eebng",
          es_ES: "Pausa",
          zh_CN: "\u66ab\u505c",
          th_TH: "\u0e2b\u0e22\u0e38\u0e14",
          fr_FR: "Pause",
          pt_PT: "Pausa",
          de_DE: "Pause"
        },
        CANCEL: {
          ar_AR: "\u0627\u0633\u062a\u0642\u0627\u0644",
          pl_PL: "Porzuci\u0107",
          en_US: "Cancel",
          tr_TR: "\xc7\u0131k",
          vi_VN: "B\u1ecf",
          es_ES: "Dejar",
          zh_CN: "\u653e\u68c4",
          th_TH: "\u0e40\u0e25\u0e34\u0e01",
          fr_FR: "Quitter",
          pt_PT: "Sair",
          de_DE: "Verlassen"
        },
        GAMEOVER: {
          ar_AR: "\u0627\u0646\u062a\u0647\u062a \u0627\u0644\u0644\u0639\u0628\u0629",
          pl_PL: "Koniec gry",
          en_US: "Game over",
          tr_TR: "Oyun bitti",
          vi_VN: "Thua cu\u1ed9c",
          es_ES: "Juego terminado",
          zh_CN: "\u904a\u6232\u7d50\u675f",
          th_TH: "\u0e08\u0e1a\u0e40\u0e01\u0e21",
          fr_FR: "Jeu termin\xe9",
          pt_PT: "Fim de jogo",
          de_DE: "Spiel ist aus"
        },
        YOURSCORE: {
          ar_AR: "\u062f\u0631\u062c\u0627\u062a\u0643",
          pl_PL: "Tw\xf3j wynik",
          en_US: "Your score",
          tr_TR: "Puan\u0131n",
          vi_VN: "\u0110i\u1ec3m",
          es_ES: "Tu puntuaci\xf3n",
          zh_CN: "\u4f60\u7684\u5206\u6578",
          th_TH: "\u0e04\u0e30\u0e41\u0e19\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",
          fr_FR: "ton score",
          pt_PT: "Sua pontua\xe7\xe3o",
          de_DE: "Ihre Punktzahl"
        },
        BRAG: {
          ar_AR: "\u062a\u0641\u0627\u062e\u0631",
          pl_PL: "Przechwala\u0107",
          en_US: "Brag",
          tr_TR: "\xd6v\xfcnmek",
          vi_VN: "Chia s\u1ebb",
          es_ES: "Jactarse",
          zh_CN: "\u5439\u725b",
          th_TH: "\u0e42\u0e21\u0e49",
          fr_FR: "Se vanter",
          pt_PT: "Gabar-se",
          de_DE: "Prahlen"
        },
        PLAYANOTHERFRIENDS: {
          ar_AR: "\u0627\u0644\u0639\u0628 \u0645\u0639 \u0627\u0644\u0627\u0635\u062f\u0642\u0627\u0621",
          pl_PL: "Gra\u0107 z przyjaci\xf3\u0142mi",
          en_US: "Play with friends",
          tr_TR: "Arkada\u015flarla oynamak",
          vi_VN: "Ch\u01a1i c\xf9ng b\u1ea1n",
          es_ES: "Jugar con amigas",
          zh_CN: "\u8207\u670b\u53cb\u4e00\u8d77\u73a9",
          th_TH: "\u0e40\u0e25\u0e48\u0e19\u0e01\u0e31\u0e1a\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19",
          fr_FR: "jouer avec des amis",
          pt_PT: "Jogar com amigos",
          de_DE: "Mit Freunden spielen"
        },
        OUTOFMOVE: {
          ar_AR: "\u062e\u0627\u0631\u062c \u0627\u0644\u062d\u0631\u0643\u0629",
          pl_PL: "Brak ruchu",
          en_US: "Out of move",
          tr_TR: "Hareket d\u0131\u015f\u0131",
          vi_VN: "H\u1ebft n\u01b0\u1edbc \u0111i",
          es_ES: "Fuera de movimiento",
          zh_CN: "\u642c\u8d70",
          th_TH: "\u0e44\u0e21\u0e48\u0e40\u0e04\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e2b\u0e27",
          fr_FR: "Hors de mouvement",
          pt_PT: "Fora de movimento",
          de_DE: "Au\xdfer Bewegung"
        },
        CONTINUE: {
          ar_AR: "\u0627\u0633\u062a\u0645\u0631",
          pl_PL: "Kontyntynuj",
          en_US: "Continue",
          tr_TR: "Devam et",
          vi_VN: "Ti\u1ebfp t\u1ee5c",
          es_ES: "Seguir",
          zh_CN: "\u7e7c\u7e8c",
          th_TH: "\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e48\u0e2d",
          fr_FR: "Continuer",
          pt_PT: "Continuar",
          de_DE: "Fortsetzen"
        },
        RESTART: {
          ar_AR: "\u0625\u0639\u0627\u062f\u0629 \u0628\u062f\u0621",
          pl_PL: "Uruchom ponownie",
          en_US: "Restart",
          tr_TR: "Tekrar ba\u015flat",
          vi_VN: "Ch\u01a1i l\u1ea1i",
          es_ES: "Reiniciar",
          zh_CN: "\u91cd\u65b0\u958b\u59cb",
          th_TH: "\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e43\u0e2b\u0e21\u0e48",
          fr_FR: "Red\xe9marrer",
          pt_PT: "Reiniciar",
          de_DE: "Neustart"
        },
        PERFECT: {
          ar_AR: "\u0641\u064a \u0627\u062d\u0633\u0646 \u0627\u0644\u0627\u062d\u0648\u0627\u0644",
          pl_PL: "Idealny",
          en_US: "Perfect",
          tr_TR: "M\xfckemmel",
          vi_VN: "Tuy\u1ec7t v\u1eddi",
          es_ES: "Perfecta",
          zh_CN: "\u5b8c\u7f8e",
          th_TH: "\u0e2a\u0e21\u0e1a\u0e39\u0e23\u0e13\u0e4c\u0e41\u0e1a\u0e1a",
          fr_FR: "Parfait",
          pt_PT: "impec\xe1vel",
          de_DE: "Perfekt"
        },
        GREAT: {
          ar_AR: "\u0639\u0638\u064a\u0645",
          pl_PL: "\u015awietny",
          en_US: "Great",
          tr_TR: "Harika",
          vi_VN: "Tuy\u1ec7t",
          es_ES: "Excelente",
          zh_CN: "\u975e\u5e38\u597d",
          th_TH: "\u0e40\u0e22\u0e35\u0e48\u0e22\u0e21\u0e21\u0e32\u0e01",
          fr_FR: "g\xe9nial",
          pt_PT: "\xd3timo",
          de_DE: "Toll"
        },
        PLAY: {
          ar_AR: "\u0644\u0639\u0628",
          pl_PL: "Gra\u0107",
          en_US: "Play",
          tr_TR: "Oyna",
          vi_VN: "Ch\u01a1i",
          es_ES: "Tocar",
          zh_CN: "\u73a9",
          th_TH: "\u0e40\u0e25\u0e48\u0e19",
          fr_FR: "Jouer",
          pt_PT: "Jogar ",
          de_DE: "abspielen"
        },
        "WANTMORECHANCE?": {
          ar_AR: "\u062a\u0631\u064a\u062f \u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0641\u0631\u0635",
          pl_PL: "Chcesz wi\u0119cej szans",
          en_US: "Want more chance",
          tr_TR: "Daha fazla \u015fans istiyor",
          vi_VN: "Ch\u01a1i th\xeam ",
          es_ES: "Quiero m\xe1s oportunidad",
          zh_CN: "\u60f3\u8981\u66f4\u591a\u6a5f\u6703",
          th_TH: "\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e42\u0e2d\u0e01\u0e32\u0e2a\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19",
          fr_FR: "Je veux plus de chance",
          pt_PT: "Quer mais chance",
          de_DE: "Willst du mehr Chance"
        },
        VIDEOISNOTAVAILABLE: {
          ar_AR: "\u0627\u0644\u0641\u064a\u062f\u064a\u0648 \u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631",
          pl_PL: "Film jest niedost\u0119pny",
          en_US: "Video is not available",
          tr_TR: "Video mevcut de\u011fil",
          vi_VN: "Video kh\xf4ng kh\u1ea3 d\u1ee5ng",
          es_ES: "El video no est\xe1 disponible",
          zh_CN: "\u8996\u983b\u4e0d\u53ef\u7528",
          th_TH: "\u0e44\u0e21\u0e48\u0e21\u0e35\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d",
          fr_FR: "La vid\xe9o n'est pas disponible",
          pt_PT: "O v\xeddeo n\xe3o est\xe1 dispon\xedvel",
          de_DE: "Video ist nicht verf\xfcgbar"
        },
        NOTICE: {
          ar_AR: "\u062a\u0646\u0648\u064a\u0647",
          pl_PL: "Og\u0142oszenie",
          en_US: "Notice",
          tr_TR: "fark\u0131na varmak",
          vi_VN: "Ch\xfa \xfd",
          es_ES: "darse cuenta",
          zh_CN: "\u6ce8\u610f",
          th_TH: "\u0e41\u0e08\u0e49\u0e07\u0e43\u0e2b\u0e49\u0e17\u0e23\u0e32\u0e1a\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32",
          fr_FR: "Remarquer",
          pt_PT: "Aviso pr\xe9vio",
          de_DE: "Beachten"
        },
        REPLAY: {
          ar_AR: "\u0625\u0639\u0627\u062f\u0629",
          pl_PL: "Powt\xf3rna rozgrywka",
          en_US: "Replay",
          tr_TR: "Tekrar oynat",
          vi_VN: "Ch\u01a1i l\u1ea1i",
          es_ES: "Repetici\xf3n",
          zh_CN: "\u91cd\u73a9",
          th_TH: "\u0e40\u0e25\u0e48\u0e19\u0e0b\u0e49\u0e33",
          fr_FR: "Rejouer",
          pt_PT: "Replay",
          de_DE: "Wiederholung"
        },
        NICE: {
          ar_AR: "\u0644\u0637\u064a\u0641",
          pl_PL: "\u0141adny",
          en_US: "Nice",
          tr_TR: "G\xfczel",
          vi_VN: "T\u1ed1t",
          es_ES: "Niza",
          zh_CN: "\u597d",
          th_TH: "\u0e14\u0e35",
          fr_FR: "agr\xe9able",
          pt_PT: "bom",
          de_DE: "nett"
        },
        WATCH: {
          ar_AR: "\u0631\u0627\u0642\u0628",
          pl_PL: "Zegarek",
          en_US: "Watch",
          tr_TR: "\u0130zlemek",
          vi_VN: "Xem",
          es_ES: "Reloj",
          zh_CN: "\u770b",
          th_TH: "\u0e14\u0e39",
          fr_FR: "Regarder",
          pt_PT: "Ver",
          de_DE: "Uhr"
        },
        BEST: {
          ar_AR: "\u0627\u0644\u0623\u0641\u0636\u0644",
          pl_PL: "Najlepsza",
          en_US: "Best",
          tr_TR: "En iyi",
          vi_VN: "\u0110i\u1ec3m cao",
          es_ES: "superior",
          zh_CN: "\u6700\u597d",
          th_TH: "\u0e14\u0e35\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14",
          fr_FR: "le plus",
          pt_PT: "Melhor",
          de_DE: "Beste"
        },
        OK: {
          ar_AR: "OK",
          pl_PL: "ok",
          en_US: "OK",
          tr_TR: "OK",
          vi_VN: "OK",
          es_ES: "OK",
          zh_CN: "\u597d",
          th_TH: "OK",
          fr_FR: "OK",
          pt_PT: "OK",
          de_DE: "OK"
        },
        TRYTHISTOCLEARBLOCK: {
          ar_AR: "\u062c\u0631\u0628 \u0647\u0630\u0627 \u0644\u0643\u062a\u0644\u0629 \u0648\u0627\u0636\u062d\u0629",
          pl_PL: "Spr\xf3buj to do jasnej bloku",
          en_US: "Try this to clear block",
          tr_TR: "berrak blo\u011fa bu deneyin",
          vi_VN: "H\xe3y th\u1eed \u0111i\u1ec1u n\xe0y v\u1edbi kh\u1ed1i r\xf5 r\xe0ng",
          es_ES: "Prueba esto al bloque clara",
          zh_CN: "\u5c1d\u8bd5\u4f7f\u7528\u6b64\u65b9\u6cd5\u660e\u786e\u5757",
          th_TH: "\u0e25\u0e2d\u0e07\u0e19\u0e35\u0e49\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e1b\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19\u0e17\u0e35\u0e48\u0e0a\u0e31\u0e14\u0e40\u0e08\u0e19",
          fr_FR: "Essayez ceci au bloc clair",
          pt_PT: "Tente isto para bloco clara",
          de_DE: [ "Versuchen Sie", " dies zu klaren Block" ]
        },
        GOOD: {
          ar_AR: "\u062d\u0633\u0646",
          pl_PL: "DOBRY",
          en_US: "GOOD",
          tr_TR: "\u0130Y\u0130",
          vi_VN: "T\u1ed0T",
          es_ES: "BUENO",
          zh_CN: "\u597d",
          th_TH: "\u0e14\u0e35",
          fr_FR: "BIEN",
          pt_PT: "BOA",
          de_DE: "GUT"
        },
        "TOOHARD?TRYTHIS!": {
          ar_AR: "\u0635\u0639\u0628 \u062c\u062f\u0627 \u061f \u062c\u0631\u0628 \u0647\u0630\u0627 !",
          pl_PL: "Zbyt trudne ? Spr\xf3buj tego !",
          en_US: "Too hard ? Try this !",
          tr_TR: "\xc7ok zor ? Bunu dene !",
          vi_VN: "Qu\xe1 kh\xf3 ? Th\u1eed \u0111i !",
          es_ES: "Demasiado duro ? Prueba esto !",
          zh_CN: "\u592a\u96be \uff1f\u8bd5\u8bd5\u8fd9\u4e2a \uff01",
          th_TH: "\u0e22\u0e32\u0e01\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b ? \u0e25\u0e2d\u0e07\u0e19\u0e35\u0e49!",
          fr_FR: "Trop dur ? Essaye \xe7a !",
          pt_PT: "Demasiado dif\xedcil ? Tente isto!",
          de_DE: "Zu schwer ? Versuche dies !"
        },
        TRYX3YOURSCORE: {
          ar_AR: "\u0645\u062d\u0627\u0648\u0644\u0629 X3 \u062f\u0631\u062c\u0627\u062a\u0643",
          pl_PL: "Spr\xf3buj X3 sw\xf3j wynik",
          en_US: "Try X3 your score",
          tr_TR: "X3 puan\u0131n\u0131z\u0131 deneyin",
          vi_VN: "H\xe3y th\u1eed \u0111i\u1ec3m s\u1ed1 c\u1ee7a b\u1ea1n X3",
          es_ES: "Trate X3 su puntuaci\xf3n",
          zh_CN: "\u5c1d\u8bd5X3\u4f60\u7684\u5206\u6570",
          th_TH: "\u0e25\u0e2d\u0e07 X3 \u0e04\u0e30\u0e41\u0e19\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",
          fr_FR: "Essayez votre score X3",
          pt_PT: "Tente X3 sua pontua\xe7\xe3o",
          de_DE: "Versuchen X3 Ihre G\xe4ste"
        },
        TABHERETOSWITCHBLOCK: {
          ar_AR: "\u0627\u0644\u062a\u0628\u0648\u064a\u0628 \u0647\u0646\u0627 \u0644\u0644\u062a\u0628\u062f\u064a\u0644 \u0643\u062a\u0644\u0629",
          pl_PL: "Tab tutaj aby prze\u0142\u0105czy\u0107 blok",
          en_US: "Tab here to switch block",
          tr_TR: "Sekme burada blok ge\xe7mek i\xe7in",
          vi_VN: "Tab \u0111\xe2y \u0111\u1ec3 chuy\u1ec3n kh\u1ed1i",
          es_ES: "Pesta\xf1a aqu\xed para cambiar el bloque",
          zh_CN: "\u6807\u7b7e\u6b64\u5904\u5207\u6362\u5757",
          th_TH: "\u0e41\u0e17\u0e47\u0e1a\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2a\u0e25\u0e31\u0e1a\u0e1a\u0e25\u0e47\u0e2d\u0e01",
          fr_FR: "Tab ici pour basculer bloc",
          pt_PT: "Tab aqui para alternar bloco",
          de_DE: "Tab hier zu Block wechseln"
        },
        X3SCORE: {
          ar_AR: "\u0627\u0644\u0646\u062a\u064a\u062c\u0629 X3",
          pl_PL: "wynik x3",
          en_US: "x3 score",
          tr_TR: "x3 puan\u0131",
          vi_VN: "\u0111i\u1ec3m x3",
          es_ES: "puntuaci\xf3n x3",
          zh_CN: "X3\u5f97\u5206",
          th_TH: "\u0e04\u0e30\u0e41\u0e19\u0e19 x3",
          fr_FR: "Le score x3",
          pt_PT: "pontua\xe7\xe3o x3",
          de_DE: "x3 Punktzahl"
        },
        "OOPS!\n\nSOMETHINGWENTWRONG": {
          ar_AR: "\u0648\u062c\u0647 \u0627\u0644\u0641\u062a\u0627\u0629! \n\n \u0647\u0646\u0627\u0643 \u062e\u0637\u0623 \u0645\u0627",
          pl_PL: "Ups! \n\n Co\u015b posz\u0142o nie tak",
          en_US: "Oops!\n\n Something went wrong",
          tr_TR: "Hata! \n\n Bir \u015feyler ters gitti",
          vi_VN: "Oops! \n\n M\u1ed9t c\xe1i g\xec \u0111\xf3 \u0111\xe3 \u0111i l\u1ed7i",
          es_ES: "\xa1Huy! \n\n Algo sali\xf3 mal",
          zh_CN: "\u7cdf\u7cd5\uff01\n\n\u51fa\u4e86\u9519",
          th_TH: "\u0e2d\u0e4a\u0e30! \n\n \u0e1a\u0e32\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",
          fr_FR: "Oops! \n\n Quelque chose a mal tourn\xe9",
          pt_PT: "Ops! \n\n Algo deu errado",
          de_DE: "Oops! \n\n ging etwas schief"
        }
      },
      linkParameter: {
        "Canvas/play_area/triple": "x3 score",
        "Canvas/play_area/labels/compliment/label": "NICE",
        "Canvas/play_area/labels/game_over/sample_score_tool_tip": "OUT OF MOVES!",
        "Canvas/layer_pause/label_pause": "Pause",
        "Canvas/layer_pause/btn_continue/label_continue": "CONTINUE",
        "Canvas/layer_pause/btn_restart/label_restart": "RESTART",
        "Canvas/layer_pause/btn_localize/lb_lang": "English",
        "Canvas/layer_tut/hinding": "Label",
        "Canvas/layer_tut/text_motivate": "Label",
        "Canvas/layer_video_continue/label_continue": "Out of move",
        "Canvas/layer_video_continue/label_content": "Want more chance ?",
        "Canvas/layer_video_continue/btn_save_me/label_continue": "WATCH",
        "Canvas/layer_video_continue/btn_cancel/label_restart": "GAME OVER",
        "Canvas/layer_result/lb_best_score": "BEST",
        "Canvas/layer_result/lb_score": "YOUR SCORE",
        "Canvas/layer_result/btn_replay/label_replay": "REPLAY",
        "Canvas/layer_result/btn_brag/label_brag": "BRAG",
        "Canvas/layer_leaderboard/header/label_score_intro": "SCORE",
        "Canvas/layer_leaderboard/header/btn_brag/label_continue": "BRAG",
        "Canvas/layer_leaderboard/content_bg/bottom_container/btn_replay/label_restart": "REPLAY",
        "Canvas/layer_challenge/content/lb_static": "Your Score",
        "Canvas/layer_challenge/content/header/lb_top": "Great",
        "Canvas/layer_challenge/content/btn_c_play/Background/Label": "PLAY",
        "Canvas/layer_challenge/content/btn_c_play_another/Background/Label": "Play another friends",
        "Canvas/layer_challenge/content/btn_c_cancel/Background/Label": "Cancel",
        "Canvas/layer_alert/label_header": "Notice",
        "Canvas/layer_alert/btn_ok/label_restart": "OK"
      }
    };
    exports.localizeConfig = localizeConfig;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  localize: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66563MairZIOqrEuvi81tiL", "localize");
    "use strict";
    exports.__esModule = true;
    exports.localize = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var LocalizeAutoTranform = require("localize_auto_tranform");
    var localize = {
      default_language: "en_US",
      familier_localize: {
        es: "es_ES",
        pl: "pl_PL",
        en: "en_US",
        tr: "tr_TR",
        vi: "vi_VN",
        zh: "zh_CN",
        th: "th_TH",
        fr: "fr_FR",
        pt: "pt_PT",
        de: "de_DE"
      },
      init: function init() {
        var _this = this;
        this.checkNodeHasLabel();
        this.pointerLang = 0;
        this.currentLanguage = this.default_language;
        _GAME.login.addLoginDataField("CurrentLanguage");
        _GAME.login.addCallback(function(data) {
          if (!data.currentLanguage) {
            var locale = FBInstant.getLocale();
            console.log("locale   ", locale);
            var keyLanguage = locale.split("_");
            0 != locale.length && (_this.currentLanguage = _this.familier_localize[keyLanguage[0].toLowerCase()] ? _this.familier_localize[keyLanguage[0].toLowerCase()] : locale);
            console.log("Check locale   ", _this.currentLanguage);
            if (-1 != _GAME.localizeConfig.totalLocalLang.indexOf(_this.currentLanguage)) _this.pointerLang = _GAME.localizeConfig.totalLocalLang.indexOf(_this.currentLanguage); else {
              _this.currentLanguage = _this.default_language;
              data.CurrentLanguage && (_this.currentLanguage = data.CurrentLanguage);
              -1 != _GAME.localizeConfig.totalLocalLang.indexOf(_this.currentLanguage) ? _this.pointerLang = _GAME.localizeConfig.totalLocalLang.indexOf(_this.currentLanguage) : _this.pointerLang = _GAME.localizeConfig.totalLocalLang.indexOf(_this.default_language);
            }
            _this.updateCurrentLang();
          }
        });
        this.updateCurrentLang();
      },
      checkNodeHasLabel: function checkNodeHasLabel() {
        var _this2 = this;
        this.ob = {};
        var nodeCanvas = cc.find("Canvas");
        nodeCanvas.children.map(function(nodeRoot) {
          _this2.searchArrayChildenNode(nodeRoot);
        });
        for (var key in this.ob) {
          var obSon = this.ob[key];
          var newObHasLabel = {};
          for (var k in obSon) {
            var element = obSon[k];
            if (this.validateNode(element)) {
              var value = element.getComponent(cc.Label).string;
              if ("NaN" == parseInt(value).toString()) {
                newObHasLabel[this.getNodePath(element)] = element;
                element.addComponent(LocalizeAutoTranform);
              }
            }
          }
          this.ob[key] = newObHasLabel;
        }
      },
      searchArrayChildenNode: function searchArrayChildenNode(node) {
        if (node) {
          var currentOb = {};
          currentOb[this.getNodePath(node)] = node;
          this.loopSearch(node.children, currentOb);
          this.ob[node.name] = currentOb;
        }
      },
      loopSearch: function loopSearch(listChildrenClone, currentOb) {
        var _this3 = this;
        if (!(listChildrenClone.length > 0)) return currentOb;
        var lateNode = [];
        listChildrenClone.map(function(child) {
          currentOb[_this3.getNodePath(child)] || (currentOb[_this3.getNodePath(child)] = child);
          child.children.length > 0 && (lateNode = lateNode.concat(child.children));
        });
        if (!(lateNode.length > 0)) return currentOb;
        this.loopSearch(lateNode, currentOb);
      },
      validateNode: function validateNode(node) {
        if (node.getComponent(cc.Label)) return true;
        return false;
      },
      getNodePath: function getNodePath(node) {
        var path = "";
        if (node) {
          var string = node.name;
          var parentnode = node.parent;
          path = parentnode.name + "/" + string;
          while ("Canvas" != parentnode.name) {
            var lastPath = path;
            parentnode = parentnode.parent;
            path = parentnode.name + "/" + lastPath;
            if ("Canvas" == parentnode.name) break;
          }
        }
        return path;
      },
      convertPosition: function convertPosition(cacheValue) {
        var result = "";
        0 != cacheValue.length && _GAME.localizeConfig.localize && this.currentLanguage && (_GAME.localizeConfig.localize[cacheValue] ? result = _GAME.localizeConfig.localize[cacheValue][this.currentLanguage] : "ENGLISH" == cacheValue && (result = _GAME.localizeConfig.meaningLocalLang[this.pointerLang]));
        return result;
      },
      onClickChangeLocalize: function onClickChangeLocalize() {
        this.pointerLang++;
        this.pointerLang >= _GAME.localizeConfig.totalLocalLang.length && (this.pointerLang = 0);
        this.currentLanguage = _GAME.localizeConfig.totalLocalLang[this.pointerLang];
        _GAME.data.saveData({
          CurrentLanguage: this.currentLanguage
        });
        this.emitProxyNode();
      },
      emitProxyNode: function emitProxyNode() {
        var canvas = cc.find("Canvas");
        canvas.emit("TRANFORM_TEXT");
      },
      getProxyNode: function getProxyNode() {
        return cc.find("Canvas");
      },
      updateCurrentLang: function updateCurrentLang() {
        this.emitProxyNode();
      }
    };
    exports.localize = localize;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules",
    localize_auto_tranform: "localize_auto_tranform"
  } ],
  login: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "692aajT6PVNgLZ8+a5hX7Q2", "login");
    "use strict";
    exports.__esModule = true;
    exports.login = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var loginDataFieldArr = [ "LoginTime", "IsOldUser", "isTutDone" ];
    var callbackArr = [];
    var login = {
      init: function init() {
        _G.utils.waitToRun(function() {
          _G.data.loadEntryPointData();
          _G.login.getFBData();
        }, "isUserReady", _G.data);
      },
      addLoginDataField: function addLoginDataField(fieldName) {
        loginDataFieldArr.includes(fieldName) || loginDataFieldArr.push(fieldName);
      },
      addCallback: function addCallback(callbackFunc) {
        _G.login.loginData ? callbackFunc(_G.login.loginData) : callbackArr.push(callbackFunc);
      },
      getFBData: function getFBData() {
        _G.data.loadData(loginDataFieldArr, function(data) {
          data.isNewUser = !data.IsOldUser;
          if (data.isNewUser) {
            _G.utilsFB.log("ev_login_new_user_incoming");
            _G.user.initNewUser(data);
            _G.login.initLogin(data);
            _G.data.saveData({
              IsOldUser: true
            });
            return;
          }
          _G.login.initLogin(data);
        });
      },
      initLogin: function initLogin(data) {
        if (_G.login.isInitLoginCalled) return;
        _G.login.isInitLoginCalled = true;
        _G.login.loginData = data;
        _G.user.lastLoginTime = data.LoginTime || _time();
        callbackArr.map(function(func, index) {
          try {
            func(data);
          } catch (e) {
            _log("loginCallback func error", e);
          }
        });
      }
    };
    exports.login = login;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  map_visual: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dfa94skyI1Pxqqq27McwCVs", "map_visual");
    "use strict";
    exports.__esModule = true;
    exports.mapVisual = void 0;
    var _GAME = _interopRequireWildcard(require("../all_modules"));
    var _constants = require("./constants");
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    var gameMap = {};
    var noCanCopy = [];
    var rows = [ 1, 2, 3, 4, 5 ], cols = [ 1, 2, 3, 4, 5, 6, 7 ];
    var mapVisual = {
      init: function init() {
        _GAME.mapVisual.createTable();
        this.reset();
      },
      reset: function reset(params) {
        this.state = _constants.mapState.INITIALZING;
        this.isX3 = false;
      },
      checkEndOfBlock: function checkEndOfBlock(row, col) {
        return 5 == row && 7 == col;
      },
      state: _constants.mapState.INITIALZING,
      isX3: false,
      gameKeys: [],
      selectedBlock: [],
      createTable: function createTable() {
        var _this = this;
        this.state = _constants.mapState.INITIALZING;
        var sampleNode = cc.find("Canvas/play_area/sample");
        var height = sampleNode.height, width = sampleNode.width, space = 3;
        var map = cc.find("Canvas/play_area/map");
        var sHeight = cc.winSize.height - map.y, sWidth = cc.winSize.width / 2;
        rows.some(function(row) {
          cols.some(function(col) {
            try {
              var newNode = cc.instantiate(sampleNode);
              var key = _this.getKey(row, col);
              _this.gameKeys.push(key);
              newNode.name = key;
              newNode.active = true;
              var x = (col - 4) * (width + space), y = -row * (height + space);
              newNode.x = x;
              newNode.y = y;
              var xF = sWidth + x - width / 2, yF = sHeight + y - height / 2;
              gameMap[key] = {
                xF: xF,
                yF: yF,
                xT: xF + width,
                yT: yF + height
              };
              map.addChild(newNode);
              _this.genNewItem(row, col);
              _this.addListener(newNode);
            } catch (error) {
              console.log("====================================");
              console.log("err", error);
              console.log("====================================");
            }
            _GAME.mapVisual.checkEndOfBlock(row, col) && setTimeout(function() {
              _GAME.mapVisual.state = _constants.mapState.PLAYING;
            }, 100);
          });
        });
      },
      bomb: function bomb(x, y) {
        var _this2 = this;
        if (_GAME.mapVisual.state != _constants.mapState.PLAYING) return;
        _GAME.mapVisual.state = _constants.mapState.BOMBING;
        x = +x;
        y = +y;
        rows.some(function(row) {
          cols.some(function(col) {
            col >= y - 1 && col <= y + 1 && row >= x - 1 && row <= x + 1 && _GAME.mapVisual.setEmpty(row, col);
            _this2.checkEndOfBlock(row, col) && _this2.bomed();
          });
        });
      },
      bomed: function bomed() {
        var _this3 = this;
        setTimeout(function() {
          var emp = [];
          _this3.gameKeys.some(function(key) {
            var isInNoCanCopy = noCanCopy.some(function(el) {
              return el.key == key;
            });
            gameMap[key].value || isInNoCanCopy || (emp = emp.concat(gameMap[key]));
          });
          emp.some(function(el, index) {
            var row = el.row - 1;
            while (row) {
              if (_this3.copyValueNode(row, el.row, el.col)) break;
              row--;
            }
            if (!row) {
              _GAME.mapVisual.state = _constants.mapState.NEWING;
              noCanCopy.push(el);
              noCanCopy.some(function(el) {
                setTimeout(function() {
                  _this3.genNewItem(el.row, el.col);
                }, 300);
              });
            }
          });
        }, 300);
      },
      copyValueNode: function copyValueNode(rowSrc, rowDes, col) {
        var newVal = this.getBlockValue(rowSrc, col);
        if (newVal) {
          this.setEmpty(rowSrc, col);
          this.setNodeVal(rowDes, col, newVal);
        }
        return newVal;
      },
      getKey: function getKey(row, col) {
        var key = row + "_" + col;
        return key;
      },
      getBlockValue: function getBlockValue(row, col) {
        var key = this.getKey(row, col);
        return gameMap[key].value;
      },
      setEmpty: function setEmpty(row, col) {
        this.setNodeVal(row, col, null);
      },
      genNewItem: function genNewItem(row, col) {
        var childIndex = _GAME.fx.makeRndBlock();
        this.setNodeVal(row, col, childIndex);
      },
      setNodeVal: function setNodeVal(row, col, value) {
        var block = cc.find("Canvas/play_area/map/" + row + "_" + col);
        var key = this.getKey(row, col);
        gameMap[key] || (gameMap[key] = {});
        gameMap[key] = _extends({}, gameMap[key], {
          value: value,
          row: row,
          col: col,
          key: key
        });
        block.children.some(function(child, index) {
          index && (child.active = index == value);
        });
        if (value) {
          noCanCopy = noCanCopy.filter(function(el) {
            return el.key != key;
          });
          !noCanCopy.length && (_GAME.mapVisual.state = _constants.mapState.PLAYING);
        }
        this.bomed();
      },
      resetSingleCell: function resetSingleCell(cellNumber) {
        var block = cc.find("Canvas/play_area/map/Image_HexBlock_" + cellNumber + "/sample_block");
        if (!block) return;
        block.active = false;
        block.x = block.y = 0;
        return block;
      },
      resetMap: function resetMap() {
        var _this4 = this;
        cc.find("Canvas/play_area/map").children.map(function(cell) {
          return _this4.resetSingleCell(cell.name.replace("Image_HexBlock_", ""));
        });
      },
      decorBlock: function decorBlock(blockNode, blockNumber) {
        return;
      },
      renderSingleCell: function renderSingleCell(cellNumber, blockNumber) {
        return;
        var block;
      },
      renderMap: function renderMap(mapState) {
        this.resetMap();
        for (var cellNumber in mapState) this.renderSingleCell(cellNumber, mapState[cellNumber]);
      },
      addListener: function addListener(node) {
        try {
          node.on(_constants.touchType.start, this.onTouchStartOrMove.bind(this, _constants.touchType.start));
          node.on(_constants.touchType.move, this.onTouchStartOrMove.bind(this, _constants.touchType.move));
          node.on(_constants.touchType.end, this.onTouchEnd.bind(this));
          node.on(_constants.touchType.cancel, this.onTouchEnd.bind(this));
        } catch (error) {
          console.log("====================================");
          console.log("listener err", error);
          console.log("====================================");
        }
      },
      onTouchStartOrMove: function onTouchStartOrMove(type, e) {
        try {
          this.detectBlockFromLocaltion(e.touch.getLocation());
        } catch (error) {
          console.log("====================================");
          console.log("error", error);
          console.log("====================================");
        }
      },
      onTouchEnd: function onTouchEnd(e) {
        var _this5 = this;
        this.selectedBlock.length > 2 && this.selectedBlock.some(function(key) {
          var _key$split = key.split("_"), row = _key$split[0], col = _key$split[1];
          _this5.setEmpty(row, col);
        });
        this.selectedBlock.length = 0;
      },
      detectBlockFromLocaltion: function detectBlockFromLocaltion(_ref) {
        var x = _ref.x, y = _ref.y;
        console.log("====================================");
        console.log({
          x: x,
          y: y
        }, gameMap);
        console.log("====================================");
        if (this.selectedBlock.length) {
          var lastBlock = this.getLastSelectedBlock();
          var _gameMap$lastBlock = gameMap[lastBlock], xF = _gameMap$lastBlock.xF, yF = _gameMap$lastBlock.yF, xT = _gameMap$lastBlock.xT, yT = _gameMap$lastBlock.yT;
          var inCol = x >= xF && x <= xT, inRow = y >= yF && y <= yT;
          if (inRow && inCol) return;
        }
        var slRow = null, slCol = null;
        rows.some(function(row) {
          var key = row + "_1";
          var _gameMap$key = gameMap[key], yF = _gameMap$key.yF, yT = _gameMap$key.yT;
          if (y > yF && y < yT) {
            slRow = row;
            return true;
          }
        });
        cols.some(function(col) {
          var key = "1_" + col;
          var _gameMap$key2 = gameMap[key], xF = _gameMap$key2.xF, xT = _gameMap$key2.xT;
          if (x > xF && x < xT) {
            slCol = col;
            return true;
          }
        });
        var key = slRow + "_" + slCol;
        if (!slRow || !slCol || this.selectedBlock.indexOf(key) > -1) return;
        if (this.checkValidBlock(key)) {
          this.selectedBlock.push(key);
          console.log("====================================");
          console.log(this.selectedBlock);
          console.log("====================================");
        }
      },
      getLastSelectedBlock: function getLastSelectedBlock() {
        return this.selectedBlock[this.selectedBlock.length - 1];
      },
      checkValidBlock: function checkValidBlock(blockKey) {
        if (!this.selectedBlock.length) return true;
        var lastBlock = this.getLastSelectedBlock();
        var _blockKey$split = blockKey.split("_"), bRow = _blockKey$split[0], bCol = _blockKey$split[1];
        var _lastBlock$split = lastBlock.split("_"), lRow = _lastBlock$split[0], lCol = _lastBlock$split[1];
        var conditionRow = Math.abs(bRow - lRow) <= 1, conditionCol = Math.abs(bCol - lCol) <= 1, conditionValue = gameMap[blockKey].value == gameMap[lastBlock].value;
        if (conditionRow && conditionCol && conditionValue) return true;
        return false;
      },
      calculateScore: function calculateScore(type) {
        void 0 === type && (type = "bomed");
      },
      x3: function x3() {
        this.isX3 = true;
      },
      relocate: function relocate() {
        var _this6 = this;
        this.state = _constants.mapState.RELOCATING;
        rows.some(function(row) {
          cols.some(function(col) {
            _this6.genNewItem(row, col);
            _GAME.mapVisual.checkEndOfBlock(row, col) && setTimeout(function() {
              _GAME.mapVisual.state = _constants.mapState.PLAYING;
            }, 100);
          });
        });
      }
    };
    exports.mapVisual = mapVisual;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules",
    "./constants": "constants"
  } ],
  map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e8560gSa5B1rLT9gozGXOQ", "map");
    "use strict";
    exports.__esModule = true;
    exports.map = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var map = {
      cellLinks: require("cell_links"),
      cellLinkMap: {},
      currentState: null,
      selectedCell: null,
      minorCell: null,
      init: function init() {},
      resetMap: function resetMap() {
        this.currentState = {};
        _G.mapVisual.resetMap();
      },
      setSingleCell: function setSingleCell(cellNumber, blockNumber) {
        this.currentState[cellNumber] = blockNumber;
        _G.mapVisual.renderSingleCell(cellNumber, blockNumber);
      },
      clearSingleCell: function clearSingleCell(cellNumber) {
        this.currentState[cellNumber] = null;
        _G.mapVisual.resetSingleCell(cellNumber);
      },
      setCellGroup: function setCellGroup(cellInfoArr) {
        var _this = this;
        cellInfoArr.map(function(cellInfo) {
          _this.setSingleCell(cellInfo.cellNumber, cellInfo.blockNumber);
        });
      },
      clearCellGroup: function clearCellGroup(cellInfoArr) {
        var _this2 = this;
        cellInfoArr.map(function(cellNumber) {
          _this2.clearSingleCell(cellNumber);
        });
      },
      checkNewItemDroppableAtCell: function checkNewItemDroppableAtCell(cellNumber) {
        return;
        var biasType;
        var biasLinks;
        var minorCellNumber;
        var otherCellNumber;
      },
      dropNewItemAtCell: function dropNewItemAtCell(keyCellNumber, minorCellNumber) {
        this.setSingleCell(keyCellNumber, _G.game.currentKeyBlockNumber);
        minorCellNumber && this.setSingleCell(minorCellNumber, _G.game.currentMinorBlockNumber);
      },
      checkAvailableNewItemInfo: function checkAvailableNewItemInfo() {
        var blockCount = 1;
        var biasTypeSet = new Set();
        for (var cellNumber in this.cellLinkMap) {
          if (this.currentState[cellNumber + ""]) continue;
          var linkedCells = this.cellLinkMap[cellNumber];
          for (var linkedCellNumber in linkedCells) {
            if (this.currentState[linkedCellNumber + ""]) continue;
            blockCount = 2;
            var biasTypeName = linkedCells[linkedCellNumber].replace("_dominated", "");
            biasTypeSet.add(biasTypeName);
          }
        }
        return {
          blockCount: blockCount,
          biasTypeArr: Array.from(biasTypeSet)
        };
      },
      isFulled: function isFulled() {
        return 19 == Object.values(this.currentState).filter(function(item) {
          return !!item;
        }).length;
      },
      checkBlockScore: function checkBlockScore(cellNumber) {
        var _checkedCellNumber, _this3 = this;
        var blockNumber = this.currentState[cellNumber];
        var checkedCellNumber = (_checkedCellNumber = {}, _checkedCellNumber[cellNumber] = true, 
        _checkedCellNumber);
        var scoredCellArr = [ cellNumber ];
        var safeCount = 19;
        var cellLinkMap = this.cellLinkMap;
        var recursiveFunc = function recursiveFunc(cellNumber) {
          if (--safeCount <= 0) return;
          var expandingCellArr = [];
          for (var linkedCellNumber in cellLinkMap[cellNumber]) {
            if (checkedCellNumber[linkedCellNumber]) continue;
            checkedCellNumber[linkedCellNumber] = true;
            if (_this3.currentState[linkedCellNumber] != blockNumber) continue;
            scoredCellArr.push(linkedCellNumber);
            expandingCellArr.push(linkedCellNumber);
          }
          expandingCellArr.map(function(cellNumber) {
            return recursiveFunc(cellNumber);
          });
        };
        recursiveFunc(cellNumber);
        var minLinkedCellToScore = 3;
        if (scoredCellArr.length < minLinkedCellToScore) return false;
        return scoredCellArr;
      }
    };
    exports.map = map;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules",
    cell_links: "cell_links"
  } ],
  md5: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b73f2W5pvZN5KMni9OHtD3c", "md5");
    "use strict";
    module.exports = {
      MD5: function MD5(string) {
        function RotateLeft(lValue, iShiftBits) {
          return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
        }
        function AddUnsigned(lX, lY) {
          var lX4, lY4, lX8, lY8, lResult;
          lX8 = 2147483648 & lX;
          lY8 = 2147483648 & lY;
          lX4 = 1073741824 & lX;
          lY4 = 1073741824 & lY;
          lResult = (1073741823 & lX) + (1073741823 & lY);
          if (lX4 & lY4) return 2147483648 ^ lResult ^ lX8 ^ lY8;
          return lX4 | lY4 ? 1073741824 & lResult ? 3221225472 ^ lResult ^ lX8 ^ lY8 : 1073741824 ^ lResult ^ lX8 ^ lY8 : lResult ^ lX8 ^ lY8;
        }
        function F(x, y, z) {
          return x & y | ~x & z;
        }
        function G(x, y, z) {
          return x & z | y & ~z;
        }
        function H(x, y, z) {
          return x ^ y ^ z;
        }
        function I(x, y, z) {
          return y ^ (x | ~z);
        }
        function FF(a, b, c, d, x, s, ac) {
          a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
          return AddUnsigned(RotateLeft(a, s), b);
        }
        function GG(a, b, c, d, x, s, ac) {
          a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
          return AddUnsigned(RotateLeft(a, s), b);
        }
        function HH(a, b, c, d, x, s, ac) {
          a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
          return AddUnsigned(RotateLeft(a, s), b);
        }
        function II(a, b, c, d, x, s, ac) {
          a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
          return AddUnsigned(RotateLeft(a, s), b);
        }
        function ConvertToWordArray(string) {
          var lWordCount;
          var lMessageLength = string.length;
          var lNumberOfWords_temp1 = lMessageLength + 8;
          var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
          var lNumberOfWords = 16 * (lNumberOfWords_temp2 + 1);
          var lWordArray = Array(lNumberOfWords - 1);
          var lBytePosition = 0;
          var lByteCount = 0;
          while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - lByteCount % 4) / 4;
            lBytePosition = lByteCount % 4 * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
            lByteCount++;
          }
          lWordCount = (lByteCount - lByteCount % 4) / 4;
          lBytePosition = lByteCount % 4 * 8;
          lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
          lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
          lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
          return lWordArray;
        }
        function WordToHex(lValue) {
          var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
          for (lCount = 0; lCount <= 3; lCount++) {
            lByte = lValue >>> 8 * lCount & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue += WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
          }
          return WordToHexValue;
        }
        function Utf8Encode(string) {
          string = string.replace(/\r\n/g, "\n");
          var utftext = "";
          for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) utftext += String.fromCharCode(c); else if (c > 127 && c < 2048) {
              utftext += String.fromCharCode(c >> 6 | 192);
              utftext += String.fromCharCode(63 & c | 128);
            } else {
              utftext += String.fromCharCode(c >> 12 | 224);
              utftext += String.fromCharCode(c >> 6 & 63 | 128);
              utftext += String.fromCharCode(63 & c | 128);
            }
          }
          return utftext;
        }
        var x = Array();
        var k, AA, BB, CC, DD, a, b, c, d;
        var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
        var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
        var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
        var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
        string = Utf8Encode(string);
        x = ConvertToWordArray(string);
        a = 1732584193;
        b = 4023233417;
        c = 2562383102;
        d = 271733878;
        for (k = 0; k < x.length; k += 16) {
          AA = a;
          BB = b;
          CC = c;
          DD = d;
          a = FF(a, b, c, d, x[k + 0], S11, 3614090360);
          d = FF(d, a, b, c, x[k + 1], S12, 3905402710);
          c = FF(c, d, a, b, x[k + 2], S13, 606105819);
          b = FF(b, c, d, a, x[k + 3], S14, 3250441966);
          a = FF(a, b, c, d, x[k + 4], S11, 4118548399);
          d = FF(d, a, b, c, x[k + 5], S12, 1200080426);
          c = FF(c, d, a, b, x[k + 6], S13, 2821735955);
          b = FF(b, c, d, a, x[k + 7], S14, 4249261313);
          a = FF(a, b, c, d, x[k + 8], S11, 1770035416);
          d = FF(d, a, b, c, x[k + 9], S12, 2336552879);
          c = FF(c, d, a, b, x[k + 10], S13, 4294925233);
          b = FF(b, c, d, a, x[k + 11], S14, 2304563134);
          a = FF(a, b, c, d, x[k + 12], S11, 1804603682);
          d = FF(d, a, b, c, x[k + 13], S12, 4254626195);
          c = FF(c, d, a, b, x[k + 14], S13, 2792965006);
          b = FF(b, c, d, a, x[k + 15], S14, 1236535329);
          a = GG(a, b, c, d, x[k + 1], S21, 4129170786);
          d = GG(d, a, b, c, x[k + 6], S22, 3225465664);
          c = GG(c, d, a, b, x[k + 11], S23, 643717713);
          b = GG(b, c, d, a, x[k + 0], S24, 3921069994);
          a = GG(a, b, c, d, x[k + 5], S21, 3593408605);
          d = GG(d, a, b, c, x[k + 10], S22, 38016083);
          c = GG(c, d, a, b, x[k + 15], S23, 3634488961);
          b = GG(b, c, d, a, x[k + 4], S24, 3889429448);
          a = GG(a, b, c, d, x[k + 9], S21, 568446438);
          d = GG(d, a, b, c, x[k + 14], S22, 3275163606);
          c = GG(c, d, a, b, x[k + 3], S23, 4107603335);
          b = GG(b, c, d, a, x[k + 8], S24, 1163531501);
          a = GG(a, b, c, d, x[k + 13], S21, 2850285829);
          d = GG(d, a, b, c, x[k + 2], S22, 4243563512);
          c = GG(c, d, a, b, x[k + 7], S23, 1735328473);
          b = GG(b, c, d, a, x[k + 12], S24, 2368359562);
          a = HH(a, b, c, d, x[k + 5], S31, 4294588738);
          d = HH(d, a, b, c, x[k + 8], S32, 2272392833);
          c = HH(c, d, a, b, x[k + 11], S33, 1839030562);
          b = HH(b, c, d, a, x[k + 14], S34, 4259657740);
          a = HH(a, b, c, d, x[k + 1], S31, 2763975236);
          d = HH(d, a, b, c, x[k + 4], S32, 1272893353);
          c = HH(c, d, a, b, x[k + 7], S33, 4139469664);
          b = HH(b, c, d, a, x[k + 10], S34, 3200236656);
          a = HH(a, b, c, d, x[k + 13], S31, 681279174);
          d = HH(d, a, b, c, x[k + 0], S32, 3936430074);
          c = HH(c, d, a, b, x[k + 3], S33, 3572445317);
          b = HH(b, c, d, a, x[k + 6], S34, 76029189);
          a = HH(a, b, c, d, x[k + 9], S31, 3654602809);
          d = HH(d, a, b, c, x[k + 12], S32, 3873151461);
          c = HH(c, d, a, b, x[k + 15], S33, 530742520);
          b = HH(b, c, d, a, x[k + 2], S34, 3299628645);
          a = II(a, b, c, d, x[k + 0], S41, 4096336452);
          d = II(d, a, b, c, x[k + 7], S42, 1126891415);
          c = II(c, d, a, b, x[k + 14], S43, 2878612391);
          b = II(b, c, d, a, x[k + 5], S44, 4237533241);
          a = II(a, b, c, d, x[k + 12], S41, 1700485571);
          d = II(d, a, b, c, x[k + 3], S42, 2399980690);
          c = II(c, d, a, b, x[k + 10], S43, 4293915773);
          b = II(b, c, d, a, x[k + 1], S44, 2240044497);
          a = II(a, b, c, d, x[k + 8], S41, 1873313359);
          d = II(d, a, b, c, x[k + 15], S42, 4264355552);
          c = II(c, d, a, b, x[k + 6], S43, 2734768916);
          b = II(b, c, d, a, x[k + 13], S44, 1309151649);
          a = II(a, b, c, d, x[k + 4], S41, 4149444226);
          d = II(d, a, b, c, x[k + 11], S42, 3174756917);
          c = II(c, d, a, b, x[k + 2], S43, 718787259);
          b = II(b, c, d, a, x[k + 9], S44, 3951481745);
          a = AddUnsigned(a, AA);
          b = AddUnsigned(b, BB);
          c = AddUnsigned(c, CC);
          d = AddUnsigned(d, DD);
        }
        var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
        return temp.toLowerCase();
      }
    };
    cc._RF.pop();
  }, {} ],
  message: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e3782nfm/NO1ZCTDPlA4iLf", "message");
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
    var _G = require("../all_modules");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Message = function(_super) {
      __extends(Message, _super);
      function Message() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Play_with_message = null;
        return _this;
      }
      Message.prototype.onLoad = function() {
        var nodeAvata = _G.utils.getChildByPath(this.Play_with_message, "avata");
        nodeAvata.avarNodeOrgSize = {};
        nodeAvata.avarNodeOrgSize.width = nodeAvata.width;
        nodeAvata.avarNodeOrgSize.height = nodeAvata.height;
      };
      Message.prototype.initBase64Picture = function(target) {
        return __awaiter(this, void 0, void 0, function() {
          var cameraNode, camera, texture, width, height, _canvas, ctx, data, rowBytes, row, srow, data2, imageData, dataURL;
          return __generator(this, function(_a) {
            if (!target.activeInHierarchy) {
              target.parent.active = true;
              target.parent.parent.active = true;
            }
            cameraNode = new cc.Node();
            target.addChild(cameraNode);
            cameraNode.position = target.position;
            camera = cameraNode.addComponent(cc.Camera);
            camera.cullingMask = 4294967295;
            texture = new cc.RenderTexture();
            texture.initWithSize(target.width, target.height);
            camera.targetTexture = texture;
            camera.zoomRatio = 3.27;
            width = texture.width;
            height = texture.height;
            _canvas = document.createElement("canvas");
            _canvas.width = width;
            _canvas.height = height;
            ctx = _canvas.getContext("2d");
            camera.render(target);
            data = texture.readPixels();
            rowBytes = 4 * width;
            for (row = 0; row < height; row++) {
              srow = height - 1 - row;
              data2 = new Uint8ClampedArray(data.buffer, srow * width * 4, rowBytes);
              imageData = new ImageData(data2, width, 1);
              ctx.putImageData(imageData, 0, row);
            }
            dataURL = _canvas.toDataURL();
            setTimeout(function() {
              return target.parent.active = false;
            }, 2e3);
            return [ 2, dataURL ];
          });
        });
      };
      Message.prototype.initPayload = function(target, content, ctaText, extraData) {
        return __awaiter(this, void 0, void 0, function() {
          var base64Image, payload, error_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              return [ 4, this.initBase64Picture(target) ];

             case 1:
              base64Image = _a.sent();
              payload = {
                action: "CUSTOM",
                text: content,
                cta: ctaText,
                image: base64Image,
                template: "play_turn",
                strategy: "IMMEDIATE",
                data: extraData,
                notification: "PUSH"
              };
              return [ 2, payload ];

             case 2:
              error_1 = _a.sent();
              throw error_1;

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      Message.prototype.sendMessageScore = function() {
        return __awaiter(this, void 0, void 0, function() {
          var nodeAvata_1, nodeNameUser, nodePointUser, content, ctaText, payload, error_2;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 3, , 4 ]);
              nodeAvata_1 = _G.utils.getChildByPath(this.Play_with_message, "avata");
              nodeAvata_1.getComponent(cc.Sprite).spriteFrame = _G.user.avatarSpriteFrame;
              setTimeout(function() {
                nodeAvata_1.width = nodeAvata_1.avarNodeOrgSize.width;
                nodeAvata_1.height = nodeAvata_1.avarNodeOrgSize.height;
              }, 1e3);
              nodeNameUser = this.Play_with_message.getChildByName("lb_username");
              nodeNameUser.getComponent(cc.Label).string = _G.user.name;
              nodePointUser = this.Play_with_message.getChildByName("user_score");
              nodePointUser.getComponent(cc.Label).string = _G.utils.localizeNumber(_G.user.score);
              content = _G.user.name + " has " + _G.user.score + " when play this game! Dare you pass me?";
              ctaText = "";
              return [ 4, this.initPayload(this.Play_with_message, content, ctaText) ];

             case 1:
              payload = _a.sent();
              return [ 4, FBInstant.updateAsync(payload) ];

             case 2:
              _a.sent();
              return [ 3, 4 ];

             case 3:
              error_2 = _a.sent();
              _log("sendMessageScore", error_2);
              return [ 3, 4 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], Message.prototype, "Play_with_message", void 0);
      Message = __decorate([ ccclass ], Message);
      return Message;
    }(cc.Component);
    exports.default = Message;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  promo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f419QUCJpFpIXG+g1mRUPq", "promo");
    "use strict";
    exports.__esModule = true;
    exports.promo = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var promo = {
      isPromoAvailable: false,
      init: function init() {
        _G.promo.isPromoAvailable = _G.utilsFB.isSupportedAPI("switchGameAsync") && _G.configs.isShowPromoGames;
      },
      shufflePromoList: function shufflePromoList() {
        [ cc.find("Canvas/layer_game_over/promo_panel/ScrollView/view/content"), cc.find("Canvas/layer_challenge_friend/promo_panel/ScrollView/view/content") ].map(function(promoPanel) {
          var nodeArr = promoPanel.children.slice(0);
          promoPanel.removeAllChildren();
          while (nodeArr.length) promoPanel.addChild(_G.utils.randomArrItem(nodeArr, true));
          _G.fx.bubblePromo(promoPanel);
        });
      },
      renderButtonByIcon: function renderButtonByIcon(promoPanel) {
        if (!promoPanel || !_G.configs.listIdPromoGame) return;
        promoPanel.children.map(function(item, index) {
          var gameInfo = _G.configs.listIdPromoGame[index];
          _G.utils.setLabelText(item.getChildByName("label_name"), gameInfo.name);
          _G.utils.addButtonComp(item, function() {
            _G.utilsFB.log("ev_click_button_promo_game", 1, {
              Position: index
            });
            _G.promo.switchPromoGame(gameInfo.id);
          });
        });
      },
      switchPromoGame: function switchPromoGame(idGame, failCallback) {
        _G.ui.showLoading();
        FBInstant.switchGameAsync(idGame).then(function() {
          console.log(" switchGameAsync successs!!!! ");
          _G.ui.hideLoading();
        }, function(e) {
          console.log(" switchGameAsync faileddd!!!! ", e);
          _G.ui.hideLoading();
          failCallback && failCallback();
        })["catch"](function(e) {
          console.log("switchGameAsync catch!!!! ", e);
          _G.ui.hideLoading();
          failCallback && failCallback();
        });
      }
    };
    exports.promo = promo;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  share: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a24f68jMHpCDam8IMOs+/h+", "share");
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
    var _G = require("../all_modules");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Share = function(_super) {
      __extends(Share, _super);
      function Share() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.SharePhoto_Normal = null;
        return _this;
      }
      Share.prototype.initBase64Picture = function(target) {
        return __awaiter(this, void 0, void 0, function() {
          var cameraNode, camera, texture, width, height, _canvas, ctx, data, rowBytes, row, srow, data2, imageData, dataURL;
          return __generator(this, function(_a) {
            if (!target.activeInHierarchy) {
              target.parent.active = true;
              target.parent.parent.active = true;
            }
            cameraNode = new cc.Node();
            target.addChild(cameraNode);
            cameraNode.position = target.position;
            camera = cameraNode.addComponent(cc.Camera);
            camera.cullingMask = 4294967295;
            texture = new cc.RenderTexture();
            texture.initWithSize(target.width, target.height);
            camera.targetTexture = texture;
            camera.zoomRatio = 2.5;
            width = texture.width;
            height = texture.height;
            _canvas = document.createElement("canvas");
            _canvas.width = width;
            _canvas.height = height;
            ctx = _canvas.getContext("2d");
            camera.render(target);
            data = texture.readPixels();
            rowBytes = 4 * width;
            for (row = 0; row < height; row++) {
              srow = height - 1 - row;
              data2 = new Uint8ClampedArray(data.buffer, srow * width * 4, rowBytes);
              imageData = new ImageData(data2, width, 1);
              ctx.putImageData(imageData, 0, row);
            }
            dataURL = _canvas.toDataURL();
            _log(target, texture, camera, _canvas);
            setTimeout(function() {
              return target.parent.active = false;
            }, 2e3);
            return [ 2, dataURL ];
          });
        });
      };
      Share.prototype.initPayload = function(target, content, extraData) {
        return __awaiter(this, void 0, void 0, function() {
          var base64Image, payload, error_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _a.trys.push([ 0, 2, , 3 ]);
              return [ 4, this.initBase64Picture(target) ];

             case 1:
              base64Image = _a.sent();
              payload = {
                intent: "SHARE",
                image: base64Image,
                text: content,
                data: extraData
              };
              return [ 2, payload ];

             case 2:
              error_1 = _a.sent();
              throw error_1;

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      Share.prototype.sharePostNormal = function(shareCode) {
        return __awaiter(this, void 0, void 0, function() {
          var payload, error_2;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              _G.ui.showLoading();
              _a.label = 1;

             case 1:
              _a.trys.push([ 1, 4, , 5 ]);
              return [ 4, this.initPayload(this.SharePhoto_Normal, "", {
                isFromSharedPos: true,
                shareCode: shareCode
              }) ];

             case 2:
              payload = _a.sent();
              _log(payload);
              return [ 4, FBInstant.shareAsync(payload).then(function() {
                _G.ui.hideLoading();
              }, function() {
                _G.ui.hideLoading();
              }).catch(function() {
                _G.ui.hideLoading();
              }) ];

             case 3:
              _a.sent();
              return [ 3, 5 ];

             case 4:
              error_2 = _a.sent();
              _G.ui.hideLoading();
              console.log(error_2);
              return [ 3, 5 ];

             case 5:
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Node) ], Share.prototype, "SharePhoto_Normal", void 0);
      Share = __decorate([ ccclass ], Share);
      return Share;
    }(cc.Component);
    exports.default = Share;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  social: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "62bd8aVFtZKTbJNiqGHzADB", "social");
    "use strict";
    exports.__esModule = true;
    exports.social = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    var _share = _interopRequireDefault(require("../social/share"));
    var _message = _interopRequireDefault(require("../social/message"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var social = {
      init: function init() {
        var _this = this;
        _G.login.addLoginDataField("subscribeInfo");
        _G.login.addLoginDataField("shortcutInfo");
        _G.login.addCallback(function(data) {
          _this.subscribeInfo = data.hasOwnProperty("subscribeInfo") ? data.subscribeInfo : 5;
          _this.shortcutInfo = data.hasOwnProperty("shortcutInfo") ? data.shortcutInfo : 5;
        });
      },
      share: function share(userScore, shareCode) {
        _G.utils.setLabelText(cc.find("Canvas/shares/sharepicture/label_score"), _G.utils.localizeNumber(userScore));
        cc.find("Canvas/shares").getComponent(_share["default"]).sharePostNormal(shareCode);
      },
      sendMessageAfterQuit: function sendMessageAfterQuit() {
        cc.find("Canvas/messages").getComponent(_message["default"]).sendMessageScore();
      },
      askBotSubscribe: function askBotSubscribe(callback) {
        var _this2 = this;
        var finalCallback = function finalCallback() {
          return callback && callback();
        };
        if (!window.FBInstant) return finalCallback();
        if (!_G.utilsFB.isSupportedAPI("player.canSubscribeBotAsync") || !_G.utilsFB.isSupportedAPI("player.subscribeBotAsync")) return finalCallback() || _log(" askBotSubscribe :: isSupportedAPI > not supported");
        if ("accepted" == this.subscribeInfo || this.subscribeInfo <= 0) return finalCallback();
        this.subscribeInfo--;
        _G.data.saveData({
          subscribeInfo: this.subscribeInfo
        });
        FBInstant.player.canSubscribeBotAsync().then(function(can_subscribe) {
          if (!can_subscribe) return finalCallback() || _log(" askBotSubscribe :: can_subscribe = " + can_subscribe + " ");
          FBInstant.player.subscribeBotAsync().then(function() {
            _this2.subscribeInfo = "accepted";
            _G.data.saveData({
              subscribeInfo: _this2.subscribeInfo
            });
            finalCallback();
          })["catch"](function(e) {
            return finalCallback();
          });
        })["catch"](function(e) {
          return finalCallback() || _log(" askBotSubscribe :: canSubscribeBotAsync().then(fail) => ", e);
        });
      },
      askShortcut: function askShortcut(callback) {
        var _this3 = this;
        var finalCallback = function finalCallback() {
          return callback && callback();
        };
        if (!window.FBInstant) return finalCallback();
        if (!_G.utilsFB.isSupportedAPI("canCreateShortcutAsync") || !_G.utilsFB.isSupportedAPI("createShortcutAsync")) return finalCallback();
        if ("accepted" == this.shortcutInfo || this.shortcutInfo <= 0) return finalCallback();
        this.shortcutInfo--;
        _G.data.saveData({
          shortcutInfo: this.shortcutInfo
        });
        FBInstant.canCreateShortcutAsync().then(function(canCreateShortcut) {
          if (!canCreateShortcut) return finalCallback();
          FBInstant.createShortcutAsync().then(function() {
            _this3.shortcutInfo = "accepted";
            _G.data.saveData({
              shortcutInfo: _this3.shortcutInfo
            });
            finalCallback();
          })["catch"](function(e) {
            return finalCallback() || _log(" createShortcutAsync :: ", e);
          });
        })["catch"](function(e) {
          return finalCallback() || _log(" canCreateShortcutAsync :: ", e);
        });
      },
      postSessionScore: function postSessionScore() {
        if (!window.FBInstant) return;
        if (_G.user.score <= (_G.game.bestSessionScore || 0)) return;
        _G.game.bestSessionScore = _G.user.score;
        _log(" postSessionScore called score = " + _G.game.bestSessionScore);
        FBInstant.postSessionScore(_G.game.bestSessionScore);
      },
      createContext: function createContext(playerId, callbackSuccess, callbackFail) {
        if (!window.FBInstant) return callbackSuccess && callbackSuccess();
        var logContextResult = function logContextResult(result, error) {
          result && _log("createContext Success ====> ", result);
          error && _log("createContext Fail  ====> ", error);
        };
        FBInstant.context.createAsync(playerId).then(function() {
          callbackSuccess && callbackSuccess();
          logContextResult("success");
        }, function(e) {
          callbackFail && callbackFail(e);
          logContextResult("fail", e);
        });
      },
      invite: function invite(callback) {
        var _this4 = this;
        try {
          FBInstant.context.chooseAsync().then(function() {
            _this4.sendMessageAfterQuit();
            _G.ui.hideLayer("layer_game_over");
            _G.gameOver.replay();
            callback && callback(FBInstant.context.getID());
          })["catch"](function(err) {
            _log(err);
          });
        } catch (errX) {
          _log(errX);
        }
      }
    };
    exports.social = social;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules",
    "../social/message": "message",
    "../social/share": "share"
  } ],
  tut: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1f39QEiJxC36xitSy4UsH+", "tut");
    "use strict";
    exports.__esModule = true;
    exports.tut = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var tut = {
      tutMapState: {
        18: 1,
        20: 1
      },
      targetCell: 19,
      isTutBombShown: false,
      init: function init() {
        var _this = this;
        _G.login.addLoginDataField("isTutBombShown");
        _G.login.addCallback(function(data) {
          _this.isTutDone = data.isTutDone;
          _this.isTutBombShown = data.isTutBombShown;
          data.isTutDone || _this.startTut();
        });
      },
      startTut: function startTut(isBombTut) {
        void 0 === isBombTut && (isBombTut = false);
        _G.ui.showLayer("layer_tut");
        _G.tut.startHandAction(isBombTut);
      },
      startHandAction: function startHandAction(isBombTut) {
        void 0 === isBombTut && (isBombTut = false);
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        hand.stopAllActions();
        _G.utils.setGlobalPositionToNode(hand, cc.find("Canvas/play_area/new_item_container"));
        var targetCell = cc.find("Canvas/play_area/map/Image_HexBlock_" + this.targetCell + "/bg");
        var targetCellGlobalPos = _G.utils.getGlobalPosition(targetCell);
        var targetCellPosDiff = _G.utils.global2LocalPosDiff(hand, targetCellGlobalPos.x, targetCellGlobalPos.y);
        targetCellPosDiff.y - 20;
        var animTime = 1;
        hand.runAction(cc.repeatForever(cc.sequence(cc.moveBy(animTime, targetCellPosDiff).easing(cc.easeOut(1)), cc.delayTime(.8), cc.moveBy(0, targetCellPosDiff.mul(-1)), cc.moveBy(.3, cc.v2(0, -10)), cc.moveBy(.15, cc.v2(0, 10)))));
        if (!isBombTut) {
          targetCell.orgOpacity && (targetCell.opacity = targetCell.orgOpacity);
          targetCell.orgOpacity = targetCell.opacity;
          targetCell.opacity *= 3;
        }
      },
      endTut: function endTut() {
        _G.utilsFB.log("ev_done_tutorial");
        _G.ui.hideLayer("layer_tut");
        var targetCell = cc.find("Canvas/play_area/map/Image_HexBlock_" + this.targetCell + "/bg");
        targetCell.opacity = targetCell.orgOpacity;
        this.isTutDone = true;
        _G.data.saveData({
          isTutDone: "1"
        });
      },
      checkHideTutHand: function checkHideTutHand() {
        if (this.isTutDone) return;
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        hand.stopAllActions();
        hand.x = 9999;
      },
      checkHideTutHandBomb: function checkHideTutHandBomb() {
        if (this.isTutBombShown) return;
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        hand.stopAllActions();
        hand.x = 9999;
      },
      checkShowTutHand: function checkShowTutHand() {
        if (this.isTutDone) return;
        var hand = cc.find("Canvas/layer_tut/handTutorial");
        _G.tut.startHandAction();
      },
      checkDoneTut: function checkDoneTut() {
        if (this.isTutDone) return;
        this.endTut();
      },
      showTutBomb: function showTutBomb() {
        this.isTutBombShown || this.startTut(true);
      }
    };
    exports.tut = tut;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  ui_power_item: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7fde1Q7i71OAJNoA/7yPVLd", "ui_power_item");
    "use strict";
    exports.__esModule = true;
    exports.uiPowerItem = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var uiPowerItem = {
      triplePoint: false,
      totalBom: 0,
      totalRelocated: 0,
      totalTriple: 0,
      isReleaseTotalPower: false,
      init: function init() {
        _G.login.addLoginDataField("TotalBom");
        _G.login.addLoginDataField("TotalRelocated");
        _G.login.addLoginDataField("TotalTriple");
        this.bgTotalBom = cc.find("Canvas/play_area/power_items/pw_1/pw_bg_count");
        this.bgTotalRotate = cc.find("Canvas/play_area/power_items/pw_2/pw_bg_count");
        this.bgTotalTriple = cc.find("Canvas/play_area/power_items/pw_3/pw_bg_count");
        _G.login.addCallback(function(data) {
          _G.uiPowerItem.totalBom = _G.uiPowerItem.totalBom && 0 != _G.uiPowerItem.totalBom ? _G.uiPowerItem.totalBom : 0;
          _G.uiPowerItem.totalRelocated = _G.uiPowerItem.totalRelocated && 0 != _G.uiPowerItem.totalRelocated ? _G.uiPowerItem.totalRelocated : 0;
          _G.uiPowerItem.totalTriple = _G.uiPowerItem.totalTriple && 0 != _G.uiPowerItem.totalTriple ? _G.uiPowerItem.totalTriple : 0;
          if (data.isNewUser) {
            _G.uiPowerItem.totalBom = 2;
            _G.uiPowerItem.totalRelocated = 2;
            _G.uiPowerItem.totalTriple = 2;
          } else {
            _G.uiPowerItem.totalBom = data.TotalBom ? data.TotalBom : 0;
            _G.uiPowerItem.totalRelocated = data.TotalRelocated ? data.TotalRelocated : 0;
            _G.uiPowerItem.totalTriple = data.TotalTriple ? data.TotalTriple : 0;
          }
          _G.data.saveData({
            TotalBom: _G.uiPowerItem.totalBom
          });
          _G.data.saveData({
            TotalRelocated: _G.uiPowerItem.totalRelocated
          });
          _G.data.saveData({
            TotalTriple: _G.uiPowerItem.totalTriple
          });
          _G.uiPowerItem.updatePowerItem();
        });
        this.btnBom = cc.find("Canvas/play_area/power_items/pw_1");
        this.btnRotate = cc.find("Canvas/play_area/power_items/pw_2");
        this.btnTriple = cc.find("Canvas/play_area/power_items/pw_3");
        _G.utils.addButtonComp(this.btnBom, function() {
          _G.fxPowerItem.showAnimCat(1, function() {
            _G.uiPowerItem.onClickBom();
          });
        });
        _G.utils.addButtonComp(this.btnRotate, function() {
          _G.fxPowerItem.showAnimCat(2, function() {
            _G.uiPowerItem.onClickRelocated();
          });
        });
        _G.utils.addButtonComp(this.btnTriple, function() {
          _G.fxPowerItem.showAnimCat(3, function() {
            _G.uiPowerItem.onClickTriple();
          });
        });
        if (_G.configs.off_power_item) {
          this.btnBom.active = false;
          this.btnRotate.active = false;
          this.btnTriple.active = false;
        }
      },
      updatePowerItem: function updatePowerItem() {
        if (this.bgTotalBom) {
          this.bgTotalBom.children.map(function(item) {
            item.active = false;
          });
          if (_G.uiPowerItem.totalBom && _G.uiPowerItem.totalBom > 0) {
            this.bgTotalBom.active = true;
            this.bgTotalBom.getChildByName("label").active = true;
            _G.utils.setLabelText(this.bgTotalBom.getChildByName("label"), _G.uiPowerItem.totalBom);
          } else this.bgTotalBom.active = false;
        }
        if (this.bgTotalRotate) {
          this.bgTotalRotate.children.map(function(item) {
            item.active = false;
          });
          if (_G.uiPowerItem.totalRelocated && _G.uiPowerItem.totalRelocated > 0) {
            this.bgTotalRotate.active = true;
            this.bgTotalRotate.getChildByName("label").active = true;
            _G.utils.setLabelText(this.bgTotalRotate.getChildByName("label"), _G.uiPowerItem.totalRelocated);
          } else this.bgTotalRotate.active = false;
        }
        if (this.bgTotalTriple) {
          this.bgTotalTriple.children.map(function(item) {
            item.active = false;
          });
          if (_G.uiPowerItem.totalTriple && _G.uiPowerItem.totalTriple > 0) {
            this.bgTotalTriple.active = true;
            this.bgTotalTriple.getChildByName("label").active = true;
            _G.utils.setLabelText(this.bgTotalTriple.getChildByName("label"), _G.uiPowerItem.totalTriple);
          } else _G.game.triplePoint, this.bgTotalTriple.active = false;
        }
      },
      onClickBom: function onClickBom() {
        return;
      },
      addItemBom: function addItemBom() {
        _G.uiPowerItem.totalBom += 1;
        _G.data.saveData({
          TotalBom: _G.uiPowerItem.totalBom
        });
        _G.ui.showLayer("layer_anim");
        _G.game.actionPowerItemBom();
        _G.uiPowerItem.updatePowerItem();
      },
      onClickRelocated: function onClickRelocated() {
        return _G.mapVisual.relocate();
      },
      addItemRelocated: function addItemRelocated() {
        _G.uiPowerItem.totalRelocated += 1;
        _G.data.saveData({
          TotalRelocated: _G.uiPowerItem.totalRelocated
        });
        _G.ui.showLayer("layer_anim");
        _G.uiPowerItem.updatePowerItem();
        _G.game.actionPowerItemRelocated();
      },
      onClickTriple: function onClickTriple() {
        return _G.mapVisual.x3();
      },
      addItemTriple: function addItemTriple() {
        _G.uiPowerItem.totalTriple += 1;
        _G.data.saveData({
          TotalTriple: _G.uiPowerItem.totalTriple
        });
        _G.uiPowerItem.updatePowerItem();
        _G.utils.setTimeout(function() {
          _G.game.actionPowerItemTriple();
        }, 1e3);
      },
      validateBoomSuccess: function validateBoomSuccess() {
        _G.uiPowerItem.totalBom--;
        _G.data.saveData({
          TotalBom: _G.uiPowerItem.totalBom
        });
        _G.uiPowerItem.updatePowerItem();
      },
      validateTripleSuccess: function validateTripleSuccess() {
        _G.uiPowerItem.totalTriple--;
        _G.data.saveData({
          TotalTriple: _G.uiPowerItem.totalTriple
        });
        _G.uiPowerItem.updatePowerItem();
      },
      validateRelocatedSuccess: function validateRelocatedSuccess() {
        _G.uiPowerItem.totalRelocated--;
        _G.data.saveData({
          TotalRelocated: _G.uiPowerItem.totalRelocated
        });
        _G.uiPowerItem.updatePowerItem();
      }
    };
    exports.uiPowerItem = uiPowerItem;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  ui: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "369ectLwYFG4Ku+YDu4KaLJ", "ui");
    "use strict";
    exports.__esModule = true;
    exports.ui = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var ui = {
      hideNagTimer: null,
      hideLoadingRealServerTimer: null,
      init: function init() {
        _G.ui.initButtonHandler();
        this.adjustAllLayerSizes();
      },
      adjustAllLayerSizes: function adjustAllLayerSizes() {
        var canvas = cc.find("Canvas");
        canvas.children.map(function(layer) {
          layer.width = canvas.width;
          layer.height = canvas.height;
        });
      },
      initButtonHandler: function initButtonHandler() {
        _G.utils.addButtonComp(cc.find("Canvas/layer_game_over/content/btn_replay"), function(e) {
          _G.utilsFB.log("ev_click_button_replay_game_over");
          _G.ui.hideLayer("layer_game_over");
          _G.gameOver.replay();
        });
        _G.utils.addButtonComp(cc.find("Canvas/layer_game_over/content/btn_share"), function(e) {
          _G.utilsFB.log("ev_click_button_brag_game_over");
          _G.social.share();
        });
        _G.utils.addButtonComp(cc.find("Canvas/layer_pause/content/btn_restart"), function(e) {
          _G.utilsFB.log("ev_click_button_replay_pause");
          _G.ui.hideLayer("layer_pause");
          _G.gameOver.replay();
        });
        _G.utils.addButtonComp(cc.find("Canvas/layer_pause/content/btn_continue"), function(e) {
          _G.utilsFB.log("ev_click_button_continue_pause");
          _G.ui.hideLayer("layer_pause");
        });
        _G.utils.addButtonComp(cc.find("Canvas/play_area/bg_header/btn_pause"), function(e) {
          _G.utilsFB.log("ev_click_button_pause");
          if (!_G.tut.isTutDone) return;
          _G.ui.showLayer("layer_pause");
        });
        _G.utils.addButtonComp(cc.find("Canvas/play_area/bg_header/btn_rank"), function(e) {
          _G.utilsFB.log("ev_click_button_rank");
          if (!_G.tut.isTutDone) return;
          _G.ui.showLayer("layer_leaderboard");
        });
        _G.utils.addButtonComp(cc.find("Canvas/layer_alert/btn_ok"), function(e) {
          _G.ui.hideLayer("layer_alert");
          if (_G.ui.alertCloseCallback) {
            _G.ui.alertCloseCallback();
            _G.ui.alertCloseCallback = null;
          }
        });
      },
      showLayer: function showLayer(layerName) {
        var layerNode = cc.find("Canvas/" + layerName);
        layerNode && _G.fx.openLayer(layerNode);
      },
      hideLayer: function hideLayer(layerName) {
        var layerNode = cc.find("Canvas/" + layerName);
        layerNode && _G.fx.closeLayer(layerNode);
      },
      showAlert: function showAlert(contentCode, closeCallback) {
        _G.ui.showLayer("layer_alert");
        _G.utils.setLabelText(cc.find("Canvas/layer_alert/content_bg/label_message"), contentCode);
        _G.ui.alertCloseCallback = closeCallback;
      },
      showLoading: function showLoading() {
        console.log("showing loading......");
        _G.ui.showLayer("layer_loading");
        _G.ui.hideLoadingTimer && clearTimeout(_G.ui.hideLoadingTimer);
        _G.ui.hideLoadingTimer = setTimeout(function() {
          return _G.ui.hideLoading();
        }, 1e4);
      },
      hideLoading: function hideLoading() {
        console.log("hiding loading......");
        _G.ui.hideLayer("layer_loading");
        _G.ui.hideLoadingTimer && clearTimeout(_G.ui.hideLoadingTimer);
      },
      showNagScreen: function showNagScreen(compName) {
        cc.find("Canvas/nag_screen").active = true;
        _G.ui.hideNagTimer && clearTimeout(_G.ui.hideNagTimer);
        _G.ui.hideNagTimer = setTimeout(function() {
          return _G.ui.hideNagScreen();
        }, 1e4);
      },
      hideNagScreen: function hideNagScreen(compName) {
        cc.find("Canvas/nag_screen").active = false;
        _G.ui.hideNagTimer && clearTimeout(_G.ui.hideNagTimer);
      },
      disableButton: function disableButton(but) {
        but.getComponent(cc.Button) || _log("KHoong ton tai button component");
        but.getComponent(cc.Button) && (but.getComponent(cc.Button).enabled = false);
        but.opacity = parseInt(76.5);
      },
      enableButton: function enableButton(but) {
        but.getComponent(cc.Button) && (but.getComponent(cc.Button).enabled = true);
        but.opacity = 255;
      },
      showCompliment: function showCompliment(text, type) {
        var animNodeCat = cc.find("Canvas/play_area/labels/anim_cat");
        var animCat = cc.find("Canvas/play_area/labels/anim_cat/cat");
        var container = cc.find("Canvas/play_area/labels/compliment");
        var label = container.getChildByName("label");
        _G.utils.setLabelText(label, text);
        if (type) {
          animNodeCat.runAction(cc.fadeIn(.2));
          animNodeCat.getChildByName("bg").scale = 1;
          var componentSkeleton = animCat.getComponent(sp.Skeleton);
          componentSkeleton.setAnimation(1, "dance", false);
          componentSkeleton.setCompleteListener(function(trackEntry) {
            componentSkeleton.clearTrack(1);
            animNodeCat.runAction(cc.fadeOut(.2));
            animNodeCat.getChildByName("bg").scale = 0;
          });
          return;
        }
        container.stopAllActions();
        container.scale = 0;
        container.runAction(cc.sequence(cc.scaleTo(.2, 1.15).easing(cc.easeOut(3)), cc.scaleTo(.1, 1).easing(cc.easeIn(1)), cc.delayTime(1.2), cc.scaleTo(.1, 1.15).easing(cc.easeOut(1)), cc.scaleTo(.2, 0).easing(cc.easeIn(3))));
      },
      updateScore: function updateScore(score) {
        score = score || _G.user.score;
        var playAreaLabelScore = cc.find("Canvas/play_area/bg_header/label_score");
        playAreaLabelScore.runAction(cc.sequence(cc.scaleTo(.1, 1.5), cc.callFunc(function() {
          return _G.utils.setLabelText(playAreaLabelScore, _G.utils.localizeNumber(score));
        }), cc.scaleTo(.17, 1)));
        _G.utils.setLabelText(cc.find("Canvas/layer_game_over/content/score_frame/label"), _G.utils.localizeNumber(score));
        _G.utils.setLabelText(cc.find("Canvas/layer_challenge_friend/content_bg/label_score"), _G.utils.localizeNumber(score));
        var tempBestScore = _max(_G.user.bestScore, score);
        _G.utils.setLabelText(cc.find("Canvas/play_area/bg_header/label_best_score"), _G.utils.localizeNumber(tempBestScore));
        _G.utils.setLabelText(cc.find("Canvas/layer_game_over/content/best_score_frame/label"), _G.utils.localizeNumber(tempBestScore));
        _G.utils.setLabelText(cc.find("Canvas/layer_leaderboard/bg_point_leader/label_best_score"), _G.utils.localizeNumber(tempBestScore));
      }
    };
    exports.ui = ui;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  user: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3fe9fn4VtFG/bmP6vRVZhC9", "user");
    "use strict";
    exports.__esModule = true;
    exports.user = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var user = {
      id: 0,
      name: 0,
      score: 0,
      bestScore: 0,
      init: function init() {
        if (window.FBInstant) {
          _G.user.id = FBInstant.player.getID();
          _G.user.name = FBInstant.player.getName();
          _G.user.photo = FBInstant.player.getPhoto();
        } else {
          _G.user.id = "xxxxaa111";
          _G.user.name = "Tkgiet";
          _G.user.photo = "https://developer.mozilla.org/static/img/opengraph-logo.72382e605ce3.png";
        }
        cc.assetManager.loadRemote(_G.user.photo, function(err, texture) {
          err || (_G.user.avatarSpriteFrame = new cc.SpriteFrame(texture));
        });
      },
      initNewUser: function initNewUser(data) {
        Object.assign(data, {
          LoginTime: 0,
          PlayerExp: 0,
          PlayerLevel: 0
        });
        _G.data.saveData(data);
      }
    };
    exports.user = user;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  utils_facebook: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6352baeP59CYZXDM4grJoBf", "utils_facebook");
    "use strict";
    exports.__esModule = true;
    exports.utilsFB = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var utilsFB = {
      init: function init() {
        _G.utilsFB.startLogSessionTime();
        _G.utilsFB.startCountingSessionTimeBlock();
        if (window.FBInstant) {
          FBInstant.onPause(function() {});
          window.fbSupportedAPIs = FBInstant.getSupportedAPIs();
        }
      },
      log: function log(eventName, quantity, dataObj) {
        void 0 === quantity && (quantity = 1);
        if (!window.FBInstant) return;
        FBInstant.logEvent(eventName, quantity, dataObj);
      },
      setSessionId: function setSessionId(playerId) {
        window.FBInstant && FBInstant.setSessionData({
          player_id: playerId
        });
      },
      isSupportedAPI: function isSupportedAPI(name) {
        if (!window.FBInstant) return false;
        var arr = FBInstant.getSupportedAPIs();
        return -1 != arr.indexOf(name);
      },
      startLogSessionTime: function startLogSessionTime() {
        var logEventTimePassed = function logEventTimePassed(time) {
          _G.utilsFB.log("ev_session_time", 1, {
            timePassed: time
          });
        };
        logEventTimePassed(0);
        var passedTime = 0;
        setInterval(function() {
          passedTime += 30;
          logEventTimePassed(passedTime);
        }, 3e4);
      },
      logTimeBlockTimer: 0,
      logTimeBlockInterval: 0,
      logTimeBlockLastCall: 0,
      logTimeBlockLastStop: 0,
      logTimeBlockCurrentTotalInterfereTime: 0,
      startCountingSessionTimeBlock: function startCountingSessionTimeBlock() {
        try {
          var blockTime = 30;
          var logFunc = function logFunc() {
            _G.utilsFB.log("ev_session_time_block_seconds", blockTime);
            _G.utilsFB.logTimeBlockLastCall = _time();
            _G.utilsFB.logTimeBlockCurrentTotalInterfereTime = 0;
          };
          _G.utilsFB.logTimeBlockLastCall || (_G.utilsFB.logTimeBlockLastCall = _time());
          if (_G.utilsFB.logTimeBlockLastStop) {
            _G.utilsFB.logTimeBlockCurrentTotalInterfereTime += _time() - _G.utilsFB.logTimeBlockLastStop;
            _G.utilsFB.logTimeBlockLastStop = 0;
          }
          var timeToWait = 1e3 * blockTime - (_time() - _G.utilsFB.logTimeBlockLastCall - _G.utilsFB.logTimeBlockCurrentTotalInterfereTime);
          _G.utilsFB.logTimeBlockTimer = setTimeout(function() {
            logFunc();
            _G.utilsFB.logTimeBlockInterval = setInterval(logFunc, 1e3 * blockTime);
          }, timeToWait);
        } catch (e) {
          console.log("err startCountingSessionTimeBlock", e);
        }
      },
      stopCountingSessionTimeBlock: function stopCountingSessionTimeBlock() {
        _G.utilsFB.logTimeBlockLastStop = _time();
        _G.utilsFB.logTimeBlockTimer && clearTimeout(_G.utilsFB.logTimeBlockTimer);
        _G.utilsFB.logTimeBlockInterval && clearInterval(_G.utilsFB.logTimeBlockInterval);
      }
    };
    exports.utilsFB = utilsFB;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  utils_instant: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e9a52yRTSdH1owimWkbkTfe", "utils_instant");
    "use strict";
    window._NO_CONSOLE_LOG = true;
    window._soundVolume = 1;
    window._isANDROID = cc.sys.os == cc.sys.OS_ANDROID;
    window._isIOS = cc.sys.os == cc.sys.OS_IOS;
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
    window._removeArrItem = function(Arr, item) {
      var index = Arr.indexOf(item);
      if (-1 == index) return;
      Arr.splice(index, 1);
      return true;
    };
    window._time = function() {
      return new Date().getTime();
    };
    window._isString = function(x) {
      return "string" === typeof x;
    };
    window._isFunction = function(functionToCheck) {
      return functionToCheck && "[object Function]" === {}.toString.call(functionToCheck);
    };
    window._log = function() {
      if (!window._NO_CONSOLE_LOG) try {
        var _console;
        (_console = console).log.apply(_console, arguments);
      } catch (e) {}
    };
    cc._RF.pop();
  }, {} ],
  utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9f320CgfyZBvpJvky2f4A6n", "utils");
    "use strict";
    exports.__esModule = true;
    exports.utils = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it;
      if ("undefined" === typeof Symbol || null == o[Symbol.iterator]) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && "number" === typeof o.length) {
          it && (o = it);
          var i = 0;
          return function() {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      it = o[Symbol.iterator]();
      return it.next.bind(it);
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      "Object" === n && o.constructor && (n = o.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(o);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    var uuidIndex = 1e5;
    var utils = {
      textureCaches: {},
      init: function init() {
        _G.utils.canvasNode = cc.find("Canvas");
      },
      setTimeout: function setTimeout(callback, timeInMillisecond) {
        void 0 === timeInMillisecond && (timeInMillisecond = 0);
        var target = {
          _id: uuidIndex++,
          __instanceId: uuidIndex
        };
        target.callback = function() {
          callback(target);
        };
        cc.director.getScheduler().schedule(target.callback, target, timeInMillisecond / 1e3, 0, 0, false);
        return target;
      },
      clearTimeout: function clearTimeout(target) {
        if (!target || !target._id || !target.callback) return;
        cc.director.getScheduler().unschedule(target.callback, target);
      },
      addButtonComp: function addButtonComp(node, handlerFunc, isBubble, playSound) {
        void 0 === isBubble && (isBubble = true);
        void 0 === playSound && (playSound = true);
        setTimeout(function() {
          node.getComponent("free_button_comp") || node.addComponent("free_button_comp");
          var butComp = node.addComponent(cc.Button);
          butComp.transition = isBubble ? cc.Button.Transition.SCALE : null;
          var eventHandler = new cc.Component.EventHandler();
          eventHandler.target = node;
          eventHandler.component = "free_button_comp";
          eventHandler.handler = "freeHandler";
          butComp.clickEvents.push(eventHandler);
          node.freeButtonHandlerFunc = function() {
            handlerFunc();
            _G.audio.playSoundClickButton();
          };
        });
      },
      getNodePath: function getNodePath(node) {
        var pathArr = [ node.name ];
        var parent = node.parent;
        var safeCount = 0;
        while (parent && safeCount++ < 50) {
          if (!parent.parent) break;
          pathArr.push(parent.name);
          parent = parent.parent;
        }
        return pathArr.reverse().join("/");
      },
      getChildByPath: function getChildByPath(node, path) {
        try {
          var result = node;
          path.split("/").map(function(childName) {
            result = result.getChildByName(childName);
          });
          return result;
        } catch (e) {
          console.warn(" Error calling getChildByPath(" + path + ") : " + e.message + " ");
          return null;
        }
      },
      getComponentName: function getComponentName(mixedName) {
        return mixedName.split("<")[1].replace(">", "");
      },
      setOrgPos: function setOrgPos(node) {
        if (!node) return;
        node.orgPos || (node.orgPos = node.getPosition());
        node.setPosition(node.orgPos);
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
      setGlobalPositionToNode: function setGlobalPositionToNode(sourceNode, targetNode) {
        var gPos = _G.utils.getGlobalPosition(targetNode);
        var posDiff = _G.utils.global2LocalPosDiff(sourceNode, gPos.x, gPos.y);
        sourceNode.x += posDiff.x;
        sourceNode.y += posDiff.y;
        return gPos;
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
      randomItemFromRatioSet: function randomItemFromRatioSet(itemArr) {
        var lastSum = 0;
        var ratioScaleArr = [];
        itemArr.map(function(item) {
          lastSum += item.ratio;
          ratioScaleArr.push(lastSum);
        });
        var rnd = parseInt(_random() * lastSum);
        var keyIndex = 0;
        ratioScaleArr.some(function(val, index) {
          if (rnd < val) {
            keyIndex = index;
            return true;
          }
        });
        return itemArr[keyIndex];
      },
      secondsToTime: function secondsToTime(secs) {
        var days = Math.floor(secs / 86400);
        var hours = Math.floor(secs % 86400 / 3600);
        var minutes = Math.floor(secs % 3600 / 60);
        var seconds = secs % 60;
        return {
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        };
      },
      secondsToTimeString: function secondsToTimeString(secs) {
        var _this$secondsToTime = this.secondsToTime(secs), days = _this$secondsToTime.days, hours = _this$secondsToTime.hours, minutes = _this$secondsToTime.minutes, seconds = _this$secondsToTime.seconds;
        if (days > 0) return days + " day" + (days > 1 ? "s" : "");
        if (hours > 0) return hours + " hr" + (hours > 1 ? "s" : "");
        if (minutes > 0) return minutes + " min" + (minutes > 1 ? "s" : "");
        return (seconds || 0) + " sec" + (seconds > 1 ? "s" : "");
      },
      secondsToTimeCountdown: function secondsToTimeCountdown(secs) {
        if (secs <= 0) return "00:00";
        var _this$secondsToTime2 = this.secondsToTime(secs), days = _this$secondsToTime2.days, hours = _this$secondsToTime2.hours, minutes = _this$secondsToTime2.minutes, seconds = _this$secondsToTime2.seconds;
        if (days > 0) return days + " day" + (days > 1 ? "s" : "");
        var ret = "";
        hours > 0 && (ret = ("0" + hours).slice(-2) + ":");
        ret += ("0" + minutes).slice(-2) + ":";
        ret += ("0" + seconds).slice(-2);
        return ret;
      },
      setLabelCountDownTimer: function setLabelCountDownTimer(node, targetUTC, timeoutCallback, template) {
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
          var str = (template || "xxx").replace("xxx", timeDiffStr);
          _G.utils.setLabelText(N, str);
          if (timeDiff <= 0) {
            clearInterval(N.countDownTimerVar);
            timeoutCallback && timeoutCallback();
          }
        };
        N.countDownTimerVar = setInterval(timerFunc, 500);
        timerFunc();
      },
      waitToRun: function waitToRun(callback, propertyName, mainObject, interval, maxTimeWait, timeoutCallback) {
        void 0 === mainObject && (mainObject = window);
        void 0 === interval && (interval = .1);
        var isRunSuccess = false;
        var waitInterval = setInterval(function() {
          if (propertyName.includes("()")) {
            if (!mainObject[propertyName.replace("()", "")]()) return;
          } else if (!mainObject[propertyName]) return;
          clearInterval(waitInterval);
          isRunSuccess = true;
          callback();
        }, 1e3 * interval);
        maxTimeWait && _G.utils.setTimeout(function() {
          clearInterval(waitInterval);
          timeoutCallback && !isRunSuccess && timeoutCallback();
        }, 1e3 * maxTimeWait);
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
      preloadImage: function preloadImage(imgPath, callback) {
        if (_G.utils.textureCaches[imgPath]) return callback && callback(_G.utils.textureCaches[imgPath]);
        cc.loader.loadRes(imgPath, cc.SpriteFrame, function(e, texture) {
          if (e) callback && callback(false); else {
            _G.utils.textureCaches[imgPath] = texture;
            callback && callback(texture);
          }
        });
      },
      copyTexture: function copyTexture(sourceNode, destNode) {
        var sComp = destNode.getComponent(cc.Sprite) || destNode.addComponent(cc.Sprite);
        sComp.spriteFrame = sourceNode.getComponent(cc.Sprite).spriteFrame;
      },
      setNodeImgFromUrl: function setNodeImgFromUrl(node, url) {
        node.isTextureFromURL = true;
        _G.utils.textureCaches[url] || (_G.utils.textureCaches[url] = new cc.SpriteFrame(url));
        _G.utils.setNodeImgFromSpriteFrame(node, _G.utils.textureCaches[url]);
      },
      setNodeImgFromResources: function setNodeImgFromResources(node, imgPath, isResetOrgSize, callback) {
        void 0 === isResetOrgSize && (isResetOrgSize = false);
        node.isTextureFromResource = true;
        node.currentTexturePath = imgPath;
        if (_G.utils.textureCaches[imgPath]) {
          node.getComponent(cc.Sprite).enabled = true;
          _G.utils.setNodeImgFromSpriteFrame(node, _G.utils.textureCaches[imgPath], !isResetOrgSize, isResetOrgSize);
          callback && callback();
        } else cc.loader.loadRes(imgPath, cc.SpriteFrame, function(e, texture) {
          if (e) return;
          _G.utils.textureCaches[imgPath] = texture;
          if (node.currentTexturePath == imgPath) {
            node.getComponent(cc.Sprite).enabled = true;
            _G.utils.setNodeImgFromSpriteFrame(node, _G.utils.textureCaches[imgPath], !isResetOrgSize, isResetOrgSize);
            callback && callback();
          }
        });
      },
      setNodeImgFromSpriteFrame: function setNodeImgFromSpriteFrame(node, frame, keepOldSize, isSizedToNewSFrame) {
        void 0 === keepOldSize && (keepOldSize = true);
        void 0 === isSizedToNewSFrame && (isSizedToNewSFrame = false);
        var orgW = node.width, orgH = node.height;
        node.getComponent(cc.Sprite) || node.addComponent(cc.Sprite);
        _G.utils.waitToRun(function() {
          node.getComponent(cc.Sprite).spriteFrame = frame;
          if (keepOldSize) {
            node.width = 0 != orgW ? orgW : frame._originalSize.width;
            node.height = 0 != orgH ? orgH : frame._originalSize.height;
          } else {
            0 != frame._originalSize.width && (node.width = frame._originalSize.width);
            0 != frame._originalSize.height && (node.height = frame._originalSize.height);
          }
          if (isSizedToNewSFrame) {
            var sFrame = node.getComponent(cc.Sprite).spriteFrame;
            node.width = sFrame._originalSize.width;
            node.height = sFrame._originalSize.height;
          }
        }, "textureLoaded()", frame);
      },
      setNodeImg: function setNodeImg(node, img, keepOldSize, isSizedToNewSFrame) {
        void 0 === keepOldSize && (keepOldSize = true);
        void 0 === isSizedToNewSFrame && (isSizedToNewSFrame = false);
        if ("string" === typeof img) this.isURL(img) ? _G.utils.setNodeImgFromUrl(node, img) : _G.utils.setNodeImgFromResources(node, img, isSizedToNewSFrame); else if (img instanceof cc.SpriteFrame) _G.utils.setNodeImgFromSpriteFrame(node, img, keepOldSize, isSizedToNewSFrame); else if (img instanceof cc.Node) {
          var sComp = img.getComponent(cc.Sprite);
          if (!sComp) return;
          _G.utils.setNodeImgFromSpriteFrame(node, sComp.spriteFrame, keepOldSize, isSizedToNewSFrame);
        }
      },
      setLabelText: function setLabelText(label, str) {
        if (!label) return;
        label.getComponent(cc.Label).string = str;
      },
      setLabelTextBigNumber: function setLabelTextBigNumber(label, num) {
        if (!label) return;
        isNaN(num) && (num = 0);
        label.getComponent(cc.Label).string = _G.utils.formatCurrency(num, 999999999999999);
      },
      setLabelTextPrice: function setLabelTextPrice(label, number, maxSize) {
        if (!label) return;
        var isStartedWPlus = _isString(number) && number.startsWith("+");
        var num = isStartedWPlus ? parseInt(number.replace("+", "")) : number;
        var str = _G.utils.formatCurrency(num, maxSize);
        label.getComponent(cc.Label).string = (isStartedWPlus ? "+" : "") + str;
      },
      setLabelTextShotcut: function setLabelTextShotcut(node, text) {
        if (node) {
          if (!text.length) return;
          var newText = text.length > 6 ? text.slice(0, 6) : text;
          var compNode = node.getComponent(cc.Label);
          compNode.string = newText + "...";
        }
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
      formatNumber: function formatNumber(value) {
        return value.toLocaleString("en");
      },
      formatCurrency: function formatCurrency(value, maxSize) {
        var SUFFIXES = [ "K", "M", "B", "T", "aa", "ab", "ad", "ae", "af" ];
        var x = Math.floor(value);
        var endValueStr = "";
        if (x > maxSize) for (var _iterator = _createForOfIteratorHelperLoose(SUFFIXES), _step; !(_step = _iterator()).done; ) {
          var suffix = _step.value;
          x /= 1e3;
          if (x < maxSize) {
            endValueStr = suffix;
            break;
          }
        }
        return x.toFixed(0).replace(",", ".").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + endValueStr;
      },
      isURL: function isURL(str) {
        var pattern = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
        return !!pattern.test(str);
      },
      singleTouchSet: function singleTouchSet(N, touchStartFunc, touchMoveFunc, touchEndFunc) {
        var scrW2 = cc.winSize.width / 2;
        var scrH2 = cc.winSize.height / 2;
        var callFuncWithEvent = function callFuncWithEvent(func, event) {
          var pos = event.touch.getLocation();
          var realPos = cc.v2(pos.x - scrW2, pos.y - scrH2);
          func(realPos, event);
        };
        N.on("touchstart", function(event) {
          if (N.touchingID) return;
          N.touchingID = event.touch._id + 1;
          touchStartFunc && callFuncWithEvent(touchStartFunc, event);
        });
        touchMoveFunc && N.on("touchmove", function(event) {
          var tID = event.touch._id + 1;
          tID == N.touchingID && touchMoveFunc && callFuncWithEvent(touchMoveFunc, event);
        });
        var touchDestroy = function touchDestroy(event) {
          var tID = event.touch._id + 1;
          if (tID == N.touchingID) {
            N.touchingID = null;
            touchEndFunc && callFuncWithEvent(touchEndFunc, event);
          }
        };
        N.on("touchend", touchDestroy);
        N.on("touchcancel", touchDestroy);
      },
      removeTouchHandler: function removeTouchHandler(node) {
        node.isDraggable = false;
        node.touchStartHandlerArr = node.touchMoveHandlerArr = node.touchEndHandlerArr = null;
        node.off("touchstart");
        node.off("touchend");
        node.off("touchmove");
        node.off("touchcancel");
      },
      localizeNumber: function localizeNumber(text) {
        var local = "";
        local = window.FBInstant ? FBInstant.getLocale() : "en_US";
        var txtFormat = ".";
        switch (local) {
         case "en_US":
         case "en_GB":
         case "th_TH":
          txtFormat = ",";
          break;

         case "fr_FR":
         case "fr_CA":
         case "ru_RU":
          txtFormat = " ";
          break;

         case "pl_PL":
         case "it_IT":
         case "hu_HU":
          txtFormat = "";
        }
        var s = "";
        var g = text;
        var count = 0;
        var c = "";
        while (g >= 10) {
          count > 0 && count % 3 == 0 && (s = txtFormat + s);
          var i = g % 10;
          c = i + "";
          s = c + s;
          g = (g - i) / 10;
          count++;
        }
        count > 0 && count % 3 == 0 && (s = txtFormat + s);
        c = g + "";
        s = c + s;
        return s;
      }
    };
    exports.utils = utils;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ],
  video: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "676949Lh3BPDLrQ2WbtlHfv", "video");
    "use strict";
    exports.__esModule = true;
    exports.video = void 0;
    var _G = _interopRequireWildcard(require("../all_modules"));
    function _getRequireWildcardCache() {
      if ("function" !== typeof WeakMap) return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) return obj;
      if (null === obj || "object" !== typeof obj && "function" !== typeof obj) return {
        default: obj
      };
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) return cache.get(obj);
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
      }
      newObj["default"] = obj;
      cache && cache.set(obj, newObj);
      return newObj;
    }
    var video = {
      isAvailable: false,
      loadingVideo: false,
      rewardedVideo: null,
      init: function init() {
        window.FBInstant || (this.isAvailable = true);
        this.isAvailable = _G.utilsFB.isSupportedAPI("getRewardedVideoAsync");
        console.log("VIDEO.isAvailable = " + this.isAvailable + " ");
        _G.video.preloadVideo(function() {
          console.log("VIDEO.PRELOAD SUCCESS");
        }, function(err) {
          console.log("VIDEO.PRELOAD ERROR", err);
        });
      },
      preloadVideo: function preloadVideo(successCallBack, failCallBack) {
        if (!window.FBInstant) {
          failCallBack && failCallBack({
            code: "OFFLINE"
          });
          return;
        }
        if (!_G.utilsFB.isSupportedAPI("getRewardedVideoAsync")) {
          failCallBack && failCallBack({
            code: "NOT_SUPPORTED"
          });
          return;
        }
        if (_G.video.loadingVideo) {
          failCallBack && failCallBack({
            code: "LOADING"
          });
          return;
        }
        console.log("PreloadVideo() called. Loading video....");
        _G.video.loadingVideo = true;
        FBInstant.getRewardedVideoAsync(_G.configs.videoRewardId).then(function(rewardedVideo) {
          rewardedVideo.loadAsync().then(function() {
            _G.video.rewardedVideo = rewardedVideo;
            _G.video.loadingVideo = false;
            console.log("PreloadVideo() success");
            successCallBack && successCallBack();
          })["catch"](function(err) {
            _G.video.rewardedVideo = null;
            _G.video.loadingVideo = false;
            console.log("PreloadVideo() failed", err);
            failCallBack && failCallBack(err);
          });
        })["catch"](function(err) {
          _G.video.rewardedVideo = null;
          _G.video.loadingVideo = false;
          console.log("PreloadVideo() failed", err);
          failCallBack && failCallBack(err);
        });
      },
      showVideo: function showVideo(orgSuccessCallBack, orgFailCallBack, videoPos) {
        void 0 === videoPos && (videoPos = "");
        console.log("VIDEO.showVideo() calling ... videoObject = ", _G.video.rewardedVideo);
        var successCallBack = function successCallBack() {
          _G.ui.hideLoading();
          orgSuccessCallBack && orgSuccessCallBack();
        };
        var failCallBack = function failCallBack(err) {
          _G.ui.hideLoading();
          orgFailCallBack && orgFailCallBack(err);
        };
        _G.ui.showLoading();
        if (!window.FBInstant) return successCallBack();
        if (_G.video.rewardedVideo) {
          _G.utilsFB.log("ev_video_click_show");
          _G.video.rewardedVideo.showAsync().then(function() {
            console.log("VIDEO.showVideo success");
            _G.utilsFB.log("ev_watch_video_success", 1, {});
            _G.utilsFB.log("Ads-Total-Video", 1, {
              videoPos: videoPos
            });
            _G.utilsFB.log("Ads-Total");
            successCallBack();
            _G.video.preloadVideo();
          })["catch"](function(err) {
            console.warn("VIDEO.showVideo error ", err);
            _G.video.isErrRewardNotCompleted(err) ? _G.utilsFB.log("ev_video_err_reward_not_completed") : _G.utilsFB.log("ev_video_err_other");
            _G.video.preloadVideo();
            failCallBack(err);
          });
        } else if (_G.video.loadingVideo) _G.utils.setTimeout(function() {
          return _G.video.showVideo(successCallBack, failCallBack, videoPos);
        }, 200); else {
          _G.video.preloadVideo();
          failCallBack({
            code: "VIDEO_IS_NULL"
          });
        }
      },
      isErrRewardNotCompleted: function isErrRewardNotCompleted(err) {
        return "USER_INPUT" == err.code && "Reward not completed" == err.message;
      }
    };
    exports.video = video;
    cc._RF.pop();
  }, {
    "../all_modules": "all_modules"
  } ]
}, {}, [ "all_modules", "Asset", "canvas_init", "configs", "block_collision_handler", "cell_links", "constants", "control", "language_message", "map", "map_visual", "localize", "localize_auto_tranform", "localize_config", "data", "dice_asset", "game", "game_over", "load_optimize", "login", "user", "challenge", "leaderboard", "message", "promo", "share", "social", "tut", "fx", "fx_power_item", "ui", "ui_power_item", "audio", "free_button_comp", "inter_ad", "md5", "utils", "utils_facebook", "utils_instant", "video" ]);