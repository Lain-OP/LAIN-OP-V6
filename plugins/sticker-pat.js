import{sticker}from'../lib/sticker.js';import _0x1334f4 from'node-fetch';import _0xa1e2c from'@whiskeysockets/baileys';const handler=async(_0x42fbfb,{conn:_0x23d129})=>{try{if(_0x42fbfb['quoted']?.['sender'])_0x42fbfb['mentionedJid']['push'](_0x42fbfb['quoted']['sender']);if(!_0x42fbfb['mentionedJid']['length'])_0x42fbfb['mentionedJid']['push'](_0x42fbfb['sender']);const _0x31363a=await _0x1334f4('https://api.waifu.pics/sfw/pat'),_0x49f726=await _0x31363a['json'](),{url:_0x1c2342}=_0x49f726,_0x2d10f5=await sticker(null,_0x1c2342,'+'+_0x42fbfb['sender']['split']('@')[0x0]+'\x20le\x20dio\x20palmaditas\x20a\x20'+_0x42fbfb['mentionedJid']['map'](_0x1aa57d=>_0x1aa57d===_0x42fbfb['sender']?'alguien\x20':'+'+_0x1aa57d['split']('@')[0x0])['join'](',\x20'));_0x23d129['sendFile'](_0x42fbfb['chat'],_0x2d10f5,null,{'asSticker':!![]});}catch(_0x111987){}};handler['command']=/^(pat|palmaditas|cariños|mimos|patt)$/i,handler['register']=!![],handler['group']=!![];export default handler;