/*!CK:2874125897!*//*1390790360,178191153*/

if (self.CavalryLogger) { CavalryLogger.start_js(["UAwu7"]); }

__d("flash-js",["copyProperties"],function(a,b,c,d,e,f){var g=b('copyProperties');function h(){}g(h,{INIT:'flash/init',READY:'flash/ready',FAILED:'flash/failed'});e.exports=h;});
__d("legacy:flash-js",["flash-js"],function(a,b,c,d){a.Flash=b('flash-js');},3);
__d("getLayoutRoot",["DOMQuery","csx"],function(a,b,c,d,e,f){var g=b('DOMQuery'),h=b('csx'),i=null;function j(){if(!i)i=g.scry(document.body,"._li")[0];return i;}e.exports=j;});
__d("legacy:swfobject",["swfobject"],function(a,b,c,d){var e=b('swfobject');a.deconcept=e;a.SWFObject=e.SWFObject;a.showFlashErrorDialog=e.showFlashErrorDialog;},3);
__d("VideoAutoplayPlayButton",["CSS","Event","cx"],function(a,b,c,d,e,f){var g=b('CSS'),h=b('Event'),i=b('cx'),j={},k={getClicked:function(l){if(j.hasOwnProperty(l))return j[l].clicked;return false;},register:function(l,m,n){j[l]=h.listen(m,'click',function(){g.removeClass(m,"_5vos");g.show(n);j[l].clicked=true;});},unregister:function(l){if(j.hasOwnProperty(l))j[l].remove();}};e.exports=k;});