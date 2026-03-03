/** Элемент котировки выводит название инструмента, значение и разницу изменения. */
const RateItem = (props: { title: string; value: string; delta?: string }) => {
    return (
        <div className="rateItem">
            <span className="rateTitle">{props.title}</span>
            <span className="rateValue">{props.value}</span>
            {props.delta && <span className="rateDelta">{props.delta}</span>}
        </div>
    );
};

export default RateItem;