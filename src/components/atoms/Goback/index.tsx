import { FC, HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom"

interface GoButtonProps extends HTMLAttributes<HTMLButtonElement> {
    text?: string;
}

export const Goback: FC<GoButtonProps> = ({text = 'Go Back', ...rest}: GoButtonProps) => {
    const navigate = useNavigate();

    return (
        <button {...rest} onClick={() => navigate(-1) }>{text}</button>
    )
}