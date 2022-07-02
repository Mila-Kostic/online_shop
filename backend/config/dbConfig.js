const MONGO_PASS = 'mongodb';
const MONGODB_URL = 'mongodb+srv://Mila:${MONGO_PASS}<password>@cluster0.sc5vi.mongodb.net/?retryWrites=true&w=majority';
const mongooseOptions = {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

module.exports = {
    MONGO_PASS: MONGO_PASS,
    MONGODB_URL: MONGODB_URL,
    mongooseOptions: mongooseOptions
};