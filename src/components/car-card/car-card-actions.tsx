import {Block, Text} from 'vcc-ui';
import Link from 'next/link';
import typography from '../../../public/css/typography.module.css';

interface ActionProps {
    id: string
}

export default function CarCardActions({id}: ActionProps) {
    return (  <Block extend={{textAlign: 'center', marginTop: '2rem'}} className="car-card__actions">
        <Link href={`/learn/${id}`}>
            <a className={typography.link}><Text extend={{color: '#346cb5', display: 'inline-block'}}
                                                 subStyle="emphasis">LEARN</Text></a>
        </Link>

        <Link href={`/shop/${id}`}>
            <a className={typography.link}><Text subStyle="emphasis" extend={{
                color: ' #346cb5',
                display: 'inline-block'
            }}>SHOP</Text></a>
        </Link>

    </Block>)
}
