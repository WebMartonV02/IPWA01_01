import { DataProviderService } from "src/app/shared/data-provider.service";
import { GeschaftsstelleUbergabeModel } from "../models/geschaeftsstelle-ubergabe.model";

export class UbergabeFormProviderService extends DataProviderService<GeschaftsstelleUbergabeModel>
{
    constructor()
    {
        super();
    }
}