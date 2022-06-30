import { EmptyDataProps } from "../../../entities/emptydata.entity";

export const EmptyData = ({text, ...rest}: EmptyDataProps) => {
    return <div {...rest}><h2>{ text }</h2></div>
}