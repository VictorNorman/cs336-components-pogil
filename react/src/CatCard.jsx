export default function CatCard({
  cat,
  onAdopt,
}) {
  return (
    <li>
      {cat.name}
      {cat.adopted && <span>(adopted)</span>}
      <button onClick={() => onAdopt(cat.id)}>Adopt</button>
    </li>
  );
}
