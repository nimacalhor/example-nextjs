"use client";
import { Separator } from "@/global/ui/separator";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@ui/table";
import { CriteriaItemRow } from "./CriteriaItemRow";
import { cn } from "@/global/utils/chadcn-utils";

export function SearchSettingCard({
  items,
  title,
  tableClassName,
}: {
  title: string;
  items: { key: string; allowedOperators: string[]; allowedTypes: string[] }[];
  tableClassName?: string;
}) {
  return (
    <div className="bg-card p-3 pt-5">
      <h3 className="text-lg mb-6">{title}</h3>
      <Separator />
      <Table className={cn("", tableClassName)}>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">key</TableHead>
            <TableHead className="text-center">allowed operators</TableHead>
            <TableHead className="text-center">allowed types</TableHead>
            <TableHead className="text-center"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map(({ allowedOperators, allowedTypes, key }, i) => (
            <CriteriaItemRow
              key={i}
              allowedOperators={allowedOperators}
              allowedTypes={allowedTypes}
              _key={key}
            ></CriteriaItemRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
