import {Block, Text} from 'vcc-ui';
import styleUtils from '../../../public/css/utils.module.css';

interface HeaderProps {
    bodyType: string;
    modelName: string;
    modelType: string;
}

export default function CarCardHeader({bodyType, modelName, modelType}: HeaderProps) {
    return (
        <Block className="car-card__heading">
            <Text subStyle="emphasis" extend={{color: '#707070'}}>{bodyType}</Text>
            <div className={styleUtils.mobileColumn}>
                <Text subStyle="emphasis"
                      extend={{marginRight: '0.5rem'}}>{modelName}</Text>
                <Text extend={{color: '#898989'}}>{modelType}</Text>
            </div>

        </Block>
    );
}
