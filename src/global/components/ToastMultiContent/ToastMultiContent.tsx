 

export type ToastContents = { title: string; description?: string };
type ToastMultiContentProps = { contents: ToastContents[] };

function ToastMultiContent({ contents }: ToastMultiContentProps) {
  return (
    <div className="space-y-3">
      {contents.map((content, i) => (
        <div className="mb-2" key={i}>
          <h3>{content.title}</h3>
          {content.description && <p className="text-xs ">{content.description}</p>}
        </div>
      ))}
    </div>
  );
}

export default ToastMultiContent;
