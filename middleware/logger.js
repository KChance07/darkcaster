function logger(request, response, next){
  console.log('Logging!');
  next();
}

modules.exports = logger;
