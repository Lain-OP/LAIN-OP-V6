//hades
import _0x173e9c from'node-fetch';let enviando=![];const handler=async(_0x1fde60,{conn:_0x537f88,args:_0x5c358c,command:_0x4e7eeb,usedPrefix:_0x2c9956})=>{if(!_0x5c358c[0x0])throw'*[❗]\x20𝙸𝙽𝙶𝚁𝙴𝚂𝙴\x20𝚄𝙽\x20𝙴𝙽𝙻𝙰𝙲𝙴\x20𝙳𝙴\x20𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺,\x20𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\x20'+(_0x2c9956+_0x4e7eeb)+'*\x20https://fb.watch/fOTpgn6UFQ/';const _0x2ddcc3=await isValidFacebookLink(_0x5c358c[0x0]);if(!_0x2ddcc3)throw'*[❗]\x20𝙸𝙽𝙶𝚁𝙴𝚂𝙴\x20𝚄𝙽\x20𝙴𝙽𝙻𝙰𝙲𝙴\x20𝙳𝙴\x20𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺,\x20𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\x20'+(_0x2c9956+_0x4e7eeb)+'*\x20https://fb.watch/fOTpgn6UFQ/';if(!enviando)enviando=!![];try{await _0x1fde60['reply'](''+wait);const _0x3c6846=await _0x173e9c(global['MyApiRestBaseUrl']+'/api/facebook?url='+_0x5c358c[0x0]+'&apikey='+global['MyApiRestApikey']),_0x2aecfe=await _0x3c6846['json']();let _0x719ea6='';_0x2aecfe?.['status']===!![]?_0x719ea6=''+_0x2aecfe['resultado']['data']:(_0x719ea6=XD,enviando=![]),_0x537f88['sendMessage'](_0x1fde60['chat'],{'video':{'url':_0x719ea6},'filename':'error.mp4','caption':'aquí\x20tienes\x20tu\x20video'},{'quoted':_0x1fde60}),enviando=![];}catch(_0xc14c42){enviando=![],console['log']('Error:\x20'+_0xc14c42['message']);throw'algo\x20ocurrió\x20mal\x20intenté\x20de\x20nuevo\x20o\x20verifique\x20que\x20su\x20enlace\x20sea\x20el\x20correcto';}};handler['command']=/^(facebook|fb|facebookdl|fbdl|facebook2|fb2|facebookdl2|fbdl2|facebook3|fb3|facebookdl3|fbdl3|facebook4|fb4|facebookdl4|fbdl4|facebook5|fb5|facebookdl5|fbdl5)$/i;export default handler;async function isValidFacebookLink(_0x4b011e){const _0x579fb1=[/facebook\.com\/[^/]+\/videos\//i,/fb\.watch\//i,/fb\.com\/watch\//i,/fb\.me\//i,/fb\.com\/video\.php\?v=/i,/facebook\.com\/share\/v\//i,/facebook\.com\/share\/r\//i,/fb\.com\/share\/v\//i,/fb\.com\/share\/r\//i,/facebook\.com\/[^/]+\/posts\/[^/]+\//i,/facebook\.com\/reel\/[^/]+\//i];return _0x579fb1['some'](_0x4d1bdb=>_0x4d1bdb['test'](_0x4b011e));}