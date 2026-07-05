const fieldClass =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy transition-colors placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

const errorClass = 'border-red-300 focus:border-red-400 focus:ring-red-200';

export function FormInput({ label, id, error, required, className = '', ...props }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={id}
        className={`${fieldClass} ${error ? errorClass : ''}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function FormSelect({ label, id, error, required, children, className = '', ...props }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <select
        id={id}
        className={`${fieldClass} ${error ? errorClass : ''}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function FormTextarea({ label, id, error, required, className = '', ...props }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <textarea
        id={id}
        className={`${fieldClass} min-h-[140px] resize-y ${error ? errorClass : ''}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
