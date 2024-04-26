 

type TitleProps = { engClass: string; faClass: string };

function Title({ engClass, faClass }: TitleProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className={`${engClass} select-none`}>example nextjs</h1>
      </div>
    </>
  );
}

export default Title;
