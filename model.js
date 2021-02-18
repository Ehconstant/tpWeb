
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

/**
 * Drawing
 * @param forms
 * @constructor
 */
function Drawing() {
    this.forms = new Array()
}
Drawing.prototype.setForms = function (forms = Array()) {
    this.forms.push(forms)
}

Drawing.prototype.getForms = function () {
    return this.forms
}

Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());

    this.getForms().forEach(function (eltDuTableau) {
        // now fill the canvas
        ctx.fillStyle = '#F0F0F0'; // set canvas' background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        console.log(eltDuTableau);
        eltDuTableau.paint(ctx);
    });
};

/**
 * Form
 * @param lineH
 * @param color
 * @constructor
 */
function Form(lineH, color) {
    this.lineHeigth = lineH
    this.color = color
}

Form.prototype.paint = function (ctx) {

}

/**
 * Rectangle
 * @param topLeftX
 * @param topLeftY
 * @param l
 * @param h
 * @param lineH
 * @param color
 * @constructor
 */
function Rectangle(topLeftX, topLeftY, l, h, lineH, color) {
    Form.call(lineH, color)
    this.intiX = topLeftX
    this.intiY = topLeftY
    this.finalX = l
    this.finalY = h
}
Rectangle.prototype = new Form()

Rectangle.prototype.getInitX = function() {
    return this.intiX
}
Rectangle.prototype.getInitY = function() {
    return this.intiY
}
Rectangle.prototype.getFinalX = function() {
    return this.finalX
}
Rectangle.prototype.getFinalY = function() {
    return this.finalY
}

Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    Form.prototype.paint.call(ctx)
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(), this.getFinalY());
    ctx.stroke();
};


/**
 * Line
 * @param beginX
 * @param beginY
 * @param endX
 * @param endY
 * @param lineH
 * @param color
 * @constructor
 */
function Line(beginX, beginY, endX, endY, lineH, color) {
    Form.call(lineH, color)
    this.intiX = beginX
    this.intiY = beginY
    this.finalX = endX
    this.finalY = endY
}

Line.prototype = new Rectangle()

Line.prototype.paint = function(ctx) {
    //TODO Manager color
    Form.prototype.paint.call(ctx)
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

