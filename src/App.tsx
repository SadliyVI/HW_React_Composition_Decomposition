import PageLayout from './components/layout/PageLayout';
import NewsBlock from './components/news/NewsBlock';
import PromoCard from './components/promo/PromoCard';
import SearchSection from './components/search/SearchSection';
import Banner from './components/banner/Banner';
import WidgetGrid from './components/widgets/WidgetGrid';
import Widget from './components/widgets/Widget';
import WidgetListItem from './components/widgets/WidgetListItem';

const App = () => {
    return (
        <PageLayout
            topLeft={
                <NewsBlock
                    activeTab="Сейчас в СМИ"
                    tabs={['Сейчас в СМИ', 'в Германии', 'Рекомендуем']}
                    dateText="03 марта, вторник 15:00"
                    news={[
                        { icon: '🟦', text: 'Путин упростил получение автомобильных номеров', href: '#' },
                        { icon: '🟦', text: 'В команде Зеленского раскрыли план реформ на Украине', href: '#' },
                        { icon: '🟥', text: '«Турпомощь» прокомментировала гибель россиян в Анталье', href: '#' },
                        { icon: '🟦', text: 'Суд закрыл дело Демпартии США против России', href: '#' },
                        { icon: '🟥', text: 'На Украине призвали создать ракеты для удара по Москве', href: '#' }
                    ]}
                    rates={[
                        { title: 'USD MOEX', value: '77,13', delta: '+0,07' },
                        { title: 'EUR MOEX', value: '88,12', delta: '+0,13' },
                        { title: 'НЕФТЬ', value: '88,99', delta: '-1,63%' }
                    ]}
                />
            }
            topRight={
                <PromoCard
                    imageText="уа"
                    title="Работа над ошибками"
                    description="Смотрите на Яндексе и запоминайте"
                    href="#"
                />
            }
            search={
                <SearchSection
                    navItems={[
                        { label: 'Видео', href: '#' },
                        { label: 'Картинки', href: '#' },
                        { label: 'Новости', href: '#' },
                        { label: 'Карты', href: '#' },
                        { label: 'Маркет', href: '#' },
                        { label: 'Переводчик', href: '#' },
                        { label: 'Эфир', href: '#' },
                        { label: 'Ещё', href: '#' }
                    ]}
                    placeholder="Найдётся всё"
                    hint="Например, пить или не пить"
                />
            }
            banner={
                <Banner
                    title="Форсаж"
                    subtitle="Хоббс и Шоу — в кино с 1 марта"
                    badge="12+"
                />
            }
            widgets={
                <WidgetGrid>
                    <Widget title="Погода" rightSlot={<a className="muted" href="#">Подробнее</a>}>
                        <div className="weatherRow">
                            <div className="weatherIcon">🌦️</div>
                            <div className="weatherTemp">+1°</div>
                            <div className="weatherMeta">
                                <div>Утром +1</div>
                                <div>днём +3</div>
                            </div>
                        </div>
                    </Widget>

                    <Widget title="Посещаемое">
                        <div className="list">
                            <WidgetListItem
                                title="Недвижимость"
                                description="— сколько, сколько?"
                                href="#"
                            />
                            <WidgetListItem
                                title="Маркет"
                                description="— где купить цветы"
                                href="#"
                            />
                            <WidgetListItem
                                title="Авто.ру"
                                description="— привод 4x4 до 100500"
                                href="#"
                            />
                        </div>
                    </Widget>

                    <Widget title="Карта Дубаи">
                        <WidgetListItem
                            title="Расписания на Москву"
                            description=""
                            href="#"
                        />
                    </Widget>

                    <Widget title="Телепрограмма" rightSlot={<a className="chip" href="#">Эфир</a>}>
                        <div className="list">
                            <WidgetListItem title="02:00" description="ТНТ. Best" href="#" />
                            <WidgetListItem title="02:15" description="Джинглики" href="#" />
                            <WidgetListItem title="02:25" description="Наедине со всеми" href="#" />
                        </div>
                    </Widget>

                    <Widget title="Эфир">
                        <div className="list">
                            <WidgetListItem title="▶ Управление как искусство" description="Успех" href="#" />
                            <WidgetListItem title="▶ Ночь. Мир в это время" description="earthTV" href="#" />
                            <WidgetListItem title="▶ Андрей Возн..." description="Совершенно секретно" href="#" />
                        </div>
                    </Widget>
                </WidgetGrid>
            }
        />
    );
};

export default App;