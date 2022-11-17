function getElementsByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.ANY_TYPE, null);
  }
  function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }

function getElementsByTagName() {
return document.getElementsByTagName("img");
}

function click_BtnNextImage() {
    let btnElement = getElementByXpath(`//div[@enable-background='new 0 0 13 21']`);
        let currentParagraph = dataAll.iterateNext();
    return document.getElementsByTagName("img");
    }
function init() {
    var imgURL = chrome
    setTimeout(() => {
        let dataAll = getElementByXpath(`//div[@class='_1BkYjB _3DKwBj']`);
        let currentParagraph = dataAll.iterateNext();
        debugger
         while (currentParagraph) {
            const compStyles = window.getComputedStyle(currentParagraph);
            console.log("Log", compStyles.getPropertyValue('background-image'));
             currentParagraph = dataAll.iterateNext();
           }
    }, 2000);
 
}
init();