import React from 'react';

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
                <section>
                    <p>Have a question or would like to contact me regarding business opportunities? </p>
                    <a
                        href='https://us6.list-manage.com/contact-form?u=18cce188b2119215d1bbcb027&form_id=b524337d8eab21a5267ff97f956b0897'>
                        Contact Me
                    </a>
                </section>
            </div>
        )
    }
}