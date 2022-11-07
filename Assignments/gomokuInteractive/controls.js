class Ox {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    show() {
        if(this.type === 0) {
            push();
            translate(this.x, this.y);
            rotate(PI/4);
            rect(-30, -4, 60, 4);
            pop();
        }
    }
}