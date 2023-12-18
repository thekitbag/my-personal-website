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
  IonText,
  IonButtons,
  IonBackButton
} from '@ionic/react';

import { useHistory } from 'react-router-dom';


import './Blog.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [includes, setIncludes] = useState(null);
  const history = useHistory();

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
          setPost(response.items[0]); // Assuming the slug is unique and only one post is returned
          setIncludes(response.includes); // Save the included assets and entries
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlogPost();
  }, [slug]);

  const renderContent = (content, includes) => {
    return content.content.map((node, index) => {
      switch (node.nodeType) {
        case 'paragraph':
          return <IonText key={index}>{node.content[0].value}</IonText>;
        case 'embedded-entry-block':
          // Look up the linked entry
          const linkedEntryId = node.data.target.sys.id;
          const linkedEntry = includes.Entry.find(entry => entry.sys.id === linkedEntryId);
  
          if (linkedEntry && linkedEntry.fields.image) {
            // Look up the image in the included assets
            const imageId = linkedEntry.fields.image.sys.id;
            const imageAsset = includes.Asset.find(asset => asset.sys.id === imageId);
            if (imageAsset) {
              return (
                <IonImg
                  key={index}
                  src={`https:${imageAsset.fields.file.url}`}
                  alt={imageAsset.fields.title || 'Embedded Image'}
                />
              );
            }
          }
          break;
        // Handle other node types as needed
        default:
          return null;
      }
    });
  };
  

  if (!post || !includes) {
    return <IonContent>Loading...</IonContent>;
  }

  const { title, shortDescription, content, featuredImage } = post.fields;

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
                {renderContent(post.fields.content, includes)}
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default BlogPost;
