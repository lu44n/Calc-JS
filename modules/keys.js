import calculate from "./calculate.js"
import { resultInput } from "./elements.js"

const allowedKeys =  ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

export function keyClick (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
}

export function clearKey() {
    input.value = ''
    input.focus()
}

export function keyboardClick (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter') {
        calculate()
    }
}

export function copyKey (ev) {
    const button = ev.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
}   