import React from 'react';
import GalleryHeader from './GalleryHeader';
import GalleryImages from './GalleryImages';

const Gallery = (props) => {
  let {galleries} = props;

  return (
    <div class="container padding-bottom no-padding">
      <h1>Gallery</h1>
      {
        galleries ? (
          galleries.map((gallery) => (
            <div>
              <GalleryHeader gallery={gallery} />
              <GalleryImages gallery={gallery} />
            </div>
          ))
        ) : (
          <h3 className="text-muted">There are no image galleries yet.</h3>
        )
      }
    </div>
  )
}

export default Gallery;
