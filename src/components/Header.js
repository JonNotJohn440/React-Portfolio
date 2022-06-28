const Header = (props) => {

    function clickHandler(event) {
        const id = event.target.id
        props.setPage(id)
    }
    return (
        <div>Header placeholder
            <nav>
                <a href = "#" onClick = {clickHandler} id = "about">about</a>
                <a href = "#" onClick = {clickHandler} id = "work">work</a>
                <a href = "#" onClick = {clickHandler} id = "contact">contact</a>
            </nav>
        </div>
    )
}
export default Header