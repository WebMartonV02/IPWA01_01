import { Component, Inject, OnInit } from "@angular/core";
import { AbholungsModel } from "./models/abholung.model";
import { Router } from "@angular/router";
import { CountryModel } from "src/app/shared/models/country.model";
import { ProvidedCountryNames } from "src/app/shared/countries.provider";
import { ComponentsEnum } from "src/app/shared/models/components-enum.const";
import { AbholungFormProviderService } from "./services/abholung-form-provider.service";
import { CommonComponentHandlerService } from "src/app/shared/common-component-handler.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: 'app-abholung',
    templateUrl: 'abholung.component.html',
    styleUrls: ['abholung.component.scss']
})
export class AbholungCompnent implements OnInit
{
    public countryNames: Array<CountryModel> = ProvidedCountryNames;
    public abholungsModel: AbholungsModel = new AbholungsModel();

    private _plzFromSessionStorage: string;

    constructor(
      private _router: Router,
      private _snackBarService: MatSnackBar,
      @Inject('abholungService') private _abholungsFormProviderService: AbholungFormProviderService,
      @Inject('commonComponentHandlerService') private _commonComponentHandlerService: CommonComponentHandlerService) {}

    ngOnInit(): void 
    {
      this._plzFromSessionStorage = sessionStorage.getItem('postleitZahl') as string;
    }
    
    public NavigateToBestatigungPage(): void
    {
      if(this.abholungsModel.PostleitZahl.toString().slice(0,2) == this._plzFromSessionStorage.slice(0,2))
      {
        this._abholungsFormProviderService.SetData(this.abholungsModel);
        this._commonComponentHandlerService.SetAncestorComponent(ComponentsEnum.Abholung);
        
        this._router.navigate(['/bestatigung']);
      }
      else
      {
        this._snackBarService.open('Bitte geben Sie eine andere Abholadresse ein. Die erste zwei Number des Postleitzahles muss mit "' + this._plzFromSessionStorage.slice(0,2) + '" identisch sein.', 'OK');
      }
    }
}