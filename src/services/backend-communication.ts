import {CarData} from '../models/carData.model';


export const fetchCars = () =>  fetch('http://localhost:3000/api/cars.json').then(r => r.json())

export async function getCarData(id: string) {
    return await fetchCars().then((res: CarData []) => res.find(car => car.id === id));
}

export async function  getAllCarIds() {
    return await fetchCars().then((res: CarData []) => res.map(car => {
        return {
            params: {
                id: car.id
            }
        };
    }));
}
