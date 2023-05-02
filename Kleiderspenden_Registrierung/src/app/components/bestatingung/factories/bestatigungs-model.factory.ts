import { Injectable } from "@angular/core";
import { BestatigungsModel } from "../models/bestatigungs.model";

@Injectable()
export class BestatigunsModelFactory
{
    public Create(
        krisenGebiet: string,
        kleidungsArt: string,
        plz?: number,
        abholAdresse?: string
    ): BestatigungsModel
    {
        let result = new BestatigungsModel();

        result.KrisenGebiet = krisenGebiet;
        result.KleidungsArt = kleidungsArt;

        if(plz && abholAdresse)
        {
            result.PostleitZahl = plz;
            result.AbholAdresse = abholAdresse;
        }

        return result;
    }
}