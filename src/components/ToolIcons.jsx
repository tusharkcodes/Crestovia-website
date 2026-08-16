export function ToolIcon({ id, className = 'h-9 w-9' }) {
  const icons = {
    meta: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#0668E1"
          d="M12 3.2c-2.4 0-4.4 1.7-5.2 4.1C5.9 5.5 4.3 4.4 2.4 4.4 1 4.4 0 5.6 0 7.3 0 12.6 8.1 20.8 12 20.8s12-8.2 12-13.5c0-1.7-1-2.9-2.4-2.9-1.9 0-3.5 1.1-4.4 2.9C16.4 4.9 14.4 3.2 12 3.2Z"
        />
      </svg>
    ),
    gads: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="#4285F4" d="M4 18.5 10.2 4.8h4.1L8.1 18.5H4Z" />
        <path fill="#FBBC04" d="M9.7 18.5 15.9 4.8h4.1L13.8 18.5H9.7Z" />
        <circle cx="6.2" cy="17.2" r="3.1" fill="#34A853" />
      </svg>
    ),
    claude: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#D97757"
          d="M12.8 2.2 16.7 12l3.4-3.3 1.7 1.7-5.8 5.6L12.8 22h-1.6l-3.2-6-5.8-5.6 1.7-1.7L7.3 12 11.2 2.2h1.6Z"
        />
      </svg>
    ),
    canva: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#00C4CC" />
        <path
          fill="white"
          d="M8.4 15.6c1.3 1.3 3.4 1.4 4.8.1 1.6-1.6 1.5-4.4-.2-6-.8-.8-1.9-1-2.9-.5-.4.2-.5.8-.2 1.1.3.4.9.4 1.2.2.4-.2.9-.1 1.2.2.8.8.8 2.1 0 2.9-.7.7-1.8.7-2.4 0-.4-.4-1-.4-1.4 0-.3.3-.3.9 0 1.2Z"
        />
      </svg>
    ),
    chatgpt: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#10A37F"
          d="M20.1 10.1a4.5 4.5 0 0 0-.4-4.3 4.6 4.6 0 0 0-5-2.1 4.6 4.6 0 0 0-7.8 1.6 4.5 4.5 0 0 0-3 3.3 4.6 4.6 0 0 0 .6 4.3 4.5 4.5 0 0 0 .4 4.3 4.6 4.6 0 0 0 5 2.1 4.6 4.6 0 0 0 7.8-1.6 4.5 4.5 0 0 0 3-3.3 4.6 4.6 0 0 0-.6-4.3Zm-8.2 9.1a3.4 3.4 0 0 1-2.2-.8l.1-.1 3.7-2.1v2.2a3.4 3.4 0 0 1-1.6.8Zm7.2-3a3.4 3.4 0 0 1-1.5 1.3v-4.3l3.7 2.1a3.5 3.5 0 0 1-2.2.9Z"
        />
      </svg>
    ),
    sheets: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path fill="#0F9D58" d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
        <path fill="#87CEAC" d="M14 3v5h5" />
        <path fill="white" d="M8 11h8v8H8zm1 1v2h2.7v-2zm3.7 0v2H15v-2zm-3.7 3v2h2.7v-2zm3.7 0v2H15v-2z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <defs>
          <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#F58529" />
            <stop offset="50%" stopColor="#DD2A7B" />
            <stop offset="100%" stopColor="#8134AF" />
          </linearGradient>
        </defs>
        <rect width="20" height="20" x="2" y="2" rx="6" fill="url(#ig-grad)" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="white" strokeWidth="1.6" />
        <circle cx="16.6" cy="7.4" r="1" fill="white" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" fill="#1877F2" />
        <path fill="white" d="M13.4 19v-6.2h2.1l.3-2.5h-2.4V8.8c0-.7.2-1.2 1.2-1.2h1.3V5.4c-.2 0-1-.1-2-1.1-1.1 0-2.7.7-2.7 2.9v1.1H9.2v2.5h2v6.2h2.2Z" />
      </svg>
    ),
    whatsapp: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          fill="#25D366"
          d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z"
        />
        <path
          fill="white"
          d="M16.3 14.3c-.2-.1-1.3-.6-1.5-.7s-.3-.1-.5.1-.6.7-.7.8-.3.2-.5.1a6 6 0 0 1-1.8-1.1 6.6 6.6 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.4-.5.1-.3c0-.1 0-.3-.1-.4l-.7-1.6c-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.3a8.9 8.9 0 0 0 3.4 2.8c1.3.5 1.8.6 2.4.5.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1 0-.1-.2-.1-.4-.2Z"
        />
      </svg>
    ),
    excel: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" fill="#217346" />
        <path fill="white" d="M8.2 8.2h2.1l1.7 3.2 1.7-3.2h2.1l-2.8 4.6 3 5H13.9l-1.9-3.4-1.9 3.4H8l3-5-2.8-4.6Z" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#0A66C2" />
        <path fill="white" d="M7.3 9.4H5.2V18h2.1V9.4ZM6.2 6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM18.8 18h-2.1v-4.2c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.4-.1.7V18h-2.1s.1-7.2 0-8.6h2.1v1.2c.3-.4 1-1.1 2.3-1.1 1.7 0 3 1.1 3 3.5V18Z" />
      </svg>
    ),
    wordpress: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#21759B" />
        <path
          fill="white"
          d="M7.1 17.8 10 8.4h2.2l-2.9 9.4H7.1Zm6.2-7.4c.5-.2 1-.4 1.7-.4 1.7 0 2.1 1.3 2.1 2.6 0 .3 0 .6-.1.9L15.7 18h-2.3l1.2-4.5c.1-.3.1-.6.1-.8 0-.6-.2-1-.8-1-.4 0-.8.2-1.1.4l-1.3 5.9H9.3l2.9-9.4h2l-.9 2.4Z"
        />
      </svg>
    ),
  }

  return icons[id] ?? null
}
