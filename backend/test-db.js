const mongoose = require('mongoose');

// Paste the Cloud URI directly here to test
const uri = "mongodb+srv://admin_tanmay:Tanmay12345@cluster0.dp9dkot.mongodb.net/indianbrassmurti?appName=Cluster0";

console.log("Testing connection to Atlas...");

mongoose.connect(uri)
    .then(() => {
        console.log("✅ SUCCESS: Connected to MongoDB Atlas!");
        process.exit(0);
    })
    .catch((err) => {
        console.error("❌ FAILED: Connection Error");
        console.error(err);
        process.exit(1);
    });
