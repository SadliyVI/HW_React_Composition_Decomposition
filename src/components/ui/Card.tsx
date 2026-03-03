import type { ReactNode } from 'react';

/** Универсальная рамка-карточка для визуального отделения блоков интерфейса. */
const Card = (props: { children: ReactNode; className?: string }) => {
    return <div className={['card', props.className].filter(Boolean).join(' ')}>{props.children}</div>;
};

export default Card;