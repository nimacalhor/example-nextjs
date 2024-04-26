import Map from "@global/components/Map";
import { cn } from "@global/utils/chadcn-utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@ui/dialog";


const lat = 35.72045;
const lon = 51.427495;
const position = [lat, lon];

type MediaLocationDialogProps = {
  children: React.ReactNode;
  triggerClassName?: string;
};

function MediaLocationDialog({
  children,
  triggerClassName,
}: MediaLocationDialogProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger className={cn("", triggerClassName)}>
          {children}
        </DialogTrigger>
        <DialogContent className="max-w-[80vw] h-[70vh] md:h-[90vh]">
          <div className="w-full h-full relative">
            <Map position={position as any} zoom={13} className="rounded-lg"/>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default MediaLocationDialog;
