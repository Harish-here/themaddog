import cardCss from './card.module.css';
export default function Card({ children }) {
  return (
    <div className={cardCss['card-container']}>
      <div className={cardCss['card-main']}>{children}</div>
    </div>
  );
}
