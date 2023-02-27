import React, { useState } from "react";
import { threadId } from "worker_threads";
import { ITableData } from "../entities/tableData";

interface TableProps {
    thTitle: string[];
    thData: ITableData[];
    className?: string;
}

const TableComponent = (props: TableProps):JSX.Element =>{
    const { thTitle, thData, className } = props;

    const [debtItem, setDebtItem] = useState(thData);


    const handleChange = (itemId: string) => {
       
    }

    return(
            <table className={className}>
                <thead>
                    <tr>
                        {
                            thTitle.map((header) => {
                                return(
                                    <th>{header}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            debtItem.map((item) => {
                                const {data, date} = item;
                                return(
                                    <>
                                    <tr className='w-full text-center'>
                                            <th colSpan={thTitle.length} className='border-b-3 p-1'>
                                                <div className="divider text-accent">{date}</div>
                                            </th>
                                    </tr>
                                    
                                    {
                                        data.map((item) => {
                                            return(
                                                <tr>
                                                    <th>
                                                        <input
                                                            type='checkbox'
                                                            className='checkbox checkbox-primary'
                                                            checked={item.paid}
                                                            onChange={() => handleChange(item.itemId)}
                                                        />
                                                    </th>
                                                <th>{item.item}</th>
                                                <th>{item.value}</th>
                                                </tr>
                                                )}
                                            )
                                        }
                                    </>
                                )
                            })
                        }
                </tbody>
                <tfoot>
                    <tr >
                        <th></th>
                    <th className='text-lg'>Total Debt</th>
                    <th className='text-lg'>1000</th>
                    </tr>
                </tfoot>
            </table>
    );
}

export default TableComponent;