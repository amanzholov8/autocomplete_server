'use strict';

const appRouter = (app, db) => {

    //handle post requests
    app.post('/', function (req, res) {
        console.log("Received a POST request");
        const q = req.body.q;
        const query = `
                      SELECT cities.*, countries.name AS country_name 
                    FROM cities 
                    INNER JOIN countries ON cities.country_id = countries.id
                    WHERE cities.name LIKE ? 
                    LIMIT 20`
        const parameter = q + "%";
        db.query(query, [parameter], (err, rows) => {
          if (err) throw err;
          let output = [];
          for (let i=0; i<rows.length; i++) {
              let row = rows[i]
              let entry = {
                  name: row.name,
                  coordinate: [row.latitude, row.longitude],
                  country: row.country_name
              }
              output.push(entry);
          }
          res.send(JSON.stringify(output));
          console.log("Response sent");
        });
      });
};

module.exports = appRouter;