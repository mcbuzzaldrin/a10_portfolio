import React, {useEffect, useState} from 'react';
import sanityClient from "../../client";
import {Link} from "react-router-dom";
import ReactLoading from 'react-loading';

export default function Blog() {
    const [allPostsData, setAllPosts] = useState(null);
    const [done, setDone] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            sanityClient.fetch(
                `*[_type == "post" && 'Blog' in categories[]->title] {
            title,
            slug,
            mainImage{
              asset->{
              _id,
              url
            }
          },
          categories,
          publishedAt
        }`
            ).then((data) => {
                setAllPosts(data);
                setDone(true);
            })
                .catch(console.error);
        }, 2000);
        }, []);

    return (
        <div className='main-blog'>
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
                <Link to={'blog/' + post.slug.current} key={post.slug.current}>
                    <span key={index}>
                        <span><h2>{post.title}</h2></span>
                        <span><p>{post.publishedAt}</p></span>
                    </span>
                </Link>
                ))
            )}
        </div>
    )
}