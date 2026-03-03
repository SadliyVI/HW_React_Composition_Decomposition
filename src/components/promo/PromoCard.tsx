import Card from '../ui/Card';

/** Промо-карточка показывает изображение-заглушку, заголовок, описание и ссылку. */
const PromoCard = (props: { imageText: string; title: string; description: string; href: string }) => {
    return (
        <Card className="promo">
            <div className="promoImg" aria-hidden="true">
                {props.imageText}
            </div>
            <a className="promoTitle" href={props.href}>
                {props.title}
            </a>
            <div className="promoDesc">{props.description}</div>
        </Card>
    );
};

export default PromoCard;