const { remote } = require('electron')

export function getWindowSize () {
    let size = remote.getCurrentWindow().getContentSize()
    console.log(size)
    return (size)
}