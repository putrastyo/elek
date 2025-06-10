import winston, { format, transports } from "winston";

const { combine, colorize, json, timestamp } = format;

const logger = winston.createLogger({
  level: "info",
  format: combine(colorize(), timestamp(), json()),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ level, message }) => `${level}: ${message}`)
      ),
    }),
    new transports.File({ filename: "logs/apps.log" }),
    new transports.File({ filename: "logs/errors.log", level: "error" }),
  ],
});

export default logger;

// const logger = winston.createLogger({
//   level: "info",
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.File({ filename: "errors.log", level: "error" }),
//     new winston.transports.File({ filename: "apps.log" }),
//   ],
// });

// if (process.env.NODE_ENV !== "production") {
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.simple(),
//     })
//   );
// }

// export default logger;
