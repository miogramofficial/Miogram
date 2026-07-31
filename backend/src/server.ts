import { env } from "./config/env";
import app from "./app/app";
import { logger } from "./shared/logger/logger";

app.listen(env.port, () => {
  logger.info(
    `Miogram Backend running on http://localhost:${env.port}`
  );
});