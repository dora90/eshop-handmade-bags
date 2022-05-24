//change color to the heart

function main(element) {
    var currentColor = element.style.color

    if (currentColor == "rgb(216, 8, 122)") {
        element.style.color="red"
    }else {
        element.style.color="rgb(216, 8, 122)"
    }

    if (currentColor == "red") {
        element.style.color="rgb(216, 8, 122)"
    }else {
        element.style.color="red"
    }
}
