export default function Tabs({items, active, onChange}){
  return items.map(name => (
    <button
      key={name}
      className="tab"
      aria-selected={String(active === name)}
      onClick={()=>onChange(name)}
    >
      {name}
    </button>
  ));
}
