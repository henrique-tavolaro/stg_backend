import { env } from "./main/config/env";
import app from "./main/server/config/app";


const port = Number(env.PORT)

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
})