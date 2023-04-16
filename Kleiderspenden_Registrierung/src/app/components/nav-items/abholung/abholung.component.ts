import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AbholungsModel } from "./models/abholung.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-abholung',
    templateUrl: 'abholung.component.html',
    styleUrls: ['abholung.component.scss'],
})
export class AbholungCompnent implements OnInit
{
    public abholungFormGroup!: FormGroup;

    private _abholungsModel: AbholungsModel = new AbholungsModel();

    constructor(
      private _formBuilder: FormBuilder,
      private _router: Router) {}

    ngOnInit(): void 
    {
        this.BuildForm();
    }

    public NavigateToBestatigungPage(): void
    {
      this._router.navigate(['/bestatigung']);
    }

    private BuildForm(): void
    {
      this.abholungFormGroup = this._formBuilder.group(
        {
          abholAdresse: [this._abholungsModel.AbholAdresse ,Validators.required],
          kleidungsArt: [this._abholungsModel.KleidungsArt ,Validators.required],
          krisenGebiet: [this._abholungsModel.KrisenGebiet, Validators.required]
        });
    }
}