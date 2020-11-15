import { Router, Request, Response } from "express";
import { Usuario } from "../models/userModel";

const userRoutes = Router();

userRoutes.get("/", async (req: any, res: Response) => {
  try {
    const users = await Usuario.find({}).exec();
    return res.status(200).json({
      ok: true,
      mensaje: "Todo funciona bien",
      users,
    });
  } catch (error) {
    console.log(error);
  }
});

userRoutes.post("/create", async (req: Request, res: Response) => {
  try {
    const { nombre, email, empresa, telefono, categoria, mjs } = req.body;
    const user = {
      nombre,
      email,
      empresa,
      telefono,
      categoria,
      mjs
    };
    const userCreated = await Usuario.create(user);
    return res.status(201).json({
      ok: true,
      message: "user guardado",
      userCreated,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Faltan datos por enviar",
    });
  }
});

export default userRoutes;
