(function() {

    var getPageHeight = function() {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    var getElement = function(elm) {
      return document.querySelector(elm);
    }
    
    var getElementHeight = function(_elm) {
      elm = getElement(_elm);
      return elm.innerHeight || elm.clientHeight;
    }
    
    var getElementWidth = function(_elm) {
      elm = getElement(_elm);
      return elm.innerWidth || elm.clientWidth;
    }
    
    var toggleClass = function(elm, clss) {
      return elm.classList.toggle(clss);
    }
    
    //sets

    var setPageOffset = function() {
      getElement('.home-header').nextElementSibling.style.marginTop = getPageHeight() + "px";
    }
    
    var setElementOffset = function(elm) {
      getElement(elm).style.marginTop = getElementHeight(elm) * -0.5 + "px";
    }
    
    var setToggleMenu = function() {
      return getElement('.page-nav .btn-toggle').onclick = function() {
        toggleClass(getElement('.page-nav'), 'active');
      }
    }

    //executes
    setToggleMenu();
    setPageOffset();
    setElementOffset('.header-description');
  
    window.onresize = function(event) {
      setPageOffset();
      setElementOffset('.header-description');
    };

})();