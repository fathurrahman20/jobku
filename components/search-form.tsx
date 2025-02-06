"use client";

import React from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { JobStatus } from "@/utils/types";
import { Button } from "./ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchForm() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "all";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const jobStatus = formData.get("jobStatus") as string;
    const params = new URLSearchParams();
    params.set("search", search);
    params.set("jobStatus", jobStatus);

    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <form
      className="bg-muted mb-16 p-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg"
      onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Searching by position or company"
        name="search"
        defaultValue={search}
      />
      <Select name="jobStatus" defaultValue={jobStatus}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {["all", ...Object.values(JobStatus)].map((job) => {
            return (
              <SelectItem key={job} value={job} className="capitalize">
                {job}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <Button type="submit">Search</Button>
    </form>
  );
}
