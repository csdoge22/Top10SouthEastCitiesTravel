import City from "./City";

class Cities{
    private list : City[];

    constructor(){
        this.list = []
    }

    public addToList(name : string, description : string, images : string[]) : void{
        const tempCity : City = new City(name,description,images)
        this.list.push(tempCity)

    }

    public removeFromList(name : string) : void{
        for(let i=this.list.length-1; i>=0; i--){
            if(this.list[i].getName()==name){
                this.list.splice(i,1)
            }
        }
    }

    // we need a getter so that we can add all cities into the 
    public getList() : City[] {
        return this.list;
    }

    public toString() : string{
        return this.list+"";
    }
}
export default Cities;