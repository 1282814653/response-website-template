// 长度截取
export function subLength(ele, ele) {
    let newStr = "";
    if (ele) {
        if (ele.length > len) {
            newStr = ele.substr(0, len) + '...'
        } else {
            newStr = len
        }
    }
    return newStr
}