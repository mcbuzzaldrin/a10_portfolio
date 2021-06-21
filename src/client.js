import sanityClient from '@sanity/client';

export default  sanityClient({
    projectId: '7hxv42mc',
    dataset: 'production',
    useCdn: true
})