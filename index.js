let express = require("express");
const { AppSQL, AppQuery } = require("./DBManager/AppSQL");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const { EntityModels } = require("./DBManager/EntityModels");
const {  Op } = require("sequelize");
const { Instrument } = require("./DBManager/Entity/Instrument");
const { Trade } = require("./DBManager/Entity/Trade");
app.use(express.urlencoded({ extended: false, limit: "100mb" }));
app.use(express.static(path.resolve(__dirname, "public")));
const WebSocket = require("ws");
const moment = require("moment/moment");

const wsServer = new WebSocket.Server({ noServer: true, path: "/ws" });

var models = EntityModels(AppSQL);


//############################ End Routing ############################
const DataGenerator = async (entity) => {
  return {
      SingleData: () => {
          var result = {};
          Object.keys(entity).forEach(element => {
              var item = entity[element];
              result[element] = item.random();
          });
          return result;
      },
      ListData: (num) => {
          return [...Array(num)].map(element => {
              var tempItem = {};
              Object.keys(entity).forEach(element => {
                if(element != "Id"){
                  var item = entity[element];
                  tempItem[element] = item.random();
                }
              });
              return tempItem;
          })
      }
  }
}

app.get("/test", async (req, res) => {

  var result = await AppSQL.query(`select Td.*, Temp1.* from (
    select Instrument.Name,  max(Trade.Id)as LastId, sum(Trade.[Open]) as SumOpen, sum(Trade.[High]) as SumHigh, sum(Trade.[Close]) as SumClose   from Trade inner join Instrument on Instrument.Id = Trade.InstrumentId group by Trade.InstrumentId, Instrument.Name
    ) as Temp1 inner join Trade as Td on Temp1.LastId = Td.Id`);

  res.send(result);
});

app.get("/random", async (req, res) => {
 
 var instrumentData = (await DataGenerator(Instrument)).ListData(100);
 var tradeData = (await DataGenerator(Trade)).ListData(1000);

  var insert1 =await models.Instrument.bulkCreate(instrumentData);
  var insert2 =await models.Trade.bulkCreate(tradeData);

  var result = await AppSQL.query(`select Td.*, Temp1.* from (
    select Instrument.Name,  max(Trade.Id)as LastId, sum(Trade.[Open]) as SumOpen, sum(Trade.[High]) as SumHigh, sum(Trade.[Close]) as SumClose   from Trade inner join Instrument on Instrument.Id = Trade.InstrumentId group by Trade.InstrumentId, Instrument.Name
    ) as Temp1 inner join Trade as Td on Temp1.LastId = Td.Id`);

  res.send(result);
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const appServer = app.listen(3333);

