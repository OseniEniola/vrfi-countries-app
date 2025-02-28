
const Loading = ({ overlay = false }) => {
  return (
    <div className={`py-[222px] w-full z-index ${overlay && 'absolute bg-bg-off-white'}`}>
      <div className={'text-center flex m-auto flex-col justify-center'}>
        <div>Loading</div>
      </div>
    </div>
  );
};

export default Loading;
