f=i=>{p=b=l=0;s=[];i=[...i];c={'+':()=>s[p]=s[p]==255?0:s[p]+1,'-':()=>s[p]=s[p]==0?255:s[p]-1,'<':()=>p--,'>':()=>p++,'[':()=>{if(s[p]==0){b++;while(i[b]!==']'||l>0){if(i[b]=='['){l++}else if(i[b]==']'){l--}
b++}}},']':()=>{if(s[p]!=0){b--;while(i[b]!='['||l>0){if(i[b]==']'){l++}else if(i[b]=='['){l--}
b--}
b--}},'.':()=>console.log(String.fromCharCode(s[p])),',':()=>s[p]=prompt().charCodeAt(0)}
while(b<i.length){s[p]=s[p]||0;if(c[i[b]]){c[i[b]]()}
b++}}