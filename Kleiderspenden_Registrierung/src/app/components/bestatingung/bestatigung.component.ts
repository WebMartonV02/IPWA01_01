import { Component, Inject, OnInit } from "@angular/core";
import { ComponentsEnum } from "src/app/shared/models/components-enum.const";
import { BestatigunsModelFactory } from "./factories/bestatigungs-model.factory";
import { BestatigungsModel } from "./models/bestatigungs.model";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { CountryModel } from "src/app/shared/models/country.model";
import { ProvidedCountryNames } from "src/app/shared/countries.provider";
import { AbholungFormProviderService } from "../nav-items/abholung/services/abholung-form-provider.service";
import { CommonComponentHandlerService } from "src/app/shared/common-component-handler.service";
import { UbergabeFormProviderService } from "../nav-items/geschaeftsstelle-übergabe/services/ubergabe-form-provider.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: 'app-bestatigung',
    templateUrl: 'bestatigung.component.html',
    styleUrls: ['bestatigung.component.scss'],
})
export class BestatigungComponent implements OnInit
{
    public bestatigungFormGroup: FormGroup;
    public angabenZuBestatigung: BestatigungsModel = new BestatigungsModel(); 
    public countryNames: Array<CountryModel> = ProvidedCountryNames;

    constructor(
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _bestatigungsModelFactory: BestatigunsModelFactory,
        private _snackBarService: MatSnackBar,
        @Inject('abholungService') private _abholungFormProviderService: AbholungFormProviderService,
        @Inject('ubergabeService') private _ubergabeFormProviderService: UbergabeFormProviderService,
        @Inject('commonComponentHandlerService') private _commonComponentHandlerService: CommonComponentHandlerService) { }

    ngOnInit(): void 
    {
        this.InitializeBestatigungsFormData();

        this.BuildForm();

        this._snackBarService.open('Bitte überprüfen Sie die eingegebene Angaben!', 'OK', { duration: 2000 });
    }

    private InitializeBestatigungsFormData(): void
    {
        switch(this._commonComponentHandlerService.GetAncestorComponent())
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

    public OnPressForWardToTheStartingPage(): void
    {
        this._router.navigate(['']);
    }

    private BuildForm(): void
    {
      this.bestatigungFormGroup = this._formBuilder.group(
        {
          abholAdresse: [{ value: this.angabenZuBestatigung.AbholAdresse, disabled: true }],
          kleidungsArt: [{ value: this.angabenZuBestatigung.KleidungsArt, disabled: true }],
          krisenGebiet: [{ value: this.angabenZuBestatigung.KrisenGebiet, disabled: true }],
          postleitZahl: [{ value: this.angabenZuBestatigung.PostleitZahl, disabled: true }],
        });
    }
}