import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";
import { VideoRepository } from "../repositories/VideoRepository";

export class RoomController {
  async create(req: Request, res: Response) {
    const { description, name } = req.body;

    try {
      const newroom = roomRepository.create({ name, description });
      await roomRepository.save(newroom);
      return res.status(201).json({ message: "Element create Sucesfull!" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async createVideo(req: Request, res: Response) {
    const { title, url } = req.body;
    const { idRoom } = req.params;

    try {
      const room = await roomRepository.findOneBy({ id: Number(idRoom) });
      if (!room) {
        return res.status(404).json({ message: "Aula não existe" });
      }
      const newVideo = VideoRepository.create({
        title,
        url,
        room,
      });
      await VideoRepository.save(newVideo);
      return res.status(201).json(newVideo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
