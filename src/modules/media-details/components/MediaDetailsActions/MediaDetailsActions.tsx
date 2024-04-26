import { Card } from "@ui/card";
import ButtonWithIcon from "@global/components/ButtonWithIcon";
import BlurContentButton from "@media/components/BlurContentButton";
import {
  faEye,
  faPager,
  faMessage,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

type MediaDetailsActionsProps = {};

function MediaDetailsActions({}: MediaDetailsActionsProps) {
  return (
    <>
      <Card className="h-fit flex-wrap w-full p-3 flex justify-start items-center gap-2">
        <BlurContentButton />
        <ButtonWithIcon icon={faEye} text="مشاهده تصویر" />
        <ButtonWithIcon icon={faPager} text="کپی لینک صفحه" />
        <ButtonWithIcon icon={faDownload} text="دانلود مدیا" />
        <ButtonWithIcon icon={faMessage} text="کپی متن مدیا" />
      </Card>
    </>
  );
}

export default MediaDetailsActions;
