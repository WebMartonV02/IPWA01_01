import { DataProviderService } from "src/app/shared/data-provider.service";
import { AbholungsModel } from "../models/abholung.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AbholungFormProviderService extends DataProviderService<AbholungsModel>
{
    constructor()
    {
        super();
    }
}