module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    const note = {
      title: req.body.title,
      start: req.body.start,
      duration: req.body.duration,
      user: req.body.username
    };
    let temp = note.start.split(':', 2)
    note.start = temp[0] * 60 - 480 + + temp[1]

    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'})
      } else {
        res.send(result.ops[0])
      }
    })
  })

  app.delete('/delete', (req, res) => {
    //hours to minutes
    let temp = req.body.start.split(':', 2)

    const startTime = temp[0] * 60 - 480 + + temp[1]
    const title = req.body.title
    const details = {
      start: startTime,
      title: title
    }

    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'})
      } else {
        res.send(`deleted ${item}`)
      }
    })
  })

  app.post('/read', (req, res) => {
    console.log(req.body)
    const details = {
      user: req.body.username
    }
    const ignore = {
      _id: false
    }
    db.collection('notes').find(details, ignore).sort({start: 1}).toArray((err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'})
      } else {
        res.send(result)
      }
    })
  })
};
