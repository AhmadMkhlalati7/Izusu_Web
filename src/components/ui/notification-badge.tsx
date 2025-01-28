import React from "react";

import { cn } from "@/lib/utils";
import { Badge, BadgeProps } from "./badge";

export interface NotificationBadgeProps extends BadgeProps {
  label?: number;
  show?: boolean;
}

export const NotificationBadge = ({
  label,
  className,
  show,
  children,
  ...props
}: NotificationBadgeProps) => {
  const showBadge =
    typeof label !== "undefined" && (typeof show === "undefined" || show);
  return (
    <div className="relative inline-flex">
      {children}
      {showBadge && label > 0 && (
        <Badge
          className={cn(
            "absolute -right-2 -top-2 rounded-full",
            typeof label !== "undefined" && ("" + label).length === 0
              ? "-translate-y-1 translate-x-1 px-1.5 py-1.5"
              : "-translate-y-1.5 translate-x-1.5 px-2",
            className,
          )}
          {...props}
        >
          {label > 99 ? "99+" : label}
        </Badge>
      )}
    </div>
  );
};
