interface IButton {
    buttonText: string;
    onClick: () => {};
}

export const Button = ({buttonText, onClick}: IButton) => {
    return(
        <>
            <div onClick={onClick}>
                {buttonText}
            </div>
        </>
    )
}