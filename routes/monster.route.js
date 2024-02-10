// Create the express router to handle our products requests
import express from "express";

const router = express.Router();


// Need to implement the following:
// get/ => return all monsters (array of objects)
// get/id => return 1 specific monster (an object)
// patch/id => return 200 (return the object) or return 202 (return nothing)
// post/ => return 200 and the new object
// delete/id => return 204 (return nothing)


// Remove or rewrite everything below
router.get("/", function (req, res) {
    try {
        
    } catch (error) {
        res.status(500).send(error.message)
    }
    res.send("On this call we show a list of products");
});

router.get("/:id", function (req, res) {
    res.send(`On this call we show a product of ${req.params.id}`);
});

router.post("/", function (req, res) {
    res.send(`On this call we create a product`);
});

router.put("/:id", function (req, res) {
    res.send("On this call we update a product");
});

router.delete("/:id", function (req, res) {
    res.send("On this call we delete a product");
});

export default router;
