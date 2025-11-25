import type { MouseEventHandler } from 'react';
import './Button.css'

interface Props {
    text: string;
    variant: string;
    onClick: MouseEventHandler;
}

// The button recieve the text on it, the variant we use (defined on CSS file) and a signal when its clicked
export const Button = ({ text, variant, onClick }: Props) => {
    return (
        <>
            <button className={`button button-${variant}`} onClick={onClick}> {text}</button >
        </>
    )
}