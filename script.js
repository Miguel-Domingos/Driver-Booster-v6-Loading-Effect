query = elem => { return document.querySelector(elem) }
queryAll = elem => { return document.querySelectorAll(elem) }

lines = query('.lines')
medBorder = query('.medBorder')
mode = query('.mode')
value = query('.value')
buttons = queryAll('.hover')
circle = [query(".circle")]


StartEffect = (e) => {
    if (e.classList[0] == 'hover') {
        buttons.forEach(button => {
            button.classList.replace('hover', 'animating')
        })
        style('PARAR', '30px', '5px', '10px', '1')
    }
    else {
        buttons.forEach(button => {
            button.classList.replace('animating', 'hover')
            button.classList.replace('noAnimating', 'hover')
        })
        style('ANALISAR')
    }
    scaning(e)
    processBar()
}

async function sleep(ms) {
    await new Promise(res => setTimeout(res, ms))
}

async function scaning(tag) {
    for (let i = 0; i <= 100; i++) {
        if (tag.classList[0] == 'animating') {
            await sleep(50)
            value.innerHTML = `${i}%`
        } else {
            value.innerHTML = ''
            break
        }

        if (i == 100) {
            style('Drivers Analisadas', '25px')
            buttons.forEach(button => {
                button.classList.add('hover')
            })
        }
    }
    buttons.forEach(button => {
        button.classList.replace('animating', 'noAnimating')
    })
}

function processBar() {
    circle.forEach(async div => {
        for (let i = 1; i <= 100; i++) {
            if (div.classList[0] == 'animating') {
                await sleep(50)
                div.innerHTML += `<div class="points" style="--i: ${i}"></div>`
            } else {
                div.innerHTML = ''
                break
            }
        }
    });
}

function style(text, fontSize = '30px', spaceLetter = '', marginLeft = '', valueOpacity = '0') {
    mode.innerHTML = text
    mode.style.fontSize = fontSize
    mode.style.letterSpacing = spaceLetter
    mode.style.marginLeft = marginLeft
    value.style.opacity = valueOpacity
}
