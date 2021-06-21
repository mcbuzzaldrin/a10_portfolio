import sanityClient from "../client";
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

export default function Painting() {
const [postData, setPostData] = useState(null);
const { slug } = useParams();

useEffect(() => {
    sanityClient.fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        {slug},
    ).then((data) => setPostData(data[0]))
        .catch(console.error);
}, [slug]);

if (!postData) return <div>Loading...</div>;
    return(
        <div className='Painting'>
            <div>
                <h2>{postData['title']}</h2>
            </div>
            <img src={urlFor(postData['mainImage']).url()} alt={postData['title']} />
            <br></br>
                <div className='block-description'>
                    <BlockContent
                        blocks={postData['body']}
                        projectId={sanityClient.config().projectId}
                        dataset={sanityClient.config().dataset}
                        />
                </div>
        </div>
    )
}