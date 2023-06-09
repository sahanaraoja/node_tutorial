const EventEmitter=require("node:events");
class PizzaShop extends EventEmitter{
    constructor(){
        super();
        this.oderNumber=0;
    }
order(){
    this.oderNumber++;
    this.emit("order","large","corn and cheese");
}
    viewordeno(){
        console.log(`Current order number ${this.oderNumber}`);
    }

}
module.exports=PizzaShop;
