"use client";

import { useToast } from "@/hooks/use-toast";
import { getSingleJobAction, updateJobAction } from "@/utils/actions";
import {
  createAndEditJobSchema,
  CreateAndEditJobType,
  JobMode,
  JobStatus,
} from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { CustomFormField, CustomFormSelect } from "./form-component";
import { Button } from "./ui/button";

export default function EditJobForm({ jobId }: { jobId: string }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data } = useQuery({
    queryKey: ["job", jobId],
    queryFn: () => getSingleJobAction(jobId),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditJobType) =>
      updateJobAction(jobId, values),
    onSuccess: (data) => {
      if (!data) {
        toast({
          variant: "destructive",
          description: "Oops! Something Went Wrong",
        });
        return;
      }
      toast({
        title: "Success!",
        description: "The job has been successfully updated.",
      });
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["jobs", jobId] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      router.push("/jobs");
    },
  });

  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: data?.position || "",
      company: data?.company || "",
      location: data?.location || "",
      status: (data?.status as JobStatus) || JobStatus.Pending,
      mode: (data?.mode as JobMode) || JobMode.FullTime,
    },
  });

  function onSubmit(values: CreateAndEditJobType) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded">
        <h2 className="capitalize font-semibold text-4xl mb-6">edit job</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-start">
          {/* Position */}
          <CustomFormField name="position" control={form.control} />
          {/* Company */}
          <CustomFormField name="company" control={form.control} />
          {/* Location */}
          <CustomFormField name="location" control={form.control} />
          {/* Job Status */}
          <CustomFormSelect
            name="status"
            control={form.control}
            labelText="job status"
            items={Object.values(JobStatus)}
          />
          {/* Job Mode */}
          <CustomFormSelect
            name="mode"
            control={form.control}
            labelText="job mode"
            items={Object.values(JobMode)}
          />
          <Button
            type="submit"
            className="capitalize self-end"
            disabled={isPending}>
            {isPending ? "loading" : "edit job"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
