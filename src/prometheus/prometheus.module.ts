import { Module, Global } from '@nestjs/common';
import { PrometheusService } from './prometheus.service'; 
import { PrometheusController } from './prometheus.controller'; 
@Global()
@Module({
  controllers: [PrometheusController], // Incluez seulement si vous exposez des métriques via un endpoint
  providers: [PrometheusService], // Fournisseur de services pour gérer la logique de Prometheus
  exports: [PrometheusService], // Exportez si vous souhaitez utiliser le service dans d'autres modules
})
export class PrometheusModule {}
