import React from 'react';
import { SocialIcon } from 'react-social-icons';
export default class Bio extends React.Component {
    render() {
        return (
            <div className='main-bio'>
                <section>
                    <p>I am Stephen Westbrook, a Long Time Artist and Producer.</p>
                    <p>Creating has been my passion since childhood. Paintings created these days,
                    reflect a creative journey I have been traveling for decades. </p>
                    <p>My influences are: graffiti, surrealism, dadaism and expressionism.
                    My abstract works, are a synergy of street and gallery styles.</p>
                    <p>I place African patterns to scene layout, reflecting my love for Art Deco</p>
                    <p>I paint to provoke thoughts and generate narratives that reflect my experiences.</p>
                </section>
                <a href='https://www.instagram.com/kingpin.makh/' style={{margin: 'auto'}}>
                    Instagram: @kingpin.makh<SocialIcon url='https://www.instagram.com/kingpin.makh/' />
                </a>
            </div>
        )
    }
}