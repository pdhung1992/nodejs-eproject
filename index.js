const express = require("express");
const app = express();
const PORT = process.env.PORT || 5555;

const configDB = {
    host: 'localhost',
    // host: '139.180.186.20',
    port: 3306,
    user: 'root',
    // user: 'demo',
    password: '',
    // password: 's(20A5Q.Mvk(bvoP',
    database: 'demo_s1',
    multipleStatements: true
};
const mysql = require("mysql");
const conn = mysql.createConnection(configDB);

app.listen(PORT, function () {
    console.log("Server is running...");
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/", function (req, res) {
    res.send("hello world");
});

app.get("/api/group5_products", function (req, res) {
    var sql = "select * from group5_products";
    conn.query(sql, function (err, data){
        if(err) res.send("404 not found");
        else res.send(data);
    })
});
app.get("/api/group5_products/detail", function (req, res) {
    var id = req.query.id;
    var sql = `select * from group5_products where id = ${id}`;
    conn.query(sql, function (err, data){
        if(err) res.send(err);
        else if(data.length >0)
            res.send(data[0]);
        else res.send ("404 not found");
    })
});
app.get("/api/group5_products/category", function (req, res) {
    var cat = req.query.name;
    var sql = `select * from group5_products where category_id = '${cat}'`;
    conn.query(sql, function (err, data){
        if(err) res.send("404 not found");
        else res.send(data);
    })
});
app.get("/api/group5_products/search", function (req, res) {
    var name = req.query.name;
    var sql = `select * from group5_products where name like '%${name}%'`;
    conn.query(sql, function (err, data){
        if(err) res.send("404 not found");
        else res.send(data);
    })
});
app.get("/api/group5_categories", function (req, res) {
    var sql = "select * from group5_categories";
    conn.query(sql, function (err, data){
        if(err) res.send("404 not found");
        else res.send(data);
    })
});
app.get("/api/group5_categories/detail", function (req, res) {
    var id = req.query.id;
    var sql = `select * from group5_categories where id ='${id}'`;
    conn.query(sql, function (err, data){
        if(err) res.send(err);
        else if(data.length >0)
            res.send(data[0]);
        else res.send ("404 not found");
    })
});

app.get("/api/group5_vendors", function (req, res) {
    var sql = "select * from group5_vendors";
    conn.query(sql, function (err, data){
        if(err) res.send("404 not found");
        else res.send(data);
    })
});
app.get("/api/group5_vendors/detail", function (req, res) {
    var id = req.query.id;
    var sql = `select * from group5_vendors where id ='${id}'`;
    conn.query(sql, function (err, data){
        if(err) res.send(err);
        else if(data.length >0)
            res.send(data[0]);
        else res.send ("404 not found");
    })
});
app.get("/api/group5_products/vendor", function (req, res) {
    var vdr = req.query.name;
    var sql = `select * from group5_products where vendor_id = '${vdr}'`;
    conn.query(sql, function (err, data){
        if(err) res.send("404 not found");
        else res.send(data);
    })
});
app.get("/api/group5_users", function (req, res) {
    var sql = "select * from group5_users";
    conn.query(sql, function (err, data){
        if(err) res.send("404 not found");
        else res.send(data);
    })
});
app.get("/api/group5_histories", function (req, res) {
    var sql = "select * from group5_histories";
    conn.query(sql, function (err, data){
        if(err) res.send("404 not found");
        else res.send(data);
    })
});
app.get("/api/group5_images", function (req, res) {
    var sql = "select * from group5_images";
    conn.query(sql, function (err, data){
        if(err) res.send("404 not found");
        else res.send(data);
    })
});
app.get("/api/group5_carts", function (req, res) {
    var sql = "select * from group5_carts";
    conn.query(sql, function (err, data){
        if(err) res.send("404 not found");
        else res.send(data);
    })
});
app.get("/api/group5_wishlist", function (req, res) {
    var sql = "select * from group5_wishlist";
    conn.query(sql, function (err, data){
        if(err) res.send("404 not found");
        else res.send(data);
    })

});

