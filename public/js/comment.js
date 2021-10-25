setInterval(() => {
    window.parent.postMessage(document.body.scrollHeight + 'px', '*')
    console.log("hi")
}, 1000)
