/** Универсальная ссылка для меню и списков с настраиваемой подписью и адресом. */
const LinkItem = (props: { href: string; label: string; className?: string }) => {
    return (
        <a className={['link', props.className].filter(Boolean).join(' ')} href={props.href}>
            {props.label}
        </a>
    );
};

export default LinkItem;