const handler=async(_0x5d2365,{conn:_0x3a2b35,text:_0x109ac0,command:_0x384044,usedPrefix:_0x4256d7})=>{const _0x37fd5c='./src/warn.jpg';let _0x4dbd94;if(_0x5d2365['isGroup'])_0x4dbd94=_0x5d2365['mentionedJid'][0x0]?_0x5d2365['mentionedJid'][0x0]:_0x5d2365['quoted']?_0x5d2365['quoted']['sender']:_0x109ac0;else _0x4dbd94=_0x5d2365['chat'];const _0x576548=global['db']['data']['users'][_0x4dbd94],_0x2a7ae7=global['db']['data']['settings'][_0x3a2b35['user']['jid']]||{},_0x52d25='*[❗]\x20𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴\x20𝙰\x20𝚄𝙽𝙰\x20𝙿𝙴𝚁𝚂𝙾𝙽𝙰\x20𝙾\x20𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰\x20𝙰\x20𝚄𝙽\x20𝙼𝙴𝙽𝚂𝙰𝙹𝙴\x20𝙳𝙴𝙻\x20𝙶𝚁𝚄𝙿𝙾*\x0a\x0a*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\x0a*'+(_0x4256d7+_0x384044)+'\x20@'+global['suittag']+'*';if(!_0x4dbd94)throw _0x5d2365['reply'](_0x52d25,_0x5d2365['chat'],{'mentions':_0x3a2b35['parseMention'](_0x52d25)});if(_0x5d2365['mentionedJid']['includes'](_0x3a2b35['user']['jid']))return;if(_0x576548['warn']==0x0)throw'*[❗]\x20𝙴𝙻\x20𝚄𝚂𝚄𝙰𝚁𝙸𝙾\x20𝚃𝙸𝙴𝙽𝙴\x200\x20𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰𝚂*';_0x576548['warn']-=0x1,await _0x5d2365['reply']((_0x576548['warn']==0x1?'*@'+_0x4dbd94['split']`@`[0x0]+'*':'♻️\x20*@'+_0x4dbd94['split']`@`[0x0]+'*')+'\x20𝚂𝙴\x20𝙻𝙴\x20𝚀𝚄𝙸𝚃𝙾\x20𝚄𝙽𝙰\x20𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰\x0a*ADVERTENCIAS\x20'+_0x576548['warn']+'/3*',null,{'mentions':[_0x4dbd94]});};handler['command']=/^(unwarn|delwarn|deladvertir|deladvertencia|delwarning)$/i,handler['admin']=!![],handler['register']=!![],handler['group']=!![],handler['botAdmin']=!![];export default handler;