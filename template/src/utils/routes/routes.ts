import React from 'react';
import urlJoin from 'url-join';

export interface RoutesConfig {
  path: string;
  label?: string;
  icon?: React.ReactNode;
  children: Record<string, RoutesConfig>;
}

const getRoutes = (parentPath: string) => <Config extends RoutesConfig>(
  config: Config,
): Config => {
  const path = urlJoin(parentPath, config.path);

  return {
    ...config,
    path,
    children: Object.fromEntries(
      Object.entries(config).map(([key, childConfig]) => [
        key,
        getRoutes(path)(childConfig),
      ]),
    ),
  };
};

export default getRoutes;
