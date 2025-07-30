import app from "./app";
import config from "./config/config";

app.listen(config.port, () => {
  console.log(
    `Server is brewing on port ${config.port}. Grab your chai and enjoy the code!`
  );
});
