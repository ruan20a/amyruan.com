/*!CK:949437156!*//*1390790515,178185039*/

if (self.CavalryLogger) { CavalryLogger.start_js(["SOnwA"]); }

__d("legacy:group-edit",["GroupEdit"],function(a,b,c,d){a.GroupEdit=b('GroupEdit');},3);
__d("TimezoneAutoset",["AsyncRequest","emptyFunction"],function(a,b,c,d,e,f){var g=b('AsyncRequest'),h=b('emptyFunction'),i=false;function j(m){var n=new Date(),o=n.getTimezoneOffset()/30,p=n.getTime()/1000,q=Math.round((m-p)/1800),r=Math.round(o+q)%48;if(r==0){return 0;}else if(r>24){r-=Math.ceil(r/48)*48;}else if(r<-28)r+=Math.ceil(r/-48)*48;return r*30;}function k(m,n,o){if(!m||undefined==n)return;if(i)return;i=true;var p=-j(m);if(o||p!=n){var q='/ajax/timezone/update.php';new g().setURI(q).setData({gmt_off:p,is_forced:o}).setErrorHandler(h).setTransportErrorHandler(h).setOption('suppressErrorAlerts',true).send();}}var l={setInputValue:function(m,n){m.value=j(n);},setTimezone:k};e.exports=l;});