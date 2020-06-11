const queryModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  tel: {
    type: Number,
  },
  query: {
    type: String,
    required: true,
  },
});

const Query = model("query", queryModel);
module.exports = Query;
