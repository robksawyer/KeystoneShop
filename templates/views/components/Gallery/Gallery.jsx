import React from 'react';

const Gallery = ({props}) => {
  return (
    <div class="container padding-bottom no-padding">
      <h1>Gallery</h1>
      {
        props.galleries ? (
          galleries.map((gallery) => (
            <h2>{gallery.name}</h2>
            gallery.publishedDate (
              <div className="pull-right text-muted">
                { gallery._.publishedDate.format('Do MMM YYYY') }
              </div>
            )
            <div className="row gallery-images">
              {
                gallery.heroImage ? (
                  <div className="col-sm-4 col-md-4 gallery-image">
                    <img src={gallery._.heroImage.limit(680,680)} className="img-rounded" />
                    <div className="col-sm-8 col-md-8">
                      <div className="row">
                        {
                          gallery.images.map((image) => (
                            <div className="col-xs-4 col-sm-4 col-md-3 gallery-image">
                              <img src={image.limit(300,300)} className="img-rounded" />
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                ) : (
                  gallery.images.map((image) => (
                    <div className="col-xs-6 col-sm-4 col-md-3 gallery-image">
                      <img src={image.limit(300,300)} className="img-rounded" />
                    </div>
                  ))
                )
              }
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
