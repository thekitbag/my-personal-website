import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonCardContent,
  IonButtons,
  IonBackButton
} from '@ionic/react';

import ContentfulRenderer from '../components/ContentfulRenderer'
import './Blog.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [includes, setIncludes] = useState(null);
  const [entries, setEntries] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const client = createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
        accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
      });
  
    const fetchBlogPost = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'pageBlogPost',
          'fields.slug': slug,
          include: 2
        });
  
        if (response.items.length > 0) {
          setPost(response.items[0]); // Assuming the slug is unique
  
          // Save the included assets and entries separately
          setEntries(response.includes.Entry || []);
          setAssets(response.includes.Asset || []);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };
  
    fetchBlogPost();
  }, [slug]); // Add 'client' to dependencies if necessary


  if (!post) {
    return <IonContent>Loading...</IonContent>;
  }

  const { title, shortDescription, featuredImage } = post.fields;


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" text="Back" />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='content-container'>
        <IonCard>
          <IonImg src={`https:${featuredImage.fields.file.url}`} alt={title} style={{ maxWidth: '300px', margin: 'auto' }}  />
          <IonCardHeader>
            <IonCardTitle>{title}</IonCardTitle>
            <IonCardSubtitle>{shortDescription}</IonCardSubtitle>
          </IonCardHeader>
            <IonCardContent className="blog-content">
            <ContentfulRenderer
                content={post.fields.content}
                entries={entries}
                assets={assets}
            />
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default BlogPost;
