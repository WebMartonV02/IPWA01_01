import { ComponentsEnum } from "./models/components-enum.const";

export class DataProviderService<TData>
{
    public $Data: TData;
    public $ExecuterComponent: ComponentsEnum;

    public SetData(parentalComponentData: TData): void
    {
        this.$Data = parentalComponentData;
    }

    public SetExecuterComponent(componentsEnum: ComponentsEnum): void
    {
        this.$ExecuterComponent = componentsEnum;
    }
}