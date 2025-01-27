
const auth = async (Request, Response, next) => {
    const token = req.get("Authentication");

    try {
        const verified = await verifyToken(token, {
            secretKey: process.env.sk_test_5IVtvKdfRXKaZO9tcDVWNGt4X9vJ8hGwKJTBMTBBKP;
        });

        const UserID = verified.sub;

        req.UserID = UserID;
        next();
    } catch {
        res.json({status: "Forbidden"});
    };
};


app.get("/categories", auth, async (req, res) => {
    console.log(req.UserID);
    const data = fs.readFileSync("data/movies.txt", "UTF-8");
    const movies = JSON.parse(data);
    res.json(movies);
})