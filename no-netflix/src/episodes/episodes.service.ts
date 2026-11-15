import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class EpisodesService {
  private readonly apiUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private readonly httpService: HttpService) {}

  async findAll() {
    const { data } = await firstValueFrom(this.httpService.get(this.apiUrl));
    return data.results; // Devuelve el arreglo de episodios
  }

  async findOne(id: string) {
    const { data } = await firstValueFrom(this.httpService.get(`${this.apiUrl}/${id}`));
    
    // Extraer los IDs de los personajes que salen en este episodio para traer su info completa
    const characterIds = data.characters.map((url: string) => url.split('/').pop()).join(',');
    const charactersResponse = await firstValueFrom(
      this.httpService.get(`https://rickandmortyapi.com/api/character/${characterIds}`)
    );

    return {
      ...data,
      charactersDetail: Array.isArray(charactersResponse.data) 
        ? charactersResponse.data 
        : [charactersResponse.data],
    };
  }
}

