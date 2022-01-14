import app from './app';
import { PORT } from './config/settings.config';
import logger from './config/logger.config';

app.then((express) => {
  express.listen(PORT, () => {
    logger(`Express server listening on port ${PORT}`);
  });
});
