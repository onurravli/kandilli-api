"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var chalk_1 = __importDefault(require("chalk"));
var app = (0, express_1["default"])();
var port = 3000 || process.env.PORT;
app.get('/', function (req, res) {
    res.send(chalk_1["default"].underline('Kandilli Rasathanesi Unofficial API Servisi\n'));
});
app.listen(port, function () {
    console.log("API servisi http://localhost:".concat(port, " adresinde calisiyor."));
});
