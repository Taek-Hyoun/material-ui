class FlexItem{
    #width
    #height
    #color
    #direct
    constructor(width, height, color, direct){
        this.width = width
        this.height = height
        this.color = color
        this.direct = direct
    }
    getWidth(){ return this.#width }
    getHeight(){ return this.#height }
    getColor(){ return this.#color }
    getDirect(){ return this.#direct }
    getDivContainer(){ return this.#divContainer }
}
class FlexSmallItem extends FlexItem{
    constructor(width, height, color, direct){
        super(width, height ,color, direct)
    }
}
class FlexMiddleItem extends FlexItem{
    constructor(width, height, color, direct){
        super(width, height ,color, direct)
    }
}