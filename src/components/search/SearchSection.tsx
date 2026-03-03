import Logo from './Logo';
import SearchNav from './SearchNav';
import SearchBar from './SearchBar';
import Card from '../ui/Card';

/** Секция поиска объединяет логотип, навигацию по сервисам, строку поиска и подсказку. */
const SearchSection = (props: {
    navItems: Array<{ label: string; href: string }>;
    placeholder: string;
    hint: string;
}) => {
    return (
        <Card className="searchSection">
            <div className="searchRow">
                <Logo />
                <div className="searchMain">
                    <SearchNav items={props.navItems} />
                    <SearchBar placeholder={props.placeholder} />
                    <div className="hint">
                        <span className="muted">Найдётся всё.</span> {props.hint}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default SearchSection;