const mapping: Record<string, string> = {
  blogs: 'blog',
  companies: 'company',
  invitations: 'invitation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
