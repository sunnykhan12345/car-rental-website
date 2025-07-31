const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="lds-spinner text-blue-500">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
