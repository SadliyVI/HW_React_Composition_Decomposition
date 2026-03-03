/** Компонент отображает вкладки новостей и текущую дату и время. */
const NewsHeader = (props: { tabs: string[]; activeTab: string; dateText: string }) => {
    return (
        <div className="newsHeader">
            <div className="tabs">
                {props.tabs.map((t) => (
                    <a key={t} href="#" className={['tab', t === props.activeTab ? 'tabActive' : ''].join(' ')}>
                        {t}
                    </a>
                ))}
            </div>
            <div className="date">{props.dateText}</div>
        </div>
    );
};

export default NewsHeader;