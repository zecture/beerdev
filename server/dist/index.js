"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// Constants
const PORT = 8080;
// reverse HOST for docker image
// const HOST = '0.0.0.0';
app.get("/", (req, res) => {
    res.send("PENIS");
});
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    // console.log( `FOR NUDES -> http://localhost:${ PORT }` );
});
//# sourceMappingURL=index.js.map