import React from 'react';

const GalleryHeader = (gallery) => {
  return (
    <div>
      <h2>{gallery.name}</h2>,
      {
        gallery.publishedDate && (
          <div className="pull-right text-muted">
            { gallery._.publishedDate.format('Do MMM YYYY') }
          </div>
        )
      }
    </div>
  )
}

export default GalleryHeader;
