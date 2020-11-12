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


    fresh(start, end){
        this.start = start;
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
module.exports = {
    Canva : Canva,
    Path : Path
};
