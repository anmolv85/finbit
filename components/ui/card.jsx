// File purpose: components\ui\card.jsx
// This file contains reusable UI components used throughout the Finbit interface.
// It is written to help beginners understand how this file connects to the rest of the app.

import * as React from "react"

import { cn } from "@/lib/utils"

// Main Card component - serves as the container for card content
// Accepts className, size prop (default "default"), and other props
// Card: UI component used to render part of the Finbit interface and receive props from a parent.
function Card({
  className,
  size = "default",
  ...props
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      )}
      {...props} />
  );
}

// CardHeader component - contains the title, description, and action elements
// Uses CSS Grid for layout with responsive sizing
// CardHeader: UI component used to render part of the Finbit interface and receive props from a parent.
function CardHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className
      )}
      {...props} />
  );
}

// CardTitle component - displays the main heading of the card
// Uses heading font with responsive text sizing
// CardTitle: UI component used to render part of the Finbit interface and receive props from a parent.
function CardTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props} />
  );
}

// CardDescription component - provides additional descriptive text
// Uses muted foreground color for secondary information
// CardDescription: UI component used to render part of the Finbit interface and receive props from a parent.
function CardDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props} />
  );
}

// CardAction component - contains action buttons or controls
// Positioned in the top-right corner of the header using grid positioning
// CardAction: UI component used to render part of the Finbit interface and receive props from a parent.
function CardAction({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props} />
  );
}

// CardContent component - main content area of the card
// Provides padding with responsive sizing for small cards
// CardContent: UI component used to render part of the Finbit interface and receive props from a parent.
function CardContent({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      {...props} />
  );
}

// CardFooter component - bottom section with actions or summary
// Includes a top border and muted background for visual separation
// CardFooter: UI component used to render part of the Finbit interface and receive props from a parent.
function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
        className
      )}
      {...props} />
  );
}

// Export all card components for use in other parts of the application
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
