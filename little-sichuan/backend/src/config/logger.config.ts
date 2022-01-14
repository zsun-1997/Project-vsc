import logger from 'debug';
import { DEBUG } from './settings.config';

/**
 * Enabled dynamically, avoids complicated cross-platforms issues
 */
if (DEBUG) logger.enable(DEBUG);

/**
 * Exports a 'debug' logger, configured to log to the 'app' namespace
 * Also provides a global method for all logging, for opportunities to push logs elsewhere
 */
export default logger(DEBUG);
