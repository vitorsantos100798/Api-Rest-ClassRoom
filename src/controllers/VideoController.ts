import { Request, Response } from "express";
import { VideoRepository } from "../repositories/VideoRepository";

export class VideoController {
  create(req: Request, res: Response) {
    const { url, title } = req.body;
    const { id } = req.params;
    try {
      const newVideo = VideoRepository.create({ url, title });
      VideoRepository.save(newVideo);
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: "Internal Server Error" });
    }
  }
}
