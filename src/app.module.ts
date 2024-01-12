import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { PrometheusModule } from './prometheus/prometheus.module'; 
import { PrometheusMiddleware } from './middlewares/prometheus.middleware'; 
import { MetricsController } from './metrics/metrics.controller'; 

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/your-db'),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console(),
        new DailyRotateFile({
          filename: 'logs/application-%DATE%.log',
          datePattern: 'YYYY-MM-DD-HH',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
        }),
      ],
    }),
    PrometheusModule, // Module pour Prometheus (si vous en avez créé un)
  ],
  controllers: [MetricsController], // Contrôleur pour exposer les métriques
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PrometheusMiddleware) // Middleware pour enregistrer les métriques
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
