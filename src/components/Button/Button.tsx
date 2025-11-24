import type { MouseEventHandler } from 'react';
import './Button.css'

interface Props {
    text: string;
    variant: string;
    onClick: MouseEventHandler;
}

export const Button = ({ text, variant, onClick }: Props) => {
    return (
        <>
            <button className={`button button-${variant}`} onClick={onClick}> {text}</button >
        </>
    )
}