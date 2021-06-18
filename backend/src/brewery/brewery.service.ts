import { HttpService, Injectable } from "@nestjs/common";
import { Brewery } from "src/brewery/brewery.dto";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";

const baseEndpoint = "https://api.openbrewerydb.org/breweries";
const searchEndpoint = `${baseEndpoint}/search`;

@Injectable()
export class BreweryService {
    constructor(private httpService: HttpService) {}

    async findAll(pageNumber: number, searchText?: string): Promise<Brewery[]> {
        const endpoint = new URL(
            searchText != null ? searchEndpoint : baseEndpoint,
        );
        endpoint.searchParams.append("query", searchText);
        endpoint.searchParams.append("page", pageNumber.toString());
        const promise = await this._callApi<Array<Brewery>>(
            endpoint.toString(),
        );
        return promise.data;
    }

    async get(id: string): Promise<Brewery> {
        const promise = await this._callApi<Brewery>(`${baseEndpoint}/${id}`);
        return promise.data;
    }

    private _callApi<T>(endpoint: string): Promise<AxiosResponse<T>> {
        const res: Observable<AxiosResponse<T>> =
            this.httpService.get(endpoint);

        return res.toPromise();
    }
}
