import React from 'react';
import TablePagination from "./TablePagination";
import SortIcon from "../../../assets/Icons/Sort-Icon.svg";


/**
 * Table Component
 *
 * This component is used to display tabular data with optional pagination and actions.
 *
 * @param {Object[]} data - An array of objects representing the table rows.
 * @param {Object[]} config - An array of configuration objects defining table columns.
 * @param {Object} pagination - Pagination configuration object (optional).
 * @param {Object[]} actions - An array of action objects to be displayed as icons (optional).
 *
 * @returns {JSX.Element} A JSX element representing the table component.
 */
export default function Table({ data = [], config = [], pagination = {}, actions = [], showPagination = true, serial = true, uid }) {
    let serialArr = [];
    if (data.length > 0) serialArr = showPagination ? data?.map((_, ind) => ind + 1 + (pagination?.page - 1) * pagination?.limit) : data?.map((_, ind) => ind + 1);
    return (
        <div>
            <div className="w-full overflow-x-scroll scrollbar">
                <table className="w-full">
                    <thead>
                        <tr className="bg-white-400" style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}>
                            {(serial && data.length > 0) && (<th
                                className="py-[0.625rem] text-left px-4 text-slate-600 text-xs leading-4 font-medium"
                                style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}
                            >
                                <div className="flex gap-1 items-center">
                                    <p>Serial</p>
                                    <img src={SortIcon} alt="" />                            </div>
                            </th>)}
                            {
                                config.map((column, index) => (
                                    <th
                                        key={column.name}
                                        className="py-[0.625rem] px-4 text-slate-600 text-xs leading-4 font-medium text-left min-w-[10rem] max-w-max"
                                        style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}
                                    >
                                        {index === 0 ? (
                                            <div className="flex items-center">
                                                <span>{column.name}</span>
                                            </div>
                                        ) : (
                                            column.name
                                        )}
                                    </th>
                                ))
                            }
                            {
                                actions.length > 0 ? <th
                                    className="py-[0.625rem] text-left px-4 text-slate-600 text-xs leading-4 font-medium min-w-[2rem] max-w-max"
                                    style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}
                                >
                                    Actions
                                </th> : <></>
                            }
                        </tr>
                    </thead >
                    <tbody>

                        {data.length > 0 && data.map((item, index) => (
                            <tr key={item.id} className="hover:bg-[#D8E7FF]" style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}>
                                {(serial && data.length > 0) && (<td
                                    className={`py-[1.125rem] text-left px-6 text-sm leading-5 cursor-pointer`}
                                    style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}
                                >
                                    {serialArr[index] ? serialArr[index] : index + 1}
                                </td>)}
                                {config.map(({
                                    key = uid(),
                                    value,
                                    onClick = () => { },
                                    modify = () => undefined,
                                    Comp
                                }) => {
                                    if (Comp) return <td key={key}><Comp data={item} /></td>;
                                    if (key.includes('.')) value = key.split('.').reduce((obj = {}, k) => obj?.[k], item);

                                    return (
                                        <td
                                            onClick={() => onClick && onClick(item)}
                                            key={key}
                                            className={`min-w-[10rem] max-w-max py-[1.125rem] px-4 text-sm leading-5 cursor-pointer ${key === "ID" || key === "StudentName" || key === "Category" ? 'text-blue' : 'text-textBlue'}`}
                                            style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}
                                        >
                                            {modify(value || item[key]) || value || item[key]}

                                        </td>

                                    );
                                }

                                )}
                                {
                                    actions.length > 0 ? <td
                                        className={`min-w-[2rem] py-[1.125rem] text-center px-4 text-sm leading-5 cursor-pointer $`}
                                        style={{ boxShadow: "0px -1px 0px 0px #E1E3E5 inset" }}
                                    >
                                        <div className="flex gap-4">
                                            {
                                                actions.map(({ name, Icon, onClick, className, style: { size, weight } }) =>
                                                    Icon ?
                                                        (
                                                            <div
                                                                className=" hover:text-red text-[#64748B] cursor-pointer"
                                                                key={name}
                                                                onClick={() => onClick(name, item)}
                                                            >
                                                                <Icon size={size} weight={weight} data={item} />
                                                            </div>
                                                        ) : <p key={name} className={className}>{name}</p>)
                                            }
                                        </div>
                                    </td> : <></>
                                }
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            {
                showPagination ? <div className="w-full ">
                    {
                        !data.length > 0 ? <></> : <TablePagination
                            pagination={pagination}
                        />
                    }
                </div> : <></>
            }
        </div >
    );
}