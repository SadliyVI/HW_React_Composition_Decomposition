/** Строка поиска отображает поле ввода и кнопку. */
const SearchBar = (props: { placeholder: string }) => {
    return (
        <div className="searchBar">
            <input className="searchInput" placeholder={props.placeholder} />
            <button className="searchBtn" type="button">
                Найти
            </button>
        </div>
    );
};

export default SearchBar;