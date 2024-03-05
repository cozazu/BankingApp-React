import {AppDataSource} from "./config/data-source";
import { PORT } from "./config/envs";
import "reflect-metadata"
import server from "./server";

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected...")
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })    
    .catch((error) => console.log(error));
    
