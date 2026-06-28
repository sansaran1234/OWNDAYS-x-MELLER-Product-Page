"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import * as React from "react";
import {
  sheetContentBottomVariants,
  sheetContentLeftVariants,
  sheetContentRightVariants,
  sheetContentTopVariants,
  sheetOverlayVariants,
} from "@/lib/sheet-animation";
import { cn } from "@/lib/utils";

type SheetContextValue = {
  open: boolean;
};

const SheetContext = React.createContext<SheetContextValue>({ open: false });

function Sheet({
  open: openProp,
  defaultOpen,
  onOpenChange,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Root>) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(
    defaultOpen ?? false,
  );
  const open = openProp ?? uncontrolledOpen;

  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      if (openProp === undefined) {
        setUncontrolledOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [onOpenChange, openProp],
  );

  return (
    <SheetContext.Provider value={{ open }}>
      <SheetPrimitive.Root
        open={open}
        onOpenChange={handleOpenChange}
        {...props}
      />
    </SheetContext.Provider>
  );
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

const sideVariants = {
  right: sheetContentRightVariants,
  left: sheetContentLeftVariants,
  top: sheetContentTopVariants,
  bottom: sheetContentBottomVariants,
} as const;

const sideClassNames = {
  right: "inset-y-0 right-0 max-w-[616px] rounded-tl-[30px] rounded-bl-[30px]",
  left: "inset-y-0 left-0 max-w-[616px] rounded-tr-[30px] rounded-br-[30px]",
  top: "inset-x-0 top-0 h-auto max-w-none rounded-none",
  bottom: "inset-x-0 bottom-0 h-auto max-w-none rounded-none",
} as const;

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/40 backdrop-blur-[5px]",
        className,
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: keyof typeof sideVariants;
}) {
  const { open } = React.useContext(SheetContext);
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <SheetPortal>
        {open ? (
          <>
            <SheetOverlay />
            <SheetPrimitive.Content
              data-slot="sheet-content"
              className={cn(
                "fixed z-50 flex h-full w-full flex-col overflow-hidden bg-transparent shadow-none focus:outline-none",
                sideClassNames[side],
                className,
              )}
              {...props}
            >
              {children}
            </SheetPrimitive.Content>
          </>
        ) : null}
      </SheetPortal>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {open ? (
        <SheetPortal forceMount>
          <SheetPrimitive.Overlay asChild forceMount>
            <motion.div
              data-slot="sheet-overlay"
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[5px]"
              variants={sheetOverlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          </SheetPrimitive.Overlay>
          <SheetPrimitive.Content asChild forceMount {...props}>
            <motion.div
              data-slot="sheet-content"
              className={cn(
                "fixed z-50 flex h-full w-full flex-col overflow-hidden bg-transparent focus:outline-none",
                sideClassNames[side],
                className,
              )}
              variants={sideVariants[side]}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {children}
            </motion.div>
          </SheetPrimitive.Content>
        </SheetPortal>
      ) : null}
    </AnimatePresence>
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("sr-only", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("sr-only", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
