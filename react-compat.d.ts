import type * as ReactNamespace from "react";

declare global {
  namespace React {
    type ReactNode = ReactNamespace.ReactNode;
    type ComponentType<P = object> = ReactNamespace.ComponentType<P>;
  }
}

export {};
