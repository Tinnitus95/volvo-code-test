import {useEffect, useState} from 'react';
import {CarData} from '../src/models/carData.model';
import CarCard from '../src/components/car-card/car-card';
import Carousel from '../src/components/carousel/carousel';
import {fetchCars} from '../src/services/backend-communication';
import useWindowWidth from '../src/hooks/use-window-width';


export default function Home() {
    const [cars, setCars] = useState<CarData[] | null>([]);

    const width = useWindowWidth();

    const checkCarsToShow = (width: number) => {
        if (width < 480) {
            return 1;
        }
        if (width < 780) {
            return 2;
        }
        if (width < 1040) {
            return 3;
        }

        return 4;
    };

    useEffect(() => {
        fetchCars().then((res: CarData[]) => setCars(res));
    }, []);

    return (
        <div>
            {/* @ts-ignore */}
            <Carousel show={checkCarsToShow(width)}>
                {cars?.length && cars.map((car) => (
                        <CarCard key={car.id} {...car} />))}
            </Carousel>
        </div>
    );
}
