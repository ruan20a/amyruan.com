/*!CK:286619671!*//*1379301805,178179105*/

if (self.CavalryLogger) { CavalryLogger.start_js(["bsy0z"]); }

__d("legacy:control-textarea",["TextAreaControl"],function(a,b,c,d){a.TextAreaControl=b('TextAreaControl');},3);
__d("RemoveFriendDialog",["Arbiter","URI","ge"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('URI'),i=b('ge');function j(k,l,m,n){var o=function(){if(n){h.getRequestURI().go(!i('home_stream'));return;}var p={status:m,uid:l};g.inform('removefriend',p);g.inform('FriendRequest/unfriend',p);};if(k){k.subscribe('hide',o);}else o();}e.exports=j;});