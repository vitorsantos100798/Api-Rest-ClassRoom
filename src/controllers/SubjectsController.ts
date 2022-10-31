import { Request, Response } from "express";
import { SubjectRepository } from "../repositories/subjectRepositories";

export class SubjectController {
  async create(req: Request, res: Response) {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is Require" });
    }

    try {
      const newSubject = SubjectRepository.create({ name });
      await SubjectRepository.save(newSubject);
      return res.status(201).json(newSubject);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
