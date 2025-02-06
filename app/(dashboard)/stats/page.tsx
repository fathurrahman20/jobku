import React from "react";
import { getStatsAction } from "@/utils/actions";

export default function StatsPage() {
  getStatsAction();
  return <div className="text-4xl">StatsPage</div>;
}
