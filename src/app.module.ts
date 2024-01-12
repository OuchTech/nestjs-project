import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfig } from './config/mongodb.config';
import { User } from './users/user.schema';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

// Exemple de module fictif. Remplacez-le par les modules réels de votre application.
@Module({
  controllers: [], // Controllers pour le module fictif
  providers: [],   // Services pour le module fictif
})
export class ExampleModule {}

// Module principal de l'application
@Module({
  imports: [
    MongooseModule.forRoot(MongoConfig.uri), // Connexion à MongoDB
    ExampleModule,   
    PostsModule,
    MongooseModule.forRoot(MongoConfig.uri),
    UsersModule// Module d'exemple
  ],

  
  controllers: [], // Controllers globaux, si nécessaire
  providers: [],   // Services globaux, si nécessaire
})
export class AppModule {}
