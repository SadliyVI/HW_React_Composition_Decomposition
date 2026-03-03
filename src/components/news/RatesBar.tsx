import RateItem from './RateItem';

/** Компонент отображает строку котировок и курсов (несколько элементов подряд). */
const RatesBar = (props: { items: Array<{ title: string; value: string; delta?: string }> }) => {
    return (
        <div className="ratesBar">
            {props.items.map((r) => (
                <RateItem key={r.title} title={r.title} value={r.value} delta={r.delta} />
            ))}
        </div>
    );
};

export default RatesBar;