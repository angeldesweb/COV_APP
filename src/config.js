module.exports = {
    port : process.env.PORT || 3001,
    db : process.env.MONGODB || 'mongodb://localhost:27017/covid_test',
    SECRET : process.env.SECRET || 'TEMPORAL_SECRET'
}