<script type='text/javascript'>
function insertAfter(addition,target) {
var parent = target.parentNode;
if (parent.lastChild == target) {
parent.appendChild(addition); 
} else {
parent.insertBefore(addition,target.nextSibling);
}
}
var adscont = document.getElementById(&quot;adsense-content&quot;);
var target = document.getElementById(&quot;adsense-target&quot;);
var linebreak = target.getElementsByTagName(&quot;br&quot;);
if (linebreak.length &gt; 0){
insertAfter(adscont,linebreak[0]);
}
</script>
