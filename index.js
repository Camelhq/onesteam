var express    = require('express')
var https      = require("https");
var fs         = require("fs");
var bodyParser = require('body-parser');
var cors = require('cors');
var override = require('method-override');
var path = require('path')

//https://github.com/Invoiced/invoice-generator-api


var app = express()

// app.use(function(req, res, next){
//   res.header('Access-Control-Allow-Origin');
// })

app.use( express.static(path.join(__dirname, 'dist')));

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.get('*.css', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
});


app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(cors());
app.use(override());

app.use( (req, res, next) => {
    // res.sendFile(path.join(__dirname, 'dist/index.html'));
    // Website you wish to allow to connect
 res.setHeader('Access-Control-Allow-Origin', '*');

 // Request methods you wish to allow
 res.setHeader('Access-Control-Allow-Methods', '*');

 // Request headers you wish to allow
 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

 // Set to true if you need the website to include cookies in the requests sent
 // to the API (e.g. in case you use sessions)
 res.setHeader('Access-Control-Allow-Credentials', true);

 // Pass to next layer of middleware
 // next();
    // console.log(req.body)
    next();
})

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

function generateInvoice(invoice, filename, success, error) {
    var postData = JSON.stringify(invoice);
    var options = {
        hostname  : "invoice-generator.com",
        port      : 443,
        path      : "/",
        method    : "POST",
        headers   : {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(postData)
        }
    };

    var file = fs.createWriteStream(filename);
    var req = https.request(options, function(res) {
        res.on('data', function(chunk) {
            file.write(chunk);
        })
        .on('end', function() {
            file.end();

            if (typeof success === 'function') {
                success();
            }
        });
    });
    req.write(postData);
    req.end();

    if (typeof error === 'function') {
        req.on('error', error);
    }
}



app.post('/invoice', function (req, res) {
  var invoice = {
      logo: "http://invoiced.com/img/logo-invoice.png",
      from: req.body.from,
      to: req.body.to,
      currency: "usd",
      number: "INV-0001",
      payment_terms: "Auto-Billed - Do Not Pay",
      items: [],
      fields: {
          tax: "%"
      },
      tax: 5,
      notes: req.body.notes,
      terms: "No need to submit payment. Will contact you to confirm appointment date."
  };
    invoice.items.push({
      name: req.body.name,
      living_room15: req.body.living_room15,
      living_room20: req.body.living_room20,
      living_room30: req.body.living_room30,
      living_room_total: req.body.living_room_total,
      dining_room15: req.body.dining_room15,
      dining_room20: req.body.dining_room20,
      dining_room30: req.body.dining_room30,
      dining_room_total: req.body.dining_room_total,
      medea_room15: req.body.medea_room15,
      medea_room20: req.body.medea_room20,
      medea_room30: req.body.medea_room30,
      medea_room_total: req.body.medea_room_total,
      hallway: req.body.hallway,
      sofa: req.body.sofa,
      recliner: req.body.recliner,
      staircase: req.body.staircase,
      love_seat: req.body.love_seat,
      chair: req.body.chair,
    })
    console.log(invoice)
    res.json(invoice)
      // generateInvoice(invoice, 'invoice.pdf', function() {
      //     console.log("Saved invoice to invoice.pdf");
      // }, function(error) {
      //     console.error(error);
      // });
    // }
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
