class Path{
    constructor(options){
        this.svg = options.svg;
        this.start = options.start;
        this.end = options.end;
        this.id = options.id;


        this.start_pos = [(this.start[0][0] + this.start[1][0]) / 2, (this.start[0][1] + this.start[1][1]) / 2];
        this.end_pos = [(this.end[0][0] + this.end[1][0]) / 2, (this.end[0][1] + this.end[1][1]) / 2];
        console.log(this.start);

        this.start_vector =[this.start_pos[0] + (this.start[0][0] - this.start[1][0]), this.start_pos[1] + (this.start[0][1] - this.start[1][1])];




        this.path = null;

        console.log(this.svg);

        this.container = document.getElementById(this.svg);


        this.vector = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        this.vector.setAttribute('stroke', 'red');
        this.container.appendChild(this.vector);

        console.log(document.getElementById(this.svg));

        this.init();
    }
    init(){
        let startOrientation = this.getStartOrientation();
        let endOrientation = this.getEndOrientation();

        this.path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        this.path.setAttribute('d', 'M' + this.start_pos[0] + ' ' + this.start_pos[1] + ' C ' + startOrientation[0] + ' ' + startOrientation[1] + ', ' + endOrientation[0] + ' ' + endOrientation[1] + ', ' + this.end_pos[0] + ' ' + this.end_pos[1]);
        this.path.setAttribute('stroke', 'rgb(111 212 0)');
        this.path.setAttribute('stroke-width', '2');
        this.path.setAttribute('fill', 'transparent');
        this.path.setAttribute('id', this.id);
        this.container.appendChild(this.path);
        this.drawStartVector();
    }

    drawStartVector(){
        this.vector.setAttribute('x1', this.start_pos[0]);
        this.vector.setAttribute('y1', this.start_pos[1]);
        this.vector.setAttribute('x2', this.start_vector[0]);
        this.vector.setAttribute('y2', this.start_vector[1]);
    }

    fresh(start, end){
        this.start = start;
        this.end = end;
        this.start_pos = [(this.start[0][0] + this.start[1][0]) / 2, (this.start[0][1] + this.start[1][1]) / 2];
        this.end_pos = [(this.end[0][0] + this.end[1][0]) / 2, (this.end[0][1] + this.end[1][1]) / 2];
        let startOrientation = this.getStartOrientation();
        let endOrientation = this.getEndOrientation();
        this.path.setAttribute('d', 'M' + this.start_pos[0] + ' ' + this.start_pos[1] + ' C ' + startOrientation[0] + ' ' + startOrientation[1] + ', ' + endOrientation[0] + ' ' + endOrientation[1] + ', ' + this.end_pos[0] + ' ' + this.end_pos[1]);
        this.drawStartVector();
    }

    getStartOrientation(){
        let orientation = [0,0];

        let diff_x, diff_y;

        return orientation;
    }
    getEndOrientation(){
        let orientation = [0,0];

        let diff_x, diff_y;

        return orientation;
    }

}
export default Path;
