import config from "./config";
import server from "./server";
import websockets from "./websockets";

websockets.attach(server);

server.listen(config.PORT, config.HOST, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://${config.HOST}:${config.PORT}`);
});
