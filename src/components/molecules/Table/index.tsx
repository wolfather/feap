import { HTMLAttributes, ReactNode } from "react"

interface TableProps extends HTMLAttributes<HTMLTableElement> {
    headers: string[];
    children: ReactNode;
}

export const Table = ({headers, children, ...rest}: TableProps) => {

    return (
        <table {...rest}>
            <thead>
                <tr>
                    {headers.map((header, headerIndex) => (
                        <td key={headerIndex}>{header}</td>
                    ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    )
}