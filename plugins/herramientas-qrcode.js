import{toDataURL}from'qrcode';const handler=async(_0x39eb94,{text:_0x19f4c9,conn:_0x4c8f24})=>{if(!_0x19f4c9)throw'*[❗]\x20𝙸𝙽𝙶𝚁𝙴𝚂𝙴\x20𝙴𝙻\x20𝚃𝙴𝚇𝚃𝙾\x20𝚀𝚄𝙴\x20𝚀𝚄𝙸𝙴𝚁𝙰\x20𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁\x20𝙴𝙽\x20𝙲𝙾𝙳𝙸𝙶𝙾\x20𝚀𝚁*';_0x4c8f24['sendFile'](_0x39eb94['chat'],await toDataURL(_0x19f4c9['slice'](0x0,0x800),{'scale':0x8}),'qrcode.png','¯\x5c_(ツ)_/¯',_0x39eb94);};handler['help']=['','code']['map'](_0x53a4c7=>'qr'+_0x53a4c7+'\x20<teks>'),handler['tags']=['tools'],handler['command']=/^qr(code)?$/i,handler['register']=!![],handler['group']=!![];export default handler;