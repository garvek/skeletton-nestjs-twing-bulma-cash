import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { TwingEnvironment, TwingLoaderFilesystem } from 'twing';
import { AppModule } from './app.module';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const loader = new TwingLoaderFilesystem('templates');
  const twing = new TwingEnvironment(loader, { strict_variables: true });

  app.engine('twig', (filePath, options, callback) => {
    twing
      .render(path.relative('templates', filePath), options)
      .then((output) => {
        return callback(null, output);
      });
  });
  app.setBaseViewsDir('templates');
  app.setViewEngine('twig');
  await app.listen(3000);
}
bootstrap();
