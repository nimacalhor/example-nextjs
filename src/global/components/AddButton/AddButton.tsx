import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AddButtonProps = { moduleName: string; verb?: string };

function AddButton({ moduleName, verb = "ثبت" }: AddButtonProps) {
  return (
    <>
      <span className="rounded-md p-2 hover:bg-secondary flex items-center transition-colors">
        <span className="hidden sm:inline-block">
          {verb} {moduleName}
        </span>
        <FontAwesomeIcon className="sm:mr-2 w-4 h-4" icon={faPlus} />
      </span>
    </>
  );
}

export default AddButton;