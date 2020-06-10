var db = require('./db-server.js')
var app = require('./app-server.js')

app.service.get('/pizzas', (req, res) => {
  let sql = `SELECT * FROM pizzen`;
  let searchText = req.query.filter;
  if (searchText && searchText.length > 0) {
    searchText = db.escapeValue(`%${searchText}%`);
    sql = sql + ` where name LIKE ${searchText}`;
  }
  db.executeQuery(sql, (result) => {
    res.status(200).send(result);
  });
});

app.service.get('/pizzas/*', (req, res) => {
  let pizzaId = parseInt(req.params[0]);
  let zutatenSql = `SELECT z.id, z.name FROM pizzazutaten pz, zutaten z where z.id = pz.zutat and pz.pizza = ${pizzaId}`;
  let historySql = `SELECT datum, anzahl, bemerkung from verkaufshistory v where v.pizza = ${pizzaId} order by datum desc;`
  let zutatenResult = undefined;
  let historyResult = undefined;
  let handleResult = function() {
    if (zutatenResult && historyResult) {
      res.send({
        zutaten: zutatenResult,
        history: historyResult
      });
    }
  }
  db.executeQuery(zutatenSql, (result) => {
    zutatenResult = result;
    handleResult();
  });
  db.executeQuery(historySql, (result) => {
    historyResult = result;
    handleResult();
  });
});

app.service.post('/pizzas/*/history', (req, res) => {
  let pizzaId = parseInt(req.params[0]);
  let anzahl = db.escapeValue(req.body.anzahl);
  let bemerkung = db.escapeValue(req.body.bemerkung);
  if (pizzaId && anzahl && bemerkung) {
    let sql = `INSERT INTO Verkaufshistory (datum, pizza, anzahl, bemerkung) VALUES (now(), ${pizzaId}, ${anzahl}, ${bemerkung})`;
    db.executeQuery(sql, (result) => {
      res.status(201).send(result);
    });
  } else {
    res.status(400).send("invalid data provided");
  }
})