"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Renders a styled avatar root element.
 *
 * Merges a default set of layout and shape classes with any provided `className`
 * and forwards remaining props to the underlying avatar root.
 *
 * @param className - Additional CSS class(es) to merge with the component's default classes
 * @param props - Additional props forwarded to the avatar root element
 * @returns A React element representing the avatar root
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders an avatar image element used as the content of an Avatar.
 *
 * @param className - Additional CSS classes to merge with the default "aspect-square size-full"
 * @returns A React element that renders an AvatarPrimitive.Image configured for avatar content
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Renders the avatar fallback placeholder shown when an image is not available.
 *
 * @param className - Optional additional CSS classes merged with the fallback's default styles
 * @returns The rendered Avatar fallback element styled as a centered, rounded placeholder
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }