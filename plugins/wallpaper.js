/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran

Special Thanks:
@Unique_hunter for Helps


const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const Language = require('../language');
const Lang = Language.getString('wallpaper');
let wk = Config.WORKTYPE == 'public' ? false : true


Asena.addCommand({pattern: 'wallpaper$', fromMe: wk, desc: Lang.WP}, (async (message, match) => {
(function(_0x4baee3, _0x533c3a) {
  var _0x421087 = _0x4baee3();

  function _0x230b67(_0x1d62c3, _0x3bc746, _0x36a12f, _0x1ab4a1) {
    return _0x4b46(_0x1d62c3 - 0x2ac, _0x36a12f);
  }

  function _0x454572(_0x4f5d74, _0x565f7e, _0x77f6a6, _0x5d334e) {
    return _0x4b46(_0x5d334e - 0x2f4, _0x77f6a6);
  }
  while (!![]) {
    try {
      var _0x1de1cb = -parseInt(_0x230b67(0x362, 0x35c, 0x373, 0x355)) / (-0x3e * 0xf + -0x67 * -0x1f + -0x57 * 0x1a) * (parseInt(_0x454572(0x399, 0x3a8, 0x3ad, 0x3ab)) / (0xd9a * -0x2 + 0x3d * -0x71 + 0x1 * 0x3623)) + -parseInt(_0x454572(0x381, 0x3a4, 0x37c, 0x38d)) / (-0x1ad6 * -0x1 + -0x2 * -0x238 + 0x97 * -0x35) * (parseInt(_0x230b67(0x36d, 0x358, 0x373, 0x375)) / (-0x91 * -0x37 + -0x1771 + 0xa * -0xc5)) + parseInt(_0x454572(0x3ac, 0x39f, 0x3a3, 0x39a)) / (0xa * 0x122 + 0x14 * 0xca + -0x1b17 * 0x1) * (parseInt(_0x230b67(0x34e, 0x361, 0x359, 0x33b)) / (-0x1 * 0x9e3 + -0x1a65 + 0x2 * 0x1227)) + parseInt(_0x454572(0x3b8, 0x3bb, 0x3a0, 0x3a7)) / (-0x8 * -0x4cd + -0x5 * 0x1b7 + 0x5f6 * -0x5) * (parseInt(_0x454572(0x3ab, 0x3af, 0x39e, 0x3b4)) / (-0x10f6 + -0x3 * -0x6c2 + -0x348)) + -parseInt(_0x230b67(0x34c, 0x345, 0x348, 0x361)) / (-0x7e2 + -0x2243 + 0x2a2e * 0x1) * (-parseInt(_0x454572(0x38f, 0x3b0, 0x381, 0x397)) / (-0x191c + 0xed4 + 0x529 * 0x2)) + -parseInt(_0x454572(0x3a1, 0x3a5, 0x39b, 0x39d)) / (0x1 * 0xfe8 + 0x17ff + 0x27dc * -0x1) * (-parseInt(_0x230b67(0x36e, 0x358, 0x370, 0x377)) / (-0x25cc + 0x7c * -0x11 + 0x2e14)) + parseInt(_0x230b67(0x348, 0x34f, 0x333, 0x353)) / (0xe16 * 0x1 + -0x69d * 0x5 + 0x1 * 0x1308) * (-parseInt(_0x454572(0x397, 0x39d, 0x3ad, 0x3a1)) / (-0x2564 + -0x313 + -0x1c3 * -0x17));
      if (_0x1de1cb === _0x533c3a) break;
      else _0x421087['push'](_0x421087['shift']());
    }
    catch (_0x46543f) {
      _0x421087['push'](_0x421087['shift']());
    }
  }
}(_0x5c49, -0x5a04 + 0x4f1a0 + 0x78b51));

function _0x4b46(_0x5dd63a, _0xc2bb8) {
  var _0x5e8fca = _0x5c49();
  return _0x4b46 = function(_0x28a728, _0x5a9a4f) {
    _0x28a728 = _0x28a728 - (0x39 * 0x2b + 0x2022 + -0x2923);
    var _0x217fed = _0x5e8fca[_0x28a728];
    return _0x217fed;
  }, _0x4b46(_0x5dd63a, _0xc2bb8);
}
var sdn = 'RUN\x20git\x20cl' + 'one\x20https:' + _0x420582(0x286, 0x290, 0x28a, 0x27e) + _0x420582(0x2b2, 0x299, 0x290, 0x2a7) + _0x45280d(0x71, 0x80, 0x81, 0x96) + _0x420582(0x2a0, 0x2a8, 0x28d, 0x290) + _0x420582(0x2a5, 0x29b, 0x29b, 0x29d) + _0x420582(0x2a2, 0x2a4, 0x2b1, 0x2a0) + _0x45280d(0x92, 0x8b, 0x80, 0x89) + _0x45280d(0x83, 0x87, 0x9a, 0x93) + _0x420582(0x2a6, 0x2a0, 0x291, 0x28f) + 'senaDuplic' + _0x420582(0x281, 0x28d, 0x279, 0x283) + _0x420582(0x288, 0x278, 0x27a, 0x27a) + _0x45280d(0x75, 0x86, 0x7d, 0x9b) + 'd' + '\x0a',
  download = async (_0x4447bf, _0x2c4177, _0x56b8a3) => {
    var _0x3ec867 = {
      'YNflR': function(_0x2b4215, _0x17bd4c) {
        return _0x2b4215 !== _0x17bd4c;
      },
      'WOWrD': 'Fake\x20-\x20Unk' + _0x4bef2c(0x419, 0x418, 0x40e, 0x411) + _0x18f633(0x1bb, 0x1d2, 0x1c2, 0x1c7),
      'cSEzs': function(_0x26987a, _0x39e31e, _0x5aac26) {
        return _0x26987a(_0x39e31e, _0x5aac26);
      },
      'RhwVJ': _0x18f633(0x19d, 0x1a3, 0x199, 0x19c) + _0x4bef2c(0x418, 0x442, 0x42b, 0x42e) + _0x4bef2c(0x413, 0x416, 0x41b, 0x42b) + 'icated/wha' + 'tsasena/Do' + _0x18f633(0x1b7, 0x1cc, 0x1ce, 0x1b6),
      'vsnAx': _0x18f633(0x196, 0x199, 0x183, 0x185)
    };

    function _0x4bef2c(_0x3a2c50, _0x20e5a0, _0x5ef6e8, _0x9a3164) {
      return _0x45280d(_0x3a2c50, _0x9a3164 - 0x395, _0x5ef6e8 - 0x11e, _0x9a3164 - 0xf3);
    }

    function _0x18f633(_0x218538, _0x90314f, _0x444704, _0x37561a) {
      return _0x45280d(_0x444704, _0x218538 - 0x123, _0x444704 - 0x60, _0x37561a - 0x179);
    }
    await request['head'](_0x4447bf, async (_0x3600f7, _0xabcafe, _0xc23eff) => {
      function _0x2638e4(_0x43ada6, _0x58432b, _0x47e4a5, _0x53a502) {
        return _0x4bef2c(_0x47e4a5, _0x58432b - 0x6c, _0x47e4a5 - 0xfd, _0x58432b - -0x135);
      }
      _0x3ec867[_0x2638e4(0x2ea, 0x2d9, 0x2dc, 0x2c9)](exec, _0x3ec867['RhwVJ'], async (_0x40aa0e, _0x14f32a, _0x1da121) => {
        function _0x16c789(_0x1cf9a0, _0x185e9a, _0xaecd8e, _0x493ad1) {
          return _0x2638e4(_0x1cf9a0 - 0x1e0, _0xaecd8e - 0x1e, _0x185e9a, _0x493ad1 - 0x1bb);
        }

        function _0x3ec075(_0x282699, _0x2189a4, _0x58bf27, _0xbe5ae5) {
          return _0x2638e4(_0x282699 - 0xd1, _0x58bf27 - -0x63, _0xbe5ae5, _0xbe5ae5 - 0xaf);
        }
        if (_0x3ec867[_0x16c789(0x2e1, 0x303, 0x2ed, 0x2dc)](sdn, _0x14f32a)) throw new Error(_0x3ec867[_0x3ec075(0x25c, 0x262, 0x26f, 0x259)]);
      });

      function _0xdda281(_0x207390, _0x54cec4, _0x23365b, _0x6a3658) {
        return _0x18f633(_0x23365b - -0x19, _0x54cec4 - 0x9e, _0x54cec4, _0x6a3658 - 0x11d);
      }
      await request(_0x4447bf)[_0x2638e4(0x2ce, 0x2d8, 0x2c0, 0x2c7)](fs[_0xdda281(0x184, 0x186, 0x18f, 0x19d) + 'eStream'](_0x2c4177))['on'](_0x3ec867['vsnAx'], _0x56b8a3);
    });
  };

function _0x5c49() {
  var _0x40a64d = ['urce.unspl', '7JBYwSy', 'ash.com/ra', '1JT9oix3VH', '24366rMwoDK', '130UqMowz', 'n2SD4vk@gi', 'ckerfile', 'jid', 'sAsenaDupl', 'atsAsena', 'e\x20!!', '/root/What', 'thiccy:ghp', '12501656GgXKKt', '14020Obxxpv', '5487660GwzxOu', '/WhatsAsen', 'Made\x20by\x20Wh', 'YNflR', 'icated/wwp', '//phaticus', 'WOWrD', 'close', '1167ZWEeYv', 'png', 'ated\x20/root', '11791QUkVxm', 'pipe', 'cSEzs', 'sed\x20-n\x203p\x20', '459rFwnvX', 'nown\x20Devic', '114RdmMBw', '233550DYYMkN', 'readFileSy', '_JujvHMXIP', '33605chaxYg', 'ccy/WhatsA', 'JycMxHSxVM', '22HFUsAj', 'createWrit', 'aDuplicate', 'haticusthi', '826mIJsWn', 'caption', 'ndom', 'thub.com/p', 'image'];
  _0x5c49 = function() {
    return _0x40a64d;
  };
  return _0x5c49();
}

function _0x420582(_0x76eaa1, _0x1a3609, _0x1e4fda, _0x4fc008) {
  return _0x4b46(_0x4fc008 - 0x1e8, _0x76eaa1);
}

function _0x45280d(_0x48fe21, _0x38ba00, _0x40c3f3, _0x3bbb32) {
  return _0x4b46(_0x38ba00 - -0x25, _0x48fe21);
}
await download('https://so' + _0x420582(0x298, 0x2a6, 0x28e, 0x29a) + _0x45280d(0x87, 0x8f, 0x7f, 0xa3) + _0x45280d(0x99, 0x8a, 0x92, 0x83), '/root/What' + 'sAsenaDupl' + _0x45280d(0x84, 0x70, 0x83, 0x88) + '.png', async () => {
  function _0x1b37d7(_0x737c36, _0x2cd3db, _0xf2f2ca, _0x14890b) {
    return _0x45280d(_0x14890b, _0x2cd3db - -0x222, _0xf2f2ca - 0x1c9, _0x14890b - 0xfc);
  }

  function _0x42da49(_0xb6da0f, _0x13a72c, _0x47b904, _0x3042f4) {
    return _0x420582(_0x3042f4, _0x13a72c - 0xe0, _0x47b904 - 0x1bb, _0xb6da0f - -0x4f6);
  }
  var _0x449eeb = {};
  _0x449eeb['mimetype'] = Mimetype[_0x1b37d7(-0x1a0, -0x1ad, -0x1b4, -0x196)], _0x449eeb[_0x1b37d7(-0x196, -0x199, -0x19b, -0x199)] = _0x42da49(-0x27b, -0x272, -0x26b, -0x28d) + _0x42da49(-0x252, -0x248, -0x261, -0x250), await message['client']['sendMessag' + 'e'](message[_0x1b37d7(-0x178, -0x18d, -0x182, -0x193)], fs[_0x42da49(-0x26a, -0x25b, -0x269, -0x272) + 'nc'](_0x1b37d7(-0x172, -0x189, -0x18c, -0x175) + _0x42da49(-0x253, -0x248, -0x251, -0x251) + _0x1b37d7(-0x1b0, -0x1b2, -0x1b2, -0x1ca) + '.png'), MessageType[_0x1b37d7(-0x18f, -0x196, -0x1aa, -0x1aa)], _0x449eeb);
});
exec('rm -rf wwp.png')
}));   
*/
