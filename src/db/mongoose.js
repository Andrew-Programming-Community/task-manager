const mongoose = require('mongoose')

mongoose.connect(process.env.MOONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });