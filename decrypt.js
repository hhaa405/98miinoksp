const {webcrypto:C}=require('crypto'),fs=require('fs');
(async()=>{const k=await C.subtle.importKey('raw',Buffer.from(process.env.TWBB_KEY,'base64'),'AES-GCM',false,['decrypt']);
const b=Buffer.from(fs.readFileSync(process.argv[2],'utf8').trim(),'base64');
process.stdout.write(Buffer.from(await C.subtle.decrypt({name:'AES-GCM',iv:b.subarray(0,12)},k,b.subarray(12))))})();
