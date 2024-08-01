import City from "./City";

let CityObj : City;
const CityComp = (city : any) => {
    const name = city.name;
    const description = city.description;
    const images : string[] = city.images;
    CityObj = new City(name,description,images)

    return (
        <div className="container-sm">
            <h1 className="text-danger-emphasis">{name}</h1>
            <p className="p-sm-5">{description}</p>
            <ul className="list-group d-sm-grid">
                {
                    images.map((item,index) => <li className="list-group-item"><img className="mx-auto" src={images[index]}/></li>)
                }
            </ul>
        </div>
    )
}
export default CityComp;