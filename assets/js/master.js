
let _inp = document.getElementById('inp')
let _li = document.querySelectorAll('li')

// _inp.classList.add('inptt')

_inp.addEventListener('input', (e) => {
    let val = e.target.value
    _inp.focus()

    if (val == null || val == "") {
        _li.forEach((item) => {
            item.style.display = 'none'
        })
    } else {
        _li.forEach((item) => {
            let text = item.innerText

            if (
                (text.substring(0, val.length)) == val
            ) {
                item.style.display = 'flex'
            } else {
                item.style.display = 'none'
            }

        })
    }
})