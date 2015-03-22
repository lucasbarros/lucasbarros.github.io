(function() {

    var elementHeight = function(element) {
      return element.innerHeight || element.clientHeight;
    }

    // get element
    var getElement = function(element) {
      return document.querySelectorAll(element)[0];
    }

    var setPageOffset = function() {
      getElement('.page-content').style.marginTop = elementHeight(getElement('.main-header')) + "px";
    }

    //executes
    setPageOffset();
    window.onresize = function(event) {
      setPageOffset();
    };
  
    console.log('geral');

})();