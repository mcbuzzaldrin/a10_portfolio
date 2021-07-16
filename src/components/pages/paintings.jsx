import React, {useEffect, useState} from 'react';
import sanityClient from '../../client';
import {Link} from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import ReactLoading from "react-loading";


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

export default function Paintings() {
    const [allPostsData, setAllPosts] = useState(null);
    const [done, setDone] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            sanityClient.fetch(
                `*[_type == "post" && 'Paintings' in categories[]->title] {
            title,
            slug,
            mainImage{
              asset->{
              _id,
              url
            }
          },
          categories
        }`
            ).then((data) => {
                setAllPosts(data);
                setDone(true);
            })
                .catch(console.error);
        }, 2000);
    }, []);

    return (
        <div className='main-paintings'>
            {!done ? (
                <ReactLoading
                    className='loading-icon'
                    type={'bars'}
                    color={'#03fc4e'}
                    height={100}
                    width={100}
                />
            ) : (
                allPostsData && allPostsData.map((post, index) => (
                    <Link to={'paintings/' + post.slug.current} key={post.slug.current}>
                    <span key={index}>
                        <img
                                src={urlFor(post.mainImage.asset.url)}
                                alt={post.title} />
                        <span><h2>{post.title}</h2></span>
                    </span>
                    </Link>
                ))
            )}
        </div>
    )
}

