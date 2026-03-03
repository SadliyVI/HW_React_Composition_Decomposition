import Card from '../ui/Card';
import NewsHeader from './NewsHeader';
import NewsList from './NewsList';
import RatesBar from './RatesBar';

/** Блок объединяет заголовок новостей, список новостей и строку котировок. */
const NewsBlock = (props: {
    tabs: string[];
    activeTab: string;
    dateText: string;
    news: Array<{ icon: string; text: string; href: string }>;
    rates: Array<{ title: string; value: string; delta?: string }>;
}) => {
    return (
        <Card>
            <NewsHeader tabs={props.tabs} activeTab={props.activeTab} dateText={props.dateText} />
            <NewsList items={props.news} />
            <RatesBar items={props.rates} />
        </Card>
    );
};

export default NewsBlock;