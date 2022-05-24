import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MovieModule } from "./movie/movie.module";
import { DatabaseModule } from "./database/database.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost/anime"),
    AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}