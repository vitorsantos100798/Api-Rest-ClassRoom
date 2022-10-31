import { Router } from "express";
import { RoomController } from "./controllers/RoomController";

import { SubjectController } from "./controllers/SubjectsController";
const routes = Router();

routes.post("/subject", new SubjectController().create);
routes.post("/room", new RoomController().create);
routes.post("/room/:idroom/create", new RoomController().createVideo);

export default routes;
