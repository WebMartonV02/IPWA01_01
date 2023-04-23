import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AbholungsModel } from "./models/abholung.model";
import { Router } from "@angular/router";
import { CountryModel } from "src/app/shared/models/country.model";
import { ProvidedCountryNames } from "src/app/shared/countries.provider";
import { AbholungFormProviderService } from "./services/abholung-form-provider.service";

@Component({
    selector: 'app-abholung',
    templateUrl: 'abholung.component.html',
    styleUrls: ['abholung.component.scss'],
    providers: [AbholungFormProviderService]
})
export class AbholungCompnent implements OnInit
{
    public abholungFormGroup!: FormGroup;
    public countryNames: Array<CountryModel> = ProvidedCountryNames;

    private _abholungsModel: AbholungsModel = new AbholungsModel();

    constructor(
      private _formBuilder: FormBuilder,
      private _router: Router,
      private _abholungFormProviderService: AbholungFormProviderService) {}

    ngOnInit(): void 
    {
        this.BuildForm();
    }

    public NavigateToBestatigungPage(): void
    {
      this._abholungFormProviderService.SetData(this._abholungsModel);
      
      this._router.navigate(['/bestatigung']);
    }

    private BuildForm(): void
    {
      this.abholungFormGroup = this._formBuilder.group(
        {
          abholAdresse: [this._abholungsModel.AbholAdresse ,Validators.required],
          kleidungsArt: [this._abholungsModel.KleidungsArt ,Validators.required],
          krisenGebiet: [this._abholungsModel.KrisenGebiet, Validators.required],
          postleitZahl: [this._abholungsModel.PostleitZahl, Validators.required]
        });
    }
}