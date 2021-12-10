import {CarData} from '../../src/models/carData.model';
import {GetStaticPaths} from 'next';
import {getAllCarIds, getCarData} from '../../src/services/backend-communication';


export default function Learn({carData}: { carData: CarData }) {
  return <p>{carData.modelName}</p>;
}

export const getStaticProps = async (params: { id: string }) => {
  const carData = await getCarData(params.id);
  return {
    props: {
      carData
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllCarIds();

  return {
    paths,
    fallback: false
  };
};


