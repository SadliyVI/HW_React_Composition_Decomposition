/** Элемент списка виджета выводит ссылку с заголовком и дополнительным описанием. */
const WidgetListItem = (props: { title: string; description: string; href: string }) => {
    return (
        <a className="widgetListItem" href={props.href}>
            <span className="wTitle">{props.title}</span>{' '}
            {props.description && <span className="wDesc muted">{props.description}</span>}
        </a>
    );
};

export default WidgetListItem;