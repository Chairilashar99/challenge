var express = require('express');
var router = express.Router();
const { ObjectId, MongoDBNamespace } = require('mongodb');

module.exports = function (db) {
  const collection = db.collection('users');

  router.get('/', async function (req, res, next) {

    const limit = req.query.display 
    const page = req.query.page || 1
    const url = req.url
    const sortBy = req.query.sortBy || "strings"
    const sortMode = req.query.sortMode || '1'
    const sorting = {}
    sorting[`${sortBy}`] = sortMode
    

    const offset = limit == 'all' ? 0 : (page - 1) * limit
    const searchParams = {}

    //searching

    if (req.query.strings) {
      const regexName = new RegExp(`${req.query.strings}`, `i`);
      searchParams['strings'] = regexName
      console.log('string', searchParams)
    }
    if (req.query.integers) {
      const regexName = parseInt(req.query.integers);
      searchParams['integers'] = regexName
      console.log(req.query.integers)
    }
    if (req.query.floats) {
      const regexName = parseFloat(req.query.floats);
      searchParams['floats'] = regexName
    }
    if (req.query.dates1 && req.query.dates2) {
      const regexName = [{ $gte: req.query.dates1, $lt: req.query.dates2 }]
      searchParams['dates'] = regexName.reduce(function (result, item) {
        var key1 = Object.keys(item)[0];
        var key2 = Object.keys(item)[1]
        result[key1] = item[key1];
        result[key2] = item[key2];
        return result;
      }, {});
    } else if (req.query.dates1) {
      const regexName = [{ $gte: req.query.dates1 }]
      searchParams['dates'] = regexName.reduce(function (result, item) {
        var key = Object.keys(item)[0];
        result[key] = item[key];
        return result;
      }, {});
    } else if (req.query.dates2) {
      const regexName = [{ $lt: req.query.dates2 }]
      searchParams['dates'] = regexName.reduce(function (result, item) {
        var key = Object.keys(item)[0];
        result[key] = item[key];
        return result;
      }, {});
    }

    if (req.query.booleans) {
      searchParams['booleans'] = JSON.parse(req.query.booleans)
    }

    try {
      const collection = db.collection('users');
      const totalData = await collection.find(searchParams).count()
      const totalPages = limit == 'all' ? 1 : Math.ceil(totalData/limit)
      const limited = limit == 'all' ? {} : { limit: parseInt(limit), skip: offset }
      const findResult = await collection.find(searchParams, limited).sort(sorting).toArray();
      res.status(200).json({
        url: url,
        data: findResult,
        totalData,
        totalPages,
        display: limit,
        page: parseInt(page)
      })
    } catch (e) {
      res.json(e)
    }
  })
  

  router.post('/', async function (req, res) {
    try {
      const collection = db.collection('users');
      const insertResult = await collection.insertOne({
        strings: req.body.strings,
        integers: parseInt(req.body.integers),
        floats: parseFloat(req.body.floats),
        dates: req.body.dates,
        booleans: JSON.parse(req.body.booleans)
      });
      const data = await collection.findOne({ _id: insertResult.insertedId})
      res.status(201).json(data)
    } catch (e) {
      res.json(e)
    }
  });

  router.get('/:id', async function (req, res) {
    try {
      const collection = db.collection('users');
      const data = await collection.findOne({_id: ObjectId(req.params.id) })
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({message: "error cari data"})
    }
  })

  router.put('/:id', async function (req, res) {
    try {
      const collection = db.collection('users');
      await collection.updateOne({ _id: ObjectId(req.params.id) },
        {
          $set: {
            strings: req.body.strings,
            integers: parseInt(req.body.integers),
            floats: parseFloat(req.body.floats),
            dates: req.body.dates,
            booleans: JSON.parse(req.body.booleans)
          }
        });
        const data = await collection.findOne({_id: ObjectId(req.params.id)})
      res.status(201).json(data)
    } catch (e) {
      res.json(e)
    }
  });

  router.delete('/:id', async function (req, res, next) {
    try {
      const deleteResult = await collection.deleteOne({ _id: ObjectId(req.params.id) });

      res.status(201).json(deleteResult)
    } catch (e) {
      res.json(e)
    }
  });

  return router;
} 
