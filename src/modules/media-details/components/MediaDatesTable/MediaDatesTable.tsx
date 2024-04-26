import { Table, TableBody, TableCell, TableRow } from "@ui/table";

type MediaDatesTableProps = {};

function MediaDatesTable({}: MediaDatesTableProps) {
  return (
    <>
      <div className="">
        <Table className="mt-4" divClassName="overflow-visible">
          <TableBody>
            <TableRow>
              <TableCell className="text-center text-[1.05rem]">
                {" "}
                14:34 _ 1402/07/12
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center text-md">
                تاریخ ساخت پست
              </TableCell>
              <TableCell className="text-center text-[1.05rem]">
                {" "}
                14:34 _ 1402/07/12
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center text-md">تاریخ ادیت</TableCell>
              <TableCell className="text-center text-[1.05rem]">
                {" "}
                14:34 _ 1402/07/12
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default MediaDatesTable;
