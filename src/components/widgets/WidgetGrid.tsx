import type { ReactNode } from 'react';

/** Контейнер раскладывает виджеты в сетку, имитируя нижнюю часть макета. */
const WidgetGrid = (props: { children: ReactNode }) => {
    return <div className="widgetGrid">{props.children}</div>;
};

export default WidgetGrid;