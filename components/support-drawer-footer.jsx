"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";

export function SupportDrawerFooter() {
  return (
    <div className="inline-flex items-center justify-center gap-4">
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="link"
            className="text-blue-700 hover:text-blue-900 focus:outline-none focus-visible:border-transparent focus-visible:ring-0"
          >
            Support
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Finbit Support</DrawerTitle>
            <DrawerDescription>
              Contact our support team for help with your account and financial tracking.
            </DrawerDescription>
          </DrawerHeader>
          <div className="space-y-4 px-4 pb-6">
            <div className="rounded-2xl border border-border bg-muted p-4">
              <p className="text-sm font-medium text-foreground">Support email</p>
              <a
                href="mailto:finbitfs@gmail.com"
                className="mt-2 block text-sm font-semibold text-blue-700 hover:underline"
              >
                finbitfs@gmail.com
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Tap the email address to open your mail app, or close this drawer to continue.
            </p>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                Close
              </Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>

      <Button
        variant="link"
        asChild
        className="text-blue-700 hover:text-blue-900 focus:outline-none focus-visible:border-transparent focus-visible:ring-0"
      >
        <Link href="/terms">Terms & Conditions</Link>
      </Button>
    </div>
  );
}
