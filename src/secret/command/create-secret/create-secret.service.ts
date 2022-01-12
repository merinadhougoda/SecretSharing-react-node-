import { CreateSecret } from 'secret/command/create-secret/create-secret';
import { db } from 'database';
import { bcryptService } from 'common';

export class CreateSecretService {
  public async execute(data: CreateSecret): Promise<void> {
    if(data.password){
      await db('secrets').insert({
        id: data.id,
        body: data.body,
        password: await bcryptService.hash(data.password),
        expiresIn: data.expiresIn,
      });
    }
    else{
      await db('secrets').insert({
        id: data.id,
        body: data.body,
        expiresIn: data.expiresIn,
    })
    }
}
}

 