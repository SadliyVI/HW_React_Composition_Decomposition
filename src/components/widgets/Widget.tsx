import type { ReactNode } from 'react';
import Card from '../ui/Card';

/** Универсальный виджет отображает заголовок, опциональный правый слот и контент. */
const Widget = (props: { title: string; rightSlot?: ReactNode; children: ReactNode }) => {
    return (
        <Card className="widget">
            <div className="widgetHeader">
                <a className="widgetTitle" href="#">
                    {props.title}
                </a>
                {props.rightSlot && <div className="widgetRight">{props.rightSlot}</div>}
            </div>
            <div className="widgetBody">{props.children}</div>
        </Card>
    );
};

export default Widget;