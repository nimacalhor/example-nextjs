
type BgShapesProps = {};

function BgShapes({}: BgShapesProps) {
  return (
    <>
      <div className="right-0 bottom-0 left-0 top-0 w-full h-full fixed -z-50 bg-background blur-2xl">
        <div className="bg-gradient-to-br from-transparent to-card rounded-full absolute w-[40rem] h-[40rem] -top-36 -left-36"></div>

        <div className="bg-gradient-to-br from-transparent to-primary/10 rounded-full absolute w-[60rem] h-[60rem] -top-[20%] -left-[15%]"></div>

        <div className="dark:hidden bg-gradient-to-bl from-background via-secondary to-secondary/80 rounded-full absolute w-[550px] h-[550px] -top-[10%] -right-[8%]"></div>

        <div className="bg-gradient-to-bl from-background via-primary/20  to-foreground/10 rounded-full absolute w-96 h-96 -top-[10%] -right-[8%]"></div>

        <div className="bg-gradient-to-t from-background to-primary/10 rounded-full absolute w-[80rem] h-[80rem] -bottom-[110%] left-1/3 ">{"receive"}</div>
      </div>
    </>
  );
}

export default BgShapes;
