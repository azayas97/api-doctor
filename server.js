/** ===========================
 * Test-API / Server.js
 * 
 * 
 * Created by Antonio Zayas 
 * https://github.com/azayas97
 * 
 * 
 * Features in this basic API:
 *  - API without database models/support.
 *  - Users CRUD with file upload.
 *  - Simple Doctors CRUD.
 * 
 * If you have any suggestion for this
 * API feel free to let me know!
 * 
 ============================ */

const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

// File upload
app.use(fileUpload());

// Static folder
app.use(express.static(__dirname +'/assets'));

// Routes
require('./routes/doctor.route')(app);
require('./routes/user.route')(app);

// You know what this is.
app.listen(process.env.PORT || 3000, () => {
    console.log('\n===============================\n  NodeJS Running on port ' + process.env.PORT + '\n===============================\n\nBrought you by Antonio Zayas!\nGithub: https://github.com/azayas97\n');
})