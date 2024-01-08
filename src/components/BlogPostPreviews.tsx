import React, { useEffect, useState } from 'react';
import { createClient, Entry } from 'contentful';
import { IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonImg, IonButton } from '@ionic/react';

const getImgUrl = (featuredImage: any): string | undefined => {
  return featuredImage.fields.file ? `https:${featuredImage.fields.file.url}` : undefined;
};


const BlogPostPreviews = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const client = createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });

    const fetchBlogPosts = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'pageBlogPost',
          'fields.liveHidden': 'false'
        });
        setPosts(response.items);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <IonGrid>
      <IonRow>
        {posts.map((post) => {
          const postSlug = post.fields.slug; // Use the slug field from your post
          const postUrl = `/blog/${postSlug}`; // Construct the URL

          return (
            <IonCol size="12" key={post.sys.id}>
              <IonCard className='card-component'>
                <IonCardContent>
                  <IonImg src={getImgUrl(post.fields.featuredImage)} style={{ maxWidth: '200px', margin: 'auto' }} />
                  <h2>{post.fields.title}</h2>
                  <p>{post.fields.shortDescription}</p>
                  <IonButton expand="block" href={postUrl} className="view-post-button">
                    View Post
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          );
        })}
      </IonRow>
    </IonGrid>
  );
};
  
  export default BlogPostPreviews;