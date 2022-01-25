const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/aprendendomongodb",{useNewUrlParser: true},{useUnifieldTopology:true});