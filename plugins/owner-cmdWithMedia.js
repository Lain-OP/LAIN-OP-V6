const {proto,generateWAMessage,areJidsSameUser}=(await import('@whiskeysockets/baileys'))['default'];export async function all(_0x26f5e3,_0x244f1d){if(_0x26f5e3['isBaileys'])return;if(!_0x26f5e3['message'])return;if(!_0x26f5e3['msg']['fileSha256'])return;if(!(Buffer['from'](_0x26f5e3['msg']['fileSha256'])['toString']('base64')in global['db']['data']['sticker']))return;let _0x209df5=global['db']['data']['sticker'][Buffer['from'](_0x26f5e3['msg']['fileSha256'])['toString']('base64')],{text:_0x5ec2a5,mentionedJid:_0x215dc6}=_0x209df5,_0x410649=await generateWAMessage(_0x26f5e3['chat'],{'text':_0x5ec2a5,'mentions':_0x215dc6},{'userJid':this['user']['id'],'quoted':_0x26f5e3['quoted']&&_0x26f5e3['quoted']['fakeObj']});_0x410649['key']['fromMe']=areJidsSameUser(_0x26f5e3['sender'],this['user']['id']),_0x410649['key']['id']=_0x26f5e3['key']['id'],_0x410649['pushName']=_0x26f5e3['pushName'];if(_0x26f5e3['isGroup'])_0x410649['participant']=_0x26f5e3['sender'];let _0x32bb8f={..._0x244f1d,'messages':[proto['WebMessageInfo']['fromObject'](_0x410649)],'type':'append'};this['ev']['emit']('messages.upsert',_0x32bb8f);}