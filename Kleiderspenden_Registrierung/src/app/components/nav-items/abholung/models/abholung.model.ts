import { BaseSpendungModel } from "src/app/shared/models/base-spendung.model";

export class AbholungsModel extends BaseSpendungModel 
{
    public AbholAdresse: string;
    public PostleitZahl: number;
}