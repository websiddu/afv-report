'use strict';

(function(){
  var App = window.App || {};
  App = (function() {

    var _convertToCaptions = function() {
      $('.post-content').find('img').each(function(){
        var figCaption = "<figcaption>"+ $(this).attr('alt') +"</figcaption>";
        var fig = $("<figure></figure>")
        $(this).wrap(fig).after($(figCaption));
      })
    }

    return {
      init: function() {
        _convertToCaptions();
      }
    }

  })();

  $(App.init);
})();
