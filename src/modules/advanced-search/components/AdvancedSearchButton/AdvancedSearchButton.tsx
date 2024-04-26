 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AdvancedSearchDialog from "../AdvancedSearchDialog/AdvancedSearchDialog";

type AdvancedSearchButtonProps = {};

function AdvancedSearchButton({}: AdvancedSearchButtonProps) {
  return (
    <>
      <AdvancedSearchDialog>
        <span className="rounded-md p-2 hover:bg-secondary flex items-center transition-colors">
          <span className="hidden sm:inline-block">{"جستجوی پیشرفته"}</span>
          <FontAwesomeIcon className="sm:mr-2 h-4 w-4" icon={faMagnifyingGlass} />
        </span>
      </AdvancedSearchDialog>
    </>
  );
}

export default AdvancedSearchButton;
