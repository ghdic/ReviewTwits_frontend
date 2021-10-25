let test = document.querySelector("#test")
console.log(test)
//https://reviewtwits.herokuapp.com/comment
let iframe = document.createElement('iframe')


iframe.style.width = '100%'
iframe.style.height = '100%';
iframe.scrolling = 'no'
iframe.src = 'https://reviewtwits.herokuapp.com/comment'
test.appendChild(iframe)


window.addEventListener('message', receiveMsgFromChild)

function receiveMsgFromChild(e) {
    iframe.style.height = e.data
}