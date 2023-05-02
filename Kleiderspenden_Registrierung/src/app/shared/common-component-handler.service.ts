import { ComponentsEnum } from "./models/components-enum.const";

export class CommonComponentHandlerService
{
    private AncestorComponent$: ComponentsEnum;

    public SetAncestorComponent(ancestorComponent: ComponentsEnum): void
    {
        this.AncestorComponent$ = ancestorComponent;
    }

    public GetAncestorComponent(): ComponentsEnum
    {
        return this.AncestorComponent$;
    }
}