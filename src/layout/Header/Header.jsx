import classes from "./Header.module.css"


const Header = () => {
    console.log(classes)
    return (
        <header className={classes.yellowHeader}>
            <div className={classes.logo}>Ваш Логотип</div>
            <nav>
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Продукция</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header