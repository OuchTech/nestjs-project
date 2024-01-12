import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrometheusService } from '../services/prometheus.service';

@Injectable()
export class PrometheusMiddleware implements NestMiddleware {
  constructor(private readonly prometheusService: PrometheusService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const start = process.hrtime();

    res.on('finish', () => {
      const duration = process.hrtime(start);
      const responseTimeInSeconds = duration[0] + duration[1] / 1e9;
      this.prometheusService.recordResponseTime(responseTimeInSeconds);

      if (res.statusCode >= 400) {
        this.prometheusService.incrementHttpErrorCounter();
      }
    });

    this.prometheusService.incrementHttpRequestCounter();
    next();
  }
}
