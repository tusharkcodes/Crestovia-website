export default function AboutImage({ src, alt, aspect = 'aspect-[4/3]' }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-xl shadow-navy/10">
      <img src={src} alt={alt} className={`w-full object-cover ${aspect}`} />
    </div>
  );
}
