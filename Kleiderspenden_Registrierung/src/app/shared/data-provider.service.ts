export class DataProviderService<TData>
{
    public $Data: TData;

    public SetData(parentalComponentData: TData): void
    {
        this.$Data = parentalComponentData;
    }
}