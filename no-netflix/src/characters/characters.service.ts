import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CharactersService {
  private readonly apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private readonly httpService: HttpService) {}

  async findAll() {
    const { data } = await firstValueFrom(this.httpService.get(this.apiUrl));
    return data.results;
  }

  async findOne(id: string) {
    const { data } = await firstValueFrom(this.httpService.get(`${this.apiUrl}/${id}`));
    return data;
  }
}
