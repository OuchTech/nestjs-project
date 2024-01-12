import { Injectable } from '@nestjs/common';
import { Counter, Histogram } from 'prom-client';

@Injectable()
export class PrometheusService {
  readonly httpRequestCounter: Counter<string>;
  readonly httpRequestDuration: Histogram<string>;
  readonly httpErrorCounter: Counter<string>;

  constructor() {
    this.httpRequestCounter = new Counter({
      name: 'http_requests_total',
      help: 'Total number of HTTP requests',
    });

    this.httpRequestDuration = new Histogram({
      name: 'http_request_duration_seconds',
      help: 'Duration of HTTP requests in seconds',
      buckets: [0.1, 0.5, 1, 5, 10],
    });

    this.httpErrorCounter = new Counter({
      name: 'http_errors_total',
      help: 'Total number of HTTP errors',
    });
  }

  incrementHttpRequestCounter() {
    this.httpRequestCounter.inc();
  }

  recordResponseTime(duration: number) {
    this.httpRequestDuration.observe(duration);
  }

  incrementHttpErrorCounter() {
    this.httpErrorCounter.inc();
  }
}
