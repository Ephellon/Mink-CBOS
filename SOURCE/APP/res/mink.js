/*
Mink Ink
*/

/* navigator add-on */

navigator.platformType = (navigator.userAgent.toLowerCase().search('mobile')>-1)?'Mobile':'Immobile';

/* Custom radio and checkbox */

if(jQuery)
{
$(document).ready(function(){

overlay='<span class="overlay-input"></span>';

	$("input[type=radio],input[type=checkbox]").each(function(){
	
		$(this).html(overlay);
		
	});
		
		$("input[type=checkbox]>.overlay-input").click(function(){
		
			$(this).css("background-color",
			($(this).css("background-color")=="rgb(255, 0, 0)")
			?"#00ff00":"#ff0000");
		
		});
		
		$("input[type=radio]>.overlay-input").click(function(){
		
			$("input[type=radio]>.overlay-input").each(function(){
			
				$(this).css("background-color","#888888");
			
			});
		
			$(this).css("background-color","#00aced");
		
		});
	
});
}

/* localStorage */

if(!window.localStorage) {
window.localStorage={
getItem:function(sKey){
if(!sKey||!this.hasOwnProperty(sKey)){return null;}
return unescape(document.cookie.replace(new RegExp("(?:^.*;\\s*)"+escape(sKey).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1"));
},
key:function(nKeyId) {
return unescape(document.cookie.replace(/\s*\==(?:.+?!;))*$/,"").split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[nKeyId]);
},
setItem:function(sKey,sValue) {
if(!sKey) {return;}
document.cookie=escape(sKey)+"="+escape(sValue)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
this.length=document.cookie.match(/\=/g).length;
},
length:0,
removeItem:function(sKey) {
if(!sKey||!this.hasOwnProperty(sKey)){return;}
document.cookie=escape(sKey)+"=; expires=Thu, 01 1970 00:00:00 GMT; path=/";
this.length--;
},
hasOwnProperty:function(sKey) {
return(new RegExp("(?:^|;\\s*)"+escape(sKey).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(document.cookie);
}
};
window.localStorage.length=(document.cookie.match(/\=/g)||window.localStorage).length;
}

/* Hasher */

function Hash (str) {
var a_table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";
var b_table = a_table.split(' ').map(function(s){ return parseInt(s,16) });
    var hash = hash ^ (-1);
    for(var i=0, iTop=str.length; i<iTop; i++) {
        hash = ( hash >>> 8 ) ^ b_table[( hash ^ str.charCodeAt( i ) ) & 0xFF];
    }
    return (hash ^ (-1)) >>> 0;
};

/* Error handler */

function ErrorCheck()
{
for(var x=0;x<arguments.length-1;)
{
if(arguments[x]==true||arguments[x]==false)
	{
		try
		{
		if(arguments[x]) throw arguments[x+1];
		}
		catch(err)
		{
		x+=2;
		return err;
		}
	}
	else
	{
		try
		{
		arguments[x];
		}
		catch(err)
		{
		x++;
		return err;
		}
	}
}
}

/* CSS style Handling */
var LIST_OF_ALL_ICONS="martini,music,search,e-mail,heart,star-active,star-inactive,person,film,box-2x2,box-3x3,list,true,false,zoom-in,zoom-out,power,signal,settings,delete,,home,page,clock,road,save,download-encircled,upload-encircled,bin,triangle-encircled,redo-encircled,refresh,list,pad-lock,flag,headphones,mute,volume-up,volume-down,QR,barcode,,single-tag,double-tag,book,bookmark,print,camera,alpha,bold,italics,font-size,font-width,align-left,align-right,align-none,form,margin-right,margin-left,record,gallery,,edit,location,contrast,saturation,pencil-boxed,export,confirm-boxed,pan,skip-back-track,skip-back,seek-back,play,pause,stop,seek-forward,skip-forward,skip-track-forward,eject,scroll-left,scroll-right,,append,remove,stop,sure,help,info,pin-point,deny,accept,cancel-encircled,left-arr,right-arr,up-arr,down-arr,redo,size-up-diagonally,size-down-diagonally,add,subtract,multiply,,error,gift,leaf,fire,viewable,hidden,private,notice,airplane,calendar,shuffle,message-box,magnet,scroll-up,scroll-down,repeat,shop,folder-closed,folder-open,size-up-vertical,size-up-horizontal,,memory,megaphone,alarm,brighten,like,dislike,point-right,point-left,point-up,point-down,right-arr-encircled,left-arr-encircled,up-arr-encircled,down-arr-encircled,globe,wrench,stats,funnel,brief-case,crop";
var OLD=[];
var HOLD=[];
var SWAP=[];
var ICON_X=0;
var input;
var ICON_LIST=(LIST_OF_ALL_ICONS.replace(RegExp(/,/g),',\n'));
ICON_LIST=(ICON_LIST.replace(RegExp(/,\n,/g),'\n\n*NEXT COLLUM OF 20*\n')).split(',');
NO_CSS_TAMPER();

function ICON_GET(id)
//! must use ' ICON_GET(this); '
{
return id.getAttribute("icon").replace(";","");
}

function ICON_SET(id,icon)
//! must use ' ICON_SET(this,'...'); '
{
/*
type=typeof(icon).toString();
type=(type=="string")?function(){return}:function(){ICON_LIST.indexOf(icon)};
type();
*/
icon=(icon.search(";")>=0)?icon:icon+";";
id.setAttribute("icon",icon);
return;
}

function ICON_EXISTS(icon)
{
return LIST_OF_ALL_ICONS.search(icon)>-1;
}

function ICON_GET_CHILD(id)
{
id=id.innerHTML;
icon=id.substring(id.indexOf("icon=\""),id.indexOf(";"));
icon=icon.replace("icon=\"","").replace(";","");
return icon;
}

function ICON_SET_CHILD(id,child,icon)
{
id=id.getElementsByTagName(child)[0];
icon=(icon.search(";")>=0)?icon:icon+";";
id.setAttribute("icon",icon);
}

function ICON_SWAP(id,icon)
{
ICON_X=SWAP.indexOf(id);
ICON_DUMMY=(ICON_X!=-1)?function(){return}:function(){SWAP[SWAP.length]=id;ICON_X=SWAP.indexOf(id);OLD[ICON_X]=ICON_GET(id);HOLD[ICON_X]=OLD[ICON_X]};
ICON_DUMMY();
if(OLD[ICON_X]!=icon)
{
OLD[ICON_X]=icon;
ICON_SET(id,icon);
}
else
{
OLD[ICON_X]=HOLD[ICON_X];
ICON_SET(id,HOLD[ICON_X]);
}
}

function ICON_COUNT(id,what,who)
{
who=(who!=null)?who:0;
what=(what!=null)?"icon=\""+what+";\"":"icon=";
if(typeof(who)==typeof(0))
{
el=document.getElementsByTagName(id)[who].innerHTML;
}
else
{
el=document.getElementById(who).innerHTML;
}
var COUNT=1;
while(el.search(what)>=0)
{
COUNT++;
el=el.replace(what,'');
}
return COUNT-(COUNT>0);
}

function LIST_ICONS()
{
return ICON_LIST.toString();
}

function ICON_INDEX(icon)
{
NO=(typeof(icon.replace(";","")).toString()==typeof("string"))?ICON_LIST.indexOf(icon):ICON_LIST[icon];
return NO;
}

function NO_CSS_TAMPER(CSS)
{
CSS=CSS||0;
document.body.style=document.getElementsByTagName("style")[CSS].innerHTML;
}

/* Form Handling */

function GET_FORM_DATA()
{
x=0;
loc=decodeURI(window.location.toString());
loc_=loc.substr(0,loc.indexOf("?")+1);
loc_=loc_.toString();
loc=loc.replace(loc_,"");
e=RegExp(/=/g);
arr=loc.replace(e,'\":\"').split('&');
ARR='{"';
while(x<arr.length-1)
{
ARR+=arr[x]+'","';
x++;
}
ARR+=arr[x]+'"}';
ARR=ARR.toString().replace(",\n",",");
ARR=JSON.parse(ARR);
input=ARR;

return input;
}

function SET_STORAGE()
{
var x=0;
var t=false;
while(x<arguments.length)
{
if(typeof(Storage)!=='undefined')
{
localStorage.setItem(arguments[x],arguments[x+1]);
x+=2;
t=true;
}
x+=2;
}

return t;
}

function GET_STORAGE(c)
{
c=localStorage.getItem(c);
return c;
}

function GET_STORAGE_BOOLEAN(c)
{
var r=GET_STORAGE(c);
return r!=null;
}

function DELETE_STORAGE(name)
{
localStorage.setItem(name,null);
return GET_STORAGE_BOOLEAN(name)==false;
}

/* Page and App Handling */

function Save(data,name)
{
k=window.location.toString();
name=name||k.substring(k.lastIndexOf('/')+1,k.length)+".cache";
SET_STORAGE(name,data);
return GET_STORAGE_BOOLEAN(name);
}

function Load(name,alt,enc,who)
{
enc=enc||false;
name=(enc)?encodeURI(name):name;
who=who||document.body;
alt=alt||name.substr(0,name.indexOf('.'));
if(name.search('.mp3')>0||name.search('.wav')>0||name.search('.audio.ogg')>0)
{
who.innerHTML+='<a class="import-audio" href="'+name.replace('.audio.ogg','.ogg')+'" alt="'+alt+'" title="'+alt+'">'+alt+'</a><br />';
return true;
}
if(name.search('.wmv')>0||name.search('.mp4')>0||name.search('.3gp')>0||name.search('.webm')>0||name.search('.mov')>0||name.search('.avi')>0||name.search('.m4v')>0||name.search('.video.ogg')>0)
{
who.innerHTML+='<a class="import-video" href="'+name.replace('.video.ogg','.ogg')+'" alt="'+alt+'" title="'+alt+'">'+alt+'</a><br />';
return true;
}
k=window.location.toString();
name=name||k.substring(k.lastIndexOf('/')+1,k.length)+".cache";
return GET_STORAGE(name);
}

function Delete(name)
{
k=window.location.toString();
name=name||k.substring(k.lastIndexOf('/')+1,k.length)+".cache";
g=DELETE_STORAGE(name);
return g;
}

/* Other */

function AUTO_SIZE(a,f,s)
{

s=s||0.5;
f=f||'b';

switch(f)
{

case 'b':
if(FROM_BITS(a,'B')>=s&&FROM_BITS(a,'B')<1024){return Math.round(FROM_BITS(a,'B'))+'B'};
if(FROM_BITS(a,'KB')>=s&&FROM_BITS(a,'KB')<1024){return Math.round(FROM_BITS(a,'KB'))+'KB'};
if(FROM_BITS(a,'MB')>=s&&FROM_BITS(a,'MB')<1024){return Math.round(FROM_BITS(a,'MB'))+'MB'};
if(FROM_BITS(a,'GB')>=s&&FROM_BITS(a,'GB')<1024){return Math.round(FROM_BITS(a,'GB'))+'GB'};
if(FROM_BITS(a,'TB')>=s&&FROM_BITS(a,'TB')<1024){return Math.round(FROM_BITS(a,'TB'))+'TB'};
if(FROM_BITS(a,'PB')>=s&&FROM_BITS(a,'PB')<1024){return Math.round(FROM_BITS(a,'PB'))+'PB'};
if(FROM_BITS(a,'EB')>=s&&FROM_BITS(a,'EB')<1024){return Math.round(FROM_BITS(a,'EB'))+'EB'};
if(FROM_BITS(a,'ZB')>=s&&FROM_BITS(a,'ZB')<1024){return Math.round(FROM_BITS(a,'ZB'))+'ZB'};
if(FROM_BITS(a,'YB')>=s){return Math.round(FROM_BITS(a,'YB'))+'YB'};
return a+f;
break;

case 'B':
if(FROM_BYTES(a,'KB')>=s&&FROM_BYTES(a,'KB')<1024){return Math.round(FROM_BYTES(a,'KB'))+'KB'};
if(FROM_BYTES(a,'MB')>=s&&FROM_BYTES(a,'MB')<1024){return Math.round(FROM_BYTES(a,'MB'))+'MB'};
if(FROM_BYTES(a,'GB')>=s&&FROM_BYTES(a,'GB')<1024){return Math.round(FROM_BYTES(a,'GB'))+'GB'};
if(FROM_BYTES(a,'TB')>=s&&FROM_BYTES(a,'TB')<1024){return Math.round(FROM_BYTES(a,'TB'))+'TB'};
if(FROM_BYTES(a,'PB')>=s&&FROM_BYTES(a,'PB')<1024){return Math.round(FROM_BYTES(a,'PB'))+'PB'};
if(FROM_BYTES(a,'EB')>=s&&FROM_BYTES(a,'EB')<1024){return Math.round(FROM_BYTES(a,'EB'))+'EB'};
if(FROM_BYTES(a,'ZB')>=s&&FROM_BYTES(a,'ZB')<1024){return Math.round(FROM_BYTES(a,'ZB'))+'ZB'};
if(FROM_BYTES(a,'YB')>=s){return Math.round(FROM_BYTES(a,'YB'))+'YB'};
return a+f;
break;

case 'KB':
if(FROM_KB(a,'MB')>=s&&FROM_KB(a,'MB')<1024){return Math.round(FROM_KB(a,'MB'))+'MB'};
if(FROM_KB(a,'GB')>=s&&FROM_KB(a,'GB')<1024){return Math.round(FROM_KB(a,'GB'))+'GB'};
if(FROM_KB(a,'TB')>=s&&FROM_KB(a,'TB')<1024){return Math.round(FROM_KB(a,'TB'))+'TB'};
if(FROM_KB(a,'PB')>=s&&FROM_KB(a,'PB')<1024){return Math.round(FROM_KB(a,'PB'))+'PB'};
if(FROM_KB(a,'EB')>=s&&FROM_KB(a,'EB')<1024){return Math.round(FROM_KB(a,'EB'))+'EB'};
if(FROM_KB(a,'ZB')>=s&&FROM_KB(a,'ZB')<1024){return Math.round(FROM_KB(a,'ZB'))+'ZB'};
if(FROM_KB(a,'YB')>=s){return Math.round(FROM_KB(a,'YB'))+'YB'};
return a+f;
break;

case 'MB':
if(FROM_MB(a,'GB')>=s&&FROM_MB(a,'GB')<1024){return Math.round(FROM_MB(a,'GB'))+'GB'};
if(FROM_MB(a,'TB')>=s&&FROM_MB(a,'TB')<1024){return Math.round(FROM_MB(a,'TB'))+'TB'};
if(FROM_MB(a,'PB')>=s&&FROM_MB(a,'PB')<1024){return Math.round(FROM_MB(a,'PB'))+'PB'};
if(FROM_MB(a,'EB')>=s&&FROM_MB(a,'EB')<1024){return Math.round(FROM_MB(a,'EB'))+'EB'};
if(FROM_MB(a,'ZB')>=s&&FROM_MB(a,'ZB')<1024){return Math.round(FROM_MB(a,'ZB'))+'ZB'};
if(FROM_MB(a,'YB')>=s){return Math.round(FROM_MB(a,'YB'))+'YB'};
return a+f;
break;

case 'GB':
if(FROM_GB(a,'TB')>=s&&FROM_GB(a,'TB')<1024){return Math.round(FROM_GB(a,'TB'))+'TB'};
if(FROM_GB(a,'PB')>=s&&FROM_GB(a,'PB')<1024){return Math.round(FROM_GB(a,'PB'))+'PB'};
if(FROM_GB(a,'EB')>=s&&FROM_GB(a,'EB')<1024){return Math.round(FROM_GB(a,'EB'))+'EB'};
if(FROM_GB(a,'ZB')>=s&&FROM_GB(a,'ZB')<1024){return Math.round(FROM_GB(a,'ZB'))+'ZB'};
if(FROM_GB(a,'YB')>=s){return Math.round(FROM_GB(a,'YB'))+'YB'};
return a+f;
break;

case 'TB':
if(FROM_TB(a,'PB')>=s&&FROM_TB(a,'PB')<1024){return Math.round(FROM_TB(a,'PB'))+'PB'};
if(FROM_TB(a,'EB')>=s&&FROM_TB(a,'EB')<1024){return Math.round(FROM_TB(a,'EB'))+'EB'};
if(FROM_TB(a,'ZB')>=s&&FROM_TB(a,'ZB')<1024){return Math.round(FROM_TB(a,'ZB'))+'ZB'};
if(FROM_TB(a,'YB')>=s){return Math.round(FROM_TB(a,'YB'))+'YB'};
return a+f;
break;

case 'PB':
if(FROM_PB(a,'EB')>=s&&FROM_PB(a,'EB')<1024){return Math.round(FROM_PB(a,'EB'))+'EB'};
if(FROM_PB(a,'ZB')>=s&&FROM_PB(a,'ZB')<1024){return Math.round(FROM_PB(a,'ZB'))+'ZB'};
if(FROM_PB(a,'YB')>=s){return Math.round(FROM_PB(a,'YB'))+'YB'};
return a+f;
break;

case 'EB':
if(FROM_EB(a,'ZB')>=s&&FROM_EB(a,'ZB')<1024){return Math.round(FROM_EB(a,'ZB'))+'ZB'};
if(FROM_EB(a,'YB')>=s){return Math.round(FROM_EB(a,'YB'))+'YB'};
return a+f;
break;

case 'ZB':
if(FROM_ZB(a,'YB')>=s){return Math.round(FROM_ZB(a,'YB'))+'YB'};
return a+f;
break;

case 'YB':
return a+'YB';
break;

}

}

function FROM_BITS(x,y)
{

switch(y)
{

case 'b':
return x/Math.pow(2,0);
break;

case 'B':
return x/Math.pow(2,3);
break;

case 'KB':
return x/Math.pow(2,13);
break;

case 'MB':
return x/Math.pow(2,23);
break;

case 'GB':
return x/Math.pow(2,33);
break;

case 'TB':
return x/Math.pow(2,43);
break;

case 'PB':
return x/Math.pow(2,53);
break;

case 'EB':
return x/Math.pow(2,63);
break;

case 'ZB':
return x/Math.pow(2,73);
break;

case 'YB':
return x/Math.pow(2,83);
break;


default:
return x;
}

}


function FROM_BYTES(x,y)
{

switch(y)
{

case 'b':
return x*Math.pow(2,3);
break;

case 'B':
return x/Math.pow(2,0);
break;

case 'KB':
return x/Math.pow(2,10);
break;

case 'MB':
return x/Math.pow(2,20);
break;

case 'GB':
return x/Math.pow(2,30);
break;

case 'TB':
return x/Math.pow(2,40);
break;

case 'PB':
return x/Math.pow(2,50);
break;

case 'EB':
return x/Math.pow(2,60);
break;

case 'ZB':
return x/Math.pow(2,70);
break;

case 'YB':
return x/Math.pow(2,80);
break;


default:
return x;
}

}

function FROM_KB(x,y)
{

switch(y)
{

case 'b':
return x*Math.pow(2,13);
break;

case 'B':
return x*Math.pow(2,10);
break;

case 'KB':
return x/Math.pow(2,0);
break;

case 'MB':
return x/Math.pow(2,10);
break;

case 'GB':
return x/Math.pow(2,20);
break;

case 'TB':
return x/Math.pow(2,30);
break;

case 'PB':
return x/Math.pow(2,40);
break;

case 'EB':
return x/Math.pow(2,50);
break;

case 'ZB':
return x/Math.pow(2,60);
break;

case 'YB':
return x/Math.pow(2,70);
break;


default:
return x;
}

}


function FROM_MB(x,y)
{

switch(y)
{

case 'b':
return x/Math.pow(2,23);
break;

case 'B':
return x*Math.pow(2,20);
break;

case 'KB':
return x*Math.pow(2,10);
break;

case 'MB':
return x/Math.pow(2,0);
break;

case 'GB':
return x/Math.pow(2,10);
break;

case 'TB':
return x/Math.pow(2,20);
break;

case 'PB':
return x/Math.pow(2,30);
break;

case 'EB':
return x/Math.pow(2,40);
break;

case 'ZB':
return x/Math.pow(2,50);
break;

case 'YB':
return x/Math.pow(2,60);
break;


default:
return x;
}

}

function FROM_GB(x,y)
{

switch(y)
{

case 'b':
return x*Math.pow(2,33);
break;

case 'B':
return x*Math.pow(2,30);
break;

case 'KB':
return x*Math.pow(2,20);
break;

case 'MB':
return x*Math.pow(2,10);
break;

case 'GB':
return x/Math.pow(2,0);
break;

case 'TB':
return x/Math.pow(2,10);
break;

case 'PB':
return x/Math.pow(2,20);
break;

case 'EB':
return x/Math.pow(2,30);
break;

case 'ZB':
return x/Math.pow(2,40);
break;

case 'YB':
return x/Math.pow(2,50);
break;


default:
return x;
}

}

function FROM_TB(x,y)
{

switch(y)
{

case 'b':
return x*Math.pow(2,43);
break;

case 'B':
return x*Math.pow(2,40);
break;

case 'KB':
return x*Math.pow(2,30);
break;

case 'MB':
return x*Math.pow(2,20);
break;

case 'GB':
return x*Math.pow(2,10);
break;

case 'TB':
return x/Math.pow(2,0);
break;

case 'PB':
return x/Math.pow(2,10);
break;

case 'EB':
return x/Math.pow(2,20);
break;

case 'ZB':
return x/Math.pow(2,30);
break;

case 'YB':
return x/Math.pow(2,40);
break;


default:
return x;
}

}

function FROM_PB(x,y)
{

switch(y)
{

case 'b':
return x*Math.pow(2,53);
break;

case 'B':
return x*Math.pow(2,50);
break;

case 'KB':
return x*Math.pow(2,40);
break;

case 'MB':
return x*Math.pow(2,30);
break;

case 'GB':
return x*Math.pow(2,20);
break;

case 'TB':
return x*Math.pow(2,10);
break;

case 'PB':
return x/Math.pow(2,0);
break;

case 'EB':
return x/Math.pow(2,10);
break;

case 'ZB':
return x/Math.pow(2,20);
break;

case 'YB':
return x/Math.pow(2,30);
break;


default:
return x;
}

}

function FROM_EB(x,y)
{

switch(y)
{

case 'b':
return x*Math.pow(2,63);
break;

case 'B':
return x/Math.pow(2,60);
break;

case 'KB':
return x*Math.pow(2,50);
break;

case 'MB':
return x*Math.pow(2,40);
break;

case 'GB':
return x*Math.pow(2,30);
break;

case 'TB':
return x*Math.pow(2,20);
break;

case 'PB':
return x*Math.pow(2,10);
break;

case 'EB':
return x/Math.pow(2,0);
break;

case 'ZB':
return x/Math.pow(2,10);
break;

case 'YB':
return x/Math.pow(2,20);
break;


default:
return x;
}

}

function FROM_ZB(x,y)
{

switch(y)
{

case 'b':
return x*Math.pow(2,73);
break;

case 'B':
return x*Math.pow(2,70);
break;

case 'KB':
return x*Math.pow(2,60);
break;

case 'MB':
return x*Math.pow(2,50);
break;

case 'GB':
return x*Math.pow(2,40);
break;

case 'TB':
return x*Math.pow(2,30);
break;

case 'PB':
return x*Math.pow(2,20);
break;

case 'EB':
return x*Math.pow(2,10);
break;

case 'ZB':
return x/Math.pow(2,0);
break;

case 'YB':
return x/Math.pow(2,10);
break;


default:
return x;
}

}

function FROM_YB(x,y)
{

switch(y)
{

case 'b':
return x*Math.pow(2,83);
break;

case 'B':
return x*Math.pow(2,80);
break;

case 'KB':
return x*Math.pow(2,70);
break;

case 'MB':
return x*Math.pow(2,60);
break;

case 'GB':
return x*Math.pow(2,50);
break;

case 'TB':
return x*Math.pow(2,40);
break;

case 'PB':
return x*Math.pow(2,30);
break;

case 'EB':
return x*Math.pow(2,20);
break;

case 'ZB':
return x*Math.pow(2,10);
break;

case 'YB':
return x/Math.pow(2,0);
break;


default:
return x;
}

}

function Notify(data,t)
{

t=t||3;
t*=1000;

head=document.getElementById("head");

if(head.getAttribute("status")=="busy")
{
setTimeout(function(){Notify(data,t);},parseInt(head.getAttribute("t"))+1);
setTimeout(function(){head.innerHTML=hd;head.setAttribute("status","not-busy");},t);
return;
}

if(data==false||data==true)
{
head.style.visibility=(data==true)?"visible":"hidden";
return;
}

hd='<img icon="mink" /> ';
head.innerHTML+=" "+data;
head.setAttribute("status","busy");
head.setAttribute("t",t.toString());

setTimeout(function(){head.innerHTML=hd;head.setAttribute("status","not-busy");},t);

return;
}

function Toast(data,t)
{

t=t||3;

toast=document.getElementById("Toast-Message");

if(toast.getAttribute("status")=="busy")
{
setTimeout(function(){Toast(data,t);},parseInt(toast.getAttribute("t"))+1);
setTimeout(function(){toast.innerHTML="";toast.style.visibility="hidden";toast.setAttribute("status","not-busy");},t*1000);
return;
}

toast.innerHTML=data;
toast.setAttribute("status","busy");
toast.setAttribute("t",t.toString());
toast.style.visibility="visible";

setTimeout(function(){toast.innerHTML="";toast.style.visibility="hidden";toast.setAttribute("status","not-busy");},t*1000);

return;
}

function Time()
{
date=new Date();

var ret;

switch(date.getDay())
{
case 0:
ret="Sunday ";
break;

case 1:
ret="Monday ";
break;

case 2:
ret="Tuesday ";
break;

case 3:
ret="Wednesday ";
break;

case 4:
ret="Thursday ";
break;

case 5:
ret="Friday ";
break;

case 6:
ret="Saturday ";
break;
}

switch(date.getMonth())
{
case 0:
ret+="January ";
break;

case 1:
ret+="February ";
break;

case 2:
ret+="March ";
break;

case 3:
ret+="April ";
break;

case 4:
ret+="May, ";
break;

case 5:
ret+="June ";
break;

case 6:
ret+="July ";
break;

case 7:
ret+="August ";
break;

case 8:
ret+="September ";
break;

case 9:
ret+="October ";
break;

case 10:
ret+="November ";
break;

case 11:
ret+="December ";
break;

}

ret+=date.getDate()+', '+date.getFullYear()+' - ';

ret+=(date.getHours()>0&&date.getHours()<12)?date.getHours()+':'+((date.getMinutes()<10)?'0'+date.getMinutes():date.getMinutes())+' am':Math.abs(date.getHours()-((date.getHours()==12)?0:12))+':'+((date.getMinutes()<10)?'0'+date.getMinutes():date.getMinutes())+' pm';

return ret;

}
