import buttonStyle from './Button.module.scss'


export function Button({ text, bgColor, action, sizeW, sizeH }) {

    return (
        <>
            <button className={buttonStyle.button} onClick={action}
                style={{ backgroundColor: bgColor, width: sizeW, height: sizeH }}>
                {text}
            </button >
        </>
    )
}