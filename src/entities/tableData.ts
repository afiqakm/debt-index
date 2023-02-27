export interface ITableData {
    date: string,
    data:{
        itemId: string,
        item: string,
        value: number,
        paid: boolean,
    }[],
}