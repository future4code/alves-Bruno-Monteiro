import express from "express"
import cors from "cors"
import { products } from "./data"

const app = express()

app.use (express.json())
app.use (cors())

app.listen(3003, () => { 
    console.log("Server, is running in http://localhost:3003")
    })


app.get('/test', (req,res) => {
    res.send('The server is working');
  })


  app.put("/create", (req, res) => {
    try {
      const { name, price } = req.body;
  
      if(typeof(name) !== 'string'){
        res.statusCode = 404;
        throw new Error('Name must be a string!');
      }
      if(typeof(price) !== 'number'){
        res.statusCode = 404;
        throw new Error('Price must be a number!');
      }
      if(typeof(price) === 'number' && price <= 0){
        res.statusCode = 404;
        throw new Error('Price must be a number greater than 0!');
      }
  
      products.push({
        id: Date.now(),
        name: name,
        price: price
      });
      res.send(products);
  
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message })
    }
  })

 
app.get("/products", (req,res) => {
    res.status(200).send(products)
})


app.put("/editprice", (req, res) => {
    try {
      const { id, name, price } = req.body;
  
      if(!price && !name){
        res.statusCode = 404;
        throw new Error('No edited prices found!');
      }
      if(price && typeof(price) !== 'number'){
        res.statusCode = 404;
        throw new Error('Price must be a number!');
      }
      if(price && typeof(price) === 'number' && price <= 0){
        res.statusCode = 404;
        throw new Error('Price must be a number greater than 0!');
      }
      if(name && typeof(name) !== 'string'){
        res.statusCode = 404;
        throw new Error('Name must be a string!');
      }    
      if(typeof(id) !== 'number'){
        res.statusCode = 404;
        throw new Error('Id must be a number!');
      }
      const idExist = products.filter( (product:any) => {
        return product.id === id
      })
      if(!idExist.length) {
        res.statusCode = 404;
        throw new Error(`Not found product id registered`);
      }
  
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message })
    }
  })
  

app.delete("/delete/:id", (req, res) => {
    try {
      const id = Number(req.params.id);
  
      const getId = products.filter( (product:any) => {
        return product.id === id
      })
  
      if(!getId.length) {
        res.statusCode = 404;
        throw new Error(`Not found product id registered`);
      }
  
      const productList = products.filter( (product:any) => {
        return product.id !== id;
      })
  
      res.send(productList);
  
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message })
    }
  })
  
  app.listen(3003, () => console.log("Server running on port 3003"))

  