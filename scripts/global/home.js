(function() {

    var getPageHeight = function() {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    // get element
    var getElement = function(elm) {
      return document.querySelectorAll(elm);
    }
    
    var getElementHeight = function(_elm) {
      elm = getElement(_elm)[0];
      return elm.innerHeight || elm.clientHeight;
    }
    
    var getElementWidth = function(_elm) {
      elm = getElement(_elm)[0];
      return elm.innerWidth || elm.clientWidth;
    }

    var setPageOffset = function() {
      getElement('.home-header')[0].nextElementSibling.style.marginTop = getPageHeight() + "px";
    }
    
    var setElementOffset = function(elm) {
      getElement(elm)[0].style.marginTop = getElementHeight(elm) * -0.5 + "px";
    }

    //executes
    setPageOffset();
    setElementOffset('.header-description');
  
    window.onresize = function(event) {
      setPageOffset();
      setElementOffset('.header-description');
    };

})();