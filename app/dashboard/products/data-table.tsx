"use client";

import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DataTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>CTA</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
}
