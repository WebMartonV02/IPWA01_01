import { DataProviderService } from "src/app/shared/data-provider.service";
import { AbholungsModel } from "../models/abholung.model";

export class AbholungFormProviderService extends DataProviderService<AbholungsModel>
{
    constructor()
    {
        super();
    }
}