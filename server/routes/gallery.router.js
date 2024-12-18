const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get ('/', (req, res) => {
  let queryText = `SELECT * FROM "gallery";` 

  pool.query(queryText)
  .then(( results) => {
      //return rows as result:
      res.send (results.rows)
  })
  .catch( (error) => {
      console.log('There has been an error', error)
      res.sendStatus( 400 )
  })
});

router.put ('/', (req, res) => {
  let queryText = `UPDATE gallery SET likes=likes+1 WHERE "id"=$1`; 
  let values = [req.query.id]
  pool.query(queryText, values)
  .then(( results) => {
      //return rows as result:
      res.send (results.rows)
  })
  .catch( (error) => {
      console.log('There has been an error', error)
      res.sendStatus( 400 )
  })
})
module.exports = router;
