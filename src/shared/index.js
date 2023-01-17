const express =  require("express");
const cors =  require("cors");

const routers =  require("../modules/student/routes/student.routes.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routers);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
