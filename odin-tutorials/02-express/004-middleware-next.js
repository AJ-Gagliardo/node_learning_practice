const middleware1 = (req,res,next)=>{
  console.log("Middleware 1");
  next() // pass control to the nexxt middleware
};

const middleware2 = (req,res, next)=>{
  console.log('middleware 2');
  res.send('response from middleware 2')
  // request-response cycle ends here
}

const middleware 3 = (req,res,next)=>{
  console.log("Middleware 3");
  res.send('response from middleware 3')
}

application.use(middleware1)
application.use(middleware2)
application.use(middleware3)
// wil log 'middleware 1' -> 'middleware 2' and send a response with  the text 'response from middleware 2'