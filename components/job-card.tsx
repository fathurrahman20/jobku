"use client";

import { JobType } from "@/utils/types";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";
import DeleteJobBtn from "./delete-job-button";
import JobInfo from "./job-info";
import { Briefcase, CalendarDays, MapPin, RadioTower } from "lucide-react";
import { Badge } from "./ui/badge";

export default function JobCard({ job }: { job: JobType }) {
  const date = new Date(job.createdAt).toLocaleDateString();

  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>{job.position}</CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="grid grid-cols-2 mt-4 gap-4">
        <JobInfo icon={<Briefcase />} text={job.mode} />
        <JobInfo icon={<MapPin />} text={job.location} />
        <JobInfo icon={<CalendarDays />} text={date} />
        <Badge className="w-32 justify-center py-2">
          <JobInfo
            icon={<RadioTower className="w-4 h-4" />}
            text={job.status}
          />
        </Badge>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button asChild size="sm">
          <Link href={`/jobs/${job.id}`} className="capitalize">
            edit
          </Link>
        </Button>
        <DeleteJobBtn id={job.id} />
      </CardFooter>
    </Card>
  );
}
