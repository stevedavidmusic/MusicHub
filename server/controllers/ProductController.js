module.exports = {

    getAllListings: (req, res, next) => {
        console.log("getAllListings")
        req.app.get('db').get_all_listings().then(listing => {
          res.status(200).json(listing);
        }).catch(err => console.log('(getAllListings) ERROR', err))
      },
  
      getUserListings: (req, res, next) => {
        console.log("getUserListings")
        const { id } = req.params
        console.log("req.params", req.params)
        req.app.get('db').get_user_listings([id]).then(userListings => {
          res.status(200).json(userListings);
        }).catch(err => console.log('(getUserListings) ERROR', err))
      },

      createListing: (req, res, next) => {
        const {user_id, listing_name, description, time_stamp, type, tags, price, sold } = req.body
        console.log( req.body )
        const db = req.app.get('db')
        db.create_listing([user_id, listing_name, description, time_stamp, type, tags, price, sold]).then(listing => {
          console.log('res.data', res.data)
          res.status(200).json(listing)
        }).catch(err => console.log("createListing", err))
    },
  
      deleteListing: (req, res, next ) => {
        const { listing_id } = req.params;
        console.log("listing_id", listing_id, "req.params", req.params)
        req.app.get('db').delete_listing({ listing_id: listing_id }).then(response =>{
          res.status(200).json(response);
        }).catch(err => console.log ('deleteListing ERROR', err))
      },

    //   editListing: (req, res, next) => {
    //     const { listing_name } = req.params
    //     const { listing_id } = req.query 
    //     console.log("listing_name", listing_name, "req.params", req.params, "{listing_name}",{listing_name}, "listing_id", listing_id)
    //     req.app.get('db').edit_listing_name(listing_name, listing_id).then ( response => {
    //       res.status(200).json(response);
    //     }).catch(err => console.log('editListing ERROR', err))

}