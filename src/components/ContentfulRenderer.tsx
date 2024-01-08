import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { IonImg, IonText } from '@ionic/react';

const ContentfulRenderer = ({ content, assets, entries }) => {
  const assetMap = new Map();
  
  // Creating a map for easy access to assets by their ID
  assets.forEach(asset => {
    assetMap.set(asset.sys.id, asset);
  });

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.ITALIC]: text => <em>{text}</em>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <IonText>{children}</IonText>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      // Add other node types like BLOCKS.UL_LIST, BLOCKS.OL_LIST, etc.
      [BLOCKS.HYPERLINK]: (node, children) => {
        return <a href={node.data.uri}>{children}</a>;
      },
      [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const linkedEntryId = node.data.target.sys.id;
        const linkedEntry = entries.find(entry => entry.sys.id === linkedEntryId);

        if (linkedEntry && linkedEntry.fields.image) {
          const imageId = linkedEntry.fields.image.sys.id;
          const imageAsset = assets.find(asset => asset.sys.id === imageId);
          if (imageAsset) {
            return (
              <IonImg
                className='embedded-img'
                src={`https:${imageAsset.fields.file.url}`}
                alt={imageAsset.fields.title || 'Embedded Image'}
              />
            );
          }
        }
        return null;
      }
      // ... other node types
    },
  };

  return <div>{documentToReactComponents(content, options)}</div>;
};

export default ContentfulRenderer;

