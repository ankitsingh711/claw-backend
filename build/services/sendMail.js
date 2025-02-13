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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendMail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "rosella91@ethereal.email",
            pass: "3uXJ7qyzuxPY8zPZYq",
        },
    });
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield transporter.sendMail({
                from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
                to: email,
                subject: "Hello ✔",
                text: "Hello world?",
                html: "<b>Hello world?</b>",
            });
            console.log("Message sent: %s", info.messageId);
        });
    }
    main().catch(console.error);
});
exports.sendMail = sendMail;
//# sourceMappingURL=sendMail.js.map