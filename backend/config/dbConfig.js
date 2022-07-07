const MONGO_PASS = 'app1234';
const MONGODB_URL = `mongodb+srv://Mila:${MONGO_PASS}@cluster0.sc5vi.mongodb.net/?retryWrites=true&w=majority`;
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


//backend setup and login API