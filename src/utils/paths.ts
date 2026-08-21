const basePath = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function assetPath(path: string): string {
  return `${basePath}/${path.replace(/^\/+/, '')}`;
}

export function sitePath(path: string): string {
  const normalizedPath = path.replace(/^\/+|\/+$/g, '');
  return normalizedPath ? `${basePath}/${normalizedPath}/` : `${basePath}/`;
}
