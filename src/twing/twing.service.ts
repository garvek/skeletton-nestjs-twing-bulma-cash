import { Injectable } from '@nestjs/common';
import { TwingEnvironment, TwingLoaderFilesystem } from 'twing';

@Injectable()
export class TwingService {
  private loader: TwingLoaderFilesystem;
  private twing: TwingEnvironment;

  constructor() {
    this.loader = new TwingLoaderFilesystem('./templates');
    this.twing = new TwingEnvironment(this.loader, { strict_variables: true });
  }

  render(name: string, context: object | null): Promise<string> {
    return this.twing.render(name, context);
  }
}
