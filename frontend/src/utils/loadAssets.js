const LOGO_GLOB = import.meta.glob('../assets/clients/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
});

const PROJECT_GLOB = import.meta.glob('../assets/projects/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
});

export function loadClientLogos() {
  return Object.entries(LOGO_GLOB)
    .map(([path, src]) => ({
      src,
      name: path.split('/').pop().replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function loadProjectImages() {
  const grouped = {};

  Object.entries(PROJECT_GLOB).forEach(([path, src]) => {
    const segments = path.replace(/\\/g, '/').split('/');
    const projectsIndex = segments.indexOf('projects');
    const clientSlug = segments[projectsIndex + 1];

    if (!clientSlug || clientSlug.includes('.')) return;

    if (!grouped[clientSlug]) grouped[clientSlug] = [];
    grouped[clientSlug].push({ src, fileName: segments.at(-1) ?? '' });
  });

  Object.keys(grouped).forEach((slug) => {
    grouped[slug] = grouped[slug]
      .sort((a, b) => a.fileName.localeCompare(b.fileName))
      .map((item) => item.src);
  });

  return grouped;
}
