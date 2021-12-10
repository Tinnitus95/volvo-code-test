import {CarData} from '../../models/carData.model';
import Image from 'next/image';
import styles from './car-card.module.css';
import CarCardHeader from './car-card-header';
import CarCardActions from './car-card-actions';

export default function CarCard(props: CarData) {
    const {bodyType, modelType, modelName, imageUrl, id} = props;
    return (
        <div className={styles.carCard}>
            <CarCardHeader bodyType={bodyType} modelType={modelType} modelName={modelName}/>
            <Image alt={`image showing ${modelName}`} src={imageUrl} width={800} height={600}
                   layout="responsive" objectFit="cover"/>

            <CarCardActions id={id}/>
        </div>
    );
}
