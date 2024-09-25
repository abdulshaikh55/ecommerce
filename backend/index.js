const port = 4000;
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require('console');
const { type } = require('os');

app.use(express.json());
app.use(cors());

// Database Connection with MongoDB
mongoose.connect("mongodb+srv://faiz:faiz@cluster0.5p7tp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

// API CREATION

app.get("/", (req, res) => {
    res.send("Express App is Running");
})

// image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

// creating upload endpoint for images
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schema for creating products

const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    new_price: {
        type: Number,
        required: true,
    },

    old_price: {
        type: Number,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now,
    },

    available: {
        type: Boolean,
        default: true
    }

})

app.post('/addproduct', async (req, res) => {

    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    console.log(product);

    await product.save();
    console.log("Saved");

    res.json({
        success: true,
        name: req.body.name,
    })
})

// Creating API for deleting product
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed")
    res.json({
        success: true,
        name: req.body.name,
    })
})

// creating API for getting all products

app.get('/allproducts', async (req, res) => {
    let products = await Product.find({})
    console.log("All products fetched")
    res.send(products);
})


// Schema creating for user model

const Users = mongoose.model("Users", {
    name: {
        type: String,
    },

    email: {
        type: String,
        unique: true,
    },

    password: {
        type: String,
    },

    cartData: {
        type: Object,
    },

    date: {
        type: Date,
        default: Date.now,
    }
})

// Creating endpoint for registering the user
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body; // Extracting user data from request body
    const emailAlreadyExists = await Users.findOne({ email }); // Checking if email already exists

    if (emailAlreadyExists) {
        return res.status(400).json({ success: false, error: "Account with this email already exists" });
    }

    const cart = Array.from({ length: 300 }, (_, i) => i); // Creating an array of 300 elements with values from 0 to 299

    const user = new Users({
        name: username,
        email,
        password,
        cartData: cart,
    });

    await user.save(); // Saving the user to the database

    const tokenData = { user: { id: user.id } }; // Preparing token data
    const token = jwt.sign(tokenData, "secret_ecom"); // Signing the token

    res.json({ success: true, token }); // Sending the token back to the client
})

// Creating endpoint for user login

app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email })

    if (user) {
        const passCompare = req.body.password === user.password;

        if (passCompare) {
            const data = {
                user: {
                    id: user.id,
                }
            }

            const token = jwt.sign(data, "secret_ecom");
            res.json({ success: true, token });
        }
        else {
            res.json({ success: false, error: "Wrong password" })
        }
    } else {
        res.json({ success: false, error: "Wrong Email" })
    }
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
