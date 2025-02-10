import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ products });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
};
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    // res.send(`${product.name} : ${product.price}`);
    res.send(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
};
export const postProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(200).json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
};
export const putProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.json({ updatedProduct });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({ message: "product not found" });
    }
    res.json({ message: "Product deleted" });
  } catch (err) {
    console.error(err.message);
    res.json({ message: err.message });
  }
};
