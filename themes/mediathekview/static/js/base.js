
$(function(){
    $("table").addClass("table table-condensed table-bordered table-striped");
});


<!-- Matomo -->
var _paq = _paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
var u="https://analyse.elaon.de/";
_paq.push(['setTrackerUrl', u+'piwik.php']);
_paq.push(['setSiteId', '4']);
var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();
<!-- End Matomo Code -->



<!-- Zurück zum Anfang Icon ein und ausblenden -->
function setdefaults()
{
  $("#return-to-top").css("opacity",0);
}

$(document).ready(function(){
   setdefaults();

  $(window).scroll(function() {

      $scrolled = $(window).scrollTop();
      $toScrollPercentage = 50;
      $toScroll = $(window).height()*($toScrollPercentage/100);
        if($scrolled < $toScroll)
        {
          $("#return-to-top").css("opacity",0);
        } else
        {
          $("#return-to-top").css("opacity",0.5);
        }
    });
});
<!-- Ende Zurück zum Anfang Icon ein und ausblenden -->
