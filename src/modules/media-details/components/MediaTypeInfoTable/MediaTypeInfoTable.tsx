import { faFilm, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ui/table";

type MediaTypeInfoTableProps = {};

function MediaTypeInfoTable({}: MediaTypeInfoTableProps) {
  return (
    <>
      <div className="">
        <Table className="mt-10" divClassName="overflow-visible">
          <TableCaption>نوع تک رسانه های هر اسلاید</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">شماره اسلاید</TableHead>
              <TableHead className="text-center">نوع</TableHead>
              <TableHead className="text-center">{""}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-center">1</TableCell>
              <TableCell className="text-center">تصویر</TableCell>
              <TableCell className="text-center">
                <FontAwesomeIcon
                  className="h-5 w-5 text-muted-foreground"
                  icon={faImage}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center">2</TableCell>
              <TableCell className="text-center">ویدیو</TableCell>
              <TableCell className="text-center">
                <FontAwesomeIcon
                  className="h-5 w-5 text-muted-foreground"
                  icon={faFilm}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center">3</TableCell>
              <TableCell className="text-center">تصویر</TableCell>
              <TableCell className="text-center">
                <FontAwesomeIcon
                  className="h-5 w-5 text-muted-foreground"
                  icon={faImage}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default MediaTypeInfoTable;
