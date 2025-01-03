/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as GenericRouteImport } from "./routes/_generic/route";

// Create Virtual Routes

const GenericTool3LazyImport = createFileRoute("/_generic/tool-3")();
const GenericTool2LazyImport = createFileRoute("/_generic/tool-2")();
const GenericTool1LazyImport = createFileRoute("/_generic/tool-1")();

// Create/Update Routes

const GenericRouteRoute = GenericRouteImport.update({
  id: "/_generic",
  getParentRoute: () => rootRoute,
} as any);

const GenericTool3LazyRoute = GenericTool3LazyImport.update({
  id: "/tool-3",
  path: "/tool-3",
  getParentRoute: () => GenericRouteRoute,
} as any).lazy(() =>
  import("./routes/_generic/tool-3.lazy").then((d) => d.Route),
);

const GenericTool2LazyRoute = GenericTool2LazyImport.update({
  id: "/tool-2",
  path: "/tool-2",
  getParentRoute: () => GenericRouteRoute,
} as any).lazy(() =>
  import("./routes/_generic/tool-2.lazy").then((d) => d.Route),
);

const GenericTool1LazyRoute = GenericTool1LazyImport.update({
  id: "/tool-1",
  path: "/tool-1",
  getParentRoute: () => GenericRouteRoute,
} as any).lazy(() =>
  import("./routes/_generic/tool-1.lazy").then((d) => d.Route),
);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/_generic": {
      id: "/_generic";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof GenericRouteImport;
      parentRoute: typeof rootRoute;
    };
    "/_generic/tool-1": {
      id: "/_generic/tool-1";
      path: "/tool-1";
      fullPath: "/tool-1";
      preLoaderRoute: typeof GenericTool1LazyImport;
      parentRoute: typeof GenericRouteImport;
    };
    "/_generic/tool-2": {
      id: "/_generic/tool-2";
      path: "/tool-2";
      fullPath: "/tool-2";
      preLoaderRoute: typeof GenericTool2LazyImport;
      parentRoute: typeof GenericRouteImport;
    };
    "/_generic/tool-3": {
      id: "/_generic/tool-3";
      path: "/tool-3";
      fullPath: "/tool-3";
      preLoaderRoute: typeof GenericTool3LazyImport;
      parentRoute: typeof GenericRouteImport;
    };
  }
}

// Create and export the route tree

interface GenericRouteRouteChildren {
  GenericTool1LazyRoute: typeof GenericTool1LazyRoute;
  GenericTool2LazyRoute: typeof GenericTool2LazyRoute;
  GenericTool3LazyRoute: typeof GenericTool3LazyRoute;
}

const GenericRouteRouteChildren: GenericRouteRouteChildren = {
  GenericTool1LazyRoute: GenericTool1LazyRoute,
  GenericTool2LazyRoute: GenericTool2LazyRoute,
  GenericTool3LazyRoute: GenericTool3LazyRoute,
};

const GenericRouteRouteWithChildren = GenericRouteRoute._addFileChildren(
  GenericRouteRouteChildren,
);

export interface FileRoutesByFullPath {
  "": typeof GenericRouteRouteWithChildren;
  "/tool-1": typeof GenericTool1LazyRoute;
  "/tool-2": typeof GenericTool2LazyRoute;
  "/tool-3": typeof GenericTool3LazyRoute;
}

export interface FileRoutesByTo {
  "": typeof GenericRouteRouteWithChildren;
  "/tool-1": typeof GenericTool1LazyRoute;
  "/tool-2": typeof GenericTool2LazyRoute;
  "/tool-3": typeof GenericTool3LazyRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/_generic": typeof GenericRouteRouteWithChildren;
  "/_generic/tool-1": typeof GenericTool1LazyRoute;
  "/_generic/tool-2": typeof GenericTool2LazyRoute;
  "/_generic/tool-3": typeof GenericTool3LazyRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: "" | "/tool-1" | "/tool-2" | "/tool-3";
  fileRoutesByTo: FileRoutesByTo;
  to: "" | "/tool-1" | "/tool-2" | "/tool-3";
  id:
    | "__root__"
    | "/_generic"
    | "/_generic/tool-1"
    | "/_generic/tool-2"
    | "/_generic/tool-3";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  GenericRouteRoute: typeof GenericRouteRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
  GenericRouteRoute: GenericRouteRouteWithChildren,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_generic"
      ]
    },
    "/_generic": {
      "filePath": "_generic/route.tsx",
      "children": [
        "/_generic/tool-1",
        "/_generic/tool-2",
        "/_generic/tool-3"
      ]
    },
    "/_generic/tool-1": {
      "filePath": "_generic/tool-1.lazy.tsx",
      "parent": "/_generic"
    },
    "/_generic/tool-2": {
      "filePath": "_generic/tool-2.lazy.tsx",
      "parent": "/_generic"
    },
    "/_generic/tool-3": {
      "filePath": "_generic/tool-3.lazy.tsx",
      "parent": "/_generic"
    }
  }
}
ROUTE_MANIFEST_END */
