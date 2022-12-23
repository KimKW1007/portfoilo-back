import dotenv from "dotenv";
import {app} from "./src/app.js";
const PORT = process.env.SERVER_PORT || 5000;
dotenv.config();

app.listen(PORT, () => {
  console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);
});
