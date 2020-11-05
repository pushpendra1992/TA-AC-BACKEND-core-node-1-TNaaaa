function square(side) {
    return side * side;
}

function rectangle(l, b) {
    return l * b;
}

function circle(r) {
    return 3.14 * r;
}

module.exports = {
    square: square,
    rectangle: rectangle,
    circle: circle,
}
