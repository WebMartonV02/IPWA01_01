import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CountryModel } from "src/app/shared/models/country.model";
import { GeschaftsstelleUbergabeModel } from "./models/geschaeftsstelle-ubergabe.model";
import { ComponentsEnum } from "src/app/shared/models/components-enum.const";
import { Router } from "@angular/router";
import { ProvidedCountryNames } from "src/app/shared/countries.provider";
import { UbergabeFormProviderService } from "./services/ubergabe-form-provider.service";

@Component({
    selector: 'app-ubergabe',
    templateUrl: 'geschaeftsstelle-ubergabe.component.html',
    styleUrls: ['geschaeftsstelle-ubergabe.component.scss'],
    providers: [UbergabeFormProviderService]
})
export class UbergabeComponent implements OnInit
{
    public ubergabeFormGroup!: FormGroup;
    public countryNames: Array<CountryModel> = ProvidedCountryNames;

    private _geschaftsstelleUbergabeModel: GeschaftsstelleUbergabeModel = new GeschaftsstelleUbergabeModel();

    constructor(
      private _formBuilder: FormBuilder,
      private _router: Router,
      private _ubergabeFormProviderService: UbergabeFormProviderService) {}

    ngOnInit(): void 
    {
        this.BuildForm();
    }

    public NavigateToBestatigungPage(): void
    {
      this._ubergabeFormProviderService.SetData(this._geschaftsstelleUbergabeModel);
      this._ubergabeFormProviderService.SetExecuterComponent(ComponentsEnum.Ubergabe);
      
      this._router.navigate(['/bestatigung']);
    }
    

    private BuildForm(): void
    {
      this.ubergabeFormGroup = this._formBuilder.group(
        {
          kleidungsArt: [this._geschaftsstelleUbergabeModel.KleidungsArt ,Validators.required],
          krisenGebiet: [this._geschaftsstelleUbergabeModel.KrisenGebiet, Validators.required],
        });
    }
}