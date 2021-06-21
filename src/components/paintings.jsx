import React, {useEffect, useState} from 'react';
import sanityClient from '../client';
import {Link} from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

export default function Paintings() {
    const [allPostsData, setAllPosts] = useState(null);
    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
        ).then((data) => setAllPosts(data))
            .catch(console.error);
    }, []);

    return (
        <div className='main-paintings'>
            {allPostsData && allPostsData.map((post, index) => (
                <Link to={'/paintings/' + post.slug.current} key={post.slug.current}>
                    <span key={index}>
                        <img
                            src={urlFor(post.mainImage.asset.url)}
                            alt={post.title}
                        />
                        <span><h2>{post.title}</h2></span>
                    </span>
                </Link>
            ))
            }
        </div>
    )
}

