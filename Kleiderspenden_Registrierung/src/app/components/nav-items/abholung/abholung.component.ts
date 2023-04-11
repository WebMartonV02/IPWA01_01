import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: 'app-abholung',
    templateUrl: 'abholung.component.html',
    styleUrls: ['abholung.component.scss'],
})
export class AbholungCompnent implements OnInit
{
    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit(): void 
    {
        this.BuildForm();
    }

    private BuildForm(): void
    {
        
    }
}