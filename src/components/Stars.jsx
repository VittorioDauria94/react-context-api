export default function Stars({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="product-stars">
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={"full" + i} className="star full">
          ★
        </span>
      ))}

      {hasHalfStar && <span className="star half">★</span>}

      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={"empty" + i} className="star empty">
          ★
        </span>
      ))}
    </div>
  );
}
