import NewsItem from './NewsItem';

/** Компонент выводит вертикальный список новостей по данным из props. */
const NewsList = (props: { items: Array<{ icon: string; text: string; href: string }> }) => {
    return (
        <ul className="newsList">
            {props.items.map((n, idx) => (
                <li key={idx}>
                    <NewsItem icon={n.icon} text={n.text} href={n.href} />
                </li>
            ))}
        </ul>
    );
};

export default NewsList;