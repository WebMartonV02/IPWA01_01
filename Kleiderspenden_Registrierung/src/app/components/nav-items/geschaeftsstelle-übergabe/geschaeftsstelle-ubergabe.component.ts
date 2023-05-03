import { Component, Inject } from "@angular/core";
import { CountryModel } from "src/app/shared/models/country.model";
import { GeschaftsstelleUbergabeModel } from "./models/geschaeftsstelle-ubergabe.model";
import { ComponentsEnum } from "src/app/shared/models/components-enum.const";
import { Router } from "@angular/router";
import { ProvidedCountryNames } from "src/app/shared/countries.provider";
import { UbergabeFormProviderService } from "./services/ubergabe-form-provider.service";
import { CommonComponentHandlerService } from "src/app/shared/common-component-handler.service";

@Component({
    selector: 'app-ubergabe',
    templateUrl: 'geschaeftsstelle-ubergabe.component.html',
    styleUrls: ['geschaeftsstelle-ubergabe.component.scss']
})
export class UbergabeComponent
{
    public countryNames: Array<CountryModel> = ProvidedCountryNames;
    public geschaftsstelleUbergabeModel: GeschaftsstelleUbergabeModel = new GeschaftsstelleUbergabeModel();

    constructor(
      private _router: Router,
      @Inject('ubergabeService') private _ubergabeFormProviderService: UbergabeFormProviderService,
      @Inject('commonComponentHandlerService') private _commonComponentHandlerService: CommonComponentHandlerService) {}

    public NavigateToBestatigungPage(): void
    {
      this._ubergabeFormProviderService.SetData(this.geschaftsstelleUbergabeModel);
      this._commonComponentHandlerService.SetAncestorComponent(ComponentsEnum.Ubergabe);

      this._router.navigate(['/bestatigung']);
    }
}