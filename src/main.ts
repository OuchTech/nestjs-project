import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import * as morgan from 'morgan';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration de Winston
  const winstonLogger = winston.createLogger({
    level: 'info', // Le niveau le plus bas, pour enregistrer tous les niveaux de logs
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: [
      new DailyRotateFile({
        filename: 'logs/application-%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d'
      }),
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
    ],
  });

  const stream = {
    write: (message: string) => {
      winstonLogger.http(message.trim());
    },
  };

  app.use(morgan('combined', { stream }));

  app.useLogger(winstonLogger);

  await app.listen(3000);
}
bootstrap();
