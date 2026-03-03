import Card from '../ui/Card';

/** Баннер отображает крупный рекламный или информационный блок с заголовком и меткой. */
const Banner = (props: { title: string; subtitle: string; badge?: string }) => {
    return (
        <Card className="banner">
            <div className="bannerInner">
                <div className="bannerTitle">
                    {props.title} {props.badge && <span className="badge">{props.badge}</span>}
                </div>
                <div className="bannerSubtitle">{props.subtitle}</div>
            </div>
        </Card>
    );
};

export default Banner;