import type { ReactNode } from 'react';

/** Компонент собирает страницу из крупных блоков (верх/поиск/баннер/виджеты). */
const PageLayout = (props: {
    topLeft: ReactNode;
    topRight: ReactNode;
    search: ReactNode;
    banner: ReactNode;
    widgets: ReactNode;
}) => {
    return (
        <div className="page">
            <div className="top">
                <div className="topLeft">{props.topLeft}</div>
                <div className="topRight">{props.topRight}</div>
            </div>

            <div className="searchArea">{props.search}</div>
            <div className="bannerArea">{props.banner}</div>
            <div className="widgetsArea">{props.widgets}</div>
        </div>
    );
};

export default PageLayout;