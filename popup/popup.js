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
    debugger
    let btnElement = getElementByXpath(`//div[@enable-background='new 0 0 13 21']`);
    return document.getElementsByTagName("img");
    }
function init() {
    document.getElementById('clickactivity').addEventListener('click', click_BtnNextImage)
}
init();