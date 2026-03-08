import { formatAsDate } from "./formatters";

export const getDateTime = () => formatAsDate(new Date(), true);

export const logger = {
  log: (...message: any[]) => {
    setTimeout(() => console.log(`[${getDateTime()}]`, ...message));
  },
  info: (...message: any[]) => {
    setTimeout(() => console.info(`[${getDateTime()}]`, ...message));
  },
  warn: (...message: any[]) => {
    setTimeout(() => console.warn(`[${getDateTime()}]`, ...message));
  },
  error: (...message: any[]) => {
    setTimeout(() => {
      console.error(`[${getDateTime()}]`, ...message);
    });
  },
};
