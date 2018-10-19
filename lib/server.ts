import app from "./app";
import * as Path from "path";
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Express server listening on port" + PORT);
  console.log(Path.join(__dirname,"../config"));
})