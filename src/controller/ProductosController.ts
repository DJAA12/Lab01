import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Productos } from '../entity/Productos';

class ProductosController {

  static getAll = async (req: Request, res: Response) => {
    try {
      const repositorioProductos = AppDataSource.getRepository(Productos);
      const productos = await repositorioProductos.find();
      return res.status(200).json(productos);
    } catch (error) {
      console.warn("Error al obtener productos:", error.message);
      return res.status(500).json({ mensaje: "Error al obtener los productos", error: error.message });
    }
  };

  static create = async (req: Request, res: Response) => {
    try {
      const repositorioProductos = AppDataSource.getRepository(Productos);
      const nuevoProducto = repositorioProductos.create(req.body);
      const productoGuardado = await repositorioProductos.save(nuevoProducto);
      return res.status(201).json(productoGuardado);
    } catch (error) {
      console.warn("Error al crear un producto:", error.message);
      return res.status(500).json({ mensaje: "Error al crear un nuevo producto", error: error.message });
    }
  };
}

export default ProductosController;
