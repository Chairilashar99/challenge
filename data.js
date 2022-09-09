require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fileUpload = require('express-fileupload');
var session = require('express-session');
var flash = require('connect-flash');


const {Pool,Client} = require('pg')
const pool = new Pool({
  user: 'heril',
  host: 'localhost',
  database: 'posdb',
  password: '12345',
  port: 5432,
})

var indexRouter = require('./routes/index')(pool);
var gudangRouter = require('./routes/gudang')(pool);
var satuanRouter = require('./routes/satuan')(pool);
var supplierRouter = require('./routes/supplier')(pool);

var barangRouter = require('./routes/barang')(pool);
var penjualanRouter = require('./routes/penjualan')(pool);
var pembelianRouter = require('./routes/pembelian')(pool);
var usersRouter = require('./routes/users')(pool);


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
app.use(session({
  secret: 'rubicamp',
  resave: false,
  saveUninitialized: true,
}));
app.use(flash());


app.use('/', indexRouter);
app.use('/gudang', gudangRouter);
app.use('/satuan', satuanRouter);
app.use('/supplier', supplierRouter);
app.use('/barang', barangRouter);
app.use('/penjualan', penjualanRouter);
app.use('/pembelian', pembelianRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  //res.render('pages-404');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;











// // var createError = require('http-errors');
// // var express = require('express');
// // var path = require('path');
// // var cookieParser = require('cookie-parser');
// // var logger = require('morgan');
// // var expressLayouts = require('express-ejs-layouts')

// // const {Pool} = require('pg')
// // const pool = new Pool({
// //   user: 'postgres',
// //   host: 'localhost',
// //   database: 'pos',
// //   password: '1234',
// //   port: '5432'
// // })

// // var indexRouter = require('./routes/index');
// // var usersRouter = require('./routes/users');
// // var barangRouter = require('./routes/barang');
// // var satuanRouter = require('./routes/satuan');
// // var supplierRouter = require('./routes/supplier');
// // var varianRouter = require('./routes/varian');
// // var gudangRouter = require('./routes/gudang_barang');
// // var pembelianRouter = require('./routes/pembelian_barang');
// // var pembeliandetailRouter = require('./routes/pembelian_detail');
// // var penjualanRouter = require('./routes/penjualan_barang');
// // var penjualandetailRouter = require('./routes/penjualan_detail');

// // var app = express();

// // //Public engine setup
// // app.use('/public', express.static('public'));

// // // view engine setup
// // app.use(expressLayouts)
// // app.set('views', path.join(__dirname, 'views'));
// // app.set('view engine', 'ejs');

// // app.use(logger('dev'));
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, 'public')));

// // app.use('/', indexRouter);
// // app.use('/users', usersRouter);
// // app.use('/barang', barangRouter);
// // app.use('/satuan', satuanRouter);
// // app.use('/supplier', supplierRouter);
// // app.use('/varian', varianRouter);
// // app.use('/gudang', gudangRouter);
// // app.use('/pembelian', pembelianRouter);
// // app.use('/pembelian_router', pembeliandetailRouter);
// // app.use('/penjualan', penjualanRouter);
// // app.use('/penjualan_router', penjualandetailRouter);

// // // catch 404 and forward to error handler
// // app.use(function(req, res, next) {
// //   next(createError(404));
// // });

// // // error handler
// // app.use(function(err, req, res, next) {
// //   // set locals, only providing error in development
// //   res.locals.message = err.message;
// //   res.locals.error = req.app.get('env') === 'development' ? err : {};

// //   // render the error page
// //   res.status(err.status || 500);
// //   res.render('error');
// // });

// // module.exports = app;







// v-------------------------------------------------------------------------------------------------------------------------Jual-------------------------------------------------------------------------------------------------------------------------v

// CREATE OR REPLACE FUNCTION update_penjualan() RETURNS TRIGGER AS $set_penjualan$
//     DECLARE
//     stok_lama INTEGER;
//     sum_harga NUMERIC;
//     BEGIN
//         IF (TG_OP = 'INSERT') THEN
//             --update stok
//             SELECT stok_varian INTO stok_lama FROM varian WHERE id_varian = NEW.id_varian;
//             UPDATE varian SET stok_varian = stok_lama - NEW.qty WHERE id_varian = NEW.id_varian;

//         ELSIF (TG_OP = 'UPDATE') THEN
//             --update stok
//             SELECT stok_varian INTO stok_lama FROM varian WHERE id_varian = NEW.id_varian;
//             UPDATE varian SET stok_varian = stok_lama + OLD.qty - NEW.qty WHERE id_varian = NEW.id_varian;
            
//         ELSIF (TG_OP = 'DELETE') THEN
//             --update stok
//             SELECT stok_varian INTO stok_lama FROM varian WHERE id_varian = NEW.id_varian;
//             UPDATE varian SET stok_varian = stok_lama + NEW.qty WHERE id_varian = NEW.id_varian;

//         END IF;
//         -- update penjualan
//         SELECT sum(total_harga_detail_jual) INTO sum_harga FROM penjualan_detail WHERE no_invoice = NEW.no_invoice;
//         UPDATE penjualan SET total_harga_jual = sum_harga WHERE no_invoice = NEW.no_invoice;

//         RETURN NULL; -- result is ignored since this is an AFTER trigger
//     END;
// $set_penjualan$ LANGUAGE plpgsql;

// CREATE TRIGGER set_penjualan
// AFTER INSERT OR UPDATE OR DELETE ON penjualan_detail
//     FOR EACH ROW EXECUTE FUNCTION update_penjualan();



// -- update total harga
// CREATE OR REPLACE FUNCTION update_harga() RETURNS TRIGGER AS $set_total_harga$
//     DECLARE
//         harga_jual_barang NUMERIC;
//     BEGIN
//         SELECT harga_jual_varian INTO harga_jual_barang FROM varian WHERE id_varian = NEW.id_varian;
//         NEW.harga_detail_jual := harga_jual_barang;
//         NEW.total_harga_detail_jual := NEW.qty * harga_jual_barang;
//         RETURN NEW;
//     END;
// $set_total_harga$ LANGUAGE plpgsql;

// CREATE TRIGGER set_total_harga
// BEFORE INSERT OR UPDATE ON penjualan_detail
//     FOR EACH ROW EXECUTE FUNCTION update_harga();

// v-------------------------------------------------------------------------------------------------------------------------Beli-------------------------------------------------------------------------------------------------------------------------v

// CREATE OR REPLACE FUNCTION update_pembelian() RETURNS TRIGGER AS $set_pembelian$
//     DECLARE
//     stok_lama INTEGER;
//     sum_harga NUMERIC;
//     BEGIN
//         IF (TG_OP = 'INSERT') THEN
//             --update stok
//             SELECT stok_varian INTO stok_lama FROM varian WHERE id_varian = NEW.id_varian;
//             UPDATE varian SET stok_varian = stok_lama + NEW.qty WHERE id_varian = NEW.id_varian;

//         ELSIF (TG_OP = 'UPDATE') THEN
//             --update stok
//             SELECT stok_varian INTO stok_lama FROM varian WHERE id_varian = NEW.id_varian;
//             UPDATE varian SET stok_varian = stok_lama - OLD.qty + NEW.qty WHERE id_varian = NEW.id_varian;
            
//         ELSIF (TG_OP = 'DELETE') THEN
//             --update stok
//             SELECT stok_varian INTO stok_lama FROM varian WHERE id_varian = NEW.id_varian;
//             UPDATE varian SET stok_varian = stok_lama - NEW.qty WHERE id_varian = NEW.id_varian;

//         END IF;
//         -- update pembelian
//         SELECT sum(total_harga_detail_beli) INTO sum_harga FROM pembelian_detail WHERE no_invoice = NEW.no_invoice;
//         UPDATE pembelian SET total_harga_beli = sum_harga WHERE no_invoice = NEW.no_invoice;

//         RETURN NULL; -- result is ignored since this is an AFTER trigger
//     END;
// $set_pembelian$ LANGUAGE plpgsql;

// CREATE TRIGGER set_pembelian
// AFTER INSERT OR UPDATE OR DELETE ON pembelian_detail
//     FOR EACH ROW EXECUTE FUNCTION update_pembelian();



// -- update total harga2
// CREATE OR REPLACE FUNCTION update_harga2() RETURNS TRIGGER AS $set_total_harga2$
//     DECLARE
//         harga_beli_barang NUMERIC;
//     BEGIN
//         SELECT harga_beli_varian INTO harga_beli_barang FROM varian WHERE id_varian = NEW.id_varian;
//         NEW.harga_detail_beli := harga_beli_barang;
//         NEW.total_harga_detail_beli := NEW.qty * harga_beli_barang;
//         RETURN NEW;
//     END;
// $set_total_harga2$ LANGUAGE plpgsql;

// CREATE TRIGGER set_total_harga2
// BEFORE INSERT OR UPDATE ON pembelian_detail
//     FOR EACH ROW EXECUTE FUNCTION update_harga2();