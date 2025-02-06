"use client";

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { deleteJobAction } from "@/utils/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export default function DeleteJobBtn({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteJobAction(id),
    onSuccess: (data) => {
      if (!data) {
        toast({
          variant: "destructive",
          description: "Oops! Something Went Wrong",
        });
        return;
      }
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });

      setOpen(false);

      toast({
        title: "Success!",
        description: "The job has been successfully deleted.",
      });
    },
  });
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-red-500 text-primary-foreground hover:bg-red-600 h-9 rounded-md px-3 capitalize">
          Delete
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure you want to delete this job?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. The job will be permanently deleted
              and removed from the system.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                size="sm"
                disabled={isPending}
                variant="destructive"
                onClick={() => mutate(id)}>
                {isPending ? "Deleting..." : "Delete"}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
