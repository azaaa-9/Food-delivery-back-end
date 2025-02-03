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
const auth = (Request, Response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.get("Authentication");
    try {
        const verified = yield verifyToken(token, {
            secretKey: process.env.sk_test_5IVtvKdfRXKaZO9tcDVWNGt4X9vJ8hGwKJTBMTBBKP
        });
        const UserID = verified.sub;
        Request.UserID = UserID;
        next();
    }
    catch (_a) {
        Response.json({ status: "Forbidden" });
    }
    ;
});
app.get("/categories", auth, (Request, Response) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.UserID);
    const data = fs.readFileSync("data/movies.txt", "UTF-8");
    const movies = JSON.parse(data);
    res.json(movies);
}));
