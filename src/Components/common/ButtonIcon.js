export const ButtonIcon = ({title, icon}) =>{
    return(
        <div className="button">
            <div className="btn bac-y bor-b flex center-center b-r-15 cursor-pointer">
                <div>
                    <p className="t-a-c">{title}</p></div>
                <div className="icon">
                    {icon}
                </div>
            </div>
        </div>
    )
}