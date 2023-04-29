import { Component, OnInit } from "@angular/core";
import { AbholungFormProviderService } from "../nav-items/abholung/services/abholung-form-provider.service";
import { ComponentsEnum } from "src/app/shared/models/components-enum.const";
import { UbergabeFormProviderService } from "../nav-items/geschaeftsstelle-übergabe/services/ubergabe-form-provider.service";
import { BestatigunsModelFactory } from "./factories/bestatigungs-model.factory";
import { BestatigungsModel } from "./models/bestatigungs.model";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-bestatigung',
    templateUrl: 'bestatigung.component.html',
    styleUrls: ['bestatigung.component.scss'],
})
export class BestatigungComponent implements OnInit
{
    public bestatigungFormGroup: FormGroup;
    public angabenZuBestatigung: BestatigungsModel; 

    constructor(
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _abholungFormProviderService: AbholungFormProviderService,
        private _ubergabeFormProviderService: UbergabeFormProviderService,
        private _bestatigungsModelFactory: BestatigunsModelFactory) { }

    ngOnInit(): void 
    {
        this.InitializeBestatigungsFormData();

        this.BuildForm();
    }


    private InitializeBestatigungsFormData(): void
    {
        switch(this._abholungFormProviderService.$ExecuterComponent)
        {
            case ComponentsEnum.Abholung:
            {
                let parentalComponentData = this._abholungFormProviderService.$Data;

                this.angabenZuBestatigung = this._bestatigungsModelFactory.Create(
                    parentalComponentData.KrisenGebiet,
                    parentalComponentData.KleidungsArt,
                    parentalComponentData.PostleitZahl,
                    parentalComponentData.AbholAdresse);

                break;
            }

            case ComponentsEnum.Ubergabe:
            {
                let parentalComponentData = this._ubergabeFormProviderService.$Data;

                this.angabenZuBestatigung = this._bestatigungsModelFactory.Create(
                    parentalComponentData.KrisenGebiet,
                    parentalComponentData.KleidungsArt);

                break;
            }

            default: 
            {
                break;
            } 
        }
    }

    private BuildForm(): void
    {
      this.bestatigungFormGroup = this._formBuilder.group(
        {
          abholAdresse: [this.angabenZuBestatigung.AbholAdresse],
          kleidungsArt: [this.angabenZuBestatigung.KleidungsArt],
          krisenGebiet: [this.angabenZuBestatigung.KrisenGebiet],
          postleitZahl: [this.angabenZuBestatigung.PostleitZahl]
        });
    }
}