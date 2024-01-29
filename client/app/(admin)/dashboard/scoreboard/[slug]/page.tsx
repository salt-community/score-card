"use client";
import {
  httpGetAllAssignment,
  httpGetSaltieScoreboard,
} from "@/app/api/request";
import Scoreboard from "@/app/components/admin/scoreboard/Scoreboard";
import { Assignment, SaltieData } from "@/app/types";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [developer, setDeveloper] = useState<SaltieData>();
  const [assignment, setAssignment] = useState<Assignment[]>([]);

  const fetchBackend = async () => {
    const resDeveloper = await httpGetSaltieScoreboard(params.slug);
    setDeveloper(resDeveloper);

    const resAssignment = await httpGetAllAssignment();
    setAssignment(resAssignment);
  };

  useEffect(() => {
    fetchBackend();
  });

  console.log(developer);

  if (!developer) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }
  return <Scoreboard developer={developer} assignment={assignment} />;
}
