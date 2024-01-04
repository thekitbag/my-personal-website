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

  const renderNodeContent = (nodeContent, index) => {
    return nodeContent.map((contentNode, contentIndex) => {
      if (contentNode.nodeType === 'text') {
        let textElement = <span key={contentIndex}>{contentNode.value}</span>;
  
        if (contentNode.marks && contentNode.marks.length > 0) {
          contentNode.marks.forEach(mark => {
            if (mark.type === 'italic') {
              textElement = <em key={contentIndex}>{textElement}</em>;
            } else if (mark.type === 'bold') {
              textElement = <strong key={contentIndex}>{textElement}</strong>;
            }
            // Handle other mark types if needed
          });
        }
  
        return textElement;
      } else if (contentNode.nodeType === 'hyperlink') {
        return (
          <a
            key={contentIndex}
            href={contentNode.data.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="hyperlink"
          >
            {contentNode.content[0].value}
          </a>
        );
      }
      return null;
    });
  };
  

  const renderContent = (content, includes) => {
    return content.content.map((node, index) => {
        if (['paragraph', 'blockquote'].includes(node.nodeType)) {
          return (
            <IonText key={index} className={node.nodeType === 'blockquote' ? 'blockquote-text' : ''}>
              {renderNodeContent(node.content, index)}
            </IonText>
          );
        }
      switch (node.nodeType) {
        case 'paragraph':
          return <IonText key={index}>{node.content[0].value}</IonText>;
        case 'blockquote':
            return  <IonCard>
                        <IonCardContent>
                            <IonText className='blockquote-text'>"{node.content[0].content[0].value}"</IonText>
                        </IonCardContent>

                    </IonCard>
        case 'embedded-entry-block':
          const linkedEntryId = node.data.target.sys.id;
          const linkedEntry = includes.Entry.find(entry => entry.sys.id === linkedEntryId);
  
          if (linkedEntry && linkedEntry.fields.image) {
            // Look up the image in the included assets
            const imageId = linkedEntry.fields.image.sys.id;
            const imageAsset = includes.Asset.find(asset => asset.sys.id === imageId);
            if (imageAsset) {
              return (
                <IonImg
                  className='embedded-img'
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
