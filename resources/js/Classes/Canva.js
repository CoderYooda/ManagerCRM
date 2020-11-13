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
        model.setId('part' + this.elems);
        this.elems++;
    }

}
class Path{
    constructor(options){
        this.start = options.start;
        this.end = options.end;
        this.orientation_scalar = 0;
        this.tag = null;
        this.init();
    }
    init(){
        let startOrientation = this.getStartOrientation();
        let endOrientation = this.getEndOrientation();
        this.calculateScalar();
        this.tag = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        this.tag.setAttribute('d', 'M' + this.start[0] + ' ' + this.start[1] + ' C ' + startOrientation[0] + ' ' + startOrientation[1] + ', ' + endOrientation[0] + ' ' + endOrientation[1] + ', ' + this.end[0] + ' ' + this.end[1]);
        this.tag.setAttribute('stroke', 'rgb(111 212 0)');
        this.tag.setAttribute('stroke-width', '2');
        this.tag.setAttribute('fill', 'transparent');
    }
    setId(id){
        this.tag.setAttribute('id', id);
    }
    calculateScalar(){
        this.orientation_scalar = Math.sqrt(Math.pow( (this.end[0] - this.start[0]) , 2) + Math.pow( (this.end[1] - this.start[1]) , 2)) / 2;
    }
    freshStart(start){
        this.start = start;
        let startOrientation = this.getStartOrientation();
        let endOrientation = this.getEndOrientation();
        this.calculateScalar();
        this.tag.setAttribute('d', 'M' + this.start[0] + ' ' + this.start[1] + ' C ' + startOrientation[0] + ' ' + startOrientation[1] + ', ' + endOrientation[0] + ' ' + endOrientation[1] + ', ' + this.end[0] + ' ' + this.end[1]);
    }
    freshEnd(end){
        this.end = end;
        let startOrientation = this.getStartOrientation();
        let endOrientation = this.getEndOrientation();
        this.calculateScalar();
        this.tag.setAttribute('d', 'M' + this.start[0] + ' ' + this.start[1] + ' C ' + startOrientation[0] + ' ' + startOrientation[1] + ', ' + endOrientation[0] + ' ' + endOrientation[1] + ', ' + this.end[0] + ' ' + this.end[1]);
    }
    getStartOrientation(){
        let orientation = [0,0];
        orientation[0] = Math.sin(this.start[2] * PI / 180) * this.orientation_scalar + this.start[0];
        orientation[1] = Math.cos(this.start[2] * PI / 180) * this.orientation_scalar + this.start[1];

        return orientation;
    }
    getEndOrientation(){
        let orientation = [0,0];
        orientation[0] = Math.sin(this.end[2] * PI / 180) * this.orientation_scalar + this.end[0];
        orientation[1] = Math.cos(this.end[2] * PI / 180) * this.orientation_scalar + this.end[1];

        return orientation;
    }
}

class TextBlock{
    constructor(options){
        this.position = options.position;
        this.text = options.text;
        this.canva = options.canva;
        this.attached = options.attached;
        this.dragged = false;
        this.width = 100;
        this.height = 100;
        this.touch_shift = [0,0];
        this.init();
    }
    init(){
        this.tag = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        this.tag.setAttribute('x', this.position[0]);
        this.tag.setAttribute('y', this.position[1]);
        this.tag.setAttribute('stroke', 'rgb(111 212 0)');
        this.tag.setAttribute('width', '100');
        this.tag.setAttribute('height', '100');

        document.addEventListener('mouseup', (e)=>{
            this.dragged = false;
        });

        this.canva.canv.addEventListener('mousemove', (e)=>{
            if(this.dragged){
                let x = e.offsetX;
                let y = e.offsetY;
                this.tag.setAttribute('x', x - this.touch_shift[0]);
                this.tag.setAttribute('y', y - this.touch_shift[1]);

                this.position = [x,y];
            }
        });
        this.tag.addEventListener('mousedown', (e)=>{
            this.touch_shift = [e.offsetX - this.tag.x.animVal.value, e.offsetY - this.tag.y.animVal.value];
            this.dragged = true;
        });
    }
    attachPath(options){
        this.attached.push(options.path);
    }
    setId(id){
        this.tag.setAttribute('id', id);
    }
}
module.exports = {
    Canva: Canva,
    Path: Path,
    TextBlock: TextBlock
};
