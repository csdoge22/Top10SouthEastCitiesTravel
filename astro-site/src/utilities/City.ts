
class City{
    private name : string;
    private description : string;
    private images : string[];
    // the images in the list are in terms of URLs

    constructor(name : string, description : string, images : string[]){
        this.name = name;
        this.description = description;
        this.images = images;
    }

    public localeCompare(city : City) : number{
        if(this.name.localeCompare(city.name)>0){
            return 1;
        }
        else if(this.name.localeCompare(city.name)<0){
            return -1;
        }
        else{
            if(this.description.localeCompare(city.description)>0){
                return 1;
            }
            else if(this.description.localeCompare(city.description)<0){
                return -1;
            }
            else{
                if(this.images.length<city.images.length) return -1;
                else if(this.images.length>city.images.length) return 1;
                else return 0;
            }
        }
    }

    public getName() : string{
        return this.name;
    }

    public getDescription() : string{
        return this.description;
    }

    public getImages() : string[]{
        return this.images;
    }

    public toString() : string{
        return "Name: "+this.name+"\nDescription: "+this.description+"\nImages: "+this.images;
    }
}
export default City;