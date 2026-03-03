import LinkItem from '../ui/LinkItem';

/** Навигация в зоне поиска отображает список ссылок на разделы. */
const SearchNav = (props: { items: Array<{ label: string; href: string }> }) => {
    return (
        <div className="searchNav">
            {props.items.map((i) => (
                <LinkItem key={i.label} href={i.href} label={i.label} />
            ))}
        </div>
    );
};

export default SearchNav;