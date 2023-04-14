class Container{
    #ele = document.createElement("div");
    #clsName = "flex-container"
    getEle(){
        return this.#ele;
    }
    setClassName(cls){
        this.#ele.setAttribute('class', cls);
    }
    getClassName(){
        return this.#clsName;
    }
}
class SmallContainer extends Container{
    #ele;
    #clsName = super.getClassName() + " small";
    #obj;

    constructor(){
        super();
        this.init();
    }
    init(){
        this.#ele = super.getEle();
        super.setClassName(this.#clsName);
    }
    getObj(){
        return this.#ele;
    }
}
class MiddleContainer extends Container{
    #ele
    #clsName = super.getClassName();
    #obj;

    constructor(dir){
        super();
        this.#clsName += " " + dir + "-middle";
        this.init();
    }
    init(){
        this.#ele = super.getEle();
        super.setClassName(this.#clsName);
    }
    getObj(){
        return this.#ele;
    }
}


class FlexItem{
    #ele = document.createElement("div");
    #width
    #height
    #color
    #direct
    constructor(width, height, color, direct){
        this.#width = width
        this.#height = height
        this.#color = color
        this.#direct = direct
    }
    getWidth(){ return this.#width }
    getHeight(){ return this.#height }
    getColor(){ return this.#color }
    getDirect(){ return this.#direct }
    getEle(){
        return this.#ele;
    }
}
class FlexSmallItem extends FlexItem{
    #ele;
    #clsName = "flex-item small";
    constructor(width, height, color, direct){
        super(width, height ,color, direct)
        this.init();
    }
    init(){
        this.#ele = super.getEle();
        this.#ele.setAttribute('class', this.#clsName);
        this.#ele.style.backgroundColor = this.getColor();
    }
    getEle(){
        return this.#ele;
    }
}
class FlexMiddleItem extends FlexItem{
    #ele;
    #clsName = "flex-item middle";
    constructor(width, height, color, direct){
        super(width, height ,color, direct)
        this.init();
    }
    init(){
        //부모의 getEle()를 가져와서 자식의 #ele에다가 할당
        //곧바로  클래스명은 자식클래스에서 정한 명으로 속성변경
        this.#ele = super.getEle();
        this.#ele.setAttribute('class', this.#clsName);
        this.#ele.style.backgroundColor = this.getColor();
        this.#ele.style.height = this.getHeight();
    }
    getEle(){
        return this.#ele;
    }
}
let parentEle = document.getElementsByClassName('background-inner-container')[0];

let shit = parentEle.appendChild(new SmallContainer().getObj());

shit.appendChild(new FlexSmallItem('30%', '10%', 'aqua', 'left').getEle());
shit.appendChild(new FlexSmallItem('30%', '10%', 'lightblue', 'left').getEle());
shit.appendChild(new FlexSmallItem('30%', '10%', 'gray', 'left').getEle());

let eleArr = [];

function createCard(cnt, height = '40%', bgColor){
    //default color declared in black in css file;
    //
    for(let i = 0; i < cnt; i++){
        if(i % 2 == 0) eleArr.push(new MiddleContainer('left'));
        else eleArr.push(new MiddleContainer('right'))
    }
    
    for(let i = 0; i < cnt; i++){
        let mid = parentEle.appendChild(eleArr[i].getObj());
        mid.appendChild(new FlexMiddleItem('70%', height, bgColor).getEle())
    }
}
createCard(100, '70%','gray')