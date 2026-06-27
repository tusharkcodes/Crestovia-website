const imageExtensions = ['png', 'jpg', 'jpeg', 'webp']

export const getFolderImages = (folderPath) => {
  const glob = import.meta.glob('../assets/images/**/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  })

  const prefix = `../assets/images/${folderPath}/`

  return Object.entries(glob)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src)
}

export const getProjectImages = (folder, fallback) => {
  const images = getFolderImages(`portfolio/${folder}`)

  if (images.length > 0) {
    return { image: images[0], images }
  }

  return { image: fallback, images: [fallback] }
}
