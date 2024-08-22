import { keyClick, clearKey, keyboardClick, copyKey } from './modules/keys.js'
import calculate from './modules/calculate.js'
import theme from './modules/theme.js'

document.querySelectorAll('.charKey').forEach(keyClick)

document.getElementById('clear').addEventListener('click', clearKey)

document.getElementById('input').addEventListener('keydown', keyboardClick)

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyToClipboard').addEventListener('click', copyKey)

document.getElementById('themeSwitcher').addEventListener('click', theme)