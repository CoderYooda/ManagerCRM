const PI = 3.14159;
class Canva{
    constructor(options) {

        this.canv = document.createElementNS('http://www.w3.org/2000/svg', "svg");
        this.canv.style.height = '100%';
        this.canv.style.width = '100%';

        console.log(options.container);

        this.container = document.getElementsByClassName(options.container)[0];
        this.container.appendChild(this.canv);
        this.elems = 0;
        this.debug = true;
    }

    addElem(model){
        this.canv.appendChild(model.tag);
        model.setContainer(this.canv);
        model.setId('part' + this.elems);
        this.elems++;
    }

}
class Path{
    constructor(options){
        this.orientation_scalar = 0;
        this.tag = null;
        this.svg = null;
        this.start_x = options.start[0];
        this.start_y = options.start[1];
        this.end_x = options.end[0];
        this.end_y = options.end[1];
        this.start_x_orient = 0;
        this.start_y_orient = 0;
        this.end_x_orient = 0;
        this.end_y_orient = 0;

        this.x_shift = 0;
        this.y_shift = 0;

        this.end_angle = options.end[2];
        this.start_angle = options.start[2];

        this.start_attach = null;
        this.end_attach = null;

        this.attached = [];

        this.init();
    }
    init(){
        this.startOrientation();
        this.endOrientation();
        this.calculateScalar();
        this.tag = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        this.tag.setAttribute('stroke', 'rgb(111 212 0)');
        this.tag.setAttribute('stroke-width', '2');
        this.tag.setAttribute('fill', 'transparent');
        this.render();
    }
    setContainer(svg){
        this.svg = svg;
    }
    setId(id){
        this.id = id;
        this.tag.setAttribute('id', id);
    }
    calculateScalar(){
        this.orientation_scalar = Math.sqrt(Math.pow( (this.end_x - this.start_x) , 2) + Math.pow( (this.end_y - this.start_y) , 2)) / 2;
    }
    attach(elem, side){

        this.attached[elem.id] = {
            side: side,
        };
        switch (elem.form) {
            case 'square':
                this.x_shift = elem.width;
                this.y_shift = elem.height;
                break;
        }


        // switch (elem.form) {
        //     case 'right': this.x_shift = this.width; y_shift = this.height / 2; angle = 90; break;
        //     case 'left': this.y_shift = this.height / 2; angle = 270; break;
        //     case 'top': this.x_shift = this.width / 2; angle = 180; break;
        //     case 'bottom': this.y_shift = this.height; x_shift = this.width / 2; angle = 0; break;
        // }
        this.freshPos(side, elem.x, elem.y);
        this.svg.addEventListener(elem.id + '_moving',(e)=>{
            this.freshPos(side, e.detail.x, e.detail.y)
        }, false);
    }

    freshPos(type, x, y){

        let a = {x: this.start_x - 100, y: this.start_y};
        let b = {x: this.start_x, y: this.start_y};
        let c = {x: this.end_x, y: this.end_y};
        let d = {x: this.start_x, y: this.start_y};

        let getVector = (p1, p2)=>{
            return {
                x: p2.x - p1.x,
                y: p2.y - p1.y
            };
        };

        let v1 = getVector(a, b);
        let v2 = getVector(c, d);

        let dot = v1.x * v2.x + v1.y * v2.y;
        let cross = v1.x * v2.y - v1.y * v2.x;
        let angle = Math.atan2(cross, dot);

        let delimer = 90;

        angle = Math.floor((angle * 180 / PI + 180) / delimer);
        this.start_angle = 0 - (angle * delimer);
        this.end_angle = 270 - (angle * delimer);

        this[type + '_x'] = x + this.x_shift / 2;
        this[type + '_y'] = y + this.y_shift / 2;
        this[type + 'Orientation']();
        this.calculateScalar();
        this.startOrientation();
        this.endOrientation();
        this.render();
    }

    inverse(type){
        return type === 'start' ? 'end' : 'start';
    }
    startOrientation(){
        this.start_x_orient = Math.sin(this.start_angle * PI / 180) * this.orientation_scalar + this.start_x;
        this.start_y_orient = Math.cos(this.start_angle * PI / 180) * this.orientation_scalar + this.start_y;
    }
    endOrientation(){
        this.end_x_orient = Math.sin(this.end_angle * PI / 180) * this.orientation_scalar + this.end_x ;
        this.end_y_orient = Math.cos(this.end_angle * PI / 180) * this.orientation_scalar + this.end_y ;
    }
    render(){
        this.tag.setAttribute('d', 'M' + this.start_x + ' ' + this.start_y + ' C ' + this.start_x_orient + ' ' + this.start_y_orient + ', ' + this.end_x_orient + ' ' + this.end_y_orient + ', ' + this.end_x + ' ' + this.end_y);
    }
}

class TextBlock{
    constructor(options){
        this.x = options.position[0];
        this.y = options.position[1];
        this.text = options.text;
        this.canva = options.canva;
        this.dragged = false;
        this.width = 100;
        this.height = 100;
        this.touch_shift = [0,0];
        this.form = 'square';
        this.init();
    }
    init(){
        this.tag = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        this.tag.setAttribute('x', this.x);
        this.tag.setAttribute('y', this.y);
        this.tag.setAttribute('stroke', 'rgb(111 212 0)');
        this.tag.setAttribute('width', '100');
        this.tag.setAttribute('height', '100');

        document.addEventListener('mouseup', (e)=>{
            this.dragged = false;
        });

        this.canva.canv.addEventListener('mousemove', (e)=>{
            if(this.dragged){
                let x = e.offsetX - this.touch_shift[0];
                let y = e.offsetY - this.touch_shift[1];
                this.moving(x, y);
                this.position = [x,y];
            }
        });
        this.tag.addEventListener('mousedown', (e)=>{
            this.touch_shift = [e.offsetX - this.tag.x.animVal.value, e.offsetY - this.tag.y.animVal.value];
            this.dragged = true;
        });
    }
    setContainer(svg){
        this.svg = svg;
    }
    moving(x, y){
        this.tag.setAttribute('x', x);
        this.tag.setAttribute('y', y);
        let event = new CustomEvent(this.id + "_moving", {detail: {x:x, y:y}});
        this.svg.dispatchEvent(event);
    }

    setId(id){
        this.id = id;
        this.tag.setAttribute('id', id);
    }
}
module.exports = {
    Canva: Canva,
    Path: Path,
    TextBlock: TextBlock
};
