import { DataProviderService } from "src/app/shared/data-provider.service";
import { GeschaftsstelleUbergabeModel } from "../models/geschaeftsstelle-ubergabe.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UbergabeFormProviderService extends DataProviderService<GeschaftsstelleUbergabeModel>
{
    constructor()
    {
        super();
    }
}