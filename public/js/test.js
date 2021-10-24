let test = document.querySelector("#test")
console.log(test)
//https://reviewtwits.herokuapp.com/comment
let iframe = document.createElement('iframe')


iframe.style.width = '100%'
iframe.style.height = '100%';
iframe.scrolling = 'no'
iframe.src = 'https://reviewtwits.herokuapp.com/comment'
test.appendChild(iframe)


function iframeReloaded(iframe, callback) {
    let state = iframe.contentDocument.readyState;
    let checkLoad = setInterval(() => {
        if (state !== iframe.contentDocument.readyState) {
            if (iframe.contentDocument.readyState === 'complete') {
                clearInterval(checkLoad);
                callback();
            }
            state = iframe.contentDocument.readyState;
        }
    }, 200)
}
setInterval(() => {
    let component = iframe.contentWindow.document.querySelector('#root > div')
    iframe.style.height = component.offsetHeight + 'px';
    console.log(component.offsetHeight + 'px')
}, 1000)

function loading() {
    // iframe.src = ''
    // iframe.src = 'https://reviewtwits.herokuapp.com/comment'
    let component = iframe.contentWindow.document.querySelector('#root > div')
    iframe.style.height = component.offsetHeight + 'px';
    alert(component.offsetHeight + 'px')
}