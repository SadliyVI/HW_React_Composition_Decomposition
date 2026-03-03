/** Элемент новости показывает иконку, текст и ссылку на материал. */
const NewsItem = (props: { icon: string; text: string; href: string }) => {
    return (
        <a className="newsItem" href={props.href}>
            <span className="newsIcon" aria-hidden="true">
                {props.icon}
            </span>
            <span className="newsText">{props.text}</span>
        </a>
    );
};

export default NewsItem;