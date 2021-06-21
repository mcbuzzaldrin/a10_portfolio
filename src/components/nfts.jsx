import React from 'react';
import {iframeResizer} from 'iframe-resizer';

const theme = '?embed=simple';
export default class Nfts extends React.Component {
    componentDidMount() {
        iframeResizer({log: false}, '#opensea-iframe');
    }
    render() {
        return(
            <div className='main-nfts'>
                <h2>Mogul 4k x 4k Collection</h2>
                <iframe
                    id='mogul'
                    title='mogul-opensea-collection'
                    src={'https://opensea.io/accounts/MakhA10_Steph_Westbrook/mogul-4k-x-4k-pixels' + theme}>
                </iframe>
                <h2>Conflict Perspective Collection</h2>
                <iframe
                id='conflict-perspective'
                title='conflict-perspective-opensea-collection'
                src={'https://opensea.io/accounts/MakhA10_Steph_Westbrook/conflict-perspective-v2' + theme}>
                </iframe>
                <h2>DJ Mech Collection</h2>
                <iframe
                id='dj-mech'
                title='dj-mech-opensea-collection'
                src={'https://opensea.io/accounts/MakhA10_Steph_Westbrook/dj-mech-02' + theme}>
                </iframe>
            </div>
        )
    }
}