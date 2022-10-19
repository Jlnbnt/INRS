import CardGrid from "./CardGrid";

const CardGridRow = (props) => {
  return (
    <div className="pb-16">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-light dark:text-dark text-3xl">
          {props.rowName.toUpperCase()}
        </h1>
      </div>
      <CardGrid
        postType={props.type}
        searchQuery={props.searchQuery}
        graphlQLQuery={props.query}
      />
    </div>
  );
};

export default CardGridRow;
