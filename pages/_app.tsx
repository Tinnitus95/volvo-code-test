import {HelloWorld} from '../src/components/HelloWorld';
import '../public/css/styles.css';
import React from 'react';
import {AppProps} from 'next/app';
import {StyleProvider, ThemePicker} from 'vcc-ui';

function HomePage({Component, pageProps}: AppProps) {
    return (
        <React.StrictMode>
            <StyleProvider>
                <ThemePicker>
                    <Component {...pageProps}/>
                </ThemePicker>
            </StyleProvider>
        </React.StrictMode>
    );
}

export default HomePage;
