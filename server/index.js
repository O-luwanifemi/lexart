import app from './server.js';
import { dbConnection } from './src/database/db.js';
const port = process.env.PORT || 8500;

dbConnection.getConnect();

app.listen(port, () => {
    console.log(`Server connected at http://localhost:${port}`);
});