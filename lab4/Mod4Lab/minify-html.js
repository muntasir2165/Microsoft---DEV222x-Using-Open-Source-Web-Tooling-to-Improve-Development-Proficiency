var tidy = require('htmltidy').tidy;
var html = '<!DOCTYPE html><html lang="en-US"><head><meta charset="utf-8"><title>Simple Page<link rel="stylesheet" href="styles.css"></head><body><h1>This is a very simple page</h1><img src=./temp.png></body></html>';
tidy(html, function(err, html) { console.log(html); });