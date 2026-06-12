const Product =
require("../models/productsSchema");
exports.createProduct = async(req,res)=>{

try{

    const product =
    await Product.create({

        ...req.body,

        createdBy:req.user._id

    });

    res.status(201).json(product);

}catch(error){

    res.status(500).json({
        error:error.message
    });
}
};

exports.getProducts =
async(req,res)=>{

try{

    const page =
    Number(req.query.page) || 1;

    const limit =
    Number(req.query.limit) || 10;

    const skip =
    (page - 1) * limit;

    let query = {};

    if(req.query.category){

        query.category =
        req.query.category;
    }

    if(req.query.brand){

        query.brand =
        req.query.brand;
    }

    const products =
    await Product.find(query)
    .skip(skip)
    .limit(limit);

    res.json(products);

}catch(error){

    res.status(500).json({
        error:error.message
    });
}
};

exports.getProduct =
async(req,res)=>{

try{

    const product =
    await Product.findById(
        req.params.id
    );

    if(!product){

        return res.status(404)
        .json({
            message:"Product not found"
        });
    }

    res.json(product);

}catch(error){

    res.status(500).json({
        error:error.message
    });
}
};

exports.searchProducts =
async(req,res)=>{

try{

    const keyword =
    req.query.q;

if(!keyword){

    return res.status(400)
    .json({
        message:
        "Search keyword required"
    });
}

    const products =
    await Product.find({

        $text:{
            $search:keyword
        }

    });

    res.json(products);

}catch(error){

    res.status(500).json({
        error:error.message
    });
}
};

exports.updateProduct =
async(req,res)=>{

try{

    const product =
    await Product.findByIdAndUpdate(

        req.params.id,

        req.body,

        {
            new:true
        }

    );

if(!product){

    return res.status(404)
    .json({
        message:"Product not found"
    });
}

res.json(product);

}catch(error){

    res.status(500).json({
        error:error.message
    });
}
};

exports.deleteProduct =
async(req,res)=>{

try{

    const product =
await Product.findByIdAndDelete(
    req.params.id
);

if(!product){

    return res.status(404)
    .json({
        message:"Product not found"
    });
}

res.json({
    message:"Product deleted"
});

}catch(error){

    res.status(500).json({
        error:error.message
    });
}
};