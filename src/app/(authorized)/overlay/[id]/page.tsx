import React from "react";
import { isEmpty } from "lodash";
import PageParams from "@/lib/PageParams";

export default function Page({ params: { id }, searchParams }: PageParams) {
  const hasId = !isEmpty(id);
  return hasId ? (
    <div>
      <div>id: {id}</div>
      <div>searchParams: {JSON.stringify(searchParams)}</div>
    </div>
  ) : (
    <div>NO ID</div>
  );
}
