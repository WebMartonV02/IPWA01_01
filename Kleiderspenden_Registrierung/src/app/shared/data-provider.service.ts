export class DataProviderService<TData>
{
    private $Data: TData;

    public SetData(parentalComponentData: TData)
    {
        this.$Data = parentalComponentData;
    }
}