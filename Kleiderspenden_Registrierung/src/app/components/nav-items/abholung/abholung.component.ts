import { Component, Inject, OnInit } from "@angular/core";
import { AbholungsModel } from "./models/abholung.model";
import { Router } from "@angular/router";
import { CountryModel } from "src/app/shared/models/country.model";
import { ProvidedCountryNames } from "src/app/shared/countries.provider";
import { ComponentsEnum } from "src/app/shared/models/components-enum.const";
import { AbholungFormProviderService } from "./services/abholung-form-provider.service";
import { CommonComponentHandlerService } from "src/app/shared/common-component-handler.service";

@Component({
    selector: 'app-abholung',
    templateUrl: 'abholung.component.html',
    styleUrls: ['abholung.component.scss']
})
export class AbholungCompnent
{
    public countryNames: Array<CountryModel> = ProvidedCountryNames;
    public abholungsModel: AbholungsModel = new AbholungsModel();

    constructor(
      private _router: Router,
      @Inject('abholungService') private _abholungsFormProviderService: AbholungFormProviderService,
      @Inject('commonComponentHandlerService') private _commonComponentHandlerService: CommonComponentHandlerService) {}

    public NavigateToBestatigungPage(): void
    {
      this._abholungsFormProviderService.SetData(this.abholungsModel);
      this._commonComponentHandlerService.SetAncestorComponent(ComponentsEnum.Abholung);
      
      this._router.navigate(['/bestatigung']);
    }
}