const handler=async(_0x3fd820,{conn:_0x42191b})=>{await _0x42191b['fetchBlocklist']()['then'](async _0x3cc47c=>{let _0x132084='*≡\x20Lista\x20de\x20bloqueados*\x0a\x0a*Total\x20:*\x20'+_0x3cc47c['length']+'\x0a\x0a┌─⊷\x0a';for(const _0xa142c8 of _0x3cc47c){_0x132084+='▢\x20@'+_0xa142c8['split']('@')[0x0]+'\x0a';}return _0x132084+='└───────────',_0x42191b['reply'](_0x3fd820['chat'],_0x132084,_0x3fd820,{'mentions':await _0x42191b['parseMention'](_0x132084)});})['catch'](_0x2f3cee=>{console['log'](_0x2f3cee);throw'No\x20hay\x20números\x20bloqueados';});};handler['help']=['blocklist'],handler['tags']=['main'],handler['command']=['blocklist','listblock'],handler['rowner']=!![],handler['register']=!![],handler['group']=!![];export default handler;