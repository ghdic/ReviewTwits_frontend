let test = document.querySelector("#test")
console.log(test)
//https://reviewtwits.herokuapp.com/comment
let iframe = document.createElement('iframe')


iframe.style.width = '100%'
iframe.style.height = '100%';
iframe.scrolling = 'no'
iframe.src = `http://localhost:3000/comment?path=${window.location.pathname}`
test.appendChild(iframe)


window.addEventListener('message', receiveMsgFromChild)

function receiveMsgFromChild(e) {
    console.log(e.data)
    iframe.style.height = e.data
}