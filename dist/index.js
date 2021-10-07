"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer_1 = __importDefault(require("puppeteer"));


var app = function () { return __awaiter(void 0, void 0, void 0, function () {
    var formURL, student, browser, page;
    var d; 
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                formURL = "https://forms.gle/n977HymsVPqnvDYM6";
                d = new Date()
                student = {
                    email:"197.hiepmanhdao@gmail.com",
                    name: "Đào Mạnh Hiệp",
                    phone: "0398796663",
                    work: "SISLAB",
                    hour_out: "17",
                    minute_out: "30",
                };
                return [4 /*yield*/, puppeteer_1.default.launch({
                        headless: false,
                        slowMo: 10,
                        devtools: false,
                    })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                return [4 /*yield*/, page.goto(formURL, { waitUntil: "networkidle2" })];
            case 3:
                _a.sent();
                return [4 /*yield*/, page.$$eval(".quantumWizTextinputPaperinputInputArea", function (arr) {
                        arr.forEach(function (e, i) {
                            var _a;
                            (_a = e.querySelector("input[type=text]")) === null || _a === void 0 ? void 0 : _a.classList.add("puppeteer-input-" + i);
                        });
                    })];
            case 4:
                _a.sent();
                return [4 /*yield*/, page.type(".puppeteer-input-0", "" + student.email)];
            case 5:
                _a.sent();
                return [4 /*yield*/, page.type(".puppeteer-input-1", "" + student.name)];
            case 6:
                _a.sent();
                return [4 /*yield*/, page.type(".puppeteer-input-2", "" + student.phone)];
            case 7:
                _a.sent();
                return [4 /*yield*/, page.type(".puppeteer-input-3", "" + student.work)];
            case 8:
                _a.sent();
                return [4 /*yield*/, page.type(".puppeteer-input-4", "" + d.getDate())];
            case 9:
                _a.sent();
                return [4 /*yield*/, page.type(".puppeteer-input-5", "" + d.getMonth())];
            case 10:
                _a.sent();
                return [4 /*yield*/, page.type(".puppeteer-input-6", "" + d.getFullYear())];
            case 11:
                _a.sent();
                return [4 /*yield*/, page.type(".puppeteer-input-7", "" + d.getHours())];
            case 12:
                _a.sent();
                return [4 /*yield*/, page.type(".puppeteer-input-8", "" + d.getMinutes())];
            case 13:
                _a.sent();
                return [4 /*yield*/, page.type(".puppeteer-input-9", "" + student.hour_out)];
            case 14:
                _a.sent();
                return [4 /*yield*/, page.type(".puppeteer-input-10", "" + student.minute_out)];
           
            case 15:
                _a.sent();
                return [4 /*yield*/, page.evaluate(function () {
                        var button = document.querySelector(".appsMaterialWizButtonPaperbuttonLabel");
                        button.click();
                    })];
            case 16:
                _a.sent();
                debugger;
                return [4 /*yield*/, browser.close()];
            case 17:
                _a.sent();
                console.log("Done! Data was sent.");
                return [2 /*return*/];
        }
    });
}); };
app();
//# sourceMappingURL=index.js.map
